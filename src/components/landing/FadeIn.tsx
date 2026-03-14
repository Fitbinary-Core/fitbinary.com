"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  variants?: any;
  className?: string;
  viewport?: { once?: boolean; amount?: number };
}

const defaultVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
};

export const FadeIn = ({
  children,
  variants = defaultVariants,
  className,
  viewport = { once: true },
}: FadeInProps) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        whileInView: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
