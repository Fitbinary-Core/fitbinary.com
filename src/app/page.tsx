import { Hero } from "@/components/landing/Hero";
import Ecosystem from "@/components/landing/Ecosystem";
import Developers from "@/components/landing/Developers";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import { PageBorders } from "@/components/layout/PageBorders";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 font-sans text-white selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      <div className="noise-bg" />
      <PageBorders />
      <Hero />
      <Ecosystem />
      <Developers />
      <Features />
      <Footer />
    </div>
  );
}
