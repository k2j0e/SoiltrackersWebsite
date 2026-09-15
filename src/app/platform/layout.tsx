import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Compliance & Dispatch Platform | SoilTracker",
  description:
    "Sites, permits, and volume tracking in one real-time dashboard. GPS and geofencing capture every load automatically, and the custody record builds itself load by load. You confirm, it seals.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
