/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Certificate = ({ certificateData }) => {
  const handleDownload = async () => {
    const certificate = document.getElementById("certificate");

    try {
      const canvas = await html2canvas(certificate, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210); // A4 landscape dimensions

      pdf.save("certificate.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="w-full space-y-5 p-5">
      {/* Certificate */}
      <div
        id="certificate"
        className="relative w-full bg-white shadow-lg overflow-hidden p-8 pt-20"
      >
        {/* Background Design */}
        <div className="absolute inset-0">
          {/* Top-left triangle */}
          <svg
            className="absolute top-0 left-0 w-36 h-36 sm:w-48 sm:h-48"
            viewBox="0 0 192 192"
          >
            <path d="M0 0 L0 192 L192 0 Z" fill="url(#triangleGradient)" />
            <defs>
              <linearGradient id="triangleGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="100%" stopColor="hsl(221.2, 83.2%, 53.3%)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Certificate Content */}
        <div className="relative w-full h-full flex flex-col text-center items-center justify-center">
          <span className="text-sm mb-8">
            {new Date(certificateData.createdAt).toDateString()}
          </span>
          <h1 className="text-3xl font-semibold mb-6 text-center uppercase tracking-wider">
            Certificate of Completion
          </h1>
          <span className="text-gray-600 mb-2">
            This certificate is to certify that
          </span>
          <h2 className="text-2xl text-primary underline font-semibold mb-2 text-center uppercase tracking-wider">
            {certificateData.studentName}
          </h2>

          <span className=" text-gray-600 mb-8">
            has successfully completed an internship in the field of
          </span>

          {/* Course name with gradient */}
          <div className="mb-24">
            <h2 className="text-3xl text-gray-700 font-medium text-center uppercase">
              {certificateData.internshipDomain}
            </h2>
          </div>

          {/* Footer */}
          <div className="w-full h-full flex items-end justify-end">
            <span className="text-sm text-gray-600">
              Issued by <span className="font-bold text-primary">CVerify</span>
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-end">
        <Button
          size="lg"
          variant="default"
          onClick={handleDownload}
          className="px-6 py-2"
        >
          Download Certificate
        </Button>
      </div>
    </div>
  );
};

export default Certificate;
