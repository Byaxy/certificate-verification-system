import DashboardContent from "./DashboardContent";

const Dashboard = () => {
    return (
      <div className="h-screen flex flex-col">
        <div className="flex flex-grow">  
          <DashboardContent/>
        </div>
      </div>
    );
  };
  
  export default Dashboard;