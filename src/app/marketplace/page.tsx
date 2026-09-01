import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spec-Matched Soil Exchange | SoilTracker",
  description: "Find clean fill. Move surplus. Zero material wasted. The spec-matched soil exchange with custody verification attached to every trade.",
};

export default function Marketplace() {
  return (
    <>
      <Nav primaryCtaLabel="Book Founder Call" primaryCtaHref="/get-started" />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                SPEC-MATCHED SOIL EXCHANGE
              </div>
              <h1 className="st-h1">Your surplus is someone else&apos;s structural fill.</h1>
              <p>
                The earthworks exchange where excavation contractors, receiving pits, and haulers match excess soil by classification, volume, and hauling distance—with automated chain-of-custody verification attached to every trade.
              </p>
              <div className={styles.heroActions}>
                <Link href="/get-started" className={`${styles.buttonPrimaryDark} st-button-txt`}>
                  <i className="ri-add-circle-line"></i> Post Surplus Material
                </Link>
                <Link href="/get-started" className={`${styles.buttonOutlineDark} st-button-txt`}>
                  <i className="ri-inbox-archive-line"></i> Request Needed Fill
                </Link>
              </div>
            </div>
            
            <div className={styles.searchMock}>
              <div className={styles.consoleHeader}>
                <div className={styles.liveExchangeTag}>
                  <span className={styles.livePulseDot}></span>
                  Live Soil Exchange
                </div>
                <div className={styles.regionMeta}>Metro Vancouver &amp; Fraser Valley</div>
              </div>
              <div className={styles.searchInput}>
                <i className="ri-search-line"></i>
                <span>Search by classification (e.g. CSR Clean Fill, Structural Sand, Topsoil)...</span>
              </div>
              <div className={styles.filterPills}>
                <span className={`${styles.filterPill} ${styles.active}`}>All Materials</span>
                <span className={styles.filterPill}>Surplus Available</span>
                <span className={styles.filterPill}>Intake Active</span>
                <span className={styles.filterPill}>QP Lab Certified</span>
                <span className={styles.filterPill}>&lt; 15 km Radius</span>
              </div>
              <div className={styles.resultList}>
                <div className={styles.resultRow}>
                  <div className={styles.resultMain}>
                    <div className={styles.resultLocation}>
                      <span>Burnaby Brentwood</span>
                      <span className={styles.badgeAvailable}>Surplus</span>
                    </div>
                    <div className={styles.resultSpec}>Native Glacial Till · CSR Commercial (CL) Passed</div>
                  </div>
                  <div className={styles.resultMeta}>
                    <span className={styles.resultVolume}>8,500 m³</span>
                    <span className={styles.resultDistance}>11 km · Zero-Touch Haul</span>
                  </div>
                </div>
                <div className={styles.resultRow}>
                  <div className={styles.resultMain}>
                    <div className={styles.resultLocation}>
                      <span>Surrey Campbell Hts</span>
                      <span className={styles.badgeIntake}>Intake Active</span>
                    </div>
                    <div className={styles.resultSpec}>Structural Fill · 98% Standard Proctor Compaction</div>
                  </div>
                  <div className={styles.resultMeta}>
                    <span className={styles.resultVolume}>15,000 m³ cap</span>
                    <span className={styles.resultDistance}>16 km · $8/m³ Tipping</span>
                  </div>
                </div>
                <div className={styles.resultRow}>
                  <div className={styles.resultMain}>
                    <div className={styles.resultLocation}>
                      <span>Delta Farmland</span>
                      <span className={styles.badgeAvailable}>Surplus</span>
                    </div>
                    <div className={styles.resultSpec}>Screened Organic Topsoil · ALR Class 1 Compliant</div>
                  </div>
                  <div className={styles.resultMeta}>
                    <span className={styles.resultVolume}>2,400 m³</span>
                    <span className={styles.resultDistance}>7 km · Delivery Avail</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Listings Grid */}
        <section className={styles.listingsSection}>
          <div className={styles.listingsHeader}>
            <div>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
                VERIFIED EARTHWORKS TRADES
              </div>
              <h2 className="st-h2" style={{ margin: 0 }}>Live Spec-Matched Opportunities</h2>
            </div>
            <Link href="/get-started" className={styles.listingCta} style={{ fontSize: 14 }}>
              View All 42 Active Listings in BC →
            </Link>
          </div>

          <div className={styles.listingsGrid}>
            {/* Card 1: Clean Fill Surplus */}
            <div className={styles.listingCard}>
              <div className={`${styles.listingBanner} ${styles.bannerCleanFill}`}>
                <div className={styles.bannerTopRow}>
                  <span className={styles.badgeAvailable}>Available Surplus</span>
                  <span className={styles.bannerSubPill}>Immediate Loadout</span>
                </div>
                <div>
                  <div className={styles.bannerVolume}>
                    8,500 <small>m³</small>
                  </div>
                </div>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>Clean Fill (Glacial Till)</div>
                <div className={styles.listingLocation}>
                  <i className="ri-map-pin-2-line"></i> Burnaby Brentwood Station (PID 008-312-911)
                </div>
                <div className={styles.specGrid}>
                  <div className={styles.specBox}>
                    <div className={styles.specBoxLabel}>CSR Standard</div>
                    <div className={styles.specBoxValue} style={{ color: "var(--st-brand-primary)" }}>Commercial (CL)</div>
                  </div>
                  <div className={styles.specBox}>
                    <div className={styles.specBoxLabel}>Lab Verification</div>
                    <div className={styles.specBoxValue}>QP Signed · 11.2% Moist</div>
                  </div>
                </div>
                <div className={styles.listingFooter}>
                  <span className={styles.dispatchTag}>
                    <i className="ri-truck-line"></i> Tri-drive &amp; 10-wheeler · 11 km
                  </span>
                  <Link href="/get-started" className={styles.listingCta}>
                    Request Fill →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Structural Fill Intake Wanted */}
            <div className={styles.listingCard}>
              <div className={`${styles.listingBanner} ${styles.bannerIntakeWanted}`}>
                <div className={styles.bannerTopRow}>
                  <span className={styles.badgeIntake}>Intake Active</span>
                  <span className={styles.bannerSubPill}>SRIS #007412</span>
                </div>
                <div>
                  <div className={styles.bannerVolume}>
                    15,000 <small>m³ Capacity</small>
                  </div>
                </div>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>Structural Backfill Wanted</div>
                <div className={styles.listingLocation}>
                  <i className="ri-map-pin-2-line"></i> Surrey Campbell Heights Industrial Park
                </div>
                <div className={styles.specGrid}>
                  <div className={styles.specBox}>
                    <div className={styles.specBoxLabel}>Compaction Spec</div>
                    <div className={styles.specBoxValue} style={{ color: "var(--st-brand-primary)" }}>98% Standard Proctor</div>
                  </div>
                  <div className={styles.specBox}>
                    <div className={styles.specBoxLabel}>Tipping Economy</div>
                    <div className={styles.specBoxValue} style={{ color: "var(--st-success)" }}>$8/m³ (Save $30/m³)</div>
                  </div>
                </div>
                <div className={styles.listingFooter}>
                  <span className={styles.dispatchTag}>
                    <i className="ri-shield-check-line"></i> Certified scale on-site
                  </span>
                  <Link href="/get-started" className={styles.listingCta}>
                    Claim Window →
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Screened Organic Topsoil */}
            <div className={styles.listingCard}>
              <div className={`${styles.listingBanner} ${styles.bannerTopsoil}`}>
                <div className={styles.bannerTopRow}>
                  <span className={styles.badgeAvailable}>Available Surplus</span>
                  <span className={styles.bannerSubPill}>ALR Class 1 Verified</span>
                </div>
                <div>
                  <div className={styles.bannerVolume}>
                    2,400 <small>m³</small>
                  </div>
                </div>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>Screened Organic Topsoil</div>
                <div className={styles.listingLocation}>
                  <i className="ri-map-pin-2-line"></i> Delta Farmland Restoration Site
                </div>
                <div className={styles.specGrid}>
                  <div className={styles.specBox}>
                    <div className={styles.specBoxLabel}>Agronomic Spec</div>
                    <div className={styles.specBoxValue} style={{ color: "var(--st-brand-primary)" }}>8.2% Organic · pH 6.8</div>
                  </div>
                  <div className={styles.specBox}>
                    <div className={styles.specBoxLabel}>Weed Guarantee</div>
                    <div className={styles.specBoxValue}>Zero Invasive Species</div>
                  </div>
                </div>
                <div className={styles.listingFooter}>
                  <span className={styles.dispatchTag}>
                    <i className="ri-truck-line"></i> Staged &amp; delivery avail · 7 km
                  </span>
                  <Link href="/get-started" className={styles.listingCta}>
                    Request Soil →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New ICP Section: Earthworks Tipping & Hauling Savings Calculator */}
        <section className={styles.savingsSection}>
          <div className={styles.savingsInner}>
            <div className={styles.savingsHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
                THE BOTTOM LINE ROI
              </div>
              <h2 className="st-h2">Cut disposal tipping fees by up to 75%</h2>
              <p className="st-body1" style={{ color: "var(--st-ink-700)", margin: "16px auto 0" }}>
                Compare the brutal cost of traditional landfill facilities against direct spec-matched site exchanges across a standard 4,000 m³ excavation project.
              </p>
            </div>

            <div className={styles.savingsGrid}>
              {/* Traditional Disposal */}
              <div className={`${styles.savingsCard} ${styles.savingsCardWaste}`}>
                <div className={styles.savingsCardTitle} style={{ color: "rgb(220, 38, 38)" }}>
                  Traditional Landfill Disposal
                </div>
                <div className={styles.savingsAmount} style={{ color: "var(--st-ink-900)" }}>
                  $236,000
                </div>
                <div className={styles.savingsSubtitle} style={{ color: "var(--st-ink-500)" }}>
                  Based on 4,000 m³ (285 tandem loads)
                </div>
                <ul className={styles.savingsList}>
                  <li className={styles.savingsListItem}>
                    <span>Landfill Tipping Fee</span>
                    <strong>$42.00 / m³ ($168,000)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Average Haul Distance</span>
                    <strong>42 km (Mission/Chilliwack)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Truck Hauling Cost</span>
                    <strong>$68,000 (Slow cycle times)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Paper Manifest Loss Risk</span>
                    <strong style={{ color: "rgb(220, 38, 38)" }}>High (Billing disputes)</strong>
                  </li>
                </ul>
              </div>

              {/* Direct Site Exchange */}
              <div className={`${styles.savingsCard} ${styles.savingsCardExchange}`}>
                <div className={styles.savingsCardTitle} style={{ color: "var(--st-brand-primary)" }}>
                  SoilTracker Direct Exchange
                </div>
                <div className={styles.savingsAmount} style={{ color: "var(--st-ink-900)" }}>
                  $68,000
                </div>
                <div className={styles.savingsSubtitle} style={{ color: "var(--st-ink-500)" }}>
                  Matched to local receiving pit within 12 km
                </div>
                <ul className={styles.savingsList}>
                  <li className={styles.savingsListItem}>
                    <span>Local Intake Tipping</span>
                    <strong>$8.00 / m³ ($32,000)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Average Haul Distance</span>
                    <strong style={{ color: "var(--st-success)" }}>12 km (Nearby fill site)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Truck Hauling Cost</span>
                    <strong>$36,000 (Fast 20m cycles)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Telematics Custody Proof</span>
                    <strong style={{ color: "var(--st-success)" }}>100% Automated (0 Disputes)</strong>
                  </li>
                </ul>
              </div>

              {/* Net ROI Highlight */}
              <div className={`${styles.savingsCard} ${styles.savingsCardHero}`}>
                <div className={styles.savingsCardTitle} style={{ color: "var(--st-accent-sand)" }}>
                  Your Net Project Savings
                </div>
                <div className={styles.savingsAmount} style={{ color: "white" }}>
                  $168,000
                </div>
                <div className={styles.savingsSubtitle} style={{ color: "rgba(255,255,255,0.85)" }}>
                  71% reduction in total earthworks haul &amp; disposal costs
                </div>
                <ul className={styles.savingsList}>
                  <li className={styles.savingsListItem}>
                    <span>Cash Savings to Margin</span>
                    <strong style={{ color: "var(--st-accent-sand)" }}>+$168,000 per 4,000 m³</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Truck Carbon Offset</span>
                    <strong>380 Metric Tonnes CO₂</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Driver Interaction</span>
                    <strong style={{ color: "var(--st-accent-sand)" }}>Zero Apps (Telematics)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>CSR Compliance Guarantee</span>
                    <strong>100% Audit-Ready</strong>
                  </li>
                </ul>
                <Link href="/get-started" className={`${styles.buttonPrimaryDark} st-button-txt`} style={{ marginTop: "auto", background: "white", color: "var(--st-brand-primary-dark)", textAlign: "center", justifyContent: "center" }}>
                  Calculate Savings On Your Project →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Matching Band */}
        <section className={styles.matchingBand}>
          <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
            INTELLIGENT COMPLIANCE
          </div>
          <h2 className="st-h2">Matching that respects the spec sheet</h2>
          <div className={styles.matchingGrid}>
            <div className={styles.matchingCard}>
              <i className="ri-file-shield-2-line"></i>
              <h3 className="st-h4">QP-Lab Verified Due Diligence</h3>
              <p>Every trade links laboratory characterization tests (CSR Schedule 3.1) and Qualified Professional digital seals to the ticket before trucks dispatch.</p>
            </div>
            <div className={styles.matchingCard}>
              <i className="ri-route-line"></i>
              <h3 className="st-h4">Distance-First Geo Routing</h3>
              <p>Match with the closest compliant receiver to slash cycle times, eliminate deadhead haul return miles, and dramatically reduce diesel burn.</p>
            </div>
            <div className={styles.matchingCard}>
              <i className="ri-truck-line"></i>
              <h3 className="st-h4">Zero-Touch Telematics Hauling</h3>
              <p>Dispatch trucks with zero driver app distraction. Virtual geofences, automated scale slips, and transit corridors log every load seamlessly.</p>
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">Turn your surplus liability into site margin.</h2>
          <p className="st-body1" style={{ maxWidth: 640, margin: "16px auto 32px", color: "var(--st-ink-700)" }}>
            Join British Columbia&apos;s leading network of verified excavation contractors, intake pits, and fleet haulers.
          </p>
          <Link href="/get-started" className={`${styles.buttonPrimaryDark} st-button-txt`}>
            Book a 15-Minute Founder Call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

