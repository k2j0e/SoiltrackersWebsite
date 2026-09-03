import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BCDashcamChecker from "@/components/BCDashcamChecker";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BC Commercial Truck Dashcam Mandate (Bill M217) | SoilTracker",
  description: "Turnkey forward-facing dashcam compliance for BC heavy commercial vehicles over 11,793 kg. 1080p road-ahead video, 72+ hour rolling storage, and zero driver cab intrusion with integrated load telematics.",
};

export default function BCPage() {
  return (
    <>
      <Nav primaryCtaLabel="Equip Your Fleet" primaryCtaHref="/get-started" />
      <main className={styles.main}>
        {/* ===================================================================
            SECTION 1 — HERO: BC DASHCAM MANDATE
        =================================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.mandateBadge}>
                <span className={styles.mandateDot}></span>
                <span>BILL M217 &amp; BC COMMERCIAL VEHICLE SAFETY COMPLIANCE</span>
              </div>

              <h1 className="st-h1" style={{ maxWidth: 940, margin: "0 auto 20px" }}>
                British Columbia&apos;s Front-Facing Dashcam Mandate. Turnkey Fleet Compliance.
              </h1>

              <p className={styles.heroSubtitle}>
                British Columbia requires forward-facing dashboard cameras for commercial vehicles with a registered GVWR exceeding <strong>11,793 kg (~26,000 lbs)</strong>. SoilTracker delivers 100% compliant forward-road video, 72+ hour continuous storage, and zero driver cab intrusion — paired with automated GPS load tracking.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>
                  <i className="ri-shield-check-line"></i> Equip Your Fleet Now
                </Link>
                <Link href="#mandate-rules" className={`${styles.buttonSecondary} st-button-txt`}>
                  See Statutory Requirements <i className="ri-arrow-down-line"></i>
                </Link>
              </div>

              {/* Trust Pills */}
              <div className={styles.trustPillsRow}>
                <span className={styles.trustPill}>
                  <i className="ri-check-line"></i> &gt; 11,793 kg GVWR Compliant
                </span>
                <span className={styles.trustPill}>
                  <i className="ri-eye-off-line"></i> Forward Road-Facing Only (Zero Driver Intrusion)
                </span>
                <span className={styles.trustPill}>
                  <i className="ri-history-line"></i> 72-Hour Continuous Storage
                </span>
                <span className={styles.trustPill}>
                  <i className="ri-police-car-line"></i> CVSE Roadside Ready
                </span>
              </div>
            </div>

            {/* In-Cab Windshield HUD Graphic */}
            <div className={styles.hudShowcase}>
              <div className={styles.hudImageWrapper}>
                <Image
                  src="/images/bc-dashcam-mandate.jpg"
                  alt="BC Highway 1 Commercial Dump Truck Forward-Facing Dashcam View"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className={styles.hudImg}
                />
                <div className={styles.hudVignette}></div>

                {/* Telemetry Overlays on Visual */}
                <div className={styles.hudBadgeTopLeft}>
                  <div className={styles.hudLiveDot}></div>
                  <div>
                    <strong>1080p HDR REC · 72H Buffer</strong>
                    <span>Forward Road View · Hwy 1 Fraser Valley</span>
                  </div>
                </div>

                <div className={styles.hudBadgeTopRight}>
                  <i className="ri-shield-check-fill" style={{ color: "#aadd66", fontSize: 18 }}></i>
                  <div>
                    <strong>BC Bill M217 Certified</strong>
                    <span>GVWR &gt; 11,793 kg Baseline Met</span>
                  </div>
                </div>

                <div className={styles.hudBadgeBottomCenter}>
                  <i className="ri-user-unfollow-line" style={{ color: "#38bdf8" }}></i>
                  <span>Zero Driver-Facing Cameras · 100% Driver Cab Privacy Protected</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2 — THE 4 STATUTORY MANDATE REQUIREMENTS
        =================================================================== */}
        <section id="mandate-rules" className={styles.statutorySection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
                LEGAL SPECIFICATIONS
              </div>
              <h2 className="st-h2">The 4 Statutory Mandate Requirements Under BC Law</h2>
              <p className={styles.sectionSubtext}>
                Under Bill M217 and BC commercial transport regulations, heavy commercial carriers must meet four technical and operational standards to maintain active provincial operating authority.
              </p>
            </div>

            <div className={styles.statutoryGrid}>
              <div className={styles.statutoryCard}>
                <div className={styles.cardIconBox}>
                  <i className="ri-scales-3-line"></i>
                </div>
                <span className={styles.cardStep}>Requirement 01</span>
                <h3 className={styles.cardTitle}>Gross Weight Threshold (&gt;11,793 kg)</h3>
                <p className={styles.cardDesc}>
                  Applies to all commercial vehicles with a registered gross vehicle weight rating exceeding 11,793 kg (~26,000 lbs), including tandem dumps, tri-drives, end dumps, transfer trailers, and highway tractors operating on BC public roads.
                </p>
                <div className={styles.cardCheck}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>Includes all Class 7 &amp; 8 earthworks dump trucks</span>
                </div>
              </div>

              <div className={styles.statutoryCard}>
                <div className={styles.cardIconBox} style={{ background: "#ecfdf5", color: "#047857" }}>
                  <i className="ri-camera-lens-line"></i>
                </div>
                <span className={styles.cardStep}>Requirement 02</span>
                <h3 className={styles.cardTitle}>Forward Road-Facing Only</h3>
                <p className={styles.cardDesc}>
                  The camera must continuously record the forward path of travel through the windshield while the truck is in operation. <strong>Driver-facing cameras are NOT mandated</strong>, preventing driver turnover and respecting cab privacy.
                </p>
                <div className={styles.cardCheck}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>Zero in-cab microphone or driver monitoring</span>
                </div>
              </div>

              <div className={styles.statutoryCard}>
                <div className={styles.cardIconBox} style={{ background: "#eff6ff", color: "#1d4ed8" }}>
                  <i className="ri-hd-line"></i>
                </div>
                <span className={styles.cardStep}>Requirement 03</span>
                <h3 className={styles.cardTitle}>1080p HDR + Low-Light Vision</h3>
                <p className={styles.cardDesc}>
                  Hardware must record in digital high-definition (minimum 1080p resolution) with night-vision capabilities to clearly capture license plates, highway signage, and overhead bridge structures in coastal rain, fog, and mountain snow.
                </p>
                <div className={styles.cardCheck}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>Tamper-evident timestamp &amp; GPS watermark</span>
                </div>
              </div>

              <div className={styles.statutoryCard}>
                <div className={styles.cardIconBox} style={{ background: "#fef3c7", color: "#b45309" }}>
                  <i className="ri-hard-drive-2-line"></i>
                </div>
                <span className={styles.cardStep}>Requirement 04</span>
                <h3 className={styles.cardTitle}>72-Hour Continuous Rolling Buffer</h3>
                <p className={styles.cardDesc}>
                  The system must maintain at least 72 hours of uninterrupted rolling footage locally on the vehicle. Video cannot be prematurely overwritten and must be immediately exportable during roadside CVSE inspections or police inquiries.
                </p>
                <div className={styles.cardCheck}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span>Fast USB / Wi-Fi export for roadside CVSE checks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 — INTERACTIVE BC COMPLIANCE CHECKER
        =================================================================== */}
        <section className={styles.checkerSection}>
          <div className={styles.sectionInner}>
            <BCDashcamChecker />
          </div>
        </section>

        {/* ===================================================================
            SECTION 4 — THE 2-IN-1 ADVANTAGE: COMPLIANCE + LOAD TRACKING
        =================================================================== */}
        <section className={styles.advantageSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
                FLEET ROI &amp; AUTOMATION
              </div>
              <h2 className="st-h2">Turn a Mandated Cost into a Profit Center</h2>
              <p className={styles.sectionSubtext}>
                Most dashcam vendors charge you monthly fees just to check a legal compliance box. SoilTracker bundles the mandate-compliant camera with automated geofenced load tracking to eliminate lost paper tickets and accelerate billing.
              </p>
            </div>

            <div className={styles.advantageGrid}>
              <div className={styles.advantageCard}>
                <div className={styles.advantageHead}>
                  <span className={styles.advantageTag} style={{ background: "#eff6ff", color: "#1d4ed8" }}>
                    LEGAL COMPLIANCE
                  </span>
                  <h3 className={styles.advantageTitle}>BC Bill M217 Protection</h3>
                </div>
                <ul className={styles.advantageList}>
                  <li>
                    <i className="ri-checkbox-circle-fill"></i>
                    <div>
                      <strong>Pass CVSE Roadside Inspections</strong>
                      <span>Compliant forward road video and 72-hour footage buffer ready for inspection officers on demand.</span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-fill"></i>
                    <div>
                      <strong>Protect Your NSC Carrier Safety Profile</strong>
                      <span>Avoid safety demerits, fleet audit downgrades, and provincial operating license suspensions.</span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-fill"></i>
                    <div>
                      <strong>Exonerate Drivers from False Claims</strong>
                      <span>Clear 1080p road video proves lane discipline and defends against fraudulent claims in highway incidents.</span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-fill"></i>
                    <div>
                      <strong>Retain Drivers with Zero Cab Intrusion</strong>
                      <span>No inward cameras, no facial AI tracking, no audio recording. Drivers feel respected and stay with your fleet.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={`${styles.advantageCard} ${styles.advantageCardSoilTracker}`}>
                <div className={styles.advantageHead}>
                  <span className={styles.advantageTag} style={{ background: "rgba(170, 221, 102, 0.2)", color: "#aadd66" }}>
                    OPERATIONAL ROI
                  </span>
                  <h3 className={styles.advantageTitle} style={{ color: "#ffffff" }}>SoilTracker Load Telematics</h3>
                </div>
                <ul className={styles.advantageList}>
                  <li>
                    <i className="ri-checkbox-circle-fill" style={{ color: "#aadd66" }}></i>
                    <div>
                      <strong style={{ color: "#ffffff" }}>Automated Geofenced Load Logging</strong>
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>Every load pickup and drop-off is logged by GPS geofence with zero driver input or phone apps.</span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-fill" style={{ color: "#aadd66" }}></i>
                    <div>
                      <strong style={{ color: "#ffffff" }}>Zero Disputed Loads at Month-End</strong>
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>Every billed load is backed by GPS departure and gate arrival proof that general contractors cannot dispute.</span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-fill" style={{ color: "#aadd66" }}></i>
                    <div>
                      <strong style={{ color: "#ffffff" }}>Accelerate Cash Flow (14–30 Days)</strong>
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>Export 1-click digital manifests on Day 1. Stop waiting 45–60 days while contractors hunt down missing carbon slips.</span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-checkbox-circle-fill" style={{ color: "#aadd66" }}></i>
                    <div>
                      <strong style={{ color: "#ffffff" }}>Backhaul &amp; Route Matching</strong>
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>Discover nearby surplus aggregate and clean fill along return corridors to eliminate empty deadhead miles.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5 — CARRIER RISK: THE COST OF NON-COMPLIANCE
        =================================================================== */}
        <section className={styles.riskSection}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <div className="st-sub-caps" style={{ color: "#b91c1c", marginBottom: 8 }}>
                ENFORCEMENT &amp; EXPOSURE
              </div>
              <h2 className="st-h2">The Cost of Non-Compliance on BC Highways</h2>
              <p className={styles.sectionSubtext}>
                Following recent infrastructure incidents on Metro Vancouver corridors (Hwy 1, Hwy 99), MOTI and CVSE have introduced zero-tolerance enforcement for heavy commercial transport.
              </p>
            </div>

            <div className={styles.riskGrid}>
              <div className={styles.riskCard}>
                <div className={styles.riskIconBox}>
                  <i className="ri-file-damage-line"></i>
                </div>
                <h3 className={styles.riskTitle}>CVSE Roadside Out-of-Service Orders</h3>
                <p className={styles.riskDesc}>
                  Trucks over 11,793 kg without active, compliant forward-facing dashcam hardware face immediate roadside inspection failures, violation tickets, and potential grounding until compliant hardware is installed.
                </p>
              </div>

              <div className={styles.riskCard}>
                <div className={styles.riskIconBox}>
                  <i className="ri-bar-chart-box-line"></i>
                </div>
                <h3 className={styles.riskTitle}>NSC Carrier Profile Downgrades</h3>
                <p className={styles.riskDesc}>
                  Equipment and safety infractions accumulate directly against your National Safety Code (NSC) carrier profile, leading to mandatory facility audits, increased CVSE scrutiny, and potential cancellation of operating certificates.
                </p>
              </div>

              <div className={styles.riskCard}>
                <div className={styles.riskIconBox}>
                  <i className="ri-shield-cross-line"></i>
                </div>
                <h3 className={styles.riskTitle}>Unbacked Highway Incident Liability</h3>
                <p className={styles.riskDesc}>
                  Without tamper-evident 1080p road video, heavy commercial haulers bear disproportionate liability in disputed highway collisions, rear-ends, and infrastructure claims, leading to catastrophic ICBC premium hikes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6 — FAST FLEET RETROFIT & FOUNDER INTAKE
        =================================================================== */}
        <section className={styles.retrofitSection}>
          <div className={styles.retrofitInner}>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12, textAlign: "center" }}>
              FAST FLEET RETROFIT
            </div>
            <h2 className="st-h1" style={{ color: "var(--st-ink-900)", textAlign: "center", maxWidth: 840, margin: "0 auto 20px" }}>
              Get your trucks outfitted before enforcement begins.
            </h2>
            <p className={styles.retrofitBody}>
              Whether you operate 1 truck or 50+, SoilTracker delivers turnkey, plug-and-play kits with simple 15-minute installation. Speak directly with the founder to review your fleet configuration, lock in mandate compliance, and test automated load tracking.
            </p>

            <div className={styles.retrofitCardsGrid}>
              <div className={styles.retrofitCard}>
                <div className={styles.retrofitPlan}>Owner-Operator Kit</div>
                <div className={styles.retrofitUnit}>1–4 Commercial Trucks</div>
                <ul className={styles.retrofitFeatures}>
                  <li><i className="ri-check-line"></i> 1080p HDR Forward Road Dashcam</li>
                  <li><i className="ri-check-line"></i> 72-Hour Continuous Rolling Loop Storage</li>
                  <li><i className="ri-check-line"></i> Plug &amp; Play OBD-II / J1939 Harness</li>
                  <li><i className="ri-check-line"></i> SoilTracker Geofenced Load Tracking Built In</li>
                </ul>
                <Link href="/get-started" className={styles.retrofitBtn}>
                  Equip Owner-Operator Truck →
                </Link>
              </div>

              <div className={`${styles.retrofitCard} ${styles.retrofitCardPopular}`}>
                <div className={styles.popularBadge}>Most Popular</div>
                <div className={styles.retrofitPlan}>Fleet Commercial Package</div>
                <div className={styles.retrofitUnit}>5–50+ Commercial Trucks</div>
                <ul className={styles.retrofitFeatures}>
                  <li><i className="ri-check-line"></i> Full Bill M217 Compliant Hardware Fleet Outfitting</li>
                  <li><i className="ri-check-line"></i> 1080p Forward Road Cam + 72H Storage per Unit</li>
                  <li><i className="ri-check-line"></i> Central Dispatcher Board &amp; Telematics Console</li>
                  <li><i className="ri-check-line"></i> 1-Click Batch Invoicing with GPS Proof of Work</li>
                  <li><i className="ri-check-line"></i> Dedicated Fleet Onboarding &amp; Hardware Support</li>
                </ul>
                <Link href="/get-started" className={`${styles.retrofitBtn} ${styles.retrofitBtnPrimary}`}>
                  Book Fleet Hardware Consultation →
                </Link>
              </div>
            </div>

            <p className={styles.retrofitFooterNote}>
              <i className="ri-shield-check-fill" style={{ color: "var(--st-brand-primary)", marginRight: 6 }}></i>
              SoilTracker · Built for British Columbia&apos;s Heavy Commercial Vehicle Safety &amp; Dashcam Mandate
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
