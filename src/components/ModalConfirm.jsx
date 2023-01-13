import React from 'react'

export default function ModalConfirm({confirmasi, namaKetua, namaWakil, onClickYes, onClickNo}) {
  return (
     <>
        <div className='w-[280px] h-[200px] py-5 bg-slate-300 flex flex-col gap-2 justify-center items-center rounded-md'>
          
            <h1 className='text-lg my-2 font-semibold text-[#212121]'>{confirmasi}</h1>

            <div className='w-[80%] h-[100px] flex flex-col justify-center items-center outline outline-sky-700 rounded  py-2'>
              <p className='text-[#212121] font-semibold mx-auto '>{namaKetua}</p>
              <p className='text-[#212121] font-semibold text-xs mx-auto '>&</p>
              <p className='text-[#212121] font-semibold mx-auto '>{namaWakil}</p>
            </div>

            <div className='w-[75%] mx-2 mb-4 flex justify-center gap-2 items-center'>
                <div className='w-[64%] h-10 flex justify-center items-center rounded-md bg-sky-600 text-white cursor-pointer mt-4' onClick={onClickYes}>Yakin</div>
                <div className='w-[35%] h-10 flex justify-center items-center rounded-md bg-red-600 text-white cursor-pointer mt-4' onClick={onClickNo}>Tidak</div>
            </div>
           
        </div>
    </>
  )
}
