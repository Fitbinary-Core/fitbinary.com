"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FitCloudDemo } from "./demos/FitCloudDemo";
import { FitStockDemo } from "./demos/FitStockDemo";
import { TopographyBackground } from "./TopographyBackground";

const tabs = [
  {
    id: "fitcloud",
    label: "FitCloud",
    sublabel: "Gym Management",
    badge: "FitCloud Platform",
    badgeColor: "text-blue-400",
    badgeBg: "bg-blue-900/10",
    badgeBorder: "border-blue-500/20",
    activeColor: "text-blue-400",
    activeBorder: "bg-blue-500",
    headline: "Operations management",
    headlineHighlight: "for growing gyms.",
    highlightColor: "text-blue-500",
    description:
      "A centralized platform to manage memberships, billing, and daily operations across one or multiple locations. Built to stay reliable as your business grows.",
    features: [
      "Multi-location member management",
      "Automated billing & subscriptions",
      "Attendance tracking & check-ins",
      "Staff roles & permissions",
    ],
    ctaLabel: "Learn more about FitCloud",
    ctaHref: "/fitcloud",
    ctaColor: "text-blue-400",
    demo: FitCloudDemo,
  },
  {
    id: "fitstock",
    label: "FitStock",
    sublabel: "Inventory Control",
    badge: "FitStock Inventory",
    badgeColor: "text-red-400",
    badgeBg: "bg-red-900/10",
    badgeBorder: "border-red-500/20",
    activeColor: "text-red-400",
    activeBorder: "bg-red-500",
    headline: "Inventory control",
    headlineHighlight: "built for your business.",
    highlightColor: "text-red-500",
    description:
      "Track products, monitor usage trends, and manage restocking across locations without manual spreadsheets or guesswork.",
    features: [
      "Real-time stock tracking",
      "Purchase orders & suppliers",
      "Inter-branch stock transfers",
      "Low-stock alerts & analytics",
    ],
    ctaLabel: "Learn more about FitStock",
    ctaHref: "/fitstock",
    ctaColor: "text-red-400",
    demo: FitStockDemo,
  },
];

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState("fitcloud");
  const current = tabs.find((t) => t.id === activeTab)!;
  const DemoComponent = current.demo;

  return (
    <section className="relative py-32 bg-neutral-950 overflow-hidden">
      <TopographyBackground
        lineCount={15}
        lineColor="rgba(255, 255, 255, 0.05)"
        speed={0.5}
      />

      <div className="relative z-10 w-full md:px-0 px-10 md:max-w-6xl mx-auto">
        {/* Tab bar */}
        <div className="flex items-center justify-center gap-0 border-b border-white/5 mb-20">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-6 text-[15px] font-bold transition-all duration-300 ${
                  isActive
                    ? tab.activeColor
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`ml-2 text-[11px] font-medium hidden sm:inline ${
                    isActive ? "opacity-60" : "opacity-0"
                  } transition-opacity`}
                >
                  — {tab.sublabel}
                </span>

                {/* Active underline */}
                {isActive && (
                  <motion.div
                    layoutId="tab-underline"
                    className={`absolute -bottom-px left-0 right-0 h-[2px] ${tab.activeBorder} shadow-[0_0_20px_rgba(59,130,246,0.5)]`}
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              <div className="flex flex-col justify-center pt-4">
                <div
                  className={`inline-flex items-center w-fit px-4 py-1.5 mb-8 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full border shadow-sm ${current.badgeColor} ${current.badgeBg} ${current.badgeBorder}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full mr-2 ${current.activeBorder} animate-pulse`}
                  />
                  {current.badge}
                </div>

                <h2 className="text-4xl lg:text-[2.75rem] font-black tracking-tight mb-8 leading-[1.1] text-white">
                  {current.headline}{" "}
                  <span className={current.highlightColor}>
                    {current.headlineHighlight}
                  </span>
                </h2>

                <p className="text-[17px] text-neutral-400 leading-relaxed mb-10 font-medium">
                  {current.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4 mb-12">
                  {current.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-4 text-[15px] text-neutral-300 font-medium group"
                    >
                      <CheckCircle2
                        className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${current.badgeColor}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={current.ctaHref}
                  className={`inline-flex items-center gap-2 text-[15px] font-bold group ${current.ctaColor}`}
                >
                  {current.ctaLabel}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="relative w-full group">
                {/* Glow effect */}
                <div
                  className={`absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr ${current.activeBorder.replace("bg-", "from-")}/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <div className="relative w-full h-140 rounded-2xl overflow-hidden bg-neutral-900/50 backdrop-blur-xl border border-white/5 shadow-2xl">
                  <DemoComponent />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
