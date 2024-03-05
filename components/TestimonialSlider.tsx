"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonial } from "@/schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
interface Props {
  testimonycontent: Testimonial[];
}


export const TestimonialSlider = ({ testimonycontent }: Props) => {
  return (
    <div className="h-[500px] w-full relative flex gap-5 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-b from-blue-50 via-blue-90">
        <p>Testimony</p>
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
        {testimonycontent &&
          testimonycontent.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-full lg:basis-full w-full flex justify-center"
            > 
              <Image
                src={item.image}
                alt={"Image"}
                className={"md:h-[300px] w-300px object-cover"}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
    </div>
  );
};
