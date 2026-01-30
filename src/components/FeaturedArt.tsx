"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const artworks = [
  "/images/Ruby Zayne no wm.webp",
  "/images/sera.webp"
];

const labelImage = "/assets/feat_art_namecard.png";
const arrowLeft = "/assets/arrow-left.png"; 
const arrowRight = "/assets/arrow-right.png"; 

export default function FeaturedArtworks() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % artworks.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + artworks.length) % artworks.length);

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % artworks.length);
    }, 5000); // 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[350px] bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.img
            key={artworks[index]}
            src={artworks[index]}
            alt="Artwork"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

        {/* Label Overlay */}
        <motion.img
          src={labelImage}
          alt="Featured Artworks Label"
          className="absolute bottom-1 w-1/2 h-auto mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

      {/* Controls (Arrows + Lines + Button) */}
      <div className="flex items-center justify-between mt-2">
        {/* Left Side: Arrows + Line Indicators */}
        <div className="flex items-center gap-3">
          {/* Left Arrow */}
          <button onClick={prevSlide}>
            <img
              src={arrowLeft}
              alt="Previous"
              className="w-6 h-6 opacity-80 hover:scale-110 transition cursor-pointer"
            />
          </button>

          {/* Line Indicators */}
          <div className="flex gap-1">
            {artworks.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] w-6 rounded-full transition-all ${
                  i === index ? "bg-red-900" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={nextSlide}>
            <img
              src={arrowRight}
              alt="Next"
              className="w-6 h-6 opacity-80 hover:scale-110 transition cursor-pointer"
            />
          </button>
        </div>

        {/* Right Side: More Art Button */}
        <motion.button
          className="cursor-pointer px-15 py-1 relative bg-[#652526]/70 bg-linear-29 rounded-bl-[30px] shadow-[11px_10px_5.5px_0px_rgba(0,0,0,0.25)] outline-1 outline-amber-600 overflow-hidden hover:scale-105 transition
          font-cormorant text-white"
          whileHover={{ y: -2 }}
        >
          More Art
        </motion.button>
      </div>
    </div>
  );
}