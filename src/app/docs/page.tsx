"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  Book,
  Terminal,
  Zap,
  ChevronRight,
} from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";
import Footer from "@/components/landing/Footer";

export default function DocsPage() {
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
              <span className="flex w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[13px] tracking-tight uppercase">
                Developer Documentation
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-8 text-white leading-[1.1]">
              Build with <br />
              <span className="text-blue-600">Fitbinary APIs.</span>
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Integrate Fitbinary into your custom mobile apps, member portals,
              or corporate systems. RESTful APIs and real-time webhooks for
              complete control.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-liner-to-b from-transparent to-white z-10 pointer-events-none" />
      </section>

      {/* API Features */}
      <section className="py-24 px-6 bg-neutral-950 relative z-20 -top-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-white font-black tracking-tight mb-6">
              Developer-first infrastructure.
            </h2>
            <p className="text-xl text-neutral-400 font-medium">
              Clean SDKs, comprehensive documentation, and fast API response
              times for seamless integration.
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
                icon: Code,
                title: "RESTful APIs",
                description:
                  "Clean, predictable endpoints for all Fitbinary products.",
                color: "bg-blue-50 text-blue-600 shadow-blue-500/10",
              },
              {
                icon: Terminal,
                title: "SDKs Available",
                description:
                  "Official libraries for Node.js, Python, and more.",
                color: "bg-red-50 text-red-600 shadow-red-500/10",
              },
              {
                icon: Book,
                title: "Full Documentation",
                description:
                  "Detailed guides, code examples, and API references.",
                color: "bg-neutral-900 text-white shadow-gray-500/10",
              },
              {
                icon: Zap,
                title: "Fast Response",
                description: "Sub-100ms API response times globally.",
                color: "bg-purple-50 text-purple-600 shadow-purple-500/10",
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

      {/* Code Example */}
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
                Simple, powerful integration.
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed mb-10 font-medium">
                Get started in minutes with our clean API design and
                comprehensive SDKs. Build custom integrations for your specific
                business needs without the hassle.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
              >
                Request API Access <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden group font-mono text-sm leading-relaxed"
            >
              <div className="flex items-center gap-2 px-6 py-4 bg-gray-800/50 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs ml-4 font-bold tracking-wider">
                  api_example.js
                </span>
              </div>
              <div className="p-8 text-gray-300">
                <div className="mb-4">
                  <span className="text-purple-400">const</span> fitbinary ={" "}
                  <span className="text-blue-400">require</span>(
                  <span className="text-green-400">'fitbinary-node'</span>);
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">const</span> client ={" "}
                  <span className="text-purple-400">new</span> fitbinary.
                  <span className="text-yellow-400">Client</span>({`{`}
                  <div className="pl-6 border-l border-gray-800 ml-2 mt-2">
                    apiKey:{" "}
                    <span className="text-green-400">'fb_live_...'</span>,{" "}
                    <br />
                    tenantId: <span className="text-green-400">'your-gym'</span>
                  </div>
                  {`}`});
                </div>
                <div className="mb-4">
                  <span className="text-purple-400">const</span> members ={" "}
                  <span className="text-purple-400">await</span> client.members.
                  <span className="text-yellow-400">list</span>();
                </div>
                <div className="mt-8 flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-2 rounded-lg font-bold">
                  <ChevronRight className="w-4 h-4" /> Connected successfully
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center border-t border-neutral-800 pt-24">
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-8">
            Ready to start building?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 font-medium">
            Contact our team to get API access and start integrating Fitbinary
            into your applications.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-xl shadow-gray-900/20 active:scale-95 group"
          >
            Request API Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
