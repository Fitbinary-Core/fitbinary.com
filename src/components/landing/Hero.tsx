"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Cloud, Package, Zap, ChevronRight } from "lucide-react";

const premiumEase = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: premiumEase },
  },
};

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const words = text.split(" ");
  return (
    <span className="flex flex-wrap pr-2 last:pr-0">
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden pb-2 mr-3 lg:mr-4 last:mr-0 inline-block"
        >
          <motion.span
            initial={{ y: "110%", opacity: 0, rotateZ: 5 }}
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
            transition={{
              duration: 1,
              delay: delay + i * 0.08,
              ease: premiumEase,
            }}
            className="inline-block origin-bottom-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

function SuiteVisual() {
  return (
    <div className="relative w-full lg:w-[105%] xl:w-[110%] space-y-5 mt-12 lg:mt-0 lg:ml-4">
      <div className="absolute left-[32px] top-[40px] bottom-[40px] w-px bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: premiumEase }}
        className="relative group block"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#050505]/40 backdrop-blur-2xl border border-white/10 rounded-[1.25rem] p-5 lg:p-6 shadow-[0_8px_32_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/20 hover:bg-[#080808]/60 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.25rem]" />

          <div className="relative z-10 flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/5 shadow-inner flex items-center justify-center relative overflow-hidden">
                <Cloud className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white/95 tracking-wide">
                  FitCloud
                </p>
                <p className="text-[11px] text-white/40 tracking-widest uppercase font-semibold mt-0.5">
                  Gym OS
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/5 shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider">
                LIVE
              </span>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-3 gap-3">
            {[
              { label: "Members", value: "1,284" },
              { label: "Revenue", value: "₹4.2L" },
              { label: "Check-ins", value: "347" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/5 rounded-xl px-3 py-3 border border-white/5 shadow-inner"
              >
                <p className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold mb-1.5">
                  {s.label}
                </p>
                <p className="text-[14px] font-bold text-white/90">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: premiumEase }}
        className="relative group block ml-0 sm:ml-10"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 4.5,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-[#050505]/40 backdrop-blur-2xl border border-white/10 rounded-[1.25rem] p-5 lg:p-6 shadow-[0_8px_32_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-white/20 hover:bg-[#080808]/60 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[1.25rem]" />

          <div className="relative z-10 flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2D1B1E] to-[#1A0F11] border border-white/5 shadow-inner flex items-center justify-center relative overflow-hidden">
                <Package className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-white/95 tracking-wide">
                  FitStock
                </p>
                <p className="text-[11px] text-white/40 tracking-widest uppercase font-semibold mt-0.5">
                  Inventory
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/5 shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-[pulse_3s_ease-in-out_infinite]" />
              <span className="text-[10px] font-bold text-emerald-400 tracking-wider">
                SYNCING
              </span>
            </div>
          </div>

          <div className="relative z-10 space-y-3 lg:space-y-4">
            {[
              {
                label: "Whey Protein Isolate",
                pct: 15,
                alert: true,
                color: "bg-red-500",
              },
              {
                label: "Pre-Workout C4",
                pct: 68,
                alert: false,
                color: "bg-blue-600",
              },
            ].map((item) => (
              <div key={item.label} className="group/item">
                <div className="flex justify-between items-center mb-1.5">
                  <p className="text-[12px] font-medium text-white/60 transition-colors duration-300 group-hover/item:text-white/90">
                    {item.label}
                  </p>
                  {item.alert && (
                    <span className="text-[9px] font-bold text-red-500/90 uppercase tracking-widest">
                      Low Stock
                    </span>
                  )}
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.03] overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.pct}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.8,
                      ease: premiumEase,
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: premiumEase }}
        className="relative group block ml-0 sm:ml-20"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 5.5,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-black/20 backdrop-blur-md border border-white/10 border-dashed rounded-[1.25rem] p-4 lg:p-5 flex items-center gap-4 transition-all duration-300 hover:border-white/20 hover:bg-black/40"
        >
          <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center shrink-0 shadow-inner">
            <Zap className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors duration-300" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-white/60 group-hover:text-white/90 transition-colors duration-300 tracking-wide">
              More tools coming soon
            </p>
            <p className="text-[11px] text-white/30 tracking-wider mt-0.5">
              The ecosystem is expanding.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#030303] flex flex-col justify-center overflow-hidden selection:bg-blue-500/30 selection:text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-blue-600/10 blur-[130px] rounded-full" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[60vw] h-[70vh] bg-gradient-to-br from-blue-900/15 via-purple-900/5 to-transparent blur-[120px] rounded-full pointer-events-none z-0"
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />

        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-0 py-24 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.02)] group overflow-hidden relative cursor-pointer hover:bg-white/[0.04] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[12px] font-semibold text-zinc-300 tracking-wide">
                  New: Retention Intelligence Architecture
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </div>
            </motion.div>

            <h1 className="text-2xl sm:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white mb-6">
              <div className="flex flex-wrap">
                <RevealText text="Built for how" delay={0.1} />
              </div>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-indigo-300 drop-shadow-sm flex flex-wrap">
                <RevealText text="fitness operates." delay={0.3} />
              </div>
            </h1>

            <motion.p
              variants={itemVariants}
              className="text-[17px] sm:text-[18px] text-zinc-400 leading-relaxed max-w-xl mb-12 font-medium"
            >
              Fitbinary builds the underlying architecture for modern fitness
              businesses. A cohesive suite of tools designed to manage
              operations, inventory, and member retention flawlessly.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5 flex-wrap mb-16"
            >
              <Link
                href="/get-started"
                className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-zinc-950 text-[14px] font-bold transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                <span className="relative z-10">Start building free</span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[14px] font-semibold text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                Explore platform
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 sm:gap-10 pt-8 border-t border-white/[0.08]"
            >
              {[
                { value: "500+", label: "Fitness businesses" },
                { value: "50+", label: "Cities covered" },
                { value: "99.9%", label: "Platform uptime" },
              ].map((m, i) => (
                <div key={m.label} className="relative">
                  {i !== 0 && (
                    <div className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 w-px h-10 bg-white/[0.08]" />
                  )}
                  <p className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight mb-1">
                    {m.value}
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-zinc-500 font-semibold tracking-wider uppercase">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="w-full relative z-10">
            <SuiteVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
