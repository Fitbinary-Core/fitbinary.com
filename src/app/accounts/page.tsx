import { Metadata } from "next";
import { ProductLanding } from "@/components/landing/ProductLanding";
import { UserCheck, ShieldCheck, Key, Lock, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Fitbinary Accounts | Secure Authentication & Profile Management",
    description: "Manage your Fitbinary identity and security settings. Securely access all Fitbinary products with a single, unified account.",
    keywords: ["gym member portal", "fitness owner login", "secure gym authentication", "unified fitness account"],
    openGraph: {
        title: "Fitbinary Accounts | Unified Access to Fitness Technology",
        description: "The secure portal for managing your Fitbinary identity and accessing our suite of gym management tools.",
        url: "https://fitbinary.com/accounts",
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
        title: "Single Sign-On (SSO)",
        description: "One account, total access. Seamlessly switch between FitCloud, FitStock, and other Fitbinary services without re-authenticating.",
        icon: Key,
    },
    {
        title: "Enterprise-Grade Security",
        description: "Advanced encryption, multi-factor authentication (MFA), and session management to keep your business data and personal profile safe.",
        icon: ShieldCheck,
    },
    {
        title: "Centralized Profile",
        description: "Manage your personal information, communication preferences, and security settings from a single, intuitive dashboard.",
        icon: UserCheck,
    },
    {
        title: "Branch Access Control",
        description: "Owners and managers can centrally control staff access levels across multiple branches and products with granular precision.",
        icon: Lock,
    },
    {
        title: "Compliance Ready",
        description: "Built with GDPR, SOC2, and global data privacy standards in mind, ensuring your organization meets all regulatory requirements.",
        icon: Globe,
    },
    {
        title: "Team Management",
        description: "Invite staff, assign roles, and audit access history. Maintain a secure and accountable environment for your entire team.",
        icon: Users,
    },
];

const faqs = [
    {
        question: "Is multi-factor authentication supported?",
        answer: "Yes, we support various MFA methods including SMS codes, email verification, and authenticator apps to maximize your account security.",
    },
    {
        question: "Can I manage multiple businesses with one account?",
        answer: "Fitbinary Accounts supports multi-tenant organization structures, allowing owners to manage multiple fitness brands or companies under one login.",
    },
    {
        question: "What happens if I forget my password?",
        answer: "We provide a secure, automated recovery process that ensures you can regain access to your account while maintaining strict security protocols.",
    },
    {
        question: "Is my data shared between FitCloud and FitStock?",
        answer: "While your identity is unified, your business data between products remains siloed and secure according to your organization's configuration and our privacy policy.",
    },
    {
        question: "Do you offer API access for custom authentication?",
        answer: "Yes, enterprise customers can leverage our auth APIs and webhooks to integrate Fitbinary Accounts with their existing internal systems or mobile apps.",
    },
];

const stats = [
    { label: "Monthly Logins", value: "10M+" },
    { label: "Security Level", value: "Tier 4" },
    { label: "Auth Latency", value: "<50ms" },
    { label: "Uptime", value: "99.999%" },
];

export default function AccountsPage() {
    return (
        <ProductLanding
            title="Secure Your"
            highlight="Identity"
            description="Fitbinary Accounts is the central authentication core of our entire ecosystem. Securely manage your access, team permissions, and security settings from one unified portal."
            features={features}
            faqs={faqs}
            ctaUrl="https://accounts.fitbinary.com"
            ctaText="Access Portal"
            stats={stats}
        />
    );
}
