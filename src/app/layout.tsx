import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fitbinary | Enterprise Fitness & Gym Management Platform",
    template: "%s | Fitbinary"
  },
  description: "Scale your fitness business with Fitbinary - The multi-tenant SaaS for gym franchises, smart inventory tracking, and real-time operational excellence.",
  keywords: ["gym management software", "fitness enterprise platform", "multi-tenant fitness saas", "gym inventory management", "fitness business automation", "FitCloud", "FitStock"],
  authors: [{ name: "Fitbinary Inc." }],
  creator: "Fitbinary Inc.",
  publisher: "Fitbinary Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fitbinary.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fitbinary | Enterprise Fitness & Gym Management Platform",
    description: "The modern infrastructure for the global fitness industry. Empowering gyms with the technology they need to lead.",
    url: "https://fitbinary.com",
    siteName: "Fitbinary",
    images: [
      {
        url: "/fitbinary.png",
        width: 1200,
        height: 630,
        alt: "Fitbinary Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitbinary | Future of Fitness Enterprise",
    description: "Scale your fitness business with an API-first platform built for multi-tenant gym franchises.",
    creator: "@fitbinary",
    images: ["/fitbinary.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <OrganizationSchema />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

