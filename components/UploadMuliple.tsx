import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2, PlusCircle } from "lucide-react";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import axios from "axios";
import { useSession } from "./providers/context/SessionContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface UploadMulipleProps {
  title: string;
  downloadLink: string;
  uploadLink: string;
  setUpload: React.Dispatch<React.SetStateAction<boolean>>;
}
const UploadMuliple = ({
  title,
  downloadLink,
  uploadLink,
  setUpload,
}: UploadMulipleProps) => {
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token } = useSession();
  const ref = useRef(null);
  const handleFileInput = async () => {
    const e = ref.current;
    const files = e.files;
    try {
      if (files) {
        const formData = new FormData();
        formData.append("file", files[0]);
        setLoading(true);

        await axios.post(uploadLink, formData, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUpload(true);
        setDialog(false);
        toast.success("Data Added successfully");
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 400) {
        toast.error(`${error.response.data.error}`);
      }
    } finally {
      e.value = "";
      setLoading(false);
    }
  };
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogTrigger asChild>
        <Button
          className={"cursor-pointer flex gap-2 items-center relative"}
          variant={"secondary"}
        >
          <PlusCircle className="w-5 h-5" /> Add Multiple {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-200">
        <DialogHeader className="font-bold text-2xl">
          Upload Multiple {title}
        </DialogHeader>
        {/*<DialogClose className={"hidden"}/>*/}
        <div className="flex flex-col gap-4 items-center justify-center p-2 m-2">
          {/* <Link to={"/addBook"}> */}

          <Input
            disabled={loading}
            ref={ref}
            type="file"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            className="w-full h-full cursor-pointer"
            // onChange={handleFileInput}
          />

          <a
            href={downloadLink}
            className={cn(
              "w-fit text-blue-700 h-fit text-center text-sm hover:underline "
            )}
          >
            Download Template File
          </a>
          <div className="w-full flex justify-center">
            {loading && <Loader2 className="animate-spin min-w-6 min-h-6" />}
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={loading}
            className="w-full"
            variant={"primary"}
            onClick={handleFileInput}
          >
            Submit
          </Button>
          <Button
            disabled={loading}
            className="w-full"
            variant={"secondary"}
            onClick={() => setDialog(false)}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMuliple;
