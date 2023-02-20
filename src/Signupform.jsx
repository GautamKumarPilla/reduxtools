import React from "react";
import {useFormik} from "formik";

function Signup(props){
function validate(values){
    var errors= {}
    if(values.firstname===null || values.firstname===''){
        errors.firstname = "*firstname is required"
    }
    if(values.lastname===null || values.lastname===''){
        errors.lastname = "*lastname is required"
    }
   return errors
}

    const myform = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:''
        },
        validate:validate,
        onSubmit:(values)=>{
          console.log(values)  
        }
    })
    return(
        <div align="center">
         <h1>Registration Form</h1>
        <form onSubmit={myform.handleSubmit} autoComplete=''>
           <label htmlFor="firstname">Firstname:</label>&nbsp;&nbsp;
            <input type="text" name="firstname" id="firstname" onChange={myform.handleChange} value={myform.values.firstname}/><br/><br/>
            <h5>{myform.errors.firstname}</h5>
            <label htmlFor="lastname">Lastname:</label>&nbsp;&nbsp;
            <input type="text" name="lastname" id="lastname" onChange={myform.handleChange} value={myform.values.lastname}/><br/><br/>
            <h5>{myform.errors.lastname}</h5>
            <label htmlFor="email">Email-Address:</label>&nbsp;&nbsp;
            <input type="email" name="email" id="email" onChange={myform.handleChange} value={myform.values.email}/><br/><br/>
            <label htmlFor="password">Password:</label>&nbsp;&nbsp;
            <input type="password" name="password" id="password" onChange={myform.handleChange} value={myform.values.password}/><br/><br/>
            <button type="submit" className="btn btn-outline-success">Submit</button>
        </form>
        </div>
    )
}
export default Signup;