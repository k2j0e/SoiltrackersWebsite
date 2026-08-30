import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Compliance & Dispatch Platform — SoilTracker",
  description: "One platform. Five seats at the table. Zero blind spots. Keep every project, permit, and haul in one verified record.",
};

export default function Platform() {
  return (
    <>
      <Nav primaryCtaLabel="Book Founder Call" primaryCtaHref="/get-started" />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>THE COMPLIANCE & DISPATCH PLATFORM</div>
            <h1 className="st-h1" style={{ maxWidth: 840, margin: "16px auto 20px" }}>
              One Platform. Five Seats at the Table. Zero Blind Spots.
            </h1>
            <p className="st-body1" style={{ color: "var(--st-ink-700)", margin: "0 auto 36px", maxWidth: 740, fontSize: 18, lineHeight: 1.6 }}>
              From project setup to the final load reconciliation, SoilTracker connects the field, the office, the hauler, and the environmental consultant on one single source of truth.
            </p>
            <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>
              Book a 15-Minute Founder Call
            </Link>
          </div>
          <div className={styles.browserFrame}>
            <div className={styles.browserHeader}>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.dashboardGraphic}>
                <div className={styles.dashSidebar}>
                  <div className={styles.dashSkeletonBar}></div>
                  <div className={styles.dashSkeletonBar}></div>
                  <div className={styles.dashSkeletonBar} style={{width: "80%"}}></div>
                  <div className={styles.dashSkeletonBar} style={{width: "60%"}}></div>
                </div>
                <div className={styles.dashMain}>
                  <div className={styles.dashCards}>
                    <div className={styles.dashCard}>
                      <div className={styles.dashSkeletonBar} style={{width: "40%", height: 12}}></div>
                      <div className={styles.dashCardValue}></div>
                    </div>
                    <div className={styles.dashCard}>
                      <div className={styles.dashSkeletonBar} style={{width: "50%", height: 12, opacity: 0.5}}></div>
                      <div className={styles.dashCardValue}></div>
                    </div>
                    <div className={styles.dashCard}>
                      <div className={styles.dashSkeletonBar} style={{width: "30%", height: 12}}></div>
                      <div className={styles.dashCardValue}></div>
                    </div>
                  </div>
                  <div className={styles.dashList}>
                    <div className={styles.dashListItem}></div>
                    <div className={styles.dashListItem}></div>
                    <div className={styles.dashListItem}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1 */}
        <section className={styles.featureSection} id="compliance">
          <div className={styles.featureInner}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>PROJECTS & PRE-CLEARANCE</div>
              <h2 className="st-h2">The chain starts before the first truck rolls</h2>
              <p className="st-body1">Set up sites and documentation so that when hauling starts, regulatory due diligence is verified automatically.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Guided setup: Define Sites → Upload Characterization → Invite Stakeholders</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Versioned permits & compliance filings</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Stakeholder pre-clearance and soil test verification</span></li>
              </ul>
            </div>
            <div className={`${styles.featureImage} ${styles.featureImageProject}`}>
              <div className={styles.docGraphic}>
                <div className={styles.docHeader}><i className="ri-shield-check-fill"></i> Compliance Verified</div>
                <div className={styles.docLine} style={{width:"100%"}}></div>
                <div className={styles.docLine} style={{width:"80%"}}></div>
                <div className={styles.docLine} style={{width:"95%"}}></div>
                <div className={styles.docLine} style={{width:"60%", marginTop: 24}}></div>
                <div className={styles.docBadge}>Approved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2 */}
        <section className={styles.featureSection} style={{background: "var(--st-surface-muted)"}} id="dispatch">
          <div className={`${styles.featureInner} ${styles.reverse}`}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>DISPATCH & AUTOMATIC TICKETING</div>
              <h2 className="st-h2">Today&apos;s hauls, without the phone tag</h2>
              <p className="st-body1">Real-time tracking means you always know where your soil is and exactly when it arrives with defensible timestamps.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Each load a custody event with source, truck, destination, timestamp</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>GPS and geofence departure & arrival verification</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Digital tickets generated instantly — zero paper loss</span></li>
              </ul>
            </div>
            <div className={`${styles.featureImage} ${styles.featureImageDispatch}`}>
              <div className={styles.mapGraphic}>
                <div className={styles.mapRoute}>
                  <div className={styles.mapRouteFill}></div>
                </div>
                <div className={styles.mapPin} style={{left: "20%", top: "70%"}}><i className="ri-building-2-line"></i></div>
                <div className={styles.mapPin} style={{left: "80%", top: "30%"}}><i className="ri-map-pin-2-fill"></i></div>
                <div className={styles.mapTruck}><i className="ri-truck-fill"></i></div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3 */}
        <section className={styles.featureSection} id="reporting">
          <div className={styles.featureInner}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>REPORTING & RECONCILIATION</div>
              <h2 className="st-h2">The custody record writes itself</h2>
              <p className="st-body1">Generate audit-ready reports with one click, backed by tamper-evident digital tracking data.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Load-by-load custody history with proof of work</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Role-scoped regulator, QP, and facility views</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Exportable monthly volumes and billing reconciliation packages</span></li>
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
            <div className={styles.seatCard} id="contractors">
              <i className="ri-building-4-line"></i>
              <h3 className="st-h4">Contractors</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Manage sites, verify hauler tickets, and reconcile billing without delay.</p>
            </div>
            <div className={styles.seatCard} id="qps">
              <i className="ri-shield-check-line"></i>
              <h3 className="st-h4">Environmental QPs</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Pre-screen soil tests, attach SAPs, and export audit packages.</p>
            </div>
            <div className={styles.seatCard} id="fleet">
              <i className="ri-steering-2-line"></i>
              <h3 className="st-h4">Fleet Admins</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Dispatch and track trucks live with invoice-backed proof of work.</p>
            </div>
            <div className={styles.seatCard} id="drivers">
              <i className="ri-user-star-line"></i>
              <h3 className="st-h4">Drivers</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Nothing to install or learn — the truck&apos;s GPS logs every load automatically.</p>
            </div>
            <div className={styles.seatCard} id="facilities">
              <i className="ri-map-pin-2-line"></i>
              <h3 className="st-h4">Receiving Pits</h3>
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Gatekeeper validation ensures only pre-approved soil is accepted.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">See it on your own project.</h2>
          <p className="st-body1" style={{ maxWidth: 620, margin: "0 auto 32px", color: "var(--st-ink-700)" }}>
            Founding member access is open. Book a 15-minute call directly with our founding team.
          </p>
          <Link href="/get-started" className={`${styles.buttonPrimary} st-button-txt`} style={{marginBottom: 0}}>
            Book a 15-Minute Founder Call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
