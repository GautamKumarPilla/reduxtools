import { useFormik } from "formik"

function formikForm(values){
  var errors={};
  if(!values.firstname){
    errors.firstname='*firstname is required'
  }
  if(!values.dob){
    errors.dob='*please input your dob'
  }
  return errors;
}

function Signups() {
  var myform = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      dob:''
    },
    validate:formikForm,
    onSubmit:(values)=>{
      console.log("onsubmit",values)
    }
  })
  console.log(myform.touched)
  return (
    <div align="center" className='border border-2 border-info p-4'>
      <h1>Sign-Up Form</h1>
      <form onSubmit={myform.handleSubmit}>
        <label htmlFor="fn">First Name</label>
        <input type="text" name="firstname" onChange={myform.handleChange} onBlur={myform.handleBlur}/>
        <div>{myform.touched.firstname && myform.errors.firstname}</div>
        <label htmlFor="ln">Last Name</label>
        <input type="text" name="lastname" onChange={myform.handleChange} onBlur={myform.handleBlur}/>
        <div>{myform.touched.lastname && myform.errors.lastname}</div>
        <label htmlFor="db">Date of Birth</label>
        <input type="date" name="dob" onChange={myform.handleChange} onBlur={myform.handleBlur}/>
        <div>{myform.touched.dob && myform.errors.dob}</div>
        <br></br>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}
export default Signups