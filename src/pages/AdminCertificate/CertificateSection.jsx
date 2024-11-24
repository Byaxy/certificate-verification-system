import { useState, useEffect } from "react";
import CertificateTable from "./CertificateTable";
import CertificateModal from "./CertificateModal";

const CertificateSection = () => {
  const [certificates, setCertificates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({});

  useEffect(() => {
    // Fetch certificates from API
    fetchCertificates().then((data) => setCertificates(data));
  }, []);

  const fetchCertificates = async () => {
    // Replace with endpoint
    const response = await fetch("/api/all-certificates");
    return response.json();
  };

  const handleAddCertificate = () => {
    setShowModal(true);
  };

  const handleEditCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setShowModal(true);
  };

  const handleDeleteCertificate = (certificateId) => {
    // Replace with your API endpoint
    fetch(`/api/certificates/${certificateId}`, { method: "DELETE" }).then(
      () => {
        setCertificates(certificates.filter((c) => c.id !== certificateId));
      }
    );
  };

  return (
    <div className="p-4 m-4 rounded border-2 shadow-md">
      <h1 className="text-2xl font-bold mb-4">Certificates</h1>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          onClick={handleAddCertificate}
        >
          Add Certificate
        </button>
      </div>
      <CertificateTable
        certificates={certificates}
        onEdit={handleEditCertificate}
        onDelete={handleDeleteCertificate}
      />
      {showModal && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setShowModal(false)}
          onSave={(certificate) => {
            // Replace with your API endpoint
            fetch("/api/certificates", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(certificate),
            }).then(() => {
              setCertificates([...certificates, certificate]);
              setShowModal(false);
            });
          }}
        />
      )}
    </div>
  );
};

export default CertificateSection;
