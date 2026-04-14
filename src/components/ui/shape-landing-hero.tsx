"use client";

import { motion } from "framer-motion";
import { Asterisk, ChevronDown, Moon, Layers } from "lucide-react";

export function ShapeLandingHero() {
  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-blue-500/30">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer">
          <Asterisk className="w-6 h-6 text-white" />
          <span className="text-xl font-semibold tracking-tight lowercase">
            fitbinary
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
            Products <ChevronDown className="w-3 h-3" />
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">
            features
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">
            pricing
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">
            Docs
          </div>
          <div className="hover:text-white cursor-pointer transition-colors">
            Company
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
            <Moon className="w-5 h-5" />
          </button>
          <button className="bg-[#0099ff] hover:bg-[#0077cc] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
        {/* Glowing Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#007ecc]/20 blur-[120px] rounded-[100%] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8"
          >
            <Layers className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-gray-300">
              Introducing the Modern Business Suite
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Scale your business <br className="hidden md:block" />
              10x faster with us
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Your operations partner manages memberships, billing, and inventory
            instantly. Run operations in minutes, not hours.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#0099ff] hover:bg-[#0088ee] text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all shadow-[0_0_40px_rgba(0,153,255,0.4)] hover:shadow-[0_0_60px_rgba(0,153,255,0.6)]"
          >
            Start for free
          </motion.button>
        </div>
      </main>

      {/* Feature Grid / Tabs */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b border-white/10">
          <div className="py-6 px-4 text-center border-b md:border-b-0 md:border-r border-white/10 text-gray-400 font-medium hover:text-white transition-colors cursor-pointer">
            Member Management
          </div>
          <div className="py-6 px-4 text-center border-b md:border-b-0 md:border-r border-white/10 text-gray-400 font-medium hover:text-white transition-colors cursor-pointer">
            Billing & Payments
          </div>
          <div className="py-6 px-4 text-center border-b md:border-b-0 md:border-r border-white/10 text-gray-400 font-medium hover:text-white transition-colors cursor-pointer">
            Inventory Tracking
          </div>
          {/* Active State Tab */}
          <div className="relative py-6 px-4 text-center text-white font-medium cursor-pointer overflow-hidden border-t-2 border-[#0099ff] -mt-[1px] bg-gradient-to-b from-[#0099ff]/10 to-transparent">
            {/* Dotted background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(#0099ff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            <span className="relative z-10">Multi-Branch Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapeLandingHero;
