import React from 'react'

export default function Modal({namaKetua, namaWakil, onClick, succes}) {
  return (
    <>
        <div className='w-[280px] h-[180px] py-4 bg-slate-300 flex flex-col gap-4 justify-center items-center rounded-md'>
          
            <h1 className='text-xl text-[#212121]'>{succes}</h1>

            <div className='w-[150px] h-[120px] flex flex-col justify-center items-center outline outline-black rounded  py-2'>
              <p className='text-[#212121] font-semibold '>{namaKetua}</p>
              <p className='text-[#212121] font-semibold text-xs'>&</p>
              <p className='text-[#212121] font-semibold'>{namaWakil}</p>
            </div>

            {/* <div className='w-32 h-10 flex justify-center items-center rounded-md bg-sky-600 text-white cursor-pointer mt-4' onClick={onClick}>OK</div> */}
            <div className='w-full h-10 flex justify-center items-center rounded-md text-black cursor-pointer animate-pulse'>
              Loading, Please wait...</div>
        </div>
    </>
  )
}
