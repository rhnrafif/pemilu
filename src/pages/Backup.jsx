import React, { useState, useEffect } from 'react'
import Button, {ButtonRefresh} from '../components/Button'
import CardSchool from '../components/CardSchool'
import JudulDashboard from '../components/JudulDashboard'
import axios from 'axios'
import JudulTabelDashboard from '../components/JudulTabelDashboard'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import ButtonAdmin from '../components/ButtonAdmin'
import {getDatabase, ref, onValue} from 'firebase/database'

export default function Dashboard() {

  // state
  const [school, setSchool] = useState([]) //state data api backend
  const [data, setData] = useState()

  // clc
  useEffect(()=>{
    
    const db = getDatabase()

    const starCountRef = ref(db, 'votesmp')
    onValue(starCountRef, (snapshot)=>{
      const item = snapshot.val()

      // console.info(item)
      setData(item)
    }) 

    if(data){
      console.info(data)
    }
    
    
    
    
    // axios.get('http://localhost:3000/vote')
    // .then((res)=>{
      
    //   setSchool(res.data)

    // })
    // .catch((err)=>{
    //   console.error(err)
    // })

  },[])

  // state
  const [modal, setModal] = useState(false) // state menampilkan modal
  const [succes, setSucces] = useState('') //state alert tambah dan kurang vote
  const [confirm, setConfirm] = useState(false) //state condt render modal tambah dan hapus
  const [dataSekolah, setDataSekolah] = useState('') //state oper data ke modal
  
  // navigate
  const navigate = useNavigate()

  // funct hande vote
  const handleVote = (e)=>{
    setModal(!modal)
    
    // hit api utk get data backend click
    axios.get(`http://localhost:3000/vote/${e}`)
    .then((res)=>{

      let sekolah = res.data.sekolah
      let score = res.data.score
      let id = res.data.id 
      
        // hit api utk vote
        axios.put(`http://localhost:3000/vote/${id}`, {
          sekolah : sekolah,
          score : score + 1
        })
        .then(()=>{
          setSucces('Berhasil Tambah Vote !')
          setDataSekolah (sekolah)
        })
        .catch((err)=>{
          console.error(err)
        })

    })
    .catch((err)=>{
      console.error(err)
    })

  }


  // funct hanlde devote
  const handleMinus = (e)=>{
    setModal(!modal)

    axios.get(`http://localhost:3000/vote/${e}`)
    .then((res)=>{

      let sekolah = res.data.sekolah
      let score = res.data.score
      let id = res.data.id 
      
        
          // alert(`Vote ${sekolah} ?`)
        axios.put(`http://localhost:3000/vote/${id}`, {
          sekolah : sekolah,
          score : score - 1
        })
        .then(()=>{
          setConfirm(true)
          setSucces('Berhasil Hapus Vote !')
          setDataSekolah (sekolah)
          
        })
        .catch((err)=>{
          console.error(err)
        })
    
    })
    .catch((err)=>{
      console.error(err)
    })


  }

  return (
    <>
      <div className='container max-w-lg mx-auto pt-8 relative'>
        <JudulDashboard />
        <div className='flex justify-center gap-3 mt-4 mb-5'>
              <Button name={'SMP/MTs'} link={'/dashboard'}/>
              <ButtonRefresh name={'Refresh'} click={()=>{
              window.location.reload()
            }} />
              <Button name={'SD/MI'} link={'/dashboard/sd'}/>
        </div>
        <div className='w-[350px] h-full bg-[#202121] flex flex-col items-center py-6 rounded-md gap-2 mx-auto cursor-pointer'>
          <JudulTabelDashboard name={'SMP/MTs Se-derajat'} />
          
          {school.map((e)=>{
            
            return(
              <button className='w-full h-full flex justify-center' key={e.id}  >
                <CardSchool score={e.score} name={e.sekolah} onClick={()=>{
                  handleVote(e.id)
                }} onMinus={()=>{
                  handleMinus(e.id)
                }} />
              </button>
            )
          })}
        </div>
        
      </div>
      
      {modal && (
          <div className='w-screen h-full absolute top-0 left-0 z-10 bg-[#00000097] text-white mx-auto flex justify-center items-center'>
            {!confirm && (
              <div className='h-[200px]'>
                <Modal name={dataSekolah} succes={succes} onClick={()=>{
                  window.location.reload()
                }} />
              </div>
            )}
            {confirm && (
              <div className='h-[200px]'>
                <Modal name={dataSekolah} succes={succes} onClick={()=>{
                  window.location.reload()
                }} />
              </div>
            )}
          </div>
      )}
      
      <div className='flex gap-5 container max-w-lg mx-auto pt-2 relative justify-center'>
      <div className='flex justify-center items-center my-5'>
            <ButtonAdmin onClick={()=>{
              navigate('/')
            }} name={'Rank'} />
      </div>
      <div className='flex justify-center items-center my-5'>
            <ButtonAdmin onClick={()=>{
              navigate('/form')
            }} name={'Tambah Sekolah'} />
      </div>
      </div>

    </>
  )
}
