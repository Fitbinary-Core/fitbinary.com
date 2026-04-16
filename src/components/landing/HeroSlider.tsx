"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HeroSlide } from "./hero-data";
import { SingularityShaders } from "./SingularityShaders";

export const HeroSlider = ({ slides }: { slides: HeroSlide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-neutral-950">
      <SingularityShaders
        className="absolute inset-0 z-0 opacity-80"
        speed={0.6}
        intensity={1.1}
        size={1.2}
        waveStrength={1.5}
      />

      <section className="relative z-10 w-full flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto px-6 pt-36 pb-24 flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.28 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-950/50 backdrop-blur-sm border border-neutral-800 shadow-sm mb-8"
            >
              <span
                className={`flex w-2 h-2 rounded-full ${slide.theme.badgeText.replace("text-", "bg-")} opacity-80`}
              />
              <span className="text-[13px] font-semibold text-neutral-300 tracking-tight">
                {slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${currentSlide}`}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.38 }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-black tracking-[-0.04em] text-white leading-[1.1] mb-6 max-w-2xl"
            >
              {slide.headline.before}{" "}
              <span className={slide.theme.highlightText}>
                {slide.headline.highlight}
              </span>{" "}
              {slide.headline.after}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.38, delay: 0.08 }}
            style={{ textShadow: "0px 2px 6px rgba(0,0,0,0.6)" }}
            className="text-[15px] sm:text-base text-neutral-50 text-shadow-md shadow-amber-50 mb-10 leading-[1.7] max-w-md font-normal"
          >
            {slide.description}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38, delay: 0.16 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
            >
              <Link
                href={slide.primaryCTA.href}
                className={`px-8 py-3.5 rounded-full ${slide.theme.buttonBg} text-white font-semibold text-[15px] hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg`}
              >
                {slide.primaryCTA.text}
              </Link>

              <Link
                href={slide.secondaryCTA.href}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-neutral-400 hover:text-neutral-200 transition-colors duration-150 group"
              >
                {slide.secondaryCTA.text}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-2 mt-16">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `w-8 ${slide.theme.highlightText.replace("text-", "bg-")}`
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
