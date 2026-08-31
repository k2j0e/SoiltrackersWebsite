"use client";

import React, { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PersonaSwitcher from "@/components/PersonaSwitcher";
import CustodyInspector from "@/components/CustodyInspector";
import CertificateModal from "@/components/CertificateModal";
import CountUp from "@/components/CountUp";
import SolutionsExplorer from "@/components/SolutionsExplorer";
import StatBand from "@/components/StatBand";
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
                <span>BUILT FOR BC'S DIGITAL SOIL TRACKING MANDATE</span>
              </div>

              <h1 className="st-h1" style={{ maxWidth: 880, margin: "0 auto 24px" }}>
                Prove where every load came from. And where it went.
              </h1>

              <p className={styles.heroSubtitle}>
                British Columbia now requires digital tracking of soil movement. SoilTracker gives generators, receivers, and Qualified Professionals one verified chain of custody from excavation to final placement, with the compliance record built automatically as the soil moves.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>
                  Book a 15 Minute Founder Call
                </Link>
                <a href="#bc-custody-inspector" onClick={scrollToInspector} className={`${styles.buttonSecondary} st-button-txt`}>
                  See a Live Custody Record <i className="ri-arrow-down-line"></i>
                </a>
              </div>

              <p className={styles.heroTrustLine}>
                <i className="ri-shield-check-fill" style={{ color: "var(--st-logo-leaf)", marginRight: 6 }}></i>
                Built on BC's Environmental Management Act, Contaminated Sites Regulation, and Protocol 19 by a team permitting its own soil transfer facility in Coquitlam right now.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE MANDATE BLOCK */}
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
                In May 2026, BC's legislature voted unanimously to mandate digital tracking of soil movement. Penalties for soil relocation violations already run up to $75,000 per contravention, and a continuing violation can count as a separate offence for every day it continues.
              </p>
              <p className={styles.mandateConclusion}>
                The question is no longer whether to digitize your chain of custody. It's whether your system will hold up when someone asks for it.
              </p>
            </div>

            <StatBand
              stats={[
                {
                  number: "Unanimous",
                  label: "BC's digital soil tracking mandate passed without a single opposing vote",
                  sublabel: "Bill M217 Passed",
                },
                {
                  number: "$75,000",
                  label: "Maximum administrative penalty per soil relocation contravention under the EMA",
                  sublabel: "Daily Exposure Shield",
                },
                {
                  number: "30 m³",
                  label: "The volume threshold that triggers mandatory SRNF notification from Schedule 2 sites",
                  sublabel: "Automated Triggers",
                },
                {
                  number: "1 Week",
                  label: "Minimum advance notice required before removing soil from a Schedule 2 source",
                  sublabel: "Advance Filing Window",
                },
              ]}
            />
          </div>
        </section>

        {/* SECTION 3: THE BC PERSONA SWITCHER */}
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

        {/* SECTION 4: THE SOLUTIONS EXPLORER */}
        <section className={styles.solutionsSection}>
          <SolutionsExplorer mode="bc" />
        </section>

        {/* SECTION 5: THE BC CHAIN OF CUSTODY INSPECTOR */}
        <section id="bc-custody-inspector" className={styles.inspectorSection}>
          <div className={styles.inspectorInner}>
            <div className={styles.inspectorHeading}>
              <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
                REAL TIME PROOF OF WORK
              </div>
              <h2 className="st-h2" style={{ color: "#ffffff", maxWidth: 720, margin: "0 auto 16px" }}>
                What an unbroken chain of custody actually looks like.
              </h2>
              <p className={styles.inspectorSubtext}>
                Every load carries verified characterization data, driver timestamp, and receiver sign off into an audit ready compliance certificate.
              </p>
            </div>

            <CustodyInspector
              mode="bc"
              onOpenCertificate={() => setCertModalOpen(true)}
            />
          </div>
        </section>

        {/* SECTION 6: BUILT IN BC, BY BC OPERATORS */}
        <section className={styles.facilitySection}>
          <div className={styles.facilityInner}>
            <div className={styles.facilityContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                BUILT IN BC · FACILITY IN DEVELOPMENT
              </div>
              <h2 className="st-h2" style={{ maxWidth: 760, margin: "0 auto 20px" }}>
                We answer to the same regulators you do.
              </h2>
              <p className={styles.facilityLead}>
                SoilTracker is developing its own hydrovac slurry processing and soil transfer facility in Coquitlam, in planning and permitting right now inside the same EMA, CSR, and municipal framework as every operator on this platform.
              </p>
              <p className={styles.facilitySub}>
                We didn't study this industry from the outside. We're building the tool we need to run our own operation, and opening it to yours.
              </p>
            </div>

            <div className={styles.facilityGrid}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>
                  <i className="ri-building-line"></i>
                </div>
                <h3 className={styles.facilityCardTitle}>A BC facility in motion</h3>
                <p className={styles.facilityCardDesc}>
                  Our own hydrovac slurry processing and soil transfer facility in Coquitlam, moving through planning and permitting now.
                </p>
              </div>

              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>
                  <i className="ri-map-2-line"></i>
                </div>
                <h3 className={styles.facilityCardTitle}>The full regulatory map</h3>
                <p className={styles.facilityCardDesc}>
                  Every SRNF filing in the province analyzed. We know BC's soil movement landscape better than anyone building software for it.
                </p>
              </div>

              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>
                  <i className="ri-shield-star-line"></i>
                </div>
                <h3 className={styles.facilityCardTitle}>A combined operator model</h3>
                <p className={styles.facilityCardDesc}>
                  Built to pair owned processing infrastructure with digital chain of custody tracking, a first for Western Canada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: DUAL DOORS */}
        <section className={styles.dualDoorsSection}>
          <div className={styles.dualDoorsInner}>
            <div className={styles.dualDoorsHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                COMPLETE SYSTEM ACCESS
              </div>
              <h2 className="st-h2">One system. Two ways in.</h2>
            </div>

            <div className={styles.doorsGrid}>
              <div className={`${styles.doorCard} ${styles.doorPlatformPrimary}`}>
                <div className={styles.doorEyebrow}>THE BC COMPLIANCE PLATFORM</div>
                <h3 className={styles.doorTitle}>
                  Run every project with the EMA built in.
                </h3>
                <ul className={styles.doorList}>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>Source sites, receiving sites, SRNFs, and volumes in one real time dashboard.</span>
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>GPS and geofencing log every load automatically with no driver app required.</span>
                  </li>
                  <li>
                    <i className="ri-check-line"></i>
                    <span>Audit ready records exportable as complete SRNF documentation packages.</span>
                  </li>
                </ul>
                <Link href="/platform" className={`${styles.doorBtnPrimary} st-button-txt`}>
                  Explore the Platform <i className="ri-arrow-right-line"></i>
                </Link>
              </div>

              <div className={`${styles.doorCard} ${styles.doorExchangeSecondary}`}>
                <div className={styles.doorEyebrow} style={{ color: "var(--st-ink-700)" }}>
                  PROTOCOL 19 MATCHED EXCHANGE
                </div>
                <h3 className={styles.doorTitle} style={{ color: "var(--st-ink-900)" }}>
                  Your surplus is someone else's structural fill.
                </h3>
                <ul className={styles.doorList} style={{ color: "var(--st-ink-800)" }}>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Match excess soil by CSR classification, volume, and hauling distance.</span>
                  </li>
                  <li>
                    <i className="ri-check-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Every match starts with Protocol 19 characterization data, never a stranger's word.</span>
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

        {/* SECTION 8: FOUNDING MEMBER BLOCK */}
        <section className={styles.foundingSection}>
          <div className={styles.foundingInner}>
            <div className={styles.foundingHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-logo-leaf)", marginBottom: 12 }}>
                LIMITED FOUNDING MEMBER INTAKE
              </div>
              <h2 className="st-h1" style={{ color: "#ffffff", maxWidth: 840, margin: "0 auto 20px" }}>
                Founding member access is open, and it is founder led.
              </h2>
              <p className={styles.foundingBody}>
                SoilTracker is onboarding founding members across BC right now: generators, receiving operators, and QP firms. No demo theater, no sales sequence. Fifteen minutes with the founder (no sales reps) and you'll know whether this fits your operation, while founding members shape the platform before the rest of the province gets it.
              </p>

              <div className={styles.foundingCtas}>
                <Link href="/get-started" className={`${styles.founderPrimaryBtn} st-button-txt`}>
                  Book a 15 Minute Founder Call
                </Link>
                <Link href="/get-started" className={`${styles.founderSecondaryBtn} st-button-txt`}>
                  Request Founding Member Access
                </Link>
              </div>

              <p className={styles.footerTrustLine}>
                SoilTracker · Coquitlam, British Columbia · Building our own soil transfer facility alongside the platform
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
