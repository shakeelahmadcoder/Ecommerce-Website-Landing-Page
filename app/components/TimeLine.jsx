import { companyStory, Images } from '@/public/assests'
import Image from 'next/image'
import React from 'react'

const TimeLine = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 sm:my-10 relative'>
        <h1 className='text-4xl font-bold'>Our Story</h1>
       <Image className='w-175' src={Images.frame} alt="frame" width={500} height={500} /> 

       <div className='flex flex-col justify-center items-center p-5 gap-6 sm:gap-20 absolute top-12 sm:top-20'>
         {companyStory.map((item, index)=>(
            <div key={index} className={`flex sm:flex-row items-center ${item.position === "left" ? "sm:flex-row" : "sm:flex-row-reverse"} w-full  sm:max-w-md gap-6 sm:gap-20`}>
                <h1 className='text-xl sm:text-4xl font-bold'>{item.year}</h1>
                <div>
                    <p>{item.title}</p>
                    <p className='text-xs sm:text-sm'>{item.description}</p>
                </div>
            </div>
        ))}
       </div>
    </div> 
  )
}

export default TimeLine