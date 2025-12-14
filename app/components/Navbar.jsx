"use client"
import { Images } from '@/public/assests.js'
import { Menu, MoveRight, X } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export const Navbar = () => {
  const [openNav, setopenNav] = useState(false)
  const changeNav = ()=>{
    setopenNav(!openNav)
  }
  return (
    <nav className='flex items-center justify-between px-4 sm:px-8 md:px-20 py-5'>
      <div className='flex items-center justify-center gap-2'>
        <Image src={Images.logo} height={30} width={30} alt='logo' />
        <h1 className='text-2xl font-semibold'>Trendora</h1>
      </div>

    
        <ul className='hidden sm:flex items-center justify-center gap-8 '>
          <li><a href="#">Home</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#about">About Us</a></li>
        <button className='flex cursor-pointer items-center justify-center gap-2 bg-green-600 px-4 py-1 rounded-md text-sm text-white'>Contact Us <MoveRight /></button>
        </ul>
      
        {openNav ? <X onClick={()=>changeNav()} className='sm:hidden' /> : <Menu onClick={()=>changeNav()} className='sm:hidden' />}

        {openNav && (
          <ul className='flex flex-col bg-gray-200 p-5 rounded-md items-center justify-center gap-8 absolute top-14 right-2'>
          <li><a href="#">Home</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#company">Company</a></li>
          <li><a href="#about">About Us</a></li>
        <button className='flex cursor-pointer items-center justify-center gap-2 bg-green-600 px-4 py-1 rounded-md text-sm text-white'>Contact Us <MoveRight /></button>
        </ul>
        )}
    </nav>
  )
}
