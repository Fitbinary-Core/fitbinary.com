"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, BookOpen, Zap } from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";
import { Footer } from "@/components/landing/Footer";

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 mb-6 font-bold shadow-sm">
              <span className="flex w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[13px] tracking-tight uppercase">
                Fitbinary Community
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-[1.1]">
              Join the fitbinary <br />
              <span className="text-red-600">tech community.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Connect with gym owners, fitness professionals, and developers
              building the future of fitness technology.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white z-10 pointer-events-none" />
      </section>

      {/* Community Features */}
      <section className="py-24 px-6 bg-white relative z-20 top-[-2rem]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Learn, share, and grow together.
            </h2>
            <p className="text-xl text-gray-500 font-medium">
              Access resources, best practices, and connect with other fitness
              business operators.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Users,
                title: "Success Stories",
                description:
                  "Learn from gyms that have scaled using Fitbinary.",
                color: "bg-red-50 text-red-600 shadow-red-500/10",
              },
              {
                icon: BookOpen,
                title: "Best Practices",
                description: "Operational guides and industry insights.",
                color: "bg-blue-50 text-blue-600 shadow-blue-500/10",
              },
              {
                icon: MessageSquare,
                title: "Community Forum",
                description: "Ask questions and share experiences.",
                color: "bg-gray-100 text-gray-900 shadow-gray-500/10",
              },
              {
                icon: Zap,
                title: "Product Updates",
                description:
                  "Stay informed about new features and improvements.",
                color: "bg-orange-50 text-orange-600 shadow-orange-500/10",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-gray-100 hover:border-gray-200"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg ${feature.color}`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-8">
                Built by fitness operators, for fitness operators.
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed mb-10 font-medium">
                Fitbinary is designed by people who understand the challenges of
                running a fitness business. Join our community to share insights
                and learn from others.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(220,38,38,0.1)] border border-red-50 relative overflow-hidden p-12 h-[400px] flex items-center justify-center group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 blur-2xl pointer-events-none group-hover:opacity-10 transition-opacity">
                <Users className="w-64 h-64 text-red-600" />
              </div>
              <div className="w-full relative z-10 bg-gray-50 rounded-3xl shadow-lg border border-gray-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-48 h-4 bg-gray-200 rounded-full mx-auto" />
                    <div className="w-32 h-4 bg-gray-200 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center border-t border-gray-100 pt-24">
          <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-8">
            Ready to join the community?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            Connect with other fitness professionals and start building better
            gym operations.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95 group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
