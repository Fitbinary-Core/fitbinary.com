"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cloud, Package, Shield } from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";
import Footer from "@/components/landing/Footer";

export default function GetStartedPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 font-sans text-white selection:bg-red-100 selection:text-red-900">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-liner-to-b from-white/40 via-white/20 to-white/60 z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 mb-6 font-bold shadow-sm">
              <span className="flex w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[13px] tracking-tight uppercase">
                Onboarding
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-white leading-[1.1]">
              Get started with <br />
              <span className="text-blue-600">Fitbinary today.</span>
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Create your account and start managing your gym operations or
              inventory with our powerful platform. Choose the product that fits
              your needs.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-liner-to-b from-transparent to-white z-10 pointer-events-none" />
      </section>

      {/* Product Selection */}
      <section className="py-24 px-6 bg-neutral-950 relative z-20 -top-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight mb-6">
              Choose your product.
            </h2>
            <p className="text-xl text-neutral-400 font-medium">
              Select the Fitbinary product that best suits your business needs.
              You can always add more products later.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* FitCloud Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-neutral-950 rounded-[3rem] p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] border border-blue-900/50 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity blur-2xl pointer-events-none">
                <Cloud className="w-64 h-64 text-blue-600" />
              </div>
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Cloud className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">
                  FitCloud
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8 font-medium">
                  Gym management software for memberships, billing, trainers,
                  and multi-branch operations.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Member management",
                    "Automated billing",
                    "Multi-branch support",
                    "Staff & trainer tracking",
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-base text-neutral-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="https://accounts.fitbinary.com/signup?product=fitcloud"
                className="relative z-10 block w-full text-center px-8 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Start with FitCloud
              </Link>
            </motion.div>

            {/* FitStock Card */}
            <motion.div
              variants={fadeInUp}
              className="group bg-neutral-950 rounded-[3rem] p-10 lg:p-12 shadow-[0_20px_60px_-15px_rgba(220,38,38,0.1)] border border-red-900/50 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity blur-2xl pointer-events-none">
                <Package className="w-64 h-64 text-red-600" />
              </div>
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-500/30 group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">
                  FitStock
                </h3>
                <p className="text-lg text-neutral-400 leading-relaxed mb-8 font-medium">
                  Inventory management for products, stock transfers, and
                  multi-location tracking.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Product management",
                    "Stock receiving & transfers",
                    "Low-stock alerts",
                    "Inventory analytics",
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                      <span className="text-base text-neutral-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="https://accounts.fitbinary.com/signup?product=fitstock"
                className="relative z-10 block w-full text-center px-8 py-5 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95"
              >
                Start with FitStock
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Already Have Account */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-950 rounded-[3rem] py-16 px-6 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-800 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gray-900 text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gray-900/20 group-hover:scale-110 transition-transform">
                <Shield className="w-10 h-10" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                Already have an account?
              </h2>
              <p className="text-xl text-neutral-400 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                Sign in to your Fitbinary account to access FitCloud, FitStock,
                and manage your organization.
              </p>
              <Link
                href="https://accounts.fitbinary.com/signin"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl shadow-gray-900/20 active:scale-95 group-hover:gap-3"
              >
                Sign In
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fitbinary */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto border-t border-neutral-800 pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight mb-6">
              Why choose Fitbinary?
            </h2>
            <p className="text-xl text-neutral-400 font-medium">
              Built specifically for fitness businesses with the features you
              need to scale.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Easy to Use",
                description:
                  "Intuitive interface designed for gym owners and staff, not tech experts.",
              },
              {
                title: "Reliable & Secure",
                description:
                  "Enterprise-grade security and 99.9% uptime for business-critical operations.",
              },
              {
                title: "Multi-Branch Ready",
                description:
                  "Manage multiple locations with centralized control and consistent data.",
              },
              {
                title: "Fast Support",
                description:
                  "Dedicated support team that understands fitness business operations.",
              },
              {
                title: "Regular Updates",
                description:
                  "Continuous improvements and new features based on customer feedback.",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Transparent pricing that scales with your business growth.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-neutral-900 p-8 rounded-3xl border border-transparent hover:border-neutral-800 hover:bg-neutral-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-base text-neutral-400 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight mb-6">
            Need help getting started?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 font-medium max-w-2xl mx-auto">
            Our team is here to help you choose the right product and get your
            account set up.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://accounts.fitbinary.com/signup"
              className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:support@fitbinary.com"
              className="px-10 py-5 bg-neutral-950 text-white border border-neutral-800 rounded-full font-bold text-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all active:scale-95 shadow-sm"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
