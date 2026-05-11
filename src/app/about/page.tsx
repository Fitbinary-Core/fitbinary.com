"use client";

import { motion } from "framer-motion";
import { Cloud, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/landing/Footer";

const values = [
  {
    number: "01",
    title: "Industry-first thinking",
    description:
      "Every product decision starts with a question: does this reflect how fitness businesses actually work? We don't adapt generic software — we build from the ground up.",
  },
  {
    number: "02",
    title: "Cohesion over fragmentation",
    description:
      "Products in the Fitbinary suite are designed to share data, not duplicate it. One member profile, one inventory record — consistent across every product you use.",
  },
  {
    number: "03",
    title: "Built to scale, not to lock in",
    description:
      "Whether you start with one location or fifty, the architecture stays the same. No migrations, no upgrade tiers, no surprise limitations when you grow.",
  },
  {
    number: "04",
    title: "Reliability as a foundation",
    description:
      "Fitness businesses operate on tight schedules. We treat uptime and performance as non-negotiables, not premium features.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                About Fitbinary
              </span>
            </div>

            <h1 className="text-[2.75rem] sm:text-[4.5rem] font-black tracking-tight leading-[1.05] text-white mb-6">
              The software platform
              <br />
              <span className="text-zinc-400">for the fitness industry.</span>
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl font-medium">
              Fitbinary builds focused, purpose-built products for fitness
              businesses — from gyms and studios to personal trainers and sports
              academies. Our suite is designed to work independently or
              together, covering every operational need in the fitness industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                  Our mission
                </span>
              </div>
              <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-6">
                Software that actually
                <br />
                fits the industry.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Most business software forces fitness operators into workflows
                built for retail, hospitality, or generic SaaS use cases.
                Fitbinary is different — we build products that reflect how
                fitness businesses actually run, from the front desk to the back
                office.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-5 pt-2"
            >
              {[
                "Purpose-built for fitness, not adapted from generic tools",
                "Products that share a unified data layer by design",
                "Multi-tenant and multi-branch from day one",
                "Reliable infrastructure for business-critical operations",
                "A growing suite that covers the entire industry",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" />
                  <p className="text-[15px] text-zinc-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 px-6 bg-zinc-50 border-t border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-white border border-zinc-200 mb-5">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                The Suite
              </span>
            </div>
            <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-5">
              Products built for
              <br />
              <span className="text-zinc-400">how fitness operates.</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Each product solves a specific operational problem. Together, they
              form a coherent platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {[
              {
                icon: Cloud,
                name: "FitCloud",
                category: "Gym Management",
                tagBg: "bg-blue-50 border-blue-100",
                tagText: "text-blue-600",
                ctaColor: "text-blue-600 hover:text-blue-700",
                href: "/fitcloud",
                desc: "Complete operations management for gyms, studios, and fitness centers. Memberships, billing, attendance, and multi-branch reporting in one platform.",
                features: [
                  "Member management & automated billing",
                  "Multi-location dashboard",
                  "Attendance & check-ins",
                  "Staff roles & permissions",
                ],
              },
              {
                icon: Package,
                name: "FitStock",
                category: "Inventory Control",
                tagBg: "bg-orange-50 border-orange-100",
                tagText: "text-orange-600",
                ctaColor: "text-orange-600 hover:text-orange-700",
                href: "/fitstock",
                desc: "Real-time stock tracking, purchase orders, and low-stock alerts across all your locations. Built for fitness retail, not generic warehouses.",
                features: [
                  "Real-time stock per branch",
                  "Purchase orders & suppliers",
                  "Inter-branch transfers",
                  "Low-stock alerts & analytics",
                ],
              },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl border border-zinc-200 p-8 hover:border-zinc-300 hover:shadow-sm transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${product.tagBg} border text-[11px] font-bold ${product.tagText} uppercase tracking-wider mb-5`}
                >
                  <product.icon className="w-3 h-3" />
                  {product.category}
                </div>
                <h3 className="text-[2rem] font-black text-zinc-900 tracking-tight leading-none mb-3">
                  {product.name}
                </h3>
                <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
                  {product.desc}
                </p>
                <ul className="space-y-2.5 mb-7">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-[13px] text-zinc-600"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${product.tagText}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className={`inline-flex items-center gap-2 text-[14px] font-bold ${product.ctaColor} group transition-colors`}
                >
                  Explore {product.name}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                  How we build
                </span>
              </div>
              <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.05] mb-6">
                Principles that
                <br />
                <span className="text-zinc-500">guide every decision.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                These aren't marketing values — they're constraints we apply
                when deciding what to build, how to build it, and what to leave
                out.
              </p>
            </motion.div>

            <div className="flex flex-col divide-y divide-zinc-800">
              {values.map((item, i) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[13px] font-black text-zinc-600 tabular-nums shrink-0 mt-1">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-bold text-white mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-[15px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-tight text-zinc-900 leading-none mb-6">
            Ready to get started?
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10">
            Explore the Fitbinary suite or talk to our team to find the right
            products for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="px-8 py-4 rounded-full bg-zinc-900 text-white font-bold text-[15px] hover:bg-zinc-800 active:scale-95 transition-all flex items-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-zinc-200 text-zinc-600 font-bold text-[15px] hover:border-zinc-400 hover:text-zinc-900 active:scale-95 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
