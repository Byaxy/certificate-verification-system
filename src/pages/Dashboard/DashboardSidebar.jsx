import { Link } from "react-router-dom";

const DashboardSidebar = () => {
    return (
      <aside className="bg-gray-200 p-4 w-64">
        <ul>
          <li className="mb-2">
            <Link to={"/admin/certificates"} className="text-gray-600 hover:text-blue-800">
              All Certificates
            </Link>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-800">
              Verification Requests
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-800">
              Users
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-gray-600 hover:text-blue-800">
              Settings
            </a>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default DashboardSidebar;