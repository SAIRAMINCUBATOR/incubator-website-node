"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Pencil, PlusCircle, Trash } from "lucide-react";
import { useModal } from "@/hooks/use-model-store";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { MainCarousel } from "@prisma/client";
import axios from "axios";
import Image from "next/image";

const MainCarouselEdit = () => {
  const [data, setData] = React.useState<MainCarousel[]>();
  const { onOpen, isOpen } = useModal();

  const getData = async () => {
    const response = await axios.get("/api/components/mainCarousel");
    setData(response.data.response);
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
      {data && data.length > 0 && (
        <ScrollArea className="w-[85%]">
          <div className="flex gap-5">
            {data.map((datum, index) => (
              <>
                <Image
                  className="object-contain"
                  src={datum.image}
                  alt={`${datum.name}`}
                  key={index}
                  width={100}
                  height={100}
                />
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
                  onClick={() => onOpen("deleteMainCarousel", {mainCarousel: datum})}
                  variant={"ghost"}
                  className=" border-dashed border-4 border-blue-400"
                >
                  <Trash className="h-5 w-5 mr-2" /> Delete
                </Button>
              </>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};

export default MainCarouselEdit;
