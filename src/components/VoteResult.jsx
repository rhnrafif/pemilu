import React from 'react'

export default function VoteResult({namaKetua, fotoKetua, namaWakil, fotoWakil, score, onclick}) {
  return (
    <div className='w-[95%] h-full py-3 px-3 flex gap-1 bg-slate-300 rounded-md justify-center items-start relative mx-auto'>
        <div className='w-[40%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg' >
            <h1 className='font-medium'>Ketua</h1>
            <div className='w-full h-full flex justify-center items-center'>
                <img src={fotoKetua} className='max-w-[80%] rounded' alt="" />
            </div>
            <p className='max-w-[80%] text-lg font-semibold text-ellipsis text-center'>{namaKetua}</p>            
        </div>
        <div className='w-[40%] flex flex-col gap-2 justify-center items-center  text-[#202121] rounded-lg' >
            <h1 className='font-medium'>Wakil Ketua</h1>
            <div className='w-full h-full flex justify-center items-center'>
                <img src={fotoWakil} className='max-w-[80%] rounded' alt="" />
            </div>
            <p className='max-w-[90%] text-lg font-semibold text-ellipsis text-center'>{namaWakil}</p>
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
