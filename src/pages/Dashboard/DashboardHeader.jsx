/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IconClose, IconMenu } from "../../assets/icons";

const DashboardHeader = ({ active, OpenMenu, CloseMenu }) => {
  return (
    <header className="bg-blue-800 text-white w-full relative ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        <div className="font-bold sm:text-lg text-base">
          Certificate Verification Website
        </div>
        <nav className="">
          <ul className="md:flex hidden items-center">
            <Link to={"/admin"}>
              <li className="ml-4 hover:scale-105 transition-all">Dashboard</li>
            </Link>
            <Link to={"/admin/certificates"}>
              <li className="ml-4 hover:scale-105 transition-all">Certificates</li>
            </Link>
            <Link to={"/admin/quick_guide"}>
              <li className="ml-4 hover:scale-105 transition-all">Quick Guide</li>
            </Link>
            <Link to={"/admin/settings"}>
              <li className="ml-4 hover:scale-105 transition-all">Settings</li>
            </Link>
          </ul>
        </nav>
      </div>
      {active ? (
        <div
          className="absolute top-3 text-[26px] sm:right-10 right-5 md:hidden block z-30"
          onClick={CloseMenu}
        >
          <IconClose/>
        </div>
      ) : (
        <div
          className="absolute top-3 text-[26px] sm:right-10 right-5 md:hidden block z-30"
          onClick={OpenMenu}
        >
          <IconMenu />
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
