import React from 'react'

const Affiliater = () => {
    return (
        <div className='bg-red-500 p-5 min-h-screen'>
            <div className='bg-white w-4/5  rounded-xl text-center mx-auto py-2 font-bold mb-7'>
                <h2 className=''>Welcome to PinaPink Affiliater</h2>
            </div>
            <form>
                <div className='mb-3'>
                    <label className='block text-white'>Full Name</label>
                    <input className='w-full rounded outline-none px-2' required type='text'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Business Registration Number or E-mail</label>
                    <input className='w-full rounded outline-none px-2' type='text'></input> 
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Gander</label>
                    <select className="w-full rounded outline-none px-2 max-w-xs">
                        <option disabled selected>Pick your Gander</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Age</label>
                    <input className='w-full rounded outline-none px-2' required type='number'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>City</label>
                    <input className='w-full rounded outline-none px-2' required type='text'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Post Code</label>
                    <input className='w-full rounded outline-none px-2' required type='number'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Contact Number</label>
                    <input className='w-full rounded outline-none px-2' required type='number'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Contact E-mail</label>
                    <input className='w-full rounded outline-none px-2' required type='email'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>WhatApp Number</label>
                    <input className='w-full rounded outline-none px-2' required type='number'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Bkash Number</label>
                    <input className='w-full rounded outline-none px-2' required type='number'></input>
                </div>
                <div className='mb-3'>
                    <label className='block text-white'>Referral Code (Optional)</label>
                    <input className='w-full rounded outline-none px-2' required type='number'></input>
                </div>
                
                <div className='text-center'>
                    <button className='btn btn-primary rounded bg-white rounded-sm border-none mt-5 text-black'>Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default Affiliater