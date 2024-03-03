"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import AutoScroll from "embla-carousel-auto-scroll";

export const Startup = ({
  tags1,
  tags2,
}: {
  tags1: String[];
  tags2: String[];
}) => {
  return (
    <div id="startups" className="projects  ">
      <h2 data-splitting="" className="our-projects">
        STARTUPS
      </h2>
      <div
        className={
          "flex lg:flex-row flex-col w-full justify-evenly md:min-h-[400px] items-cente space-y-8 lg:space-y-0"
        }
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
                    <CarouselItem className="basis-1/6">
                      <div
                        key={index}
                        className=" group hover:ml-8 transition-all duration-200 font-semibold w-fit ease-in-out cursor-default"
                      >
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
        <div className="min-h-[400px] md:min-w-[500px] border-blue-400 border-4 rounded-2xl flex flex-col bg-white shadow-lg">
          <h2
            className={`max-w-[450px] uppercase font-sans text-3xl font-bold text-wrap p-10 relative `}
          >
            Non DPIIT RECOGNIZED STARTUPS
            <div className="absolute bottom-4 w-2/4 h-2 bg-blue-500 rounded-2xl"></div>
          </h2>
          <div className="w-full h-full flex justify-center">
            {/* <ScrollArea className="h-[200px] w-[350px] rounded-md p-4">
              {tags2.map((tag, index) => (
                <>
                  <div
                    key={index}
                    className="py-2 group hover:ml-8 transition-all duration-200 font-semibold w-fit ease-in-out cursor-default"
                  >
                    <span className="group-hover:text-blue-500">
                      {index + 1}
                    </span>
                    . {tag}
                  </div>
                </>
              ))}
              <ScrollBar color="blue" />
            </ScrollArea> */}
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
                    <CarouselItem className="basis-1/6">
                      <div
                        key={index}
                        className=" group hover:ml-8 transition-all duration-200 font-semibold w-fit ease-in-out cursor-default"
                      >
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
      </div>
    </div>
  );
};
