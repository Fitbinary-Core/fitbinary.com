"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, MessageSquare, BookOpen, Zap } from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function CommunityPage() {
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
            <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
              Fitbinary Community
            </div>
            <h1 className="text-5xl lg:text-7xl text-gray-900 font-black tracking-tight mb-8">
              Join the fitbinary <br />
              <span className="text-red-600">tech community.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              Connect with gym owners, fitness professionals, and developers
              building the future of fitness technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
              Learn, share, and grow together.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
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
                color: "bg-red-50 text-red-600",
              },
              {
                icon: BookOpen,
                title: "Best Practices",
                description: "Operational guides and industry insights.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: MessageSquare,
                title: "Community Forum",
                description: "Ask questions and share experiences.",
                color: "bg-gray-100 text-gray-900",
              },
              {
                icon: Zap,
                title: "Product Updates",
                description:
                  "Stay informed about new features and improvements.",
                color: "bg-red-50 text-red-600",
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

      {/* Join Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-8">
                Built by fitness operators, for fitness operators.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                Fitbinary is designed by people who understand the challenges of
                running a fitness business. Join our community to share insights
                and learn from others.
              </p>
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 text-red-600 font-black text-lg hover:underline underline-offset-8"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-red-50/50 rounded-[40px] aspect-[1.2] border border-red-100 relative overflow-hidden p-12">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-red-200/50 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-3">
                    <div className="w-48 h-4 bg-gray-100 rounded-full mx-auto" />
                    <div className="w-32 h-4 bg-gray-100 rounded-full mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-8">
            Ready to join the community?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
            Connect with other fitness professionals and start building better
            gym operations.
          </p>
          <Link
            href="/get-started"
            className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/20"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
