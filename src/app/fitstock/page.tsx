import { Metadata } from "next";
import { ProductLanding } from "@/components/landing/ProductLanding";
import { Package, BarChart3, Truck, Zap, ShieldCheck, Database } from "lucide-react";

export const metadata: Metadata = {
    title: "FitStock | Inventory Management Software for Gyms & Supplements",
    description: "Optimize your gym's supply chain with FitStock. The ultimate inventory management software for tracking equipment, supplements, and retail products.",
    keywords: ["gym inventory software", "inventory management for fitness", "supplement tracking system", "gym supply chain management"],
    openGraph: {
        title: "FitStock | Intelligent Gym Inventory Management",
        description: "Real-time stock tracking and supply chain automation designed specifically for the fitness industry.",
        url: "https://fitbinary.com/fitstock",
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
        title: "Real-time Stock Tracking",
        description: "Monitor inventory levels across all your branches in real-time. Get instant notifications when stock is low or nearing expiration.",
        icon: Package,
    },
    {
        title: "Automated Restocking",
        description: "Set smart threshold alerts and automate your vendor orders. Never run out of your best-selling supplements or essential gym supplies.",
        icon: Zap,
    },
    {
        title: "Warehouse Analytics",
        description: "Deep insights into product performance, turnover rates, and wastage. Make data-driven purchasing decisions with predictive analytics.",
        icon: BarChart3,
    },
    {
        title: "Vendor Management",
        description: "Manage all your suppliers in one place. Track lead times, pricing history, and vendor reliability to optimize your supply chain.",
        icon: Truck,
    },
    {
        title: "Multi-Location Support",
        description: "Transfer stock between branches with ease. Full visibility into where your assets are across your entire enterprise.",
        icon: Database,
    },
    {
        title: "Loss Prevention",
        description: "Detailed audit logs and discrepancy reporting to minimize shrinkage and ensure financial accuracy in your retail operations.",
        icon: ShieldCheck,
    },
];

const faqs = [
    {
        question: "Can FitStock track supplement expiration dates?",
        answer: "Yes, FitStock includes batch-level tracking that allows you to monitor expiration dates and receive alerts before products are no longer sellable.",
    },
    {
        question: "Does it integrate with my existing POS system?",
        answer: "FitStock is designed to work seamlessly with the Fitbinary ecosystem (FitCloud) and offers robust APIs for integration with third-party POS systems.",
    },
    {
        question: "Can I manage inventory for multiple gym locations?",
        answer: "Absolutely. FitStock's multi-tenant architecture is built for enterprises, allowing you to manage warehouse and branch-level inventory centrally.",
    },
    {
        question: "Does FitStock support barcode scanning?",
        answer: "Yes, FitStock supports standard barcode scanners and provides a mobile interface for scanning items during receiving and audits.",
    },
    {
        question: "How do automated restocking alerts work?",
        answer: "You can set 'Low Stock' thresholds for each product. When levels fall below this point, FitStock automatically notifies you or can even trigger a purchase order draft.",
    },
];

const stats = [
    { label: "Items Tracked", value: "500k+" },
    { label: "Daily Transactions", value: "100k+" },
    { label: "Inventory Accuracy", value: "99.9%" },
    { label: "Partner Brands", value: "200+" },
];

export default function FitStockPage() {
    return (
        <ProductLanding
            title="Intelligent"
            highlight="Inventory"
            description="FitStock provides the precision you need to manage your gym's assets and retail operations. From supplements to heavy equipment, track everything with enterprise-grade reliability."
            features={features}
            faqs={faqs}
            ctaUrl="https://fitstock.fitbinary.com"
            ctaText="Explore FitStock"
            stats={stats}
        />
    );
}
