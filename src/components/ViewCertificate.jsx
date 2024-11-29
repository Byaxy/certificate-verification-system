/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Certificate from "./Certificate";

const ViewCertificate = ({ certificateData, openDialog, setOpenDialog }) => {
  return (
    <div className="w-full">
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

export default ViewCertificate;
