import logo from './logo.svg';
import './App.css';
import Signup from './Signupform-yup';
import Signups from './Signupform';

function App() {
  return (
    <div style={{backgroundColor:"bisque"}}>
      <Signups/>
      <Signup/>
    </div>
  );
}

export default App;
