import React from 'react'

export default function VoteResult({namaKetua, fotoKetua, namaWakil, fotoWakil, score, onclick}) {
  return (
    <div className='w-[95%] h-full py-3 px-3 flex gap-1 bg-slate-300 rounded-md justify-center items-start relative mx-auto'>
        <div className='w-full flex flex-col justify-center items-center'>
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
                    <img src={fotoKetua} className='w-[70%] rounded -mx-10' alt="" />
                    <img src={fotoWakil} className='w-[70%] rounded -mx-10' alt="" />
            </div>
        </div>
        <div className='w-[20%] h-[30%] flex flex-col gap-2 justify-center items-center bg-[#212121] my-auto  text-[#202121] p-2 rounded-md' >
            <h1 className='text-white'>Total</h1>
            <p className='max-w-[90%] text-xl font-bold text-white text-ellipsis'>{score}</p>
        </div>
        <button className='absolute bottom-2 right-3 bg-red-600 rounded px-2' onClick={onclick}>
            <p className='text-white'>Delete</p>
        </button>
        
    </div>
  )
}
