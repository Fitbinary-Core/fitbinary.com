"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { navItems } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-[60] lg:hidden"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[380px] bg-white z-[70] shadow-2xl lg:hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <div className="flex items-center group">
                                <motion.div
                                    className="flex items-center gap-1"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <div className="flex items-baseline">
                                        <span className="text-xl font-black tracking-[-0.05em] text-gray-900 lowercase">
                                            fitbinary
                                        </span>
                                    </div>

                                    {/* Tech Accent Bars */}
                                    <div className="flex items-center ml-1 h-5">
                                        <div className="w-[2.5px] h-3.5 bg-blue-600 rounded-full skew-x-[-12deg]" />
                                        <div className="w-[2.5px] h-2 bg-red-600 rounded-full skew-x-[-12deg] -ml-[1px]" />
                                    </div>
                                </motion.div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            <nav className="space-y-8">
                                {navItems.map((item) => (
                                    <div key={item.title} className="space-y-4">
                                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] px-2">
                                            {item.title}
                                        </div>
                                        {item.dropdown ? (
                                            <div className="grid gap-2">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={onClose}
                                                        className="flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 group transition-all"
                                                    >
                                                        <div className={cn("p-2.5 rounded-xl shadow-sm", subItem.bg, subItem.color)}>
                                                            <subItem.icon className="w-5 h-5" />
                                                        </div>
                                                        <div className="flex-1 pt-1">
                                                            <div className="text-[14px] font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                                                {subItem.name}
                                                            </div>
                                                            <p className="text-[12px] text-gray-500 mt-0.5 line-clamp-1 font-medium">
                                                                {subItem.description}
                                                            </p>
                                                        </div>
                                                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900 self-center" />
                                                    </Link>
                                                ))}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 group transition-all"
                                            >
                                                <span className="text-[14px] font-bold text-gray-900">{item.title}</span>
                                                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-900" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col gap-4">
                            <Link
                                href="https://fitcloud.fitbinary.com/login"
                                className="w-full py-4 text-center text-[14px] font-bold text-gray-900 border border-gray-200 bg-white rounded-2xl hover:bg-gray-50 transition-all active:scale-95"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/get-started"
                                className="w-full py-4 text-center bg-red-600 text-white rounded-2xl text-[14px] font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all active:scale-95"
                            >
                                Get Started
                            </Link>
                            <p className="text-center text-[11px] text-gray-400 font-medium px-4">
                                By signing up, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
