"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function HeroBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Smooth mouse tracking
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 -z-10 overflow-hidden bg-white"
        >
            {/* 1. Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
                }}
            />

            {/* 2. Ambient Color Blobs (Brand Red & Blue) */}
            <motion.div
                animate={{
                    x: [0, 50, -30, 0],
                    y: [0, -40, 60, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -60, 40, 0],
                    y: [0, 50, -40, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute bottom-[20%] right-[-5%] w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-[140px]"
            />

            {/* 3. Interactive Spotlight Effect */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(600px circle at var(--x) var(--y), rgba(220, 38, 38, 0.05), transparent 80%)",
                }}
            // We'll update variables manually or use a div that follows
            >
                <motion.div
                    style={{
                        position: "absolute",
                        left: mouseX,
                        top: mouseY,
                        width: "800px",
                        height: "800px",
                        background: "radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%)",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                    }}
                />
                <motion.div
                    style={{
                        position: "absolute",
                        left: mouseX,
                        top: mouseY,
                        width: "400px",
                        height: "400px",
                        background: "radial-gradient(circle, rgba(220, 38, 38, 0.03) 0%, transparent 60%)",
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        filter: "blur(40px)",
                    }}
                />
            </motion.div>

            {/* 4. Top Fade Overlay */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />

            {/* 5. Bottom Fade Overlay to blend with next section */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
    );
}
