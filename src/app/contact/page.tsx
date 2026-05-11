"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, ArrowRight, Clock } from "lucide-react";
import Footer from "@/components/landing/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Contact
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-[3.5rem] font-black tracking-tight leading-[1.05] text-white mb-5">
              Let's talk about
              <br />
              <span className="text-zinc-400">your business.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium">
              Have questions about Fitbinary products? Need help choosing the
              right plan? Our team is here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
            {/* Left — info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  Icon: Mail,
                  label: "Sales",
                  value: "hello@fitbinary.com",
                  sub: "For new business and product questions",
                },
                {
                  Icon: MessageSquare,
                  label: "Support",
                  value: "support@fitbinary.com",
                  sub: "For existing customer help and issues",
                },
                {
                  Icon: MapPin,
                  label: "Headquarters",
                  value: "Kathmandu, Nepal",
                  sub: "Fitbinary Inc.",
                },
                {
                  Icon: Clock,
                  label: "Response time",
                  value: "Within 24 hours",
                  sub: "Monday – Friday",
                },
              ].map(({ Icon, label, value, sub }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-zinc-100 bg-zinc-50 hover:border-zinc-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-zinc-500" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-[15px] font-bold text-zinc-900">
                      {value}
                    </p>
                    <p className="text-[13px] text-zinc-500 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl border border-zinc-200 p-8"
            >
              <h2 className="text-[1.5rem] font-black text-zinc-900 mb-7">
                Send us a message
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Aarav"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sharma"
                      className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@yourbusiness.com"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Powerhouse Fitness"
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business and what you're looking for..."
                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-[14px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3.5 bg-zinc-900 text-white rounded-xl font-bold text-[14px] hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
