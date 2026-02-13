"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  CreditCard,
  Calendar,
  BarChart,
  Globe,
} from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function FitCloudPage() {
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
              FitCloud Platform
            </div>
            <h1 className="text-5xl lg:text-7xl text-blue-700 font-black tracking-tight mb-8">
              Gym management software <br />
              <span className="text-gray-800">built for growth.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              A centralized platform to manage memberships, billing, and daily
              operations across one or multiple locations. Built to stay
              reliable as your business grows.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://fitcloud.fitbinary.com"
                className="group relative px-10 py-5 rounded-full overflow-hidden bg-blue-600 text-white hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-blue-600/20"
              >
                <div className="absolute inset-0 bg-blue-700 -translate-x-100 transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                  Launch FitCloud
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/get-started"
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-blue-600 transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
              Everything you need to run your gym.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              From member check-ins to billing automation, FitCloud handles the
              operational details so you can focus on your members.
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
                  "Complete member profiles with registration, renewals, and attendance tracking.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: CreditCard,
                title: "Billing & Payments",
                description:
                  "Automated recurring billing with clear visibility into payment status and renewals.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Calendar,
                title: "Membership Plans",
                description:
                  "Flexible plan structures for monthly, quarterly, and annual memberships.",
                color: "bg-gray-100 text-gray-900",
              },
              {
                icon: Users,
                title: "Trainer Management",
                description:
                  "Assign trainers, track sessions, and manage staff schedules efficiently.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: BarChart,
                title: "Reports & Analytics",
                description:
                  "Performance insights on memberships, attendance trends, and revenue growth.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Globe,
                title: "Multi-Branch Operations",
                description:
                  "Manage multiple gym locations with consistent data and centralized control.",
                color: "bg-gray-100 text-gray-900",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${feature.color}`}
                >
                  <feature.icon className="w-6 h-6" />
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

      {/* Use Cases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-blue-600 font-black tracking-tight mb-8">
                Built for gyms of all sizes.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                Whether you're running a single boutique studio or managing a
                multi-branch franchise, FitCloud scales with your business
                needs.
              </p>
              <div className="space-y-6">
                {[
                  "Growing gyms and fitness studios",
                  "Multi-branch franchise chains",
                  "Boutique fitness centers",
                  "Corporate wellness programs",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50/50 rounded-[40px] aspect-[1.2] border border-blue-100 relative overflow-hidden p-12">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-blue-200/50 p-6">
                <div className="space-y-4">
                  <div className="w-full h-12 bg-gray-50 rounded-xl" />
                  <div className="flex gap-4">
                    <div className="w-1/3 h-40 bg-gray-50 rounded-xl" />
                    <div className="flex-1 h-40 bg-blue-50 rounded-xl" />
                  </div>
                  <div className="w-full h-20 bg-gray-50 rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is FitCloud suitable for small boutique studios?",
                a: "Yes. FitCloud is designed to scale from single-location studios to large franchise operations. You get professional management tools without unnecessary complexity.",
              },
              {
                q: "Can I manage multiple gym locations?",
                a: "Absolutely. FitCloud's multi-branch architecture allows you to manage multiple locations with centralized control and consistent data across all branches.",
              },
              {
                q: "How does billing automation work?",
                a: "FitCloud handles recurring billing automatically based on membership plans. You get clear visibility into payment status, renewals, and failed transactions.",
              },
              {
                q: "Do you support different staff roles?",
                a: "Yes. FitCloud includes role-based access control for managers, trainers, and reception staff with granular permissions.",
              },
              {
                q: "Can members access their own data?",
                a: "Yes. Members can access their profiles, attendance history, and payment records through a member-facing portal.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-blue-600 rounded-[3rem] py-20 px-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 relative z-10 leading-tight">
              Ready to modernize your gym operations?
            </h2>
            <Link
              href="https://fitcloud.fitbinary.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl relative z-10"
            >
              Launch FitCloud
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FitCloud",
            applicationCategory: "BusinessApplication",
            description:
              "Gym management software for memberships, billing, and multi-branch operations",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}
