import { Outlet } from "react-router-dom";
import DashboardHeader from "./Dashboard/DashboardHeader";
import DashboardSidebar from "./Dashboard/DashboardSidebar";

const AdminDashboard = () => {
  return (
    <div className="relative">
      <DashboardHeader />
      <div className="h-[100dvh] hidden  top-0 absolute right-0 ">
        <DashboardSidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
