import { Field, Formik } from "formik"          //using formik component and field
import * as Yup from 'yup'

function SignupField() {
 
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
          firstname:Yup.string().max(8,"Please enter max of 8").min(3,'too small').required('Please andi firstname'),
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
                <Field name="firstname"></Field>
                <div>{formik.touched.firstname && formik.errors.firstname}</div>
                <label htmlFor="ln">Last Name</label>
                <Field name="lastname"></Field>
                <div>{formik.touched.lastname && formik.errors.lastname}</div>
                <label htmlFor="db">Date of Birth</label>
                <Field name='dob'></Field>
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
export default SignupField