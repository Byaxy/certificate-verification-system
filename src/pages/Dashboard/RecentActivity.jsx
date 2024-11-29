import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Loading from "../../components/Loading";
import { useFetchAllCertificates } from "../../hooks/useCertificates";
import DataTable from "react-data-table-component";
import { customTableStyles } from "../../styles/customTableSyales";
import { useState } from "react";
import ViewCertificate from "../../components/ViewCertificate";

function RecentActivity() {
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

  const onRowClicked = (row) => {
    setSelectedCertificate(row);
    setOpenDialog(true);
  };

  return (
    <div className="my-8 p-6 shadow-md rounded-lg">
      <div className="flex items-center justify-between mb-5">
        <h2 className="sm:text-2xl text-xl font-bold mb-4">
          Recent Certificates
        </h2>
        <Link to={"/admin/certificates"}>
          <Button
            variant="outline"
            className="text-sm sm:text-base sm:px-4 px-3 sm:py-1.5 py-1 text-primary border-primary hover:text-primary/90 hover:border-primary/90"
          >
            View All
          </Button>
        </Link>
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
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          onRowClicked={onRowClicked}
        />
      )}

      <ViewCertificate
        certificateData={selectedCertificate}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </div>
  );
}

export default RecentActivity;
