"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Key,
  Users,
  Lock,
  Globe,
  UserCheck,
} from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function AccountsPage() {
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
              Fitbinary Accounts
            </div>
            <h1 className="text-5xl lg:text-7xl text-gray-900 font-black tracking-tight mb-8">
              Secure access to <br />
              <span className="text-blue-600">your Fitbinary products.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
              Unified authentication portal for FitCloud and FitStock. Manage
              your organization, team permissions, and security settings from
              one central location.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="https://accounts.fitbinary.com"
                className="group relative px-10 py-5 rounded-full overflow-hidden bg-blue-600 text-white hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-blue-600/20"
              >
                <div className="absolute inset-0 bg-blue-700 -translate-x-100 transition-transform duration-300 group-hover:translate-x-0" />
                <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                  Access Portal
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/get-started"
                className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-blue-600 transition-all"
              >
                Create Account
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
              Centralized authentication.
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              One account for all Fitbinary products with enterprise-grade
              security and role-based access control.
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
                icon: Key,
                title: "Single Sign-On",
                description:
                  "One login for FitCloud, FitStock, and all future Fitbinary products.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Shield,
                title: "Secure Authentication",
                description:
                  "Multi-factor authentication and encrypted sessions to protect your account.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Users,
                title: "Organization Management",
                description:
                  "Multi-tenant support for managing multiple businesses under one account.",
                color: "bg-gray-100 text-gray-900",
              },
              {
                icon: Lock,
                title: "Role-Based Access",
                description:
                  "Granular permissions for admins, managers, and staff across all products.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: UserCheck,
                title: "Team Management",
                description:
                  "Invite staff, assign roles, and manage access across your organization.",
                color: "bg-red-50 text-red-600",
              },
              {
                icon: Globe,
                title: "Global Access",
                description:
                  "Secure access from anywhere with session management and activity logs.",
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
              <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-8">
                Built for security and control.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                Fitbinary Accounts provides the authentication infrastructure
                for your entire business operations with enterprise-grade
                security standards.
              </p>
              <div className="space-y-6">
                {[
                  "Multi-factor authentication support",
                  "Role-based access control (RBAC)",
                  "Organization-based multi-tenancy",
                  "Secure session management",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-900 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-50/50 rounded-[40px] aspect-[1.2] border border-blue-100 relative overflow-hidden p-12">
              <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-blue-200/50 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
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

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need separate accounts for FitCloud and FitStock?",
                a: "No. Fitbinary Accounts provides single sign-on access to all Fitbinary products with one unified account.",
              },
              {
                q: "Is multi-factor authentication supported?",
                a: "Yes. We support various MFA methods including SMS codes, email verification, and authenticator apps.",
              },
              {
                q: "Can I manage multiple businesses?",
                a: "Yes. Fitbinary Accounts supports multi-tenant organization structures for managing multiple businesses.",
              },
              {
                q: "How do staff permissions work?",
                a: "You can assign role-based permissions to staff members with granular control over what they can access in each product.",
              },
              {
                q: "What happens if I forget my password?",
                a: "We provide a secure password recovery process that ensures you can regain access while maintaining security.",
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
              Ready to get started?
            </h2>
            <Link
              href="https://accounts.fitbinary.com"
              className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-2xl relative z-10"
            >
              Access Portal
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
            name: "Fitbinary Accounts",
            applicationCategory: "BusinessApplication",
            description: "Unified authentication portal for Fitbinary products",
            operatingSystem: "Web",
          }),
        }}
      />
    </div>
  );
}
