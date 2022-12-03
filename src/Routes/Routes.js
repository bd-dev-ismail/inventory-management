
import AddCategories from "../Dashboard/AddCategories/AddCategories";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import DashboardLayout from "../Layout/DashboardLayout";

const { createBrowserRouter } = require("react-router-dom");
const { default: ErrorPage } = require("../Components/ErrorPage/ErrorPage");
const { default: Login } = require("../Components/Login/Login");
const { default: Register } = require("../Components/Register/Register");
const { default: Main } = require("../Layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>
            },
           
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/dashboard',
                element: <UserProfile/>
            },
            {
                path: '/dashboard/add-categories',
                element: <AddCategories/>
            },
            {
                path: '/dashboard/add-proudct',
                element: <AddProduct/>
            }
        ]
    }
])