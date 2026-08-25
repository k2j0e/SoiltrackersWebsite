import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spec-Matched Soil Exchange — SoilTrackers",
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
                The earthworks exchange where you search and filter excess soil by classification, volume, and hauling distance — with custody verification attached to every trade.
              </p>
              <div className={styles.heroActions}>
                <Link href="/get-started" className={`${styles.buttonPrimaryDark} st-button-txt`}>
                  Post Surplus Material
                </Link>
                <Link href="/get-started" className={`${styles.buttonOutlineDark} st-button-txt`}>
                  Request Needed Fill
                </Link>
              </div>
            </div>
            
            <div className={styles.searchMock}>
              <div className={styles.searchInput}>
                <i className="ri-search-line"></i>
                <span>Search material (e.g. CSR Clean Fill, Sand, Topsoil)...</span>
              </div>
              <div className={styles.filterPills}>
                <span className={`${styles.filterPill} ${styles.active}`}>Available Surplus</span>
                <span className={styles.filterPill}>Material Wanted</span>
                <span className={styles.filterPill}>Within 25 km</span>
                <span className={styles.filterPill}>Lab-Characterized</span>
              </div>
              <div className={styles.resultRow}>
                <div>Langley, BC · Clean Fill (CSR Pre-Tested)</div>
                <strong>1,500 m³</strong>
              </div>
              <div className={styles.resultRow}>
                <div>Surrey, BC · Structural Fill (Compaction Ready)</div>
                <strong>4,000 m³</strong>
              </div>
              <div className={styles.resultRow} style={{borderBottom: "none"}}>
                <div>Delta, BC · Screened Topsoil</div>
                <strong>800 m³</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className={styles.listingsSection}>
          <h2 className="st-h2">Live Material Matches</h2>
          <div className={styles.listingsGrid}>
            <div className={styles.listingCard}>
              <div className={`${styles.listingPhoto} ${styles.photoCleanFill}`}>
                <span className={`${styles.listingBadge} ${styles.badgeAvailable}`}>Available Surplus</span>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>
                  <span className="st-sub1" style={{color: "var(--st-ink-900)"}}>Clean Fill</span>
                  <span className="st-sub1">1,500 m³</span>
                </div>
                <div className={styles.listingSpec}>Langley, BC · CSR Commercial/Residential Spec</div>
                <div className={styles.listingFooter}>
                  <span><i className="ri-truck-line"></i> Hauling avail · 14km away</span>
                  <Link href="/get-started" className={styles.listingLink}>Request Match →</Link>
                </div>
              </div>
            </div>

            <div className={styles.listingCard}>
              <div className={`${styles.listingPhoto} ${styles.photoWanted}`}>
                <span className={`${styles.listingBadge} ${styles.badgeWanted}`}>Material Wanted</span>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>
                  <span className="st-sub1" style={{color: "var(--st-ink-900)"}}>Structural Fill</span>
                  <span className="st-sub1">4,000 m³</span>
                </div>
                <div className={styles.listingSpec}>Surrey, BC · Compaction ready · Intake active</div>
                <div className={styles.listingFooter}>
                  <span><i className="ri-truck-line"></i> Need hauling · 22km away</span>
                  <Link href="/get-started" className={styles.listingLink}>Provide Soil →</Link>
                </div>
              </div>
            </div>

            <div className={styles.listingCard}>
              <div className={`${styles.listingPhoto} ${styles.photoTopsoil}`}>
                <span className={`${styles.listingBadge} ${styles.badgeAvailable}`}>Available Surplus</span>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>
                  <span className="st-sub1" style={{color: "var(--st-ink-900)"}}>Topsoil</span>
                  <span className="st-sub1">800 m³</span>
                </div>
                <div className={styles.listingSpec}>Delta, BC · Screened organic topsoil</div>
                <div className={styles.listingFooter}>
                  <span><i className="ri-truck-line"></i> Hauling avail · 8km away</span>
                  <Link href="/get-started" className={styles.listingLink}>Request Match →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Matching Band */}
        <section className={styles.matchingBand}>
          <h2 className="st-h2">Matching that respects the spec sheet</h2>
          <div className={styles.matchingGrid}>
            <div className={styles.matchingCard}>
              <i className="ri-file-shield-2-line" style={{fontSize: 32, color: "var(--st-brand-primary)", marginBottom: 16, display: "block"}}></i>
              <h3 className="st-h4">Custody travels with the soil</h3>
              <p className="st-body2" style={{marginTop: 8}}>Every trade automatically initiates a verified chain of custody record before trucks roll.</p>
            </div>
            <div className={styles.matchingCard}>
              <i className="ri-route-line" style={{fontSize: 32, color: "var(--st-brand-primary)", marginBottom: 16, display: "block"}}></i>
              <h3 className="st-h4">Distance-first matching</h3>
              <p className="st-body2" style={{marginTop: 8}}>Find the closest viable receiver to cut hauling costs, truck cycle times, and carbon emissions.</p>
            </div>
            <div className={styles.matchingCard}>
              <i className="ri-truck-line" style={{fontSize: 32, color: "var(--st-brand-primary)", marginBottom: 16, display: "block"}}></i>
              <h3 className="st-h4">Hauling on the same network</h3>
              <p className="st-body2" style={{marginTop: 8}}>Dispatch verified haulers to move your matched loads, with every movement logged automatically by GPS.</p>
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">Turn your surplus liability into site supply.</h2>
          <p className="st-body1" style={{ maxWidth: 620, margin: "16px auto 32px", color: "var(--st-ink-700)" }}>
            Join the founding network of verified generators, receivers, and haulers.
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
