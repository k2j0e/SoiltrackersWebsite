"use client";

import React, { useState } from "react";
import styles from "./SolutionsExplorer.module.css";

interface SolutionsExplorerProps {
  mode?: "north-america" | "bc";
}

export default function SolutionsExplorer({ mode = "north-america" }: SolutionsExplorerProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "ticketing",
      tag: "DIGITAL TICKETING",
      title: "Automated Field Ticketing",
      desc: "Instant digital tickets generated at the scale house or field gate. Zero paper triplicates, zero lost tickets, and zero invoice disputes.",
      icon: "ri-ticket-line",
      previewType: "ticket",
      badgeText: "Instant Digital Record",
      statusLabel: "GPS Geofence: Active",
      screenTitle: "E-Ticket #ST-482",
      screenSite: "Excavation Site A to Surrey Receiving",
      screenVolume: "28.4 MT (18.2 m³)",
      step1: "Pickup Logged (08:14 AM)",
      step2: "En Route with GPS Tracking",
      btnLabel: "Download Digital Manifest",
    },
    {
      id: "dispatch",
      tag: "FLEET TELEMATICS",
      title: "Live GPS Fleet Dispatch",
      desc: "Track every truck from excavation to placement. Automatic geofencing logs departure and arrival timestamps for instant invoice reconciliation.",
      icon: "ri-radar-line",
      previewType: "board",
      badgeText: "Real-Time Telematics",
      statusLabel: "14 Active Trucks Tracked",
      screenTitle: "Fleet Dispatch Board",
      screenSite: "Metro Region Operations",
      screenVolume: "148 Loads Today (4,200 m³ Moved)",
      step1: "Geofenced Site Check-ins: 100%",
      step2: "Cycle Time Optimization: +22%",
      btnLabel: "Reconcile Invoices with Zero Disputes",
    },
    {
      id: "qp-engine",
      tag: "COMPLIANCE & AUDIT",
      title: mode === "bc" ? "Protocol 19 & SRNF Engine" : "QP Compliance & Audit Engine",
      desc: mode === "bc" 
        ? "Binds Protocol 19 SAPs, PCOCs, and lab test data directly to your SRNF declaration. 10-year statutory retention ready in one click."
        : "Pre-screen soil tests, attach environmental characterization, and generate one-click regulator-ready audit packages.",
      icon: "ri-microscope-line",
      previewType: "report",
      badgeText: "Audit-Ready Ledger",
      statusLabel: mode === "bc" ? "SRNF #2026-0842 Bound" : "Lab Analytics Verified",
      screenTitle: mode === "bc" ? "Protocol 19 Compliance Package" : "Environmental Custody Ledger",
      screenSite: "Source Site A (Lab File #ENV-9802)",
      screenVolume: "240 m³ Clean Fill Approved",
      step1: "Chemical Testing: CSR Standards Met",
      step2: "Tamper-Evident SHA-256 Hash Generated",
      btnLabel: "Export Full Audit Package (PDF)",
    },
    {
      id: "gatekeeper",
      tag: "RECEIVER PROTECTION",
      title: mode === "bc" ? "HVRS & CSR Gatekeeper" : "Receiving Pit Gatekeeper",
      desc: mode === "bc"
        ? "Screen inbound loads against CSR Schedule 3.1 land-use standards. Cumulative tracking alerts you before approaching the 20,000 m³ HVRS threshold."
        : "Automated gate validation ensures non-compliant or uncharacterized soil is rejected on the platform before wheels ever enter your facility.",
      icon: "ri-shield-keyhole-line",
      previewType: "gate",
      badgeText: "Receiver Liability Shield",
      statusLabel: mode === "bc" ? "HVRS Tally: 14,800 / 20,000 m³" : "Gatekeeper: Active",
      screenTitle: "Inbound Intake Verification",
      screenSite: "Surrey Receiving Facility",
      screenVolume: "Capacity: 74% Utilized",
      step1: "Inbound Check-in: Truck #482 Verified",
      step2: "Spec Verification: 100% Match",
      btnLabel: "Authorize Gate Access",
    },
  ];

  const current = tabs[activeTab];

  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
          PLATFORM SOLUTIONS EXPLORER
        </div>
        <h2 className="st-h2" style={{ color: "var(--st-ink-900)", maxWidth: 740, margin: "0 auto 16px" }}>
          Explore the operating system in action.
        </h2>
        <p className={styles.headerSubtext}>
          Click through each pillar to see how SoilTracker eliminates paper trails across the field, office, and lab.
        </p>
      </div>

      <div className={styles.explorerGrid}>
        {/* Left: Vertical Interactive Tabs */}
        <div className={styles.tabsList}>
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tabCard} ${isActive ? styles.activeTabCard : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className={styles.tabTopRow}>
                  <div className={styles.tabIconBox}>
                    <i className={tab.icon}></i>
                  </div>
                  <span className={styles.tabTag}>{tab.tag}</span>
                </div>
                <h3 className={styles.tabTitle}>{tab.title}</h3>
                <p className={styles.tabDesc}>{tab.desc}</p>
                {isActive && <div className={styles.activeIndicator}></div>}
              </button>
            );
          })}
        </div>

        {/* Right: Dynamic Interactive Preview Display */}
        <div className={styles.previewContainer}>
          <div className={styles.deviceFrame}>
            {/* Top Toolbar */}
            <div className={styles.deviceHeader}>
              <div className={styles.windowDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <div className={styles.deviceTitleBadge}>
                <span className={styles.pulseDot}></span>
                <span>{current.statusLabel}</span>
              </div>
              <span className={styles.deviceCategoryPill}>{current.badgeText}</span>
            </div>

            {/* Screen Content */}
            <div className={styles.screenInner}>
              <div className={styles.screenHeader}>
                <div>
                  <h4 className={styles.screenMainTitle}>{current.screenTitle}</h4>
                  <p className={styles.screenSiteText}>{current.screenSite}</p>
                </div>
                <div className={styles.volumeBadge}>
                  <i className="ri-database-2-line"></i> {current.screenVolume}
                </div>
              </div>

              {/* Dynamic UI Render Based on Type */}
              <div className={styles.visualMockArea}>
                {current.previewType === "ticket" && (
                  <div className={styles.phoneMockUI}>
                    <div className={styles.mapTrackWidget}>
                      <div className={styles.mapRoadLine}>
                        <div className={styles.mapTruckPulse}>
                          <i className="ri-truck-fill"></i>
                        </div>
                      </div>
                      <div className={styles.pinA}><i className="ri-map-pin-2-fill"></i> Source</div>
                      <div className={styles.pinB}><i className="ri-checkbox-circle-fill"></i> Receiver</div>
                    </div>
                  </div>
                )}

                {current.previewType === "board" && (
                  <div className={styles.boardMockUI}>
                    <div className={styles.boardGridMock}>
                      <div className={styles.boardCol}>
                        <span className={styles.colHeader}>Dispatched (4)</span>
                        <div className={styles.boardTruckItem}><span>Truck #482</span> <span>Langley</span></div>
                        <div className={styles.boardTruckItem}><span>Truck #489</span> <span>Surrey</span></div>
                      </div>
                      <div className={styles.boardCol}>
                        <span className={styles.colHeader}>En Route (7)</span>
                        <div className={styles.boardTruckItemHighlight}><span>Truck #501</span> <span>Hwy 1 (GPS Active)</span></div>
                        <div className={styles.boardTruckItem}><span>Truck #512</span> <span>Port Mann</span></div>
                      </div>
                      <div className={styles.boardCol}>
                        <span className={styles.colHeader}>Delivered (137)</span>
                        <div className={styles.boardTruckItemVerified}><span>Truck #476</span> <span><i className="ri-check-line"></i> Signed</span></div>
                      </div>
                    </div>
                  </div>
                )}

                {current.previewType === "report" && (
                  <div className={styles.reportMockUI}>
                    <div className={styles.reportDoc}>
                      <div className={styles.docHeaderRow}>
                        <span className={styles.docStamp}>VERIFIED RECORD</span>
                        <span className={styles.docDate}>Aug 30, 2026</span>
                      </div>
                      <div className={styles.docBarRow}>
                        <div className={styles.docBar} style={{ width: "85%" }}></div>
                        <div className={styles.docBar} style={{ width: "65%" }}></div>
                        <div className={styles.docBar} style={{ width: "95%" }}></div>
                      </div>
                      <div className={styles.auditCertBadge}>
                        <i className="ri-shield-check-fill"></i> 10-Year Statutory Retention Ready
                      </div>
                    </div>
                  </div>
                )}

                {current.previewType === "gate" && (
                  <div className={styles.gateMockUI}>
                    <div className={styles.gateScanner}>
                      <div className={styles.scannerBeam}></div>
                      <div className={styles.gateDetails}>
                        <div className={styles.gateStatusGood}>
                          <i className="ri-shield-check-line"></i> CSR Schedule 3.1 Standards Met
                        </div>
                        <div className={styles.gateMetric}>
                          <span>Remaining Facility Capacity:</span>
                          <strong>5,200 m³</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Milestone Rows */}
              <div className={styles.milestoneList}>
                <div className={styles.milestoneItem}>
                  <i className="ri-checkbox-circle-fill" style={{ color: "var(--st-logo-leaf)" }}></i>
                  <span>{current.step1}</span>
                </div>
                <div className={styles.milestoneItem}>
                  <i className="ri-shield-flash-fill" style={{ color: "var(--st-logo-leaf)" }}></i>
                  <span>{current.step2}</span>
                </div>
              </div>

              {/* Interactive CTA Action Button */}
              <button type="button" className={`${styles.actionButton} st-button-txt`}>
                <i className="ri-cursor-line"></i>
                <span>{current.btnLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
