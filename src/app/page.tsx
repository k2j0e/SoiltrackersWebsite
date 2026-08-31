"use client";

import React, { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PersonaSwitcher from "@/components/PersonaSwitcher";
import CustodyInspector from "@/components/CustodyInspector";
import RegionalStrip from "@/components/RegionalStrip";
import CertificateModal from "@/components/CertificateModal";
import MapAnimation from "@/components/MapAnimation";
import CountUp from "@/components/CountUp";
import SolutionsExplorer from "@/components/SolutionsExplorer";
import StatBand from "@/components/StatBand";
import PaperVsDigital from "@/components/PaperVsDigital";
import styles from "./page.module.css";

export default function Home() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const scrollToInspector = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("custody-inspector");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* ===================================================================
            SECTION 1 — HERO
        =================================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 16 }}>
                  VERIFIED CHAIN OF CUSTODY FOR EVERY LOAD
                </div>

                <h1 className="st-h1" style={{ maxWidth: 640, margin: "0 0 24px" }}>
                  Prove where every load came from. And where it went.
                </h1>

              <p className={styles.heroSubtitle}>
                Regulators across North America are done accepting paper trails for soil movement. SoilTracker gives generators, receivers, and environmental professionals one verified chain of custody from excavation to final placement, with the compliance record built automatically as the soil moves.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>
                  Book a 15-Minute Founder Call
                </Link>
                <a href="#custody-inspector" onClick={scrollToInspector} className={`${styles.buttonSecondary} st-button-txt`}>
                  See a Live Custody Record <i className="ri-arrow-down-line"></i>
                </a>
              </div>

              <p className={styles.heroTrustLine}>
                <i className="ri-shield-check-fill" style={{ color: "var(--st-logo-leaf)", marginRight: 6 }}></i>
                Automated GPS geofencing, digital ticketing, and regulatory compliance built in.
              </p>
              </div>

              <div className={styles.heroVisual} aria-hidden="true">
                <MapAnimation />
                <span className={styles.heroVisualBadge}>
                  <i className="ri-route-line" style={{ color: "var(--st-brand-primary)" }}></i>
                  From dig to drop-off with one unbroken chain
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE SHIFT TO DIGITAL CUSTODY */}
        <section className={styles.urgencySection}>
          <div className={styles.urgencyInner}>
            <PaperVsDigital mode="north-america" />
          </div>
        </section>

        {/* SECTION 3: THE SOLUTIONS EXPLORER */}
        <section id="solutions-explorer" className={styles.solutionsSection}>
          <SolutionsExplorer mode="north-america" />
        </section>

        {/* SECTION 4: THE 3-WAY PERSONA SWITCHER */}
        <section className={styles.personaSection}>
          <div className={styles.personaHeader}>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
              TAILORED WORKFLOWS
            </div>
            <h2 className="st-h2" style={{ maxWidth: 800, margin: "0 auto 40px" }}>
              Engineered for everyone who moves, tests, or receives soil.
            </h2>
          </div>
          <PersonaSwitcher mode="north-america" />
        </section>

        {/* SECTION 5: THE INTERACTIVE CHAIN OF CUSTODY INSPECTOR */}
        <section id="custody-inspector" className={styles.inspectorSection}>
          <div className={styles.inspectorInner}>
            <div className={styles.inspectorHeading}>
              <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
                REAL-TIME PROOF OF WORK
              </div>
              <h2 className="st-h2" style={{ color: "#ffffff", maxWidth: 720, margin: "0 auto 16px" }}>
                What an unbroken chain of custody actually looks like.
              </h2>
              <p className={styles.inspectorSubtext}>
                Every load carries verified characterization data, driver timestamp, and receiver sign-off into an audit-ready compliance certificate.
              </p>
            </div>

            <CustodyInspector
              mode="north-america"
              onOpenCertificate={() => setCertModalOpen(true)}
            />
          </div>
        </section>

        {/* SECTION 6: THE DUAL DOORS */}
        <section className={styles.dualDoorsSection}>
          <div className={styles.dualDoorsInner}>
            <div className={styles.dualDoorsHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                COMPLETE SYSTEM ACCESS
              </div>
              <h2 className="st-h2">One system. Two ways in.</h2>
            </div>

            <div className={styles.doorsGrid}>
              {/* Left Card: The Management Platform (PRIMARY) */}
              <div className={`${styles.doorCard} ${styles.doorPlatformPrimary}`}>
                <div className={styles.doorEyebrow}>THE COMPLIANCE & DISPATCH PLATFORM</div>
                <h3 className={styles.doorTitle}>
                  Run every project with chain of custody built in.
                </h3>
                <ul className={styles.doorList}>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>Sites, permits, and volume tracking in one real-time dashboard.</span>
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>GPS and geofencing log every load automatically with no driver app required.</span>
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>The custody record writes itself, load by load.</span>
                  </li>
                </ul>
                <Link href="/platform" className={`${styles.doorBtnPrimary} st-button-txt`}>
                  Explore the Platform <i className="ri-arrow-right-line"></i>
                </Link>
              </div>

              {/* Right Card: The Verified Soil Exchange */}
              <div className={`${styles.doorCard} ${styles.doorExchangeSecondary}`}>
                <div className={styles.doorEyebrow} style={{ color: "var(--st-ink-700)" }}>
                  SPEC-MATCHED EXCHANGE
                </div>
                <h3 className={styles.doorTitle} style={{ color: "var(--st-ink-900)" }}>
                  Your surplus is someone else&apos;s structural fill.
                </h3>
                <ul className={styles.doorList} style={{ color: "var(--st-ink-800)" }}>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Match excess soil by classification, volume, and hauling distance.</span>
                  </li>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Every match starts with verified characterization data, never a stranger&apos;s word.</span>
                  </li>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Every completed trade produces a verified custody record automatically.</span>
                  </li>
                </ul>
                <Link href="/marketplace" className={`${styles.doorBtnSecondary} st-button-txt`}>
                  See How Matching Works <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: CATEGORY COMPARISON */}
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonInner}>
            <div className={styles.comparisonHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                CATEGORY COMPARISON
              </div>
              <h2 className="st-h2" style={{ maxWidth: 700, margin: "0 auto" }}>
                Point solutions leave the chain broken.
              </h2>
            </div>

            <div className={styles.comparisonGrid}>
              <div className={styles.compCard}>
                <div className={styles.compType}>Paper & Spreadsheets</div>
                <p className={styles.compDesc}>
                  Slow, vulnerable to lost tickets, days spent reconciling billing, nothing defensible when a regulator or lawyer asks.
                </p>
                <div className={styles.compStatusBad}>
                  <i className="ri-close-circle-line"></i> Broken Paper Trail
                </div>
              </div>

              <div className={styles.compCard}>
                <div className={styles.compType}>Tracking-Only Apps</div>
                <p className={styles.compDesc}>
                  Log the truck, but cannot tell you where the soil should go, leaving you to source or place material on your own.
                </p>
                <div className={styles.compStatusMid}>
                  <i className="ri-alert-line"></i> No Material Sourcing
                </div>
              </div>

              <div className={styles.compCard}>
                <div className={styles.compType}>Listing Boards</div>
                <p className={styles.compDesc}>
                  Find you soil on a map, but hand you a stranger&apos;s word on what&apos;s in it. No dispatch, no verification, no custody record.
                </p>
                <div className={styles.compStatusMid}>
                  <i className="ri-alert-line"></i> No Custody Verification
                </div>
              </div>

              <div className={`${styles.compCard} ${styles.compCardSoilTracker}`}>
                <div className={styles.compTypeHighlight}>SoilTracker</div>
                <div className={styles.compPill}>The Full Closed Loop</div>
                <p className={styles.compDescHighlight}>
                  Match the material, dispatch the haul, verify the load, and walk away with the custody record already built.
                </p>
                <div className={styles.compStatusGood}>
                  <i className="ri-shield-check-fill"></i> Complete Closed Loop
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: REGIONAL COMPLIANCE STRIP */}
        <RegionalStrip />

        {/* SECTION 9: FINAL CTA BLOCK */}
        <section className={styles.finalCtaSection}>
          <div className={styles.finalCtaInner}>
            <h2 className="st-h1" style={{ color: "#ffffff", maxWidth: 800, margin: "0 auto 20px" }}>
              The next load you move should prove itself.
            </h2>
            <p className={styles.finalCtaBody}>
              Founding member access is open now. Fifteen minutes with the founder (no demo theater, no sales sequence) and you&apos;ll know whether SoilTracker fits your operation.
            </p>

            <div className={styles.finalCtaButtons}>
              <Link href="/get-started" className={`${styles.finalPrimaryBtn} st-button-txt`}>
                Book a 15-Minute Founder Call
              </Link>
              <Link href="/get-started" className={`${styles.finalSecondaryBtn} st-button-txt`}>
                Request Founding Member Access
              </Link>
            </div>

            <p className={styles.footerTrustLine}>
              SoilTracker · The Closed-Loop Soil Operating System · British Columbia, Canada
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Interactive PDF Certificate Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        mode="north-america"
      />
    </>
  );
}
