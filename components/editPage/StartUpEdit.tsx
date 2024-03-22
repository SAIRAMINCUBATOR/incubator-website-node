"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Loader2, Pencil, PlusCircle, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { StartUp } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const StartUpEdit = () => {
  const [data, setData] = useState<StartUp[]>();
  const [loading, setLoading] = useState(false);
  const { onOpen, isOpen } = useModal();

  const getData = async () => {
    setLoading(true);
    const response = await axios.get("/api/components/startup");
    setData(response.data.response);
    setLoading(false);
  };
  useEffect(() => {
    if (!isOpen) getData();
  }, [isOpen]);
  return (
    <div
      id="startup"
      className=" flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4"
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl">StartUp</span>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        {!loading ? (
          <div className="w-full py-4">
            {data && data.length > 0 ? (
              <div className="flex gap-20 justify-evenly flex-wrap">
                {data.map((datum, index) => (
                  <div className="flex flex-col gap-5">
                    <div className="h-full w-full border-2 ">
                      <p className="text-2xl font-semibold text-center">
                        {datum.name}
                      </p>
                    </div>
                    <div className="flex gap-5 justify-center">
                      <Button
                        onClick={() =>
                          onOpen("editManagement", { startup: datum })
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
                      {/* <Button
                        onClick={() =>
                          onOpen("deleteStartUp", { startup: datum })
                        }
                        variant={"ghost"}
                        className="bg-red-400 w-[100px] text-white shadow-md"
                      >
                        <Trash
                          className="h-5 w-5 mr-2 text-white fill-red-800"
                          stroke="false"
                        />
                        Delete
                      </Button> */}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full flex justify-center text-2xl font-bold">
                No Data Found
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-10 py-4 items-start w-full overflow-hidden justify-evenly">
            <div className="flex  flex-col gap-5  ">
              <Skeleton className="h-[55px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-center">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <Skeleton className="h-[55px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-center">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartUpEdit;
