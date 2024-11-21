/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DashboardSidebar = ({close}) => {
    return (
      <aside className="bg-transaprent rounded shadow-md bg-slate-900 text-white font-semibold  p-4 w-64 h-full">
        <ul className="py-10">
          <li className="mb-4" onClick={close}>
            <Link to={"/admin"} className="te hover:text-blue-800">
              Dashboard
            </Link>
          </li>
          <li className="mb-4" onClick={close}>
          <Link to={"/admin/certificates"} className="hover:text-blue-800">
              All Certificates
            </Link>
          </li>
          <li className="mb-4" onClick={close}>
          <Link to={"/admin/quick_guide"} className="hover:text-blue-800">
              Quick Guide
            </Link>
          </li>
          <li className="mb-4" onClick={close}>
          <Link to={"/admin/settings"} className="hover:text-blue-800">
              Settings
            </Link>
          </li>
        </ul>
      </aside>
    );
  };
  
  export default DashboardSidebar;