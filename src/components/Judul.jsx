import React from 'react'

export default function Judul({name}) {
  return (
    <div className='pb-2 flex flex-col items-center justify-center'>
          <h1 className='text-[#202121] font-normal'>Rank Vote Best Instagram</h1>
          <h1 className='text-[#202121] font-medium'>{name}</h1>
    </div>
  )
}
