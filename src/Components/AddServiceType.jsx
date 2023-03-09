import axios from 'axios';
import React,{useState} from 'react';

function AddServiceType() {
  const [newServiceType, setNewServiceType] = useState('')
  function addServiceType(){
    axios({
      method: 'post',
      url: 'http://localhost:4000/serviceTypes',
      data: {
        id: '',
        title: newServiceType
      }
    }).then(()=>{
      alert("ADDED")
    })
  }
  return (
    <div className='border rounded border-warning p-3 bg-primary'>
      <h1 className='text-warning'>Add ServiceType</h1> 
      <input type="text" className='form-control' onChange={(e)=>{setNewServiceType(e.target.value)}} placeholder="Enter here"/> <hr />
      <button className='text-warning btn btn-outline-light' onClick={addServiceType}>Add Service Type</button>
    </div>
  )
}

export default AddServiceType