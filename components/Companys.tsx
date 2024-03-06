"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

interface Props {
  images: StaticImageData[];
}

export const Company = ({ images }: Props) => {
  return (
    <Carousel
      className="md:w-[90%] m-5 carousel"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 1,
          startDelay: 0,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {images &&
          images.map((img, index) => (
            <CarouselItem className=" md:basis-1/6 basis-1/4 max-w-fit md:pl-10 flex items-center" key={index}>
              <Image
                src={img}
                alt={`images ${index}`}
                className="object-contain h-32  p-4 w-fit"
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
