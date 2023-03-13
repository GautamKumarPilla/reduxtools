import React from 'react';
import { Link } from 'react-router-dom';

function Endpage() {
  return (
    <div className='bg-text'>
      <div className='bg-dark'>
      <div className='d-flex justify-content-center mx-5 my-5 p-3'>
        <h1>
        Thank you!
        Visit Again
        </h1>
        <br/>
        
    </div>
    <div className='d-flex justify-content-center mb-5'>
    <Link to={'/'}>Back to Homepage</Link>
    </div>
    </div>
    </div>
  )
}

export default Endpage