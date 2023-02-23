import axios from 'axios';
import React,{useState} from 'react';

function AddCarType() {
  const [newcartType, setNewcartType] = useState('')
  function addCarType(){
    axios({
      method: 'post',
      url: 'http://localhost:4000/carTypes',
      data: {
        type: newcartType,
      }
    }).then(()=>{
      alert("HI")
    })
  }
  return (
    <div>
      <h1>AddCarType</h1>
      <input type="text" onChange={(e)=>{setNewcartType(e.target.value)}}/>
      <button onClick={addCarType}>Add Car Type</button>
    </div>
  )
}
export default AddCarType