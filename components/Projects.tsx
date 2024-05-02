"use client";

import * as React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/Pagination";
import { Project } from "@prisma/client";
import { Pencil } from "lucide-react";
import { useSession } from "./providers/context/SessionContext";
import { Parallax } from "react-scroll-parallax";

interface Props {
  projects: Project[];
}

export const Projects = ({ projects }: Props) => {
  const { token } = useSession();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(-1);
  const [count, setCount] = useState(-1);

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
    <div id="projects" className="projects">
      <div className="flex justify-end items-center w-full py-2">
        <div className="w-full flex justify-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            OUR STUDENTS WORK
          </h2>
        </div>

        <div className=" justify-end">
          {token && (
            <Link href={"/edit?section=project"}>
              <Pencil />
            </Link>
          )}
        </div>
      </div>
      <div
        className={"flex flex-col justify-center min-h-[400px] items-center"}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-6/7"
        >
          <CarouselContent>
            {projects &&
              projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="lg:pl-0 md:basis-1/2 lg:basis-1/3 min-w-fit flex justify-center items-center "
                >
                  <div className="relative">
                    <Image
                      width={1000}
                      height={1000}
                      src={project.image[0]}
                      alt="Image"
                      className={cn(
                        "z-0 rounded-xl w-[700px] aspect-1 h-[250px] transition-all duration-300 ease-in",
                        current === index ? "md:h-[400px]" : "md:h-[320px]"
                      )}
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                      <div className="project-info text-left  bg-gradient-to-t from-black via-gray-900 to-transparent text-white rounded-xl">
                        <h3 className="project-title font-semibold text-center">
                          {project.name}
                        </h3>
                        <p className="project-desc hidden lg:block">{project.description}</p>
                        <Link
                          href={`/projects/${project.id}`}
                          className="apply-now"
                        >
                          <Button variant="primary">DETAILS</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Pagination total={count} current={current} />
    </div>
  );
};
