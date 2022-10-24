import React from 'react'

export default function Modal({name, onClick, succes}) {
  return (
    <>
        <div className='w-[280px] h-[180px] py-4 bg-slate-300 flex flex-col gap-4 justify-center items-center rounded-md'>
          
            <h1 className='text-xl text-[#212121]'>{succes}</h1>

            <h1 className='text-[#212121] text-xl font-semibold'>{name}</h1>
            
            <div className='w-32 h-10 flex justify-center items-center rounded-md bg-sky-600 text-white cursor-pointer mt-4' onClick={onClick}>OK</div>
        </div>
    </>
  )
}
