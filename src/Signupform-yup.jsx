import React from "react";            //using useFormik hook & Yup
import {useFormik} from "formik";
import * as Yup from 'yup';

function Signup(props){

    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(20).required("*firstname is a mandatory field"),
            lastname:Yup.string().max(20).required("*lastname is a mandatory field"),
            email:Yup.string().email('given email is not valid').required("*please enter email"),
            password:Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,"given password is not in the required format").required("*enter password")
        }),
        onSubmit:(values)=>{
          console.log(values)  
        }
    })
    return(
        <div align="center" className='border border-2 border-info p-4 m-3'>
         <h1>Registration Form(Yup)</h1> 
        <form onSubmit={myform.handleSubmit} autoComplete=''>
           <label htmlFor="firstname">Firstname:</label>&nbsp;&nbsp;
            <input type="text" name="firstname" id="firstname" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.firstname}/>
            <h5>{myform.touched.firstname && myform.errors.firstname}</h5>
            <label htmlFor="lastname">Lastname:</label>&nbsp;&nbsp;
            <input type="text" name="lastname" id="lastname" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.lastname}/>
            <h5>{myform.touched.lastname && myform.errors.lastname}</h5>
            <label htmlFor="email">Email-Address:</label>&nbsp;&nbsp;
            <input type="email" name="email" id="email" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.email}/>
            <h5>{myform.touched.email && myform.errors.email}</h5>
            <label htmlFor="password">Password:</label>&nbsp;&nbsp;
            <input type="password" name="password" id="password" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.password}/>
            <h5>{myform.touched.password && myform.errors.password}</h5>
            <button type="submit" className="btn btn-outline-success">Submit</button>
        </form>
        </div>
    )
}
export default Signup;