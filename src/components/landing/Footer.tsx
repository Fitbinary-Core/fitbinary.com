import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

const nav = {
  Products: [
    { name: "FitCloud", href: "/fitcloud", tag: "Gym Software" },
    { name: "FitStock", href: "/fitstock", tag: "Inventory" },
    { name: "Accounts", href: "https://accounts.fitbinary.com" },
  ],
  Resources: [
    { name: "Documentation", href: "/docs" },
    { name: "Changelog", href: "/changelog" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "https://status.fitbinary.com" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  Legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-b border-zinc-900">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 pr-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Icon.png"
                alt="Fitbinary"
                className="w-6 h-6 rounded-md object-contain"
              />
              <span className="text-[14px] font-black text-white tracking-tight">
                fitbinary
              </span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed mb-6">
              The operations platform for gyms and fitness businesses.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/fitbinary"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-all duration-150"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com/fitbinary"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-all duration-150"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/fitbinary"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-all duration-150"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(nav).map(([title, links]) => (
            <div key={title}>
              <p className="text-[11px] font-semibold text-zinc-500 uppercase tracking-widest mb-4">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-zinc-500 hover:text-zinc-200 transition-colors duration-150"
                    >
                      {link.name}
                      {"tag" in link && link.tag && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                          {link.tag}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-zinc-600">
            © 2026 Fitbinary Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] text-zinc-600">
                All systems operational
              </span>
            </div>
            <Link
              href="/privacy"
              className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
