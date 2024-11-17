import { Link } from "react-router-dom";

const DashboardHeader = () => {
    return (
      <header className="bg-blue-800 text-white p-4 flex justify-between items-center">
        <div className="font-bold text-lg">Certificate Verification Website</div>
        <nav>
          <ul className="flex items-center">
            <Link to={"/admin"}><li className="mr-4">Dashboard</li></Link>
            <Link to={"/admin/certificates"}><li className="mr-4">Certificates</li></Link>
            <li className="mr-4">Verification Requests</li>
            <li className="mr-4">Users</li>
            <li className="mr-4">Settings</li>
          </ul>
        </nav>
        <div className="flex items-center">
          <span>John Doe</span>
          <img src="profile-picture.jpg" alt="Profile Picture" className="w-8 h-8 ml-2 rounded-full" />
        </div>
      </header>
    );
  };
  
  export default DashboardHeader;