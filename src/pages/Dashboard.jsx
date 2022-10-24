import React, { useState, useEffect, useContext } from 'react'
import Button, {ButtonRefresh, ButtonLogout} from '../components/Button'
import CardSchool from '../components/CardSchool'
import JudulDashboard from '../components/JudulDashboard'
import JudulTabelDashboard from '../components/JudulTabelDashboard'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import ButtonAdmin from '../components/ButtonAdmin'
import {getDatabase, ref, onValue, set} from 'firebase/database'
import {UserAdmin} from '../user/AdminProvider'
import {InputPeserta} from '../user/InputProvider'
import {SmpInput} from '../user/SmpProvider'
import {Sekeleton, SekeletonBlack} from '../components/Sekeleton'

export default function Dashboard() {

  // state
  const [data, setData] = useState() //state data api backend
  const [modal, setModal] = useState(false) // state menampilkan modal
  const [succes, setSucces] = useState('') //state alert tambah dan kurang vote
  const [confirm, setConfirm] = useState(false) //state condt render modal tambah dan hapus
  const [dataSekolah, setDataSekolah] = useState('') //state oper data ke modal
  const [isLogin, setIsLogin] = useState(true) //state login
  const navigate = useNavigate() //navigate

  // global state
  const [isAdmin, setIsAdmin] = useContext(UserAdmin)
  const [isInput, setIsInput] = useContext (InputPeserta)
  const [isSmp, setIsSmp] = useContext(SmpInput)

  // clc
  useEffect(()=>{
    
    const db = getDatabase()

    const starCountRef = ref(db, 'votesmp')
    onValue(starCountRef, (snapshot)=>{
      const item = snapshot.val()

      // const item2 = Object.values(item)
      setData(Object.values(item))
      setIsLogin(false)
    }) 
    

  },[])


  // funct hande vote
  const handleVote = (id, sekolah, score)=>{
    
    setModal(!modal)

    const db = getDatabase()

    set(ref(db, 'votesmp/' + sekolah ),{
      id : id,
      sekolah : sekolah,
      score : score + 1
    })
    .then((res)=>{
      setSucces('Berhasil Tambah Vote !')
      setDataSekolah (sekolah)
    })
    .catch((err)=>{
      console.error(err)
    })

  }


  // funct hanlde devote
  const handleMinus = (id, sekolah, score)=>{
    setModal(!modal)

    const db = getDatabase()

    set(ref(db, 'votesmp/' + sekolah ),{
      id : id,
      sekolah : sekolah,
      score : score - 1
    })
    .then((res)=>{
      setSucces('Berhasil Kurangi Vote !')
      setDataSekolah (sekolah)
    })
    .catch((err)=>{
      console.error(err)
    })


  }

  return (
    <>
      <div className='container max-w-md mx-auto pt-8 '>
        <JudulDashboard />
        <div className='flex justify-center gap-2 mt-4 mb-5'>
              <Button name={'SMP/MTs'} link={'/'} click={()=>{
                setIsAdmin(false)
                navigate('/')
              }} />
              <ButtonRefresh name={'Refresh'} click={()=>{
              window.location.reload()
            }} />
              <Button name={'SD/MI'} link={'/'} click={()=>{
                setIsAdmin(true)
                navigate('/')
              }}/>
        </div>

        {isLogin && (
            <SekeletonBlack/>
          )}

          {!isLogin && (
        <div className='w-[350px] h-full bg-[#202121] flex flex-col items-center py-6 rounded-md gap-2 mx-auto cursor-pointer px-2'>
            <>
              <JudulTabelDashboard name={'SMP/MTs Se-derajat'} />
              
              {data?.map((e)=>{
                
                return(
                  <button className='w-full h-full flex justify-center' key={e.id}  >
                    <CardSchool score={e.score} name={e.sekolah} onClick={()=>{
                      handleVote(e.id, e.sekolah, e.score)
                    }} onMinus={()=>{
                      handleMinus(e.id, e.sekolah, e.score)
                    }} />
                  </button>
                )
              })}
            </>
        </div>
          )}
          
        
      </div>
      
      {modal && (
          <div className='w-screen min-h-screen h-full fixed top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center'>
            {!confirm && (
              <div className='h-[200px]'>
                <Modal name={dataSekolah} succes={succes} onClick={()=>{
                  setModal(!modal)
                  
                }} />
              </div>
            )}
            {confirm && (
              <div className='h-[200px]'>
                <Modal name={dataSekolah} succes={succes} onClick={()=>{
                  setModal(!modal)
                }} />
              </div>
            )}
          </div>
      )}
      
      <div className='flex gap-5 container max-w-lg mx-auto pt-2 relative justify-center'>
      
      <div className='flex justify-center items-center my-5'>
            <ButtonAdmin onClick={()=>{
              setIsInput(true)
              setIsSmp(true)
              navigate('/')
            }} name={'Tambah SMP/MTs'} />
      </div>
      <div className='flex justify-center items-center my-5'>
            <ButtonLogout name={'Logout'} click={()=>{
              localStorage.clear()
              navigate('/')
              window.location.reload()
            }} />
      </div>
      </div>

    </>
  )
}
