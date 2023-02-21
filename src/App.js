import logo from './logo.svg';
import './App.css';
import Signup from './Signupform-yup';
import Signups from './Signupform';
import SignupField from './Signupform-fieldcomp';
// import Studentform from './Studentform'

function App() {
  return (
    <div style={{backgroundColor:"bisque"}} className="border border-3 border-danger">
      <Signups/>
      <Signup/>
      <SignupField/>
    </div>
  );
}

export default App;
