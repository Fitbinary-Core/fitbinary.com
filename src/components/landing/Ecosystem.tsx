"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Package,
  Users,
  Zap,
} from "lucide-react";

function FitCloudPreview() {
  return (
    <div className="w-full h-full bg-[#050A14] rounded-xl p-5 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-bold text-blue-400/70 uppercase tracking-widest mb-0.5">
            Dashboard
          </p>
          <p className="text-white/90 text-[13px] font-semibold">
            Active Members
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-bold text-emerald-400 tracking-wider">
            LIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { l: "Members", v: "2,847" },
          { l: "Revenue", v: "₹12.4L" },
          { l: "Today", v: "+23" },
        ].map((s) => (
          <div
            key={s.l}
            className="bg-white/4 rounded-xl px-2.5 py-2.5 border border-white/5"
          >
            <p className="text-[8px] text-zinc-500 uppercase tracking-wider font-bold mb-1">
              {s.l}
            </p>
            <p className="text-[13px] font-bold text-white/90">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        {[
          { name: "Aarav S.", plan: "Premium", active: true },
          { name: "Priya T.", plan: "Standard", active: true },
          { name: "Rajan K.", plan: "Premium", active: false },
        ].map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between bg-white/3 rounded-xl px-3 py-2.5 border border-white/4"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-blue-900/60 flex items-center justify-center text-[9px] font-bold text-blue-300">
                {m.name[0]}
              </div>
              <div>
                <p className="text-[11px] font-semibold text-white/80 leading-none">
                  {m.name}
                </p>
                <p className="text-[9px] text-zinc-500 mt-0.5">{m.plan}</p>
              </div>
            </div>
            <div
              className={`w-1.5 h-1.5 rounded-full ${m.active ? "bg-emerald-400" : "bg-zinc-600"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FitStockPreview() {
  const items = [
    { name: "Whey Protein 1kg", pct: 71, low: false },
    { name: "Creatine 250g", pct: 12, low: true },
    { name: "Resistance Bands", pct: 89, low: false },
    { name: "Pre-Workout 300g", pct: 14, low: true },
  ];

  return (
    <div className="w-full h-full bg-[#0D0D0D] rounded-xl p-5 overflow-hidden border border-zinc-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-bold text-orange-400/70 uppercase tracking-widest mb-0.5">
            Inventory
          </p>
          <p className="text-white/90 text-[13px] font-semibold">
            Stock Overview
          </p>
        </div>
        <div className="px-2 py-1 rounded-lg bg-red-500/10 border border-red-500/20">
          <span className="text-[9px] font-bold text-red-400 tracking-wider">
            2 LOW
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[11px] font-medium text-white/60">
                {item.name}
              </p>
              {item.low && (
                <span className="text-[9px] font-bold text-red-400 uppercase tracking-wider">
                  Low
                </span>
              )}
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full rounded-full ${item.low ? "bg-red-500" : "bg-emerald-500"}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] text-zinc-500 font-medium">
          Synced across 3 locations
        </span>
      </div>
    </div>
  );
}

const products = [
  {
    id: "fitcloud",
    category: "Gym Management",
    name: "FitCloud",
    Icon: Cloud,
    tagBg: "bg-blue-50 border-blue-100",
    tagText: "text-blue-600",
    ctaColor: "text-blue-600 hover:text-blue-700",
    headline: "Run your fitness business with total clarity.",
    description:
      "Complete operations management for gyms, studios, and fitness centers. From memberships to multi-branch reporting — all in one platform.",
    features: [
      "Member management & automated billing",
      "Multi-location dashboard",
      "Attendance & check-ins",
      "Staff roles & scheduling",
      "Digital member self-service portal",
    ],
    cta: "Explore FitCloud",
    href: "/fitcloud",
    Preview: FitCloudPreview,
  },
  {
    id: "fitstock",
    category: "Inventory Control",
    name: "FitStock",
    Icon: Package,
    tagBg: "bg-orange-50 border-orange-100",
    tagText: "text-orange-600",
    ctaColor: "text-orange-600 hover:text-orange-700",
    headline: "Inventory that keeps up with your pace.",
    description:
      "Real-time stock tracking, purchase orders, and low-stock alerts across all your locations. Built for fitness retail, not generic warehouses.",
    features: [
      "Real-time stock levels per branch",
      "Purchase orders & supplier management",
      "Inter-branch stock transfers",
      "Low-stock alerts & reorder triggers",
      "Sales & movement analytics",
    ],
    cta: "Explore FitStock",
    href: "/fitstock",
    Preview: FitStockPreview,
  },
];

const comingSoon = [
  {
    name: "FitTrainer",
    category: "Trainer CRM",
    desc: "Manage trainer-client relationships, programs, and session scheduling. Currently in beta.",
    Icon: Users,
  },
  {
    name: "And more...",
    category: "Roadmap",
    desc: "New products are actively being built to cover every operational corner of the fitness industry.",
    Icon: Zap,
  },
];

export default function Ecosystem() {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
              Product Suite
            </span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-[-0.03em] text-zinc-900 mb-5 leading-[1.05]">
            One platform.
            <br />
            <span className="text-zinc-400">Every tool you need.</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Fitbinary is a growing suite of focused products — each
            purpose-built for a specific part of running a fitness business,
            designed to work seamlessly together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl border border-zinc-200 bg-white p-8 hover:border-zinc-300 hover:shadow-sm transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${p.tagBg} border text-[11px] font-bold ${p.tagText} uppercase tracking-wider`}
                >
                  <p.Icon className="w-3 h-3" />
                  {p.category}
                </div>
              </div>

              <h3 className="text-[2.25rem] font-black text-zinc-900 tracking-tight leading-none mb-3">
                {p.name}
              </h3>

              <p className="text-[1.05rem] font-bold text-zinc-700 leading-snug mb-2">
                {p.headline}
              </p>

              <p className="text-zinc-500 text-[15px] leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="rounded-xl overflow-hidden mb-6 h-57.5">
                <p.Preview />
              </div>

              <ul className="space-y-2.5 mb-7">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-[14px] text-zinc-600"
                  >
                    <CheckCircle2 className={`w-4 h-4 shrink-0 ${p.tagText}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={`inline-flex items-center gap-2 text-[14px] font-bold ${p.ctaColor} group/link transition-colors mt-auto`}
              >
                {p.cta}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {comingSoon.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-3xl border border-dashed border-zinc-200 bg-zinc-50/60 p-7 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0 mt-0.5">
                <item.Icon className="w-4 h-4 text-zinc-400" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <p className="text-[16px] font-bold text-zinc-500 mb-1">
                  {item.name}
                </p>
                <p className="text-[13px] text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
