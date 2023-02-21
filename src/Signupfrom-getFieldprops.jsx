import { useFormik } from "formik"         //using useFormik-Hook and getFieldProps
import * as Yup from 'yup'

function SignupGetFieldProps() {
  var formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      dob:''
    },
    validationSchema:Yup.object({
      firstname:Yup.string().max(8,"not more than 8").min(3,'too small').required('*firstname'),
      lastname:Yup.string().max(10,"please below 10").min(5,'too small').required('*lastname')
    }),
    // validate:checkForm,
    onSubmit:(values)=>{
      console.log("onsubmit",values)
    }
  })
  console.log(formik.touched)
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h1>Sign-Up Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="fn">First Name</label>
        <input type="text"  {...formik.getFieldProps('firstname')}/>
        <div>{formik.touched.firstname && formik.errors.firstname}</div>
        <label htmlFor="ln">Last Name</label>
        <input type="text" {...formik.getFieldProps('lastname')}/>
        <div>{formik.touched.lastname && formik.errors.lastname}</div>
        <label htmlFor="db">Date of Birth</label>
        <input type="text" {...formik.getFieldProps('dob')}/>
        <br></br>
        <button type="submit">Add Student</button>
      </form>
    </div>
  )
}
export default SignupGetFieldProps