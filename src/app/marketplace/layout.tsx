import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Verified Soil Exchange: Spec-Matched Fill & Surplus | SoilTracker",
  description:
    "Match excess soil by classification, volume, and hauling distance. Every match starts with characterization data, and every completed trade produces a verified custody record automatically.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
