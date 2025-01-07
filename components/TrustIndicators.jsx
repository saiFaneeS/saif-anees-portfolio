import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Great experience working with a true and creative talent.",
    author: "Tami Ross, Ohghad CEO",
    logo: "/ohghad.png",
  },
  {
    text: "The work looks amazing. It reminds me of the quality and functionality of Goodreads.",
    author: "Violet Clough",
    logo: "/flower-lotus.png",
  },
  {
    text: "Professional, timely, and delivered outstanding designs.",
    author: "Igal S.",
    logo: "/idan.png",
  },
];

export const TrustIndicators = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center max-sm:items-start justify-center max-sm:flex-col gap-2 text-white-100/90 ">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-sm max-md:text-sm font-medium flex gap-2 items-start flex-wrap max-sm:flex-col"
      >
        <span className="sm:mr-2">
          {"“"}
          {testimonials[currentIndex]?.text} {"”"}
        </span>

        <span className="text-sm text-white-100/60  flex gap-2 items-center">
          —{" "}
          {testimonials[currentIndex]?.author === "Tami Ross, Ohghad CEO" && (
            <Image
              src={testimonials[currentIndex]?.logo}
              height={100}
              width={100}
              className="h-5 w-5 object-contain rounded-full"
            />
          )}
          {testimonials[currentIndex]?.author === "Igal S." && (
            <Image
              src={testimonials[currentIndex]?.logo}
              height={100}
              width={100}
              className="h-5 w-5 object-cover rounded-full"
            />
          )}
          {testimonials[currentIndex]?.author === "Violet Clough" && (
            <div className="bg-violet-600 p-[2px] rounded-full">
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
      </motion.div>
    </div>
  );
};
