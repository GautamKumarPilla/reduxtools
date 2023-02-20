import React from "react";
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
        <div align="center">
         <h1>Registration Form</h1>
        <form onSubmit={myform.handleSubmit} autoComplete=''>
           <label htmlFor="firstname">Firstname:</label>&nbsp;&nbsp;
            <input type="text" name="firstname" id="firstname" onBlur={myform.handleBlur} onChange={myform.handleChange} value={myform.values.firstname}/><br/><br/>
            <h5>{myform.touched.firstname && myform.errors.firstname}</h5>
            <label htmlFor="lastname">Lastname:</label>&nbsp;&nbsp;
            <input type="text" name="lastname" id="lastname" onChange={myform.handleChange} value={myform.values.lastname}/><br/><br/>
            <h5>{myform.touched.lastname && myform.errors.lastname}</h5>
            <label htmlFor="email">Email-Address:</label>&nbsp;&nbsp;
            <input type="email" name="email" id="email" onChange={myform.handleChange} value={myform.values.email}/><br/><br/>
            <h5>{myform.touched.email && myform.errors.email}</h5>
            <label htmlFor="password">Password:</label>&nbsp;&nbsp;
            <input type="password" name="password" id="password" onChange={myform.handleChange} value={myform.values.password}/><br/><br/>
            <h5>{myform.touched.password && myform.errors.password}</h5>
            <button type="submit" className="btn btn-outline-success">Submit</button>
        </form>
        </div>
    )
}
export default Signup;