import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import api from "../api/axios";
import { useState } from "react";
import Certificate from "./Certificate";

const VerifyCertificate = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [certificateData, setCertificateData] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.get(`/certificate/${data.certificateId}`);
      if (response.status === 200 && response.data) {
        toast.success("Certificate verified successfully");

        setCertificateData(response.data);
        setOpenDialog(true);
        console.log(response.data);
      }
    } catch (error) {
      toast.error(
        error?.response.data.message || "Error verifying certificate"
      );
      console.error("Error verifying certificate:", error);
    } finally {
      reset();
    }
  };

  return (
    <div className="flex h-[90vh] items-center justify-center">
      <div className="container max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r to-primary from-gray-900 bg-clip-text text-transparent mb-2">
            Certificate Verification System
          </h1>
          <span className="text-gray-600">
            Enter your certificate ID to view and download your certificate
          </span>
        </div>
        <Card className="w-full px-5 sm:px-20 py-16">
          <CardContent className="w-full p-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter Certificate ID"
                  {...register("certificateId", {
                    required: "Certificate ID is required",
                  })}
                  className="w-full pl-10 py-5 text-gray-900 focus-visible:ring-0"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                {errors.certificateId && (
                  <span className="text-red-500 text-xs">
                    {errors.certificateId.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full" />
                    Searching...
                  </div>
                ) : (
                  "Search Certificate"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
      {certificateData && (
        <Dialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          className="relative z-50"
        >
          <DialogContent className="max-w-5xl">
            <DialogTitle className="hidden">Certificate</DialogTitle>
            <Certificate certificateData={certificateData} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default VerifyCertificate;
