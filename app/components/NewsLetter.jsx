import React from 'react'

export const NewsLetter = () => {
  return (
    <div className='bg-(--primary) p-5 sm:p-20 text-white mt-5 flex flex-col text-center items-center justify-center'>
      <h1 className='text-2xl sm:text-4xl font-semibold'>Subscribe to our Newsletter</h1>
      <p className='py-5 text-sm text-center'>Stay updated with the latest trends, exclusive offers, and new arrivals</p>


      <div className="flex items-center bg-white rounded-lg overflow-hidden  px-4 py-2 mt-10 w-full sm:w-1/3">
        <input 
          type="email"
          placeholder="Email address"
          className="flex-1 outline-none text-gray-800"
        />
        <button className="bg-indigo-600 cursor-pointer text-white px-5 py-3 text-sm font-medium rounded-xl hover:bg-indigo-700 transition">
          Subscribe
        </button>
      </div>
    </div>
  )
}
