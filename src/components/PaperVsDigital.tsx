"use client";

import React from "react";
import styles from "./PaperVsDigital.module.css";

interface PaperVsDigitalProps {
  mode?: "north-america" | "bc";
}

export default function PaperVsDigital({ mode = "north-america" }: PaperVsDigitalProps) {
  return (
    <div className={styles.contrastWrapper}>
      <div className={styles.header}>
        <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
          THE SHIFT TO DIGITAL CUSTODY
        </div>
        <h2 className="st-h2" style={{ color: "#ffffff", maxWidth: 680, margin: "0 auto 16px" }}>
          The paper trail era is over.
        </h2>
        <p className={styles.subtext}>
          {mode === "bc"
            ? "BC mandates digital tracking with penalties up to $75,000 per violation. Unverified soil is your liability."
            : "Regulatory mandates are tightening across North America. Every unverified load is your liability."}
        </p>
      </div>

      <div className={styles.cardsGrid}>
        {/* Left: The Broken Paper Trail */}
        <div className={styles.paperCard}>
          <div className={styles.cardHeader}>
            <div className={styles.statusBadgeBad}>
              <i className="ri-close-circle-fill"></i> Broken Paper Trail
            </div>
            <span className={styles.cardMeta}>Conventional Operations</span>
          </div>

          <ul className={styles.pointsList}>
            <li className={styles.pointItemBad}>
              <i className="ri-error-warning-line"></i>
              <div>
                <strong>Lost Triplicate Tickets</strong>
                <p>Carbon slips lost in cabs or smeared in the rain.</p>
              </div>
            </li>
            <li className={styles.pointItemBad}>
              <i className="ri-time-line"></i>
              <div>
                <strong>Month-End Invoice Lag</strong>
                <p>Days spent manually matching paper tickets to hauler bills.</p>
              </div>
            </li>
            <li className={styles.pointItemBad}>
              <i className="ri-shield-cross-line"></i>
              <div>
                <strong>Retroactive Liability</strong>
                <p>
                  {mode === "bc"
                    ? "Up to $75,000 per daily violation with zero audit defense."
                    : "Receiver strict liability with no proof of where fill originated."}
                </p>
              </div>
            </li>
          </ul>

          <div className={styles.paperFooter}>
            <span className={styles.footerAlert}>
              <i className="ri-alert-fill"></i> High Regulatory & Financial Risk
            </span>
          </div>
        </div>

        {/* Right: The SoilTracker Closed Loop */}
        <div className={styles.digitalCard}>
          <div className={styles.cardHeader}>
            <div className={styles.statusBadgeGood}>
              <i className="ri-shield-check-fill"></i> The SoilTracker Loop
            </div>
            <span className={styles.cardMetaGood}>Automated Verification</span>
          </div>

          <ul className={styles.pointsList}>
            <li className={styles.pointItemGood}>
              <i className="ri-check-line"></i>
              <div>
                <strong>Automated GPS Geofencing</strong>
                <p>Pickups and drop-offs logged automatically. Zero driver apps.</p>
              </div>
            </li>
            <li className={styles.pointItemGood}>
              <i className="ri-check-line"></i>
              <div>
                <strong>Instant Invoice Reconciliation</strong>
                <p>Match hauler invoices in minutes with tamper-evident proof.</p>
              </div>
            </li>
            <li className={styles.pointItemGood}>
              <i className="ri-check-line"></i>
              <div>
                <strong>1-Click Audit Records</strong>
                <p>
                  {mode === "bc"
                    ? "Full Protocol 19 & SRNF packages ready in one click."
                    : "One unbroken custody certificate from excavation to placement."}
                </p>
              </div>
            </li>
          </ul>

          <div className={styles.digitalFooter}>
            <span className={styles.footerSuccess}>
              <i className="ri-shield-flash-fill"></i> Audit-Ready Proof of Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
