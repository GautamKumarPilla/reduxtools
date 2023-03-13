// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div> 
    <Provider store={store}>
      <div className='' style={{backgroundImage:"url('https://wallpaperaccess.com/full/6566122.jpg')",height:'155vh'}}>
        <div className='mx-auto w-75' style={{width:'95%'}}>
          <Link to="/dashboard" className='d-flex text-decoration-none text-success p-3 w-50 mx-auto bg-dark border border-2' style={{borderRadius:'30%'}}>Dash-Board &nbsp;&nbsp;&nbsp;
          <Link to="/booking" className='text-decoration-none text-success'>Booking</Link>
          <Link to="/login" className='d-flex ms-auto text-decoration-none text-warning'>Login</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/signup" className='text-decoration-none text-warning'>Sign-Up</Link>&nbsp;&nbsp;&nbsp;
          </Link>          
          <Outlet></Outlet>
        </div>
      </div>  
    </Provider>
    </div>
  );
}

export default App;