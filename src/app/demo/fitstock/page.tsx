"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Package,
  TrendingDown,
  ArrowRightLeft,
  Bell,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  ShoppingBag,
} from "lucide-react";

const demoSteps = [
  {
    id: 1,
    title: "Product Management",
    description: "Add and organize products with detailed information",
    icon: ShoppingBag,
    color: "red" as const,
    duration: 3000,
    ui: {
      type: "product" as const,
      items: [
        { name: "Protein Powder - Vanilla", sku: "PRO-VAN-001", stock: 45 },
        { name: "Resistance Bands Set", sku: "RES-BND-002", stock: 23 },
        { name: "Yoga Mat Premium", sku: "YOG-MAT-003", stock: 67 },
      ],
    },
  },
  {
    id: 2,
    title: "Stock Receiving",
    description: "Receive new inventory and update stock levels",
    icon: Package,
    color: "blue" as const,
    duration: 3000,
    ui: {
      type: "receiving" as const,
      order: "PO-2026-0214",
      items: "24 units",
      status: "Receiving → Verified → Complete",
    },
  },
  {
    id: 3,
    title: "Stock Transfers",
    description: "Transfer inventory between locations seamlessly",
    icon: ArrowRightLeft,
    color: "purple" as const,
    duration: 3000,
    ui: {
      type: "transfer" as const,
      from: "Main Branch",
      to: "Downtown Location",
      items: "12 units transferred",
      product: "Protein Powder",
    },
  },
  {
    id: 4,
    title: "Low Stock Alerts",
    description: "Get notified when inventory runs low",
    icon: Bell,
    color: "orange" as const,
    duration: 3000,
    ui: {
      type: "alerts" as const,
      warnings: [
        { product: "Resistance Bands", current: 5, minimum: 10 },
        { product: "Water Bottles", current: 8, minimum: 15 },
        { product: "Towels", current: 12, minimum: 20 },
      ],
    },
  },
  {
    id: 5,
    title: "Inventory Analytics",
    description: "Track sales trends and inventory performance",
    icon: BarChart3,
    color: "green" as const,
    duration: 3000,
    ui: {
      type: "analytics" as const,
      metrics: [
        { label: "Total Products", value: "342", trend: "+15" },
        { label: "Stock Value", value: "$23,450", trend: "+8%" },
        { label: "Turnover Rate", value: "4.2x", trend: "+0.3" },
      ],
    },
  },
];

