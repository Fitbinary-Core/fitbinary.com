import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
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
}

interface NavMenuProps {
  items: NavMenuItem[];
}

export function NavMenu({ items }: NavMenuProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-black/60">
      <div className="p-1.5">
        <div
          className={cn(
            "grid gap-px",
            items.length === 2 ? "grid-cols-2" : "grid-cols-3",
          )}
        >
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col gap-4 p-5 rounded-lg hover:bg-zinc-900 transition-colors duration-150"
            >
              <div className="flex items-start justify-between">
                <div
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    item.bg,
                  )}
                >
                  <item.icon className={cn("w-4 h-4", item.color)} />
                </div>
                {item.badge && (
                  <span className="text-[10px] font-medium text-zinc-500 bg-zinc-800/80 border border-zinc-700/50 px-2 py-0.5 rounded-full tracking-wide uppercase">
                    {item.badge}
                  </span>
                )}
              </div>

              <div>
                <p className="text-[13.5px] font-semibold text-white mb-1.5">
                  {item.name}
                </p>
                <p className="text-[12px] text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.features && (
                <div className="space-y-1.5">
                  {item.features.slice(0, 3).map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                      <span className="text-[11px] text-zinc-500">{f}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-1 mt-auto text-[11.5px] font-medium text-zinc-600 group-hover:text-zinc-200 transition-colors">
                <span>Explore {item.name}</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-800 px-5 py-3 flex items-center justify-between">
        <span className="text-[11.5px] text-zinc-600">
          Need a custom solution?
        </span>
        <Link
          href="/contact"
          className="flex items-center gap-1 text-[11.5px] font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Contact sales
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
