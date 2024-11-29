import { useState } from "react";
import ViewCertificate from "../../components/ViewCertificate";
import DataTable from "react-data-table-component";
import Loading from "../../components/Loading";
import { useFetchAllCertificates } from "../../hooks/useCertificates";
import { customTableStyles } from "../../styles/customTableSyales";
import CertificateModal from "./CertificateModal";

const CertificateSection = () => {
  const { data, isLoading, error } = useFetchAllCertificates();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const columns = [
    {
      name: "Certificate ID",
      selector: (row) => row.certificateID,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.studentName,
      sortable: true,
    },
    {
      name: "Domain",
      selector: (row) => row.internshipDomain,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => new Date(row.startDate).toDateString(),
      sortable: true,
    },
    {
      name: "End Date",
      selector: (row) => new Date(row.endDate).toDateString(),
      sortable: true,
    },
  ];

  if (error)
    return (
      <div className="wrapper w-full flex items-center text-red-500 font-semibold py-6">
        Error: {error}
      </div>
    );

  const certificatesData = data?.data.data || [];
  const certificatesCount = data?.data.results || 0;

  const onRowClicked = (row) => {
    setSelectedCertificate(row);
    setOpenDialog(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
      <div className="my-8 p-6 shadow-md rounded-lg">
        <div className="flex items-center justify-between mb-5">
          <h2 className="sm:text-2xl text-xl font-bold mb-4 text-gray-800">
            Certificates{" "}
            <span className="text-gray-600 text-lg">({certificatesCount})</span>
          </h2>
          <CertificateModal />
        </div>

        {isLoading ? (
          <Loading />
        ) : certificatesData.length === 0 ? (
          <div className="wrapper w-full flex items-center text-primary font-semibold py-6">
            No recent certificates found.
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={certificatesData}
            customStyles={customTableStyles}
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10, 15, 20]}
            onRowClicked={onRowClicked}
          />
        )}

        <ViewCertificate
          certificateData={selectedCertificate}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      </div>
    </div>
  );
};

export default CertificateSection;
