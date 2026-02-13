"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown, Cloud, Package } from "lucide-react";
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
          "Gym management software for memberships, billing, and multi-branch operations.",
        href: "/fitcloud",
        icon: Cloud,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        name: "FitStock",
        description:
          "Inventory management for products, stock transfers, and multi-location tracking.",
        href: "/fitstock",
        icon: Package,
        color: "text-red-600",
        bg: "bg-red-50",
      },
    ],
  },
  { title: "Docs", href: "/docs" },
  { title: "Community", href: "/community" },
  { title: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 font-sans",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              className="flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex items-baseline">
                <span className="text-2xl font-black tracking-[-0.05em] text-gray-900 lowercase">
                  fitbinary
                </span>
              </div>

              <div className="flex items-center ml-1 h-6">
                <motion.div
                  className="w-0.75 h-4 bg-blue-600 rounded-full -skew-x-12"
                  whileHover={{ height: 20 }}
                />
                <motion.div
                  className="w-0.75 h-2 bg-red-600 rounded-full -skew-x-12 -ml-px"
                  whileHover={{ height: 16 }}
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-[14px] font-semibold text-gray-600 hover:text-gray-900 rounded-full flex items-center gap-1 transition-all",
                    activeDropdown === item.title && "text-gray-900",
                  )}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        activeDropdown === item.title && "rotate-180",
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-120"
                    >
                      <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-gray-100 p-5 ring-1 ring-black/5 overflow-hidden">
                        <NavMenu items={item.dropdown} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="https://accounts.fitbinary.com/signin"
              className="text-[14px] font-bold text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="group relative px-6 py-2.5 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-600 transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-blue-600 translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
              <span className="relative text-white text-[14px] font-bold">
                Get Started
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
