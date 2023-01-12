import React from 'react'

export default function Modal({namaKetua, namaWakil, onClick, succes}) {
  return (
    <>
        <div className='w-[280px] h-[180px] py-4 bg-slate-300 flex flex-col gap-4 justify-center items-center rounded-md'>
          
            <h1 className='text-lg font-semibold text-[#212121]'>{succes}</h1>

            <div className='w-[80%] h-[120px] flex flex-col justify-center items-center outline outline-sky-700 rounded  py-2'>
              <p className='text-[#212121] font-semibold mx-auto '>{namaKetua}</p>
              <p className='text-[#212121] font-semibold text-xs mx-auto '>&</p>
              <p className='text-[#212121] font-semibold mx-auto '>{namaWakil}</p>
            </div>

            {/* <div className='w-32 h-10 flex justify-center items-center rounded-md bg-sky-600 text-white cursor-pointer mt-4' onClick={onClick}>OK</div> */}
            <div className='w-full h-10 flex justify-center items-center rounded-md text-black cursor-pointer animate-pulse'>
              Mohon tunggu . . .</div>
        </div>
    </>
  )
}
