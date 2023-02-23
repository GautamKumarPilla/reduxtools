import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
    <Link to="dashboard" className='d-flex p-2 w-100 bg-dark'>Dash-Board</Link>
    <Outlet></Outlet>
    </div>
  );
}

export default App;
