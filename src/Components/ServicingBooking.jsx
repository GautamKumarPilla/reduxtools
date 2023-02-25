import {connect} from 'react-redux'
import axios from "axios"
import React,{useState,useEffect} from "react"
import * as _ from 'lodash'
import { useNavigate } from 'react-router-dom'
function ServiceBooking(props) {
  var navigate = useNavigate()
  const [services, setServices] = useState({});
  const [user,setUser] = useState({});
  useEffect(()=>{
    axios.get("http://localhost:4000/services").then((res)=>{
      var x = _.groupBy(res.data,'serviceType');
      setServices({...x})
    })
   
  },[])
  function updateUser(){
    console.log(user)
    props.dispatch({type:'UPDATEUSER',payload:user})
    navigate("/booking/serviceBooking/billing")
  }
  
  return (
    <div>
      <h1>ServiceBooking</h1>
      {
        Object.keys(services).map((st)=>{
          return <li>
            {st}
            <br></br>
            <ol>
              {
                services[st].map((s)=>{
                  return <li>
                    <h3>{s.serviceTitle}</h3>
                    <ol>
                      <b>{props.user && props.user.userDetails.selectedCarType}:{s.serviceCost[props.user.userDetails.selectedCarType]}</b>
                   
                    </ol>
                  </li>
                  
                })
              }
            </ol>
            </li>
        })
      }
      <div className="d-flex flex-wrap justify-content-center">
      <button className="btn btn-outline-warning" onClick={updateUser}>Next</button>
    </div>
    </div>
  )
}
export default connect(store=>store)(ServiceBooking)