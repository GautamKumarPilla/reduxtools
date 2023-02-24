import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Dashboard';
import AddCarType from './Components/AddCarType';
import AddService from './Components/AddService';
import AddServiceType from './Components/AddServiceType';
import ServiceCatalog from './Components/ServiceCatalog';
import Booking from './Components/Booking';
import Details from './Components/Details';
import ServicingBooking from './Components/ServicingBooking';
const router = createBrowserRouter([ 
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:'/dashboard/addCarType',
            element:<AddCarType></AddCarType>
          },
          {
            path:'/dashboard/addServiceType',
            element:<AddServiceType></AddServiceType>
          },
          {
            path:'/dashboard/addService',
            element:<AddService></AddService>
          },
          {
            path:'/dashboard/viewServices',
            element:<ServiceCatalog></ServiceCatalog>
          }
        ]
      },
      {
        path:'/booking',
        element:<Booking></Booking>,
        children:[
          {
            path:'/booking',
            element:<Details></Details>
          },
          {
            path:'/booking/serviceBooking',
            element:<ServicingBooking></ServicingBooking>
          }
        ]
      }

    ]

  },
  
]);
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();