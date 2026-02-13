"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Users,
  CreditCard,
  Calendar,
  BarChart3,
  CheckCircle2,
  Clock,
  TrendingUp,
  UserPlus,
} from "lucide-react";

const demoSteps = [
  {
    id: 1,
    title: "Member Onboarding",
    description: "Add new members with complete profile information",
    icon: UserPlus,
    color: "blue" as const,
    duration: 3000,
    ui: {
      type: "form" as const,
      fields: [
        "Name: John Smith",
        "Email: john@example.com",
        "Phone: +1 234 567 8900",
        "Membership: Premium Annual",
      ],
    },
  },
  {
    id: 2,
    title: "Automated Billing",
    description: "Process recurring payments automatically",
    icon: CreditCard,
    color: "green" as const,
    duration: 3000,
    ui: {
      type: "payment" as const,
      amount: "$99.00",
      status: "Processing → Success",
    },
  },
  {
    id: 3,
    title: "Class Scheduling",
    description: "Book classes and assign trainers seamlessly",
    icon: Calendar,
    color: "purple" as const,
    duration: 3000,
    ui: {
      type: "schedule" as const,
      class: "Yoga - 6:00 AM",
      trainer: "Sarah Johnson",
      capacity: "12/15 members",
    },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Track revenue, growth, and member engagement",
    icon: BarChart3,
    color: "orange" as const,
    duration: 3000,
    ui: {
      type: "analytics" as const,
      metrics: [
        { label: "Revenue", value: "$45,230", trend: "+12%" },
        { label: "Active Members", value: "342", trend: "+8%" },
        { label: "Attendance", value: "89%", trend: "+5%" },
      ],
    },
  },
];

export default function FitCloudDemoPage() {
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
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-600",
      progressBg: "bg-blue-600",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-600",
      progressBg: "bg-green-600",
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
  };

  const colors = colorClasses[step.color as keyof typeof colorClasses];

  return (
    <div className="min-h-screen bg-liner-to-br from-blue-50 via-white to-purple-50">
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
            <div className="px-4 py-1.5 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              FitCloud Demo
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl text-gray-900 font-black tracking-tight mb-6">
            FitCloud in <span className="text-blue-600">Action</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            Watch how FitCloud streamlines gym management with automated
            workflows and intelligent features.
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
                  {step.ui.type === "form" && (
                    <div className="space-y-4">
                      {step.ui.fields?.map((field, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="bg-white p-4 rounded-xl border border-gray-200 font-medium text-gray-900"
                        >
                          {field}
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className={`flex items-center gap-2 ${colors.text} font-bold`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Member Added Successfully
                      </motion.div>
                    </div>
                  )}

                  {step.ui.type === "payment" && (
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center"
                      >
                        <div className="text-5xl font-black text-gray-900 mb-2">
                          {step.ui.amount}
                        </div>
                        <div className="text-gray-600 font-medium">
                          Monthly Membership Fee
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-3"
                      >
                        <Clock className={`w-5 h-5 ${colors.text}`} />
                        <span className="font-bold text-gray-900">
                          {step.ui.status}
                        </span>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className={`flex items-center justify-center gap-2 ${colors.text} font-bold text-lg`}
                      >
                        <CheckCircle2 className="w-6 h-6" />
                        Payment Processed
                      </motion.div>
                    </div>
                  )}

                  {step.ui.type === "schedule" && (
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-6 rounded-xl border border-gray-200"
                      >
                        <div className="text-2xl font-black text-gray-900 mb-2">
                          {step.ui.class}
                        </div>
                        <div className="text-gray-600 font-medium">
                          Trainer: {step.ui.trainer}
                        </div>
                        <div className="text-gray-600 font-medium">
                          Capacity: {step.ui.capacity}
                        </div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className={`flex items-center gap-2 ${colors.text} font-bold`}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Class Scheduled Successfully
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
                            <TrendingUp className="w-4 h-4" />
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
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                {isPlaying ? "Pause Demo" : "Play Demo"}
              </button>
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
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
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-100 bg-white hover:border-blue-600"
                }`}
              >
                <Icon
                  className={`w-6 h-6 mb-2 ${isActive ? "text-blue-600" : "text-gray-400"}`}
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
            Experience FitCloud with your own gym data.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
