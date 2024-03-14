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
import { Gallery } from "@prisma/client";
import { useSession } from "./providers/context/SessionContext";
import Link from "next/link";

const GalleryComponent = ({ images }: { images: Gallery[] }) => {
  const [viewMore, setviewMore] = useState(false);
  const { token } = useSession();
  const ImageC = ({ imagedata }: { imagedata: Gallery }) => {
    return (
      <Dialog>
        <DialogTrigger>
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
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none place-content-center max-w-[3/4]">
          <DialogClose className=" bg-black/35 rounded-full p-4">
            <X className="h-7 w-7 text-white " strokeWidth={3} />
            <span className="sr-only">Close</span>
          </DialogClose>
          <Image
            src={imagedata.image}
            alt={imagedata.name}
            className=" min-w-[550px]  max-w-[750px]"
            width={1000}
            height={1000}
          />
          <span className="font-semibold capitalize text-white text-center text-2xl">
            {imagedata.name}
          </span>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div
      className={cn(
        "w-full p-4 bg-blue-100/50 flex flex-col text-center gap-5",
        viewMore && "pb-10"
      )}
      id="gallery"
    >
      <div className="flex justify-end items-center w-full py-2">
        <div className="w-full flex justify-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            GALLERY
          </h2>
        </div>

        <div className=" justify-end">
          {token && (
            <Link href={"/edit#gallery"}>
              <Pencil />
            </Link>
          )}
        </div>
      </div>
      <div className="md:block hidden w-full ">
        <div className="relative justify-center items-center flex">
          <div
            id="overflow"
            className={cn(
              "p-4 flex flex-1 flex-wrap justify-center gap-10 md:w-[80%] w-full overflow-hidden transition-all duration-500 ease-in-out",
              !viewMore && "max-h-[400px]"
            )}
          >
            {images &&
              images.map((image, index) => <ImageC imagedata={image} />)}
          </div>
          {images.length > 6 && (
            <div
              className={cn(
                " h-[10%] absolute  w-[80%] cursor-pointer flex justify-center ",
                viewMore
                  ? "top-[100%] text-black "
                  : "top-[90%] gradient-overlay2 text-white "
              )}
            >
              <div
                className={cn(
                  "h-fit w-fit z-10  flex justify-center items-center gap-5",
                  viewMore && "group group-hover:text-blue-400"
                )}
                onClick={() => setviewMore(!viewMore)}
              >
                {viewMore ? (
                  <ChevronUp
                    className="h-7 w-7 text-black group-hover:text-blue-400 transition-all ease-in duration-100"
                    strokeWidth={4}
                  />
                ) : (
                  <ChevronDown
                    className="h-7 w-7 "
                    color="white"
                    strokeWidth={4}
                  />
                )}
                <span className="text-2xl font-bold group-hover:text-blue-400 transition-all ease-in duration-100">
                  View {viewMore ? "Less" : "More"}
                </span>
              </div>
            </div>
          )}
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
