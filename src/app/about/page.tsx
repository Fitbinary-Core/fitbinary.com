"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Shield } from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 mb-8">
              Modern software for <br />
              <span className="text-blue-600">fitness businesses.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              Fitbinary is a multi-product business suite designed to power fitness centers and retail management for growing and large scale businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
              Our mission.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              To build reliable, scalable software that empowers fitness
              businesses to focus on what matters most—their members.
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
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Zap,
                title: "Built to Scale",
                description:
                  "From single locations to multi-branch franchises, our platform grows with you.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Shield,
                title: "Reliable Infrastructure",
                description:
                  "Enterprise-grade security and uptime for business-critical operations.",
                color: "bg-gray-100 text-gray-900",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl text-gray-800 font-black tracking-tight mb-16 text-center">
            Our products.
          </h2>
          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 mb-4 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                  FitCloud
                </div>
                <h3 className="text-3xl text-blue-600 font-black mb-4">
                  Gym Management Software
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  Manage memberships, billing, trainers, and multi-branch
                  operations from one centralized platform.
                </p>
                <Link
                  href="/fitcloud"
                  className="inline-flex items-center gap-2 text-blue-600 font-black hover:underline underline-offset-8"
                >
                  Learn more <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-blue-50 rounded-3xl p-12 aspect-[1.3]" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-red-50 rounded-3xl p-12 aspect-[1.3]" />
              <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 mb-4 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
                  FitStock
                </div>
                <h3 className="text-3xl text-red-600 font-black mb-4">
                  Inventory Management
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                  Track products, manage stock transfers, and monitor inventory
                  across multiple locations.
                </p>
                <Link
                  href="/fitstock"
                  className="inline-flex items-center gap-2 text-red-600 font-black hover:underline underline-offset-8"
                >
                  Learn more <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-8">
            Ready to modernize your operations?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            Join hundreds of gyms and fitness businesses using Fitbinary to
            scale their operations.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
