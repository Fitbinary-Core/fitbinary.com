import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavMenuItem {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  badge?: string;
  features?: string[];
  preview?: React.ReactNode;
}

interface NavMenuProps {
  items: NavMenuItem[];
}

function FitCloudPreview() {
  return (
    <div className="w-full rounded-xl border border-zinc-100 bg-zinc-50 overflow-hidden p-3 space-y-2">
      <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-3 py-1.5">
        <svg
          className="w-3 h-3 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span className="text-[11px] text-zinc-400">Search members…</span>
      </div>
      {[
        {
          name: "Aarav Sharma",
          plan: "Premium",
          status: "Active",
          dot: "bg-green-400",
        },
        {
          name: "Priya Thapa",
          plan: "Standard",
          status: "Active",
          dot: "bg-green-400",
        },
        {
          name: "Rajan Karki",
          plan: "Premium",
          status: "Expired",
          dot: "bg-red-400",
        },
      ].map((r) => (
        <div
          key={r.name}
          className="flex items-center justify-between bg-white border border-zinc-100 rounded-lg px-3 py-1.5"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[9px] font-bold text-blue-600">
              {r.name[0]}
            </div>
            <span className="text-[11px] font-medium text-zinc-700">
              {r.name}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-zinc-400">{r.plan}</span>
            <span className={cn("w-1.5 h-1.5 rounded-full", r.dot)} />
          </div>
        </div>
      ))}
    </div>
  );
}

function FitStockPreview() {
  return (
    <div className="w-full rounded-xl border border-zinc-100 bg-zinc-50 overflow-hidden p-3 space-y-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[11px] font-semibold text-zinc-500">
          Stock Overview
        </span>
        <span className="text-[10px] text-red-500 font-medium">
          2 low stock
        </span>
      </div>
      {[
        { name: "Whey Protein 1kg", qty: 142, max: 200, bar: "bg-red-400" },
        { name: "Resistance Bands", qty: 89, max: 100, bar: "bg-green-400" },
        { name: "Creatine 250g", qty: 18, max: 150, bar: "bg-red-400" },
      ].map((i) => (
        <div
          key={i.name}
          className="bg-white border border-zinc-100 rounded-lg px-3 py-2"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] font-medium text-zinc-700">
              {i.name}
            </span>
            <span className="text-[10px] text-zinc-400">{i.qty} units</span>
          </div>
          <div className="w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className={cn("h-full rounded-full", i.bar)}
              style={{ width: `${Math.round((i.qty / i.max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function NavMenu({ items }: NavMenuProps) {
  const previews: Record<string, React.ReactNode> = {
    FitCloud: <FitCloudPreview />,
    FitStock: <FitStockPreview />,
  };

  return (
    <div className="flex flex-col">
      <div
        className={cn(
          "grid gap-3 p-3",
          items.length === 2 ? "grid-cols-2" : "grid-cols-3",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="group flex flex-col gap-3 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 hover:bg-white hover:shadow-md transition-all duration-200"
          >
            <div
              className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
                item.bg,
              )}
            >
              <item.icon className={cn("w-4.5 h-4.5", item.color)} />
            </div>
            <div>
              <p className="text-[15px] font-bold text-zinc-900 mb-1">
                {item.name}
              </p>
              <p className="text-[13px] text-zinc-500 leading-[1.55]">
                {item.description}
              </p>
            </div>
            <div className="mt-1">
              {previews[item.name] ?? (
                <div className="w-full h-28 rounded-xl bg-zinc-100 border border-zinc-200" />
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-zinc-100 px-6 py-3.5 flex items-center justify-center gap-1 text-[13px] text-zinc-500">
        Looking for a custom solution?{" "}
        <Link
          href="/contact"
          className="font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-0.5 transition-colors"
        >
          Let&apos;s talk
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
