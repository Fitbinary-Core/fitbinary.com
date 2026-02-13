"use client";

import { Hero } from "@/components/landing/Hero";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { Ecosystem } from "@/components/landing/Ecosystem";
import { Developers } from "@/components/landing/Developers";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Hero />
      {/* <TrustedBy /> */}
      <Ecosystem />
      <Developers />
      <Features />
      <Footer />
    </div>
  );
}
