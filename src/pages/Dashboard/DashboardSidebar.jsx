/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DashboardSidebar = ({ close }) => {
  return (
    <aside className="bg-transaprent rounded shadow-md bg-slate-900  font-semibold  p-4 w-64 h-full">
      <ul className="py-10">
        <li className="mb-4 hover:text-blue-800 text-white" onClick={close}>
          <Link to={"/admin"}>Dashboard</Link>
        </li>
        <li className="mb-4 hover:text-blue-800 text-white" onClick={close}>
          <Link to={"/admin/certificates"}>Certificates</Link>
        </li>
        <li className="mb-4 hover:text-blue-800 text-white" onClick={close}>
          <Link to={"/verify-certificate"}>Verify Certificate</Link>
        </li>
      </ul>
    </aside>
  );
};

export default DashboardSidebar;
