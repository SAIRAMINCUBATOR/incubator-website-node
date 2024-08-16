"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { AlertCircle, Pencil, PlusCircle, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import axios from "axios";
import { Skeleton } from "../ui/skeleton";
import { ScrollArea } from "../ui/scroll-area";
import { InternshipDetails } from "@prisma/client";
import UploadMuliple from "../UploadMuliple";

const InternshipEdit = ({ editModelType }) => {
  const { onOpen, isOpen, type } = useModal();
  const [currentType, setCurrentType] = useState(null);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible("internships" == editModelType);
  }, [editModelType]);
  const ref = useRef(null);

  const [internships, setInternships] = useState<InternshipDetails[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [upload, setUpload] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const response = await axios.get("/api/components/internships");
    setInternships(response.data.response);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setCurrentType(type);
    }
    if (
      !isOpen &&
      currentType &&
      currentType.toString().toLocaleLowerCase().endsWith("internshipdata")
    ) {
      setTimeout(getData, 500);
      // getData();
      setCurrentType(null);
    }
    if (upload) {
      setTimeout(getData, 500);
      setUpload(false);
    }
  }, [isOpen, type, upload]);

 
  return (
    <div
      id="internships"
      className={cn(
        " flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4",
        visible ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">Internships Data</span>
        <div className="flex items-center justify-center gap-2">
          <UploadMuliple
            setUpload={setUpload}
            uploadLink="/api/components/internships/upload"
            title="Internships Data"
            downloadLink="https://firebasestorage.googleapis.com/v0/b/sairam-incubation-website.appspot.com/o/internships.xlsx?alt=media&token=3ad142d8-f0de-4dd7-ae42-ce9e0397363c"
          />
        <Button
          variant="primary"
          type="button"
          className="flex items-center gap-2"
          disabled={isLoading}
          onClick={() => onOpen("addInternshipData")}
        >
          <PlusCircle className="w-5 h-5" />
          Add Data
        </Button>
        </div>
      </div>

      <div className="min-h-[100px] w-full flex justify-center items-center">
        <div className="flex flex-col items-center w-full p-2 m-2">
          <ScrollArea className="w-[80%] h-[84vh]">
            <Table ref={ref} className="relative w-full">
              <TableHeader className="sticky top-0 text-xl z-10">
                <TableRow className="bg-slate-300 rounded-2xl">
                  <TableHead className="border-0 w-1/4">S. No. </TableHead>
                  <TableHead className="border-0 w-1/2">Student Name</TableHead>

                  <TableHead className="border-0 w-1/2">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <>
                    <TableRow>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell  className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell  className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                      <TableCell className="border-none">
                        <div className="w-full flex justify-center">
                          <Skeleton className="h-[40px] w-3/4 rounded-xl bg-gray-400" />
                        </div>
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  internships &&
                  internships.map((datum, index) => (
                    <TableRow key={index}>
                      <TableCell className="border-none">{index + 1}</TableCell>
                      <TableCell className="border-none font-semibold">
                        {datum.studentName}
                      </TableCell>

                      <TableCell className="border-none flex items-center justify-center gap-2 p-2">
                        <Button
                          onClick={() =>
                            onOpen("editInternshipData", { internships: datum })
                          }
                          variant={"ghost"}
                          className="bg-green-400 w-[100px] text-white shadow-md"
                        >
                          <Pencil
                            className="h-4 w-4 mr-2 fill-green-800"
                            stroke="false"
                          />
                          Edit
                        </Button>
                        <Button
                          onClick={() =>
                            onOpen("deleteInternshipData", { internships: datum })
                          }
                          variant={"ghost"}
                          className="bg-red-400 w-[100px] text-white shadow-md"
                        >
                          <Trash
                            className="h-5 w-5 mr-2 text-white fill-red-800"
                            stroke="false"
                          />
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default InternshipEdit;
