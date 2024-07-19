"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect } from "react";
import { ImageData } from "@/schema";
import { Pagination } from "./Pagination";

interface Props {
  images: ImageData[];
  imagesize: "object-cover" | "object-contain";
}

export const Slider = ({ images, imagesize }: Props) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(-1);
  const [count, setCount] = React.useState(-1);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(
      api.selectedScrollSnap() === api.scrollSnapList().length
        ? 0
        : api.selectedScrollSnap()
    );

    api.on("select", () => {
      setCurrent(
        api.selectedScrollSnap() === api.scrollSnapList().length
          ? 0
          : api.selectedScrollSnap()
      );
    });
  }, [api]);
  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: false,
        }),
      ]}
      className="w-screen bg-blue-500 bg-opacity-5"
    >
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem
              key={index}
              className="md:basis-full lg:basis-full w-full flex justify-center"
            >
              <Image
                src={img.image}
                alt={img.name}
                className={
                  "md:h-[600px] h-[450px] w-full " + `${imagesize as string}`
                }
                height={8000}
                width={8000}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <Pagination total={images.length} current={current}/>
      <CarouselNext className="right-6"/>
      <CarouselPrevious className="left-6"/>
    </Carousel>
  );
};
