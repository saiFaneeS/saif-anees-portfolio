import React, { useEffect, useState } from "react";
import Image from "next/image";
import Scroller from "./Scroller";

const About = () => {
  const tech = [
    { name: "React", icon: "/icons/react-color.svg" },
    {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
    },
    { name: "MongoDB", icon: "/icons/mongodb-color.svg" },
    { name: "Postgres", icon: "/icons/postgresql.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "Javascript", icon: "/icons/javascript-color.svg" },
    { name: "GSAP", icon: "/icons/gsap.svg" },
    { name: "TailwindCSS", icon: "/icons/tailwindcss-color.svg" },
  ];
  const tech2 = [
    { name: "Figma", icon: "/icons/figma-color.svg" },
    { name: "Webflow", icon: "/icons/webflow-icon.svg" },
    { name: "Wordpress", icon: "/icons/wordpress.svg" },
    { name: "Shopify", icon: "/icons/shopify.svg" },
    { name: "Framer", icon: "/icons/framer-color.svg" },
    { name: "WooCommerce", icon: "/icons/woocommerce.svg" },
    { name: "Elementor" },
  ];

  const skills = [
    { name: "Creativity" },
    { name: "User Interface" },
    { name: "User Experience" },
    { name: "Startups" },
    { name: "Ideas" },
    { name: "SEO" },
    { name: "Design" },
    { name: "Development" },
    { name: "E-Commerce" },
    { name: "Backend" },
  ];

  const [scrollLength, setScrollLength] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrollLength(scrollY * 0.2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sm:sticky top-0">
      {/* <Scroller scrollText="ABOUT" /> */}
      <div
        className={`overflow-x-hidden overflow-y-auto sm:min-h-[130vh] relative flex flex-col justify-start gap-8 py-20 max-sm:py-16`}
      >
        <div className="bg-sky-200 h-full w-full absolute top-0 left-0 z-0"></div>
        <div className="w-full flex flex-col justify-center relative z-10 px-12 max-lg:px-10 max-md:px-8 max-sm:px-4">
          <h2 className="text-2xl font-semibold mb-2 h-full border-b-2 border-dashed border-b-sky-900 pb-4">
            About Me
          </h2>

          <p className="text-base font-medium text-sky-950/80 leading-relaxed pt-4 max-w-6xl">
            Hi, I&apos;m Saif<span className="text-sm pl-1">👋.</span> I love
            all things creative. I&apos;ve been designing since my early teens
            and picked up programming to add life to my work.
          </p>
          <p className="text-base font-medium text-sky-950/80 leading-relaxed mb-6 pt-4 max-w-6xl">
            Now, My focus is on building Websites & Apps that solve the problems,
            always ensuring client satisfaction. When I&apos;m not building,
            I&apos;m learning some new stuff!
          </p>
        </div>
        <div>
          {/* {tools.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.category}
                </h3>
                <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-1 gap-y-1 saturate-[70%]">
                  {section.items.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center gap-3 transition-all duration-300 group bg-foreground p-1.5 px-2 ounded-sm"
                    >
                      {tool.icon && (
                        <div
                          className={`relative w-6 h-6 flex-shrink-0 ${
                            tool.name === "Javascript" && "bg-neutral-800"
                          }`}
                        >
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            fill
                            className="object-contain transition-transform"
                          />
                        </div>
                      )}
                      <span className="font-medium tracking-wide text-sky-50">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))} */}
          <div className="relative z-10 bg-foreground text-background py-2 pl-96 h-10 flex items-center justify-center font-normal text-sm text-nowrap whitespace-nowrap overflow-x-hidden">
            <div
              className="flex items-center justify-center gap-28 max-sm:gap-10 pl-20 tracking-wide transition-all ease-in-out duration-100"
              style={{ transform: `translateX(-${scrollLength}px)` }}
            >
              {tech?.map((tool, toolIndex) => (
                <div className="flex items-center gap-2">
                  <img src={tool?.icon} className="h-5 shrink-0" />
                  <span>{tool?.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 bg-foreground/80 text-background mt-2 py-2 pl-96 h-10 flex items-center justify-center font-normal text-sm text-nowrap whitespace-nowrap overflow-x-hidden">
            <div
              className="flex items-center justify-center gap-28 max-sm:gap-10 pl-36 tracking-wide transition-all ease-in-out duration-100"
              style={{ transform: `translateX(-${scrollLength}px)` }}
            >
              {tech2?.map((tool, toolIndex) => (
                <div className="flex items-center gap-2">
                  <img src={tool?.icon} className="h-5 shrink-0" />
                  <span>{tool?.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 bg-orange-600 uppercase text-background mt-2 py-2 pr-24 h-10 flex items-center justify-center font-normal text-sm text-nowrap whitespace-nowrap overflow-x-hidden">
            <div
              className="flex items-center justify-end gap-24 max-sm:gap-6 pr-20 tracking-wide transition-all ease-in-out duration-100"
              style={{ transform: `translateX(${scrollLength}px)` }}
            >
              {skills?.map((tool, toolIndex) => (
                <div className="flex items-center gap-2">
                  <img src={tool?.icon} className="h-6 flex-shrink-0" />
                  <span>{tool?.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
