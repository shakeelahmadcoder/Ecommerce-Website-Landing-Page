"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../ProductClouser/ProductClouser.css"
import { productCrousel } from "@/public/assests";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Heart, MoveRight } from "lucide-react";
import Link from "next/link";

export default function ProductCarousel() {
  return (
    <div className="relative w-full py-5 sm:py-10">

      <Swiper className="product-swiper"
        modules={[Navigation, Pagination]}
        
        centeredSlides
        slidesPerView={1.3}
        initialSlide={1}
        spaceBetween={-400}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{ 
          clickable: true,
          el: ".custom-pagination",
         }}

         breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.1,
            spaceBetween: -100,
          },
          1024: {
            slidesPerView: 1.3,
            spaceBetween: -400,
          },
  }}
         
      >
        {productCrousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" overflow-hidden flex items-center justify-center">
              <Image
                className="w-175 rounded-2xl relative"
                src={item.image}
                alt="product"
                width={500}
                height={500}
              />
              <Heart size={60} className="absolute top-8 sm:top-10 left-6 sm:left-64  bg-[#757575] text-white p-4 rounded-full"/>
          <button className='bg-transparent  border-2 border-white shadow-md text-white cursor-pointer flex items-center justify-center px-8 py-2 text-sm gap-2 rounded-md my-3 absolute bottom-0 right-8 sm:right-60'>Buy Now <MoveRight /></button>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="flex items-center justify-center gap-4 mt-6 p-6 w-full sm:max-w-4xl m-auto">
        <div className="custom-pagination"></div>

    <div className="flex items-center justify-center gap-4">
      <button className="prev-btn sm:w-20 sm:h-20 rounded-full bg-gray-300 flex items-center justify-center">
          <ArrowLeft size={40} />
        </button>
        <button className="next-btn sm:w-20 sm:h-20 rounded-full bg-gray-300 flex items-center justify-center">
          <ArrowRight size={40} />
        </button>
    </div>
      </div>

    </div>
  );
}
