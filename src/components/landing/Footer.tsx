import Link from "next/link";
import { Globe } from "lucide-react";
import { SparksDriftingShaders } from "./SparksDriftingShaders";

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div className="flex flex-col gap-4 relative z-10">
    <h4 className="text-[14px] font-bold text-white uppercase tracking-widest">
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-[14px] font-medium text-neutral-400 hover:text-red-600 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 pt-32 pb-14 border-t border-neutral-800 overflow-hidden text-white">
      <SparksDriftingShaders
        className="absolute inset-x-0 bottom-0 h-full z-0 opacity-40 pointer-events-none"
        speed={0.8}
        sparkSize={1.2}
        fireIntensity={0.6}
        smokeIntensity={0.4}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10">
                <img
                  src="/Icon.png"
                  alt="Fitbinary Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-xl font-black tracking-tighter">
                Fitbinary
              </span>
            </div>
            <p className="text-neutral-400 text-sm font-medium leading-[1.8] pr-4">
              The modern infrastructure for the global fitness industry.
              Empowering gyms and more businesses with the technology they need
              to lead.
            </p>
          </div>
          <FooterColumn
            title="Products"
            links={[
              { name: "FitCloud", href: "/fitcloud" },
              { name: "FitStock", href: "/fitstock" },
              { name: "Accounts", href: "https://accounts.fitbinary.com" },
            ]}
          />
          <FooterColumn
            title="Resources"
            links={[
              { name: "Documentation", href: "/docs" },
              { name: "Community", href: "/community" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
            ]}
          />
        </div>
      </div>

      {/* Break line */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-neutral-800 py-8 relative z-10"></div>

      <div className="max-w-6xl px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex items-center gap-8">
          <span className="text-[12px] font-bold text-gray-400">
            © 2026 Fitbinary Inc.
          </span>
          <div className="flex items-center gap-4">
            <div className="w-5 h-5 bg-neutral-900 rounded-lg border border-neutral-800" />
            <div className="w-5 h-5 bg-neutral-900 rounded-lg border border-neutral-800" />
            <div className="w-5 h-5 bg-neutral-900 rounded-lg border border-neutral-800" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-[12px] font-bold text-white">
              English (United States)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
