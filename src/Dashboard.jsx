import { Link, Outlet } from "react-router-dom"

function Dashboard() {
  return (
    <div className="border border-2 p-2">
      <h1>Dashboard</h1>
      <div className="d-flex border border-2 p-2 bg-secondary">
        <div className="mt-5 d-flex flex-wrap justify-content-center ">
        <ul className="text-decoration-none" type="none">
          <li>
            <Link to="/dashboard/addCarType" className=" border rounded text-danger text-decoration-none">Add Car Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addServiceType" className=" border rounded text-danger text-decoration-none">Add Service Type</Link>
          </li>
          <li>
            <Link to="/dashboard/addService" className=" border rounded text-danger text-decoration-none">Add Service</Link>
          </li>
          <li>
            <Link to="/dashboard/viewServices" className=" border rounded text-danger text-decoration-none">View Services</Link>
          </li>
        </ul>
        </div>
       
        <div className="w-50 p-4">
          <Outlet></Outlet>
        </div>
        </div>
      </div> 
  )
}
export default Dashboard