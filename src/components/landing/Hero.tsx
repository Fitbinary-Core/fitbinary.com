"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  BarChart,
  Users,
  Package,
  Code,
} from "lucide-react";
import { HeroBackground } from "@/components/ui/HeroBackground";

interface HeroSlide {
  badge: string;
  headline: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  theme: {
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    highlightText: string;
    buttonBg: string;
    buttonHoverBg: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    badge: "Platform v2.0",
    headline: {
      before: "Modern Software for",
      highlight: "Fitness",
      after: "Operations.",
    },
    description:
      "Run memberships, billing, and daily gym operations on a unified platform built for reliability and long-term scale.",
    primaryCTA: {
      text: "Launch Platform",
      href: "/get-started",
    },
    secondaryCTA: {
      text: "Request Demo",
      href: "/demo",
    },
    theme: {
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-100",
      badgeText: "text-blue-600",
      highlightText: "text-blue-600",
      buttonBg: "bg-blue-600",
      buttonHoverBg: "bg-blue-700",
    },
  },
  {
    badge: "Inventory Module",
    headline: {
      before: "Unified",
      highlight: "Inventory",
      after: "Control.",
    },
    description:
      "Track stock, monitor usage, and manage inventory across locations with clear visibility and consistent data.",
    primaryCTA: {
      text: "Explore Inventory",
      href: "/features/inventory",
    },
    secondaryCTA: {
      text: "See Demo",
      href: "/demo",
    },
    theme: {
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-100",
      badgeText: "text-red-600",
      highlightText: "text-red-600",
      buttonBg: "bg-black",
      buttonHoverBg: "bg-red-600",
    },
  },
  {
    badge: "Built for Growing Teams",
    headline: {
      before: "The",
      highlight: "Fitbinary",
      after: "Platform.",
    },
    description:
      "A centralized system for gym management, member records, billing, and operational insights — designed to scale with your business.",
    primaryCTA: {
      text: "Get Started",
      href: "/get-started",
    },
    secondaryCTA: {
      text: "View Pricing",
      href: "/pricing",
    },
    theme: {
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-100",
      badgeText: "text-red-600",
      highlightText: "text-red-600",
      buttonBg: "bg-black",
      buttonHoverBg: "bg-red-600",
    },
  },
  {
    badge: "Developer-Focused",
    headline: {
      before: "Built with",
      highlight: "APIs",
      after: "at the Core.",
    },
    description:
      "Structured APIs and webhooks that support integrations with websites, mobile apps, and internal systems.",
    primaryCTA: {
      text: "API Docs",
      href: "/developers",
    },
    secondaryCTA: {
      text: "Start Building",
      href: "/get-started",
    },
    theme: {
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-100",
      badgeText: "text-red-600",
      highlightText: "text-red-600",
      buttonBg: "bg-black",
      buttonHoverBg: "bg-red-600",
    },
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    const swipeThreshold = 50;

    if (info.offset.x > swipeThreshold) {
      setCurrentSlide(
        (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
      );
    } else if (info.offset.x < -swipeThreshold) {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative pt-24 pb-24 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center">
      <HeroBackground />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${slide.theme.badgeBg} border ${slide.theme.badgeBorder} ${slide.theme.badgeText} mb-8`}
            >
              <span
                className={`flex w-2 h-2 rounded-full ${slide.theme.badgeText.replace("text-", "bg-")} animate-pulse`}
              />
              <span className="text-[12px] font-bold tracking-tight uppercase">
                {slide.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h1
              key={`headline-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]"
            >
              {slide.headline.before}{" "}
              <span className={slide.theme.highlightText}>
                {slide.headline.highlight}
              </span>{" "}
              <br />
              {slide.headline.after}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg font-medium"
            >
              {slide.description}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                href={slide.primaryCTA.href}
                className={`group relative px-10 py-5 rounded-full overflow-hidden ${slide.theme.buttonBg} text-white hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-black/10`}
              >
                <div
                  className={`absolute inset-0 ${slide.theme.buttonHoverBg} -translate-x-100 transition-transform duration-300 group-hover:translate-x-0`}
                />
                <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                  {slide.primaryCTA.text}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href={slide.secondaryCTA.href}
                className="text-lg font-bold text-gray-900 border-2 border-transparent hover:border-gray-900 px-8 py-5 rounded-full transition-all flex items-center gap-2 group"
              >
                {slide.secondaryCTA.text}
                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? `w-8 ${slide.theme.highlightText.replace("text-", "bg-")}`
                    : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* System Preview Visual */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-white rounded-4xl border border-gray-200 shadow-2xl p-4 overflow-hidden">
            <div className="bg-gray-50 rounded-2xl w-full aspect-[1.1] border border-gray-100 flex items-center justify-center relative overflow-hidden">
              {/* Decorative Dashboard Elements */}
              <div className="absolute top-8 left-8 right-8 h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="w-1/2 h-4 bg-gray-100 rounded-full mb-4" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-50" />
                  <div className="w-8 h-8 rounded-lg bg-blue-50" />
                  <div className="w-8 h-8 rounded-lg bg-gray-100" />
                </div>
              </div>
              <div className="absolute bottom-8 left-8 w-40 h-48 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="w-full h-24 bg-red-600/10 rounded-lg mb-4 flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-red-600" />
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
              </div>
              <div className="absolute top-48 right-8 w-48 h-56 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                </div>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-full h-2 bg-gray-50 rounded-full"
                    />
                  ))}
                </div>
              </div>
              {/* Floating Terminal-like badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg px-4 py-2 flex items-center gap-2 shadow-2xl">
                <Terminal className="w-4 h-4 text-red-500" />
                <span className="text-white text-[10px] font-mono">
                  fitbinary init success
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
