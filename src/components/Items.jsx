import React, { useRef } from 'react'
import { items } from '../constants'

const Items = () => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -200, // Adjust the value as needed
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 200, // Adjust the value as needed
      behavior: 'smooth'
    })
  }

  return (
    <div className='mx-10 py-10 shadow-sm'>
      <div className='flex gap-4 justify-end mx-5 my-5'>
        <button onClick={scrollLeft} className='px-3 py-2 rounded-full border border-gray-600 font-bold hover:bg-slate-200'>&#8592;</button>
        <button onClick={scrollRight} className='px-3 py-2 rounded-full border border-gray-600 hover:bg-slate-200'>&#8594;</button>
      </div>
      <div className='flex overflow-x-hidden gap-12' ref={scrollContainerRef}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="item" className='w-[150px] h-[130px] mx-30 cursor-pointer' />
            <p className='mx-[40px] my-1 capitalize text-lg font-medium font-OpenSans'>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Items
