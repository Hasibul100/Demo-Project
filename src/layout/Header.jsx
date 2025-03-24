import React from 'react'
import { Link } from 'react-router-dom'
const clss =  " p-3 m-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition";

function Header() {
  return (
    <div className='bg-slate-400 w-full  p-5 text-center'>
        <Link className={clss} to={"/home"} >Home</Link>
        <Link className={clss} to={"/project"} >Project</Link>
        <Link className={clss} to={"/about"} >About</Link>
        <Link className={clss} to={"/contact"} >Contact</Link>
    </div>
  )
}

export default Header