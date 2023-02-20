import React, { useState } from "react";

function Studentform(){
  const[newstudent,setnewstudent]= useState({
    firstname:'',
    lastname:'',
    gender:'',
    dob:'',
    country:'',
    pincode:''
  })
function handleSubmit(a){
    a.preventDefault();
    if(newstudent.pincode>999999 || newstudent.pincode<=100000){
        alert("Please enter valid pincode")
        return
    }
    addstudent();
}
function handlePincode(a){
    if(a.target.value>999999 || a.target.value<=100000){
      a.target.style.border="3px solid salmon"
        return
    }
    else{
        setnewstudent({...newstudent,pincode:a.target.value})
    }
}
function addstudent(){
      console.log(newstudent)
}
  return(
    <div align="center">
    <form onSubmit={handleSubmit}>
         <table width='50%' >
            <thead  align="center" colSpan='3'>
               <h1>Student Details</h1>
                </thead>
            <tbody>
            <tr>
                    <td>Firstname</td>
                    <td>
                        <input type="text" required name="" id="" onChange={(a)=>{setnewstudent({...newstudent,firstname:a.target.value})}}/>
                    </td>
                </tr>
                <tr>
                    <td>Lastname</td>
                    <td>
                        <input type="text" name="" id="" onChange={(a)=>{setnewstudent({...newstudent,lastname:a.target.value})}}/>
                    </td>
                </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <input type="radio" name="gen" value="MALE" onChange={(a)=>{setnewstudent({...newstudent,gender:a.target.value})}}/>:Male
                    <input type="radio" name="gen" value="FEMALE" onChange={(a)=>{setnewstudent({...newstudent,gender:a.target.value})}}/>:Female
                    <input type="radio" name="gen" value="OTHERS" onChange={(a)=>{setnewstudent({...newstudent,gender:a.target.value})}}/>:Others
                </td>
            </tr>
            <tr>
            <td>Date Of Birth</td>
            <td><input type="date" name="" id="" required onChange={(a)=>{setnewstudent({...newstudent,dob:a.target.value})}}/></td>
            </tr>    
            <tr>
                <td>Country</td> 
                <td>
                <select name="" id="" placeholder="Select Country" onChange={(a)=>{setnewstudent({...newstudent,country:a.target.value})}}>
                <option value="IND">India</option>
                <option value="PAK">Pakistan</option>
                <option value="NP">Nepal</option>
                <option value="SL">Srilanka</option>
                <option value="BD">Bangladesh</option>
                </select>
                </td>
            </tr>
            <tr>
                <td>Pincode</td>
                <td>
                    <input type="number" name="" id="" onBlur={handlePincode}/>
                </td>
            </tr>
            <tr> 
                <td colSpan='2' align='center'> 
                    <button className="btn btn-outline-success">Add Student</button>
                </td>
            </tr>
            </tbody>
         </table><br /><br />
    </form>
    </div>
  )
}

export default Studentform;