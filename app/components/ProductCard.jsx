import Image from 'next/image'
import React from 'react'
import RatingStars from './RatingStars'

export const ProductCard = ({item}) => {
  
  
  return (
    <div className='bg-white p-4 rounded-xl flex flex-col  justify-center gap-2'>
      <Image className='w-full' src={item.image} height={200} width={200} alt='product-image'/>
      <h1 className='text-md font-semibold '>{item.name}</h1>
      <div className='flex gap-2'>
      <RatingStars rating={item.rating}/>
      <p>({item.reviews})</p>
      </div>
      <p>${item.price}</p>
      <button className='rounded-xl px-4 py-2 bg-(--primary) text-white font-semibold w-full'>Add To Cart</button>
    </div>
  )
}
