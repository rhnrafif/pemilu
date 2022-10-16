import React, {useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getDatabase, ref, set} from 'firebase/database'
import {ImCross} from 'react-icons/im'
import {InputPeserta} from '../user/InputProvider'
import {SmpInput} from '../user/SmpProvider'

export function FormSekolah() {

  // global state
  const [isInput, setIsInput] = useContext (InputPeserta)
  const [isSmp, setIsSmp] = useContext(SmpInput)

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    
    e.preventDefault()

    const nama = e.target.nama.value
    const id = e.target.id.value
  
    if (!nama || !id){
      alert('Silahkan isi data dengan benar !')
      return
    }
    

    const db = getDatabase()
    set(ref(db, 'votesmp/' + nama ),{
      id : id,
      sekolah : nama,
      score : 0
    })
    e.target.nama.value = ''
    alert('Berhasil menambah data')
    setIsInput(false)
    setIsSmp(false)
    navigate('/')

  }




  return (
    <div className='h-screen flex gap-5 container max-w-md mx-auto pt-2 relative justify-center items-center'>
        <form className=' w-[350px] bg-[#202121] p-5 flex flex-col items-center gap-5 text-white rounded-md relative px-4' autoComplete='off' onSubmit={handleSubmit} >

          <div className='absolute top-1 right-0 text-red-500 cursor-pointer' onClick={()=>{
            setIsInput(false)
            setIsSmp(false)
            navigate('/')
          }}>
          <ImCross className='w-6' />
          </div>

            <h1 className='text-lg font-semibold'>Tulis Nama Sekolah / Pangkalan </h1>
            <div className='w-[340px] flex flex-col  gap-4 items-center'>
                <label htmlFor="id" className='text-lg'>Nomor Peserta</label>
                <input type="number" id='id' className='h-8 rounded-sm text-black p-2 text-center' placeholder='Wajib isi dengan angka' />
            </div>
            <div className=' w-[340px] flex flex-col gap-4 items-center'>
                <label htmlFor="nama" className='text-lg'>Nama Sekolah</label>
                <input type="text" id='nama' className='h-8 rounded-sm text-black p-2' />
            </div>
            <div className='mt-3'>
                <button className='w-[120px] h-10 bg-sky-600 rounded-md' type='submit' >Tambah</button>
            </div>
        </form>
    </div>
  )
}

export function FormSekolah2() {
  // global state
  const [isInput, setIsInput] = useContext (InputPeserta)
  const [isSmp, setIsSmp] = useContext(SmpInput)

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    
    e.preventDefault()

    const nama = e.target.nama.value
    const id = e.target.id.value
  
    if (!nama){
      return
    }
    

    const db = getDatabase()
    set(ref(db, 'votesd/' + nama ),{
      id : id,
      sekolah : nama,
      score : 0
    })
    e.target.nama.value = ''
    alert('Berhasil menambah data')
    setIsInput(false)
    setIsSmp(false)
    navigate('/')

  }




  return (
    <div className='h-screen flex gap-5 container max-w-md mx-auto pt-2 relative justify-center items-center'>
        <form className=' w-[350px] bg-[#202121] p-5 flex flex-col items-center gap-5 text-white rounded-md relative' autoComplete='off' onSubmit={handleSubmit} >

          <div className='absolute top-1 right-0 text-red-500 cursor-pointer' onClick={()=>{
            setIsInput(false)
            setIsSmp(false)
            navigate('/')
          }}>
          <ImCross className='w-6' />
          </div>

            <h1 className='text-lg font-semibold'>Tulis Nama Sekolah / Pangkalan </h1>
            <div className='w-[340px] flex gap-4 flex-col items-center'>
                <label htmlFor="id" className='text-lg'>Nomor Peserta</label>
                <input type="number" id='id' className='h-8 rounded-sm text-black p-2 text-center' />
            </div>
            <div className='w-[340px] flex-col flex gap-4 items-center'>
                <label htmlFor="nama" className='text-lg'>Nama Sekolah</label>
                <input type="text" id='nama' className='h-8 rounded-sm text-black p-2' />
            </div>
            <div className='mt-3'>
                <button className='w-[120px] h-10 bg-sky-600 rounded-md' type='submit' >Tambah</button>
            </div>
        </form>
    </div>
  )
}

