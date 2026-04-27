"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Globe,
  BarChart3,
  MapPin,
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
      "Manage any number of locations, staff, and inventory from one unified dashboard.",
    size: "small",
  },
  {
    icon: Cpu,
    title: "Fast by default",
    description:
      "Optimized for peak-hour operations — check-ins, billing, and lookups stay snappy under load.",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Secure & reliable",
    description:
      "Member data, payment records, and inventory handled with modern encryption and access controls.",
    size: "small",
  },
  {
    icon: RefreshCw,
    title: "Real-time sync",
    description:
      "Stock levels, member status, and attendance data stay consistent across all branches — instantly.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Operational insights",
    description:
      "Clear dashboards for memberships, attendance trends, revenue, and inventory movement.",
    size: "large",
  },
  {
    icon: MapPin,
    title: "Geo-fenced check-ins",
    description:
      "Location-verified attendance without manual sign-in. Members check in from the gym floor.",
    size: "small",
  },
  {
    icon: Zap,
    title: "Quick onboarding",
    description:
      "Get your gym, staff, and members set up in hours — not weeks.",
    size: "small",
  },
];

export default function Features() {
  return (
    <section className="py-32 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-5">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
              Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-[-0.03em] text-white mb-5 leading-[1.05]">
            Built for the gym floor
            <br />
            <span className="text-zinc-500">and back office.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Every capability designed around the real demands of running a
            fitness business at scale.
          </p>
        </div>

        {/* Bento grid */}
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
              {/* Subtle top glow line on hover */}
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
