import React from 'react'
import { discount, free, gift } from '../constants'

const Offers = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-14 mx-8 my-16 text-white font-OpenSans'>
        <div className='bg-r-btn px-6 py-7 rounded-2xl'>
            <div className='flex justify-between'>
            <p className='text-xl text-white font-medium w-1/2'>More Friends More Food</p>
            <img src={gift} alt="gift" className=''/>
            </div>
            <p className='text-lg pt-3'>Bring your friends to Delivery and get upto 15% off</p>
            <p className='text-sm text-right pt-3'>*Conditions apply</p>
        </div>
        <div className='bg-r-logo px-6 py-7 rounded-2xl'>
            <div className='flex justify-between'>
            <p className='text-xl text-white font-medium w-1/2'>First Order First Discount</p>
            <img src={discount} alt="gift" className=''/>
            </div>
            <button className='bg-white px-6 py-2 text-r-logo mt-12 rounded-lg font-medium'>Order Food Now <span className='w-72'>&#8594;</span></button>
        </div>
        <div className='bg-r-dbtn px-6 py-7 rounded-2xl'>
            <div className='flex justify-between'>
            <p className='text-xl text-white font-medium w-1/2'>Buy One Get One</p>
            <img src={free} alt="gift" className=''/>
            </div>
            <p className='text-lg pt-3'>Buy one get one free on selected items! Free delivery</p>
            <p className='text-sm text-right pt-3'>*Conditions apply</p>
        </div>
    </div>
  ) 
}

export default Offers