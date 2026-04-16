import {
  ShieldCheck,
  Cpu,
  Database,
  Globe,
  BarChart,
  Layout,
  MessageSquare,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn, StaggerContainer } from "./FadeIn";
import { TopographyBackground } from "./TopographyBackground";

const Feature = ({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) => (
  <FadeIn className="group relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-6 text-white cursor-pointer hover:bg-zinc-800/80 transition-all duration-300 border border-zinc-800/50 hover:border-zinc-700 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]">
    {/* Subtle inner glow on hover */}
    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

    <div
      className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg",
        color.replace("bg-", "bg-opacity-10 bg-").replace("text-", "shadow-"),
      )}
    >
      <Icon className={cn("w-6 h-6", color.split(" ")[1])} />
    </div>
    <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
      {title}
    </h3>
    <p className="text-sm text-neutral-400 leading-relaxed font-medium group-hover:text-neutral-300 transition-colors">
      {description}
    </p>
  </FadeIn>
);

export default function Features() {
  return (
    <section className="relative py-48 bg-neutral-950 px-6 overflow-hidden">
      <TopographyBackground
        lineCount={12}
        lineColor="rgba(255, 255, 255, 0.03)"
        speed={0.3}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl lg:text-[3.25rem] font-black tracking-tight mb-8 text-white leading-[1.1]">
            Core platform capabilities.
          </h2>
          <p className="text-[19px] text-neutral-400 font-medium leading-relaxed">
            Built to support day-to-day gym operations and inventory workflows
            at scale.
          </p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={ShieldCheck}
            title="Secure by Design"
            description="Member, payment, and inventory data handled with modern security practices and encrypted storage."
            color="bg-red-500 text-red-500"
          />

          <Feature
            icon={Cpu}
            title="Fast & Responsive"
            description="Optimized for quick check-ins, billing actions, and daily operational tasks during peak hours."
            color="bg-blue-500 text-blue-500"
          />

          <Feature
            icon={Database}
            title="Reliable Data Sync"
            description="Consistent member and inventory data across branches, even with intermittent connectivity."
            color="bg-neutral-500 text-white"
          />

          <Feature
            icon={Globe}
            title="Multi-Branch Support"
            description="Manage multiple gym locations, staff roles, and shared inventory from one system."
            color="bg-red-500 text-red-500"
          />

          <Feature
            icon={BarChart}
            title="Operational Insights"
            description="Clear reporting on memberships, attendance trends, and product movement."
            color="bg-blue-500 text-blue-500"
          />

          <Feature
            icon={Layout}
            title="Staff & Member Apps"
            description="Mobile-friendly experiences for staff operations and member self-service access."
            color="bg-neutral-500 text-white"
          />

          <Feature
            icon={MessageSquare}
            title="Geo-Fence Attendance"
            description="Location-based check-ins to ensure accurate attendance without manual verification."
            color="bg-red-500 text-red-500"
          />

          <Feature
            icon={Zap}
            title="Quick Setup"
            description="Get started quickly with guided onboarding for gyms, branches, and staff."
            color="bg-blue-500 text-blue-500"
          />
        </StaggerContainer>
      </div>
    </section>
  );
}
