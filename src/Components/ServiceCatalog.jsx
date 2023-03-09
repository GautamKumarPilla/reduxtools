import axios from 'axios'
import React,{useState,useEffect} from 'react'
import * as _ from 'lodash';
import { useNavigate } from 'react-router-dom';

function ServiceCatalog() {
  const teleport = useNavigate();
  const [services, setServices] = useState({})
  useEffect(() =>{
    axios.get("http://localhost:4000/services").then((res) =>{
      var x= _.groupBy(res.data,'serviceType')
       setServices({...x});
    })
   },[]);
  return (
    <div className='text-secondary p-3 bg-dark'>
      <h1 className='text-warning'>Service-Catalog</h1>
      {
        Object.keys(services).map((st)=>{
          return <li>
            <b>{st}</b>
            <br/>
            <ol>
            {
              services[st].map((s)=>{
                return <li>
                  <h3>{s.serviceTitle}</h3>
                 <ol>
                  {
                      Object.keys(s.serviceCost).map((sc)=>{
                        return <li>{sc}:{s.serviceCost[sc]}</li>
                      })
                    }
                 </ol>
                  </li>
              })
            }
            </ol>
            </li>
        })
      }
      <button onClick={()=>{teleport('/booking')}} className="d-flex mx-auto text-light border border-2 border-warning btn btn-outline-success">Book Service</button>
    </div>
  )
}

export default ServiceCatalog