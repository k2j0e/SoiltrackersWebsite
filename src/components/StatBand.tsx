"use client";

import React from "react";
import styles from "./StatBand.module.css";

interface StatItem {
  number: string;
  label: string;
  sublabel?: string;
}

interface StatBandProps {
  heading?: string;
  subheading?: string;
  stats: StatItem[];
}

export default function StatBand({
  heading,
  subheading,
  stats,
}: StatBandProps) {
  return (
    <div className={styles.statBandWrapper}>
      {heading && (
        <div className={styles.headerArea}>
          <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 8 }}>
            FACTUAL COMPLIANCE METRICS
          </div>
          <h3 className={styles.heading}>{heading}</h3>
          {subheading && <p className={styles.subheading}>{subheading}</p>}
        </div>
      )}

      <div className={styles.statsGrid}>
        {stats.map((stat, idx) => (
          <div key={idx} className={styles.statBox}>
            <div className={styles.glowBlob}></div>
            <div className={styles.numberWrapper}>
              <span className={styles.largeNumber}>{stat.number}</span>
            </div>
            <p className={styles.statLabel}>{stat.label}</p>
            {stat.sublabel && <span className={styles.statSublabel}>{stat.sublabel}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
