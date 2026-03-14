"use client";

import { Suspense, lazy } from "react";
import { Hero } from "@/components/landing/Hero";

const Ecosystem = lazy(() => import("@/components/landing/Ecosystem"));
const Developers = lazy(() => import("@/components/landing/Developers"));
const Features = lazy(() => import("@/components/landing/Features"));
const Footer = lazy(() => import("@/components/landing/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Hero />

      <Suspense fallback={<div className="h-40" />}>
        <Ecosystem />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <Developers />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <Features />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
