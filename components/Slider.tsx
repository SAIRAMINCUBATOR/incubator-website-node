"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ImageData } from "@/schema";
import { Pagination } from "@/components/Pagination";
import { useEffect } from "react";

interface Props {
  images: ImageData[];
}

export const Slider = ({ images }: Props) => {
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
    console.log(current);
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
        }),
      ]}
      className="w-screen "
    >
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem
              key={index}
              className="md:basis-full lg:basis-full w-full flex justify-center bg-gray-400"
            >
              <Image
                src={img.image}
                alt={`${img.name}`}
                className={"md:h-[600px] w-full object-contain"}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
