import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace — Soiltrackers",
  description: "Find soil. Move soil. Nothing wasted. The marketplace for clean and surplus fill.",
};

export default function Marketplace() {
  return (
    <>
      <Nav primaryCtaLabel="Post a listing" primaryCtaHref="#post" />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <h1 className="st-h1">Your surplus is someone's structural fill.</h1>
              <p>Every match made on the Soiltrackers Marketplace moves with a complete, unbroken chain of custody attached.</p>
              <div className={styles.heroActions}>
              <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>Post a listing</Link>
              <Link href="/get-started" className={`${styles.buttonSecondary} st-button-txt`}>Browse soil</Link>
            </div>
            </div>
            
            <div className={styles.searchMock}>
              <div className={styles.searchInput}>
                <i className="ri-search-line"></i>
                <span>Structural fill near Surrey, BC…</span>
              </div>
              <div className={styles.filterPills}>
                <span className={`${styles.filterPill} ${styles.active}`}>Available</span>
                <span className={styles.filterPill}>Wanted</span>
                <span className={styles.filterPill}>Within 25 km</span>
                <span className={styles.filterPill}>Clean / CSR-tested</span>
              </div>
              <div className={styles.resultRow}>
                <div>Langley, BC · Clean Fill</div>
                <strong>1,500 m³</strong>
              </div>
              <div className={styles.resultRow}>
                <div>Surrey, BC · Structural Fill</div>
                <strong>4,000 m³</strong>
              </div>
              <div className={styles.resultRow} style={{borderBottom: "none"}}>
                <div>Delta, BC · Topsoil</div>
                <strong>800 m³</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Listings Grid */}
        <section className={styles.listingsSection}>
          <h2 className="st-h2">Live in the Lower Mainland</h2>
          <div className={styles.listingsGrid}>
            <div className={styles.listingCard}>
              <div className={styles.listingPhoto}>
                <span className={`${styles.listingBadge} ${styles.badgeAvailable}`}>Available</span>
                <div style={{position:"absolute", bottom:16, left:0, right:0, textAlign:"center", color:"var(--st-ink-300)"}}>Photo Placeholder</div>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>
                  <span className="st-sub1" style={{color: "var(--st-ink-900)"}}>Clean Fill</span>
                  <span className="st-sub1">1,500 m³</span>
                </div>
                <div className={styles.listingSpec}>Langley, BC · CSR Schedule 2</div>
                <div className={styles.listingFooter}>
                  <span><i className="ri-truck-line"></i> Hauling avail · 14km away</span>
                  <Link href="#view" className={styles.listingLink}>View listing →</Link>
                </div>
              </div>
            </div>

            <div className={styles.listingCard}>
              <div className={styles.listingPhoto}>
                <span className={`${styles.listingBadge} ${styles.badgeWanted}`}>Wanted</span>
                <div style={{position:"absolute", bottom:16, left:0, right:0, textAlign:"center", color:"var(--st-ink-300)"}}>Photo Placeholder</div>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>
                  <span className="st-sub1" style={{color: "var(--st-ink-900)"}}>Structural Fill</span>
                  <span className="st-sub1">4,000 m³</span>
                </div>
                <div className={styles.listingSpec}>Surrey, BC · Compaction ready</div>
                <div className={styles.listingFooter}>
                  <span><i className="ri-truck-line"></i> Need hauling · 22km away</span>
                  <Link href="#view" className={styles.listingLink}>View listing →</Link>
                </div>
              </div>
            </div>

            <div className={styles.listingCard}>
              <div className={styles.listingPhoto}>
                <span className={`${styles.listingBadge} ${styles.badgeAvailable}`}>Available</span>
                <div style={{position:"absolute", bottom:16, left:0, right:0, textAlign:"center", color:"var(--st-ink-300)"}}>Photo Placeholder</div>
              </div>
              <div className={styles.listingContent}>
                <div className={styles.listingTitle}>
                  <span className="st-sub1" style={{color: "var(--st-ink-900)"}}>Topsoil</span>
                  <span className="st-sub1">800 m³</span>
                </div>
                <div className={styles.listingSpec}>Delta, BC · Screened</div>
                <div className={styles.listingFooter}>
                  <span><i className="ri-truck-line"></i> Hauling avail · 8km away</span>
                  <Link href="#view" className={styles.listingLink}>View listing →</Link>
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
              <p className="st-body2" style={{marginTop: 8}}>Every match automatically initiates a compliance record.</p>
            </div>
            <div className={styles.matchingCard}>
              <i className="ri-route-line" style={{fontSize: 32, color: "var(--st-brand-primary)", marginBottom: 16, display: "block"}}></i>
              <h3 className="st-h4">Distance-first matching</h3>
              <p className="st-body2" style={{marginTop: 8}}>Find the closest viable site to cut hauling costs and emissions.</p>
            </div>
            <div className={styles.matchingCard}>
              <i className="ri-truck-line" style={{fontSize: 32, color: "var(--st-brand-primary)", marginBottom: 16, display: "block"}}></i>
              <h3 className="st-h4">Hauling on the same network</h3>
              <p className="st-body2" style={{marginTop: 8}}>Instantly request verified haulers to move your matched loads.</p>
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">Turn your surplus into supply.</h2>
          <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`} style={{marginTop: 32}}>Post a listing</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
