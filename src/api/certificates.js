import api from "./axios";

// fetch all certificates
export const fetchAllCertificates = async () => {
  try {
    const response = await api.get("/certificate");
    return response;
  } catch (error) {
    console.error("Failed to fetch all Certificates: ", error);
    return error.response?.message || "Failed to fetch all Certificates";
  }
};

// fetch certificate by id
export const fetchCertificateById = async (id) => {
  try {
    const response = await api.get(`/certificate/${id}`);
    return response;
  } catch (error) {
    console.error("Failed to fetch Certificate: ", error);
    return error.response?.message || "Failed to fetch Certificate";
  }
};

export const uploadCertificates = async (certificateData) => {
  try {
    const response = await api.post("/admin/upload", certificateData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    if (error.response.status === 400) {
      throw new Error("Invalid file format.");
    }
    throw new Error(error.response.data.message || "Error uploading file");
  }
};
