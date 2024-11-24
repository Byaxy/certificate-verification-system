import { useState } from "react";
import axios from "axios";

function BulkUpload() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file before uploading.");
      return;
    }

    setIsUploading(true);
    setUploadStatus("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://api/bulk-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setUploadStatus("File uploaded successfully!");
      } else {
        setUploadStatus(`Error: ${response.data.message || "Upload failed"}`);
      }
    } catch (error) {
      console.error(error);
      setUploadStatus("An error occurred during upload.");
    } finally {
      setIsUploading(false);
      setFile(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto sm:p-6 p-4 bg-white shadow-md rounded-lg my-8">
      <h1 className="sm:text-2xl text-xl font-bold text-gray-800 mb-6">Bulk Upload</h1>
      <p className="text-gray-700 mb-4">
        Upload an Excel file to add multiple certificates at once. Ensure the
        file format matches the required template.
      </p>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Select File</label>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          className="block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handleUpload}
          disabled={isUploading}
          className={`py-2 px-4 mr-2 rounded ${
            isUploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        {uploadStatus && (
          <span
            className={`text-sm ${
              uploadStatus.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {uploadStatus}
          </span>
        )}
      </div>

      <div className="text-sm text-gray-500">
        <p>
          <strong>Note:</strong> Ensure your Excel file follows this template.{" "}
          <a href="/template.xlsx" className="text-blue-500 underline">
            Download Template
          </a>
        </p>
      </div>
    </div>
  );
}

export default BulkUpload;
