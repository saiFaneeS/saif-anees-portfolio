import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowDownToDot } from "lucide-react";
import Link from "next/link";
import { useNavbar } from "@/context/Navbar";

const About = () => {
  const { isActive, pageChanged, setPageChanged } = useNavbar();

  const tools = [
    {
      category: "Web",
      items: [
        { name: "React", icon: "/icons/react-color.svg" },
        { name: "Next.js", icon: "/icons/nextdotjs-color.svg" },
        { name: "Javascript", icon: "/icons/javascript-color.svg" },
        { name: "TailwindCSS", icon: "/icons/tailwindcss-color.svg" },
        { name: "Node.js", icon: "/icons/nodedotjs-color.svg" },
        { name: "MongoDB", icon: "/icons/mongodb-color.svg" },
        { name: "GitHub", icon: "/icons/github-color.svg" },
        { name: "Wordpress", icon: "/icons/wp.svg" },
      ],
    },
    {
      category: "Design & Media",
      items: [
        { name: "Figma", icon: "/icons/figma-color.svg" },
        { name: "Framer", icon: "/icons/framer-color.svg" },
        { name: "DaVinci Resolve", icon: "/icons/davinci-resolve.svg" },
      ],
    },
  ];

  useEffect(() => {
    setPageChanged(false);
  }, []);

  return (
    <div
      className={`overflow-x-hidden overflow-y-auto relative sm:sticky top-0 flex flex-col justify-center gap-8 px-12 max-lg:px-10 max-md:px-8 max-sm:px-4 py-20 max-sm:py-16`}
    >
      <div className="bg-sky-200 h-full w-full absolute top-0 left-0 z-0"></div>
      <div className="w-full flex flex-col justify-center relative z-10">
        <h2 className="text-2xl font-semibold mb-2 h-full border-b-2 border-dashed border-b-sky-900 pb-4">
          About
        </h2>

        <p className="text-base text-gray-700 leading-relaxed pt-4 max-w-5xl">
          Hi, I&apos;m Saif! I love all things creative. I&apos;ve been
          designing since my early teens and picked up programming to add life
          to my work. Now, My focus is on building Websites & Apps that solve real problems.
        </p>
        <p className="text-base text-gray-700 leading-relaxed mb-6 pt-4 max-w-6xl">
          I&apos;ve worked with small to medium businesses, always ensuring
          client satisfaction. When I&apos;m not building, I&apos;m learning
          some new stuff!
        </p>

        <div className="space-y-8">
          {tools.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {section.category}
              </h3>
              <div className="grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4 gap-y-5 saturate-[70%]">
                {section.items.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center gap-3 transition-all duration-300 group bg-foreground p-1.5 px-2 rounded-sm"
                  >
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
                    <span className="font-medium tracking-wide text-sky-50">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Uncomment if you want to add the resume link back
        <Link
          href={"/"}
          className="flex gap-2 items-center text-base font-medium mt-8 hover:text-gray-600 transition-colors w-fit"
        >
          <ArrowDownToDot size={18} />
          resume
        </Link>
        */}
      </div>
    </div>
  );
};

export default About;
