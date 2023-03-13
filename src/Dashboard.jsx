import { Link, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div className="mt-5 border border-3 p-2">
      <div className="bg-dark mt-3 border border-2">
      <h1 className="text-center text-warning mt-3">Dashboard</h1>
      <div className="d-flex border border-2 p-2">
        <div className="mx-5 my-5">
        <ul className="mx-5 my-5" type="none">
          <li>
            <Link to="/dashboard/addCarType" className="text-decoration-none text-info">Add Car Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addServiceType" className="text-decoration-none text-info">Add Service Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addService" className="text-decoration-none text-info">Add Service</Link>
          </li>
          <li>
            <Link to="/dashboard/viewServices" className="text-decoration-none text-info">View Services</Link>
          </li>
        </ul>
        </div>
       
        <div className="w-50 p-5">
          <Outlet></Outlet>
        </div>
        </div>
      </div>
      </div> 
  )
}
export default Dashboard