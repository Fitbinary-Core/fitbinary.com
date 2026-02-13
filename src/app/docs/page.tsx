"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Book, Terminal, Zap } from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function DocsPage() {
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
              Developer Documentation
            </div>
            <h1 className="text-5xl lg:text-7xl text-gray-900 font-black tracking-tight mb-8">
              Build with <br />
              <span className="text-red-600">Fitbinary APIs.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              Integrate Fitbinary into your custom mobile apps, member portals,
              or corporate systems. RESTful APIs and real-time webhooks for
              complete control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl text-gray-800 font-black tracking-tight mb-6">
              Developer-first infrastructure.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
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
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Terminal,
                title: "SDKs Available",
                description:
                  "Official libraries for Node.js, Python, and more.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Book,
                title: "Full Documentation",
                description:
                  "Detailed guides, code examples, and API references.",
                color: "bg-gray-100 text-gray-900",
              },
              {
                icon: Zap,
                title: "Fast Response",
                description: "Sub-100ms API response times globally.",
                color: "bg-blue-50 text-blue-600",
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

      {/* Code Example */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-8">
                Simple, powerful integration.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                Get started in minutes with our clean API design and
                comprehensive SDKs. Build custom integrations for your specific
                business needs.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-blue-600 font-black text-lg hover:underline underline-offset-8"
              >
                Request API Access <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-zinc-900 rounded-3xl border border-zinc-800 shadow-3xl overflow-hidden font-mono text-sm leading-relaxed">
              <div className="flex items-center gap-2 px-6 py-4 bg-zinc-800/50 border-b border-zinc-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-zinc-500 text-xs ml-4">
                  api_example.js
                </span>
              </div>
              <div className="p-8 text-zinc-300">
                <div className="mb-4">
                  <span className="text-red-400">const</span> fitbinary ={" "}
                  <span className="text-blue-400">require</span>(
                  <span className="text-amber-200">'fitbinary-node'</span>);
                </div>
                <div className="mb-4">
                  <span className="text-red-400">const</span> client ={" "}
                  <span className="text-red-400">new</span> fitbinary.
                  <span className="text-yellow-400">Client</span>({`{`}
                  <div className="pl-6">
                    apiKey:{" "}
                    <span className="text-amber-200">'fb_live_...'</span>,{" "}
                    <br />
                    tenantId: <span className="text-amber-200">'your-gym'</span>
                  </div>
                  {`}`});
                </div>
                <div className="mb-4">
                  <span className="text-red-400">const</span> members ={" "}
                  <span className="text-red-400">await</span> client.members.
                  <span className="text-yellow-400">list</span>();
                </div>
                <div className="text-green-400 opacity-60">
                  {`>`} Connected successfully
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-red-600 font-black tracking-tight mb-8">
            Ready to start building?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            Contact our team to get API access and start integrating Fitbinary
            into your applications.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
          >
            Request API Access
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
