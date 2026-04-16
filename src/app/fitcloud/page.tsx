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
import Footer from "@/components/landing/Footer";

export default function FitCloudPage() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 font-sans text-white selection:bg-blue-100 selection:text-blue-900">
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
              <span className="flex w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[13px] tracking-tight uppercase">
                FitCloud Platform
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-white leading-[1.1]">
              Gym management software <br />
              <span className="text-blue-600">built for growth.</span>
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              A centralized platform to manage memberships, billing, and daily
              operations across one or multiple locations. Built to stay
              reliable as your business grows.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://fitcloud.fitbinary.com"
                className="group relative px-10 py-5 rounded-full overflow-hidden bg-blue-600 text-white hover:scale-105 transition-transform active:scale-95 shadow-xl shadow-blue-600/20"
              >
                <div className="absolute inset-0 bg-blue-700 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                  Launch FitCloud
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/get-started"
                className="px-10 py-5 bg-neutral-950 text-white border border-neutral-800 rounded-full font-bold text-lg hover:border-neutral-700 hover:bg-neutral-900 transition-all active:scale-95 shadow-sm"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-liner-to-b from-transparent to-white z-10 pointer-events-none" />
      </section>

      {/* Core Features */}
      <section className="py-24 px-6 bg-neutral-950 relative z-20 -top-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight mb-6">
              Everything you need to run your gym.
            </h2>
            <p className="text-xl text-neutral-400 font-medium">
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
                color: "bg-blue-50 text-blue-600 shadow-blue-500/10",
              },
              {
                icon: CreditCard,
                title: "Billing & Payments",
                description:
                  "Automated recurring billing with clear visibility into payment status and renewals.",
                color: "bg-indigo-50 text-indigo-600 shadow-indigo-500/10",
              },
              {
                icon: Calendar,
                title: "Membership Plans",
                description:
                  "Flexible plan structures for monthly, quarterly, and annual memberships.",
                color: "bg-sky-50 text-sky-600 shadow-sky-500/10",
              },
              {
                icon: Users,
                title: "Trainer Management",
                description:
                  "Assign trainers, track sessions, and manage staff schedules efficiently.",
                color: "bg-purple-50 text-purple-600 shadow-purple-500/10",
              },
              {
                icon: BarChart,
                title: "Reports & Analytics",
                description:
                  "Performance insights on memberships, attendance trends, and revenue growth.",
                color: "bg-blue-50 text-blue-600 shadow-blue-500/10",
              },
              {
                icon: Globe,
                title: "Multi-Branch Operations",
                description:
                  "Manage multiple gym locations with consistent data and centralized control.",
                color: "bg-neutral-900 text-white shadow-gray-500/10",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all border border-neutral-800 hover:border-neutral-800"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-lg ${feature.color}`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-neutral-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">
                Built for{" "}
                <span className="text-blue-600">gyms of all sizes.</span>
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-10 font-medium">
                Whether you're running a single boutique studio or managing a
                multi-branch franchise, FitCloud scales with your business needs
                effortlessly.
              </p>
              <div className="space-y-6">
                {[
                  "Growing gyms and fitness studios",
                  "Multi-branch franchise chains",
                  "Boutique fitness centers",
                  "Corporate wellness programs",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-white font-bold text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-neutral-950 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(37,99,235,0.1)] border border-blue-900/50 relative overflow-hidden p-12 lg:p-16 h-125 flex items-center justify-center"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 blur-2xl pointer-events-none">
                <Globe className="w-64 h-64 text-blue-600" />
              </div>
              <div className="w-full relative z-10 bg-neutral-900 rounded-3xl shadow-lg border border-neutral-800 p-8">
                <div className="space-y-6">
                  <div className="w-full h-12 bg-neutral-950 rounded-xl shadow-sm border border-neutral-800" />
                  <div className="flex gap-6">
                    <div className="w-1/3 h-40 bg-neutral-950 rounded-xl shadow-sm border border-neutral-800" />
                    <div className="flex-1 h-40 bg-blue-50 rounded-xl shadow-inner border border-blue-900/50/50" />
                  </div>
                  <div className="w-full h-20 bg-neutral-950 rounded-xl shadow-sm border border-neutral-800" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-16 text-center">
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
                className="bg-neutral-900 border border-transparent p-8 rounded-3xl hover:bg-neutral-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-neutral-800 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-4">
                  {faq.q}
                </h3>
                <p className="text-neutral-400 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-blue-600 rounded-[3rem] py-24 px-6 relative overflow-hidden group shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-950/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-neutral-900/20 transition-colors" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 relative z-10 leading-tight">
              Ready to modernize your <br /> gym operations?
            </h2>
            <Link
              href="https://fitcloud.fitbinary.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-neutral-950 text-blue-600 rounded-full font-bold text-lg hover:bg-neutral-900 transition-all shadow-2xl relative z-10 active:scale-95 group-hover:gap-3"
            >
              Launch FitCloud
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

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
