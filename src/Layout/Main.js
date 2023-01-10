import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Navbar/Navbar'
import BottomNav from '../Pages/Shared/BottomNav/BottomNav'

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <BottomNav></BottomNav>
    </div>
  )
}

export default Main