import axios from "axios"
import React,{useEffect, useState} from "react"
function AddService() {
  const [serviceTypes, setServiceTypes] = useState([])
  const [carTypes, setcarTypes] = useState([])
  const [newService, setnewService] = useState({
  "serviceType": "",
    "serviceTitle": "",
    "serviceCost": {
      "Hatchback": 0,
      "Sedan": 0,
      "CrossOver": 0,
      "XUV": 0
    }
})
 useEffect(() =>{
  axios.get("http://localhost:4000/serviceTypes").then((res) =>{
     setServiceTypes([...res.data])
  })
  axios.get("http://localhost:4000/carTypes").then((res) =>{
     setcarTypes([...res.data])
  })
 },[])
 function addService(){
  axios({
    method:'post',
    url:'http://localhost:4000/services',
    data: newService
  }).then(()=>{
    alert('ADDED')
  })
 }
  return (
    <div className="text-warning">
      <h1>AddService</h1>
      Service-Type: <select name="serviceType" onChange={(a) =>{setnewService({...newService,serviceType:a.target.value})}}>
        <option value={null} selected disabled>Select Service-Type</option>
        {
        serviceTypes && serviceTypes.map((ST) =>{
          return <option value={ST.title}>{ST.title}</option>
        })
      }
      </select>
      <br />
      Service-Title: <input type="text" onChange={(a) =>{setnewService({...newService,serviceTitle:a.target.value})}}/> <br />
      <h5 className="text-light">Enter car services cost:</h5>
      {
        carTypes.map((ct)=>{
          return <div>
            <b>{ct.type}:</b>
          <input type="text" onChange={(a)=>{setnewService({...newService,serviceCost:{...newService.serviceCost,[ct.type]:a.target.value}})}}/>
          </div>
        })
      } <br/>
      <button onClick={addService} className="btn btn-outline-light border border-danger d-flex justify-content-center">Add-Service</button>
    </div>
  )
}
export default AddService