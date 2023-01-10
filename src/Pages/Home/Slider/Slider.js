import React from 'react'
import banner from '../../../Image/banner.jpg'

const Slider = () => {
  return (
    <div>
      <div className='w-full text-center mb-5 mt-5'>
        <input type='text' className='border outline-none p-1 rounded-md' placeholder="I'm lokking for..." />
        <button className='btn rounded-none btn-sm search-bar'>Search</button>
      </div>
      <div className='mb-5'>
        <img src={banner}></img>
      </div>
      <div className='flex justify-between mt-3 mb-5 px-3'>
        <div>
          <h2 className='text-xl'>FlashSale</h2>
        </div>
        <button><small>Shop Now</small></button>
      </div>
      
    </div>
  )
}

export default Slider