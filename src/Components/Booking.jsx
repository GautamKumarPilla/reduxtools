import React from 'react'
import { Outlet } from 'react-router-dom'

function Booking() {
  return (
    <div className='border border-info m-1 p-3'>
        <h1>Booking</h1><hr/>
        <Outlet></Outlet>
    </div>
  )
}

export default Booking