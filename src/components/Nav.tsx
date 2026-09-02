"use client";

import React, { useState, useEffect } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const links = [
    { label: "Platform", href: "/platform", icon: "ri-dashboard-line" },
    { label: "Marketplace", href: "/marketplace", icon: "ri-exchange-line" },
    { label: "For Haulers", href: "/haulers", icon: "ri-truck-line" },
    { label: "BC Mandate", href: "/bc", icon: "ri-shield-check-line" },
  ];

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" className={styles.brandLink} onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/ST-LOGO.png"
              alt="SoilTracker"
              width={160}
              height={34}
              className={styles.logoImg}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Desktop CTA & Mobile Toggle */}
        <div className={styles.actions}>
          <Link href={primaryCtaHref} className={`${styles.buttonPrimary} st-button-txt`}>
            {primaryCtaLabel}
          </Link>

          {/* Accessible Hamburger Menu Button for Mobile/Tablet */}
          <button
            type="button"
            className={styles.hamburgerBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <i className={mobileMenuOpen ? "ri-close-line" : "ri-menu-line"}></i>
          </button>
        </div>
      </nav>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-down Mobile Navigation Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}>
        <div className={styles.drawerInner}>
          <div className={styles.drawerLinks}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.drawerLink} ${
                  pathname === link.href ? styles.drawerLinkActive : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className={styles.drawerLinkContent}>
                  <i className={link.icon} style={{ fontSize: 20, color: "var(--st-brand-primary)" }}></i>
                  <span>{link.label}</span>
                </span>
                {link.href === "/bc" ? (
                  <span className={styles.liveIndicator}>Live</span>
                ) : (
                  <i className="ri-arrow-right-s-line" style={{ color: "var(--st-ink-300)" }}></i>
                )}
              </Link>
            ))}
          </div>

          <div className={styles.drawerCtaBox}>
            <Link
              href={primaryCtaHref}
              className={`${styles.drawerCtaBtn} st-button-txt`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="ri-calendar-check-line"></i> {primaryCtaLabel}
            </Link>
            <div className={styles.drawerSubtext}>
              Automated compliance, geofencing &amp; earthworks logistics
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

