"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Cloud, Package, Shield } from "lucide-react";
import { fadeInUp, stagger } from "@/components/landing/animations";

export default function GetStartedPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl lg:text-7xl text-gray-900 font-black tracking-tight mb-8">
                            Get started with <br />
                            <span className="text-blue-600">Fitbinary today.</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-12 font-medium max-w-3xl mx-auto">
                            Create your account and start managing your gym operations or inventory with our powerful platform. Choose the product that fits your needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Selection */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
                            Choose your product.
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">
                            Select the Fitbinary product that best suits your business needs. You can always add more products later.
                        </p>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    >
                        {/* FitCloud Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-blue-600 transition-all hover:shadow-2xl"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Cloud className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4">FitCloud</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                Gym management software for memberships, billing, trainers, and multi-branch operations.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Member management",
                                    "Automated billing",
                                    "Multi-branch support",
                                    "Staff & trainer tracking"
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="https://accounts.fitbinary.com/signup?product=fitcloud"
                                className="block w-full text-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                            >
                                Start with FitCloud
                            </Link>
                        </motion.div>

                        {/* FitStock Card */}
                        <motion.div
                            variants={fadeInUp}
                            className="group bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-red-600 transition-all hover:shadow-2xl"
                        >
                            <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Package className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4">FitStock</h3>
                            <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                                Inventory management for products, stock transfers, and multi-location tracking.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Product management",
                                    "Stock receiving & transfers",
                                    "Low-stock alerts",
                                    "Inventory analytics"
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="https://accounts.fitbinary.com/signup?product=fitstock"
                                className="block w-full text-center px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
                            >
                                Start with FitStock
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Already Have Account */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-liner-to-br from-gray-50 to-gray-100 rounded-[3rem] py-16 px-6 text-center border border-gray-200">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Shield className="w-8 h-8 text-gray-900" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                            Already have an account?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 font-medium max-w-2xl mx-auto">
                            Sign in to your Fitbinary account to access FitCloud, FitStock, and manage your organization.
                        </p>
                        <Link
                            href="https://accounts.fitbinary.com/signin"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-2xl"
                        >
                            Sign In
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Fitbinary */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
                            Why choose Fitbinary?
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">
                            Built specifically for fitness businesses with the features you need to scale.
                        </p>
                    </div>

                    <motion.div
                        variants={stagger}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            {
                                title: "Easy to Use",
                                description: "Intuitive interface designed for gym owners and staff, not tech experts."
                            },
                            {
                                title: "Reliable & Secure",
                                description: "Enterprise-grade security and 99.9% uptime for business-critical operations."
                            },
                            {
                                title: "Multi-Branch Ready",
                                description: "Manage multiple locations with centralized control and consistent data."
                            },
                            {
                                title: "Fast Support",
                                description: "Dedicated support team that understands fitness business operations."
                            },
                            {
                                title: "Regular Updates",
                                description: "Continuous improvements and new features based on customer feedback."
                            },
                            {
                                title: "Affordable Pricing",
                                description: "Transparent pricing that scales with your business growth."
                            }
                        ].map((benefit, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl text-gray-900 font-black tracking-tight mb-6">
                        Need help getting started?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 font-medium max-w-2xl mx-auto">
                        Our team is here to help you choose the right product and get your account set up.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="https://accounts.fitbinary.com/signup"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20"
                        >
                            Create Account
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="mailto:support@fitbinary.com"
                            className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-blue-600 transition-all"
                        >
                            Contact Sales
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
