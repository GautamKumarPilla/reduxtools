import { Formik } from "formik"         //using formik component and getfieldprops
import * as Yup from 'yup'

function SignupFormik() {
 
  return (
    <div align="center" className='border border-2 border-info p-2 m-2'>
      <h1>Sign-Up Form</h1>
      <Formik
        initialValues={{                            //context api format
          firstname:'',
          lastname:'',
          dob:''
        }}
        validationSchema={Yup.object({
          firstname:Yup.string().max(8,"Please enter max of 8").min(3,'too small').required('*enter firstname'),
          lastname:Yup.string().max(10,"please below 10").min(5,'too small').required('*enter lastname'),
          dob:Yup.date().required('*enter your dob')
        })}
        onSubmit={(values)=>{
          console.log("onsubmit",values)
        }}
      >
        {
          (formik)=>{                             //contet api format
            return (
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="fn">First Name</label>
                <input type="textarea" {...formik.getFieldProps('firstname')}/>
                <div className="text-info">{formik.touched.firstname && formik.errors.firstname}</div>
                <label htmlFor="ln">Last Name</label>
                <input type="text" {...formik.getFieldProps('lastname')}/>
                <div className="text-info">{formik.touched.lastname && formik.errors.lastname}</div>
                <label htmlFor="db">Date of Birth</label>
                <input type="date" {...formik.getFieldProps('dob')}/>
                <div className="text-info">{formik.touched.dob && formik.errors.dob}</div>
                <br/>
                <button type="submit" className="btn btn-outline-danger">Add Student</button>
              </form>
            )
          }
        }
      </Formik>
      
    </div>
  )
}
export default SignupFormik