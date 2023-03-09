import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Bill(props) {
  const [total, setTotal] = useState(0);

  var navigate = useNavigate();
  useEffect(()=>{
    var temp=0;
    for(var k in props.bill){
    for(var j in props.bill[k]){
      temp = temp+Number(props.bill[k][j])
    }
  }
    setTotal(temp);
  },[props.bill]);
console.log(total)
  return (
    <div className='bg-dark p-2'>
       <h1>Bill</h1>
       {
        Object.keys(props.bill).map((st)=>{
         return <div className='bg-dark p-2'>
          <h4>{st}</h4>
          {
            props.bill && Object.keys(props.bill[st]).map((s)=>{
              return <div className='bg-dark p-2'>
              <b>{s}:{props.bill[st][s]}</b>
             </div>
              })
            }
              </div>
          })
      }
      <h2>Total:{total}</h2>
      {
        total!==0 && <button className='btn btn-outline-success d-flex mx-auto' onClick={()=>{navigate(`/booking/payment/${total}`)}}>Proceed for payment</button>
      }
    </div>
  )
}

export default Bill