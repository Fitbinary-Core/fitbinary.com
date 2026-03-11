"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { Footer } from "@/components/landing/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 z-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="initial" animate="animate" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-6 font-bold shadow-sm">
                <span className="flex w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[13px] tracking-tight uppercase">
                  Get in touch
                </span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-[1.1]">
                Let's talk about <br />
                <span className="text-blue-600">your business.</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-lg">
                Have questions about Fitbinary software solutions? Need support?
                Our team is here to help you modernize your operations.
              </p>

              <div className="space-y-8 bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 text-blue-600 shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Email Sales
                    </h3>
                    <p className="text-gray-500 font-medium text-lg">
                      hello@fitbinary.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 text-red-600 shadow-sm">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Customer Support
                    </h3>
                    <p className="text-gray-500 font-medium text-lg">
                      support@fitbinary.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 text-gray-900 shadow-sm">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Headquarters
                    </h3>
                    <p className="text-gray-500 font-medium text-lg">
                      Kathmandu, Nepal
                      <br />
                      Kathmandu 10
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 lg:p-14 rounded-[3rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 blur-2xl pointer-events-none">
                <MessageSquare className="w-64 h-64 text-blue-600" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-8 relative z-10">
                Send us a message
              </h2>
              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium hover:bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium hover:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Work Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium hover:bg-white"
                    placeholder="john@gym.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium hover:bg-white"
                    placeholder="Powerhouse Fitness"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    How can we help?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium resize-none hover:bg-white"
                    placeholder="Tell us about your operational needs..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 mt-4 active:scale-95 group flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none" />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
