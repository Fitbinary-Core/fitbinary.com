"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  CreditCard,
  Calendar,
  BarChart3,
  Globe,
  ShieldCheck,
  Smartphone,
  Clock,
} from "lucide-react";
import Footer from "@/components/landing/Footer";

const features = [
  {
    icon: Users,
    title: "Member Management",
    desc: "Complete member profiles, registration workflows, plan assignments, and renewal tracking in one place.",
    size: "large",
  },
  {
    icon: CreditCard,
    title: "Automated Billing",
    desc: "Recurring billing with payment status visibility, failed transaction handling, and invoicing.",
    size: "small",
  },
  {
    icon: Calendar,
    title: "Flexible Plans",
    desc: "Monthly, quarterly, and annual membership structures with custom durations and pricing.",
    size: "small",
  },
  {
    icon: Globe,
    title: "Multi-Branch Operations",
    desc: "Manage unlimited locations from a single dashboard. Consistent data, centralized control.",
    size: "small",
  },
  {
    icon: ShieldCheck,
    title: "Staff & Roles",
    desc: "Role-based access for managers, trainers, and reception — each seeing only what they need.",
    size: "small",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    desc: "Clear dashboards for attendance trends, revenue, membership growth, and retention rates.",
    size: "large",
  },
  {
    icon: Smartphone,
    title: "Digital Member Portal",
    desc: "Members can view their profile, attendance history, and payment records via self-service.",
    size: "small",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    desc: "Log and monitor check-ins across all branches in real time.",
    size: "small",
  },
];

const faqs = [
  {
    q: "Is FitCloud suitable for small boutique studios?",
    a: "Yes. FitCloud scales from single-location studios to large multi-branch operations. You get professional management tools without unnecessary complexity.",
  },
  {
    q: "Can I manage multiple gym locations?",
    a: "Absolutely. FitCloud's multi-branch architecture lets you manage multiple locations with centralized control and consistent data across all branches.",
  },
  {
    q: "How does billing automation work?",
    a: "FitCloud handles recurring billing based on membership plans. You get visibility into payment status, upcoming renewals, and failed transactions — automatically.",
  },
  {
    q: "Do you support different staff roles?",
    a: "Yes. FitCloud includes role-based access for managers, trainers, and reception staff with fine-grained permissions per branch.",
  },
  {
    q: "Can members access their own data?",
    a: "Yes. Members access their profiles, attendance history, and payment records through a digital self-service portal.",
  },
];

export default function FitCloudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[12px] font-bold text-blue-400 uppercase tracking-wider">
                FitCloud — Gym Management
              </span>
            </div>

            <h1 className="text-[3.5rem] sm:text-[4.5rem] font-black tracking-tight leading-[1.05] text-white mb-6">
              Run your fitness business
              <br />
              <span className="text-blue-400">with total clarity.</span>
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl font-medium">
              FitCloud is Fitbinary's gym management product — a centralized
              platform for memberships, billing, attendance, and operations
              across one or many locations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://fitcloud.fitbinary.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 text-white font-bold text-[15px] hover:bg-blue-500 transition-colors active:scale-95"
              >
                Open FitCloud
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-bold text-[15px] hover:border-zinc-500 hover:text-white transition-colors"
              >
                Talk to Sales
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-zinc-800 max-w-lg">
              {[
                { value: "500+", label: "Gyms on FitCloud" },
                { value: "99.9%", label: "Uptime" },
                { value: "50+", label: "Cities" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[2rem] font-black text-white tracking-tight leading-none mb-1">
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

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                Features
              </span>
            </div>
            <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-4">
              Everything your gym
              <br />
              needs to operate at scale.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              From member check-ins to billing automation — FitCloud handles the
              operational layer so you can focus on your members.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map(({ icon: Icon, title, desc, size }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`group rounded-2xl border border-zinc-200 bg-zinc-50 p-6 hover:border-zinc-300 hover:bg-white transition-all duration-300 ${
                  size === "large" ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-[15px] font-bold text-zinc-900 mb-2">
                  {title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
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
                  Built for
                </span>
              </div>
              <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.08] mb-6">
                Every fitness
                <br />
                <span className="text-zinc-500">business type.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Whether you run a single boutique studio or manage a
                multi-branch franchise, FitCloud scales without requiring
                migrations or plan changes.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-[15px] font-bold text-blue-400 hover:text-blue-300 group transition-colors"
              >
                Start for free
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
                {
                  title: "Independent gyms & studios",
                  desc: "Full operations management from day one, without enterprise-level complexity.",
                },
                {
                  title: "Multi-branch gym chains",
                  desc: "Centralized control across all locations with branch-level isolation.",
                },
                {
                  title: "Yoga & pilates studios",
                  desc: "Class-oriented memberships and attendance tracking designed to fit studio workflows.",
                },
                {
                  title: "Corporate wellness programs",
                  desc: "Manage members across employer-sponsored fitness programs with billing flexibility.",
                },
                {
                  title: "Sports academies",
                  desc: "Enrollment, coaching staff, and multi-program management at scale.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[14px] font-bold text-white mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[13px] text-zinc-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-[2.75rem] font-black tracking-tight text-zinc-900 leading-[1.08]">
              Common questions
            </h2>
          </div>
          <div className="divide-y divide-zinc-100">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="py-7"
              >
                <h3 className="text-[16px] font-bold text-zinc-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-tight text-white leading-none mb-6">
            Ready to modernize
            <br />
            your operations?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join hundreds of fitness businesses already running their daily
            operations on FitCloud.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://fitcloud.fitbinary.com"
              className="px-8 py-4 rounded-full bg-white text-zinc-900 font-bold text-[15px] hover:bg-zinc-100 active:scale-95 transition-all flex items-center gap-2 group"
            >
              Open FitCloud
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-300 font-bold text-[15px] hover:border-zinc-500 hover:text-white active:scale-95 transition-all"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
