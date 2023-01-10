import React from 'react'
import { HiOutlineAnnotation, HiOutlineHome, HiShoppingCart, HiUser, HiViewGrid, IconName } from "react-icons/hi";
import { Link } from 'react-router-dom';

const BottomNav = () => {
  return (

    <div className='fixed bottom-0 bg-white w-full py-1'>
        <div className='flex justify-around'>
        <div>
            <HiOutlineHome className='mx-auto text-2xl'></HiOutlineHome>
            <Link to='/'><h4 className='font-bold'>Home</h4></Link>
        </div>
        <div>
            <HiViewGrid className='mx-auto text-2xl'></HiViewGrid>
            <Link to='/categories'><h4 className='font-bold'>Cetegories</h4></Link>
        </div>
        <div>
            <HiOutlineAnnotation className='mx-auto text-2xl'></HiOutlineAnnotation>
            <Link to='/message'><h4 className='font-bold'>Message</h4></Link>
        </div>
        <div>
            <HiShoppingCart className='mx-auto text-2xl'></HiShoppingCart>
            <Link to='/cart'><h4 className='font-bold'>Cart</h4></Link>
        </div>
        <div>
            <HiUser className='mx-auto text-2xl'></HiUser>
            <Link to='/account'><h4 className='font-bold'>Account</h4></Link>
        </div>
    </div>
    </div>
  )
}

export default BottomNav