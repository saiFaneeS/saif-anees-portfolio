import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ImageCarousel({ images }) {
  return (
    <Carousel
      className="w-full border border-gray-600 rounded-md"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="">
        {images?.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1 aspect-[16/10]">
              <Image
                src={image}
                alt=""
                height={1000}
                width={1000}
                className="h-full w-full object-cover rounded"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-2 border-none " />{" "}
      <CarouselNext className="absolute -right-2 border-none " />{" "}
    </Carousel>
  );
}
