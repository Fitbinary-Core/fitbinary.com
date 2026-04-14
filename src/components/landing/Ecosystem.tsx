"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FitCloudDemo } from "./demos/FitCloudDemo";
import { FitStockDemo } from "./demos/FitStockDemo";

const tabs = [
  {
    id: "fitcloud",
    label: "FitCloud",
    sublabel: "Gym Management",
    badge: "FitCloud Platform",
    badgeColor: "text-blue-600",
    badgeBg: "bg-blue-50",
    badgeBorder: "border-blue-100",
    activeColor: "text-blue-600",
    activeBorder: "bg-blue-600",
    headline: "Operations management",
    headlineHighlight: "for growing gyms.",
    highlightColor: "text-blue-600",
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
    ctaColor: "text-blue-600",
    demo: FitCloudDemo,
  },
  {
    id: "fitstock",
    label: "FitStock",
    sublabel: "Inventory Control",
    badge: "FitStock Inventory",
    badgeColor: "text-red-600",
    badgeBg: "bg-red-50",
    badgeBorder: "border-red-100",
    activeColor: "text-red-600",
    activeBorder: "bg-red-600",
    headline: "Inventory control",
    headlineHighlight: "built for your business.",
    highlightColor: "text-red-600",
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
    ctaColor: "text-red-600",
    demo: FitStockDemo,
  },
];

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState("fitcloud");
  const current = tabs.find((t) => t.id === activeTab)!;
  const DemoComponent = current.demo;

  return (
    <section className="py-20 bg-white">
      <div className="w-full md:px-0 px-10 md:max-w-6xl mx-auto">
        {/* Tab bar */}
        <div className="flex items-center justify-center gap-0 border-b border-gray-200 mb-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? tab.activeColor
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`ml-2 text-[11px] font-medium hidden sm:inline ${
                    isActive ? "opacity-70" : "opacity-0"
                  } transition-opacity`}
                >
                  — {tab.sublabel}
                </span>

                {/* Active underline */}
                {isActive && (
                  <motion.div
                    layoutId="tab-underline"
                    className={`absolute -bottom-px left-0 right-0 h-0.5 ${tab.activeBorder}`}
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start mb-6">
              <div className="flex flex-col justify-center pt-2">
                <div
                  className={`inline-block px-3 py-1 mb-5 text-[11px] font-bold tracking-widest uppercase rounded-full border ${current.badgeColor} ${current.badgeBg} ${current.badgeBorder}`}
                >
                  {current.badge}
                </div>

                <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-5 leading-[1.15] text-gray-950">
                  {current.headline}{" "}
                  <span className={current.highlightColor}>
                    {current.headlineHighlight}
                  </span>
                </h2>

                <p className="text-[15px] text-gray-500 leading-relaxed mb-8 font-normal">
                  {current.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {current.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-[14px] text-gray-700 font-medium"
                    >
                      <CheckCircle2
                        className={`w-4.5 h-4.5 shrink-0 ${current.badgeColor}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={current.ctaHref}
                  className={`inline-flex items-center gap-1.5 text-[14px] font-semibold group ${current.ctaColor}`}
                >
                  {current.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="w-full h-130 rounded-2xl overflow-hidden shadow-[0_32px_80px_-20px_rgba(0,0,0,0.13)] border border-gray-200">
                <DemoComponent />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
