import logo from './logo.svg';
import './App.css';
import Signup from './Signupform-yup';
import Signups from './Signupform';

function App() {
  return (
    <div style={{backgroundColor:"bisque"}} className="border border-3 border-danger">
      <Signups/>
      <Signup/>
    </div>
  );
}

export default App;
