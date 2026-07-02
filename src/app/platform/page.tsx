import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform — Soiltrackers",
  description: "One unbroken chain of custody, from dig to drop-off. Keep every project, permit, and haul in one record.",
};

export default function Platform() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className="st-sub-caps">THE PLATFORM</div>
            <h1 className="st-h1">One unbroken chain of custody, from dig to drop-off</h1>
            <p className="st-body1" style={{ color: "var(--st-ink-600)", margin: "24px 0 36px", maxWidth: 620 }}>
              From project setup to the last load, Soiltrackers keeps every project, permit, and haul in one record — the office, the cab, and the regulator looking at the same live picture.
            </p>
            <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>Book a demo</Link>
          </div>
          <div className={styles.browserFrame}>
            <div className={styles.browserHeader}>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
            </div>
            <div className={styles.browserContent} style={{alignItems: "flex-start", padding: 24}}>
              <div style={{display: "flex", gap: 24, width: "100%", height: "100%"}}>
                <div style={{width: 200, background: "var(--st-ink-50)", borderRadius: 8, padding: 16, display: "flex", flexDirection: "column", gap: 12}}>
                  <div style={{width: "100%", height: 24, background: "var(--st-ink-100)", borderRadius: 4}}></div>
                  <div style={{width: "80%", height: 16, background: "rgba(0,0,0,0.05)", borderRadius: 4}}></div>
                  <div style={{width: "60%", height: 16, background: "rgba(0,0,0,0.05)", borderRadius: 4}}></div>
                </div>
                <div style={{flex: 1, display: "flex", flexDirection: "column", gap: 24}}>
                  <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16}}>
                    <div style={{height: 100, background: "white", borderRadius: 8, border: "1px solid var(--st-ink-100)", padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                      <div style={{width: "40%", height: 12, background: "var(--st-ink-150)", borderRadius: 4}}></div>
                      <div style={{width: "60%", height: 32, background: "var(--st-brand-primary)", opacity: 0.1, borderRadius: 8}}></div>
                    </div>
                    <div style={{height: 100, background: "white", borderRadius: 8, border: "1px solid var(--st-ink-100)", padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                      <div style={{width: "50%", height: 12, background: "var(--st-ink-150)", borderRadius: 4}}></div>
                      <div style={{width: "40%", height: 32, background: "var(--st-logo-leaf)", opacity: 0.2, borderRadius: 8}}></div>
                    </div>
                    <div style={{height: 100, background: "white", borderRadius: 8, border: "1px solid var(--st-ink-100)", padding: 16, display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                      <div style={{width: "30%", height: 12, background: "var(--st-ink-150)", borderRadius: 4}}></div>
                      <div style={{width: "70%", height: 32, background: "var(--st-brand-primary)", opacity: 0.1, borderRadius: 8}}></div>
                    </div>
                  </div>
                  <div style={{flex: 1, background: "white", borderRadius: 8, border: "1px solid var(--st-ink-100)", padding: 16}}>
                    <div style={{width: "100%", height: 32, borderBottom: "1px solid var(--st-ink-50)", marginBottom: 12}}></div>
                    <div style={{width: "100%", height: 32, borderBottom: "1px solid var(--st-ink-50)", marginBottom: 12}}></div>
                    <div style={{width: "100%", height: 32, borderBottom: "1px solid var(--st-ink-50)"}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1 */}
        <section className={styles.featureSection}>
          <div className={styles.featureInner}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps">Projects & compliance</div>
              <h2 className="st-h2">The chain starts before the first truck rolls</h2>
              <p className="st-body1">Set up sites and documentation so that when hauling starts, compliance is guaranteed automatically.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Guided setup: Define Sites → Upload Documents → Invite Stakeholders</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Versioned permits</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Book regulatory review</span></li>
              </ul>
            </div>
            <div className={`${styles.featureImage} ${styles.featureImageProject}`}>
              <div className={styles.docGraphic}>
                <div className={styles.docHeader}><i className="ri-shield-check-fill"></i> Compliance Verified</div>
                <div className={styles.docLine} style={{width:"80%"}}></div>
                <div className={styles.docLine} style={{width:"60%"}}></div>
                <div className={styles.docLine} style={{width:"90%"}}></div>
                <div className={styles.docLine} style={{width:"40%", marginTop: 16}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2 */}
        <section className={styles.featureSection} style={{background: "var(--st-surface-muted)"}}>
          <div className={`${styles.featureInner} ${styles.reverse}`}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps">Dispatch & hauling</div>
              <h2 className="st-h2">Today's hauls, without the phone tag</h2>
              <p className="st-body1">Real-time tracking means you always know where your soil is and exactly when it arrives.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Each load a custody event with source, truck, destination, timestamp</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>GPS and geofence verification</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Digital tickets generated instantly</span></li>
              </ul>
            </div>
            <div className={`${styles.featureImage} ${styles.featureImageDispatch}`}>
              <div className={styles.mapGraphic}>
                <div className={styles.mapRoute}></div>
                <div className={styles.mapPin} style={{left: "20%", top: "70%"}}><i className="ri-building-2-line"></i></div>
                <div className={styles.mapPin} style={{left: "80%", top: "30%"}}><i className="ri-map-pin-2-line"></i></div>
                <div className={styles.mapTruck}><i className="ri-truck-fill"></i></div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3 */}
        <section className={styles.featureSection}>
          <div className={styles.featureInner}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps">Reporting & oversight</div>
              <h2 className="st-h2">The custody record writes itself</h2>
              <p className="st-body1">Generate compliant reports with one click, backed by immutable tracking data.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Load-by-load custody history</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Role-scoped regulator and QP views</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Exportable monthly volumes</span></li>
              </ul>
            </div>
            <div className={`${styles.featureImage} ${styles.featureImageReport}`}>
              <div className={styles.chartGraphic}>
                <div className={styles.chartBar} style={{height: "30%"}}></div>
                <div className={styles.chartBar} style={{height: "50%"}}></div>
                <div className={styles.chartBar} style={{height: "80%", background: "var(--st-brand-primary)", opacity: 1}}></div>
                <div className={styles.chartBar} style={{height: "40%"}}></div>
                <div className={styles.chartBar} style={{height: "60%"}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Seats Band */}
        <section className={styles.seatsBand}>
          <h2 className="st-h2">One platform, five seats at the table</h2>
          <div className={styles.seatsGrid}>
            <div className={styles.seatCard}>
              <i className="ri-building-4-line"></i>
              <h3 className="st-h4">Contractors</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Manage sites and oversee all hauls.</p>
            </div>
            <div className={styles.seatCard}>
              <i className="ri-government-line"></i>
              <h3 className="st-h4">Government</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Audit the full chain of custody.</p>
            </div>
            <div className={styles.seatCard}>
              <i className="ri-steering-2-line"></i>
              <h3 className="st-h4">Fleet admins</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Dispatch and track trucks live.</p>
            </div>
            <div className={styles.seatCard}>
              <i className="ri-user-star-line"></i>
              <h3 className="st-h4">Drivers</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Log loads with two taps.</p>
            </div>
            <div className={styles.seatCard}>
              <i className="ri-map-pin-2-line"></i>
              <h3 className="st-h4">Site operators</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Verify material and specs.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">See it on your own project.</h2>
          <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`} style={{marginBottom: 0}}>Book a demo</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
