import Image from 'next/image'
import React from 'react'
import RatingStars from './RatingStars'

export const ProductCard = ({item}) => {
  
  
  return (
    <div className='bg-white p-3 rounded-xl flex flex-col  justify-center gap-3 h-full'>
      <div className='w-full h-60 rounded-lg'>
      <Image className='w-full h-full object-cover rounded-4xl' src={item.image} height={200} width={200} alt='product-image'/>
      </div>
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
