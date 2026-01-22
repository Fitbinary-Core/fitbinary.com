"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Cpu,
    Database,
    Globe,
    BarChart,
    Layout,
    MessageSquare,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeInUp, stagger } from "./animations";

const Feature = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
    <motion.div variants={fadeInUp} className="group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", color)}>
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">{description}</p>
    </motion.div>
);

export const Features = () => {
    return (
        <section className="py-40 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Platform capabilities.</h2>
                    <p className="text-lg text-gray-500 font-medium">Standard features that define high-performance systems.</p>
                </div>
                <motion.div
                    variants={stagger}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <Feature
                        icon={ShieldCheck}
                        title="Military Security"
                        description="AES-256 encryption at rest and in transit for all member data."
                        color="bg-red-50 text-red-600"
                    />
                    <Feature
                        icon={Cpu}
                        title="Edge Scalability"
                        description="Auto-scaling clusters ensure no downtime during peak gym hours."
                        color="bg-blue-50 text-blue-600"
                    />
                    <Feature
                        icon={Database}
                        title="Smart Sync"
                        description="Proprietary database conflict resolution for offline branch use."
                        color="bg-gray-100 text-gray-900"
                    />
                    <Feature
                        icon={Globe}
                        title="Global Coverage"
                        description="Deploy local nodes anywhere in the world for low latency."
                        color="bg-red-50 text-red-600"
                    />
                    <Feature
                        icon={BarChart}
                        title="Live Analytics"
                        description="Streaming insights into member churn and inventory shrinkage."
                        color="bg-blue-50 text-blue-600"
                    />
                    <Feature
                        icon={Layout}
                        title="Custom UI"
                        description="White-labeled portals that match your gym's unique branding."
                        color="bg-gray-100 text-gray-900"
                    />
                    <Feature
                        icon={MessageSquare}
                        title="Support Ops"
                        description="24/7 technical assistance for enterprise infrastructure issues."
                        color="bg-red-50 text-red-600"
                    />
                    <Feature
                        icon={Zap}
                        title="Instant Deploy"
                        description="Go from registration to live branch management in minutes."
                        color="bg-blue-50 text-blue-600"
                    />
                </motion.div>
            </div>
        </section>
    );
};
