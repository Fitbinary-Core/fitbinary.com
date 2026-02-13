"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Cloud, Package, Briefcase, Zap, Shield, Users, Target, BarChart3, Globe } from "lucide-react";
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
                description: "A comprehensive multi-tenant platform designed for scaling fitness franchises. Manage multiple branches, staff permissions, and member subscriptions with real-time synchronized data processing.",
                href: "/fitcloud",
                icon: Cloud,
                color: "text-blue-600",
                bg: "bg-blue-50",
            },
            {
                name: "FitStock",
                description: "Intelligent inventory and supply chain management for gym equipment and supplements. Features automated restocking alerts, vendor portals, and detailed warehouse analytics to prevent stockouts.",
                href: "/fitstock",
                icon: Package,
                color: "text-red-600",
                bg: "bg-red-50",
            },
        ],
    },
    {
        title: "Solutions",
        href: "#",
        dropdown: [
            {
                name: "Enterprise Growth",
                description: "Tailored infrastructure for large-scale fitness operations. Integrate custom APIs, manage global financial reporting, and leverage advanced security protocols for enterprise-grade stability.",
                href: "/solutions/enterprise",
                icon: Briefcase,
                color: "text-blue-700",
                bg: "bg-blue-50/50",
            },
            {
                name: "Small Business Power",
                description: "Empowering boutique studios and independent gyms with professional tools. Streamline bookings, automate member onboarding, and manage daily operations without the complex overhead.",
                href: "/solutions/small-gyms",
                icon: Zap,
                color: "text-red-600",
                bg: "bg-red-50/50",
            },
            {
                name: "Strategic Analytics",
                description: "Deep dive into your business performance with interactive dashboards. Visualize member retention trends, revenue growth distributions, and equipment usage frequency to make data-driven decisions.",
                href: "/solutions/analytics",
                icon: BarChart3,
                color: "text-gray-900",
                bg: "bg-gray-100",
            },
        ],
    },
    {
        title: "Resources",
        href: "#",
        dropdown: [
            {
                name: "Developer Hub",
                description: "Access our comprehensive SDKs, detailed API documentation, and sandbox environments. Built by developers, for developers, to ensure seamless integration into your existing ecosystem.",
                href: "/docs",
                icon: Shield,
                color: "text-blue-600",
                bg: "bg-blue-50",
            },
            {
                name: "Success Operations",
                description: "Explore our archive of case studies, operational best practices, and expert-led webinars. Learn how top-tier fitness leaders are leveraging Fitbinary to redefine their member experiences.",
                href: "/community",
                icon: Target,
                color: "text-red-600",
                bg: "bg-red-50",
            },
            {
                name: "Global Community",
                description: "Connect with a worldwide network of fitness professionals. Share insights, collaborate on industry challenges, and stay ahead of global fitness technology trends and innovations.",
                href: "/community",
                icon: Globe,
                color: "text-gray-900",
                bg: "bg-gray-100",
            },
        ],
    },
    { title: "Pricing", href: "/pricing" },
    { title: "About", href: "/about" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    if (pathname === "/StaffLogin" || pathname === "/userlogin") {
        return null;
    }

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
                        : "bg-transparent"
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

                            {/* Premium Tech Accent: Slanted bars representing 'binary' data or movement */}
                            <div className="flex items-center ml-1 h-6">
                                <motion.div
                                    className="w-[3px] h-4 bg-blue-600 rounded-full skew-x-[-12deg]"
                                    whileHover={{ height: 20 }}
                                />
                                <motion.div
                                    className="w-[3px] h-2 bg-red-600 rounded-full skew-x-[-12deg] -ml-[1px]"
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
                                        activeDropdown === item.title && "text-gray-900"
                                    )}
                                >
                                    {item.title}
                                    {item.dropdown && (
                                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", activeDropdown === item.title && "rotate-180")} />
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
                                                ease: [0.23, 1, 0.32, 1] // Custom cubic-bezier for premium feel
                                            }}
                                            className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[480px]"
                                        >
                                            <div className="bg-white rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] border border-gray-100 p-5 ring-1 ring-black/5 overflow-hidden">
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
                            <div className="absolute inset-0 bg-blue-600 translate-x-[100%] transition-transform duration-300 group-hover:translate-x-0" />
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
            <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
        </>
    );
}
