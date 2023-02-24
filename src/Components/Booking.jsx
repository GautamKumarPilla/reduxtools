import React from 'react'
import { Outlet } from 'react-router-dom'

function Booking() {
  return (
    <div>
        <h1>Booking</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default Booking