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
    console.info(nomor)
    const db = getDatabase()

    set(ref(db, 'jayabuana/' + nomor ),{
      nomor : nomor,
      namaKetua : namaKetua,
      fotoKetua : fotoKetua,
      namaWakil : namaWakil,
      fotoWakil : fotoWakil,
      score : score + 1
    })
    .then((res)=>{
      setSucces('Berhasil Memilih !')
      setDataPaslon({
      nomor : nomor,
      namaKetua : namaKetua,
      namaWakil : namaWakil
      })
      setTimeout(()=>{location.reload()}, 5000)
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
      if(admin !== 'rafif'){
        alert('Maaf, akses hanya bisa untuk Panitia')
        return
      }

      localStorage.setItem('user', JSON.stringify(admin))
      setUser(true)
      navigate('/')
  }


  return (
    <>
      <div className='flex justify-center items-center mt-5 md:absolute md:top-0 md:right-4 '>
            <ButtonAdmin onClick={handleLogin} name={'ADMIN'} />
       </div>
      <div className='container max-w-7xl mx-auto pb-8 px-5'>
        
        <JudulDashboard />
        <div className='w-full h-full flex flex-col justify-center items-center gap-4 md:flex-row'>
        
          {data?.map((e)=>(
            <div className='w-[280px] h-full bg-[#202121] flex flex-col items-center py-4 rounded-md gap-3 mx-auto cursor-pointer px-2' key={e.nomor} onClick={()=>{handleVote(e.nomor, e.namaKetua, e.namaWakil, e.fotoKetua, e.fotoWakil, e.score)}}>
              <>
              <div className='text-white rounded-full flex justify-center items-center mx-auto'>
                <p className='text-white text-5xl font-bold '>{e.nomor}</p>          
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
        </div>
      </div>
      
      {modal && (
          <div className='w-screen h-full fixed top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center'>
            <div className='h-[200px]'>
                <Modal namaKetua={dataPaslon.namaKetua} namaWakil={dataPaslon.namaWakil} succes={succes} onClick={()=>{
                  setModal(!modal)
                }} />
              </div>
          </div>
      )}
      
      
    </>
  )
}
