import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "“This was a great experience working with true talent that can read between the lines and be creative as well as listen to incorporate required details.”",
    author: "Tami Ross",
    logo: "/ohghad.png",
    cover: "/projects/ohghad.jpeg",
  },
  {
    text: "“Completed the work within the agreed upon time, showing professionalism and reliability in meeting deadlines. He was receptive to feedback and collaborated effectively to refine the designs according to my preferences.”",
    author: "Igal S.",
    logo: "/idan.png",
    cover: "/idan-cover.jpeg",
  },
  {
    text: "“It looks amazing. reminds me the quality of goodreads...”",
    author: "Violet Clough",
    logo: "/flower-lotus.png",
    cover: "/vc.png",
  },
];

export const TrustIndicators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex items-center max-sm:items-start justify-center gap-2 w-full sm:w-96 sm:rounded-full bg-sky-600/5 max-sm:bg-sky-600/20 shadow-3xl border-foreground/5 border-y-2 sm:border-2 px-16 max-lg:px-14 max-md:px-12 max-sm:px-5 py-4 sm:p-3 sm:px-8 overflow-hidden">
      {/* <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div> */}
      {/* <Image
        src={testimonials[currentIndex]?.cover}
        height={100}
        width={100}
        className="h-full w-full absolute top-0 left-0 object-cover opacity-5 -z-10 scale-110 blur-[1px]"
      /> */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-sm font-medium flex gap-2 max-sm:items-start items-center w-full max-sm:flex-col flex-wrap relative z-0"
      >
        <span className="text-wrap line-clamp-2">
          {testimonials[currentIndex]?.text}
        </span>

        <span className="text-sm text-white-100/60 flex gap-2 items-center justify-between w-full">
          <span className="flex items-center gap-2">
            {testimonials[currentIndex]?.author === "Tami Ross" && (
              <Image
                src={testimonials[currentIndex]?.logo}
                height={100}
                width={100}
                alt=""
                className="h-5 w-5 object-contain rounded-ful grayscalel"
              />
            )}
            {testimonials[currentIndex]?.author === "Igal S." && (
              <Image
                src={testimonials[currentIndex]?.logo}
                height={100}
                width={100}
                alt=""
                className="h-5 w-5 object-cover rounded-full grayscale"
              />
            )}
            {testimonials[currentIndex]?.author === "Violet Clough" && (
              <div className="bg-violet-600 p-[2px] rounded-full grayscale">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#efefef"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-flower-lotus"
                >
                  <path d="M12 20c0-5.5-4.5-10-10-10 0 5.5 4.5 10 10 10" />
                  <path d="M9.7 8.3c-1.8-2-3.8-3.1-3.8-3.1s-.8 2.5-.5 5.4" />
                  <path d="M15 12.9V12c0-4.4-3-8-3-8s-3 3.6-3 8v.9" />
                  <path d="M18.6 10.6c.3-2.9-.5-5.4-.5-5.4s-2 1-3.8 3.1" />
                  <path d="M12 20c5.5 0 10-4.5 10-10-5.5 0-10 4.5-10 10" />
                </svg>{" "}
              </div>
            )}
            {testimonials[currentIndex]?.author}
          </span>
          <span>
            <Quote className="size-5 text-sky-600" />
          </span>
        </span>
      </motion.div>
    </div>
  );
};
