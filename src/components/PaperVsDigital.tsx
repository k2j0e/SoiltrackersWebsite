"use client";

import React from "react";
import Image from "next/image";
import styles from "./PaperVsDigital.module.css";

interface PaperVsDigitalProps {
  mode?: "north-america" | "bc";
}

export default function PaperVsDigital({ mode = "north-america" }: PaperVsDigitalProps) {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
          THE SHIFT TO DIGITAL CUSTODY
        </div>
        <h2 className="st-h2" style={{ color: "#ffffff", maxWidth: 760, margin: "0 auto" }}>
          The paper trail era is over.
        </h2>
      </div>

      <div className={styles.graphicContainer}>
        <div className={styles.glowBackdrop}></div>
        <div className={styles.imageFrame}>
          <Image
            src="/images/digital-custody-shift.jpg"
            alt="The Shift from Paper Soil Slips to Verified Digital Custody"
            width={1200}
            height={675}
            priority
            className={styles.graphicImage}
          />
        </div>

        {/* Minimalist Micro Badges for Context */}
        <div className={styles.badgeBar}>
          <div className={styles.badgeLeft}>
            <span className={styles.dotRed}></span>
            <span>Broken Paper Trail</span>
          </div>
          <div className={styles.badgeCenter}>
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className={styles.badgeRight}>
            <span className={styles.dotGreen}></span>
            <span>SoilTracker Closed Loop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
