import { ArrowDownRight, ArrowRight, ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TrustIndicators } from "./TrustIndicators";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useRouter } from "next/router";

const Slider = () => {
  const panel = [{ id: 1 }, { id: 2 }, { id: 3 }];
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
    <div className="flex flex-col gap-2">
      <div
        className={`relative flex items-center max-sm:py-2 py-3 shadow-l gap-16 md:gap-28 border-y-[3px] border-sky-900/20 backdrop-blur-xl bg-sky-800/[7%] hover:bg-sky-800/[12%] overflow-clip max-sm:hidden transition-all group`}
      >
        {" "}
        {/* Slider Wrapper */}
        {panel.map((el) => {
          return (
            <div
              key={el.id}
              className="flex gap-20 sm:animate-scroll whitespace-nowrap group-hover:paused"
            >
              <TrustIndicators />
              <div className="flex gap-2">
                <div className="h-24 max-sm:h-20 aspect-[2.8] max-sm:w-40 rounded-md flex items-center justify-center gap-4 bg-sky-800/20 overflow-hidden">
                  {images.map((el) => {
                    return (
                      <>
                        <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                          <Image
                            src={"/new/noblesoft.jpg"}
                            height={200}
                            width={200}
                            alt=""
                            className="h-full w-full object-cover rounded-md shadow-xl"
                          />
                        </div>
                        <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                          <Image
                            src={"/new/ms_re.jpg"}
                            height={200}
                            width={200}
                            alt=""
                            className="h-full w-full object-cover rounded-md shadow-xl"
                          />
                        </div>
                        <div className="animate-snap-scroll snap-center snap-x snap-mandatory whitespace-nowrap h-20 max-sm:h-16 aspect-video animate-snap-loop">
                          <Image
                            src={"/new/ms_lm.jpg"}
                            height={200}
                            width={200}
                            alt=""
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
                  <ScrollLink
                    to="works-section"
                    onClick={() => scrollToSection("works-section")}
                    className="px-4 py-1 flex gap-2 items-center hover:underline text-sm text-nowrap cursor-pointer"
                  >
                    <ArrowDownRight size={16} strokeWidth={1.5} /> Learn More
                  </ScrollLink>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 text-sm min-w-80 max-w-80">
                <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full">
                  Apps
                </span>
                <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full">
                  Websites
                </span>
                <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full">
                  Design
                </span>
                <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full">
                  User Interface
                </span>
                <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full">
                  AI
                </span>
                <span className="px-3 py-1 text-xs font-medium text-neutral-700 bg-amber-600/15 rounded-full">
                  & More
                </span>
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
                  className="absolute z-30 hover:opacity-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400 hover:bg-amber-300 rounded-full p-4"
                >
                  <Mail className="h-7 w-7" strokeWidth={1.2} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <span className="sm:hidden w-full flex items-center justify-center">
        <ChevronDown size={20} className="text-foreground/50 animate-bounce" />
      </span>
    </div>
  );
};

export default Slider;
