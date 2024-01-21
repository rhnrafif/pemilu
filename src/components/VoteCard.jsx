import React from 'react'
import {FaTrash} from 'react-icons/fa'

export default function VoteCard({namaKetua, fotoKetua, namaWakil, fotoWakil, onClick}) {
  return (
    <div className='w-[95%] h-full flex flex-col gap-3 bg-slate-300 rounded-md justify-center items-start ' onClick={onClick}>
        <div className='w-full flex justify-center items-start mt-2 '>
            <div className='w-[50%] flex flex-col justify-center items-center gap-1'>
                <h1 className='font-medium text-sm text-center'>Ketua</h1>
                <p className='max-w-[80%] text-sm font-bold text-ellipsis text-center'>{namaKetua}</p>            
            </div>
            <div className=' w-[50%] flex flex-col justify-center items-center gap-1'>
                <h1 className='font-medium text-sm text-center'>Wakil Ketua</h1>
                <p className='max-w-[80%] text-sm font-bold text-ellipsis text-center'>{namaWakil}</p>            
            </div>
        </div>
        <div className='flex justify-center items-cente'>
                <img src={fotoKetua} className='w-[75%] rounded -mx-10' alt="" />
                <img src={fotoWakil} className='w-[75%] rounded -mx-10' alt="" />
        </div>
    </div>
  )
}
