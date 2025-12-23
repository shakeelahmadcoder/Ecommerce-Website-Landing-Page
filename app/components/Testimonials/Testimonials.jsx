"use client"
import { products, testimonials } from '@/public/assests'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import "../Testimonials/Testimonials.css"
import 'swiper/css'
import 'swiper/css/pagination'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProductCard } from '../ProductCard'
import Image from 'next/image'
import RatingStars from '../RatingStars'

export const Testimonials = () => {
  
  
  return (
    <div className='bg-(--primary) p-10 overflow-hidden textce'>
        <h1 className='sm:text-4xl font-semibold text-white text-center '>Our Happy Clients</h1>
     
      <div className='flex items-center justify-start my-6'>
        <Swiper  
        spaceBetween={30}
        slidesPerView={2}
        
        navigation={{
          prevEl: ".prev-c",
          nextEl: ".next-c",
        }}
        pagination={{ 
          clickable: true,
          el: ".testimonials-pagination",
         }}

         breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            
          },
  }}
        
        
        modules={[Navigation, Pagination]}
        className="mySwiper">
      {testimonials.map((item, index)=>(
    <SwiperSlide key={index}>
        <div className='bg-white p-5 rounded-2xl h-60'>
            <div className='flex items-center justify-between'>
            <div className='flex items-center justify-center gap-3'>
                     <Image src={item.image} height={50} width={50} alt='testimonails image'/>
                     <div>
                <h1 className='text-md font-semibold'>{item.name}</h1>
                <p className='text-xs'>{item.role}</p>

                     </div>
            </div>
             <RatingStars rating={item.rating}/>
            </div>

            <p className='text-sm my-5'>{item.review}</p>
        </div>
    </SwiperSlide>
      ))}
      </Swiper>
      </div>

       <div className="flex items-center justify-between mt-10">
      <div className='testimonials-pagination ml-8 '></div>

            <div className='flex items-center gap-2'>
            <button className="prev-c w-10 h-10 cursor-pointer rounded-full bg-white p-2 flex items-center justify-center">
                <ArrowLeft size={40} />
              </button>
              <button className="next-c w-10 h-10 cursor-pointer rounded-full bg-white p-2 flex items-center justify-center">
                <ArrowRight size={40} />
              </button>
        </div> 
          </div>

    </div>
  )
}
