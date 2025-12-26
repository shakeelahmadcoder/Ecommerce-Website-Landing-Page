import RatingStars from '@/app/components/RatingStars';
import { Testimonials } from '@/app/components/Testimonials/Testimonials';
import { products } from '@/public/assests';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export const page = async ({params}) => {
    const {slug} = await params;
    const product = products.find((p)=> p.slug === slug)
  return (
    <>
    <div className='flex flex-col items-center justify-center sm:flex-row gap-8 px-4 sm:px-8 my-6'>
        <div className='sm:w-1/2'>
        <Image className='w-full' src={product.image} height={400} width={400} alt='product image'/>
        </div>
        <div className='sm:w-1/4 flex flex-col gap-4'>
            <h1 className='text-xl sm:text-2xl font-semibold'>{product.name}</h1>
            <div className='flex items-center gap-2'>
                <RatingStars rating={product.rating}/> <span> ({product.reviews}) </span>
            </div>
            <p className='text-xl font-semibold'>${product.price}</p>
            <p className='text-sm text-gray-600'>{product.description}</p>
            <div>

      <button className=' py-4 px-6 bg-(--primary) text-white font-semibold cursor-pointer flex justify-between items-center gap-4'>Add To Cart <ShoppingCart /></button>
            </div>
    <hr/>
    <p className='text-sm text-gray-600'>{product.features}</p>
        </div>

    </div>
        <Testimonials/>
    </>
  )
}

export default page