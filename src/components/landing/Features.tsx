"use client";

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

const Feature = ({
    icon: Icon,
    title,
    description,
    color
}: {
    icon: any;
    title: string;
    description: string;
    color: string;
}) => (
    <motion.div
        variants={fadeInUp}
        className="group p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100"
    >
        <div
            className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                color
            )}
        >
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">
            {description}
        </p>
    </motion.div>
);

export const Features = () => {
    return (
        <section className="py-40 bg-white px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">
                        Core platform capabilities.
                    </h2>
                    <p className="text-lg text-gray-500 font-medium">
                        Built to support day-to-day gym operations and inventory workflows at scale.
                    </p>
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
                        title="Secure by Design"
                        description="Member, payment, and inventory data handled with modern security practices and encrypted storage."
                        color="bg-red-50 text-red-600"
                    />

                    <Feature
                        icon={Cpu}
                        title="Fast & Responsive"
                        description="Optimized for quick check-ins, billing actions, and daily operational tasks during peak hours."
                        color="bg-blue-50 text-blue-600"
                    />

                    <Feature
                        icon={Database}
                        title="Reliable Data Sync"
                        description="Consistent member and inventory data across branches, even with intermittent connectivity."
                        color="bg-gray-100 text-gray-900"
                    />

                    <Feature
                        icon={Globe}
                        title="Multi-Branch Support"
                        description="Manage multiple gym locations, staff roles, and shared inventory from one system."
                        color="bg-red-50 text-red-600"
                    />

                    <Feature
                        icon={BarChart}
                        title="Operational Insights"
                        description="Clear reporting on memberships, attendance trends, and product movement."
                        color="bg-blue-50 text-blue-600"
                    />

                    <Feature
                        icon={Layout}
                        title="Staff & Member Apps"
                        description="Mobile-friendly experiences for staff operations and member self-service access."
                        color="bg-gray-100 text-gray-900"
                    />

                    <Feature
                        icon={MessageSquare}
                        title="Geo-Fence Attendance"
                        description="Location-based check-ins to ensure accurate attendance without manual verification."
                        color="bg-red-50 text-red-600"
                    />

                    <Feature
                        icon={Zap}
                        title="Quick Setup"
                        description="Get started quickly with guided onboarding for gyms, branches, and staff."
                        color="bg-blue-50 text-blue-600"
                    />
                </motion.div>
            </div>
        </section>
    );
};
