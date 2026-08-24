"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./RegionalStrip.module.css";

export default function RegionalStrip() {
  const [ontarioEmail, setOntarioEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOntarioSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ontarioEmail.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className={styles.regionalSection}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
            REGIONAL COMPLIANCE ARCHITECTURE
          </div>
          <h2 className="st-h2">Compliance is local. We build for your rules.</h2>
          <p className="st-body1" style={{ maxWidth: 640, margin: "16px auto 0", color: "var(--st-ink-700)" }}>
            Soil regulation is written jurisdiction by jurisdiction. So is SoilTracker.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Card 1 — British Columbia (LIVE) */}
          <div className={`${styles.card} ${styles.liveCard}`}>
            <div className={styles.cardTop}>
              <span className={styles.liveBadge}>
                <span className={styles.liveDot}></span> Live
              </span>
              <span className={styles.regionCode}>BC, CANADA</span>
            </div>

            <h3 className={styles.cardTitle}>British Columbia</h3>
            <p className={styles.cardDesc}>
              Purpose-built for the Environmental Management Act, Contaminated Sites Regulation, Protocol 19, and BC&apos;s digital soil tracking mandate.
            </p>

            <div className={styles.specTags}>
              <span>EMA & CSR Compliant</span>
              <span>SRNF & HVRS Tracking</span>
              <span>Protocol 19 SAP</span>
            </div>

            <Link href="/bc" className={`${styles.bcLinkBtn} st-button-txt`}>
              See the BC Platform <i className="ri-arrow-right-line"></i>
            </Link>
          </div>

          {/* Card 2 — Ontario (COMING SOON / WAITLIST) */}
          <div className={`${styles.card} ${styles.waitlistCard}`}>
            <div className={styles.cardTop}>
              <span className={styles.waitlistBadge}>
                <span className={styles.waitlistDot}></span> In Development
              </span>
              <span className={styles.regionCode}>ON, CANADA</span>
            </div>

            <h3 className={styles.cardTitle}>Ontario</h3>
            <p className={styles.cardDesc}>
              Aligned with O. Reg. 406/19 excess soil requirements. Join the waitlist to shape the Ontario rollout and receive early access.
            </p>

            <div className={styles.specTags}>
              <span>O. Reg. 406/19 Aligned</span>
              <span>Excess Soil Registry</span>
              <span>Reuse Site Due Diligence</span>
            </div>

            {submitted ? (
              <div className={styles.successBox}>
                <i className="ri-checkbox-circle-fill"></i>
                <span>You&apos;re on the Ontario waitlist. We&apos;ll be in touch shortly!</span>
              </div>
            ) : (
              <form onSubmit={handleOntarioSubmit} className={styles.waitlistForm}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={ontarioEmail}
                  onChange={(e) => setOntarioEmail(e.target.value)}
                  required
                  className={styles.waitlistInput}
                />
                <button type="submit" className={`${styles.waitlistBtn} st-button-txt`}>
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
