"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  Cloud,
  Package,
  Play,
  Users,
  BarChart3,
  ShoppingCart,
  TrendingUp,
  Shield,
} from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function DemoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              Product Demo
            </div>
            <h1 className="text-5xl lg:text-7xl text-gray-900 font-black tracking-tight mb-8">
              See Fitbinary <br />
              <span className="text-blue-600">in action.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              Experience how FitCloud and FitStock transform gym management and
              inventory operations. Book a personalized demo or explore
              interactive previews.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#interactive-demo"
                className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
              >
                <Play className="w-5 h-5" />
                View Demos
              </a>
              <Link
                href="/get-started"
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-blue-600 transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Options */}
      <section id="interactive-demo" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
              Choose your demo experience.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Select the product you want to explore and see how it can
              transform your business operations.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* FitCloud Demo */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-600 transition-all hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                FitCloud Demo
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                See how gym management becomes effortless with automated
                billing, member tracking, and multi-branch operations.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Member onboarding & management",
                  "Automated billing & payments",
                  "Staff & trainer scheduling",
                  "Multi-location dashboard",
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/demo/fitcloud"
                className="block w-full text-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                View FitCloud Demo
              </Link>
            </motion.div>

            {/* FitStock Demo */}
            <motion.div
              variants={fadeInUp}
              className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-red-600 transition-all hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                FitStock Demo
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                Experience complete inventory visibility with real-time
                tracking, stock transfers, and automated alerts.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Product catalog management",
                  "Stock receiving & transfers",
                  "Low-stock notifications",
                  "Inventory analytics & reports",
                ].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/demo/fitstock"
                className="block w-full text-center px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
              >
                View FitStock Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
              What you'll see in the demo.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Our demos showcase real-world scenarios that fitness businesses
              face every day.
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
                icon: Users,
                title: "Member Management",
                description:
                  "Add members, track attendance, manage memberships and renewals seamlessly.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: Calendar,
                title: "Scheduling System",
                description:
                  "Book classes, assign trainers, and manage facility schedules in real-time.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description:
                  "View revenue trends, member growth, and operational insights at a glance.",
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                icon: ShoppingCart,
                title: "Inventory Tracking",
                description:
                  "Monitor stock levels, receive products, and transfer between locations.",
                color: "text-red-600",
                bg: "bg-red-50",
              },
              {
                icon: TrendingUp,
                title: "Sales Reports",
                description:
                  "Track product sales, identify trends, and optimize inventory decisions.",
                color: "text-orange-600",
                bg: "bg-orange-50",
              },
              {
                icon: Shield,
                title: "Access Control",
                description:
                  "Manage user roles, permissions, and secure multi-branch access.",
                color: "text-gray-900",
                bg: "bg-gray-50",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo CTA */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-liner-to-br from-blue-600 to-blue-700 rounded-[3rem] py-16 px-6 text-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Play className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Experience the platform live.
            </h2>
            <p className="text-lg text-blue-100 mb-8 font-medium max-w-2xl mx-auto">
              Watch interactive demos showing real workflows and features. See
              exactly how FitCloud and FitStock work in action.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/demo/fitcloud"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
              >
                <Play className="w-5 h-5" />
                FitCloud Demo
              </Link>
              <Link
                href="/demo/fitstock"
                className="inline-flex items-center gap-2 px-10 py-5 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl"
              >
                <Play className="w-5 h-5" />
                FitStock Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Demo */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
              Why watch our demos?
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              See exactly how Fitbinary works with interactive, animated
              demonstrations.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "Interactive Workflows",
                description:
                  "Watch animated demonstrations of real workflows like member onboarding, billing, and inventory management.",
              },
              {
                title: "Step-by-Step Guides",
                description:
                  "Follow along as each feature is demonstrated with clear explanations and visual progress.",
              },
              {
                title: "Real Scenarios",
                description:
                  "Experience realistic use cases that mirror actual gym and retail operations.",
              },
              {
                title: "Self-Paced Learning",
                description:
                  "Pause, replay, and navigate through demos at your own pace to understand each feature.",
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
            Ready to see Fitbinary in action?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            Choose between a self-guided demo or schedule a personalized
            walkthrough with our team.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/demo/fitcloud"
              className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
            >
              <Play className="w-5 h-5" />
              View FitCloud Demo
            </Link>
            <Link
              href="/demo/fitstock"
              className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20"
            >
              <Play className="w-5 h-5" />
              View FitStock Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
