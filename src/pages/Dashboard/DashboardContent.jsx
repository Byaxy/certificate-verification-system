import RecentActivity from "./RecentActivity";

const DashboardContent = () => {
  return (
    <main className="w-full py-7">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center ">
            <h2 className="sm:text-lg text-base font-semibold mb-2">Total Certificates</h2>
            <p className="sm:text-2xl text-xl">100</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Total Verification Requests
            </h2>
            <p className="sm:text-2xl text-xl">50</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center">
            <h2 className="sm:text-lg text-base font-semibold mb-2">Pending Requests</h2>
            <p className="sm:text-2xl text-xl">20</p>
          </div>
        </div>
        <div className="mb-4">
          <RecentActivity />
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
