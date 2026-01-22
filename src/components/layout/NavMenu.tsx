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
        <div className="flex flex-col gap-1">
            {items.map((item) => (
                <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                >
                    <div className={cn(
                        "w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm",
                        item.bg,
                        item.color
                    )}>
                        <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 pt-0.5">
                        <div className="flex items-center gap-2">
                            <span className="text-[15px] font-bold text-gray-900 tracking-tight transition-colors group-hover:text-gray-900">
                                {item.name}
                            </span>
                            <div className={cn(
                                "w-1 h-1 rounded-full opacity-0 transition-opacity group-hover:opacity-100",
                                item.color.replace('text-', 'bg-')
                            )} />
                        </div>
                        <p className="text-[13px] text-gray-500 mt-1 leading-[1.6] font-medium tracking-tight">
                            {item.description}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
