import { Images } from '@/public/assests'
import Image from 'next/image'
import React from 'react'
export const CallToAction = () => {
  return (
    <div className='h-full flex flex-col sm:flex-row items-center justify-between gap-8  bg-cover bg-center bg-no-repeat mx-4 my-5 rounded-2xl py-16 px-10 sm:px-28'  style={{ backgroundImage: `url('${Images.calltoaction.src}')` }}>
      
      <div className='sm:w-1/2 w-full'>
      <h1 className='text-2xl sm:text-4xl font-semibold'>Shop Now and Discover Amazing Deals</h1>
      <p className='py-5 text-md '>Explore our latest collection of fashion-forward clothing, designed for comfort and style. From casual wear to elegant evening attire, our pieces are made from high-quality fabrics to keep you looking and feeling great all day long. Whether you're updating your wardrobe or shopping for a special occasion, </p>
      <button className='bg-gray-800 text-white px-20 py-2 rounded-md'>Shop Now</button>
      </div>

      <Image className='sm:w-1/2 w-full rounded-xl' src={Images.open} height={200} width={200} alt='open image'/>
    </div>
  )
}
