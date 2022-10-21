import React from 'react'

export default function TabelIsi({name,score}) {
  return (
    <>
    <tbody className='' >
            <tr className=''>
                <td className='pl-8 py-1 border-[1.8px] border-sky-600'>{name}</td>
                <td className='text-center border-[1.8px] border-sky-600'>{score}</td>
            </tr>
        </tbody>
    </>
  )
}
