import axios from 'axios'
import React,{useState,useEffect} from 'react'
import * as _ from 'lodash';

function ServiceCatalog() {
  const [services, setServices] = useState({})
  useEffect(() =>{
    axios.get("http://localhost:4000/services").then((res) =>{
      var x= _.groupBy(res.data,'serviceType')
       setServices({...x});
    })
   },[]);
  return (
    <div className='text-secondary p-3'>
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
    </div>
  )
}

export default ServiceCatalog