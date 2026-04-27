"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Purpose-built for fitness",
    description:
      "Designed around the actual workflows of gym owners — not adapted from generic business software.",
  },
  {
    number: "02",
    title: "Multi-branch from day one",
    description:
      "Whether you have one gym or fifty, the architecture scales without requiring migrations or upgrades.",
  },
  {
    number: "03",
    title: "One platform, two products",
    description:
      "FitCloud and FitStock share a unified data layer. Member activity, inventory, and billing are always in sync.",
  },
  {
    number: "04",
    title: "Built for your whole team",
    description:
      "From front-desk staff to gym owners — role-based access ensures everyone sees exactly what they need.",
  },
];

export default function Developers() {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                Why Fitbinary
              </span>
            </div>
            <h2 className="text-4xl lg:text-[3rem] font-black tracking-[-0.03em] text-zinc-900 leading-[1.05] mb-6">
              Software that actually
              <br />
              <span className="text-zinc-400">fits the gym floor.</span>
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
              Most business software forces fitness operators into workflows
              built for retail or hospitality. Fitbinary is different — every
              feature is shaped around how gyms actually run.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[15px] font-bold text-zinc-900 hover:text-zinc-600 group transition-colors"
            >
              Learn about Fitbinary
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — numbered list */}
          <div className="flex flex-col divide-y divide-zinc-100">
            {reasons.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group py-8 first:pt-0 last:pb-0"
              >
                <div className="flex items-start gap-6">
                  <span className="text-[13px] font-black text-zinc-300 tabular-nums shrink-0 mt-1">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-bold text-zinc-900 mb-2 tracking-tight group-hover:text-zinc-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-[15px] leading-relaxed font-normal">
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
  );
}
