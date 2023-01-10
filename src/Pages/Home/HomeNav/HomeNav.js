import React from 'react'
import { HiPhoneIncoming, IconName } from "react-icons/hi";

const HomeNav = () => {
  return (
    <div className='px-2 mt-2 bg-white'>
      <div className='flex justify-between gap-3'>
        <div className='flex gap-2 w-2/4'>
          <div className='flex items-center'>
              <HiPhoneIncoming></HiPhoneIncoming>
          </div>
          <div>
            <p className='nav-download-app'><small className='p-0 m-0'>PinaPink App Download Please Click Here</small></p>
            
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <button className='bg-red-500 px-2 text-center rounded-lg text-white'><small>Download App</small></button>
        </div>
      </div>

    </div>
  )
}

export default HomeNav