"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowBigDown,
  ArrowBigUp,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Scroller from "./Scroller";

const Projects = () => {
  const projects = [
    {
      name: "Noblesoft Agency",
      description: "Digital agency website with modern design and animations.",
      image: "/new/noblesoft.jpg",
      url: "https://noblesoft.vercel.app",
      // slug: "/",
      icons: "nextdotjs-color.svg",
      year: "2023",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
      name: "MS Real Estate LLC",
      description: "Luxury real estate platform for property listings.",
      image: "/new/ms_re.jpg",
      url: "https://www.msrealestate.ae",
      slug: "/ms-real-estate",
      icons: "nextdotjs-color.svg",
      year: "2024",
      tags: ["Next.js", "Tailwind", "API Integration", "CMS"],
    },
    {
      name: "Oh GHAD! Fundraiser Site",
      description: "Non-profit fundraising platform with donation integration.",
      image: "/new/ohghad1.jpg",
      url: "https://www.ohghad.org",
      slug: "/ohghad-non-profit",
      icons: "wp.svg",
      year: "2024",
      tags: ["WordPress", "PHP", "Web Design"],
    },
    {
      name: "Luxury Motors Booking",
      description: "Premium vehicle booking and management system.",
      image: "/new/ms_lm.jpg",
      url: "https://modernstandards.ae",
      slug: "/ms-luxury-motors",
      icons: "nextdotjs-color.svg",
      year: "2023",
      tags: ["Next.js", "Node.js", "CMS", "Tailwind"],
    },
    {
      name: "Advance Lead Manager System",
      description: "Enterprise-grade lead management solution.",
      image: "/new/lms.jpg",
      // slug: "/",
      icons: "nextdotjs-color.svg",
      year: "2024",
      tags: ["CRM", "TypeScript", , "Node.js", "MongoDB"],
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div id="slide-in-section" className="sm:sticky top-0">
      <Scroller scrollText={"WORKS"} />
      <div
        className={`sm:min-h-[130vh] bg-sky-100/80 flex max-md:flex-col justify-center items-start max-md:items-start gap-12 max-md:gap-8 max-sm:gap-6 px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 sm:py-32 py-16 relative w-full`}
      >
        <div className="w-1/3 max-md:w-full shrink-0 flex flex-col gap-6 max-sm:gap-4">
          <div className="w-full aspect-video overflow-hidden relative rounded-md bg-neutral-200/80">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 works-section" />
            {projects[currentProjectIndex]?.image && (
              <Image
                src={projects[currentProjectIndex]?.image}
                alt={projects[currentProjectIndex]?.name}
                width={1000}
                height={1000}
                onLoad={() => setIsImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isImageLoaded
                    ? "scale-100 opacity-100"
                    : "scale-110 opacity-0"
                }`}
              />
            )}{" "}
            <div className="absolute bottom-4 left-4 z-10 flex gap-2 items-center flex-wrap">
              {projects[currentProjectIndex]?.url && (
                <Link
                  href={projects[currentProjectIndex]?.url}
                  target="_blank"
                  className=""
                >
                  <button className="text-sm group flex items-center gap-2 bg-sky-50/80 hover:bg-sky-100/90 text-sky-900 hover:text-sky-900 px-4 py-1.5 rounded-sm font-medium transition-all">
                    Visit Site
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </Link>
              )}
              {projects[currentProjectIndex]?.slug && (
                <Link
                  href={`/case-study${projects[currentProjectIndex]?.slug}`}
                  className=""
                >
                  <button className="text-sm group flex items-center gap-2 bg-violet-50/80 hover:bg-violet-100/90 text-violet-900 px-4 py-1.5 rounded-sm font-medium transition-all">
                    Case Study
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-2 max-sm:hidden">
              {projects[currentProjectIndex]?.name}
            </h3>
            <p className="text-neutral-800 text-sm line-clamp-1 mb-4">
              {projects[currentProjectIndex]?.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {projects[currentProjectIndex]?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium text-neutral-700 bg-neutral-900/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-neutral-900/15 sm:hidden"></div>

        <div className="flex flex-col w-full">
          <div className="flex gap-6 justify-between items-center mb-6 max-sm:mb-4">
            <h2 className="text-xl font-semibold">Works</h2>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setCurrentProjectIndex(
                    (prev) => (prev - 1 + projects.length) % projects.length
                  )
                }
                className="p-2 border-2 border-foreground/10 bg-sky-900/5 hover:bg-sky-900/15 rounded-full transition-colors max-sm:p-1"
              >
                <ArrowBigUp size={22} strokeWidth={1.2} />
              </button>
              <button
                onClick={() =>
                  setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
                }
                className="p-2 border-2 border-foreground/10 bg-sky-900/5 hover:bg-sky-900/15 rounded-full transition-colors max-sm:p-1"
              >
                <ArrowBigDown size={22} strokeWidth={1.2} />
              </button>
            </div>
          </div>

          <div className="space-y-2 border-[3px] border-foreground/10 backdrop-blur-md bg-sky-800/[7%] p-2 rounded-md overflow-hidden">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`group flex items-center justify-between w-full p-3 rounded transition-all ${
                  index === currentProjectIndex
                    ? "bg-foreground text-white"
                    : "hover:bg-sky-900/10"
                }`}
              >
                <div className="text-sm flex items-center gap-4">
                  <span className="text-sm opacity-50 font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">{project.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm opacity-75">{project.year}</span>
                  <ChevronRight
                    size={20}
                    className={`transition-transform ${
                      index === currentProjectIndex
                        ? "translate-x-1"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
