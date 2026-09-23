import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Verified Soil Exchange: Spec-Matched Fill & Surplus | Soiltrackers",
  description:
    "Match excess soil by classification, volume, and hauling distance. Every match starts with characterization data, and every completed trade produces a custody record, confirmed and sealed by the parties involved.",
};

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
