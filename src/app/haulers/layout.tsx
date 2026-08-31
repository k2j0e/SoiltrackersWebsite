import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Hauling Fleets & Owner-Operators | SoilTracker",
  description:
    "Get matched to nearby high-volume hauls, dispatch drivers without phone tag, and back every invoice with automated, tamper-evident digital tickets.",
};

export default function HaulersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
