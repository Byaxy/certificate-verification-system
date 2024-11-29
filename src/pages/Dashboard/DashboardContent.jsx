import RecentActivity from "./RecentActivity";

import { useFetchAllCertificates } from "../../hooks/useCertificates";
import Loading from "../../components/Loading";

const DashboardContent = () => {
  const { data, isLoading, error } = useFetchAllCertificates();
  console.log(data?.data.results);

  if (error)
    return (
      <div className="wrapper w-full flex items-center text-red-500 font-semibold py-6">
        Error: {error}
      </div>
    );

  const certificatesCount = data?.data.results || 0;

  return (
    <main className="w-full py-7">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div className="bg-slate-900 text-white p-4 rounded-lg shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center ">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Total Certificates
            </h2>
            {isLoading ? (
              <Loading />
            ) : (
              <p className="sm:text-2xl text-xl">{certificatesCount}</p>
            )}
          </div>
          <div className="bg-gray-300 p-4 rounded-lg border-t shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Number of Domains
            </h2>
            <p className="sm:text-2xl text-xl">3</p>
          </div>
          <div className="bg-blue-800 text-white p-4 rounded-lg shadow-md sm:h-[140px] h-[100px] flex flex-col justify-center">
            <h2 className="sm:text-lg text-base font-semibold mb-2">
              Number of Admins
            </h2>
            <p className="sm:text-2xl text-xl">1</p>
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
