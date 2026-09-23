import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soiltrackers.com"),
  title: {
    default: "SoilTracker | Soil Chain of Custody & Compliance Platform",
    template: "%s | SoilTracker",
  },
  description:
    "Prove where every load came from. And where it went. One verified chain of custody from excavation to final placement with automated GPS telematics and BC compliance.",
  applicationName: "SoilTracker",
  keywords: [
    "soil tracking",
    "soil chain of custody",
    "digital manifest",
    "BC Bill M217 dashcam mandate",
    "Protocol 19",
    "CSR Schedule 3.1",
    "HVRS soil tracking",
    "earthworks telematics",
    "Metro Vancouver soil disposal",
  ],
  authors: [{ name: "SoilTracker Solutions Inc." }],
  creator: "SoilTracker Solutions Inc.",
  publisher: "SoilTracker Solutions Inc.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.soiltrackers.com",
    siteName: "SoilTracker",
    title: "SoilTracker | Soil Chain of Custody & Compliance Platform",
    description:
      "Prove where every load came from. And where it went. One verified chain of custody from excavation to final placement.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SoilTracker | Soil Chain of Custody & Telematics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoilTracker | Soil Chain of Custody & Compliance Platform",
    description:
      "Prove where every load came from. And where it went. One verified chain of custody from excavation to final placement.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Inter+Tight:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
