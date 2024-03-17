"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useSession } from "./providers/context/SessionContext";
import Link from "next/link";
import { Pencil } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

export const Startup = ({
  tags1,
  tags2,
}: {
  tags1: String[];
  tags2: String[];
}) => {
  const { token } = useSession();
  return (
    <div id="startups" className="projects  ">
      <div className="flex justify-end items-center w-full py-2 relative">
        <div className="w-full flex justify-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            START UP
          </h2>
        </div>

        <div className=" absolute top-4 right-0 z-30">
          {token && (
            <Link href={"/edit#startup"}>
              <Pencil />
            </Link>
          )}
        </div>
      </div>
      <div
        className={
          "flex lg:flex-row flex-col w-full justify-evenly md:min-h-[400px] items-cente space-y-8 lg:space-y-0"
        }
      >
        <Parallax
          translateY={[50, 0, "easeIn"]}
          scale={[0, 1, "easeIn"]}
          endScroll={2600}
          className="flex"
        >
          <div className="min-h-[400px] md:min-w-[500px] border-blue-400 border-4 rounded-2xl flex flex-col bg-white shadow-lg">
            <h2
              className={`max-w-[400px] uppercase font-sans text-3xl font-bold text-wrap p-10 relative `}
            >
              DPIIT RECOGNIZED STARTUPS
              <div className="absolute bottom-4 w-2/4 h-2 bg-blue-500 rounded-2xl"></div>
            </h2>
            <div className="w-full h-full flex justify-center flex-row">
              <Carousel
                orientation="vertical"
                className=" w-[350px] rounded-md p-4"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  AutoScroll({
                    speed: 0.3,
                    startDelay: 500,
                    stopOnInteraction: false,
                  }),
                ]}
              >
                <CarouselContent className="max-h-[200px] items-center md:items-start">
                  {tags1 &&
                    tags1.map((tag, index) => (
                      <CarouselItem className="basis-1/6" key={index}>
                        <div className=" group hover:ml-8 transition-all duration-200 font-semibold w-fit ease-in-out cursor-default">
                          <span className="group-hover:text-blue-500">
                            {index + 1}
                          </span>
                          . {tag}
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </Parallax>
        <Parallax
          translateY={[50, 0, "easeIn"]}
          scale={[0, 1, "easeIn"]}
          endScroll={2600}
          className="flex"
        >
          <div className="min-h-[400px] md:min-w-[500px] border-blue-400 border-4 rounded-2xl flex flex-col bg-white shadow-lg">
            <h2
              className={`max-w-[450px] uppercase font-sans text-3xl font-bold text-wrap p-10 relative `}
            >
              Non DPIIT RECOGNIZED STARTUPS
              <div className="absolute bottom-4 w-2/4 h-2 bg-blue-500 rounded-2xl"></div>
            </h2>
            <div className="w-full h-full flex justify-center">
              <Carousel
                orientation="vertical"
                className=" w-[350px] rounded-md p-4"
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  AutoScroll({
                    speed: 0.3,
                    startDelay: 500,
                    stopOnInteraction: false,
                  }),
                ]}
              >
                <CarouselContent className="max-h-[200px] items-center md:items-start">
                  {tags2 &&
                    tags2.map((tag, index) => (
                      <CarouselItem className="basis-1/6" key={index}>
                        <div className=" group hover:ml-8 transition-all duration-200 font-semibold w-fit ease-in-out cursor-default">
                          <span className="group-hover:text-blue-500">
                            {index + 1}
                          </span>
                          . {tag}
                        </div>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};
