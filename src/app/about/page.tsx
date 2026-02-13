import { Metadata } from "next";
import { ProductLanding } from "@/components/landing/ProductLanding";
import { Target, Users, Zap, Shield, Heart, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "About Fitbinary | Redefining Fitness Technology",
    description: "Learn about Fitbinary's mission to empower the global fitness industry with modern, scalable, and data-driven infrastructure.",
    keywords: ["about fitbinary", "fitness technology mission", "gym management innovators", "fitbinary team"],
};

const features = [
    {
        title: "Our Mission",
        description: "To build the world's most reliable and scalable infrastructure for the fitness industry, empowering owners to focus on what matters: their members.",
        icon: Target,
    },
    {
        title: "Modern Engineering",
        description: "We leverage cutting-edge technology to solve complex operational challenges, from multi-branch synchronization to intelligent inventory forecasting.",
        icon: Zap,
    },
    {
        title: "Global Community",
        description: "Fitbinary powers thousands of gyms across 45+ countries, fostering a worldwide network of fitness professionals and innovators.",
        icon: Globe,
    },
];

const faqs = [
    {
        question: "Where is Fitbinary headquartered?",
        answer: "Fitbinary operates as a global-first organization with key operations centers in major tech hubs, serving customers across five continents.",
    },
    {
        question: "How long has Fitbinary been in operation?",
        answer: "Fitbinary was founded by fitness industry veterans and software engineers to address the lack of enterprise-grade management tools in the market.",
    },
];

export default function AboutPage() {
    return (
        <ProductLanding
            title="The Future of"
            highlight="Fitness"
            description="Fitbinary is more than just software. We are the technological partner for thousands of fitness businesses worldwide, providing the tools they need to lead and scale efficiently."
            features={features}
            faqs={faqs}
            ctaUrl="/get-started"
            ctaText="Partner With Us"
        />
    );
}
