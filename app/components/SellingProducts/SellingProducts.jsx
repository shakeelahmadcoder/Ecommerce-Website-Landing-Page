"use client"
import { products } from '@/public/assests'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import "../SellingProducts/SellingProducts.css"
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProductCard } from '../ProductCard'

export const SellingProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const topSellingProducts = products.filter((item)=> item.topSeller === true)
  useEffect(() => {
    setFilteredProducts(topSellingProducts)
  }, [])
  
  return (
    <div className='bg-(--primary) pl-8 py-10 overflow-hidden'>
      <div className="flex items-center justify-between mb-4 gap-4 mr-8">
        <h1 className='sm:text-4xl font-semibold text-white'>Top Selling Products</h1>
        <div className='flex items-center gap-2'>
            <button className="prev-b w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center">
                <ArrowLeft size={40} />
              </button>
              <button className="next-b w-10 h-10 rounded-full bg-white p-2 flex items-center justify-center">
                <ArrowRight size={40} />
              </button>
        </div>
            
          </div>
      <div className='flex items-center justify-start'>
        <Swiper  
        spaceBetween={30}
        slidesPerView={4}
        
        navigation={{
          prevEl: ".prev-b",
          nextEl: ".next-b",
        }}
        pagination={{ 
          clickable: true,
          el: ".products-pagination",
         }}

         breakpoints={{
          0: {
            slidesPerView: 1.6,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3.8,
            
          },
  }}
        
        
        modules={[Navigation, Pagination]}
        className="mySwiper">
      {filteredProducts.map((item, index)=>(
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
