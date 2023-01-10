import Main from "../../../Layout/Main";
import Affiliater from "../../Affiliater/Affiliater";
import Categories from "../../Categories/Categories";
import Login from "../../Login/Login";
import Navbar from "../../Navbar/Navbar";
import Register from "../../Register/Register";
import Seller from "../../Seller/Seller";
import CategoriesRoutes from "../CategoriesRoutes/CategoriesRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../../Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/affiliater',
                element: <Affiliater></Affiliater>
            },
            {
                path: '/seller',
                element: <Seller></Seller>
            },
           
        ]
    },
    {
        path: '/categories',
        element: <CategoriesRoutes></CategoriesRoutes>,
        children: [
            {
                path: '/categories',
                element: <Categories></Categories>
            }
        ]
    }
    
])

export default router