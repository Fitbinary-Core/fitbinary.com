"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  Truck,
  BarChart,
  Database,
  AlertCircle,
} from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";
import Footer from "@/components/landing/Footer";

export default function FitStockPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 font-sans text-white selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-liner-to-b from-white/40 via-white/20 to-white/60 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 mb-6 font-bold shadow-sm">
              <span className="flex w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[13px] tracking-tight uppercase">
                FitStock Inventory
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-white leading-[1.1]">
              Inventory management <br />
              <span className="text-red-600">for retail operations.</span>
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Track products, monitor usage trends, and manage restocking across
              locations without manual spreadsheets or guesswork. Built for
              multi-branch inventory control.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://fitstock.fitbinary.com"
                className="group relative px-10 py-5 rounded-full overflow-hidden bg-red-600 text-white hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-red-600/20"
              >
                <div className="absolute inset-0 bg-red-700 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                  Launch FitStock
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/get-started"
                className="px-10 py-5 bg-neutral-950 text-white border border-neutral-800 rounded-full font-bold text-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all active:scale-95 shadow-sm"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-liner-to-b from-transparent to-white z-10 pointer-events-none" />
      </section>

      {/* Core Features */}
      <section className="py-24 px-6 bg-neutral-950 relative z-20 -top-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight mb-6">
              Complete inventory visibility.
            </h2>
            <p className="text-xl text-neutral-400 font-medium">
              From product receiving to stock transfers, FitStock gives you
              real-time control over your inventory operations.
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
                icon: Package,
                title: "Product Management",
                description:
                  "Manage SKUs, barcodes, pricing, and product attributes in one centralized system.",
                color: "bg-red-50 text-red-600 shadow-red-500/10",
              },
              {
                icon: Database,
                title: "Branch-Based Tracking",
                description:
                  "Track inventory levels separately for each branch with real-time synchronization.",
                color: "bg-blue-50 text-blue-600 shadow-blue-500/10",
              },
              {
                icon: Truck,
                title: "Stock Receiving",
                description:
                  "Record incoming stock from suppliers with batch tracking and expiration dates.",
                color: "bg-neutral-900 text-white shadow-gray-500/10",
              },
              {
                icon: ArrowRight,
                title: "Stock Transfers",
                description:
                  "Transfer inventory between branches with full audit trails and approval workflows.",
                color: "bg-orange-50 text-orange-600 shadow-orange-500/10",
              },
              {
                icon: AlertCircle,
                title: "Low-Stock Monitoring",
                description:
                  "Automated alerts when inventory falls below threshold levels to prevent stockouts.",
                color: "bg-amber-50 text-amber-600 shadow-amber-500/10",
              },
              {
                icon: BarChart,
                title: "Inventory Analytics",
                description:
                  "Detailed reports on stock movement, turnover rates, and product performance.",
                color: "bg-neutral-900 text-white shadow-gray-500/10",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-neutral-800 hover:border-neutral-800"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg ${feature.color}`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-neutral-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="order-2 lg:order-1 bg-neutral-950 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(220,38,38,0.1)] border border-red-900/50 relative overflow-hidden p-12 lg:p-16 h-125 flex items-center justify-center"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 blur-2xl pointer-events-none">
                <Package className="w-64 h-64 text-red-600" />
              </div>
              <div className="w-full relative z-10 bg-neutral-900 rounded-3xl shadow-lg border border-neutral-800 p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-6 bg-neutral-800 rounded-full" />
                    <div className="w-12 h-12 bg-red-600 rounded-2xl shadow-lg shadow-red-600/20" />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-28 bg-neutral-950 rounded-2xl shadow-sm border border-neutral-800"
                      />
                    ))}
                  </div>
                  <div className="w-full h-32 bg-neutral-950 rounded-2xl shadow-sm border border-neutral-800" />
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="order-1 lg:order-2 lg:pl-10"
            >
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">
                Built for{" "}
                <span className="text-red-600">multi-branch businesses.</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-10 font-medium">
                Whether you're managing gym supplements, retail products, or
                equipment across multiple locations, FitStock provides the
                control you need.
              </p>
              <div className="space-y-6">
                {[
                  "Gyms with supplement retail",
                  "Multi-branch fitness centers",
                  "Supplement retail stores",
                  "Equipment rental operations",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-white font-bold text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can FitStock track product expiration dates?",
                a: "Yes. FitStock includes batch-level tracking for expiration dates with automated alerts before products expire.",
              },
              {
                q: "Does it support barcode scanning?",
                a: "Yes. FitStock supports standard barcode scanners for quick product receiving and stock audits.",
              },
              {
                q: "Can I manage inventory for multiple locations?",
                a: "Absolutely. FitStock is built for multi-branch operations with separate inventory tracking for each location.",
              },
              {
                q: "How do stock transfers work?",
                a: "You can initiate transfers between branches with approval workflows. Both sending and receiving branches get real-time updates.",
              },
              {
                q: "What reports are available?",
                a: "FitStock provides detailed reports on stock movement, inventory logs, low-stock alerts, and product performance analytics.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-transparent p-8 rounded-3xl hover:bg-neutral-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-800 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {faq.q}
                </h3>
                <p className="text-neutral-400 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-red-600 rounded-[3rem] py-24 px-6 relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(220,38,38,0.4)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-950/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-neutral-900/20 transition-colors" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 relative z-10 leading-tight">
              Ready to take control <br /> of your inventory?
            </h2>
            <Link
              href="https://fitstock.fitbinary.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-neutral-950 text-red-600 rounded-full font-bold text-lg hover:bg-neutral-900 transition-all shadow-2xl relative z-10 active:scale-95 group-hover:gap-3"
            >
              Launch FitStock
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FitStock",
            applicationCategory: "BusinessApplication",
            description:
              "Inventory management software for multi-branch retail operations",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}
