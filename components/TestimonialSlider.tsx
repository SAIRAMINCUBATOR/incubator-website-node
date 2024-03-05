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
    <div className="h-[700px] w-full relative flex gap-5 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-b from-blue-50 via-blue-90">
       <h2 className="our-projects" data-splitting>TESTIMONIAL</h2>
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
              className="md:basis-full lg:basis-full w-full justify-center flex flex-col items-center"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            > 
              <Image
                src={item.image}
                alt={"Image"}
                className={"md:h-[220px] w-[220px] object-cover mb-[2%]"}
              />
              <p className="text-base text-justify text-gray-600 text-[20px] w-[700px] mb-[1%]">{item.description}</p>
              <h1 className="text-bold text-[1.6rem]">{item.name}</h1>
              <h2 className="text-bold">{item.designation}</h2>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
    </div>
  );
};
