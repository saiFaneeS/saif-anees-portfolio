"use client";

import Link from "next/link";
import {
  ArrowUpRightFromCircle,
  Book,
  Briefcase,
  Globe,
  Hammer,
  Handshake,
  Loader,
  Mail,
  ThumbsUp,
} from "lucide-react";
import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import emblaCarouselAutoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";

export default function Hero() {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPageChanged(false);
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);
  }, [setPageChanged]);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div
      className={`h-screen text-slate-950 max-sm:h-[88vh] flex flex-col justify-start max-sm:justify-between gap-5 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 pt-40 absolute w-full ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="text-6xl w-full max-sm:text-4xl pr-4 font-semibold leading-none">
        <div className="">
          <h1
            className={`leading-none font-semibold flex break-words justify-start items-center text-left text-slide-in-bottom`}
          >
            ALL
            <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-slate-950"></div>
            IN
            <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-slate-950"></div>
            ONE
          </h1>
        </div>
        <div className="overflow-hidden -mr-4">
          <h1 className="leading-none text-slide-in-bottom max-sm:break-words text-emerald-500">
            DEVELOPER
          </h1>
        </div>
      </div>

      <div className="flex w-full gap-6">
        <TrustIndicators />
      </div>

      <div className="flex w-full gap-6 items-center">
        <Link
          href={"/works"}
          className="flex gap-2 items-center text-base font-medium hover:underline"
        >
          <ArrowUpRightFromCircle size={18} strokeWidth={2.4} />
          See My Projects
        </Link>
      </div>

      <div className="absolute flex justify-center items-center max-sm:right-5 right-12 bottom-4 z-20">
        <svg
          className="w-[90px] h-[90px] animate-rotate rounded-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circlePath"
              d="M100,100 m-90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
            />
          </defs>
          <text
            className="text-[20px] font-medium text-black"
            textLength="565"
            dominantBaseline="middle"
          >
            <textPath href="#circlePath">
              {"GET IN TOUCH ・ GET IN TOUCH ・ "}
            </textPath>
          </text>
        </svg>

        <Link
          href="mailto:saifanees11@gmail.com"
          className="absolute z-30 hover:opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-200 hover:bg-amber-400 rounded-full p-4"
        >
          <Mail className="h-7 w-7" strokeWidth={1.2} />
        </Link>
      </div>

      {/* slider */}
      <div className="relative w-full">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full cursor-grab">
            {[
              {
                text: "Satisfied Clients with Positive Feedbacks.",
                icon: Handshake,
              },
              {
                text: "I approach for a consistent design from concept to launch.",
                icon: ThumbsUp,
              },
              {
                text: "Years of Solid Experience as a Developer.",
                icon: Hammer,
              },
            ].map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 pl-0 max-sm:mb-1.5"
              >
                <div
                  className="p-4 border-r flex flex-col"
                  style={{ userSelect: "none" }}
                >
                  <div className="flex items-center mb-2 max-sm:bg-gradient-to-r from-emerald-100 to-transparent max-sm:py-4 max-sm:px-3">
                    <item.icon size={20} className="mr-2" />{" "}
                    {/* Changed to use Lucide icons */}
                    <h4 className="font-medium text-base hover:cursor-grab">
                      {index === 0
                        ? "5+ Satisfied Clients"
                        : index === 1
                        ? "Expertise in Design"
                        : "2+ Years of Experience"}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 max-sm:hidden">
                    {item.text}
                  </p>{" "}
                  {/* Updated to use item.text */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 right-0 w-1/5 max-sm:w-1/2 bg-gradient-to-r from-transparent to-gray-100/50 z-10 pointer-events-none"></div>
      </div>
    </div>
  );
}
