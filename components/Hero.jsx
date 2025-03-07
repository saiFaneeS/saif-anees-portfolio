"use client";

import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";
import Backdrop3d from "./Backdrop3d";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const { isActive, pageChanged, setPageChanged } = useNavbar();
  const [loading, setLoading] = useState(true);

  const panel = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const images = [{ id: 1 }, { id: 2 }];

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
      className={`h-screen overflow-hidden relative z-0 text-foreground flex flex-col justify-center gap-8 max-sm:gap-12 px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 pt-24 max-sm:pt-12 w-full lg:overflow-hidden lg:h-screen`}
    >
      <div className="absolute bottom-3 text-xs leading-none right-0 px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 flex gap-6 items-center">
        EXPLORE <ArrowDown size={12} />
      </div>
      <div className="flex flex-nowrap items-center justify-center gap-2 text-sm sm:hidden animate-scroll whitespace-nowrap">
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          Apps
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          Websites
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          User Interface
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          AI Integration
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          Apps
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          Websites
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          User Interface
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          AI Integration
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          Apps
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          Websites
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          User Interface
        </span>
        <span className="px-3 py-1 text-xs font-medium text-sky-900 bg-sky-900/5 rounded-full">
          AI Integration
        </span>
      </div>
      <div className="text-6xl w-full max-sm:text-4xl pr-4 font-semibold leading-none text-sky-500">
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
      <div>
        {/* works panel */}
        <div className="flex gap-0 sm:hidden mb-4">
          <div className="h-24 max-sm:h-20 aspect-[2.8] max-sm:w-40 rounded-md flex items-center justify-center gap-4 bg-sky-600/10 overflow-hidden">
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
            <Link
              href={"/works"}
              className="px-4 py-1 flex gap-2 items-center hover:underline text-sm text-nowrap"
            >
              <ArrowRight size={16} strokeWidth={1.5} /> Learn More
            </Link>
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
