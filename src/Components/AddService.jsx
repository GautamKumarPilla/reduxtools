import axios from "axios"
import React,{ useEffect, useState } from "react"

function AddService(){
   const[newService,setnewService] = useState('')
   const[serviceTitle,setserviceTitle] = useState('')
    const[serviceCost,setserviceCost] = useState('')
  
   
    function addService(){
  axios({
    method:"post",
    url: "http://localhost:4000/services",
    data:{
      id:'',
      "serviceType": newService,
      "serviceTitle":serviceTitle,
      "serviceCost":{
        "Hatchback":serviceCost,
        "XUV":serviceCost,
        "Sedan":serviceCost,
        "CrossOver":serviceCost
      }
    }
  }).then(()=>{
    alert("ADDED")
  })
    }
    return(
        <div className="text-warning">
        Servicetype:<select name="" id="" onChange={(a)=>{setnewService(a.target.value)}}>
          <option value="" hidden>Select Servicetype</option>
          <option value="Puncture">Puncture</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Repair">Repair</option>
        </select><br/><br/>
        Servicetitle:<input type="text" name="" id="" onChange={(a)=>{setserviceTitle(a.target.value)}}/>
        <table className="table table-bordered mt-3 text-warning">
          <thead>
            <tr>
              <td>Car Type</td>
              <td>Service Cost</td>
            </tr>
          </thead>
          <tbody>
             <tr><td>Hatchback</td>
             <td><input type="text" name="" id="" onChange={(a)=>{setserviceCost(a.target.value)}}/></td>
             </tr>
             <tr><td>Sedan</td>
             <td><input type="text" name="" id="" onChange={(a)=>{setserviceCost(a.target.value)}}/></td>
             </tr>
             <tr><td>XUV</td>
             <td><input type="text" name="" id="" onChange={(a)=>{setserviceCost(a.target.value)}}/></td>
             </tr>
             <tr><td>CrossOver</td>
             <td><input type="text" name="" id="" onChange={(a)=>{setserviceCost(a.target.value)}}/></td>
             </tr>
          </tbody>
        </table>
        <br/><br/><button onClick={addService} className="mx-5 btn btn-outline-light border border-warning justify-content-center">Add service</button>
        </div>
    )
}

export default AddService