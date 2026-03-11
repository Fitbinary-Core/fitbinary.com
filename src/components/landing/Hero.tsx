import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidEther from "@/components/ui/LiquidEther";
import { AccountsDemo } from "./demos/AccountsDemo";
import { FitCloudDemo } from "./demos/FitCloudDemo";
import { FitStockDemo } from "./demos/FitStockDemo";

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
  demo: React.ElementType;
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
      text: "Explore FitCloud",
      href: "/fitcloud",
    },
    secondaryCTA: {
      text: "Get Started",
      href: "/get-started",
    },
    theme: {
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-100",
      badgeText: "text-blue-600",
      highlightText: "text-blue-600",
      buttonBg: "bg-blue-600",
      buttonHoverBg: "bg-blue-700",
    },
    demo: FitCloudDemo,
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
      text: "Explore FitStock",
      href: "/fitstock",
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
    demo: FitStockDemo,
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
    demo: AccountsDemo,
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
    demo: FitCloudDemo,
  },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-70">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={25}
          cursorSize={120}
          isViscous={false}
          viscous={10}
          iterationsViscous={0}
          iterationsPoisson={8}
          resolution={0.4}
          BFECC={false}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.8}
          autoIntensity={1.5}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 z-0 pointer-events-none" />

      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-white z-10 pointer-events-none" />

      <section className="relative w-full overflow-hidden flex flex-col items-center z-10">
        <div className="w-full max-w-5xl mx-auto px-6 pt-28 flex flex-col items-center text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${currentSlide}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${slide.theme.badgeBg} border ${slide.theme.badgeBorder} ${slide.theme.badgeText} mb-6`}
              >
                <span
                  className={`flex w-2.5 h-2.5 rounded-full ${slide.theme.badgeText.replace("text-", "bg-")} animate-pulse`}
                />
                <span className="text-[13px] font-bold tracking-tight uppercase">
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
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black tracking-tight mb-6 leading-[1.1] text-slate-900"
              >
                {slide.headline.before}{" "}
                <span className={slide.theme.highlightText}>
                  {slide.headline.highlight}
                </span>{" "}
                <br className="hidden sm:block" />
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
                className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium"
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
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
              >
                <Link
                  href={slide.primaryCTA.href}
                  className={`group relative px-8 py-4 w-full sm:w-auto sm:px-10 sm:py-4 rounded-full overflow-hidden ${slide.theme.buttonBg} text-white hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-${slide.theme.badgeText.replace("text-", "").replace("-600", "")}-500/20`}
                >
                  <div
                    className={`absolute inset-0 ${slide.theme.buttonHoverBg} -translate-x-full transition-transform duration-300 group-hover:translate-x-0`}
                  />
                  <span className="relative z-10 font-bold text-base sm:text-lg flex items-center justify-center gap-2">
                    {slide.primaryCTA.text}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href={slide.secondaryCTA.href}
                  className="text-base sm:text-lg w-full sm:w-auto font-bold text-slate-700 hover:text-slate-900 border-2 border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 px-8 py-4 sm:px-8 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 group shadow-sm"
                >
                  {slide.secondaryCTA.text}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center gap-3 mt-12 sm:mt-16 relative z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? `w-10 ${slide.theme.highlightText.replace("text-", "bg-")}`
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
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
