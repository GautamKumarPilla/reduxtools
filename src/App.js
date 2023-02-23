import logo from './logo.svg';
import './App.css';
import Signup from './Signupform-yup';
import Signups from './Signupform';
import SignupField from './Signupform-fieldcomp';
import SignupFormik from './Signupform-formikcomp';
import SignupGetFieldProps from './Signupfrom-getFieldprops';
import NewReg from './Newregistry';
// import Studentform from './Studentform'

function App() {
  return (
    <div style={{backgroundColor:"bisque"}} className="border border-3 border-danger">
       <Signup/>
       <SignupFormik/>
       <NewReg/>
      <Signups/>
      <SignupField/>
      <SignupGetFieldProps/>
    </div>
  );
}

export default App;
