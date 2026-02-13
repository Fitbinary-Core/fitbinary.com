import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Cloud, Activity, Users, Globe, Smartphone, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

interface FAQItem {
    question: string;
    answer: string;
}

interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
}

interface ProductLandingProps {
    title: string;
    highlight: string;
    description: string;
    features: Feature[];
    faqs: FAQItem[];
    ctaUrl: string;
    ctaText: string;
    stats?: { label: string; value: string }[];
}

export const ProductLanding = ({
    title,
    highlight,
    description,
    features,
    faqs,
    ctaUrl,
    ctaText,
    stats
}: ProductLandingProps) => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 h-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6 leading-[1.05]">
                                {title} <span className="text-blue-600">{highlight}</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={ctaUrl}
                                    className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-2 group shadow-xl shadow-blue-600/20"
                                >
                                    {ctaText}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/get-started"
                                    className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-bold text-lg hover:border-blue-600 transition-all"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-[2rem] border border-blue-100 shadow-2xl flex items-center justify-center p-8">
                                <div className="w-full h-full bg-white rounded-xl shadow-lg border border-gray-50 p-6">
                                    {/* Decorative UI elements */}
                                    <div className="w-full h-8 bg-gray-50 rounded-lg mb-6" />
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="aspect-square bg-blue-50 rounded-xl" />
                                        <div className="aspect-square bg-gray-50 rounded-xl" />
                                        <div className="aspect-square bg-gray-50 rounded-xl" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-3/4 h-3 bg-gray-50 rounded-full" />
                                        <div className="w-1/2 h-3 bg-gray-50 rounded-full" />
                                        <div className="w-5/6 h-3 bg-gray-50 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {stats && (
                <section className="py-20 bg-gray-50 border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                            {stats.map((stat, i) => (
                                <div key={i}>
                                    <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                                    <div className="text-gray-500 font-bold uppercase tracking-wider text-xs">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Features Grid */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Built for Modern High-Growth Fitness Businesses</h2>
                        <p className="text-lg text-gray-600 font-medium">Every tool you need to scale from a single boutique studio to a global fitness franchise.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[24px] hover:border-blue-600 transition-colors group">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section (SEO focused) */}
            <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Revolutionizing How Gyms Operate</h2>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
                                <p>
                                    In the competitive landscape of the modern fitness industry, operational efficiency is no longer optional—it's a requirement for survival. {highlight === "Growth" ? "Gym Management Software" : "Inventory Management"} has evolved from simple spreadsheets to complex ecosystem management.
                                </p>
                                <p>
                                    Fitbinary provides the backbone for your entire operation. Our multi-tenant architecture ensures that whether you manage one location or one hundred, your data remains centralized, secure, and accessible in real-time.
                                </p>
                                <ul className="space-y-4 pt-4">
                                    {[
                                        "Unified Data Architecture",
                                        "Enterprise-Grade Security",
                                        "Global Scalability",
                                        "Real-time Synchronized Processing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-20 bg-blue-500/20 blur-[100px] rounded-full" />
                            <div className="relative bg-zinc-800 border border-white/10 p-8 rounded-3xl">
                                <p className="text-xl italic text-white/90 mb-6">
                                    "Fitbinary transformed our franchise operations. We saw a 40% increase in member retention and cut administrative overhead by half within the first six months."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-zinc-700 rounded-full" />
                                    <div>
                                        <div className="font-bold">Sarah Jenkins</div>
                                        <div className="text-sm text-zinc-500 font-medium">COO, Global Fitness Group</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 lg:py-32 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{faq.question}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="bg-blue-600 rounded-[3rem] py-20 px-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 relative z-10 leading-tight">
                            Ready to scale your <br /> gym business?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 relative z-10">
                            <Link
                                href={ctaUrl}
                                className="px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center gap-2 group shadow-2xl"
                            >
                                {ctaText}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Schema.org JSON-LD for FAQ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
};
