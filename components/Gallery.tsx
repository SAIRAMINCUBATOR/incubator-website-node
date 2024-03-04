"use client";
import Image from "next/image";
import { ImageData } from "@/schema";
import { ChevronDown } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useLayoutEffect } from "react";
const Gallery = ({ images }: { images: ImageData[] }) => {
  const ImageC = ({ image, name }: ImageData) => {
    return (
      <div className="relative group border-2 border-white shadow-lg drop-shadow-lg  group-hover:scale-110 transition-all ease-in duration-200 cursor-pointer">
        <Image
          src={image}
          alt={name}
          className="h-[220px] min-w-[350px] max-w-[350px] group-hover:scale-110 transition-all ease-in duration-200"
        />
        <div className="absolute top-[90%] text-center text-white flex justify-center transition-all ease-in duration-200 group-hover:top-[95%] items-center z-10 w-full h-[10%] gradient-overlay group-hover:scale-110">
          <span className="font-semibold capitalize ">{name}</span>
        </div>
      </div>
    );
  };
  useEffect(() => {
    console.log(Math.ceil(images.length / 5));
  }, []);

  return (
    <div
      className="w-full p-4 bg-blue-100/50 flex flex-col text-center"
      id="gallery"
    >
      <h2 data-splitting="" className="our-projects uppercase p-4">
        Gallery
      </h2>
      <div className="md:block hidden w-full ">
        <div className="relative justify-center items-center flex">
          <div className="p-4 flex flex-1 flex-wrap justify-center gap-10 w-[80%] overflow-hidden max-h-[400px]">
            {images &&
              images
                .slice(0, 6)
                .map((image, index) => (
                  <ImageC image={image.image} name={image.name} key={index} />
                ))}
          </div>
          {images.length > 6 && (
            <div className="gradient-overlay2 h-[10%] absolute top-[90%] w-[80%]">
              <div className="w-full flex justify-center items-center gap-4">
                <ChevronDown
                  className="h-7 w-7 "
                  color="white"
                  strokeWidth={4}
                />
                <span className="text-2xl font-bold text-white">
                  {images.length - 6} more
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
              <ScrollArea className="w-[90%] py-3">
                <div className="flex justify-center items-center gap-2">
                  {images
                    .slice(index * 5, index * 5 + 5)
                    .map((image, index1) => (
                      <ImageC image={image.image} name={image.name} />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            )
          )}
      </div>
    </div>
  );
};

export default Gallery;
