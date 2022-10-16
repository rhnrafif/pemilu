import React from 'react'

export default function ButtonAdmin({onClick, name}) {
  return (
    <>
    <button type='button' className='w-[180px] h-10 flex justify-center items-center bg-[#202121] text-sky-500 rounded-lg 
    ' onClick={onClick}>{name}</button>
    </>
  )
}
