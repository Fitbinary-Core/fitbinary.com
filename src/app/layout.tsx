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
  metadataBase: new URL("https://fitbinary.com"),

  applicationName: "Fitbinary",

  title: {
    default: "Fitbinary | Business Operations Suite for Gyms & Retail",
    template: "%s | Fitbinary",
  },

  description:
    "Fitbinary is a modern business software suite. FitCloud helps gyms manage members, billing, and operations. FitStock manages inventory, purchasing, transfers, and stock analytics across branches.",

  authors: [{ name: "Fitbinary Inc." }],
  creator: "Fitbinary Inc.",
  publisher: "Fitbinary Inc.",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Fitbinary | Business Operations Suite for Fitness Centers & Retail",
    description:
      "Run operations with Fitbinary: FitCloud for gym management and FitStock for inventory management—built for multi-branch businesses.",
    url: "https://fitbinary.com",
    siteName: "Fitbinary",
    images: [
      {
        url: "https://fitbinary.com/fitbinary.png",
        width: 1200,
        height: 630,
        alt: "Fitbinary Suite (FitCloud + FitStock)",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fitbinary | Business Operations Suite for Gyms & Retail",
    description:
      "FitCloud for gym management. FitStock for inventory. One suite for multi-branch operations.",
    images: ["https://fitbinary.com/fitbinary.png"],
    creator: "@fitbinary",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
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
}: {
  children: React.ReactNode;
}) {
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
