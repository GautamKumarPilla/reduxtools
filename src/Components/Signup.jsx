import React from 'react'

function Signup() {
  return (
    <div class='bg-text'>
     <div className='w-25 mx-auto'>
    
     <form className='form-control'>
     <h3 className='text-center text-primary'>Sign-Up Form</h3>
      <label htmlFor=''>Username</label>  
      <input type="text" required name="" id="" placeholder='Enter username' className='form-control'/>
      <label htmlFor="" className='form-label'>Fullname</label>  
      <input type="text" required name="" id="" placeholder='Enter fullname' className='form-control'/>
      <label htmlFor="">Email-ID</label>  
      <input type="email" required name="" id="" placeholder='Enter email-id' className='form-control'/>
      <label htmlFor="">Mobile</label>  
      <input type="text" required name="" id="" placeholder='Enter mobile number' className='form-control'/>
      <label htmlFor="">Pincode</label>  
      <input type="text" name="" id="" placeholder='Enter pincode' className='form-control'/>
      <label htmlFor="">Password</label>  
      <input type="password" required name="" id="" placeholder='Enter password' className='form-control'/>
      <label htmlFor="">Confirm Password</label>  
      <input type="password" required name="" id="" placeholder='Re-enter password' className='form-control'/>
      <div className="d-flex justify-content-center ">
       <button className="btn btn-outline-dark border border-3 border-danger mt-2">Submit</button>
       </div>
      </form>
     </div>
    </div>
  )
}

export default Signup