import React from 'react'

export default function ButtonAdmin({onClick, name}) {
  return (
    <>
    <button type='button' className='w-[65px] h-8 flex justify-center items-center font-semibold bg-[#202121] text-white rounded-lg 
    ' onClick={onClick}>{name}</button>
    </>
  )
}
