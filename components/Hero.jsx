"use client";

import React from "react";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/router";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function Hero() {
  const images = [{ id: 1 }, { id: 2 }];

  const router = useRouter();

  const scrollToSection = (sectionId) => {
    if (router.pathname !== "/") {
      router.push(`/?scrollTo=${sectionId}`).then(() => {
        scroller.scrollTo(sectionId, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
          offset: -50,
        });
      });
    } else {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -50,
      });
    }
  };

  return (
    <div
      className={`h-[95vh] overflow-hidden relative z-0 text-foreground flex flex-col justify-center gap-8 pt-24 max-sm:pt-20 w-full lg:overflow-hidden sm:h-screen`}
    >
      <div className="relative text-6xl w-full max-sm:text-4xl pr-4 font-semibold leading-none text-sky-500 px-12 max-lg:px-10 max-md:px-8 max-sm:px-4">
        <div>
          <h1
            className={`leading-none font-semibold flex break-words justify-start items-center text-left`}
          >
            ALL
            <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-sky-500"></div>
            IN
            <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-sky-500"></div>
            ONE
          </h1>
        </div>
        <div className="overflow-hidden -mr-4">
          <h1 className="leading-none max-sm:break-words text-foreground">
            DEVELOPER
          </h1>
        </div>
      </div>

      <div className="pointer-events-auto">
        {/* works panel */}
        <div className="flex gap-0 sm:hidden px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 py-4">
          <div className="h-24 max-sm:h-20 aspect-[2.8] max-sm:w-40 rounded-md flex items-center justify-center gap-4 bg-sky-600/20 overflow-hidden">
            {images.map((el) => {
              return (
                <>
                  <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                    <Image
                      src={"/new/noblesoft.jpg"}
                      height={200}
                      width={200}
                      alt=""
                      className="h-full w-full object-cover rounded-sm shadow-xl"
                    />
                  </div>
                  <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                    <Image
                      src={"/new/ms_re.jpg"}
                      height={200}
                      width={200}
                      alt=""
                      className="h-full w-full object-cover rounded-sm shadow-xl"
                    />
                  </div>
                  <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                    <Image
                      src={"/new/ms_lm.jpg"}
                      height={200}
                      width={200}
                      alt=""
                      className="h-full w-full object-cover rounded-sm shadow-xl"
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-base font-medium leading-none mb-4">
              My Works
            </h4>
            <ScrollLink
              to="works-section"
              onClick={() => scrollToSection("works-section")}
              className="px-4 py-1 flex gap-2 items-center hover:underline text-sm text-nowrap"
            >
              <ArrowDownRight size={16} strokeWidth={1.5} /> Learn More
            </ScrollLink>
          </div>
        </div>

        <div className="flex sm:hidden bg-transparent w-full gap-6 transition-all">
          <TrustIndicators />
        </div>
      </div>
      <Slider />
    </div>
  );
}
