"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
          "All-in-one gym management platform for memberships, billing, attendance, and multi-branch operations — designed for modern fitness businesses.",
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
          "Smart inventory management for products, purchase orders, inter-branch stock transfers, and real-time analytics across all your locations.",
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
  { title: "About Us", href: "/about" },
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
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current || currentScrollY < 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-55 border-b bg-neutral-950 border-neutral-800 transition-all duration-300 ease-in-out px-6 py-2 font-sans",
          isScrolled ? "bg-neutral-950 py-2" : "",
          !isVisible && "-translate-y-full",
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
                <span className="text-2xl font-black tracking-[-0.05em] text-white lowercase">
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
            <ul className="flex items-center gap-1 m-0 p-0 list-none">
              {navItems.map((item) => (
                <li
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-[14px] font-semibold text-neutral-400 hover:text-white rounded-full flex items-center gap-1 transition-all",
                      activeDropdown === item.title && "text-white",
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
                  {item.dropdown && (
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: activeDropdown === item.title ? 1 : 0,
                        y: activeDropdown === item.title ? 0 : 10,
                        scale: activeDropdown === item.title ? 1 : 0.98,
                        pointerEvents:
                          activeDropdown === item.title ? "auto" : "none",
                      }}
                      transition={{
                        duration: 0.25,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                      className="fixed left-0 right-0 top-15 w-full z-50 pt-2 flex justify-center px-6"
                    >
                      <div className="w-full max-w-5xl">
                        <div className="bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 ring-1 ring-black/5 overflow-hidden">
                          <NavMenu items={item.dropdown} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side buttons */}
          {/* Paste this <style> once in your layout or globals.css */}
          <style>{`
  @keyframes shimmer {
    0% { transform: translateX(-100%) skewX(-15deg); }
    100% { transform: translateX(250%) skewX(-15deg); }
  }
  @keyframes ring-pulse {
    0%, 100% { box-shadow: 0 0 0 0px rgba(220,38,38,0.4); }
    50% { box-shadow: 0 0 0 6px rgba(220,38,38,0); }
  }
  .get-started-btn {
    animation: ring-pulse 2.4s ease-in-out infinite;
  }
  .get-started-btn:hover {
    animation: none;
  }
  .shimmer-track::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%);
    transform: translateX(-100%) skewX(-15deg);
    transition: none;
  }
  .get-started-btn:hover .shimmer-track::after {
    animation: shimmer 0.65s ease forwards;
  }
  .signin-link {
    position: relative;
  }
  .signin-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0%;
    height: 1.5px;
    background: currentColor;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .signin-link:hover::after {
    width: 100%;
  }
`}</style>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="https://accounts.fitbinary.com/signin"
              className="signin-link text-[14px] font-bold text-neutral-400 hover:text-white transition-colors duration-200"
            >
              Sign in
            </Link>

            <Link
              href="/get-started"
              className="get-started-btn group relative px-6 py-2.5 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-red-600 rounded-full transition-transform duration-200 ease-out group-hover:scale-[1.04]" />
              <div className="shimmer-track absolute inset-0 rounded-full overflow-hidden" />
              <span className="relative flex items-center gap-1.5 text-white text-[14px] font-bold">
                Get Started
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7h12M8 2.5l4.5 4.5L8 11.5"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white rounded-xl hover:bg-neutral-900 transition-colors"
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
