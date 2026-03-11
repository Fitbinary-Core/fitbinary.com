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
}

interface NavMenuProps {
  items: NavMenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group flex items-start gap-4 p-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100"
        >
          <div
            className={cn(
              "w-14 h-14 rounded-md flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm",
              item.bg,
              item.color,
            )}
          >
            <item.icon className="w-7 h-7" />
          </div>
          <div className="flex-1 pt-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-gray-900 tracking-tight transition-colors group-hover:text-gray-900">
                {item.name}
              </span>
              <div
                className={cn(
                  "w-1.5 h-1.5 rounded-full opacity-0 transition-opacity group-hover:opacity-100",
                  item.color.replace("text-", "bg-"),
                )}
              />
            </div>
            <p className="text-[14px] text-gray-500 mt-1.5 leading-[1.6] font-medium tracking-tight">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
