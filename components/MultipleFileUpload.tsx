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
import { useEffect, useState } from "react";
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
  onChange: (url?: string[]) => void;
  value: string[];
  disabled?: boolean;
}

export const MultipleFileUpload = ({
  onChange,
  value,
  disabled,
}: FileUploadProps) => {
  const [file, setFile] = useState<Blob[]>();
  const [uploading, setUploading] = useState(false);
  const { token, isTokenExpired } = useSession();
  const [alertOpen, setAlertOpen] = useState<boolean[]>([]);
  const [fileNames, setFileNames] = useState<string[]>([]);

  const onDrop = (files: any) => {
    setFile(files);
    setFileNames([]);
  };
  useEffect(() => {
    file &&
      file.map((file, index) => {
        const name = getFileNameFromBlob(file).then((res) =>
          //@ts-ignore
          setFileNames((prev) => [...prev, res])
        );
        console.log(name);
      });
  }, [file]);

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
        for (let i = 0; i < file.length; i++) {
          formData.append("image", file[i]);
        }
        const response = await axios.post("/api/firebase", formData, {
          headers: { Authorization: "Bearer " + token },
        });
        onChange([...value, ...response.data.url]);
        setUploading(false);
        setFile(undefined);
        setFileNames([]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (val: string) => {
    const url = val.substring(val.indexOf("files") + 8, val.lastIndexOf("?"));
    console.log(url);
    try {
      await axios.delete("/api/firebase?id=" + url, {
        headers: { Authorization: "Bearer " + token },
      });
      const updatedList = [...value];
      updatedList.pop();
      onChange(updatedList);
      setFile(undefined);
    } catch (e) {
      console.log(e);
    }
  };

  function getFileNameFromBlob(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const fileName = blob.name || "Untitled"; // Get file name or set a default value
        resolve(fileName);
      };
      reader.onerror = () => {
        reject(new Error("Failed to read Blob data"));
      };
      reader.readAsArrayBuffer(blob);
    });
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
  useEffect(() => {
    setAlertOpen(Array.from({ length: value.length }, () => false));
  }, [value]);

  return (
    <div className="gap-3 flex flex-col w-full">
      {value && value.length > 0 && (
        <div className="relative h-fit w-full flex justify-center flex-wrap items-center gap-4">
          {value.map((val, index) => (
            <div className=" relative border-2">
              <Image
                src={val}
                alt="Upload"
                width={200}
                height={100}
                className="aspect-video"
              />
              <Button
                onClick={() =>
                  setAlertOpen((prev) => {
                    const l = [...prev];
                    l[index] = true;
                    return l;
                  })
                }
                disabled={disabled}
                className="bg-rose-500 text-white p-1 rounded-full absolute -top-4 -right-4 shadow-sm h-fit"
                type="button"
              >
                <X className="h-4 w-4" />
              </Button>
              <AlertDialog
                open={alertOpen[index]}
                onOpenChange={() =>
                  setAlertOpen((prev) => {
                    const l = [...prev];
                    l[index] = !alertOpen[index];
                    return l;
                  })
                }
              >
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently remove
                      your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(val)}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
        </div>
      )}
      <div className="bg-slate-200 p-4 flex flex-col gap-3 justify-center border-slate-400 border-2 border-dashed w-full">
        <Dropzone
          onDrop={onDrop}
          maxSize={1024 * 1024 * 5}
          accept={ACCEPTED_IMAGE_MIME_TYPES}
          onDropRejected={handleError}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="cursor-pointer w-full">
              <>
                <input {...getInputProps()} />
                <div className="flex flex-col items-center gap-3">
                  <UploadCloud className="text-gray-500 h-10 w-10" />
                  <span className=" text-sm text-gray-500 text-center">
                    Drag 'n' drop files here, or click to select files
                  </span>
                </div>
              </>
            </div>
          )}
        </Dropzone>
        {file && file.length > 0 && (
          <div className="flex flex-col gap-3 items-center">
            <span className=" text-sm text-gray-500 text-center">
              {fileNames.join(",  ")} <br />
              {fileNames.length} files added
            </span>
            <Button
              onClick={handleUpload}
              variant={"primary"}
              className="w-fit"
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
          </div>
        )}
      </div>
    </div>
  );
};
