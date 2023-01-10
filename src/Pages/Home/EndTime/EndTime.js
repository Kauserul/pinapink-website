import React from 'react'

const EndTime = () => {
  return (
    <div className='mb-4 w-full bg-red-500 p-2'>
        <div className='w-3/4'>
            <div className='flex mx-auto justify-center gap-2'>
                <h2 className='text-white'>Ending in</h2>
                <button className='btn bg-white text-black btn-sm rounded-sm border-none'>1</button>
                <span className='text-white'>:</span>
                <button className='btn bg-white text-black btn-sm rounded-sm border-none'>29</button>
                <span className='text-white'>:</span>
                <button className='btn bg-white text-black btn-sm rounded-sm border-none'>28</button>
            </div>
        </div>
    </div>
  )
}

export default EndTime