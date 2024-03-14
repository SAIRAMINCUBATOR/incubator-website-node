"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Loader2, Pencil, PlusCircle, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { Gallery } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const CompanyEdit = () => {
  const [data, setData] = useState<Gallery[]>();
  const [loading, setLoading] = useState(false);
  const { onOpen, isOpen } = useModal();

  const getData = async () => {
    setLoading(true);
    const response = await axios.get("/api/components/company");
    setData(response.data.response);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [isOpen]);
  return (
    <div id="companies" className=" flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4">
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">Companies</span>
        <Button
          onClick={() => onOpen("addCompany")}
          variant={"ghost"}
          className=" border-dashed bg-blue-500 text-white shadow-lg hover:scale-105"
        >
          <PlusCircle className="h-5 w-5 mr-2" /> Add
        </Button>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        {!loading ? (
          <ScrollArea className="w-full py-4">
            {data && data.length > 0 ? (
              <div className="flex gap-20 mb-4">
                {data.map((datum, index) => (
                  <div className="flex flex-col gap-5">
                    <Image
                      className="object-cover rounded-xl w-[250px] h-[150px] shadow bg-slate-100"
                      src={datum.image}
                      alt={`${datum.name}`}
                      key={index}
                      width={200}
                      height={105}
                    />
                    <div className="flex gap-5 justify-center">
                      <Button
                        onClick={() =>
                          onOpen("editCompany", { company: datum })
                        }
                        variant={"ghost"}
                        className="bg-green-400 w-[100px] text-white shadow-md"
                      >
                        <Pencil
                          className="h-4 w-4 mr-2 fill-green-800"
                          stroke="false"
                        />{" "}
                        Edit
                      </Button>
                      <Button
                        onClick={() =>
                          onOpen("deleteCompany", { company: datum })
                        }
                        variant={"ghost"}
                        className="bg-red-400 w-[100px] text-white shadow-md"
                      >
                        <Trash
                          className="h-5 w-5 mr-2 text-white fill-red-800"
                          stroke="false"
                        />{" "}
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center text-2xl font-bold">
                No Data Found
              </div>
            )}
            <ScrollBar orientation="horizontal" color="rgb(156, 163, 175)" />
          </ScrollArea>
        ) : (
          <div className="flex gap-10 py-4 items-start w-full overflow-hidden">
            <div className="flex flex-col gap-5  ">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-between">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-between">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-5  ">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-between">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
          </div>
          // <Loader2 className="h-10 w-10 animate-spin" />
        )}
      </div>
    </div>
  );
};

export default CompanyEdit;