import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUploadCertificates } from "../../hooks/useCertificates";
import { useState } from "react";

const CertificateModal = () => {
  const [open, setOpen] = useState(false);
  const uploadCertificatesMutation = useUploadCertificates();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.file[0].length === 0) return;
    const formData = new FormData();
    formData.append("file", data.file[0]);

    try {
      const response = await uploadCertificatesMutation.mutateAsync(formData);

      if (response.status === "success") {
        toast.success(response.message);
        reset();
        setOpen(false);
      }
    } catch (error) {
      toast.error(error.message || "Error uploading file");
      console.error("Error uploading file: ", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-800 hover:bg-blue-800/95 text-white transition-colors duration-200">
          Add Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Certificates File</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col gap-2 py-8">
            <Label htmlFor="file" className="text-gray-800 text-[16px]">
              Excel File
            </Label>
            <Input
              id="file"
              type="file"
              accept=".xlsx,.xls,.xlsm"
              {...register("file", {
                required: "File is required",
              })}
              className="w-full text-gray-800 focus-visible:ring-0"
            />
            {errors.file && (
              <span className="text-red-500 text-xs">
                {errors.file.message}
              </span>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              onClick={() => {
                reset();
              }}
              disabled={isSubmitting}
              className="bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
            >
              Reset
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-800/95 hover:bg-blue-800 text-white transition-colors duration-200"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <span className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full" />
                  Saving...
                </div>
              ) : (
                "Save"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
