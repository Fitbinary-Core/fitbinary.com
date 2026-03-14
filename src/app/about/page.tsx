"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Package,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/landing/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-liner-to-b from-white/40 via-white/20 to-white/60 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-6 font-bold shadow-sm">
              <span className="flex w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[13px] tracking-tight uppercase">
                Fitbinary Platform
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-[1.1]">
              Empowering operations through{" "}
              <span className="text-blue-600">unified software.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Fitbinary is the core technology suite behind two powerful
              platforms: <strong>FitCloud</strong> for gym management and{" "}
              <strong>FitStock</strong> for inventory control. Built on modern
              architecture to scale with your business.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-liner-to-b from-transparent to-white z-10 pointer-events-none" />
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white relative z-20 -top-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
              Our mission.
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              To build reliable, scalable software that empowers fitness
              businesses to focus on what matters most—building their
              communities.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Target,
                title: "Purpose-Built",
                description:
                  "Software designed specifically for gyms, fitness studios, and retail operations.",
                color: "bg-blue-50 text-blue-600 shadow-blue-500/10",
              },
              {
                icon: Zap,
                title: "Built to Scale",
                description:
                  "From single locations to multi-branch franchises, our platform grows with you.",
                color: "bg-red-50 text-red-600 shadow-red-500/10",
              },
              {
                icon: Shield,
                title: "Reliable Infrastructure",
                description:
                  "Enterprise-grade security and uptime for business-critical operations.",
                color: "bg-gray-100 text-gray-900 shadow-gray-500/10",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg ${feature.color}`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Two Softwares */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* FitCloud */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="order-2 lg:order-1 bg-white rounded-[3rem] p-10 lg:p-16 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] border border-blue-50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity blur-2xl">
                <Cloud className="w-64 h-64 text-blue-600" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/30">
                  <Cloud className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-4">FitCloud</h3>
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  The complete operating system for modern gyms. Manage
                  memberships, process billing, and oversee multiple branches
                  from a single unified dashboard.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Multi-branch member management",
                    "Automated recurring billing",
                    "Access control integration",
                    "Real-time analytics and reporting",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/fitcloud"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Explore FitCloud <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="order-1 lg:order-2 lg:pl-10"
            >
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                Streamline your <br />
                <span className="text-blue-600">gym experience.</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                We built FitCloud to remove the friction from daily operations.
                Whether you run a local boutique studio or a nationwide
                franchise, our platform handles the heavy lifting so you can
                focus on building your community.
              </p>
            </motion.div>
          </div>

          {/* FitStock */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="lg:pr-10"
            >
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6">
                Take control of <br />
                <span className="text-red-600">your inventory.</span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                Inventory shouldn't be a guessing game. FitStock gives you
                absolute clarity on what you have, what you need, and where it
                needs to go. Perfect for multi-location businesses looking to
                optimize stock levels.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-[0_20px_60px_-15px_rgba(220,38,38,0.1)] border border-red-50 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity blur-2xl">
                <Package className="w-64 h-64 text-red-600" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-500/30">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-4">FitStock</h3>
                <p className="text-lg text-gray-600 mb-8 font-medium">
                  Intelligent inventory management designed for accuracy and
                  speed. Track products, transfer stock between locations, and
                  never run out of critical supplies.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Cross-location stock transfers",
                    "Low inventory alerts",
                    "Supplier and vendor management",
                    "Usage-based restocking insights",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-700 font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/fitstock"
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
                >
                  Explore FitStock <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-8">
            Ready to modernize your operations?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium">
            Join hundreds of gyms and fitness businesses using Fitbinary to
            scale their operations seamlessly.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl shadow-gray-900/20 active:scale-95 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
