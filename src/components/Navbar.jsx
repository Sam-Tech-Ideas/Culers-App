import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [nav,SetNav] = useState(false);
    const handleNav = () =>{
        SetNav(!nav)
    }
  return (
    <div className='text-white flex justify-between h-24 max-w-[1240px] items-center mx-auto px-4'>
     <h1 className='text-2xl font-bold text-[#f73a43] w-full '>CULERS</h1>
     <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Latest</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Transfers</li>
     </ul>

     <div className='block md:hidden' onClick={handleNav}>
      {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
     </div>
     <div className={!nav ? 'fixed bg-black border-r border-r-gray-500 left-0 top-0 w-[60%] h-full ease-inease-out duration-300': 'fixed left-[-100%]'}>
     <h1 className=' m-3 text-2xl font-bold text-[#f73a43] w-full '>CULERS</h1>
        <ul className='uppercase pt-12'>
        <li className='p-4 pt-4'>Home</li>
        <li className='p-4'>Latest</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Transfers</li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar