import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Slider = () => {
  return (
    <div className="relative flex overflow-hidden items-center py-4 gap-32">
      {/* Slider Wrapper */}
      <div className="flex gap-10 animate-scroll whitespace-nowrap">
        <div className="flex gap-4">
          <div className="h-24 w-56 rounded-md flex items-center justify-center gap-4 bg-neutral-300/80 overflow-hidden">
            <div className="animate-scroll whitespace-nowrap bg-neutral-400/80 h-20 aspect-video rounded"></div>
            <div className="animate-scroll whitespace-nowrap bg-neutral-400/80 h-20 aspect-video rounded"></div>
            <div className="animate-scroll whitespace-nowrap bg-neutral-400/80 h-20 aspect-video rounded"></div>
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

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm min-w-80 max-w-80">
          <span className="border rounded-sm p-[1px] px-3">Apps</span>
          <span className="border rounded-sm p-[1px] px-3">Websites</span>
          <span className="border rounded-sm p-[1px] px-3">Design</span>
          <span className="border rounded-sm p-[1px] px-3">User Interface</span>
          <span className="border rounded-sm p-[1px] px-3">Animation</span>
          <span className="border rounded-sm p-[1px] px-3">& More</span>
        </div>

        <div className="relative flex justify-center items-center z-20">
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
                {" GET IN TOUCH ・ GET IN TOUCH ・ "}
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
      </div>
      {/* Slider Wrapper */}
      <div className="flex gap-10 animate-scroll whitespace-nowrap">
        <div className="flex gap-4">
          <div className="h-24 w-56 rounded-md flex items-center justify-center gap-4 bg-neutral-300/80 overflow-hidden">
            <div className="animate-scroll whitespace-nowrap bg-neutral-400/80 h-20 aspect-video rounded"></div>
            <div className="animate-scroll whitespace-nowrap bg-neutral-400/80 h-20 aspect-video rounded"></div>
            <div className="animate-scroll whitespace-nowrap bg-neutral-400/80 h-20 aspect-video rounded"></div>
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

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm min-w-80 max-w-80">
          <span className="border rounded-sm p-[1px] px-3">Apps</span>
          <span className="border rounded-sm p-[1px] px-3">Websites</span>
          <span className="border rounded-sm p-[1px] px-3">Design</span>
          <span className="border rounded-sm p-[1px] px-3">User Interface</span>
          <span className="border rounded-sm p-[1px] px-3">Animation</span>
          <span className="border rounded-sm p-[1px] px-3">& More</span>
        </div>

        <div className="relative flex justify-center items-center z-20">
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
                {" GET IN TOUCH ・ GET IN TOUCH ・ "}
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
      </div>
    </div>
  );
};

export default Slider;
