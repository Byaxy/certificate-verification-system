const DashboardContent = () => {
    return (
      <main className="p-4 flex-grow">
        <h1 className="text-lg font-bold mb-4">Dashboard Overview</h1>
        <div className="flex justify-between mb-4">
          <div className="bg-white p-4 rounded shadow-md w-64">
            <h2 className="text-lg font-bold mb-2">Total Certificates</h2>
            <p className="text-2xl">100</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md w-64">
            <h2 className="text-lg font-bold mb-2">Total Verification Requests</h2>
            <p className="text-2xl">50</p>
          </div>
          <div className="bg-white p-4 rounded shadow-md w-64">
            <h2 className="text-lg font-bold mb-2">Pending Requests</h2>
            <p className="text-2xl">20</p>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2">Recent Activity</h2>
          <ul>
          <li>Certificate uploaded by John Doe</li>
          <li>Verification request from Jane Doe</li>
        </ul>
        </div>
        </main>
    )}

    export default DashboardContent;