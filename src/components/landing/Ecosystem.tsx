"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cloud, Package } from "lucide-react";

function FitCloudVisual() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 overflow-hidden rounded-2xl">
      <div
        className="absolute -top-10 -right-10 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.06)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.04)" }}
      />

      <div className="relative z-10">
        <div className="text-[3.5rem] font-black text-white leading-none mb-1">
          2,847
        </div>
        <div className="text-blue-200 text-sm font-medium mb-8">
          Active members across branches
        </div>

        <div className="space-y-2.5">
          {[
            { name: "Aarav Sharma", plan: "Premium", active: true },
            { name: "Priya Thapa", plan: "Standard", active: true },
            { name: "Rajan Karki", plan: "Premium", active: false },
            { name: "Sunita Rai", plan: "Basic", active: true },
          ].map((m) => (
            <div
              key={m.name}
              className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-[11px] font-bold text-white">
                  {m.name[0]}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-white leading-none">
                    {m.name}
                  </div>
                  <div className="text-[11px] text-blue-200 mt-0.5">
                    {m.plan}
                  </div>
                </div>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${m.active ? "bg-green-400" : "bg-red-400"}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] text-blue-200 font-medium">
            Synced just now
          </span>
        </div>
      </div>
    </div>
  );
}

function FitStockVisual() {
  const items = [
    { name: "Whey Protein 1kg", qty: 142, max: 200, pct: 71, low: false },
    { name: "Creatine 250g", qty: 18, max: 150, pct: 12, low: true },
    { name: "Resistance Bands", qty: 89, max: 100, pct: 89, low: false },
    { name: "Pre-Workout 300g", qty: 11, max: 80, pct: 14, low: true },
  ];

  return (
    <div className="relative w-full h-full bg-zinc-900 border border-zinc-800 p-8 overflow-hidden rounded-2xl">
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "rgba(220,38,38,0.07)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.02)" }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-[3rem] font-black text-white leading-none mb-1">
              3
            </div>
            <div className="text-zinc-400 text-sm font-medium">
              Locations syncing
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-lg bg-red-500/15 border border-red-500/25 text-[11px] font-bold text-red-400 mt-1">
            2 low stock
          </div>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between text-[12px] mb-1.5">
                <span className="text-zinc-300 font-medium">{item.name}</span>
                <span
                  className={`font-bold ${item.low ? "text-red-400" : "text-zinc-400"}`}
                >
                  {item.qty} units
                </span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${item.low ? "bg-red-500" : "bg-green-500"}`}
                  style={{ width: `${item.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[11px] text-zinc-500 font-medium">
            Real-time sync across all branches
          </span>
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    id: "fitcloud",
    eyebrow: "FitCloud",
    Icon: Cloud,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accentText: "text-blue-600",
    ctaHover: "hover:text-blue-700",
    headline: "Everything your gym needs to operate at scale.",
    description:
      "A centralized platform for memberships, billing, attendance, and daily operations across one or multiple locations. Built to stay fast and reliable as your business grows.",
    features: [
      "Multi-location member management",
      "Automated billing & subscriptions",
      "Attendance tracking & geo-fenced check-ins",
      "Staff roles, permissions & scheduling",
      "Digital member cards & self-service portal",
    ],
    ctaLabel: "Learn more about FitCloud",
    ctaHref: "/fitcloud",
    Visual: FitCloudVisual,
    reverse: false,
  },
  {
    id: "fitstock",
    eyebrow: "FitStock",
    Icon: Package,
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    accentText: "text-red-600",
    ctaHover: "hover:text-red-700",
    headline: "Inventory control built for fitness retail.",
    description:
      "Track products, monitor usage trends, and manage restocking across all your locations. No spreadsheets. No guesswork. Just accurate data when you need it.",
    features: [
      "Real-time stock tracking per branch",
      "Purchase orders & supplier management",
      "Inter-branch stock transfers",
      "Low-stock alerts & reorder triggers",
      "Sales & movement analytics",
    ],
    ctaLabel: "Learn more about FitStock",
    ctaHref: "/fitstock",
    Visual: FitStockVisual,
    reverse: true,
  },
];

export default function Ecosystem() {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
              Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-[-0.03em] text-zinc-900 mb-5 leading-[1.05]">
            Two platforms.
            <br />
            <span className="text-zinc-400">One ecosystem.</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            FitCloud and FitStock are built to work independently or together —
            giving fitness businesses complete operational control.
          </p>
        </div>

        {/* Product showcases */}
        <div className="flex flex-col gap-32">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${product.reverse ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Text side */}
              <div className={product.reverse ? "[direction:ltr]" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl ${product.iconBg} flex items-center justify-center`}
                  >
                    <product.Icon className={`w-5 h-5 ${product.iconColor}`} />
                  </div>
                  <span
                    className={`text-[13px] font-bold uppercase tracking-[0.15em] ${product.accentText}`}
                  >
                    {product.eyebrow}
                  </span>
                </div>

                <h3 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-5">
                  {product.headline}
                </h3>

                <p className="text-zinc-500 text-[17px] leading-relaxed mb-8 font-normal">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {product.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[15px] text-zinc-600"
                    >
                      <CheckCircle2
                        className={`w-5 h-5 mt-0.5 shrink-0 ${product.accentText}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={product.ctaHref}
                  className={`inline-flex items-center gap-2 text-[15px] font-bold ${product.accentText} ${product.ctaHover} group transition-colors`}
                >
                  {product.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Visual side */}
              <div
                className={`relative h-[440px] rounded-2xl overflow-hidden ${product.reverse ? "[direction:ltr]" : ""}`}
              >
                <product.Visual />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
