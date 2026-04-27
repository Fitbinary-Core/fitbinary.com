"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cloud, Package, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavMenu } from "@/components/layout/NavMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";

export const navItems = [
  {
    title: "Products",
    href: "#",
    dropdown: [
      {
        name: "FitCloud",
        description:
          "All-in-one gym management platform for memberships, billing, attendance, and multi-branch operations.",
        href: "/fitcloud",
        icon: Cloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
        badge: "Gym Software",
        features: [
          "Member management & digital cards",
          "Automated billing & subscriptions",
          "Attendance tracking & check-ins",
          "Multi-branch & staff management",
        ],
      },
      {
        name: "FitStock",
        description:
          "Smart inventory management for products, purchase orders, inter-branch transfers, and real-time analytics.",
        href: "/fitstock",
        icon: Package,
        color: "text-red-600",
        bg: "bg-red-50",
        badge: "Inventory",
        features: [
          "Real-time stock tracking",
          "Purchase orders & suppliers",
          "Inter-branch transfers",
          "Analytics & low-stock alerts",
        ],
      },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Docs", href: "/docs" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  const handleMouseEnter = (title: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      if (cur < lastScrollY.current || cur < 20) setIsVisible(true);
      else if (cur > lastScrollY.current && cur > 80) setIsVisible(false);
      setIsScrolled(cur > 50);
      lastScrollY.current = cur;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80"
            : "bg-transparent border-b border-transparent",
          !isVisible && "-translate-y-full",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src="/Icon.png"
              alt="Fitbinary"
              className="w-6 h-6 rounded-md object-contain"
            />
            <span className="text-[15px] font-black tracking-tight text-white">
              fitbinary
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-0.5 m-0 p-0 list-none">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-colors duration-150 text-zinc-400 hover:text-white hover:bg-white/8",
                      activeDropdown === item.title && "text-white bg-white/8",
                    )}
                  >
                    {item.title}
                    {item.dropdown && (
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200 opacity-60",
                          activeDropdown === item.title &&
                          "rotate-180 opacity-100",
                        )}
                      />
                    )}
                  </Link>

                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          key="dropdown"
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{
                            duration: 0.18,
                            ease: [0.23, 1, 0.32, 1],
                          }}
                          className="fixed left-0 right-0 top-14 w-full z-50 flex justify-center px-6 pt-1.5"
                        >
                          <div className="w-full max-w-3xl">
                            <div className="bg-white rounded-xl border border-zinc-200/80 overflow-hidden">
                              <NavMenu items={item.dropdown} />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="https://accounts.fitbinary.com/signin"
              className="px-3.5 py-2 text-[13.5px] font-medium rounded-md transition-colors duration-150 text-zinc-400 hover:text-white hover:bg-white/8"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="ml-1.5 px-4 py-2 rounded-lg text-[13.5px] font-bold transition-all duration-150 active:scale-[0.97] bg-white text-zinc-900 hover:bg-zinc-100 shadow-md shadow-black/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
