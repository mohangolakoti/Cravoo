import React from 'react'
import Nav from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleRestaurant from './components/SingleRestaurant'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:firmName/:firmId/' element={<SingleRestaurant/>} />
      </Routes>
    </div>
  )
}

export default App