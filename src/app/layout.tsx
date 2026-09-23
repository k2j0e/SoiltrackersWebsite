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
    default: "Soiltrackers | Soil Chain of Custody & Compliance Platform",
    template: "%s | Soiltrackers",
  },
  description:
    "Prove where every load came from. And where it went. One verified chain of custody from excavation to final placement with automated GPS telematics and BC compliance.",
  applicationName: "Soiltrackers",
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
  authors: [{ name: "Soiltrackers Solutions Inc." }],
  creator: "Soiltrackers Solutions Inc.",
  publisher: "Soiltrackers Solutions Inc.",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.soiltrackers.com",
    siteName: "Soiltrackers",
    title: "Soiltrackers | Soil Chain of Custody & Compliance Platform",
    description:
      "Prove where every load came from. And where it went. One verified chain of custody from excavation to final placement.",
    images: [
      {
        url: "https://www.soiltrackers.com/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Soiltrackers | Soil Chain of Custody & Telematics Platform",
      },
      {
        url: "https://www.soiltrackers.com/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Soiltrackers | Soil Chain of Custody & Telematics Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soiltrackers | Soil Chain of Custody & Compliance Platform",
    description:
      "Prove where every load came from. And where it went. One verified chain of custody from excavation to final placement.",
    images: ["https://www.soiltrackers.com/og-image.jpg"],
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
        <link rel="icon" type="image/svg+xml" href="/icon.svg?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <meta property="og:image" content="https://www.soiltrackers.com/og-image.jpg" />
        <meta property="og:image:secure_url" content="https://www.soiltrackers.com/og-image.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Soiltrackers | Soil Chain of Custody & Telematics Platform" />
        <meta name="twitter:image" content="https://www.soiltrackers.com/og-image.jpg" />
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
