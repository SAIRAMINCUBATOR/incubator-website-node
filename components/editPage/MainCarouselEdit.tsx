"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Loader2, Pencil, PlusCircle, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { MainCarousel } from "@prisma/client";
import axios from "axios";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const MainCarouselEdit = () => {
  const [data, setData] = useState<MainCarousel[]>();
  const [loading, setLoading] = useState(false);
  const { onOpen, isOpen } = useModal();

  const getData = async () => {
    setLoading(true);
    const response = await axios.get("/api/components/mainCarousel");
    setData(response.data.response);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, [isOpen]);
  return (
    <div className=" flex flex-col p-3 m-3 border-2 rounded-lg">
      <div className="flex items-center gap-5">
        <span className=" font-montserrat font-bold text-xl">Main Slider</span>
        <Button
          onClick={() => onOpen("addMainCarousel")}
          variant={"ghost"}
          className=" border-dashed border-4 border-blue-400"
        >
          <PlusCircle className="h-5 w-5 mr-2" /> Add
        </Button>
      </div>
      <div className="min-h-[100px] w-full flex justify-center items-center">
        {!loading && data && data.length > 0 ? (
          <ScrollArea className="w-full py-4">
            <div className="flex gap-10">
              {data.map((datum, index) => (
                <>
                  <Image
                    className="object-contain rounded-xl"
                    src={datum.image}
                    alt={`${datum.name}`}
                    key={index}
                    width={200}
                    height={105}
                  />
                  <div className="flex gap-5">
                    <Button
                      onClick={() =>
                        onOpen("editMainCarousel", { mainCarousel: datum })
                      }
                      variant={"ghost"}
                      className=" border-dashed border-4 border-blue-400"
                    >
                      <Pencil className="h-5 w-5 mr-2" /> Edit
                    </Button>
                    <Button
                      onClick={() =>
                        onOpen("deleteMainCarousel", { mainCarousel: datum })
                      }
                      variant={"ghost"}
                      className=" border-dashed border-4 border-blue-400"
                    >
                      <Trash className="h-5 w-5 mr-2" /> Delete
                    </Button>
                  </div>
                </>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <div className="flex gap-10 py-4 items-start w-full">
            <div className="flex gap-5  ">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-200" />
              <div className="flex items-start h-full gap-2 justify-start">
                <Skeleton className="h-[40px] w-[100px] rounded-md bg-gray-200" />
                <Skeleton className="h-[40px] w-[100px] rounded-md bg-gray-200" />
              </div>
            </div>
            <div className="flex gap-5 ">
              <Skeleton className="h-[105px] w-[200px] rounded-xl bg-gray-200" />
              <div className="flex items-start h-full gap-2 justify-start">
                <Skeleton className="h-[40px] w-[100px] rounded-md bg-gray-200" />
                <Skeleton className="h-[40px] w-[100px] rounded-md bg-gray-200" />
              </div>
            </div>
          </div>
          // <Loader2 className="h-10 w-10 animate-spin" />
        )}
      </div>
    </div>
  );
};

export default MainCarouselEdit;
