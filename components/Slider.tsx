"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import img from "@/public/img.jpeg"
import Image from "next/image"
import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Slider = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            className="w-full "
        >
            <CarouselContent>
                {Array.from({length: 5}).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-full lg:basis-full w-full flex justify-center">
                        <Image src={img} alt={"Image"} className={"h-[70%] w-full object-cover"}/>
                    </CarouselItem>
                ))}

            </CarouselContent>

        </Carousel>

    )
}
