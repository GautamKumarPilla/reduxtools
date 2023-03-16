import React, { useEffect, useState } from "react";
import axios from "axios";
import { Field,Form, Formik } from "formik";
import * as Yup from 'yup';

const SignUp =()=>{
    const [newUser,setNewUser] = useState({});
    
    useEffect(()=>{
        axios({
            method: 'post',
            url: 'http://localhost:4000/signup',
            data: newUser
        }).then(()=>{
            alert("Signup Successful!")
        });
    },[newUser,setNewUser])
  
    return(
        <div className="bg-text">
        <div className="w-50 mx-auto">
            <div className="">
                <Formik
                    initialValues={{
                        'Username':'',
                        'Fullname':'',
                        'Mobile':'',
                        'Email':'',
                        'Pincode':'',
                        'City':'',
                        'State':'',
                        'Password':'',
                        'RePassword':''
                    }}
                    
                    validationSchema={Yup.object({
                        Username:Yup.string().max(30).min(10).required('*Please enter your email or mobile number'),
                        Fullname:Yup.string().max(20).min(10).required('*Enter your fullname'),
                        Mobile:Yup.string().max(10).required('*Enter your 10 digits mobile number'),
                        Email:Yup.string().required('*Enter your email'),
                        Pincode:Yup.string().required('*Enter pincode'),
                        City:Yup.string().required('*Enter city'),
                        State:Yup.string().required('*Enter state'),
                        Password:Yup.string().required('*Enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
                        RePassword:Yup.string().oneOf([Yup.ref('Password'),null],'*Password must match')
                    })}

                    onSubmit={(values)=>{
                        //console.log(values);
                        setNewUser({...newUser,...values});
                    }}
                >
                    {
                        (formik)=>{
                            return(
                                <Form onSubmit={formik.handleSubmit} className="form-control" style={{backgroundColor: 'rgb(233,234,236)'}}>
                                    <h2 className="border-bottom text-center">Sign-Up</h2>
                                    <label htmlFor="usa" className="form-lable mt-1">Username</label>
                                    <Field className="form-control" name="Username" placeholder="Enter username or mail"></Field>
                                    <div className="text-danger"><small>{formik.touched.Username && formik.errors.Username}</small></div>

                                    <label htmlFor="fn" className="form-lable mt-1">Full Name</label>
                                    <Field className="form-control" name="Fullname" placeholder="Enter fullname"></Field>
                                    <div className="text-danger"><small>{formik.touched.Fullname && formik.errors.Fullname}</small></div>

                                    <label htmlFor="mo" className="form-lable mt-1">Mobile</label>
                                    <Field className="form-control" name='Mobile' placeholder="Enter contact number"></Field>
                                    <div className="text-danger"><small>{formik.touched.Mobile && formik.errors.Mobile}</small></div>

                                    <label htmlFor="em" className="form-lable mt-1">Email ID</label>
                                    <Field className="form-control" name='Email' placeholder="Enter email"></Field>
                                    <div className="text-danger"><small>{formik.touched.Email && formik.errors.Email}</small></div>

                                    <label htmlFor="pc" className="form-lable mt-1">Pincode</label>
                                    <Field className="form-control" name='Pincode' placeholder="Enter here"></Field>
                                    <div className="text-danger"><small>{formik.touched.Pincode && formik.errors.Pincode}</small></div>

                                    <label htmlFor="cy" className="form-lable mt-1">City</label>
                                    <Field className="form-control" name='City' placeholder="Enter here"></Field>
                                    <div className="text-danger"><small>{formik.touched.City && formik.errors.City}</small></div>

                                    <label htmlFor="se" className="form-lable mt-1">State</label>
                                    <Field className="form-control" name='State' placeholder="Enter here"></Field>
                                    <div className="text-danger"><small>{formik.touched.State && formik.errors.State}</small></div>

                                    <label htmlFor="pwd" className="form-lable mt-1">Password</label>
                                    <Field className="form-control" name='Password' placeholder="Enter password"></Field>
                                    <div className="text-danger"><small>{formik.touched.Password && formik.errors.Password}</small></div>

                                    <label htmlFor="rpwd" className="form-lable mt-1">Confirm Password</label>
                                    <Field className="form-control" name='RePassword' placeholder="Re-enter password"></Field>
                                    <div className="text-danger"><small>{formik.touched.RePassword && formik.errors.RePassword}</small></div>
                                    <div style={{textAlign:'center'}}>
                                        <button type="submit" className="btn btn-outline-success border border-3 border-danger w-25 mx-1 mt-3">Submit</button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>            
        </div>
    </div>
    )
};

export default SignUp;



// import axios from 'axios'
// import React, { useState } from 'react'

// function Signup(){
//     const [newUser, setNewUser] = useState({
//       "Username":"",
//       "Fullname":"",
//        "EmailID":"",
//        "Mobile" :"",
//        "Pincode":"",
//       "Password":"",
//     "RePassword":""
//     });

//     function addSignup(){
//     axios({
//       method: 'post',
//       url: 'http://localhost:4000/signup',
//       data: newUser
//     }).then(()=>{
//       alert("Signup Successful!")
//     })
//   }

//   return (
//     <div class='bg-text'>
//      <div className='w-25 mx-auto'>
    
//      <form className='form-control'>
//      <h3 className='text-center text-primary'>Sign-Up Form</h3>
//       <label htmlFor='' className='text-primary'>Username</label>  
//       <input type="text" required name="" id="" placeholder='Enter username' className='form-control' onChange={(a)=>{setNewUser({...newUser,Username:a.target.value})}}/>
//       <label htmlFor="" className='text-primary'>Fullname</label>  
//       <input type="text" required name="" id="" placeholder='Enter fullname' className='form-control' onChange={(a)=>{setNewUser({...newUser,Fullname:a.target.value})}}/>
//       <label htmlFor="" className='text-primary'>Email-ID</label>  
//       <input type="email" required name="" id="" placeholder='Enter email-id' className='form-control' onChange={(a)=>{setNewUser({...newUser,EmailID:a.target.value})}}/>
//       <label htmlFor="" className='text-primary'>Mobile</label>  
//       <input type="text" required name="" id="" placeholder='Enter mobile number' className='form-control' onChange={(a)=>{setNewUser({...newUser,Mobile:a.target.value})}}/>
//       <label htmlFor="" className='text-primary'>Pincode</label>  
//       <input type="text" name="" id="" placeholder='Enter pincode' className='form-control' onChange={(a)=>{setNewUser({...newUser,Pincode:a.target.value})}}/>
//       <label htmlFor="" className='text-primary'>Password</label>  
//       <input type="password" required name="" id="" placeholder='Enter password' className='form-control' onChange={(a)=>{setNewUser({...newUser,Password:a.target.value})}}/>
//       <label htmlFor="" className='text-primary'>Confirm Password</label>  
//       <input type="password" required name="" id="" placeholder='Re-enter password' className='form-control' onChange={(a)=>{setNewUser({...newUser,RePassword:a.target.value})}}/>
//       <div className="d-flex justify-content-center ">
//        <button className="btn btn-outline-dark border border-3 border-danger mt-2" onClick={addSignup}>Submit</button>
//        </div>
//       </form>
//      </div>
//     </div>
//   )
// }

// export default Signup