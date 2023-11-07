import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root.jsx';
import Home from './Components/Home.jsx';
import Rooms from './Components/Rooms.jsx';
import MyBookings from './Components/MyBookings.jsx';
import LogIn from './LogIn.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Details from './Components/Details.jsx';
import ErrorPage from './Components/ErrorPage.jsx/ErrorPage.jsx';
import AboutUs from './Components/optional/AboutUs.jsx';
import Gallery from './Components/optional/Gallery.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index:true,
        element: <Home></Home>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
        loader:()=>fetch('http://localhost:5000/rooms')
      },
      {
        path: "/roomBookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute> 
        
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute> ,
        loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: "/aboutUs",
        element:<AboutUs></AboutUs>,
      },
      {
        path: "/gallery",
        element:<Gallery></Gallery>,
      },
    ]
  },
  {
    path: "/login",
    element: <LogIn></LogIn>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>  <RouterProvider router={router} /></AuthProvider>
  <Toaster   position="top-right"
  reverseOrder={false}></Toaster>
  </React.StrictMode>,
)
