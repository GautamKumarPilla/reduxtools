import React from 'react';
import { Link } from 'react-router-dom';

function Verify() {
  return (
    <div class="bg-text">
  <div className='text-center'>
    <i>
     {
      `Verification link & Otp sent successfully, please check mail`
     }
    </i><br />
    <b className='text-dark'>
      {
        `Set a new password and kindly login again!`
      }
    </b>
    <br/>
    <Link to={'/login'}>Back to Login</Link>
  </div>
    </div>
  )
}

export default Verify