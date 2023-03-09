import React from "react";
import { Link } from "react-router-dom";
const Login =()=>{

    return(
    <div class="bg-text">
    <div className="w-25 mx-auto">
        <form className="form-control">
            <h3 className="text-primary">Login</h3>
            <label htmlFor="" className="form-lable mt-2 text-success">Username</label>
            <input type="text" placeholder="Enter username" className="form-control" />
            <label htmlFor="" className="form-lable mt-2 text-danger">Password</label>
            <input type="password" placeholder="Enter password" className="form-control"/>
            <div className="mt-2">
            <Link to="/mail" className="text-warning"><p>Forgot Password?</p></Link>
            </div>
            <div className="d-flex justify-content-center ">
            <button className="btn btn-outline-dark border border-3 border-danger mt-2" style={{onhover:'backgroundColor:blue'}}>Submit</button>
            </div>
        </form>
        <Link to="/signup" className="text-light">Don't have an account yet?</Link>
    </div>
    </div>
    )
};

export default Login;