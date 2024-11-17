import DashboardHeader from "..//Dashboard/DashboardHeader"
import DashboardContent from "./DashboardContent";
import DashboardSidebar from "./DashboardSidebar";

const Dashboard = () => {
    return (
      <div className="h-screen flex flex-col">
        <DashboardHeader/>
        <div className="flex flex-grow">
          <DashboardSidebar/>
          <DashboardContent/>
        </div>
      </div>
    );
  };
  
  export default Dashboard;