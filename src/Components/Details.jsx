import React from 'react'
import { Link } from 'react-router-dom'

function Details() {
  return (
    <div>
      <h1>DETAILS</h1>
      <div className='btn btn-outline-danger'>
      <Link to="/booking/serviceBooking">Next</Link>
      </div>
    </div>
  )
}

export default Details