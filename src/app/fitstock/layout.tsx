import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FitStock – Inventory Management System | Fitbinary",
  description:
    "FitStock tracks products, monitors usage trends, and manages restocking across retail locations.",
  alternates: {
    canonical: "https://fitbinary.com/fitstock",
  },
};

export default function FitStockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
