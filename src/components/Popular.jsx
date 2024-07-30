import React, { useEffect, useState, useRef } from 'react'
import { API } from '../constants/api'
import { Link } from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState([])
  const scrollContainerRef = useRef(null)

  const popularRestaurants = async () => {
    try {
      const response = await fetch(`${API}/vendor/all-vendors`)
      const newData = await response.json()
      setPopular(newData.vendors)
      console.log("This is Api data", newData.vendors)
    } catch (error) {
      console.log(error)
      /* alert("Failed to fetch data") */
    }
  }

  useEffect(() => {
    popularRestaurants()
  }, [])

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: -500, // Adjust the value as needed
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      top: 0,
      left: 500, // Adjust the value as needed
      behavior: 'smooth'
    })
  }

  return (
    <div className='md:mx-14 mx-8 my-5 mt-20 font-OpenSans'>
      <div className='flex justify-between items-center'>
      <h2 className='text-2xl font-Montserrat font-bold'>Top Rated Restaurants</h2>
      <div className='flex gap-4 mx-5'>
      <button onClick={scrollLeft} className='px-3 py-2 rounded-full border border-gray-600 font-bold hover:bg-slate-200'>&#8592;</button>
      <button onClick={scrollRight} className='px-3 py-2 rounded-full border border-gray-600 hover:bg-slate-200'>&#8594;</button>
      </div>
      </div>
      <div className='relative'>
        <div ref={scrollContainerRef} className='flex gap-6 pt-5 pb-16 overflow-x-hidden shadow-sm'>
          {popular && popular.map((vendor, index) => (
            <div key={index} className='flex-shrink-0 '>
              {vendor.firm.map((item) => (
                <Link to={`/product/${item.firmName}/${item._id}`}>
                <div className='hover:scale-95'>
                  <img src={`${API}/uploads/${item.image}`} alt="" className='md:w-[400px] w-[300px] rounded-3xl shadow-xl cursor-pointer' />
                  <p className='mt-[-43px] text-xl rounded-3xl font-extrabold text-white px-4 py-2 relative w-full bg-gradient-to-b from-transparent to-black'>{item.offer}</p>
                  <div className='px-3 text-lg font-medium text-gray-500'>
                  <p className='text-xl mt-2 font-bold text-black'>{item.firmName}</p>
                  <p >{item.category}</p>
                  <p className='overflow-hidden whitespace-nowrap max-w-[250px] overflow-ellipsis'>{item.region.join(', ')}</p>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
