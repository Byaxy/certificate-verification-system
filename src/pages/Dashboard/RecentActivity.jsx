import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Loader.css"

function RecentActivity() {
  const [recentCertificates, setRecentCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  //  API
  const apiEndpoint = "https://api/all-certificates";

  // Fetch and process certificates
  useEffect(() => {
    const fetchRecentCertificates = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiEndpoint); // Fetch data from the API
        const data = await response.json();

        // Sort certificates by issueDate (descending) and pick the top 5
        const sortedCertificates = data
          .sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate))
          .slice(0, 5); // Get the top 5 most recent certificates

        setRecentCertificates(sortedCertificates);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentCertificates();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-8 p-6 bg-slate-900 text-white shadow-md rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="sm:text-2xl text-xl font-bold mb-4">
          Recent Activity
        </h2>
        <Link to={"/admin/certificates"}>
          <button className="border-2 rounded-sm border-blue-700 text-[14px] sm:text-base sm:px-4 px-3 sm:py-1.5 py-1 hover:bg-blue-700 hover:text-white transition-all">View All</button>
        </Link>
      </div>
      {loading ? (
        <span className="loader"></span>
      ) : recentCertificates.length > 0 ? (
        <ul className="space-y-4">
          {recentCertificates.map((certificate) => (
            <li
              key={certificate.id}
              className="p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
              <p className="text-lg font-semibold text-gray-700">
                {certificate.name}
              </p>
              <p className="text-gray-600">
                <strong>Issuer:</strong> {certificate.issuer}
              </p>
              <p className="text-gray-500">
                <strong>Issued On:</strong>{" "}
                {new Date(certificate.issueDate).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No recent certificates found.</p>
      )}
    </div>
  );
}

export default RecentActivity;
