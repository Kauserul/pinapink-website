import React from 'react'
import { Outlet } from 'react-router-dom'
import BottomNav from '../../Shared/BottomNav/BottomNav'

const CategoriesRoutes = () => {
    return (
        <div>
            <div>
                <div className=" flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                </div>
                <div className="bg-red-500">
                    <ul className="menu text-base-content w-24 bg-yellow-500">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <BottomNav></BottomNav>
        </div>
    )
}

export default CategoriesRoutes