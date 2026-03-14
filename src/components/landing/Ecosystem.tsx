import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FitCloudDemo } from "./demos/FitCloudDemo";
import { FitStockDemo } from "./demos/FitStockDemo";
import { FadeIn } from "./FadeIn";

export default function Ecosystem() {
  return (
    <section className="pb-40 pt-6 px-6">
      <div className="max-w-6xl mx-auto space-y-30">
        {/* FitCloud Section */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
              FitCloud Platform
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
              Operations management <br />
              <span className="text-blue-600">for growing gyms.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
              A centralized platform to manage memberships, billing, and daily
              operations across one or multiple locations. Built to stay
              reliable as your business grows.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Multi-location Control",
                  description:
                    "Manage members and settings across locations with consistent data.",
                },
                {
                  title: "Billing & Subscriptions",
                  description:
                    "Recurring payments with clear visibility into renewals and failures.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/fitcloud"
              className="inline-flex items-center gap-2 mt-12 text-blue-600 font-black text-lg hover:underline underline-offset-8"
            >
              Learn more about FitCloud <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
        <div className="w-full h-150 sm:h-175">
          <FitCloudDemo />
        </div>

        {/* FitStock Section */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
          <FadeIn className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 text-[12px] font-bold tracking-widest text-red-600 uppercase bg-red-50 rounded-full border border-red-100">
              FitStock Inventory
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight mb-8">
              Inventory control <br />
              <span className="text-red-600">built for your business.</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
              Track products, monitor usage trends, and manage restocking across
              locations without manual spreadsheets or guesswork.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Usage-Based Restock",
                  description:
                    "Order decisions informed by real consumption data.",
                },
                {
                  title: "Vendor Management",
                  description:
                    "Keep supplier details, pricing, and order history in one place.",
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/fitstock"
              className="inline-flex items-center gap-2 mt-12 text-red-600 font-black text-lg hover:underline underline-offset-8"
            >
              Learn more about FitStock <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
        <div className="w-full h-150 sm:h-175">
          <FitStockDemo />
        </div>
      </div>
    </section>
  );
}
