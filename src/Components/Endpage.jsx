import React from 'react';
import { Link } from 'react-router-dom';

function Endpage() {
  return (
    <div>
      <div className='d-flex justify-content-center mx-5 my-5'>
        <h1>
        Thank you!
        Visit Again
        </h1>
        <br/>
        
    </div>
    <div className='d-flex justify-content-center'>
    <Link to={'/'}>Back to Homepage</Link>
    </div>
    </div>
  )
}

export default Endpage