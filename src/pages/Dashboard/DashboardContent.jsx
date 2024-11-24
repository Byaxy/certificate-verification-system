import { useEffect, useState } from "react";
import RecentActivity from "./RecentActivity";
import "./Loader.css"
import HowitWorks from "../QuickGuide/HowitWorks";
import BulkUpload from "../../components/BulkUpload/BulkUpload";

const DashboardContent = () => {
  const [totalCertificates, setTotalCertificates] = useState(0);
  const [loading, setLoading] = useState(true);

  const apiEndpoint = "https://api/all-certificates";

  // Fetch certificates to count
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        // Count the total number of certificates
        setTotalCertificates(data.length);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setTotalCertificates(0); // Set to 0 in case of an error
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <main className="w-full py-7">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h1 className="text-lg font-bold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 text-white p-4 rounded-lg shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center ">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Total Certificates
            </h2>
            {loading ? (
              <span className="loader ml-8"></span>
            ) : (
              <p className="sm:text-2xl text-xl">
                {totalCertificates}
              </p>
            )}
          </div>
          <div className="bg-white p-4 rounded-lg border-t shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Total Verification Requests
            </h2>
            <p className="sm:text-2xl text-xl">50</p>
          </div>
          <div className="bg-blue-800 text-white p-4 rounded-lg shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Pending Requests
            </h2>
            <p className="sm:text-2xl text-xl">20</p>
          </div>
        </div>
        
        <div className="mb-4">
          <RecentActivity />
        </div>
        <div className="my-10">
          <BulkUpload/>
        </div>
        <div>
          <HowitWorks/>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
