import { Hero } from "@/components/landing/Hero";
import Ecosystem from "@/components/landing/Ecosystem";
import Developers from "@/components/landing/Developers";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import { PageBorders } from "@/components/layout/PageBorders";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900 selection:bg-red-100 selection:text-red-900">
      <PageBorders />
      <Hero />
      <Ecosystem />
      <Developers />
      <Features />
      <Footer />
    </div>
  );
}
