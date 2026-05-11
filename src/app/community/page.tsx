"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  MessageSquare,
  BookOpen,
  Zap,
  TrendingUp,
  Globe,
} from "lucide-react";
import Footer from "@/components/landing/Footer";

const channels = [
  {
    icon: MessageSquare,
    name: "Community Forum",
    desc: "Ask questions, share workflows, and get answers from other fitness business operators and the Fitbinary team.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: BookOpen,
    name: "Best Practices",
    desc: "Operational guides, setup tips, and industry insights from operators who've scaled their businesses on Fitbinary.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Users,
    name: "Success Stories",
    desc: "Real case studies from gyms, studios, and academies that have improved their operations with Fitbinary products.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Zap,
    name: "Product Updates",
    desc: "Changelog, release notes, and early previews of upcoming features — posted as they ship.",
    status: "Active",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];

const stats = [
  { value: "500+", label: "Businesses" },
  { value: "50+", label: "Cities" },
  { value: "Active", label: "Community" },
];

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Community
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-[3.5rem] font-black tracking-tight leading-[1.05] text-white mb-5">
              Built by fitness operators,
              <br />
              <span className="text-zinc-400">for fitness operators.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium mb-10 max-w-xl">
              The Fitbinary community is where gym owners, studio managers,
              personal trainers, and developers come to share knowledge, get
              help, and grow together.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-900 font-bold text-[15px] hover:bg-zinc-100 transition-colors active:scale-95"
              >
                Join the Community
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-zinc-800 max-w-sm">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-[1.75rem] font-black text-white tracking-tight leading-none mb-1">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community channels */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                What's inside
              </span>
            </div>
            <h2 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-4">
              Learn, share,
              <br />
              and grow together.
            </h2>
            <p className="text-zinc-500 text-[16px] leading-relaxed">
              Access resources, best practices, and real conversations with
              other fitness business operators — all in one place.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {channels.map(
              ({ icon: Icon, name, desc, status, statusColor }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 hover:border-zinc-300 hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-zinc-500" />
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${statusColor}`}
                    >
                      {status}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-zinc-900 mb-2">
                    {name}
                  </h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Who's here */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                  Who's here
                </span>
              </div>
              <h2 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.08] mb-5">
                A community built
                <br />
                <span className="text-zinc-500">around real operations.</span>
              </h2>
              <p className="text-zinc-400 text-[16px] leading-relaxed mb-8">
                From single-studio owners to multi-branch operators — the
                Fitbinary community spans the entire fitness industry. Everyone
                is here to learn and share what works.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-white hover:text-zinc-300 group transition-colors"
              >
                Create your account
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              {[
                { icon: Users, label: "Gym & fitness center owners" },
                { icon: Globe, label: "Multi-branch chain operators" },
                { icon: TrendingUp, label: "Studio managers & staff" },
                { icon: Zap, label: "Personal trainers & coaches" },
                { icon: BookOpen, label: "Sports academy administrators" },
                {
                  icon: MessageSquare,
                  label: "Developers building on Fitbinary APIs",
                },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-zinc-900 border border-zinc-800"
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <p className="text-[14px] font-medium text-zinc-300">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-5">
            Ready to join?
          </h2>
          <p className="text-zinc-500 text-[16px] leading-relaxed mb-8 max-w-md mx-auto">
            Create a Fitbinary account to get full access to the community,
            resources, and the products that run your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="px-7 py-3.5 rounded-full bg-zinc-900 text-white font-bold text-[14px] hover:bg-zinc-800 active:scale-95 transition-all flex items-center gap-2 group"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-full border border-zinc-200 text-zinc-600 font-bold text-[14px] hover:border-zinc-400 hover:text-zinc-900 active:scale-95 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
