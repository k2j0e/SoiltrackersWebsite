"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HaulerEfficiencyCorridor.module.css";

interface Hotspot {
  id: string;
  x: string;
  y: string;
  title: string;
  desc: string;
  badge: string;
  badgeType: "bad" | "transition" | "good";
  icon: string;
}

export default function HaulerEfficiencyCorridor() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>("right");

  const hotspots: Hotspot[] = [
    {
      id: "left",
      x: "18%",
      y: "66%",
      title: "The Paper Drag: Lost Slips & 60-Day Pay",
      desc: "15+ hours spent collecting and deciphering paper slips from truck cabs. 1–2 disputed loads per job. 45–60 day payment wait while contractors verify slips.",
      badge: "Broken Paper Trail",
      badgeType: "bad",
      icon: "ri-error-warning-line",
    },
    {
      id: "center",
      x: "48%",
      y: "50%",
      title: "Zero-Touch Telematics Corridor",
      desc: "Zero driver apps or cab distraction. Automated departure and arrival timestamps, high-frequency GPS tracking, and real-time backhaul discovery along return routes.",
      badge: "Zero Driver Apps",
      badgeType: "transition",
      icon: "ri-flashlight-line",
    },
    {
      id: "right",
      x: "75%",
      y: "56%",
      title: "Faster Cash & Dispute-Free Invoicing",
      desc: "Invoices sent Day 1 backed by GPS arrival proof. ~180 office hours saved annually. GCs approve and pay weeks faster with zero missing tickets.",
      badge: "Total Fleet Gains",
      badgeType: "good",
      icon: "ri-shield-check-fill",
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.bannerWrapper}>
        {/* Background 3D Graphic */}
        <div className={styles.imageBackdrop}>
          <Image
            src="/images/hauler-efficiency-corridor.jpg"
            alt="Hauler Fleet Efficiency Corridor from Paper Friction to Automated Velocity"
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={styles.backdropImg}
          />
          <div className={styles.topVignette}></div>
          <div className={styles.radialHighlight}></div>
          <div className={styles.edgeFade}></div>
        </div>

        {/* Heroic Overlay Header */}
        <div className={styles.textOverlay}>
          <div className={styles.eyebrowBadge}>
            <span className={styles.pulseDot}></span>
            <span>THE FLEET EFFICIENCY ADVANTAGE</span>
          </div>
          <h2 className={styles.monumentalHeading}>
            Faster billing. Zero disputed loads. More profitable miles.
          </h2>
          <p className={styles.commercialHook}>
            See how automated geofenced load capture eliminates month-end paperwork, protects your billed hours, and accelerates payment cycles across your fleet.
          </p>
        </div>

        {/* Interactive Telemetry Hotspots on the 3D Scene */}
        <div className={styles.hotspotsLayer}>
          {hotspots.map((spot) => {
            const isActive = activeHotspot === spot.id;
            return (
              <div
                key={spot.id}
                className={`${styles.hotspotAnchor} ${isActive ? styles.hotspotActive : ""}`}
                style={{ left: spot.x, top: spot.y }}
                onMouseEnter={() => setActiveHotspot(spot.id)}
                onClick={() => setActiveHotspot(spot.id)}
              >
                <button
                  type="button"
                  className={`${styles.beaconBtn} ${styles[spot.badgeType]}`}
                  aria-label={spot.title}
                >
                  <span className={styles.beaconRing}></span>
                  <i className={spot.icon}></i>
                </button>

                {/* Tooltip Card */}
                <div className={`${styles.tooltipCard} ${isActive ? styles.tooltipVisible : ""}`}>
                  <div className={styles.tooltipHeader}>
                    <span className={`${styles.tooltipBadge} ${styles[spot.badgeType]}`}>
                      {spot.badge}
                    </span>
                  </div>
                  <h4 className={styles.tooltipTitle}>{spot.title}</h4>
                  <p className={styles.tooltipDesc}>{spot.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Prompt */}
        <div className={styles.bottomHint}>
          <span><i className="ri-cursor-line"></i> Hover or tap beacons to inspect each stage of the hauling corridor</span>
        </div>
      </div>

      {/* Grounded Bottom Efficiency Ticker */}
      <div className={styles.efficiencyTicker}>
        <div className={styles.tickerGrid}>
          <div className={styles.tickerCard}>
            <div className={styles.tickerLabel}>Month-End Reconciliation</div>
            <div className={styles.tickerComparison}>
              <span className={styles.tickerOld}>15+ hrs</span>
              <i className="ri-arrow-right-line" style={{ color: "var(--st-brand-primary)" }}></i>
              <span className={styles.tickerNew}>&lt; 15 mins (1-Click)</span>
            </div>
            <div className={styles.tickerSub}>~180 office hours reclaimed annually</div>
          </div>

          <div className={styles.tickerCard}>
            <div className={styles.tickerLabel}>Load Dispute Rate</div>
            <div className={styles.tickerComparison}>
              <span className={styles.tickerOld}>1–2 / job</span>
              <i className="ri-arrow-right-line" style={{ color: "var(--st-brand-primary)" }}></i>
              <span className={styles.tickerNew}>0 Unbacked Loads</span>
            </div>
            <div className={styles.tickerSub}>100% of trips verified by GPS timestamps</div>
          </div>

          <div className={styles.tickerCard}>
            <div className={styles.tickerLabel}>GC Payment Settlement</div>
            <div className={styles.tickerComparison}>
              <span className={styles.tickerOld}>45–60 days</span>
              <i className="ri-arrow-right-line" style={{ color: "var(--st-brand-primary)" }}></i>
              <span className={styles.tickerNew}>14–30 Days</span>
            </div>
            <div className={styles.tickerSub}>Invoices out on Day 1; approved faster</div>
          </div>
        </div>

        <div className={styles.tickerCtaRow}>
          <Link href="/get-started" className={styles.tickerCtaBtn}>
            <i className="ri-truck-line"></i> Put Your Fleet on the Network →
          </Link>
        </div>
      </div>
    </div>
  );
}
