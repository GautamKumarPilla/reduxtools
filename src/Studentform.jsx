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
function handleSubmit(){
   preventDefault()
}
function addstudent(e){
      console.log(e.target.value)
}
  return(
    <div>
    <form onSubmit={handleSubmit}>
         <table width={'50%'} align="center">
            <thead align="center" aria-colspan={2}>
               <h1>Student Details</h1>
                </thead>
            <tbody>
            <tr>
                    <td>Firstname</td>
                    <td>
                        <input type="text" name="" id="" onChange={(a)=>setnewstudent(a.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>Lastname</td>
                    <td>
                        <input type="text" name="" id="" />
                    </td>
                </tr>
            <tr>
                <td>Gender</td>
                <td>
                    <input type="radio" name="male" value="gen"/>:Male
                    <input type="radio" name="female" value="gen"/>:Female
                    <input type="radio" name="others" value="gen"/>:Others
                </td>
            </tr>
            <tr>
            <td>Date Of Birth</td>
            <td><input type="date" name="" id="" required/></td>
            </tr>    
            <tr>
                <td>Country</td>
                <td>
                <select name="" id="">Select Country
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
                    <input type="number" name="" id="" />
                </td>
            </tr>
            <tr colSpan={2}>
                <td> 
                    <button onClick={()=>{addstudent()}}>Add Student</button>
                </td>
            </tr>
            </tbody>
         </table>
    </form>
    </div>
  )
}

export default Studentform;