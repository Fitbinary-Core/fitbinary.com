"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Server,
  Eye,
  Key,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/landing/Footer";

const pillars = [
  {
    icon: Lock,
    title: "Data encryption",
    desc: "All data is encrypted at rest using AES-256 and in transit using TLS 1.2+. Member records, payment data, and business information are encrypted at every layer.",
  },
  {
    icon: Server,
    title: "Infrastructure security",
    desc: "Fitbinary runs on hardened cloud infrastructure with network isolation, automatic security patching, and continuous vulnerability scanning.",
  },
  {
    icon: Key,
    title: "Access control",
    desc: "Role-based access control (RBAC) is enforced at every level — from product UI to API endpoints. Every request is authenticated and tenant-scoped.",
  },
  {
    icon: Eye,
    title: "Audit logging",
    desc: "Every significant action across Fitbinary products is logged with user identity, timestamp, and context. Logs are immutable and retained for compliance purposes.",
  },
  {
    icon: ShieldCheck,
    title: "Availability & redundancy",
    desc: "Fitbinary infrastructure is designed for high availability with automatic failover, regular backups, and a 99.9% uptime SLA.",
  },
  {
    icon: AlertTriangle,
    title: "Incident response",
    desc: "We maintain a documented incident response process. Security incidents are assessed, contained, and disclosed to affected customers promptly.",
  },
];

const practices = [
  {
    category: "Authentication",
    items: [
      "Passwords hashed using bcrypt with a high work factor",
      "Session tokens rotated on authentication events",
      "API keys are scoped to tenant and never logged in plaintext",
      "Multi-factor authentication (MFA) available for all accounts",
    ],
  },
  {
    category: "Data handling",
    items: [
      "Member personal data is stored with field-level encryption where applicable",
      "Payment card data is never stored — processed through PCI-compliant providers",
      "Data is logically isolated per tenant with no cross-tenant data access",
      "Data deletion requests are honored within 30 days",
    ],
  },
  {
    category: "Application security",
    items: [
      "Code reviewed before every production deployment",
      "Dependencies audited for known vulnerabilities on a regular schedule",
      "API rate limiting enforced to prevent abuse",
      "Input validation and output encoding against injection attacks",
    ],
  },
  {
    category: "Operational security",
    items: [
      "Principle of least privilege applied across all internal systems",
      "Production access restricted to authorized personnel only",
      "All internal access is logged and monitored",
      "Security training required for all team members",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Hero */}
      <section className="bg-zinc-950 pt-28 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Security
              </span>
            </div>
            <h1 className="text-[2.75rem] sm:text-[3.5rem] font-black tracking-tight leading-[1.05] text-white mb-5">
              Security is a
              <br />
              <span className="text-zinc-400">foundation, not a feature.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed font-medium max-w-xl">
              Fitbinary handles sensitive business and member data. We treat
              security as a fundamental requirement — not an afterthought —
              built into every layer of the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security pillars */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-5">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.15em]">
                Our Approach
              </span>
            </div>
            <h2 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-zinc-900 leading-[1.08] mb-4">
              Six pillars of
              <br />
              platform security.
            </h2>
            <p className="text-zinc-500 text-[16px] leading-relaxed">
              Every layer of Fitbinary — from infrastructure to application
              logic — is built with security as a constraint, not a control.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 hover:border-zinc-300 hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-zinc-600" />
                </div>
                <h3 className="text-[15px] font-bold text-zinc-900 mb-2 capitalize">
                  {title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-5">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-[0.15em]">
                Practices
              </span>
            </div>
            <h2 className="text-3xl lg:text-[2.5rem] font-black tracking-tight text-white leading-[1.08] mb-4">
              What we do
              <br />
              <span className="text-zinc-500">in practice.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {practices.map((section, i) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7"
              >
                <h3 className="text-[13px] font-bold text-zinc-400 uppercase tracking-widest mb-5">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14px] text-zinc-300"
                    >
                      <ShieldCheck className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report a vulnerability */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-6 h-6 text-zinc-500" />
            </div>
            <h2 className="text-2xl lg:text-[1.75rem] font-black tracking-tight text-zinc-900 mb-4">
              Found a security issue?
            </h2>
            <p className="text-zinc-500 text-[15px] leading-relaxed mb-7 max-w-md mx-auto">
              We take vulnerability reports seriously. If you discover a
              security issue in any Fitbinary product, please contact us
              responsibly before public disclosure.
            </p>
            <a
              href="mailto:security@fitbinary.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 text-white font-bold text-[14px] hover:bg-zinc-800 transition-colors active:scale-95 group"
            >
              security@fitbinary.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-[12px] text-zinc-400 mt-5">
              We aim to acknowledge all reports within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
