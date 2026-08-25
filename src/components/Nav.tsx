"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav({
  primaryCtaLabel = "Book Founder Call",
  primaryCtaHref = "/get-started",
}: {
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
}) {
  const pathname = usePathname();

  const links = [
    { label: "Platform", href: "/platform" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "For Haulers", href: "/haulers" },
    { label: "BC Mandate", href: "/bc" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" className={styles.brandLink}>
          <Image
            src="/ST-LOGO.png"
            alt="SoilTrackers"
            width={172}
            height={36}
            className={styles.logoImg}
            priority
          />
        </Link>
      </div>

      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.link} ${
              pathname === link.href ? styles.active : ""
            } ${link.href === "/bc" ? styles.bcLink : ""}`}
          >
            {link.label}
            {link.href === "/bc" && <span className={styles.liveIndicator}>Live</span>}
          </Link>
        ))}
      </div>

      <div className={styles.actions}>
        <Link href={primaryCtaHref} className={`${styles.buttonPrimary} st-button-txt`}>
          {primaryCtaLabel}
        </Link>
      </div>
    </nav>
  );
}
