"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

export const Slider = ({ images }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="w-full "
    >
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem
              key={index}
              className="md:basis-full lg:basis-full w-full flex justify-center"
            >
              <Image
                src={img}
                alt={"Image"}
                className={"md:h-[600px] w-full object-cover"}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
