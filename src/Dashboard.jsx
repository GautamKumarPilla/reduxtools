import { Link, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="d-flex flex-wrap">
        <ul className="w-25">
          <li>
            <Link to="/dashboard/addCarType">Add Car Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addServiceType">Add Service Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addService">Add Service</Link>
          </li>
        </ul>
        <div className="w-75">
          <Outlet></Outlet>
        </div>
      </div>
      
    </div>
  )
}
export default Dashboard