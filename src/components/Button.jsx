import React from 'react'
import { Link } from 'react-router-dom'

export function ButtonRefresh({name, link, click}) {
  return (
    <>
    <Link className='w-[100px] h-10 flex justify-center items-center bg-orange-400 text-black rounded-lg hover:outline-[2px] hover:outline-[#212121] hover:outline hover:font-semibold
    ' to={link} onClick={click} >{name}</Link>
    </>
  )
}

export function ButtonLogout({name, link, click}) {
  return (
    <>
    <Link className='w-[120px] h-10 flex justify-center items-center bg-red-600 text-white rounded-lg hover:outline-[2px] hover:outline-[#212121] hover:outline hover:font-semibold
    ' to={link} onClick={click} >{name}</Link>
    </>
  )
}

export default function Button({name, link, click}) {
  return (
    <>
    <Link className='w-[120px] h-10 flex justify-center items-center bg-[#202121] text-orange-400 rounded-lg hover:outline-[3px] hover:outline-orange-400 hover:outline hover:font-semibold
    ' to={link} onClick={click} >{name}</Link>
    </>
  )
}
