import React from 'react'
import TabelIsi from './TabelIsi'

export default function DataTable(props) {
  return (
    <>
    <table className='w-[90%] m-1 rounded mx-auto '>
        <thead className=''>
            <tr>
                <th className='border-[1.5px] border-sky-600 bg-sky-600 text-white'>Sekolah</th>
                <th className='border-[1.5px] border-sky-600 bg-sky-600 text-white' >Vote</th>
            </tr>
        </thead>
        {props.children}
    </table>
    
    </>
  )
}
