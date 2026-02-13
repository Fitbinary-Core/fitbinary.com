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

export default function FitStockPage() {
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
            <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
              FitStock Inventory
            </div>
            <h1 className="text-5xl lg:text-7xl text-gray-900 font-black tracking-tight mb-8">
              Inventory management <br />
              <span className="text-red-600">for retail operations.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              Track products, monitor usage trends, and manage restocking across
              locations without manual spreadsheets or guesswork. Built for
              multi-branch inventory control.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://fitstock.fitbinary.com"
                className="group relative px-10 py-5 rounded-full overflow-hidden bg-red-600 text-white hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-red-600/20"
              >
                <div className="absolute inset-0 bg-red-700 -translate-x-100 transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                  Launch FitStock
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/get-started"
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-red-600 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-red-600 font-black tracking-tight mb-6">
              Complete inventory visibility.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
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
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Database,
                title: "Branch-Based Tracking",
                description:
                  "Track inventory levels separately for each branch with real-time synchronization.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Truck,
                title: "Stock Receiving",
                description:
                  "Record incoming stock from suppliers with batch tracking and expiration dates.",
                color: "bg-gray-100 text-gray-900",
              },
              {
                icon: ArrowRight,
                title: "Stock Transfers",
                description:
                  "Transfer inventory between branches with full audit trails and approval workflows.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: AlertCircle,
                title: "Low-Stock Monitoring",
                description:
                  "Automated alerts when inventory falls below threshold levels to prevent stockouts.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: BarChart,
                title: "Inventory Analytics",
                description:
                  "Detailed reports on stock movement, turnover rates, and product performance.",
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

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 bg-red-50/50 rounded-[40px] aspect-[1.2] border border-red-100 relative overflow-hidden p-12">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-red-200/50 p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-6 bg-gray-100 rounded-full" />
                    <div className="w-12 h-12 bg-red-600 rounded-full" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-24 bg-gray-50 rounded-xl" />
                    ))}
                  </div>
                  <div className="w-full h-32 bg-gray-50 rounded-xl" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl text-red-600 font-black tracking-tight mb-8">
                Built for multi-branch businesses.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
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
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
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
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-red-600 rounded-[3rem] py-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 relative z-10 leading-tight">
              Ready to take control of your inventory?
            </h2>
            <Link
              href="https://fitstock.fitbinary.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl relative z-10"
            >
              Launch FitStock
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

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
