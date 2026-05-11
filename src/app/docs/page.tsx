"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  BookOpen,
  Terminal,
  Zap,
  Webhook,
  Lock,
  ChevronRight,
} from "lucide-react";
import Footer from "@/components/landing/Footer";

const apiSections = [
  {
    icon: Code2,
    name: "FitCloud API",
    desc: "Members, billing, check-ins, branches, staff, and membership plans.",
    endpoints: ["GET /members", "POST /members/{id}/renew", "GET /attendance"],
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    icon: Terminal,
    name: "FitStock API",
    desc: "Products, inventory levels, stock transfers, purchase orders, and alerts.",
    endpoints: ["GET /products", "POST /transfers", "GET /inventory/{branch}"],
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-100",
  },
  {
    icon: Webhook,
    name: "Webhooks",
    desc: "Real-time event delivery for member events, stock changes, and billing lifecycle.",
    endpoints: ["member.created", "stock.low_alert", "billing.payment_failed"],
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-100",
  },
  {
    icon: Lock,
    name: "Auth & Tenants",
    desc: "API keys, tenant scoping, and role-based access for API consumers.",
    endpoints: ["POST /auth/token", "GET /tenant", "GET /tenant/branches"],
    color: "text-zinc-600",
    bg: "bg-zinc-50 border-zinc-200",
  },
];

const steps = [
  {
    step: "01",
    title: "Request API access",
    desc: "Contact us to get your API key and tenant credentials. We'll set up your sandbox environment.",
  },
  {
    step: "02",
    title: "Authenticate",
    desc: "Use your API key in the Authorization header. All requests are scoped to your tenant automatically.",
  },
  {
    step: "03",
    title: "Start building",
    desc: "Explore the API reference, try endpoints in your sandbox, and ship your integration.",
  },
];

export default function DocsPage() {
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
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Developer Docs
              </span>
            </div>

            <h1 className="text-[2.75rem] sm:text-[4.5rem] font-black tracking-tight leading-[1.05] text-white mb-6">
              Build with
              <br />
              <span className="text-zinc-400">Fitbinary APIs.</span>
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl font-medium">
              Integrate Fitbinary into your mobile apps, member portals, or
              internal systems. RESTful APIs with consistent design across all
              products, backed by real-time webhooks.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-900 font-bold text-[15px] hover:bg-zinc-100 transition-colors active:scale-95"
              >
                Request API Access
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-zinc-700 text-zinc-300 font-bold text-[15px] hover:border-zinc-500 hover:text-white transition-colors"
              >
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                API Reference
              </span>
            </div>
            <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-4">
              Clean APIs across
              <br />
              every product.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Every Fitbinary product exposes a consistent RESTful API. One
              authentication model, one SDK, one set of conventions — regardless
              of which product you integrate.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {apiSections.map((section, i) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-7 hover:border-zinc-300 hover:bg-white transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl ${section.bg} border mb-5`}
                >
                  <section.icon className={`w-4 h-4 ${section.color}`} />
                  <span className={`text-[12px] font-bold ${section.color}`}>
                    {section.name}
                  </span>
                </div>

                <p className="text-[14px] text-zinc-600 leading-relaxed mb-5">
                  {section.desc}
                </p>

                <div className="space-y-2">
                  {section.endpoints.map((ep) => (
                    <div
                      key={ep}
                      className="flex items-center gap-2 font-mono text-[12px]"
                    >
                      <ChevronRight className="w-3 h-3 text-zinc-400 shrink-0" />
                      <span className="text-zinc-500">{ep}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-5">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Getting Started
              </span>
            </div>
            <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-white leading-[1.08]">
              Up and running
              <br />
              <span className="text-zinc-500">in three steps.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
              >
                <span className="text-[13px] font-black text-zinc-600 tabular-nums block mb-4">
                  {step.step}
                </span>
                <h3 className="text-[17px] font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-6">
                <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                  Example
                </span>
              </div>
              <h2 className="text-4xl lg:text-[3rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-5">
                Simple, consistent
                <br />
                integration.
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                One SDK handles authentication, request signing, and error
                handling across all Fitbinary products. Clean design,
                predictable responses.
              </p>
              <div className="space-y-3">
                {[
                  { icon: Zap, label: "Sub-100ms response times" },
                  { icon: Lock, label: "Tenant-scoped by default" },
                  { icon: BookOpen, label: "Versioned API endpoints" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-[14px] text-zinc-600"
                  >
                    <Icon className="w-4 h-4 text-zinc-400 shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-zinc-200 bg-zinc-950 overflow-hidden"
            >
              <div className="flex items-center gap-2 px-5 py-3.5 bg-zinc-900 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-zinc-500 text-[11px] font-bold tracking-wider ml-3">
                  example.js
                </span>
              </div>
              <div className="p-6 font-mono text-[13px] leading-7">
                <div className="text-zinc-500 mb-3">{`// Initialize client`}</div>
                <div>
                  <span className="text-purple-400">const</span>
                  <span className="text-zinc-300"> client </span>
                  <span className="text-zinc-500">= </span>
                  <span className="text-purple-400">new</span>
                  <span className="text-blue-400"> FitbinaryClient</span>
                  <span className="text-zinc-300">{"({"}</span>
                </div>
                <div className="pl-5">
                  <span className="text-zinc-400">apiKey</span>
                  <span className="text-zinc-500">: </span>
                  <span className="text-green-400">'fb_live_...'</span>
                  <span className="text-zinc-300">,</span>
                </div>
                <div className="text-zinc-300">{"});"}</div>
                <div className="mt-4 text-zinc-500">{`// List members`}</div>
                <div>
                  <span className="text-purple-400">const</span>
                  <span className="text-zinc-300"> members </span>
                  <span className="text-zinc-500">= </span>
                  <span className="text-purple-400">await</span>
                  <span className="text-zinc-300"> client</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-yellow-400">members</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-blue-400">list</span>
                  <span className="text-zinc-300">{"();"}</span>
                </div>
                <div className="mt-4 text-zinc-500">{`// Check stock`}</div>
                <div>
                  <span className="text-purple-400">const</span>
                  <span className="text-zinc-300"> stock </span>
                  <span className="text-zinc-500">= </span>
                  <span className="text-purple-400">await</span>
                  <span className="text-zinc-300"> client</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-yellow-400">inventory</span>
                  <span className="text-zinc-500">.</span>
                  <span className="text-blue-400">getByBranch</span>
                  <span className="text-zinc-300">{"(branchId);"}</span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-3 py-2 rounded-lg">
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-[12px] font-bold">
                    200 OK — Connected
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-tight text-white leading-none mb-6">
            Ready to start building?
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Contact our team to get API access and start integrating Fitbinary
            into your applications.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-900 font-bold text-[15px] hover:bg-zinc-100 active:scale-95 transition-all group"
          >
            Request API Access
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
