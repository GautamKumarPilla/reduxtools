import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

function Mail() {
  var teleport = useNavigate();
  // useEffect(()=>{
    
  //   },[])
  return (
    <div class='bg-text'>
      <div className="w-25 mx-auto">
        <form className='form-control'>
        <label htmlFor="" className="form-lable mt-2 text-success">Email Address</label>
         <input type="email" id='' required min={7} max={18} className='form-control'/><br/>
         <button onClick={()=>{teleport('/verify')}} className="btn btn-outline-primary">Send OTP/ Verification Link</button>
        </form>
        </div>  
    </div> 
  )
}

export default Mail