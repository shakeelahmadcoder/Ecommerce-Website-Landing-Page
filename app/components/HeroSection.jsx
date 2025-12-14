import { happyCustomers } from '@/public/assests'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const HeroSection = () => {
  return (
    <main>
      <div className='flex   px-4 sm:px-8 md:px-18 py-5 mt-10  gap-6'>
        {/* left part  */}
        <div className='w-full sm:w-1/2'>
          <h1 className='text-4xl sm:text-6xl font-light'>Discover Everyday Essentials Delivered to Your Door</h1>
          <div className='flex -space-x-4 mt-5'>
            {happyCustomers.map((customer, index)=>(
              <div clas> 
                <Image src={customer.image} height={30} width={30} alt='happy-customer-image'/>
              </div>
            ))}
          </div>
          <p>Happy Customers</p>
        </div>
        {/* right part  */}
        <div className='w-full sm:w-1/3'>
          <p className='text-sm text-gray-600'>Quality products for modern living – shop now and enjoy exclusive deals.</p>
          <button className='bg-(--primary) flex items-center justify-center px-4 py-2 text-sm text-white gap-2 rounded-md my-3'>Explore Collection <MoveRight /></button>
        </div>
      </div>
    </main>
  )
}
