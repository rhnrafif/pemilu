import React, { useState, useEffect, useContext } from 'react'
import {ButtonLogout} from '../components/Button'
import { useNavigate } from 'react-router-dom'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getDatabase, ref, onValue, set} from 'firebase/database'
import {UserSekolah} from '../user/SekolahProvider'
import {UserSet} from '../user/User'
import { Sekeleton } from '../components/Sekeleton'
import VoteResult from '../components/VoteResult'

export default function Sd() {

  // state
  const [data, setData] = useState()
  const [vote, setVote] = useState([])
  const [isLogin, setIsLogin] = useState(true)
  const [totalSuara, setTotalSuara] = useState(0)
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

      //jumlah suara
      let total = 0;
      vote.map((e)=>{
        total += e.score
      })
      setTotalSuara(total)
    }) 


  },[])

  //handle devote by admin
  const handleDelete = (nomor, namaKetua, namaWakil, fotoKetua, fotoWakil, score)=>{
    
    const db = getDatabase()

    set(ref(db, 'jayabuana/' + nomor ),{
      nomor : nomor,
      namaKetua : namaKetua,
      namaWakil : namaWakil,
      fotoKetua : fotoKetua,
      fotoWakil : fotoWakil,
      score : (score <= 0) ? 0 : score - 1
    })
    .then((res)=>{

    })
    .catch((err)=>{
      console.error(err)
    })

  }


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
                  
                    <VoteResult key={e.nomor} 
                    namaKetua={e.namaKetua} 
                    namaWakil={e.namaWakil} 
                    fotoKetua={e.fotoKetua} 
                    fotoWakil={e.fotoWakil} 
                    score={e.score}
                    onclick={()=>{
                      handleDelete(e.nomor, e.namaKetua, e.namaWakil, e.fotoKetua, e.fotoWakil, e.score)}}
                    />
                  
                ))}
                <div className='mt-4'>
                  <h1 className='text-lg'>Total Suara Terkumpul : <span className='font-semibold'> {totalSuara}</span></h1>
                </div>
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
