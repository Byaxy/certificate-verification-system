import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Certificate = () => {
  const certificateData = {
    name: "JOHN DOE",
    course: "WEB AND FRONT END DEVELOPMENT",
    date: "Mar 18, 2022",
  };

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
    <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-16 space-y-5">
      {/* Certificate */}
      <div
        id="certificate"
        className="relative w-full bg-white shadow-lg overflow-hidden p-8 pt-20"
      >
        {/* Background Design */}
        <div className="absolute inset-0">
          {/* Top-left triangle */}
          <svg
            className="absolute top-0 left-0 w-48 h-48"
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
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <span className="text-sm mb-12">{certificateData.date}</span>

          <h1 className="text-4xl font-bold mb-6 text-center uppercase tracking-wider">
            {certificateData.name}
          </h1>

          <span className="text-sm text-gray-600 mb-6">
            successfully completed
          </span>

          {/* Course name with gradient */}
          <div className="mb-24">
            <h2 className="text-2xl text-gray-600 font-medium text-center uppercase">
              {certificateData.course}
            </h2>
          </div>

          {/* Footer */}
          <div className="w-full h-full flex items-end justify-end">
            <span className="text-sm text-gray-600">
              a course by{" "}
              <span className="font-bold text-primary">CVerify</span>
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
