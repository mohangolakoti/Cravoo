import React, { useEffect, useState } from 'react'
import { API } from '../constants/api'
import { Link } from 'react-router-dom'

const Restaurants = () => {
  const [popular,setPopular] = useState([])
  const [loading,setLoading] = useState(true)

  const popularRestaurants = async()=>{
    try {
      const response = await fetch(`${API}/vendor/all-vendors`)
      const newData = await response.json()
      setPopular(newData.vendors);
      setLoading(false)
      console.log("This is Api data",newData.vendors)
    } catch (error) {
      console.log(error)
      /* alert("Failed to fetch data") */
    }
  }

  useEffect(()=>{
    popularRestaurants()
  },[])
  return (
    <div className='md:mx-14 mx-8 my-20 font-OpenSans'>
      <h2 className='text-2xl font-Montserrat font-bold'>Restaurants</h2>

      <div className='grid xl:grid-cols-4 md:grid-cols-3 min-[500px]:grid-cols-2 gap-6 my-5'>
        {popular && popular.map((vendor)=>(
          <div className=''>
            {vendor.firm.map((item)=>(
              <Link to={`/product/${item.firmName}/${item._id}`}>
                <div className='hover:scale-95'>
                  <img src={`${API}/uploads/${item.image}`} alt="" className='rounded-3xl shadow-xl cursor-pointer' />
                  <p className='mt-[-43px] text-xl rounded-3xl font-extrabold text-white px-4 py-2 relative w-full bg-gradient-to-b from-transparent to-black'>{item.offer}</p>
                  <div className='px-3 text-lg font-medium text-gray-500'>
                  <p className='text-xl mt-2 font-bold text-black'>{item.firmName}</p>
                  <p>{item.category}</p>
                  <p className='overflow-hidden whitespace-nowrap max-w-[250px] overflow-ellipsis'>{item.region.join(', ')}</p>
                  </div>
                </div>
                </Link>
            ))}
          </div>
        ))}
        </div>
    </div>
  )
}

export default Restaurants