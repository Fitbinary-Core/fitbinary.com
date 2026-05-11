"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Globe,
  BarChart3,
  Layers,
  RefreshCw,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Multi-tenant architecture",
    description:
      "Run multiple independent businesses on one platform. Each tenant gets full data isolation with shared infrastructure benefits.",
    size: "large",
  },
  {
    icon: Globe,
    title: "Multi-branch support",
    description:
      "Manage any number of locations, staff, and inventory from a single unified dashboard — no matter the business type.",
    size: "small",
  },
  {
    icon: Cpu,
    title: "Fast by default",
    description:
      "Optimized for peak-hour operations — check-ins, billing, and lookups stay responsive under real-world load.",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable",
    description:
      "Member data, payment records, and business information handled with modern encryption and fine-grained access controls.",
    size: "small",
  },
  {
    icon: RefreshCw,
    title: "Real-time sync",
    description:
      "Stock levels, member status, and operational data stay consistent across all branches — instantly and automatically.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Operational insights",
    description:
      "Clear dashboards for memberships, attendance trends, revenue, and inventory movement — across every product.",
    size: "large",
  },
  {
    icon: Layers,
    title: "Unified data layer",
    description:
      "All Fitbinary products share one data model. Members, payments, and inventory stay in sync with no manual effort.",
    size: "small",
  },
  {
    icon: Zap,
    title: "Quick time to value",
    description:
      "Get your team, members, and operations set up in hours — not weeks. Designed for real-world adoption.",
    size: "small",
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
              Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-[-0.03em] text-white mb-5 leading-[1.05]">
            Built for operations
            <br />
            <span className="text-zinc-500">at any scale.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Every capability in the Fitbinary platform is designed around the
            real demands of running a fitness business — from a single studio to
            a national chain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-auto">
          {features.map(({ icon: Icon, title, description, size }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`group relative rounded-2xl border border-zinc-800/70 bg-zinc-900/50 p-7 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 ${
                size === "large" ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

              <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center mb-6 group-hover:border-zinc-600 transition-colors">
                <Icon className="w-5 h-5 text-zinc-300" />
              </div>

              <h3 className="text-[16px] font-bold text-white mb-2.5 tracking-tight">
                {title}
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-normal group-hover:text-zinc-400 transition-colors">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
