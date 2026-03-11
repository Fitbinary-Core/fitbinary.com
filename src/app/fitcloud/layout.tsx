import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitCloud – Gym Management Software | Fitbinary",
  description:
    "FitCloud is a centralized platform to manage gym memberships, billing, and daily operations across one or multiple locations.",
  alternates: {
    canonical: "https://fitbinary.com/fitcloud",
  },
};

export default function FitCloudLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
