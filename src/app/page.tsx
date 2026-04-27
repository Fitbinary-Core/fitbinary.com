import { Hero } from "@/components/landing/Hero";
import StatsBar from "@/components/landing/StatsBar";
import Ecosystem from "@/components/landing/Ecosystem";
import Features from "@/components/landing/Features";
import Developers from "@/components/landing/Developers";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <Hero />
      <StatsBar />
      <Ecosystem />
      <Features />
      <Developers />
      <CTABanner />
      <Footer />
    </div>
  );
}
