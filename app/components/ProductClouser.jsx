"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { productCrousel } from "@/public/assests";
import Image from "next/image";

export default function ProductCarousel() {
  return (
    <div className="relative w-full py-10">

      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        slidesPerView={1.4}
        initialSlide={1}
        spaceBetween={20}
        // loop={true}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{
          el: ".progress-bar",
          type: "progressbar",
        }}
        className="pb-10!"
      >
        {productCrousel.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-2xl overflow-hidden  flex items-center justify-center">
              <Image className="w-225 rounded-2xl"
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
      <div className="flex justify-center gap-4 mt-6">
        <button className="prev-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          ←
        </button>
        <button className="next-btn w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          →
        </button>
      </div>

    </div>
  );
}
