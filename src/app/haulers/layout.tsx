import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Hauling Fleets & Owner-Operators | SoilTrackers",
  description:
    "Get matched to nearby high-volume hauls, dispatch drivers without phone tag, and back every invoice with tamper-evident digital tickets logged in two taps from the cab.",
};

export default function HaulersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
