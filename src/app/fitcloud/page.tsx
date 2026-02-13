import { Metadata } from "next";
import { ProductLanding } from "@/components/landing/ProductLanding";
import { Cloud, Users, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "FitCloud | Gym Management Software for Multi-Branch Success",
    description: "Scale your fitness business with FitCloud, the premier gym management software. Manage memberships, branches, and staff with enterprise-grade reliability.",
    keywords: ["gym management software", "fitness business platform", "multi-branch gym software", "member management system"],
    openGraph: {
        title: "FitCloud | Enterprise Gym Management Software",
        description: "The modern infrastructure for the global fitness industry. Empowering gyms with the technology they need to lead.",
        url: "https://fitbinary.com/fitcloud",
        siteName: "Fitbinary",
        images: [
            {
                url: "/fitbinary.png",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const features = [
    {
        title: "Multi-Branch Management",
        description: "Centrally manage multiple locations with global dashboards and branch-specific permissions. Real-time data synchronization across your entire network.",
        icon: Globe,
    },
    {
        title: "Advanced Member CRM",
        description: "Detailed member profiles, subscription tracking, and automated engagement tools to maximize retention and lifetime value.",
        icon: Users,
    },
    {
        title: "Branded Mobile Apps",
        description: "Give your members a premium experience with a fully branded mobile application for bookings, workouts, and payments.",
        icon: Smartphone,
    },
    {
        title: "Financial Automation",
        description: "Automate billing, invoice generation, and revenue reporting. Integrated payment processing for seamless transactions worldwide.",
        icon: Zap,
    },
    {
        title: "Access Control Integration",
        description: "Seamlessly integrate with hardware for 24/7 facility access, turnstiles, and attendance tracking systems.",
        icon: ShieldCheck,
    },
    {
        title: "Enterprise Security",
        description: "Bank-level encryption and data security protocols to protect your business and your members' sensitive information.",
        icon: Cloud,
    },
];

const faqs = [
    {
        question: "Is FitCloud suitable for small boutique studios?",
        answer: "Absolutely. While FitCloud is built to scale for large franchises, its modular nature makes it perfect for boutique studios looking for professional management tools without unnecessary complexity.",
    },
    {
        question: "Do you support international payment gateways?",
        answer: "Yes, FitCloud integrates with major global payment processors including Stripe, PayPal, and regional providers to ensure smooth transactions anywhere in the world.",
    },
    {
        question: "Can I manage different staff roles and permissions?",
        answer: "Yes, our advanced RBAC (Role-Based Access Control) system allows you to define granular permissions for managers, trainers, and reception staff across different branches.",
    },
    {
        question: "Does FitCloud offer a member-facing mobile app?",
        answer: "Yes, we provide customizable mobile applications for both iOS and Android that allow members to book classes, manage subscriptions, and track their fitness journey.",
    },
    {
        question: "How does the multi-branch synchronization work?",
        answer: "All data is stored in our distributed cloud infrastructure, ensuring that changes made at one branch are reflected instantly across your entire organization's dashboard.",
    },
];

const stats = [
    { label: "Active Members", value: "2M+" },
    { label: "Partner Gyms", value: "1,500+" },
    { label: "Uptime Reliability", value: "99.99%" },
    { label: "Countries", value: "45+" },
];

export default function FitCloudPage() {
    return (
        <ProductLanding
            title="Scale Your"
            highlight="Gym Network"
            description="FitCloud is the all-in-one gym management software designed for multi-branch excellence. Automate operations, engage members, and drive growth with the industry's most reliable platform."
            features={features}
            faqs={faqs}
            ctaUrl="https://fitcloud.fitbinary.com"
            ctaText="Explore FitCloud"
            stats={stats}
        />
    );
}
