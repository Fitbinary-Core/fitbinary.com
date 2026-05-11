"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Truck,
  BarChart3,
  AlertCircle,
  ArrowLeftRight,
  ScanBarcode,
  ClipboardList,
  Database,
} from "lucide-react";
import Footer from "@/components/landing/Footer";

const features = [
  {
    icon: Database,
    title: "Product & SKU Management",
    desc: "Manage products, SKUs, barcodes, pricing, and attributes in one centralized catalog.",
    size: "large",
  },
  {
    icon: Package,
    title: "Branch-Level Tracking",
    desc: "Separate inventory counts per location with real-time sync across the platform.",
    size: "small",
  },
  {
    icon: Truck,
    title: "Stock Receiving",
    desc: "Record incoming stock from suppliers with batch tracking and expiry date logging.",
    size: "small",
  },
  {
    icon: ArrowLeftRight,
    title: "Inter-Branch Transfers",
    desc: "Move inventory between branches with approval workflows and full audit trails.",
    size: "small",
  },
  {
    icon: AlertCircle,
    title: "Low-Stock Alerts",
    desc: "Automated alerts when any product falls below your defined minimum threshold.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Movement Analytics",
    desc: "Detailed reports on stock movement, turnover rates, and product performance across all branches.",
    size: "large",
  },
  {
    icon: ScanBarcode,
    title: "Barcode Scanning",
    desc: "Scan barcodes for fast stock receiving and inventory audits.",
    size: "small",
  },
  {
    icon: ClipboardList,
    title: "Purchase Orders",
    desc: "Create and track purchase orders to suppliers with delivery status and cost tracking.",
    size: "small",
  },
];

const faqs = [
  {
    q: "Can FitStock track product expiration dates?",
    a: "Yes. FitStock includes batch-level tracking for expiration dates with automated alerts before products expire.",
  },
  {
    q: "Does it support barcode scanning?",
    a: "Yes. FitStock supports standard barcode scanners for quick product receiving and inventory audits.",
  },
  {
    q: "Can I manage inventory for multiple locations?",
    a: "Absolutely. FitStock is built for multi-branch operations with separate real-time inventory tracking per location.",
  },
  {
    q: "How do stock transfers work?",
    a: "You initiate a transfer between branches. Both sending and receiving branches are updated in real-time, with a full audit trail on every movement.",
  },
  {
    q: "Does FitStock work with FitCloud?",
    a: "Yes. Both products share Fitbinary's unified data layer. Member retail purchases in FitCloud automatically deduct stock in FitStock.",
  },
];

export default function FitStockPage() {
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-[12px] font-bold text-orange-400 uppercase tracking-wider">
                FitStock — Inventory Control
              </span>
            </div>

            <h1 className="text-[3.5rem] sm:text-[4.5rem] font-black tracking-tight leading-[1.05] text-white mb-6">
              Inventory that keeps up
              <br />
              <span className="text-orange-400">with your pace.</span>
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl font-medium">
              FitStock is Fitbinary's inventory control product — real-time
              stock tracking, purchase orders, and low-stock alerts across all
              your locations. No spreadsheets, no guesswork.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://fitstock.fitbinary.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-600 text-white font-bold text-[15px] hover:bg-orange-500 transition-colors active:scale-95"
              >
                Open FitStock
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-bold text-[15px] hover:border-zinc-500 hover:text-white transition-colors"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-zinc-800 max-w-lg">
              {[
                { value: "Real-time", label: "Stock sync" },
                { value: "Multi-branch", label: "Ready" },
                { value: "99.9%", label: "Uptime" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[1.6rem] font-black text-white tracking-tight leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                Features
              </span>
            </div>
            <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-4">
              Complete inventory
              <br />
              visibility across every branch.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              From product receiving to cross-branch transfers, FitStock gives
              you real-time control without the complexity of generic warehouse
              software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map(({ icon: Icon, title, desc, size }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group rounded-2xl border border-zinc-200 bg-zinc-50 p-6 hover:border-zinc-300 hover:bg-white transition-all duration-300 ${
                  size === "large" ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-[15px] font-bold text-zinc-900 mb-2">
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

      {/* Who it's for */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                  Built for
                </span>
              </div>
              <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.08] mb-6">
                Fitness retail
                <br />
                <span className="text-zinc-500">at every scale.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                FitStock is designed specifically for fitness retail — not
                adapted from generic warehouse management systems. It
                understands how fitness products move.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-orange-400 hover:text-orange-300 group transition-colors"
              >
                Start for free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                {
                  title: "Gyms with supplement retail",
                  desc: "Track protein, creatine, and accessories alongside member management.",
                },
                {
                  title: "Multi-branch fitness chains",
                  desc: "Centralized catalog with per-branch inventory levels and transfers.",
                },
                {
                  title: "Supplement retail stores",
                  desc: "Full product catalog management with barcode support and supplier tracking.",
                },
                {
                  title: "Yoga & wellness studios",
                  desc: "Manage branded merchandise, equipment, and consumables in one place.",
                },
                {
                  title: "Sports academies",
                  desc: "Equipment tracking, kit management, and supplier ordering from one platform.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[14px] font-bold text-white mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[2.75rem] font-black tracking-tight text-zinc-900 leading-[1.08]">
              Common questions
            </h2>
          </div>
          <div className="divide-y divide-zinc-100">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="py-7"
              >
                <h3 className="text-[16px] font-bold text-zinc-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-tight text-white leading-none mb-6">
            Take control of
            <br />
            your inventory.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No more spreadsheets. No more stockouts. Real-time inventory control
            built specifically for fitness businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://fitstock.fitbinary.com"
              className="px-8 py-4 rounded-full bg-white text-zinc-900 font-bold text-[15px] hover:bg-zinc-100 active:scale-95 transition-all flex items-center gap-2 group"
            >
              Open FitStock
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 font-bold text-[15px] hover:border-zinc-500 hover:text-white active:scale-95 transition-all"
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
