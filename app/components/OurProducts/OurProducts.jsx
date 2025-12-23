"use client"
import { products } from '@/public/assests'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Grid } from 'swiper/modules'
import "../OurProducts/OurProducts.css"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid';
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProductCard } from '../ProductCard'

export const OurProducts = () => {
  
  
  return (
    <div className='p-10 overflow-hidden'>
      <div className="flex items-center justify-between mb-4 gap-4 mr-8">
        <h1 className='sm:text-4xl font-semibold'>Our Products</h1>
        
            
          </div>
      <div className='flex items-center justify-start'>
        <Swiper
        spaceBetween={30}
        grid={{
          rows: 3,
          fill: "row",
        }}
        slidesPerView={4}
        slidesPerGroup={9}
        navigation={{
          prevEl: ".prev-b",
          nextEl: ".next-b",
        }}
        pagination={{ 
          clickable: true,
          el: ".ourproducts-pagination",
          renderBullet: (index, className) => {
    return `<span class="${className}">${index + 1}</span>`;
  },
         }}

         breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            
          },
  }}
        
        
        modules={[Grid, Navigation, Pagination]}
        className="mySwiper">
      {products.map((item, index)=>(
    <SwiperSlide key={index}>
        <ProductCard  item={item}/>
    </SwiperSlide>
      ))}
      </Swiper>
      </div>

      <div className='flex items-center justify-center gap-4 mt-8 w-full'>
  <button className="prev-b w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all flex items-center justify-center shrink-0 cursor-pointer">
    <ArrowLeft size={20} />
  </button>
  
  <div className='ourproducts-pagination flex-1 max-w-md'></div>

  <button className="next-b w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all flex items-center justify-center shrink-0 cursor-pointer">
    <ArrowRight size={20} />
  </button>
</div>

    </div>
  )
}
