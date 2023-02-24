import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div >
    <Link to="dashboard" className='d-flex text-decoration-none p-2 w-100 bg-dark border border-5 m-1'>Dash-Board &nbsp;&nbsp;&nbsp;
    <Link to="booking" className='text-decoration-none'>Booking</Link>
    </Link> 
    <Outlet></Outlet>
    </div>
  );
}

export default App;
