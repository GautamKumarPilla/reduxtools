import axios from 'axios'
import React, { useState } from 'react'

function Signup(){
    const [newUser, setNewUser] = useState({
      "Username":"",
      "Fullname":"",
       "EmailID":"",
       "Mobile" :"",
       "Pincode":"",
      "Password":"",
    "RePassword":""
    });

    function addSignup(){
    axios({
      method: 'post',
      url: 'http://localhost:4000/signup',
      data: newUser
    }).then(()=>{
      window.screenLeft("Added")
    })
  }

  return (
    <div class='bg-text'>
     <div className='w-25 mx-auto'>
    
     <form className='form-control'>
     <h3 className='text-center text-primary'>Sign-Up Form</h3>
      <label htmlFor=''>Username</label>  
      <input type="text" required name="" id="" placeholder='Enter username' className='form-control' onChange={(a)=>{setNewUser({...newUser,Username:a.target.value})}}/>
      <label htmlFor="" className='form-label'>Fullname</label>  
      <input type="text" required name="" id="" placeholder='Enter fullname' className='form-control' onChange={(a)=>{setNewUser({...newUser,Fullname:a.target.value})}}/>
      <label htmlFor="">Email-ID</label>  
      <input type="email" required name="" id="" placeholder='Enter email-id' className='form-control' onChange={(a)=>{setNewUser({...newUser,EmailID:a.target.value})}}/>
      <label htmlFor="">Mobile</label>  
      <input type="text" required name="" id="" placeholder='Enter mobile number' className='form-control' onChange={(a)=>{setNewUser({...newUser,Mobile:a.target.value})}}/>
      <label htmlFor="">Pincode</label>  
      <input type="text" name="" id="" placeholder='Enter pincode' className='form-control' onChange={(a)=>{setNewUser({...newUser,Pincode:a.target.value})}}/>
      <label htmlFor="">Password</label>  
      <input type="password" required name="" id="" placeholder='Enter password' className='form-control' onChange={(a)=>{setNewUser({...newUser,Password:a.target.value})}}/>
      <label htmlFor="">Confirm Password</label>  
      <input type="password" required name="" id="" placeholder='Re-enter password' className='form-control' onChange={(a)=>{setNewUser({...newUser,RePassword:a.target.value})}}/>
      <div className="d-flex justify-content-center ">
       <button className="btn btn-outline-dark border border-3 border-danger mt-2" onClick={addSignup}>Submit</button>
       </div>
      </form>
     </div>
    </div>
  )
}

export default Signup