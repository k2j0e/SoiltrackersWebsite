"use client";

import React, { useState } from "react";
import styles from "./CustodyInspector.module.css";

interface CustodyInspectorProps {
  mode?: "north-america" | "bc";
  onOpenCertificate?: () => void;
}

export default function CustodyInspector({
  mode = "north-america",
  onOpenCertificate,
}: CustodyInspectorProps) {
  const [activeStep, setActiveStep] = useState<number>(2);

  const naSteps = [
    {
      time: "08:14 AM",
      badge: "Verified Source",
      title: "Source Verified",
      site: "Excavation Site A · Langley, BC",
      details: "Soil characterization report attached · 240 m³ approved for relocation",
      icon: "ri-map-pin-2-fill",
      status: "complete",
      tags: ["Lab Characterization on File", "Volume: 240 m³", "Pre-Approved"],
    },
    {
      time: "08:32 AM",
      badge: "Geofence Active",
      title: "En Route Tracked",
      site: "Truck #482 · Apex Hauling Fleet",
      details: "GPS geofence departure confirmed · Driver digital e-signature logged",
      icon: "ri-truck-fill",
      status: "complete",
      tags: ["Driver: Dave M.", "Weight: 28.4 MT", "GPS Verified"],
    },
    {
      time: "09:05 AM",
      badge: "Custody Record Closed",
      title: "Receipt Confirmed",
      site: "Surrey Commercial Development Site",
      details: "Receiving site sign-off · Volume logged against approved capacity · Custody record complete",
      icon: "ri-checkbox-circle-fill",
      status: "verified",
      tags: ["Receiver Sign-off: Complete", "Intake Tally Updated", "Audit-Ready"],
    },
  ];

  const bcSteps = [
    {
      time: "08:14 AM",
      badge: "Schedule 2 Source",
      title: "Source Verified",
      site: "Commercial Excavation · Langley, BC",
      details: "Schedule 2 source site · Protocol 19 characterization attached · SRNF #2026-0842 on file · 240 m³ approved",
      icon: "ri-file-shield-2-fill",
      status: "complete",
      tags: ["Protocol 19 SAP Attached", "SRNF #2026-0842", "QP Sign-Off"],
    },
    {
      time: "08:32 AM",
      badge: "Geofence Logged",
      title: "En Route Tracked",
      site: "Truck #482 · Apex Hauling Fleet",
      details: "Automated geofence departure · Digital manifest bound to SRNF record · GPS timestamped",
      icon: "ri-truck-fill",
      status: "complete",
      tags: ["Driver e-Signature", "Haul License Logged", "GPS Active"],
    },
    {
      time: "09:05 AM",
      badge: "HVRS Tally Updated",
      title: "Receipt Confirmed",
      site: "Surrey Receiving Operation · Surrey, BC",
      details: "Volume logged against SRNF maximum · Lifetime HVRS tally updated (14,280 / 20,000 m³) · Custody record closed",
      icon: "ri-checkbox-circle-fill",
      status: "verified",
      tags: ["CSR Schedule 3.1 Match", "HVRS Intake Logged", "SRS Round-Trip Ready"],
    },
  ];

  const steps = mode === "bc" ? bcSteps : naSteps;

  return (
    <div className={styles.inspectorContainer}>
      <div className={styles.inspectorHeader}>
        <div className={styles.headerTitleGroup}>
          <div className={styles.liveIndicator}>
            <span className={styles.pulseDot}></span>
            <span className={styles.liveText}>LIVE CUSTODY LEDGER</span>
          </div>
          <h3 className={styles.manifestId}>
            Manifest #ST-{mode === "bc" ? "BC-2026-482" : "NA-2026-904"}
          </h3>
        </div>
        <div className={styles.headerStatus}>
          <span className={styles.statusPill}>
            <i className="ri-shield-check-fill"></i>
            {mode === "bc" ? "SRNF Bound & Verified" : "Audit-Ready Chain"}
          </span>
        </div>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`${styles.stepItem} ${
              activeStep === idx ? styles.activeStep : ""
            }`}
            onClick={() => setActiveStep(idx)}
          >
            <div className={styles.stepMarker}>
              <div className={styles.iconCircle}>
                <i className={step.icon}></i>
              </div>
              {idx < steps.length - 1 && <div className={styles.connectingLine}></div>}
            </div>

            <div className={styles.stepCard}>
              <div className={styles.cardTopRow}>
                <span className={styles.timeTag}>{step.time}</span>
                <span className={styles.badge}>{step.badge}</span>
              </div>

              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.siteName}>{step.site}</p>
              <p className={styles.detailsText}>{step.details}</p>

              <div className={styles.tagStrip}>
                {step.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inspectorFooter}>
        <div className={styles.footerNote}>
          <i className="ri-lock-2-line"></i>
          <span>Tamper-evident record · SHA-256 verified custody hash</span>
        </div>
        <button
          type="button"
          onClick={onOpenCertificate}
          className={`${styles.certButton} st-button-txt`}
        >
          <i className="ri-file-download-line"></i>
          <span>Download Sample Chain-of-Custody Certificate (PDF)</span>
        </button>
      </div>
    </div>
  );
}
