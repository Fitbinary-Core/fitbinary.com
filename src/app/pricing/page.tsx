import { Metadata } from "next";
import Link from "next/link";
import { Check, Info } from "lucide-react";

export const metadata: Metadata = {
    title: "Pricing – Plans & Options | Fitbinary",
    description: "Explore the pricing plans for FitCloud and FitStock. Find the perfect fit for your gym or multi-branch retail operations.",
    alternates: {
        canonical: "https://fitbinary.com/pricing",
    },
};

const tiers = [
    {
        name: "FitCloud Starter",
        description: "Perfect for single-location boutique gyms & studios.",
        price: "$99",
        period: "/month",
        features: [
            "Up to 500 active members",
            "Basic billing & invoicing",
            "Class scheduling",
            "1 location",
            "Email support",
        ],
        cta: "Start Free Trial",
        href: "https://fitcloud.fitbinary.com/signup",
        popular: false,
        color: "blue",
    },
    {
        name: "FitCloud Pro",
        description: "Advanced features for growing fitness centers.",
        price: "$199",
        period: "/month",
        features: [
            "Unlimited members",
            "Advanced billing automation",
            "Trainer & schedule management",
            "Up to 3 locations",
            "Analytics dashboard",
            "Priority 24/7 support",
        ],
        cta: "Start Free Trial",
        href: "https://fitcloud.fitbinary.com/signup",
        popular: true,
        color: "blue",
    },
    {
        name: "FitStock Enterprise",
        description: "Inventory operations for multi-branch retail.",
        price: "Custom",
        period: "",
        features: [
            "Unlimited SKUs",
            "Advanced stock transfers",
            "Multi-location synchronization",
            "Custom reporting",
            "Dedicated account manager",
            "API access",
        ],
        cta: "Contact Sales",
        href: "/contact",
        popular: false,
        color: "red",
    },
];

export default function PricingPage() {
    return (
        <div className="bg-zinc-50 min-h-screen">
            <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
                        Simple Pricing
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8">
                        Choose the right plan <br />
                        <span className="text-gray-500">for your business</span>
                    </h1>
                    <p className="text-xl text-gray-600 font-medium leading-relaxed">
                        Whether you run a single boutique gym or a multi-branch fitness empire, we have a plan that scales with you. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {tiers.map((tier, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-[32px] p-8 shadow-xl ${tier.popular
                                    ? "ring-2 ring-blue-600 scale-105 z-10"
                                    : "ring-1 ring-gray-100"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className={`text-2xl font-black mb-2 ${tier.color === 'red' ? 'text-red-600' : 'text-blue-600'}`}>
                                    {tier.name}
                                </h3>
                                <p className="text-gray-500 text-sm font-medium h-10">
                                    {tier.description}
                                </p>
                            </div>
                            <div className="mb-8">
                                <span className="text-5xl font-black text-gray-900">{tier.price}</span>
                                <span className="text-gray-500 font-medium">{tier.period}</span>
                            </div>
                            <ul className="flex flex-col gap-4 mb-8 h-64">
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 shrink-0 ${tier.color === 'red' ? 'text-red-500' : 'text-blue-500'}`} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href={tier.href}
                                className={`block w-full py-4 rounded-xl text-center font-bold text-lg transition-all ${tier.popular
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                                        : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
