import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Compliance & Dispatch Platform | SoilTrackers",
  description:
    "Sites, permits, and volume tracking in one real-time dashboard. GPS and geofencing capture every load automatically, and the custody record writes itself load by load.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
