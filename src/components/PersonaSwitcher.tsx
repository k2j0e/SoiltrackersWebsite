"use client";

import React, { useState } from "react";
import styles from "./PersonaSwitcher.module.css";

interface PersonaSwitcherProps {
  mode?: "north-america" | "bc";
}

export default function PersonaSwitcher({ mode = "north-america" }: PersonaSwitcherProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const naTabs = [
    {
      id: "contractors",
      label: "Contractors & Excavators",
      icon: "ri-truck-line",
      headline: "Stop losing money to lost tickets and disputed invoices.",
      body: "Every load logged automatically as your trucks cross each site boundary. Every invoice backed by a GPS-verified record nobody can argue with. Month-end reconciliation goes from days to minutes — and the exposure from a missing paper trail goes to zero.",
      bullets: [
        {
          title: "Automatic Load Capture",
          desc: "GPS and geofencing log every pickup and drop-off — no driver app, no paper triplicates, no end-of-day data entry.",
        },
        {
          title: "Dispatcher-Run Scheduling",
          desc: "Assign trucks and drivers to projects and send the daily dispatch from one board.",
        },
        {
          title: "Reconciled Invoicing",
          desc: "Match hauler invoices against verified digital logs in minutes, with the evidence attached.",
        },
      ],
      proofBadge: "Every load verified. Every invoice defensible.",
      mockIcon: "ri-bill-line",
      mockTitle: "Automated Hauler Reconciliation",
      mockDetail: "148 loads matched · $42,600 verified · fully reconciled",
      metrics: [
        { value: "Zero Taps", label: "Automatic Capture" },
        { value: "GPS", label: "Every Load Verified" },
        { value: "Minutes", label: "Invoice Reconciliation" },
      ],
    },
    {
      id: "environmental",
      label: "Environmental Professionals & Consultants",
      icon: "ri-flask-line",
      headline: "Your professional sign-off, defensible for years.",
      body: "When your name is on the filing, it's on it long after the trucks are gone. SoilTrackers preserves the full custody record behind every project — sampling, characterization, movements, receiving confirmation — so the file you'd need in an audit already exists, organized, the day the job closes.",
      bullets: [
        {
          title: "Spec & Standard Matching",
          desc: "Pre-screen soil characterization against receiving-site standards before a truck is dispatched.",
        },
        {
          title: "Tamper-Evident Custody Trail",
          desc: "Every load carries its full source history, characterization data, and sign-off chain.",
        },
        {
          title: "One-Click Audit Packages",
          desc: "Export complete, regulator-ready compliance records in PDF/CSV, organized by project.",
        },
      ],
      proofBadge: "The audit file builds itself, load by load.",
      mockIcon: "ri-file-shield-2-line",
      mockTitle: "Regulator-Ready Audit Package",
      mockDetail: "Sampling Plan & Custody Trail attached · 1-Click Export",
      metrics: [
        { value: "1-Click", label: "Audit Export" },
        { value: "Full", label: "Custody History" },
        { value: "PDF/CSV", label: "Regulator-Ready" },
      ],
    },
    {
      id: "receiving",
      label: "Receiving Sites, Pits & Facilities",
      icon: "ri-building-4-line",
      headline: "One bad load can turn your land into a contaminated site.",
      body: "In most North American jurisdictions, liability for contaminated fill follows the land — meaning the receiver carries it even when the generator caused it. SoilTrackers screens every inbound load against your site's standards before a truck is ever dispatched, so non-compliant material is rejected on the platform, not discovered on your property.",
      bullets: [
        {
          title: "Spec-Sheet Due Diligence",
          desc: "Pre-approve incoming material with characterization data attached, before wheels roll.",
        },
        {
          title: "Capacity & Volume Management",
          desc: "Real-time visibility into received volumes, remaining capacity, and threshold warnings.",
        },
        {
          title: "Gatekeeper Verification",
          desc: "Drivers check in via digital geofence. Loads that don't match the approved record don't get in.",
        },
      ],
      proofBadge: "Know what's in every load before it arrives.",
      mockIcon: "ri-shield-keyhole-line",
      mockTitle: "Inbound Gatekeeper Active",
      mockDetail: "Pre-Approved Soil Only · Unmatched Trucks Blocked",
      metrics: [
        { value: "Pre-Screened", label: "Every Inbound Load" },
        { value: "Live", label: "Capacity Tracking" },
        { value: "Geofence", label: "Gate Check-In" },
      ],
    },
  ];

  const bcTabs = [
    {
      id: "contractors",
      label: "Contractors & Generators",
      icon: "ri-truck-line",
      headline: "Stop losing money to lost tickets and disputed invoices.",
      body: "Every load logged automatically as your trucks cross each site boundary. Every invoice backed by a GPS-verified record nobody can argue with. And every movement automatically reconciled against the volumes declared on your SRNF — so you're never over your notified maximum without knowing it.",
      bullets: [
        {
          title: "Automatic Load Capture",
          desc: "GPS and geofencing log every movement. No driver app, no paper triplicates, no lost tickets.",
        },
        {
          title: "SRNF Volume Tracking",
          desc: "Live running totals against the maximum volumes declared for each receiving site in your notification.",
        },
        {
          title: "Reconciled Invoicing",
          desc: "Match hauler invoices against verified digital logs in minutes, with the evidence attached.",
        },
      ],
      proofBadge: "Every movement bound to your SRNF declaration.",
      mockIcon: "ri-file-list-3-line",
      mockTitle: "SRNF #2026-0842 Volume Ledger",
      mockDetail: "4,200 / 5,000 m³ declared · Real-time compliance track",
      metrics: [
        { value: "Zero Taps", label: "Automatic Capture" },
        { value: "Live", label: "SRNF Volume Tally" },
        { value: "Minutes", label: "Invoice Reconciliation" },
      ],
    },
    {
      id: "qps",
      label: "Qualified Professionals (QPs)",
      icon: "ri-microscope-line",
      headline: "Your SRNF signature, defensible for years.",
      body: "When you file a Soil Relocation Notification, your name is on it long after the trucks are gone. SoilTrackers preserves the full custody record behind every notification — the Sample and Analysis Plan, Protocol 19 characterization, every movement, every receiving confirmation — organized and export-ready from the day the job closes. Protocol 19 requires SAPs retained for ten years. Yours will be one click away for all of them.",
      bullets: [
        {
          title: "Protocol 19-Aligned Records",
          desc: "Characterization data, PCOC identification, and SAP documents bound to the source site and every job it produces.",
        },
        {
          title: "SRNF-Bound Movement Logs",
          desc: "Every truckload rolls up to its Match, its Source Job, and its SRNF number. The chain never breaks.",
        },
        {
          title: "One-Click Audit Packages",
          desc: "Regulator-ready exports covering the full SRNF paper trail — SAP, characterization, movements, and receiving confirmations.",
        },
      ],
      proofBadge: "10-Year retention ready · Protocol 19 Compliant",
      mockIcon: "ri-award-line",
      mockTitle: "Protocol 19 Compliance Ledger",
      mockDetail: "SAP, PCOCs & lab analytics locked to source job",
      metrics: [
        { value: "10-Yr", label: "SAP Retention Ready" },
        { value: "P19", label: "Characterization Bound" },
        { value: "1-Click", label: "Audit Package Export" },
      ],
    },
    {
      id: "hvrs",
      label: "Fill Sites & HVRS Operators",
      icon: "ri-landscape-line",
      headline: "One bad load can turn your land into a contaminated site.",
      body: "Under BC's Environmental Management Act, contaminated site liability is absolute and retroactive — the receiver carries it even when the generator caused it. SoilTrackers screens every inbound load against your site's CSR Schedule 3.1 land-use standards before a truck is ever dispatched, so non-compliant material is rejected on the platform, not discovered on your property.",
      bullets: [
        {
          title: "CSR Standards Gatekeeping",
          desc: "Inbound soil matched against your receiving land-use standard (agricultural, residential, commercial, industrial) before acceptance.",
        },
        {
          title: "HVRS Threshold Tracking",
          desc: "Automatic lifetime volume tallies with warnings as you approach the 20,000 m³ registration threshold — no surprise registrations, no accidental violations.",
        },
        {
          title: "ALR-Aware Workflows",
          desc: "ALC Notice of Intent tracking for receiving sites on agricultural land, alongside your provincial obligations.",
        },
      ],
      proofBadge: "CSR Schedule 3.1 & HVRS Threshold Protection",
      mockIcon: "ri-map-pin-range-line",
      mockTitle: "HVRS Cumulative Volume Tracker",
      mockDetail: "14,800 m³ / 20,000 m³ threshold · Alert active",
      metrics: [
        { value: "Sch 3.1", label: "CSR Standards Match" },
        { value: "20k m³", label: "HVRS Threshold Watch" },
        { value: "ALR", label: "Notice of Intent Tracking" },
      ],
    },
  ];

  const tabs = mode === "bc" ? bcTabs : naTabs;
  const current = tabs[activeTab];

  return (
    <div className={styles.wrapper}>
      {/* Navigation Pills */}
      <div className={styles.tabNav}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activeTab === idx ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            <i className={tab.icon}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className={styles.contentGrid}>
        <div className={styles.textSide}>
          <h3 className={styles.headline}>{current.headline}</h3>
          <p className={styles.body}>{current.body}</p>

          <div className={styles.bulletList}>
            {current.bullets.map((b, bIdx) => (
              <div key={bIdx} className={styles.bulletItem}>
                <div className={styles.bulletCheck}>
                  <i className="ri-check-line"></i>
                </div>
                <div>
                  <h5 className={styles.bulletTitle}>{b.title}</h5>
                  <p className={styles.bulletDesc}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.proofBadgeContainer}>
            <span className={styles.proofBadge}>
              <i className="ri-shield-star-fill"></i> {current.proofBadge}
            </span>
          </div>
        </div>

        {/* Visual Mock Card for Active Persona */}
        <div className={styles.cardSide}>
          <div className={styles.visualCard} style={{ position: "relative" }}>
            <span
              aria-label="Illustrative sample data"
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--st-ink-700, #6b7280)",
                border: "1px solid currentColor",
                borderRadius: 4,
                padding: "2px 8px",
                opacity: 0.75,
              }}
            >
              Sample Data
            </span>
            <div className={styles.cardHeader}>
              <div className={styles.cardIconBox}>
                <i className={current.mockIcon}></i>
              </div>
              <div>
                <div className={styles.cardLabel}>{current.label}</div>
                <div className={styles.cardTitle}>{current.mockTitle}</div>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.metricRow}>
                {current.metrics.map((m, mIdx) => (
                  <div key={mIdx} className={styles.metricItem}>
                    <span className={styles.mValue}>{m.value}</span>
                    <span className={styles.mLabel}>{m.label}</span>
                  </div>
                ))}
              </div>

              <div className={styles.statusBox}>
                <div className={styles.statusDot}></div>
                <span>{current.mockDetail}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
