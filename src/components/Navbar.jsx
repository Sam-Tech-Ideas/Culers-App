import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='text-white flex justify-between h-24 max-w-[1240px] items-center mx-auto px-4'>
     <h1 className='text-2xl font-bold text-pink-700 w-full '>CULERS<span className='text-blue-500 font-light'>CITY</span> </h1>
     <div className='hidden md:flex' >
     <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4 '>Latest</li>
        <li className='p-4 '>About</li>
        <li className='p-4 '>Transfers</li>
       </ul>
       <span><button className='bg-pink-700  px-3 py-1 mt-4  rounded-lg hover:bg-pink-900 '>Register</button></span>
       </div>
     <div onClick={handleNav} className="block md:hidden">
      {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
       </div>
       {/*{nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]' */}
     <div className={!nav ? 'bg-[#03031d] fixed left-0 top-0 w-[60%] lg:hidden h-full border-r border-r-pink-900 ' : 'ease-in-out duration-500  fixed left-[-100%]'}>
      <ul className='pt-12 uppercase '>
      <h1 className='text-2xl font-bold text-pink-700 w-full p-2'>CULERS<span className='text-blue-500 '>CITY</span> </h1>
   
      <li className=' p-4 hover:bg-gradient-to-r hover:from-[#0c0c5a] hover:to-pink-500 transform hover:scale-90 duration-300 '>Home</li>
      <li className=' p-4 hover:bg-gradient-to-r hover:from-[#0c0c5a] hover:to-pink-500 transform hover:scale-90 duration-300 '>Latest</li>
      <li className=' p-4 hover:bg-gradient-to-r hover:from-[#0c0c5a] hover:to-pink-500 transform hover:scale-90 duration-300 '>About</li>
      <li className='p-4 hover:bg-gradient-to-r hover:from-[#0c0c5a] hover:to-pink-500 transform hover:scale-90 duration-300 '>Transfers</li>
      <button className='hover:transform hover:scale-95 bg-pink-900 mx-5 my-5 py-1 px-3 rounded-md'>Register</button>
      </ul>
     </div>
    </div>
  )
}

export default Navbar