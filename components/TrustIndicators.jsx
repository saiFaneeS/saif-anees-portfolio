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
    <div className="flex items-center justify-center max-sm:flex-col gap-2 text-white-100/90 lg:bg-white lg:shadow lg:py-1 lg:px-4 rounded-full">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="text-base max-md:text-sm font-medium max-sm:text-center flex gap-2 items-center max-sm:justify-center flex-wrap"
      >
        <span className="sm:mr-2">{testimonials[currentIndex]?.text}</span>
        <span className="text-sm text-white-100/60  flex gap-2 items-center">
          —
          <Image
            src={testimonials[currentIndex]?.logo}
            height={100}
            width={100}
            className="h-6 w-6 object-cover rounded-full"
          />
          {testimonials[currentIndex]?.author}
        </span>
      </motion.div>
    </div>
  );
};
