// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
    <Provider store={store}>
      <div>
      <Link to="dashboard" className='d-flex text-decoration-none text-success p-2 w-100 bg-dark border border-5 m-1'>Dash-Board &nbsp;&nbsp;&nbsp;
    <Link to="booking" className='text-decoration-none text-success'>Booking</Link>
    </Link> 
        <Outlet></Outlet>
      </div>
    </Provider>
    </div>
  );
}

export default App;