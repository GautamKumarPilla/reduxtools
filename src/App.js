// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div> 
    <Provider store={store}>
      <div style={{backgroundImage:"url('https://wallpaperaccess.com/full/2085186.jpg')",height:'100vh'}}>
        <div className='mx-auto m-1' style={{width:'95%'}}>
          <Link to="/dashboard" className='d-flex text-decoration-none text-success p-3 w-100 bg-dark border border-5'>Dash-Board &nbsp;&nbsp;&nbsp;
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