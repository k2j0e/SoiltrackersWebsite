"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PaperVsDigital.module.css";

interface PaperVsDigitalProps {
  mode?: "north-america" | "bc";
}

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

export default function PaperVsDigital({ mode = "north-america" }: PaperVsDigitalProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>("right");

  const hotspots: Hotspot[] = [
    {
      id: "left",
      x: "22%",
      y: "56%",
      title: "Conventional Operations",
      desc: "Lost carbon slips, hours spent disputing hauler bills, and unbacked liability when regulators ask.",
      badge: "Broken Paper Trail",
      badgeType: "bad",
      icon: "ri-error-warning-line",
    },
    {
      id: "center",
      x: "50%",
      y: "50%",
      title: "The Digital Transition",
      desc: "Physical tickets dissolve into tamper-evident data points logged automatically by GPS geofences.",
      badge: "Automated Telematics",
      badgeType: "transition",
      icon: "ri-flashlight-line",
    },
    {
      id: "right",
      x: "78%",
      y: "52%",
      title: "SoilTracker Closed Loop",
      desc: mode === "bc"
        ? "Automated geofence capture, Protocol 19 lab records, and 1-click SRNF audit compliance."
        : "Automated geofence check-in, verified material characterization, and 1-click audit-ready records.",
      badge: "Audit-Ready Defense",
      badgeType: "good",
      icon: "ri-shield-check-fill",
    },
  ];

  return (
    <div className={styles.bannerWrapper}>
      {/* Background Graphic */}
      <div className={styles.imageBackdrop}>
        <Image
          src="/images/digital-custody-shift.jpg"
          alt="The Shift from Paper Soil Slips to Verified Digital Custody"
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
          <span>THE SHIFT TO DIGITAL CUSTODY</span>
        </div>
        <h2 className={styles.monumentalHeading}>
          The paper trail era is over.
        </h2>
        <p className={styles.commercialHook}>
          {mode === "bc"
            ? "Replace lost carbon tickets, disputed hauler invoices, and $75,000 regulatory penalties with one automated closed loop."
            : "Replace lost carbon tickets, disputed hauler invoices, and unbacked liability with one automated closed loop."}
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

      {/* Bottom Visual Funnel into Solutions Explorer */}
      <div className={styles.bottomFunnel}>
        <a href="#solutions-explorer" className={styles.funnelLink}>
          <span>Explore the 4 Pillars of the Platform</span>
          <i className="ri-arrow-down-line"></i>
        </a>
      </div>
    </div>
  );
}
