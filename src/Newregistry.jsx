import { Field,Formik } from "formik";
import * as Yup from "yup";

function NewReg(){
  return(
    <div align="center" className="border border-3 p-3 m-2 border-primary bg-success" style={{backgroundColor:''}}>
    
    <Formik
    initialValues={{
        fullname:'',surname:'', age:'',gender:'',city:'',
        state:'',country:'',pincode:'',
        email:'',contact:'',remarks:''
    }}
    validationSchema={Yup.object({
      fullname:Yup.string().max(18,"too long").min(6,"too short").required('*enter fullname'),
      surname:Yup.string().max(10,"too long").min(4,"too short").required("*enter surname"),gender:Yup.string().required("*select gender"),
      age:Yup.string().required("*enter age please"),
      city:Yup.string().required("*select city"),state:Yup.string().required("*enter state"),country:Yup.string().required("*select country"),
      pincode:Yup.number().max(6,"valid pincode").min(5,"invalid pincode").required("*mandatory field"),
      email:Yup.string().required("*email required to track you!"),
      contact:Yup.number().max(10,"valid number").min(9,"not valid number").required("*please enter contact")
    })}
    onSubmit={(values) =>{
        
    }}
    >
    {
     (formik) =>{
     return(
     <form onSubmit={formik.handleSubmit} className="form-control w-25 text-light bg-dark" style={{backgroundColor:'salmon'}}>
      <h1 className="text-warning">Registry-Form</h1><br />
     <label htmlFor="fn">Fullname:</label>
     <Field name="fullname"/>
     <div className="text-danger">{formik.touched.fullname && formik.errors.fullname}</div><br/>
     <label htmlFor="sn">Surname:</label>
     <Field name="surname"/>
     <div className="text-danger">{formik.touched.surname && formik.errors.surname}</div><br/>
     <label htmlFor="ag">Age:</label>
     <Field type="number" name="age"/>
     <div className="text-danger">{formik.touched.age && formik.errors.age}</div><br/>
     <label htmlFor="gn">Gender:</label>
     <Field type="radio" name="gender" value="male"></Field>:Male
     <Field type="radio" name="gender" value="female"></Field>:Female
     <Field type="radio" name="gender" value="others"></Field>:Others
     <div className="text-danger">{formik.touched.gender && formik.errors.gender}</div><br/>
     <label htmlFor="ct">City:</label>
     <Field name="city"/>
     <div className="text-danger">{formik.touched.city && formik.errors.city}</div><br/>
     <label htmlFor="st">State:</label>
     <Field name="state" as="select">
      <option>Select</option>
      <option value="andhra">Andhra</option>
      <option value="telangana">Telangana</option>
      <option value="tamil">Tamilnadu</option>
      <option value="kerala">Kerala</option>
      <option value="karnataka">Karnataka</option>
      </Field>
     <div className="text-danger">{formik.touched.state && formik.errors.state}</div><br/>
     <label htmlFor="cy">Country:</label>
     <Field name="country" as="select">
      <option>Select</option>
      <option value="India">INDIA</option>
      <option value="lanka">LANKA</option>
      <option value="africa">AFRICA</option>
      <option value="pok">POK</option>
      <option value="nepal">NEPAL</option>
     </Field>
     <div className="text-danger">{formik.touched.country && formik.errors.country}</div><br/>
     <label htmlFor="pn">Pincode:</label>
     <Field type="number" name="pincode"/>
     <div className="text-danger">{formik.touched.pincode && formik.errors.pincode}</div><br/>
     <label htmlFor="em">Email:</label>
     <Field name="email" type="email"/>
     <div className="text-danger">{formik.touched.email && formik.errors.email}</div><br/>
     <label htmlFor="ctc">Contact:</label>
     <Field name="contact" type="number"/>
     <div className="text-danger">{formik.touched.contact && formik.errors.contact}</div><br/>
     <label htmlFor="rem">Remarks:</label>
     <Field name="remarks" as="textarea"/>
      <div></div><br />
     <button className="btn btn-outline-warning">Add New Entry</button>
     </form>
     )}
}

      </Formik>
    </div>
  )
}

export default NewReg;