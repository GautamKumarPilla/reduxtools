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
    <div>
      <h1>AddCarType</h1>
      <input type="text" onChange={(e)=>{setNewcarType(e.target.value)}}/>&nbsp;&nbsp;
      <button onClick={addCarType}>Add Car Type</button>
    </div>
  )
}
export default AddCarType