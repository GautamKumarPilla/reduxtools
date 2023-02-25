import axios from 'axios';
import React,{useState} from 'react';

function AddCarType() {
  const [newcarType, setNewcarType] = useState('')
  function addCarType(){
    axios({
      method: 'post',
      url: 'http://localhost:4000/carTypes',
      data: {
        id:'',                 //if not given it doesnt come in order
        type: newcarType
      }
    }).then(()=>{
      alert("HI")
    })
  }
  return (
    <div className='border rounded border-warning p-3 bg-primary'>
      <h1 className='text-warning'>Add CarType</h1>
      <input type="text" className='form-control required' placeholder='Enter here' onChange={(e)=>{setNewcarType(e.target.value)}}/> <hr />
      <button className='text-warning btn btn-outline-light' onClick={addCarType}>Add Car Type</button>
    </div>
  )
}
export default AddCarType