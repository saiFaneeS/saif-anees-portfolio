import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Slider = () => {
  const panel = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const images = [{ id: 1 }, { id: 2 }];

  return (
    <div className="relative flex overflow-hidden items-center py-4 gap-20">
      {/* Slider Wrapper */}
      {panel.map((el) => {
        return (
          <div
            key={el.id}
            className="flex gap-10 sm:animate-scroll whitespace-nowrap"
          >
            <div className="flex gap-2">
              <div className="h-24 max-sm:h-20 aspect-[2.8] max-sm:w-40 rounded-md flex items-center justify-center gap-4 bg-neutral-300/50 overflow-hidden">
                {images.map((el) => {
                  return (
                    <>
                      <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                        <Image
                          src={"/ohghad-web.png"}
                          height={200}
                          width={200}
                          className="h-full w-full object-cover rounded-md shadow-xl"
                        />
                      </div>
                      <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                        <Image
                          src={"/msre.png"}
                          height={200}
                          width={200}
                          className="h-full w-full object-cover rounded-md shadow-xl"
                        />
                      </div>
                      <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                        <Image
                          src={"/mslm.webp"}
                          height={200}
                          width={200}
                          className="h-full w-full object-cover rounded-md shadow-xl"
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

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm min-w-80 max-w-80 max-sm:hidden">
              <span className="border rounded-sm p-[1px] px-3 bg-neutral-50/70">
                Apps
              </span>
              <span className="border rounded-sm p-[1px] px-3 bg-neutral-50/70">
                Websites
              </span>
              <span className="border rounded-sm p-[1px] px-3 bg-neutral-50/70">
                Design
              </span>
              <span className="border rounded-sm p-[1px] px-3 bg-neutral-50/70">
                User Interface
              </span>
              <span className="border rounded-sm p-[1px] px-3 bg-neutral-50/70">
                Animation
              </span>
              <span className="border rounded-sm p-[1px] px-3 bg-amber-100">
                & More
              </span>
            </div>

            <div className="relative flex justify-center items-center z-20 max-sm:invisible">
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
        );
      })}
    </div>
  );
};

export default Slider;
