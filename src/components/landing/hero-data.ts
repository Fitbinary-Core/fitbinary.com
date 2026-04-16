import { AccountsDemo } from "./demos/AccountsDemo";
import { FitCloudDemo } from "./demos/FitCloudDemo";
import { FitStockDemo } from "./demos/FitStockDemo";

export interface HeroSlide {
  badge: string;
  headline: {
    before: string;
    highlight: string;
    after: string;
  };
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  theme: {
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    highlightText: string;
    buttonBg: string;
    buttonHoverBg: string;
  };
  demo: React.ElementType;
}

export const heroSlides: HeroSlide[] = [
  {
    badge: "Platform v2.0",
    headline: {
      before: "Modern Software for",
      highlight: "Fitness",
      after: "Operations.",
    },
    description:
      "Run memberships, billing, and daily gym operations on a unified platform built for reliability and long-term scale.",
    primaryCTA: {
      text: "Explore FitCloud",
      href: "/fitcloud",
    },
    secondaryCTA: {
      text: "Get Started",
      href: "/get-started",
    },
    theme: {
      badgeBg: "bg-blue-50",
      badgeBorder: "border-blue-900/50",
      badgeText: "text-blue-600",
      highlightText: "text-blue-600",
      buttonBg: "bg-blue-600",
      buttonHoverBg: "bg-blue-700",
    },
    demo: FitCloudDemo,
  },
  {
    badge: "Inventory Module",
    headline: {
      before: "Unified",
      highlight: "Inventory",
      after: "Control.",
    },
    description:
      "Track stock, monitor usage, and manage inventory across locations with clear visibility and consistent data.",
    primaryCTA: {
      text: "Explore FitStock",
      href: "/fitstock",
    },
    secondaryCTA: {
      text: "See Demo",
      href: "/demo",
    },
    theme: {
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-900/50",
      badgeText: "text-red-600",
      highlightText: "text-red-600",
      buttonBg: "bg-black",
      buttonHoverBg: "bg-red-600",
    },
    demo: FitStockDemo,
  },
  {
    badge: "Built for Growing Teams",
    headline: {
      before: "The",
      highlight: "Fitbinary",
      after: "Platform.",
    },
    description:
      "A centralized system for gym management, member records, billing, and operational insights — designed to scale with your business.",
    primaryCTA: {
      text: "Get Started",
      href: "/get-started",
    },
    secondaryCTA: {
      text: "View Pricing",
      href: "/get-started",
    },
    theme: {
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-900/50",
      badgeText: "text-red-600",
      highlightText: "text-red-600",
      buttonBg: "bg-black",
      buttonHoverBg: "bg-red-600",
    },
    demo: AccountsDemo,
  },
  {
    badge: "Developer-Focused",
    headline: {
      before: "Built with",
      highlight: "APIs",
      after: "at the Core.",
    },
    description:
      "Structured APIs and webhooks that support integrations with websites, mobile apps, and internal systems.",
    primaryCTA: {
      text: "API Docs",
      href: "/developers",
    },
    secondaryCTA: {
      text: "Start Building",
      href: "/get-started",
    },
    theme: {
      badgeBg: "bg-red-50",
      badgeBorder: "border-red-900/50",
      badgeText: "text-red-600",
      highlightText: "text-red-600",
      buttonBg: "bg-black",
      buttonHoverBg: "bg-red-600",
    },
    demo: FitCloudDemo,
  },
];
