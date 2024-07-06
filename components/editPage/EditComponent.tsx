"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Pencil, PlusCircle, Trash } from "lucide-react";
import { ModalType, useModal } from "@/hooks/use-model-store";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface Props {
  modelName:
    | "company"
    | "team"
    | "lead"
    | "mainGallery"
    | "testimony"
    | "mainCarousel"
    | "project"
    | "facilities"
    | "startup"
    | "collaboration"
    | "assesment";
  addType: ModalType;
  editType: ModalType;
  deleteType: ModalType;
  editModelType?: string;
}

const EditComponent = ({
  modelName,
  addType,
  editType,
  deleteType,
  editModelType,
}: Props) => {
  const [data, setData] = useState<any[]>();
  const [currentType, setCurrentType] = useState(null);
  const [loading, setLoading] = useState(false);
  const { onOpen, isOpen, type } = useModal();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(
      modelName == editModelType ||
        (modelName == "lead" && editModelType == "team")
    );
  }, [editModelType]);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get("/api/components/" + modelName);
    setData(response.data.response);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentType(type);
    }
    if (
      !isOpen &&
      currentType &&
      currentType
        .toString()
        .toLocaleLowerCase()
        .endsWith(modelName.toLocaleLowerCase())
    ) {
      getData();
      setCurrentType(null);
    }
    console.log(isOpen, type);
  }, [isOpen, type]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      id={modelName}
      className={cn(
        " flex flex-col p-3 m-3 border-2 rounded-lg bg-slate-200 gap-4",
        visible ? "block" : "hidden"
      )}
    >
      <div className="flex items-center justify-between gap-5 w-full">
        <span className=" font-montserrat font-bold text-xl capitalize">
          {modelName}
        </span>
        <Button
          onClick={() => onOpen(addType)}
          variant={"ghost"}
          className=" border-dashed bg-blue-500 text-white shadow-lg hover:scale-105"
        >
          <PlusCircle className="h-5 w-5 mr-2" /> Add
        </Button>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        {!loading ? (
          <div>
            {data && data.length > 0 ? (
              <div className="flex flex-wrap gap-10 m-4 justify-evenly">
                {data.map((datum, index) => (
                  <div className="flex flex-col gap-5">
                    {datum.image ? (
                      <Image
                        className="object-contain rounded-xl w-[250px] h-[150px] shadow bg-slate-100"
                        src={
                          Array.isArray(datum.image)
                            ? datum.image[0]
                            : datum.image
                        }
                        alt={`${datum.name}`}
                        key={index}
                        width={200}
                        height={105}
                      />
                    ) : (
                      <a href={datum.file} target="_blank" className="w-full text-center">View File</a>
                    )}

                    <div className="flex gap-5 justify-center">
                      <Button
                        onClick={() => onOpen(editType, { [modelName]: datum })}
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
                          onOpen(deleteType, { [modelName]: datum })
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
          <div className="flex gap-10 py-4 md:items-start items-center w-full overflow-hidden">
            <div className="flex flex-col gap-5  ">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-between">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
            <div className="md:flex flex-col gap-5 hidden">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-400" />
              <div className="flex items-start h-full gap-2 justify-between">
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
                <Skeleton className="h-[40px] w-[90px] rounded-md bg-gray-400" />
              </div>
            </div>
            <div className="md:flex flex-col gap-5  hidden">
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

export default EditComponent;
