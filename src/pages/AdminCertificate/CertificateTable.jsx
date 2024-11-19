/* eslint-disable react/prop-types */


const CertificateTable = ({ certificates, onEdit, onDelete }) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Issuer</th>
          <th className="px-4 py-2">Date Issued</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {certificates.map(certificate => (
          <tr key={certificate.id}>
            <td className="px-4 py-2">{certificate.id}</td>
            <td className="px-4 py-2">{certificate.name}</td>
            <td className="px-4 py-2">{certificate.issuer}</td>
            <td className="px-4 py-2">{certificate.dateIssued}</td>
            <td className="px-4 py-2 flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 mr-4 rounded"
                onClick={() => onEdit(certificate)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                onClick={() => onDelete(certificate.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CertificateTable;