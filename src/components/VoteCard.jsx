import React from 'react'
import {FaTrash} from 'react-icons/fa'

export default function VoteCard({namaKetua, fotoKetua, namaWakil, fotoWakil, onClick}) {
  return (
    <div className='w-[95%] h-full py-5 flex gap-3 bg-slate-300 rounded-md justify-center items-start' onClick={onClick}>
        <div className='w-[50%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg' >
            <h1 className='font-medium'>Ketua</h1>
            <div className='w-full h-full flex justify-center items-center'>
                <img src={fotoKetua} className='max-w-[80%] rounded' alt="" />
            </div>
            <p className='max-w-[80%] text-lg font-semibold text-ellipsis'>{namaKetua}</p>            
        </div>
        <div className='w-[50%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg' >
            <h1 className='font-medium'>Wakil Ketua</h1>
            <div className='w-full h-full flex justify-center items-center'>
                <img src={fotoWakil} className='max-w-[80%] rounded' alt="" />
            </div>
            <p className='max-w-[90%] text-lg font-semibold text-ellipsis'>{namaWakil}</p>
            
        </div>
    </div>
  )
}
