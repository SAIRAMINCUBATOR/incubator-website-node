"use client";
import Image from "next/image";
import { ChevronDown, ChevronUp, Pencil, X } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AuxilaryGallery, MainGallery } from "@prisma/client";
import { useSession } from "./providers/context/SessionContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  images: MainGallery[] | AuxilaryGallery[];
  id: string;
  heading?: string;
  min?: string;
  collab?: boolean;
}

const GalleryComponent = ({ images, id, heading, min, collab }: Props) => {
  const { token } = useSession();
  const path = usePathname();
  const ImageC = ({ imagedata }: { imagedata: MainGallery }) => {
    if (path != "/") {
      return (
        <Dialog>
          <DialogTrigger>
            <div
              className={cn(
                "relative group  drop-shadow-lg group-hover:scale-110 transition-all ease-in duration-200 cursor-pointer",
                !collab && "border-2 border-white shadow-lg"
              )}
            >
              <Image
                src={imagedata.image}
                alt={imagedata.name}
                width={collab ? 200 : 800}
                height={collab ? 200 : 800}
                className={cn(
                  "object-contain transition-all ease-in duration-200 group-hover:scale-110",
                  !collab &&
                    "h-[220px] min-w-[350px] max-w-[350px]  group-hover:shadow-xl group-hover:drop-shadow-xl group-hover:rounded-xl"
                )}
              />
              {!collab && (
                <div className="absolute top-[90%] text-center text-white flex justify-center transition-all ease-in duration-200 group-hover:top-[95%] items-center z-10 w-full h-[10%] gradient-overlay group-hover:scale-110 group-hover:rounded-b-xl">
                  <span className="font-semibold capitalize ">
                    {imagedata.name}
                  </span>
                </div>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none place-content-center max-w-[3/4]">
            <DialogClose className=" bg-black/35 rounded-full p-4">
              <X className="h-7 w-7 text-white " strokeWidth={3} />
              <span className="sr-only">Close</span>
            </DialogClose>
            <div className="w-full flex justify-center">
              <Image
                src={imagedata.image}
                alt={imagedata.name}
                className={cn(" max-w-[750px]", min || "min-w-[500px]")}
                width={collab ? 200 : 800}
                height={collab ? 200 : 800}
              />
            </div>
            <span className="font-semibold capitalize text-white text-center text-2xl">
              {imagedata.name}
            </span>
          </DialogContent>
        </Dialog>
      );
    } else {
      return (
        <Link href={"/gallery?cat=" + imagedata.categoryId}>
          <div className="relative group border-2 border-white shadow-lg drop-shadow-lg  group-hover:scale-110 transition-all ease-in duration-200 cursor-pointer">
            <Image
              src={imagedata.image}
              alt={imagedata.name}
              width={800}
              height={800}
              className="h-[220px] min-w-[350px] max-w-[350px] group-hover:scale-110 group-hover:shadow-xl group-hover:drop-shadow-xl group-hover:rounded-xl transition-all ease-in duration-200"
            />
            <div className="absolute top-[90%] text-center text-white flex justify-center transition-all ease-in duration-200 group-hover:top-[95%] items-center z-10 w-full h-[10%] gradient-overlay group-hover:scale-110 group-hover:rounded-b-xl">
              <span className="font-semibold capitalize ">
                {imagedata.name}
              </span>
            </div>
          </div>
        </Link>
      );
    }
  };

  return (
    <div className={cn("w-full p-4 flex flex-col text-center gap-5")} id={id}>
      <div className="flex justify-end items-center w-full py-2">
        <div className="w-full flex justify-center">
          <h2
            className=" uppercase md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            {heading || "gallery"}
          </h2>
        </div>
        {token && path == "/" && (
          <div className=" justify-end mr-5">
            <Link href={"/edit?section=mainGallery"}>
              <Pencil />
            </Link>
          </div>
        )}
      </div>
      <div className="md:block hidden w-full ">
        <div className="relative justify-center items-center flex">
          <div
            className={cn(
              "p-4 flex flex-1 flex-wrap justify-center justify-items-center gap-10 md:w-[80%] w-full overflow-hidden transition-all duration-500 ease-in-out"
            )}
          >
            {images &&
              images.map((image, index) => (
                <ImageC key={index} imagedata={image} />
              ))}
          </div>
        </div>
      </div>
      <div className="md:hidden block px-3">
        {images &&
          Array.from({ length: Math.ceil(images.length / 5) }).map(
            (_, index) => (
              <ScrollArea className="md:w-[90%] w-full py-3" key={index}>
                <div className="flex justify-center items-center gap-2">
                  {images
                    .slice(index * 5, index * 5 + 5)
                    .map((image, index1) => (
                      <ImageC imagedata={image} />
                    ))}
                </div>
                <ScrollBar
                  orientation="horizontal"
                  color="rgb(156, 163, 175)"
                />
              </ScrollArea>
            )
          )}
      </div>
    </div>
  );
};

export default GalleryComponent;
