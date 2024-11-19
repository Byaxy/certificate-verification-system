import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <header className="bg-blue-800 text-white w-full ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        <div className="font-bold text-lg">
          Certificate Verification Website
        </div>
        <nav className="">
          <ul className="md:flex hidden items-center">
            <Link to={"/"}>
              <li className="ml-4">Home</li>
            </Link>
            <Link to={"/admin"}>
              <li className="ml-4">Dashboard</li>
            </Link>
            <Link to={"/admin/certificates"}>
              <li className="ml-4">Certificates</li>
            </Link>
            <Link to={"/admin/settings"}>
              <li className="ml-4">Settings</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeader;
