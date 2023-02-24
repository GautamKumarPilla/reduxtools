import { Link, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div className="border border-2 p-2">
      <h1>Dashboard</h1>
      <div className="d-flex flex-wrap border border-2 p-2">
        <ul className="w-25" type="none">
          <li>
            <Link to="/dashboard/addCarType">Add Car Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addServiceType">Add Service Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addService">Add Service</Link>
          </li>
          <li>
            <Link to="/dashboard/viewServices">View Services</Link>
          </li>
        </ul>
        <div className="w-25 p-3 bg-success">
          <Outlet></Outlet>
        </div>
      </div>
      
    </div>
  )
}
export default Dashboard