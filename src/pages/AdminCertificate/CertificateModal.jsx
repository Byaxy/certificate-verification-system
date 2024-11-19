/* eslint-disable react/prop-types */
import { useState } from "react";


const CertificateModal = ({ certificate, onClose, onSave }) => {
  const [name, setName] = useState(certificate.name || '');
  const [issuer, setIssuer] = useState(certificate.issuer || '');
  const [dateIssued, setDateIssued] = useState(certificate.dateIssued || '');
  const [image, setImage] = useState(certificate.image || null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('issuer', issuer);
    formData.append('dateIssued', dateIssued);
    if (image) {
      formData.append('image', image);
    }
    onSave(formData);
    setLoading(false);
  };

  const handleImageChange = event => {
    setImage(event.target.files[0]);
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="bg-white p-4 rounded shadow-md md:w-1/2 w-[90%]">
        <h2 className="text-lg font-bold mb-4">
          {certificate.id ? 'Edit Certificate' : 'Add Certificate'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Issuer
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={issuer}
              onChange={event => setIssuer(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date Issued
            </label>
            <input
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={dateIssued}
              onChange={event => setDateIssued(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-red-500 hover:bg-red-700 mr-7 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CertificateModal;