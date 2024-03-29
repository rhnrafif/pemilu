import React, { useState, useEffect, useContext } from 'react'
import JudulDashboard from '../components/JudulDashboard'
import Modal from '../components/Modal'
import ButtonAdmin from '../components/ButtonAdmin'
import {getDatabase, ref, onValue, set} from 'firebase/database'
import {UserAdmin} from '../user/AdminProvider'
import {InputPeserta} from '../user/InputProvider'
import {SmpInput} from '../user/SmpProvider'
import { UserSet } from '../user/User'
import VoteCard from '../components/VoteCard'
import { useNavigate } from 'react-router-dom'
import { Sekeleton, SekeletonBlack } from '../components/Sekeleton'
import ModalConfirm from '../components/ModalConfirm'

export default function Dashboard() {

  // state
  const [data, setData] = useState() //state data api backend
  const [modal, setModal] = useState(false) // state menampilkan modal
  const [succes, setSucces] = useState('') //state alert tambah dan kurang vote
  const [confirm, setConfirm] = useState(false) //state condt render modal tambah dan hapus
  const [dataPaslon, setDataPaslon] = useState({}) //state oper data ke modal
  const [isLogin, setIsLogin] = useState(true) //state loading
  const [redirect, serRedirect] = useState(0)


  // global state
  const [isAdmin, setIsAdmin] = useContext(UserAdmin)
  const [user, setUser] = useContext(UserSet)
  const navigate = useNavigate()

  // clc
  useEffect(()=>{
    
    const db = getDatabase()
    

    const starCountRef = ref(db, 'jayabuana')
    onValue(starCountRef, (snapshot)=>{
      const item = snapshot.val()

      // const item2 = Object.values(item)
      setData(Object.values(item))
      setIsLogin(false)
    })

  },[])


  // funct hande vote
  const handleVote = (nomor, namaKetua, namaWakil, fotoKetua, fotoWakil, score)=>{
    setModal(!modal)
    setConfirm(true)
    
    const db = getDatabase()
    

    set(ref(db, 'jayabuana/' + nomor ),{
      nomor : nomor,
      namaKetua : namaKetua,
      namaWakil : namaWakil,
      fotoKetua : fotoKetua,
      fotoWakil : fotoWakil,
      score : score + 1
    })
    .then((res)=>{
      setSucces('Terimakasih telah memilih')
      setTimeout(()=>{setConfirm(false)}, 3000)      
    })
    .catch((err)=>{
      console.error(err)
    })

  }

  const handleLogin =()=>{
    
    // validasi awal
    if(user){
      navigate('/')
      setUser(true)
      return
    }

    //validasi kedua
      let admin = prompt('Mohon tulis Identitas Anda ?')
      if(admin !== 'AlvinHan76'){
        alert('Maaf, akses hanya bisa untuk Panitia')
        return
      }

      localStorage.setItem('user', JSON.stringify(admin))
      setUser(true)
      navigate('/')
  }


  return (
    <>
      <>
        <div className='flex justify-center items-center mt-[5px] sm:mt-[5px] md:absolute md:bottom-2 md:right-2 '>
            <ButtonAdmin onClick={handleLogin} name={'ADMIN'} />
       </div>
      <div className='container max-w-6xl mx-auto pb-8 py-2 px-5 flex flex-col items-center justify-center relative'>
        {/* <div className='flex flex-col justify-center gap-1 items-center mt-2 md:flex-row md:gap-2'>
          <div className='h-[30px] bg-red-700 px-1 rounded flex justify-center items-center'>
            <h1 className='font-semibold text-base text-white'>Note !</h1>
          </div>
          <div className='p-2 rounded'>
            <p className='text-sm text-center'>Cukup klik <span className='font-semibold'> SEKALI SAJA </span>  pada foto/nomor/bingkai calon untuk memilih kandidat</p>
          </div>
        </div>
        <JudulDashboard /> */}
        
        <div className='w-full flex flex-col sm:flex-row justify-center items-center sm:pr-[80px] md:pr-0'>
          <div className='w-fit h-fit flex flex-row justify-center sm:mr-5 md:justify-start items-center gap-3'>
            <div className='max-w-[30%] sm:max-w-[15%] md:max-w-[15%]'>
              <img src="https://hqnskqdwchhmelszdjer.supabase.co/storage/v1/object/public/jbpemilu/JBLogo.png" alt="" />
            </div>
            <div className='max-w-[35%] sm:max-w-[15%] md:max-w-[20%]'>
              <img src="https://hqnskqdwchhmelszdjer.supabase.co/storage/v1/object/public/jbpemilu/OsisLogow.png" alt="" />
            </div>
          </div>
          <div className='w-[50%] my-2 max-w-[80%] sm:max-w-[70%] md:max-w-[60%]'>
            <img src="https://hqnskqdwchhmelszdjer.supabase.co/storage/v1/object/public/jbpemilu/LogoJayaBuanaElection2024w.png" alt="" />
          </div>
        </div>

        <div className='w-full flex flex-col justify-center items-center my-6 gap-2 px-7'>
            <p className='font-bold text-4xl text-center'>Pilih Calon Ketua Dan Wakil Ketua Pilihanmu!</p>
            <p className='font-semibold text-lg text-red-500'>Suara Anda, Suara Masa Depan</p>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4 md:mt-[20px] md:flex-row md:items-start md:mb-5'>
          {isLogin && (
            <>
              <SekeletonBlack />
              <SekeletonBlack />
              <SekeletonBlack />
              <SekeletonBlack />
            </>
        )}
        {!isLogin && (
          <>
          
          {data?.map((e)=>(
            <div className='w-[280px] h-full bg-[#202121] flex flex-col items-center py-4 rounded-md gap-2 mx-auto cursor-pointer md:w-[300px]' key={e.nomor} onClick={()=>{
              setModal(!modal)
              setDataPaslon({
                nomor : e.nomor,
                namaKetua : e.namaKetua,
                namaWakil : e.namaWakil,
                fotoKetua : e.fotoKetua,
                fotoWakil : e.fotoWakil,
                score : e.score
                })
            }}>
              <>
              <div className='text-white rounded-full flex justify-center items-center mx-auto'>
                <p className='text-white text-4xl font-bold '>{e.nomor}</p>          
              </div>
              <VoteCard 
                fotoKetua={e.fotoKetua} 
                namaKetua={e.namaKetua} 
                fotoWakil={e.fotoWakil}
                namaWakil={e.namaWakil}
                />                             
              </>
            </div>
          ))}
          </>
        )}
        
                             
        </div>
        
      </div>
      </>

      {confirm && (
            <div className='w-screen h-full fixed top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center'>
              <div className='h-[200px]'>
                  <Modal namaKetua={dataPaslon.namaKetua} namaWakil={dataPaslon.namaWakil} succes={succes} />
                </div>
            </div>
        )}      
        
      {modal && (
          <>
          
          <div className='w-screen h-full fixed top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center'>
            <div className='h-[200px]'>
              <ModalConfirm confirmasi={"Sudah yakin pilih ?"} 
                namaKetua={dataPaslon?.namaKetua} 
                namaWakil={dataPaslon?.namaWakil}
                onClickYes={()=>{
                  handleVote(dataPaslon.nomor, dataPaslon.namaKetua, dataPaslon.namaWakil, dataPaslon.fotoKetua, dataPaslon.fotoWakil ,dataPaslon.score)
                }}
                onClickNo={()=>{
                  setModal(!modal)
                }}
                />                
              </div>
          </div>            
          </>
      )}     

    </>
  )
}
