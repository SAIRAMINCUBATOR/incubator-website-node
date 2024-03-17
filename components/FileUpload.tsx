"use client";

import {
  AlertCircle,
  AlertTriangle,
  FileIcon,
  Loader2,
  Upload,
  UploadCloud,
  X,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import Image from "next/image";
import { useState } from "react";
const ACCEPTED_IMAGE_MIME_TYPES = {
  "image/jpeg": [],
  "image/png": [],
  "image/webp": [],
};
import Dropzone from "react-dropzone";

import { toast } from "sonner";
import { Button } from "./ui/button";
import { useSession } from "./providers/context/SessionContext";
import axios from "axios";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  disabled? :boolean
}

export const FileUpload = ({ onChange, value, disabled }: FileUploadProps) => {
  const [file, setFile] = useState<Blob>();
  const [uploading, setUploading] = useState(false);
  const { token, isTokenExpired } = useSession();
  const [alertOpen, setAlertOpen] = useState(false);

  const onDrop = (files: any) => {
    setFile(files[0]);
  };

  const handleUpload = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setUploading(true);
    try {
      if (token && !isTokenExpired()) {
        const formData = new FormData();
        if (!file) {
          toast(
            <>
              <AlertTriangle className="mr-2" /> File Not Found
            </>
          );
          return;
        }
        formData.append("image", file);
        const response = await axios.post("/api/firebase", formData, {
          headers: { Authorization: "Bearer " + token },
        });
        onChange(response.data.url);
        setUploading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    const url = value.substring(
      value.indexOf("files") + 8,
      value.lastIndexOf("?")
    );
    await axios.delete("/api/firebase?id="+url, {
      headers: { Authorization: "Bearer " + token },
    });
    onChange("");

    setFile(undefined);
  };

  if (value) {
    return (
      <div className="relative h-fit w-full flex justify-center">
        <div className="relative">
        <Image src={value} alt="Upload" width={200} height={100} />
        <Button
          onClick={() => setAlertOpen(true)}
          disabled={disabled}
          className="bg-rose-500 text-white p-1 rounded-full absolute -top-4 -right-4 shadow-sm h-fit"
          type="button"
        >
          <X className="h-4 w-4" />
        </Button>
        </div>
        <AlertDialog
          open={alertOpen}
          onOpenChange={setAlertOpen}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently remove your
                data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    );
  }

  const handleError = (e: { errors: { code: string }[] }[]) => {
    if (e[0].errors[0].code == "file-too-large")
      toast(
        <>
          <AlertCircle /> File Size is larger then 5 MB
        </>
      );
    console.log(e);
  };

  return (
    <div className="bg-slate-200 p-4 flex justify-center border-slate-400 border-2 border-dashed w-full">
      {!file ? (
        <Dropzone
          onDrop={onDrop}
          maxFiles={1}
          maxSize={1024 * 1024 * 5}
          accept={ACCEPTED_IMAGE_MIME_TYPES}
          multiple={false}
          onDropRejected={handleError}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="cursor-pointer ">
              <>
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-3">
                  <UploadCloud className="text-gray-500 h-10 w-10" />
                  <span className=" text-sm text-gray-500 ">
                    Drag 'n' drop file here, or click to select file
                  </span>
                </div>
              </>
            </div>
          )}
        </Dropzone>
      ) : (
        <div className="flex flex-col gap-3 items-center w-full">
          <Button
            onClick={handleUpload}
            variant={"primary"}
            className="w-[20%]"
          >
            {uploading ? (
              <Loader2 className="text-white h-5 w-5 animate-spin" />
            ) : (
              <div className="flex gap-3">
                <Upload className="h-5 w-5 m-0" />
                <span className="hidden lg:block">Upload</span>
              </div>
            )}
          </Button>
          <span className=" text-sm text-gray-500 ">1 file added</span>
        </div>
      )}
    </div>
  );
};
