import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mail() {
  var teleport = useNavigate();
  return (
    <div class='bg-text'>
      <div className="w-25 mx-auto">
        <form className='form-control'>
        <label htmlFor="" className="form-lable mt-2 text-success">Email Address</label>
         <input type="email" id='' required className='form-control'/><br/>
         <button onClick={teleport('/verify')} className="btn btn-outline-primary">Send OTP/ Verification Link</button>
        </form>
        </div> 
    </div> 
  )
}

export default Mail