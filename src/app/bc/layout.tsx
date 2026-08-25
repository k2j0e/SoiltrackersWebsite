import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "BC Soil Relocation Compliance — SRNF, Protocol 19 & HVRS Tracking | SoilTrackers",
  description:
    "Purpose-built for BC's digital soil tracking mandate. SRNF volume tracking, Protocol 19 characterization records, HVRS threshold monitoring, and CSR Schedule 3.1 gatekeeping — one verified chain of custody under the Environmental Management Act.",
  keywords: [
    "SRNF",
    "soil relocation notification BC",
    "Protocol 19 compliance",
    "high volume receiving site registration",
    "HVRS",
    "BC soil relocation requirements",
    "soil tracking BC",
    "Contaminated Sites Regulation",
  ],
};

export default function BCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
