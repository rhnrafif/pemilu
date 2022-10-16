import React from 'react'
import {FaTrash} from 'react-icons/fa'

export default function CardSchool({score, name, onClick, onMinus}) {
  return (
    <div className='w-[95%] h-12 flex ' >
        <div className='w-[80px] h-12 bg-sky-600 text-[#202121] font-medium rounded-l-md flex justify-center items-center text-lg'>
            {score}
        </div>
        <div className='flex-1 flex justify-center items-center bg-slate-300 text-[#202121]' onClick={onClick}>
            {name}
        </div>
        <div className='w-[40px] flex justify-center items-center bg-orange-600 text-white rounded-r-md' onClick={onMinus}>
          <FaTrash />
        </div>
    </div>
  )
}
