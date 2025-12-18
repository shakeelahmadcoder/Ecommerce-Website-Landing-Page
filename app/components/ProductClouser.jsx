"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { productCrousel } from "@/public/assests";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProductCarousel() {
  return (
    <div className="relative w-full py-10">

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

         
      >
        {productCrousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" overflow-hidden flex items-center justify-center">
              <Image
                className="w-175 rounded-2xl"
                src={item.image}
                alt="product"
                width={500}
                height={500}
              />
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
