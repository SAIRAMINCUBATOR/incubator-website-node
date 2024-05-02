"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
interface Props {
  testimonycontent: Testimony[];
}
import { useEffect } from "react";
import { Pagination } from "./Pagination";
import { Testimony } from "@prisma/client";
import { useSession } from "./providers/context/SessionContext";
import Link from "next/link";
import { Pencil } from "lucide-react";

export const TestimonialSlider = ({ testimonycontent }: Props) => {
  const { token } = useSession();
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
    <div className="why shadow-inner drop-shadow-2xl h-[700px] w-full relative flex gap-5 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-b from-blue-50 via-blue-90 lg:pb-0 md:pb-[830px] pb-[850px]">
      <div className="flex justify-end items-center w-full py-2">
        <div className="w-full flex justify-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            TESTIMONIALS
          </h2>
        </div>

        <div className=" justify-end">
          {token && (
            <Link href={"/edit?section=testimony"}>
              <Pencil />
            </Link>
          )}
        </div>
      </div>
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
                  width={1000}
                  height={1000}
                />
                <p className="text-base text-justify text-gray-600 text-[20px] w-[300px] lg:w-[700px] mb-[1%]">
                  {item.description}
                </p>
                <h1 className="text-bold text-[1.6rem]">{item.companyName}</h1>
                <h2 className="text-bold">{item.Designation}</h2>
              </CarouselItem>
            ))}
        </CarouselContent>
        <Pagination total={testimonycontent.length} current={current} />
      </Carousel>
    </div>
  );
};
