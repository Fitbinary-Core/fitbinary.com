"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, BarChart, Users } from "lucide-react";
import { HeroBackground } from "@/components/ui/HeroBackground";

export const Hero = () => {
    return (
        <section className="relative pt-24 pb-24 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center">
            <HeroBackground />

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 mb-8">
                        <span className="flex w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[12px] font-bold tracking-tight uppercase">Platform v2.0 Live</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
                        Future of <span className="text-red-600">Fitness</span> <br />
                        Enterprise.
                    </h1>
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg font-medium">
                        Scale your fitness business with an API-first platform. Built for multi-tenant gym franchises, smart inventory, and real-time operational excellence.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link
                            href="/get-started"
                            className="group relative px-10 py-5 rounded-full overflow-hidden bg-black text-white hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-black/10"
                        >
                            <div className="absolute inset-0 bg-red-600 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0" />
                            <span className="relative z-10 font-bold text-lg flex items-center gap-2">
                                Launch Platform
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            href="/demo"
                            className="text-lg font-bold text-gray-900 border-2 border-transparent hover:border-gray-900 px-8 py-5 rounded-full transition-all flex items-center gap-2 group"
                        >
                            Request Demo
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </motion.div>

                {/* System Preview Visual */}
                <motion.div
                    initial={{ opacity: 0, x: 30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white rounded-[32px] border border-gray-200 shadow-2xl p-4 overflow-hidden">
                        <div className="bg-gray-50 rounded-2xl w-full aspect-[1.1] border border-gray-100 flex items-center justify-center relative overflow-hidden">
                            {/* Decorative Dashboard Elements */}
                            <div className="absolute top-8 left-8 right-8 h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="w-1/2 h-4 bg-gray-100 rounded-full mb-4" />
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-red-50" />
                                    <div className="w-8 h-8 rounded-lg bg-blue-50" />
                                    <div className="w-8 h-8 rounded-lg bg-gray-100" />
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 w-40 h-48 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                                <div className="w-full h-24 bg-red-600/10 rounded-lg mb-4 flex items-center justify-center">
                                    <BarChart className="w-8 h-8 text-red-600" />
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full mb-2" />
                                <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                            </div>
                            <div className="absolute top-48 right-8 w-48 h-56 bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center">
                                        <Users className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="w-2/3 h-2 bg-gray-100 rounded-full" />
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-2 bg-gray-50 rounded-full" />)}
                                </div>
                            </div>
                            {/* Floating Terminal-like badge */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg px-4 py-2 flex items-center gap-2 shadow-2xl">
                                <Terminal className="w-4 h-4 text-red-500" />
                                <span className="text-white text-[10px] font-mono">fitbinary init success</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