export default function FitStockDemoPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const stepDuration = demoSteps[currentStep].duration;
    const interval = 50;
    const increment = (interval / stepDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((curr) => (curr + 1) % demoSteps.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentStep, isPlaying]);

  const step = demoSteps[currentStep];
  const StepIcon = step.icon;

  const colorClasses = {
    red: {
      bg: "bg-red-50",
      text: "text-red-600",
      border: "border-red-600",
      progressBg: "bg-red-600",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-600",
      progressBg: "bg-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-600",
      progressBg: "bg-purple-600",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-600",
      progressBg: "bg-orange-600",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-600",
      progressBg: "bg-green-600",
    },
  };

  const colors = colorClasses[step.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link
            href="/demo"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Demos</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="px-4 py-1.5 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
              FitStock Demo
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl text-gray-900 font-black tracking-tight mb-6">
            FitStock in <span className="text-red-600">Action</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Watch how FitStock provides complete inventory visibility with
            real-time tracking and intelligent alerts.
          </p>
        </div>

        {/* Demo Player */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-12">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-100">
            <motion.div
              className={`h-full ${colors.progressBg}`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>

          {/* Demo Content */}
          <div className="p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Step Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center shrink-0`}
                  >
                    <StepIcon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-gray-900 mb-2">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* UI Mockup */}
                <div
                  className={`border-2 ${colors.border} rounded-2xl p-8 ${colors.bg}`}
                >
                  {step.ui.type === "product" && (
                    <div className="space-y-3">
                      {step.ui.items?.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="bg-white p-5 rounded-xl border border-gray-200 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-bold text-gray-900 mb-1">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                              SKU: {item.sku}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-black text-gray-900">
                              {item.stock}
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              In Stock
                            </div>
                          </div>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className={`flex items-center gap-2 ${colors.text} font-bold mt-4`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Products Synced Across All Locations
                      </motion.div>
                    </div>
                  )}

                  {step.ui.type === "receiving" && (
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white p-6 rounded-xl border border-gray-200"
                      >
                        <div className="text-sm text-gray-600 font-medium mb-2">
                          Purchase Order
                        </div>
                        <div className="text-3xl font-black text-gray-900 mb-4">
                          {step.ui.order}
                        </div>
                        <div className="text-lg text-gray-600 font-medium">
                          {step.ui.items} received
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-3 font-bold text-gray-900"
                      >
                        <Package className={`w-5 h-5 ${colors.text}`} />
                        {step.ui.status}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className={`flex items-center justify-center gap-2 ${colors.text} font-bold text-lg`}
                      >
                        <CheckCircle2 className="w-6 h-6" />
                        Stock Updated Successfully
                      </motion.div>
                    </div>
                  )}

                  {step.ui.type === "transfer" && (
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-6 rounded-xl border border-gray-200"
                      >
                        <div className="text-lg font-bold text-gray-900 mb-4">
                          {step.ui.product}
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-1">
                            <div className="text-sm text-gray-600 font-medium mb-1">
                              From
                            </div>
                            <div className="font-bold text-gray-900">
                              {step.ui.from}
                            </div>
                          </div>
                          <ArrowRightLeft
                            className={`w-6 h-6 ${colors.text}`}
                          />
                          <div className="flex-1">
                            <div className="text-sm text-gray-600 font-medium mb-1">
                              To
                            </div>
                            <div className="font-bold text-gray-900">
                              {step.ui.to}
                            </div>
                          </div>
                        </div>
                        <div className="text-gray-600 font-medium">
                          {step.ui.items}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className={`flex items-center gap-2 ${colors.text} font-bold`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Transfer Completed
                      </motion.div>
                    </div>
                  )}

                  {step.ui.type === "alerts" && (
                    <div className="space-y-3">
                      {step.ui.warnings?.map((warning, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="bg-white p-5 rounded-xl border-2 border-orange-200 flex items-center gap-4"
                        >
                          <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0" />
                          <div className="flex-1">
                            <div className="font-bold text-gray-900 mb-1">
                              {warning.product}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                              Current: {warning.current} units • Minimum:{" "}
                              {warning.minimum} units
                            </div>
                          </div>
                          <div className="text-orange-600 font-black text-xl">
                            !
                          </div>
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className={`flex items-center gap-2 ${colors.text} font-bold mt-4`}
                      >
                        <Bell className="w-5 h-5" />
                        Automatic Reorder Suggestions Sent
                      </motion.div>
                    </div>
                  )}

                  {step.ui.type === "analytics" && (
                    <div className="grid grid-cols-3 gap-6">
                      {step.ui.metrics?.map((metric, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="bg-white p-6 rounded-xl border border-gray-200 text-center"
                        >
                          <div className="text-sm text-gray-600 font-medium mb-2">
                            {metric.label}
                          </div>
                          <div className="text-3xl font-black text-gray-900 mb-2">
                            {metric.value}
                          </div>
                          <div className="flex items-center justify-center gap-1 text-green-600 font-bold text-sm">
                            <TrendingDown className="w-4 h-4 rotate-180" />
                            {metric.trend}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold text-gray-600">
                Step {currentStep + 1} of {demoSteps.length}
              </div>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all"
              >
                {isPlaying ? "Pause Demo" : "Play Demo"}
              </button>
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {demoSteps.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === currentStep;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentStep(i);
                  setProgress(0);
                }}
                className={`p-4 rounded-2xl border-2 transition-all text-left ${
                  isActive
                    ? "border-red-600 bg-red-50"
                    : "border-gray-100 bg-white hover:border-red-600"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mb-2 ${isActive ? "text-red-600" : "text-gray-400"}`}
                />
                <div
                  className={`text-sm font-bold ${isActive ? "text-gray-900" : "text-gray-600"}`}
                >
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-black text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 font-medium">
            Experience FitStock with your own inventory data.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
