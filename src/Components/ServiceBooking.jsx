import {connect} from 'react-redux'
import axios from "axios"
import React,{useState,useEffect} from "react"
import * as _ from 'lodash'
//import { useNavigate } from 'react-router-dom'
import Bill from './Bill'

function ServiceBooking(props){
 //  var navigate = useNavigate();
  const [services, setServices] = useState({});
  const [selectedServices,setSelectedServices] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/services").then((res)=>{
      var x = _.groupBy(res.data,'serviceType');
      setServices({...x})
    })
  },[]);
  
  const UpdateCart=(ev,st,s)=>{
    var temp = {...selectedServices};
  if(temp[st]){
    if(ev.target.checked){
      temp = {...temp,[st]:{...temp[st],[s.serviceTitle]:ev.target.value}};
    }
    else{
      delete temp[s.serviceType][s.serviceTitle]
      if(Object.keys(temp[st]).length===0){
        delete temp[st];
      }
    }
  }
      else{
          temp={...temp,[st]:{[s.serviceTitle]:ev.target.value}}
      }
      setSelectedServices({...temp});
  }
      // const addBill=()=>{
      //   navigate("/booking/servicebooking")
      // }
   
  return(
    <div className='container d-flex flex-wrap'>
      <div className='border border-info w-50 p-4 bg-dark'>
      <h1>ServiceBooking</h1>
      {
        Object.keys(services).map((st,i)=>{
          return <li key={i}>
            <b>{st}</b>
            <br></br>
            <ol>
              {
                services[st].map((s)=>{
                  return <li>
                  {
                    props.user && (
                      <ol>
                        <input type="checkbox" value={s.serviceCost[props.user.userDetails.selectedCarType]} onChange={(ev)=>{ UpdateCart(ev,st,s)}} 
                        name={props.user.userDetails.selectedCarType} />&nbsp;:{s.serviceTitle}(Rs.{s.serviceCost[props.user.userDetails.selectedCarType]})
                      </ol>
                    )
                  }
                  </li>
                  })
              }
            </ol>
            </li>
        })
      }    
    </div>
    <div className='border border-danger rounded w-25 ms-auto'>
           <Bill bill={selectedServices}></Bill>
          </div>
    </div>
  )
}
export default connect(store=>store)(ServiceBooking)