import React from 'react'

export default function ButtonAdmin({onClick, name}) {
  return (
    <>
    <button type='button' className='w-[70px] h-10 flex justify-center items-center font-semibold bg-[#202121] text-slate-300 rounded-lg 
    ' onClick={onClick}>{name}</button>
    </>
  )
}
