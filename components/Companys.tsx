"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { ImageData } from "@/schema";

interface Props {
  images: ImageData[];
}

export const CompanyComponent = ({ images }: Props) => {
  return (
    <Carousel
      className="w-[90%] m-5 carousel "
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
            <CarouselItem
              className=" md:basis-1/6 basis-1/2 max-w-fit md:pl-10 flex items-center"
              key={index}
            >
              <Image
                src={img.image}
                alt={img.name}
                className="object-contain h-32  p-4 w-fit"
                width={300}
                height={300}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
};
