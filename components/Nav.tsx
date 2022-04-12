import React from 'react'
import Image from 'next/image'
import { HiOutlineHome, HiOutlineShoppingBag, HiOutlineSupport, HiOutlineSearch, HiOutlineShoppingCart } from 'react-icons/hi'

const Nav = () => {
  return (
    <div>
      {/* The top nav */}
      <div className='flex flex-row items-center justify-start border-b h-14'>
        {/* <Image src="/wrises.png" alt='wrises logo' width={30} height={30} /> */}
        <h1 className='font-display'>Wrises</h1>
      </div>
      
      {/* The bottom nav */}
      <nav className='fixed inset-x-3 bottom-3 h-14 border rounded-md bg-slate-300 py-4 z-50'>
      {/* icons */}
      <div className='flex flex-row items-center justify-around text-xl text-gray-800'>
        <div className=''><HiOutlineHome /></div>
        <div className=''><HiOutlineShoppingBag /></div>
        <div className=''><HiOutlineSearch /></div>
        <div className=''><HiOutlineShoppingCart /></div>
        <div className=''><HiOutlineSupport /></div>
      </div>
    </nav>
    </div>

  )
}


export default Nav