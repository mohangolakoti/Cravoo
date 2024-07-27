import React from 'react'
import Nav from '../components/Navbar'
import Items from '../components/Items'
import Offers from '../components/Offers'
import Popular from '../components/Popular'
import Restaurants from '../components/Restaurants'

const Home = () => {
  return (
    <div className='overflow-x-hidden max-2xl:w-full 2xl:mx-40'>
        <Nav/>
        <Items/>
        <Offers/>
        <Popular/>
        <Restaurants/>  
    </div>
  )
}

export default Home