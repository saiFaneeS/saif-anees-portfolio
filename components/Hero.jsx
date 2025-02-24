"use client";

import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";
import Backdrop3d from "./Backdrop3d";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className={`h-screen overflow-x-hidden text-slate-950 max-sm:h-[88vh] flex flex-col justify-center gap-8 px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 pt-32 absolute w-full lg:overflow-hidden lg:h-screen ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="flex flex-nowrap items-center justify-center gap-2 text-sm sm:hidden animate-scroll whitespace-nowrap">
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Apps
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Websites
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          User Interface
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          AI Integration
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Apps
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Websites
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          User Interface
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          AI Integration
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Apps
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          Websites
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          User Interface
        </span>
        <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/5 rounded-full">
          AI Integration
        </span>
      </div>
      <div className="text-6xl w-full max-sm:text-4xl pr-4 font-semibold leading-none text-cyan-500 drop-shadow-md max-sm:drop-shadow-sm">
        <div>
          <h1
            className={`leading-none font-semibold flex break-words justify-start items-center text-left text-slide-in-bottom`}
          >
            ALL
            <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-cyan-500"></div>
            IN
            <div className="min-w-4 max-w-20 flex-1 mx-2 sm:mx-3 h-2 max-sm:h-1 inline-block bg-cyan-500"></div>
            ONE
          </h1>
        </div>
        <div className="overflow-hidden -mr-4">
          <h1 className="leading-none text-slide-in-bottom max-sm:break-words text-cyan-950 drop-shadow-md max-sm:drop-shadow-sm">
            DEVELOPER
          </h1>
        </div>
      </div>

      <div>
        {/* works panel */}
        <div className="flex gap-0 sm:hidden mb-4">
          <div className="h-24 max-sm:h-20 aspect-[2.8] max-sm:w-40 rounded-md flex items-center justify-center gap-4 bg-cyan-600/10 overflow-hidden">
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

        <div className="flex w-full gap-6 max-sm:bg-cyan-400/10 max-sm:backdrop-blur-md max-sm:hover:bg-cyan-800/10 max-sm:border border-cyan-900/20 max-sm:p-4 max-sm:rounded-md transition-all">
          <TrustIndicators />
        </div>
      </div>

      <Slider />
    </div>
  );
}
