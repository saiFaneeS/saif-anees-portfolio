import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PixelGrid() {
  const cols = 20; // Number of columns
  const rows = 10; // Number of rows
  const totalPixels = cols * rows;

  const [pixels, setPixels] = useState([]);
  const [showBlackScreen, setShowBlackScreen] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const tempPixels = Array.from({ length: totalPixels }, (_, i) => i);

    // Shuffle pixels for a random effect
    tempPixels.sort(() => Math.random() - 0.4);

    // Step 1: Black screen for 0.5s
    setTimeout(() => {
      setShowBlackScreen(false);
    }, 500);

    // Step 2: Start pixel animation after black screen disappears
    setTimeout(() => {
      setPixels(tempPixels);
      setStartAnimation(true);
    }, 500);
  }, []);

  return (
    <>
      {/* Full-screen black overlay */}
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-black z-[60]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.8 }}
        />

      {/* Pixel Grid Animation */}
      <div className="fixed top-0 left-0 w-full h-screen grid grid-cols-20 grid-rows-10 overflow-hidden z-50 pointer-events-none">
        {startAnimation &&
          pixels.map((pixel, index) => {
            const x = pixel % cols;
            const y = Math.floor(pixel / cols);

            return (
              <motion.div
                key={index}
                className="bg-foreground w-[14%] h-[10%] rounded-sm scale-[103%]"
                style={{
                  position: "absolute",
                  top: `${(y / rows) * 100}%`,
                  left: `${(x / cols) * 100}%`,
                }}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  delay: index * 0.004, // Start animation after 0.5s
                  duration: 0.16,
                }}
              />
            );
          })}
      </div>
    </>
  );
}
