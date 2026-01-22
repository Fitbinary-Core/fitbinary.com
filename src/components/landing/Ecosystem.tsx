"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fadeInUp } from "./animations";

export const Ecosystem = () => {
    return (
        <section className="pb-40 px-6">
            <div className="max-w-6xl mx-auto space-y-40">

                {/* FitCloud Section */}
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
                    <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
                        <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                            FitCloud Platform
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
                            Enterprise management <br />
                            <span className="text-blue-600">at any scale.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                            Unified multi-tenant architecture designed to handle billions of request permutations. Manage membership cycles, branch-specific access controls, and automated financial reconciliation from a single source of truth.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { title: "Multi-branch Sync", description: "Real-time state management across all your locations." },
                                { title: "Advanced Billing", description: "Automated recurring payments with smart retry logic." }
                            ].map(f => (
                                <div key={f.title} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="https://fitcloud.fitbinary.com" className="inline-flex items-center gap-2 mt-12 text-blue-600 font-black text-lg hover:underline underline-offset-8">
                            Learn more about FitCloud <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                    <div className="bg-blue-50/50 rounded-[40px] aspect-[1.2] border border-blue-100 relative overflow-hidden p-12">
                        <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-blue-200/50 p-6">
                            <div className="space-y-4">
                                <div className="w-full h-12 bg-gray-50 rounded-xl" />
                                <div className="flex gap-4">
                                    <div className="w-1/3 h-40 bg-gray-50 rounded-xl" />
                                    <div className="flex-1 h-40 bg-blue-50 rounded-xl" />
                                </div>
                                <div className="w-full h-20 bg-gray-50 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FitStock Section */}
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
                    <div className="order-2 lg:order-1 bg-red-50/50 rounded-[40px] aspect-[1.2] border border-red-100 relative overflow-hidden p-12">
                        <div className="w-full h-full bg-white rounded-2xl shadow-xl border border-red-200/50 p-6">
                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-center">
                                    <div className="w-24 h-6 bg-gray-100 rounded-full" />
                                    <div className="w-12 h-12 bg-red-600 rounded-full" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {[1, 2, 3].map(i => <div key={i} className="h-24 bg-gray-50 rounded-xl" />)}
                                </div>
                                <div className="w-full h-32 bg-gray-50 rounded-xl" />
                            </div>
                        </div>
                    </div>
                    <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="order-1 lg:order-2">
                        <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
                            FitStock Inventory
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
                            Predictive logistics <br />
                            <span className="text-red-600">for supplements.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                            Eliminate supply chain friction. FitStock uses advanced forecasting models to automate purchase orders, manage vendor performance, and optimize warehouse space for max efficiency.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { title: "Smart Replenish", description: "Automated ordering based on usage frequency." },
                                { title: "Supplier Portal", description: "Unified dashboard for all your vendor communication." }
                            ].map(f => (
                                <div key={f.title} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="https://fitstock.fitbinary.com" className="inline-flex items-center gap-2 mt-12 text-red-600 font-black text-lg hover:underline underline-offset-8">
                            Learn more about FitStock <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
