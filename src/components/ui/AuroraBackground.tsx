"use client";

import { motion } from "framer-motion";
import React from "react";

export const AuroraBackground = ({
    children,
    className = "",
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`relative w-full h-full min-h-screen overflow-hidden bg-white text-slate-900 transition-bg ${className}`}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 opacity-40 blur-[80px]">
                    <motion.div
                        animate={{
                            x: [0, 100, -50, 0],
                            y: [0, -50, 100, 0],
                            scale: [1, 1.2, 0.9, 1],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
                    />
                    <motion.div
                        animate={{
                            x: [0, -100, 100, 0],
                            y: [0, 100, -50, 0],
                            scale: [1, 0.9, 1.1, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-[0%] -right-[10%] w-[40%] h-[60%] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
                    />
                    <motion.div
                        animate={{
                            x: [-100, 100, -50, -100],
                            y: [50, -100, 50, 50],
                            scale: [1, 1.3, 0.8, 1],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-[30%] left-[20%] w-[60%] h-[50%] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
                    />
                </div>
            </div>

            <div
                className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-20 h-full w-full">{children}</div>
        </div>
    );
};
