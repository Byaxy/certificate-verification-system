/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DashboardSidebar = ({close}) => {
    return (
      <aside className="bg-transaprent shadow-md backdrop-blur-md text-black font-semibold mt-5 p-4 w-64 h-full">
        <ul>
          <li className="mb-4" onClick={close}>
            <Link to={"/admin"} className="text-gray-600 hover:text-blue-800">
              Dashboard
            </Link>
          </li>
          <li className="mb-4" onClick={close}>
          <Link to={"/admin/certificates"} className="text-gray-600 hover:text-blue-800">
              All Certificates
            </Link>
          </li>
          <li className="mb-4" onClick={close}>
          <Link to={"/admin/settings"} className="text-gray-600 hover:text-blue-800">
              Settings
            </Link>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default DashboardSidebar;