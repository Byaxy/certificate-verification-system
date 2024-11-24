import { Outlet } from "react-router-dom";
import DashboardHeader from "./Dashboard/DashboardHeader";
import DashboardSidebar from "./Dashboard/DashboardSidebar";
import { useState } from "react";

const AdminDashboard = () => {
  const [active, setActive] = useState(false)

  
  return (
    <div className="relative overflow-hidden">
      <DashboardHeader active={active} OpenMenu={()=> setActive(true)} CloseMenu={()=>setActive(false)} />
      <div className={`h-[100dvh]  md:hidden block transition-all  top-0 absolute ${active ? "right-0" : "right-[-256px]"} `}>
        <DashboardSidebar close={()=>setActive(false)}  />
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
