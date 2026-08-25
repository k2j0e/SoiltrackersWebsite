import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a 15-Minute Founder Call | SoilTrackers",
  description:
    "Founding member access is open. Fifteen minutes with the founder — no demo theater, no sales sequence — and you'll know whether SoilTrackers fits your operation.",
  robots: { index: false },
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
