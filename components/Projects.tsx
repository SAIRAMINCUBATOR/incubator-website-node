"use client"

import * as React from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image, {StaticImageData} from "next/image";

import {cn} from "@/lib/utils";
import {useEffect, useState} from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Project} from "@/schema";

interface Props{
    projects : Project[]
}

export const Projects = ({projects}:Props) => {

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(-1)
    const [count, setCount] = useState(-1);

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1 === api.scrollSnapList().length ? 0 : api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1 === api.scrollSnapList().length ? 0 : api.selectedScrollSnap() + 1)
        })
        console.log(current)
    }, [api])

    return (
        <div id="projects" className="projects h-[700px] ">

            <h2 data-splitting="" className="our-projects">OUR STUDENTS WORK</h2>
            <div className={"flex flex-col justify-center h-full items-center"}>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: "start",
                        loop: true
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    className="w-6/7"
                >
                    <CarouselContent className={"lg:-ml-[35%] xl:-ml-[25%]"}>
                        {projects && projects.map((project, index) => (
                            <CarouselItem key={index}
                                          className="lg:pl-0 md:basis-1/2 lg:basis-1/3 min-w-fit flex justify-center items-center ">

                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt="Image"
                                        className={cn(
                                            "z-0 rounded-xl w-[700px] aspect-1 transition-all duration-300 ease-in",
                                            current === index ? "h-[400px]" : "h-[320px]"
                                        )}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
                                        <div className="project-info text-left p-4 bg-gradient-to-t from-black via-gray-900 to-transparent text-white rounded-xl">
                                            <h3 className="project-title font-semibold">{project.title}</h3>
                                            <p className="project-desc">
                                                {project.description}
                                            </p>
                                            <Link href={`${project.url}`} className="apply-now">
                                                <Button>
                                                    DETAILS
                                                </Button>

                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </CarouselItem>
                        ))}

                    </CarouselContent>
                </Carousel>
            </div>
        </div>

    )
}