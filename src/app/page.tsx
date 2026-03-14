import dynamic from "next/dynamic";
import { Hero } from "@/components/landing/Hero";

const Ecosystem = dynamic(() => import("@/components/landing/Ecosystem"));
const Developers = dynamic(() => import("@/components/landing/Developers"));
const Features = dynamic(() => import("@/components/landing/Features"));
const Footer = dynamic(() => import("@/components/landing/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <Hero />
      <Ecosystem />
      <Developers />
      <Features />
      <Footer />
    </div>
  );
}