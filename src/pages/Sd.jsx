import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {ButtonLogout} from '../components/Button'
import ButtonAdmin from '../components/ButtonAdmin'
import DataTable from '../components/DataTable'
import Judul from '../components/Judul'
import TabelIsi from '../components/TabelIsi'
import { useNavigate } from 'react-router-dom'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getDatabase, ref, onValue} from 'firebase/database'
import {UserSekolah} from '../user/SekolahProvider'
import {UserSet} from '../user/User'
import { Sekeleton } from '../components/Sekeleton'
import VoteResult from '../components/VoteResult'

export default function Sd() {

  // state
  const [data, setData] = useState()
  const [vote, setVote] = useState([])
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()
  
  // state global
  const [isSekolah, setIsSekolah] = useContext(UserSekolah)
  const [user, setUser] = useContext(UserSet)


  // clc
  useEffect(()=>{

    // validasi session user lewat localstorage
    setUser(JSON.parse(localStorage.getItem('user')))
    
    const db = getDatabase()

    const starCountRef = ref(db, 'jayabuana')
    onValue(starCountRef, (snapshot)=>{
      const item = snapshot.val()

      // urutkan data berdsarkan score
      let voted = Object.values(item)

      let vote = voted.slice(0)
      vote.sort((a,b)=>{
        return b.score - a.score
      })

      setData(vote)
      setIsLogin(false)
    }) 


  },[])


  return (
    <div className='container max-w-md mx-auto pt-8 px-8'>
       <div className='flex justify-center gap-4 mt-4 mb-5'>
            <h1 className='text-2xl font-semibold text-black text-center'>Hasil Pemilihan Ketua OSIS 2023</h1>
       </div>

        {isLogin && (
          <Sekeleton />
        )}

        {!isLogin && (
          <div className='w-full  max-w-[400px] bg-slate-100  flex flex-col items-center mx-auto rounded-lg pb-4 pt-3 gap-3 '>
              <>
                {data?.map((e)=>(
                  
                  <VoteResult key={e.nomor} namaKetua={e.namaKetua} namaWakil={e.namaWakil} fotoKetua={e.fotoKetua} fotoWakil={e.fotoWakil} score={e.score}/>
                ))}
              </>
          </div>
        )}
      


       <div className='flex justify-center items-center my-5'>
            <ButtonLogout name={"LOGOUT"} click={()=>{
              localStorage.clear()
              navigate('/')
              window.location.reload()
            }} />
       </div>
    </div>
  )
}
