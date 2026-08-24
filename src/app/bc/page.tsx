"use client";

import React, { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PersonaSwitcher from "@/components/PersonaSwitcher";
import CustodyInspector from "@/components/CustodyInspector";
import CertificateModal from "@/components/CertificateModal";
import styles from "./page.module.css";

export default function BCPage() {
  const [certModalOpen, setCertModalOpen] = useState(false);

  const scrollToInspector = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("bc-custody-inspector");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav primaryCtaLabel="Book Founder Call" primaryCtaHref="/get-started" />
      <main className={styles.main}>
        {/* ===================================================================
            SECTION 1 — HERO (BC MANDATE)
        =================================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={styles.mandateBadge}>
                <span className={styles.mandateDot}></span>
                <span>BUILT FOR BC&apos;S DIGITAL SOIL TRACKING MANDATE</span>
              </div>

              <h1 className="st-h1" style={{ maxWidth: 880, margin: "0 auto 24px" }}>
                Prove where every load came from. And where it went.
              </h1>

              <p className={styles.heroSubtitle}>
                British Columbia now requires digital tracking of soil movement. SoilTracker gives generators, receivers, and Qualified Professionals one verified chain of custody — from excavation to final placement — with the compliance record built automatically as the soil moves.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>
                  Book a 15-Minute Founder Call
                </Link>
                <a href="#bc-custody-inspector" onClick={scrollToInspector} className={`${styles.buttonSecondary} st-button-txt`}>
                  See a Live Custody Record <i className="ri-arrow-down-line"></i>
                </a>
              </div>

              <p className={styles.heroTrustLine}>
                <i className="ri-shield-check-fill" style={{ color: "var(--st-logo-leaf)", marginRight: 6 }}></i>
                Built on BC&apos;s Environmental Management Act, Contaminated Sites Regulation, and Protocol 19 — by operators who run their own soil transfer facility in Coquitlam.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 2 — THE MANDATE BLOCK
        =================================================================== */}
        <section className={styles.mandateSection}>
          <div className={styles.mandateInner}>
            <div className={styles.mandateHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
                LEGISLATIVE REALITY & PENALTIES
              </div>
              <h2 className="st-h2" style={{ color: "#ffffff", maxWidth: 760, margin: "0 auto 20px" }}>
                The paper trail era is over.
              </h2>
              <p className={styles.mandateBody}>
                In May 2026, BC&apos;s legislature voted unanimously to mandate digital tracking of soil movement. Penalties for soil relocation violations already run up to $75,000 per contravention — and a continuing violation can count as a separate offence for every day it continues.
              </p>
              <p className={styles.mandateConclusion}>
                The question is no longer whether to digitize your chain of custody. It&apos;s whether your system will hold up when someone asks for it.
              </p>
            </div>

            {/* 4-Stat Strip (Factual BC Metrics) */}
            <div className={styles.statStrip}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Unanimous</span>
                <span className={styles.statLabel}>
                  BC&apos;s digital soil tracking mandate passed without a single opposing vote
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>$75,000</span>
                <span className={styles.statLabel}>
                  Maximum administrative penalty per soil relocation contravention under the EMA
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>30 m³</span>
                <span className={styles.statLabel}>
                  The volume threshold that triggers mandatory SRNF notification from Schedule 2 sites
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1 week</span>
                <span className={styles.statLabel}>
                  Minimum advance notice required before removing soil from a Schedule 2 source
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3 — THE BC PERSONA SWITCHER
        =================================================================== */}
        <section className={styles.personaSection}>
          <div className={styles.personaHeader}>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
              BUILT FOR BC STAKEHOLDERS
            </div>
            <h2 className="st-h2" style={{ maxWidth: 800, margin: "0 auto 40px" }}>
              Built for how soil actually moves in British Columbia.
            </h2>
          </div>
          <PersonaSwitcher mode="bc" />
        </section>

        {/* ===================================================================
            SECTION 4 — THE BC CHAIN OF CUSTODY INSPECTOR (WIDGET)
        =================================================================== */}
        <section id="bc-custody-inspector" className={styles.inspectorSection}>
          <div className={styles.inspectorInner}>
            <div className={styles.inspectorHeading}>
              <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
                REAL-TIME PROOF OF WORK
              </div>
              <h2 className="st-h2" style={{ color: "#ffffff", maxWidth: 720, margin: "0 auto 16px" }}>
                What an unbroken chain of custody actually looks like.
              </h2>
              <p className={styles.inspectorSubtext}>
                Schedule 2 sources, Protocol 19 characterizations, SRNF filing bindings, and HVRS cumulative tracking in one tamper-evident digital ledger.
              </p>
            </div>

            <CustodyInspector
              mode="bc"
              onOpenCertificate={() => setCertModalOpen(true)}
            />
          </div>
        </section>

        {/* ===================================================================
            SECTION 5 — BUILT IN BC, BY BC OPERATORS
        =================================================================== */}
        <section className={styles.facilitySection}>
          <div className={styles.facilityInner}>
            <div className={styles.facilityContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                LOCAL FACILITY OWNERSHIP
              </div>
              <h2 className="st-h2" style={{ maxWidth: 760, margin: "0 auto 20px" }}>
                We answer to the same regulators you do.
              </h2>
              <p className={styles.facilityLead}>
                SoilTracker owns and operates a hydrovac slurry processing and soil transfer facility in Coquitlam. We file notifications through the SRS Web App, run the scale, manage receiving volumes, and live inside the same EMA, CSR, and Protocol 19 framework as every operator on this platform.
              </p>
              <p className={styles.facilitySub}>
                We didn&apos;t study this industry from the outside. We built the tool we needed to run our own operation — then opened it to yours.
              </p>
            </div>

            <div className={styles.facilityGrid}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>
                  <i className="ri-building-line"></i>
                </div>
                <h3 className={styles.facilityCardTitle}>A real BC facility</h3>
                <p className={styles.facilityCardDesc}>
                  Operating hydrovac slurry processing and soil transfer in Coquitlam.
                </p>
              </div>

              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>
                  <i className="ri-map-2-line"></i>
                </div>
                <h3 className={styles.facilityCardTitle}>The full regulatory map</h3>
                <p className={styles.facilityCardDesc}>
                  Every SRNF filing in the province analyzed. We know BC&apos;s soil movement landscape better than anyone building software for it.
                </p>
              </div>

              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>
                  <i className="ri-shield-star-line"></i>
                </div>
                <h3 className={styles.facilityCardTitle}>Western Canada&apos;s only combined operator</h3>
                <p className={styles.facilityCardDesc}>
                  The only platform in Western Canada pairing owned processing infrastructure with digital chain-of-custody tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 6 — DUAL DOORS (BC VERSION)
        =================================================================== */}
        <section className={styles.dualDoorsSection}>
          <div className={styles.dualDoorsInner}>
            <div className={styles.dualDoorsHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                COMPLETE SYSTEM ACCESS
              </div>
              <h2 className="st-h2">One system. Two ways in.</h2>
            </div>

            <div className={styles.doorsGrid}>
              {/* Left Card — The Compliance Platform */}
              <div className={`${styles.doorCard} ${styles.doorPlatformPrimary}`}>
                <div className={styles.doorEyebrow}>THE BC COMPLIANCE PLATFORM</div>
                <h3 className={styles.doorTitle}>
                  Run every project with the EMA built in.
                </h3>
                <ul className={styles.doorList}>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>Source sites, receiving sites, SRNFs, and volumes in one real-time dashboard.</span>
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>GPS-verified driver app replaces paper triplicate tickets.</span>
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>Audit-ready records structured for the SRS Web App format.</span>
                  </li>
                </ul>
                <Link href="/platform" className={`${styles.doorBtnPrimary} st-button-txt`}>
                  Explore the Platform <i className="ri-arrow-right-line"></i>
                </Link>
              </div>

              {/* Right Card — The Verified Soil Exchange */}
              <div className={`${styles.doorCard} ${styles.doorExchangeSecondary}`}>
                <div className={styles.doorEyebrow} style={{ color: "var(--st-ink-700)" }}>
                  PROTOCOL 19-MATCHED EXCHANGE
                </div>
                <h3 className={styles.doorTitle} style={{ color: "var(--st-ink-900)" }}>
                  Your surplus is someone else&apos;s structural fill.
                </h3>
                <ul className={styles.doorList} style={{ color: "var(--st-ink-800)" }}>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Match excess soil by CSR classification, volume, and hauling distance.</span>
                  </li>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Every match starts with Protocol 19 characterization data — not a stranger&apos;s word.</span>
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

        {/* ===================================================================
            SECTION 7 — FOUNDING MEMBER BLOCK (BC-SPECIFIC CLOSE)
        =================================================================== */}
        <section className={styles.foundingSection}>
          <div className={styles.foundingInner}>
            <div className={styles.foundingHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
                LIMITED FOUNDING MEMBER INTAKE
              </div>
              <h2 className="st-h1" style={{ color: "#ffffff", maxWidth: 840, margin: "0 auto 20px" }}>
                Founding member access is open — and it&apos;s founder-led.
              </h2>
              <p className={styles.foundingBody}>
                SoilTracker is onboarding founding members across BC right now: generators, receiving operators, and QP firms. No demo theater, no sales sequence. Fifteen minutes with the founder and you&apos;ll know whether this fits your operation — and founding members shape the platform before the rest of the province gets it.
              </p>

              <div className={styles.foundingCtas}>
                <Link href="/get-started" className={`${styles.founderPrimaryBtn} st-button-txt`}>
                  Book a 15-Minute Founder Call
                </Link>
                <Link href="/get-started" className={`${styles.founderSecondaryBtn} st-button-txt`}>
                  Request Founding Member Access
                </Link>
              </div>

              <p className={styles.footerTrustLine}>
                SoilTracker · Coquitlam, British Columbia · Operating our own soil transfer facility since day one
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Certificate Modal with BC spec mode */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        mode="bc"
      />
    </>
  );
}
