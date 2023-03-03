import { connect } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import * as _ from 'lodash';
import Billing from "./Billing";

const ServiceBooking =(props)=>{
    //console.log(props)
    //const navigate = useNavigate();
     const [services,setServices] = useState({});
     const [selectedServices,setSelectedServices] = useState([]);

    useEffect(()=>{
        axios('http://localhost:4000/services').then((res)=>{
            var x = _.groupBy(res.data,'serviceType');
            setServices({...x});
            //console.log(res.data)
        })
    },[]);

    var updateBill =(ev,st,s)=>{
        var temp = {...selectedServices};
        if(temp[st]){
            if(ev.target.checked){
                temp = {...temp,[st]:{...temp[st],[s.serviceTitle]:ev.target.value}};
            }
            else{
                delete temp[s.serviceType][s.serviceTitle];
                if(Object.keys(temp[st].length===0)){
                    delete temp[st];
                }
            }
        }
        else{
            temp = {...temp,[st]:{[s.serviceTitle]:ev.target.value}};
        }
        setSelectedServices({...temp});
    };

    return (
        <div className="m-4  border border-2 rounded">
            <div className="border-bottom">
                <h1 className="mx-4">ServiceBooking</h1>
            </div>

            <div className="">
                <ul type="none">
                    {
                        Object.keys(services).map((st,i)=>{
                            return <li key={i}>
                                <h5 className="text-danger mt-1">{st}</h5>
                                <ol>
                                    {
                                        services[st].map((s)=>{
                                            return <li>
                                                {/* {JSON.stringify(s)} */}
                                                {/* <h4 style={{color:'rgb(1, 3, 103)'}}>{s.serviceTitle}</h4> */}
                                                {
                                                    props.user && (
                                                        <ol>
                                                        <input type="checkbox" className="form-check-input" value={s.serviceCost[props.user.userDetails.selectedCarType]} onChange={updateBill}
                                                            name={props.user.userDetails.selectedCarType} />: {s.serviceTitle}(&#8377;{s.serviceCost[props.user.userDetails.selectedCarType]})
                                                        
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
                </ul>
            </div>
            <div className="">
                <Billing bill={selectedServices}></Billing>
            </div>
        </div>
    )
};

export default connect(store=>store)(ServiceBooking);