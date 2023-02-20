import React from "react";
import {useFormik} from "formik";

function Signup(props){
    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        onSubmit:()=>{
          "form is submitted"  
        }
    })
    return(
        <div align="center">
         <h1>Registration Form</h1>
        <form onSubmit={myform.handleSubmit}>
           <label htmlFor="firstname">Firstname:</label>&nbsp;&nbsp;
            <input type="text" name="firstname" id="firstname" onChange={myform.handleChange}/><br/><br/>
            <label htmlFor="lastname">Lastname:</label>&nbsp;&nbsp;
            <input type="text" name="lastname" id="lastname" onChange={myform.handleChange}/><br/><br/>
            <label htmlFor="email">Email-Address:</label>&nbsp;&nbsp;
            <input type="email" name="email" id="email" onChange={myform.handleChange}/><br/><br/>
            <label htmlFor="password">Password:</label>&nbsp;&nbsp;
            <input type="password" name="password" id="password" onChange={myform.handleChange}/><br/><br/>
            <button type="submit" className="btn btn-outline-success">Submit</button>
        </form>
        </div>
    )
}
export default Signup;