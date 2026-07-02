"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav({
  primaryCtaLabel = "Get started",
  primaryCtaHref = "#get-started"
}: {
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
}) {
  const pathname = usePathname();

  const links = [
    { label: "Platform", href: "/platform" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "For haulers", href: "/haulers" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/ST-LOGO.png"
            alt="Soiltrackers"
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
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles.actions}>
        <Link href="#signin" className={styles.signIn}>
          Sign in
        </Link>
        <Link href={primaryCtaHref} className={`${styles.buttonPrimary} st-button-txt`}>
          {primaryCtaLabel}
        </Link>
      </div>
    </nav>
  );
}
