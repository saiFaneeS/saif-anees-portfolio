"use client";

import { useNavbar } from "@/context/Navbar";
import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { TrustIndicators } from "./TrustIndicators";
import Slider from "./Slider";

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
      className={`h-screen overflow-x-hidden text-slate-950 max-sm:h-[88vh] flex flex-col justify-start max-sm:justify-between gap-5 max-sm:gap-4  px-24 max-lg:px-16 max-md:px-12 max-sm:px-4 pt-40 absolute w-full lg:overflow-hidden lg:h-screen ${
        isActive ? "slide-out-top" : "slide-in-bottom"
      } ${pageChanged ? "hidden" : ""}`}
    >
      <div className="flex flex-nowrap items-center justify-center gap-2 text-sm sm:hidden animate-scroll whitespace-nowrap">
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Apps & Websites
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Design
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          User Interface
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Video
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Apps & Websites
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Design
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          User Interface
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Video
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Apps & Websites
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Design
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          User Interface
        </span>
        <span className="border rounded-full p-[1px] px-5 bg-neutral-50/70 text-nowrap">
          Video
        </span>
      </div>
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

      <Slider />
    </div>
  );
}
