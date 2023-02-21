import { Formik } from "formik"         //using formik component only
import * as Yup from 'yup'

function SignupFormik() {
 
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h1>Sign-Up Form</h1>
      <Formik
        initialValues={{
          firstname:'',
          lastname:'',
          dob:''
        }}
        validationSchema={Yup.object({
          firstname:Yup.string().max(8,"Please enter max of 8").min(3,'too small').required('*firstname'),
          lastname:Yup.string().max(10,"please below 10").min(5,'too small').required('*lastname')
        })}
        onSubmit={(values)=>{
          console.log("onsubmit",values)
        }}
      >
        {
          (formik)=>{
            return (
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
            )
          }
        }
      </Formik>
      
    </div>
  )
}
export default SignupFormik