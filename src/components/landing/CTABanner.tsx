"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative bg-zinc-950 py-40 px-6 overflow-hidden">
      {/* Red orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "700px",
          height: "700px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(220,38,38,0.20) 0%, transparent 65%)",
        }}
      />
      {/* Blue accent — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          right: 0,
          top: 0,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
              Get Started
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-[-0.04em] text-white leading-none mb-6">
            Ready to transform
            <br />
            your gym business?
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Join hundreds of fitness businesses already running their operations
            on Fitbinary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="group px-8 py-4 rounded-full bg-white text-zinc-900 font-bold text-[15px] hover:bg-zinc-100 active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-black/30"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 font-bold text-[15px] hover:border-zinc-500 hover:text-white active:scale-95 transition-all duration-200"
            >
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
