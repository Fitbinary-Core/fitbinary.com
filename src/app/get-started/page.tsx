"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Package,
  Shield,
  Zap,
} from "lucide-react";
import Footer from "@/components/landing/Footer";

const products = [
  {
    icon: Cloud,
    name: "FitCloud",
    category: "Gym Management",
    desc: "Memberships, billing, attendance, and multi-branch operations — all in one platform.",
    features: [
      "Member management & digital cards",
      "Automated billing & renewals",
      "Multi-branch dashboard",
      "Staff roles & scheduling",
    ],
    color: "blue",
    tagBg: "bg-blue-50 border-blue-100",
    tagText: "text-blue-600",
    btnBg: "bg-blue-600 hover:bg-blue-500",
    href: "https://accounts.fitbinary.com/signup?product=fitcloud",
    label: "Start with FitCloud",
  },
  {
    icon: Package,
    name: "FitStock",
    category: "Inventory Control",
    desc: "Real-time stock tracking, purchase orders, and low-stock alerts across all locations.",
    features: [
      "Real-time stock per branch",
      "Purchase orders & suppliers",
      "Inter-branch transfers",
      "Low-stock alerts & analytics",
    ],
    color: "orange",
    tagBg: "bg-orange-50 border-orange-100",
    tagText: "text-orange-600",
    btnBg: "bg-orange-600 hover:bg-orange-500",
    href: "https://accounts.fitbinary.com/signup?product=fitstock",
    label: "Start with FitStock",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Quick setup",
    desc: "Get your team and operations configured in hours, not weeks.",
  },
  {
    icon: Shield,
    title: "Secure by default",
    desc: "Role-based access, encrypted data, and 99.9% uptime SLA.",
  },
  {
    icon: Cloud,
    title: "Multi-branch ready",
    desc: "Manage one location or fifty from a single platform.",
  },
  {
    icon: Package,
    title: "Products work together",
    desc: "FitCloud and FitStock share a unified data layer.",
  },
];

export default function GetStartedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Get Started
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-[3.5rem] font-black tracking-tight leading-[1.05] text-white mb-5">
              Start with the product
              <br />
              <span className="text-zinc-400">that fits your business.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-xl mx-auto">
              Choose FitCloud, FitStock, or both. You can always add more
              products to your account later.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product selection */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-3xl border border-zinc-200 bg-white p-8 hover:border-zinc-300 hover:shadow-sm transition-all duration-300 flex flex-col"
              >
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${p.tagBg} border text-[11px] font-bold ${p.tagText} uppercase tracking-wider mb-5 self-start`}
                >
                  <p.icon className="w-3 h-3" />
                  {p.category}
                </div>

                <h3 className="text-[2rem] font-black text-zinc-900 tracking-tight leading-none mb-2">
                  {p.name}
                </h3>
                <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
                  {p.desc}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-[14px] text-zinc-600"
                    >
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${p.tagText}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={p.href}
                  className={`w-full text-center py-3.5 rounded-xl ${p.btnBg} text-white font-bold text-[14px] transition-colors active:scale-[0.98] flex items-center justify-center gap-2 group`}
                >
                  {p.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Sign in prompt */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-zinc-500" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-zinc-900">
                  Already have an account?
                </p>
                <p className="text-[13px] text-zinc-500">
                  Sign in to access FitCloud, FitStock, and your organization.
                </p>
              </div>
            </div>
            <Link
              href="https://accounts.fitbinary.com/signin"
              className="shrink-0 px-6 py-2.5 rounded-xl bg-zinc-900 text-white font-bold text-[14px] hover:bg-zinc-800 transition-colors active:scale-95 flex items-center gap-2 group"
            >
              Sign In
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fitbinary */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.08]">
              Why teams choose
              <br />
              <span className="text-zinc-500">Fitbinary.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-zinc-400" />
                </div>
                <h3 className="text-[14px] font-bold text-white mb-2">
                  {title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Need help */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-[2rem] font-black tracking-tight text-zinc-900 mb-4">
            Not sure which product to start with?
          </h2>
          <p className="text-zinc-500 text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
            Our team can help you pick the right products for your business and
            get your account set up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-zinc-900 text-white font-bold text-[14px] hover:bg-zinc-800 active:scale-95 transition-all flex items-center gap-2 group"
            >
              Talk to Sales
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="mailto:support@fitbinary.com"
              className="px-7 py-3.5 rounded-full border border-zinc-200 text-zinc-600 font-bold text-[14px] hover:border-zinc-400 hover:text-zinc-900 active:scale-95 transition-all"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
