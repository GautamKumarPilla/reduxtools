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
            alert('added successfully')
        });
    },[])

    return(
        <div className="sign-text">
        <div className="w-75 mx-auto">
            <div>
                <Formik
                    initialValues={{
                        'username':'',
                        'fullname':'',
                        'mobile':'',
                        'email':'',
                        'password':'',
                        'rePassword':''
                    }}
                    
                    validationSchema={Yup.object({
                        username:Yup.string().max(30).min(10).required('*Please enter your email or mobile number'),
                        fullname:Yup.string().max(20).min(10).required('*enter your name'),
                        mobile:Yup.string().max(10).required('*enter your 10 digits mobile number'),
                        email:Yup.string().required('*enter your email'),
                        password:Yup.string().required('*enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
                        rePassword:Yup.string().oneOf([Yup.ref('password'),null],'*password must match')
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
                                    <label htmlFor="us" className="form-lable mt-1">Username</label>
                                    <Field className="form-control" name="username" placeholder="mail or mobile number"></Field>
                                    <div className="text-danger">{formik.touched.username && formik.errors.username}</div>

                                    <label htmlFor="" className="form-lable mt-1">Full Name</label>
                                    <Field className="form-control" name="fullname"></Field>
                                    <div className="text-danger">{formik.touched.fullname && formik.errors.fullname}</div>

                                    <label htmlFor="" className="form-lable mt-1">Mobile</label>
                                    <Field className="form-control" name='mobile'></Field>
                                    <div className="text-danger">{formik.touched.mobile && formik.errors.mobile}</div>

                                    <label htmlFor="" className="form-lable mt-1">Email ID</label>
                                    <Field className="form-control" name='email'></Field>
                                    <div className="text-danger">{formik.touched.email && formik.errors.email}</div>

                                    <label htmlFor="" className="form-lable mt-1">Password</label>
                                    <Field className="form-control" name='password'></Field>
                                    <div className="text-danger"><small>{formik.touched.password && formik.errors.password}</small></div>

                                    <label htmlFor="" className="form-lable mt-1">Re-type Password</label>
                                    <Field className="form-control" name='rePassword'></Field>
                                    <div className="text-danger"><small>{formik.touched.rePassword && formik.errors.rePassword}</small></div>
                                    <div style={{textAlign:'center'}}>
                                        <button type="submit"  className="btn btn-dark w-25 mx-1 mt-3">Submit</button>
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
//       window.screenLeft("Added")
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