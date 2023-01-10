import React from 'react'
import EndTime from '../EndTime/EndTime'
import HomeNav from '../HomeNav/HomeNav'
import Products from '../Products/Products'
import Slider from '../Slider/Slider'

const Home = () => {
  return (
    <div className='bg-white'>
        <HomeNav></HomeNav>
        <Slider></Slider>
        <EndTime></EndTime>
        <Products></Products>
    </div>
  )
}

export default Home