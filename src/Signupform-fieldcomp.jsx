import { Field, Formik } from "formik"          //using formik component and field
import * as Yup from 'yup'

function SignupField() {
 
  return (
    <div align="center" className='border border-2 border-info p-2 m-2 bg-secondary'>
      <h1>Sign-Up Form(Fields)</h1>
      <Formik
        initialValues={{                                                   
          firstname:'',
          lastname:'',
          dob:'',
          gender:'',
          luggage:''
        }}
        validationSchema={Yup.object({
          firstname:Yup.string().max(8,"Please enter max of 8").min(3,'too small').required('*Please enter firstname'),
          lastname:Yup.string().max(10,"please below 10").min(5,'too small').required('*enter-lastname'),
          gender:Yup.string().max(10,"please below 10").min(5,'too small').required('*Select gender'),
          luggage:Yup.object().required('*select one')
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
                <div className="text-danger">{formik.touched.firstname && formik.errors.firstname}</div>
                <label htmlFor="ln">Last Name</label>
                <Field name="lastname"></Field>
                <div className="text-danger">{formik.touched.lastname && formik.errors.lastname}</div>
                <label htmlFor="db">Date of Birth</label>
                <Field type='date' name='dob'></Field>
                <div></div>
                <label htmlFor="gn">Gender</label>
                <Field type="radio" name="gender" value="male"></Field>Male
                <Field type="radio" name="gender" value="female"></Field>Female
                <Field type="radio" name="gender" value="others"></Field>Others
                <div className="text-danger">{formik.touched.gender && formik.errors.gender}</div>
                <label htmlFor="ck">Luggage</label>
                <Field type="checkbox" name="luggage" value="yes"></Field>Yes
                <Field type="checkbox" name="luggage" value="no"></Field>No
                <div className="text-danger">{formik.touched.luggage && formik.errors.luggage}</div><br />
                <button type="submit" className="btn btn-outline-warning">Add Student</button>
              </form>
            )
          }
        }
      </Formik>
      
    </div>
  )
}
export default SignupField