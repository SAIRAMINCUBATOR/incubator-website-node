"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Testimonial } from "@/schema";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
interface Props {
  testimonycontent: Testimonial[];
}
import { useEffect } from "react";
import { Pagination } from "./Pagination";

export const TestimonialSlider = ({ testimonycontent }: Props) => {
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
    <div className="h-[700px] w-full relative flex gap-5 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-b from-blue-50 via-blue-90 lg:pb-0 md:pb-[830px] pb-[850px]">
      <h2
        className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-splitting
      >
        TESTIMONIAL
      </h2>
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
        className="w-full "
      >
        <CarouselContent>
          {testimonycontent &&
            testimonycontent.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-full lg:basis-full w-full justify-center flex flex-col items-center"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                <Image
                  src={item.image}
                  alt={"Image"}
                  className={"md:h-[220px] w-[220px] mb-[2%] object-contain"}
                />
                <p className="text-base text-justify text-gray-600 text-[20px] w-[300px] lg:w-[700px] mb-[1%]">
                  {item.description}
                </p>
                <h1 className="text-bold text-[1.6rem]">{item.name}</h1>
                <h2 className="text-bold">{item.designation}</h2>
              </CarouselItem>
            ))}
        </CarouselContent>
        <Pagination total={count} current={current} />
      </Carousel>
    </div>
  );
};