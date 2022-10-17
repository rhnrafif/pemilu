import React from 'react'

export function Sekeleton() {
  return (
    <div className='w-[320px] h-[150px] bg-[#dbdbdb] rounded-md gap-2 mx-auto shadow-lg flex justify-center items-center p-2'>
        
        <div className='w-[70%] h-[90%] bg-[#959595] rounded-md animate-pulse'></div>
        <div className='w-[25%] h-[90%] bg-[#959595] rounded-md animate-pulse'></div>
        
    </div>
  )
}

export function SekeletonBlack(){
    return (
    <div className='w-[320px] h-[150px] bg-[#3a3a3a] rounded-md gap-2 mx-auto shadow-lg flex justify-center items-center p-2'>
        
        <div className='w-[70%] h-[90%] bg-[#6a6a6a] rounded-md animate-pulse'></div>
        <div className='w-[25%] h-[90%] bg-[#6a6a6a] rounded-md animate-pulse'></div>
        
    </div>
  )
}