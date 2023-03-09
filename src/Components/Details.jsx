import React from 'react'
import axios from "axios";
import { useEffect,useState } from "react"
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom'            //navigate is used instead of Link.


function Details(props) {
 
  var navigate = useNavigate();
  const [carTypes, setCarTypes] = useState([]);
  const [user,setUser] = useState({});
  useEffect(()=>{
    setUser(props.user.userDetails)
  },[props.user.userDetails])
 
  useEffect(()=>{
    axios.get("http://localhost:4000/carTypes").then((res)=>{
      setCarTypes([...res.data]);
       window.screen("Loggedin Successfully!")
    })
  },[]);
  function updateUser(){
   // console.log(user)
    props.dispatch({type:'UPDATEUSER',payload:user})
    navigate("/booking/servicebooking")
  }
  
  return (
    <div className="p-4 w-75 mx-auto border bg-dark">
    <h1>Details</h1>
    <div className="d-flex flex-wrap border p-4">
      <div className="w-50 p-2">
        <label htmlFor="" className="form-label">Full Name</label>
        <input type="text" className="form-control" onChange={(e)=>{setUser({...user,fullname:e.target.value})}}/>
      </div>
      <div className="w-50 p-2">
        <label htmlFor="" className="form-label">Mobile Number</label>
        <input type="text" className="form-control" onChange={(e)=>{setUser({...user,mobile:e.target.value})}} />
      </div>
      <div className="w-50 p-2">
        <label htmlFor="" className="form-label">Vehicle Registration Number</label>
        <input type="text" className="form-control" onChange={(e)=>{setUser({...user,carreg:e.target.value})}} />
      </div>
      <div className="w-50 p-2">
        <label htmlFor="" className="form-label">Select Car-Class</label>
        <div>
          {
            carTypes && carTypes.map((ct)=>{
              return (
                <><input type="radio" name="carType" value={ct.type} className="form-check-input p-2 " 
                onChange={(e)=>{setUser({...user,selectedCarType:e.target.value})}} />
                &nbsp;:<span className="p-2">{ct.type}</span></>
              )
            })
          }
        </div>
      </div>
    </div>


    <div className="d-flex flex-wrap justify-content-center">
      <button className="mt-3 btn btn-outline-danger" onClick={updateUser}>Next</button>
    </div>
  </div>
  )
}

export default connect(store=>store)(Details)

{/* <div className='p-2'>
      <h1>DETAILS</h1>
      <div className='btn btn-outline-danger'>
      <Link to="/booking/serviceBooking" className='text-decoration-none text-dark'>Next</Link>
      </div>
    </div>
  
  */}