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
                            Operations management <br />
                            <span className="text-blue-600">for growing gyms.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                            A centralized platform to manage memberships, billing, and daily operations across one or multiple locations. Built to stay reliable as your business grows.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Multi-location Control",
                                    description: "Manage members and settings across locations with consistent data."
                                },
                                {
                                    title: "Billing & Subscriptions",
                                    description: "Recurring payments with clear visibility into renewals and failures."
                                }
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
                        <Link
                            href="https://fitcloud.fitbinary.com"
                            className="inline-flex items-center gap-2 mt-12 text-blue-600 font-black text-lg hover:underline underline-offset-8"
                        >
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
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-24 bg-gray-50 rounded-xl" />
                                    ))}
                                </div>
                                <div className="w-full h-32 bg-gray-50 rounded-xl" />
                            </div>
                        </div>
                    </div>
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
                            FitStock Inventory
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
                            Inventory control <br />
                            <span className="text-red-600">built for your business.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                            Track products, monitor usage trends, and manage restocking across locations without manual spreadsheets or guesswork.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Usage-Based Restock",
                                    description: "Order decisions informed by real consumption data."
                                },
                                {
                                    title: "Vendor Management",
                                    description: "Keep supplier details, pricing, and order history in one place."
                                }
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
                        <Link
                            href="https://fitstock.fitbinary.com"
                            className="inline-flex items-center gap-2 mt-12 text-red-600 font-black text-lg hover:underline underline-offset-8"
                        >
                            Learn more about FitStock <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
