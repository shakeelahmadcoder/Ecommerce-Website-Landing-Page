"use client"
import { products } from '@/public/assests'
import React from 'react'
import { ProductCard } from './ProductCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const SellingProducts = () => {
  return (
    <div className='bg-(--primary) p-10 '>
      <div className="flex items-center justify-between mb-4  gap-4">
        <h1 className='text-2xl font-semibold text-white'>Top Selling Products</h1>
        <div className='flex items-center gap-2'>
            <button className="prev-b w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center">
                <ArrowLeft size={40} />
              </button>
              <button className="next-b w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center">
                <ArrowRight size={40} />
              </button>
        </div>
            
          </div>
      <div className='max-w-300 mx-auto'>
        <Swiper  
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          prevEl: ".prev-b",
          nextEl: ".next-b",
        }}
        
        pagination={{
          clickable: true,
          el: ".products-pagination"
        }}
        
        modules={[Navigation, Pagination]}
        className="mySwiper">
      {products.map((item, index)=>(
    <SwiperSlide key={index}>
        <ProductCard  item={item}/>
    </SwiperSlide>
      ))}
      </Swiper>
      </div>
      <div className='products-pagination ml-8 mt-10'></div>
    </div>
  )
}
