import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Compliance & Dispatch Platform | SoilTracker",
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
              <div className={styles.browserDots}>
                <div className={styles.browserDot} style={{ background: "#FDA4AF" }}></div>
                <div className={styles.browserDot} style={{ background: "#FDE047" }}></div>
                <div className={styles.browserDot} style={{ background: "#86EFAC" }}></div>
              </div>
              <div className={styles.browserUrl}>app.soiltrackers.ca/projects/SRIS-0065923E/live</div>
              <div className={styles.browserLiveBadge}>
                <span className={styles.browserLivePulse}></span>
                14 Trucks Live
              </div>
            </div>
            <div className={styles.browserContent}>
              <div className={styles.cmdCenter}>
                <div className={styles.cmdHeader}>
                  <div>
                    <div className={styles.cmdProjectName}>Brentwood Station Excavation ➔ Lehigh Fraser Valley Fill</div>
                    <div className={styles.cmdProjectMeta}>SRIS Confirmation: #0065923E · Qualified Professional: EXP Services Inc. (CSAP Verified)</div>
                  </div>
                  <span className={styles.cmdStatusPill}>CSR Relocation Active</span>
                </div>
                <div className={styles.cmdKpiGrid}>
                  <div className={styles.cmdKpiCard}>
                    <div className={styles.cmdKpiLabel}>Relocated Volume</div>
                    <div className={styles.cmdKpiValue}>12,450 m³</div>
                    <div className={styles.cmdKpiSub}>↑ 84% of 14,800 m³ permitted cap</div>
                  </div>
                  <div className={styles.cmdKpiCard}>
                    <div className={styles.cmdKpiLabel}>Active Telematics</div>
                    <div className={styles.cmdKpiValue}>14 Trucks</div>
                    <div className={styles.cmdKpiSub} style={{ color: "var(--st-success)" }}>● 100% Geofence Automated</div>
                  </div>
                  <div className={styles.cmdKpiCard}>
                    <div className={styles.cmdKpiLabel}>Soil Acceptance</div>
                    <div className={styles.cmdKpiValue}>Commercial (CL)</div>
                    <div className={styles.cmdKpiSub}>CSR Schedule 3.1 Clean Fill</div>
                  </div>
                </div>
                <div className={styles.cmdRouteScene}>
                  <div className={styles.cmdRouteGrid}></div>
                  <div className={styles.cmdRouteTrack}></div>
                  <div className={styles.cmdPinSource}>
                    <span style={{ color: "var(--st-success)" }}>●</span> Pad 2 Source (Brentwood)
                  </div>
                  <div className={styles.cmdTruckMarker}>
                    <i className="ri-truck-fill" style={{ color: "var(--st-logo-leaf)" }}></i> #208 En Route (ETA 14m)
                  </div>
                  <div className={styles.cmdPinDest}>
                    <i className="ri-map-pin-2-fill" style={{ color: "var(--st-brand-primary)" }}></i> Lehigh Receiving Pit
                  </div>
                </div>
                <div className={styles.cmdTable}>
                  <div className={styles.cmdTableRow}>
                    <span>Load ID</span>
                    <span>Hauler &amp; Unit</span>
                    <span>Certified Volume</span>
                    <span style={{ textAlign: "center" }}>Custody Status</span>
                  </div>
                  <div className={styles.cmdTableRow}>
                    <span style={{ fontWeight: 600 }}>#4187 · 14:42</span>
                    <span>Westcoast Aggregate · #BC-228</span>
                    <span>14.2 m³ (Tri-Drive Capacity)</span>
                    <span className={styles.cmdSealedBadge}>✓ Sealed &amp; Delivered</span>
                  </div>
                  <div className={styles.cmdTableRow}>
                    <span style={{ fontWeight: 600 }}>#4188 · 14:48</span>
                    <span>Lions Gate Earth · #LG-104</span>
                    <span>15.8 m³ (Transfer Capacity)</span>
                    <span className={styles.cmdTransitBadge}>● In Transit (Corridor Verified)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 1: BC CSR Compliance Matrix */}
        <section className={styles.featureSection} id="compliance">
          <div className={styles.featureInner}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>PROJECTS &amp; BC COMPLIANCE</div>
              <h2 className="st-h2">The chain starts before the first truck rolls</h2>
              <p className="st-body1">Define source and receiving sites, verify CSR Schedule 2 activities, upload soil characterization reports, and invite your Qualified Professional (QP/CSAP). Compliance is locked before a single cubic meter moves.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Guided setup:</strong> Source PID → Receiving SRIS ID → Soil Quality Characterization</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>CSR Schedule 3.1 check:</strong> Automated standards matching (AL, RL, CL, IL)</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>QP/CSAP sign-off:</strong> Cryptographically signed approvals tied to permit limits</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Ministry notification ready:</strong> One-click BC EMA relocation package export</span></li>
              </ul>
            </div>
            <div className={styles.featureImage}>
              <div className={styles.csrMatrixCard}>
                <div className={styles.csrMatrixHead}>
                  <div>
                    <div className={styles.csrMatrixTitle}>BC Soil Relocation Pre-Clearance Matrix</div>
                    <div className={styles.csrMatrixSub}>Environmental Management Act · Contaminated Sites Regulation</div>
                  </div>
                  <span className={styles.cmdSealedBadge}>CSR Compliant ✓</span>
                </div>
                <div className={styles.csrSitesGrid}>
                  <div className={styles.csrSiteBox}>
                    <div className={styles.csrSiteBoxLabel}>Source Site (Generator)</div>
                    <div className={styles.csrSiteBoxValue}>423 6th St, West Vancouver</div>
                    <div className={styles.csrSiteBoxMeta}>PID: 007-249-322 · Schedule 2 Active</div>
                  </div>
                  <div className={styles.csrSiteBox}>
                    <div className={styles.csrSiteBoxLabel}>Receiving Site (Intake)</div>
                    <div className={styles.csrSiteBoxValue}>1540 Pipeline Rd, Coquitlam</div>
                    <div className={styles.csrSiteBoxMeta}>SRIS #0065923E · Zoning: Commercial CL</div>
                  </div>
                </div>
                <div className={styles.csrChecklist}>
                  <div className={styles.csrCheckItem}>
                    <span>Schedule 3.1 Soil Characterization</span>
                    <span className={styles.csrCheckStatus}><i className="ri-checkbox-circle-fill"></i> Passed (Below CL Limits)</span>
                  </div>
                  <div className={styles.csrCheckItem}>
                    <span>Receiving Site Intake Authorization</span>
                    <span className={styles.csrCheckStatus}><i className="ri-checkbox-circle-fill"></i> Verified on File</span>
                  </div>
                  <div className={styles.csrCheckItem}>
                    <span>Qualified Professional (QP / CSAP) Sign-off</span>
                    <span className={styles.csrCheckStatus}><i className="ri-checkbox-circle-fill"></i> Digitally Sealed</span>
                  </div>
                  <div className={styles.csrCheckItem}>
                    <span>BC Ministry SRIS Notification Status</span>
                    <span className={styles.csrCheckStatus}><i className="ri-checkbox-circle-fill"></i> Acknowledged &amp; Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 2: Zero-Touch Telematics & Geofencing (NO DRIVER APPS) */}
        <section className={styles.featureSection} style={{background: "var(--st-surface-muted)"}} id="dispatch">
          <div className={`${styles.featureInner} ${styles.reverse}`}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>ZERO-TOUCH FLEET TELEMATICS</div>
              <h2 className="st-h2">Zero driver distraction. 100% automated GPS &amp; geofencing.</h2>
              <p className="st-body1">Drivers never have to download an app, tap a screen, or fiddle with phones in the cab. On-truck telematics and virtual geofences detect when a truck enters the excavation pad, track load departure volumes, monitor transit corridors, and seal delivery at the receiving gate automatically.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Zero driver apps:</strong> No phone handling, no typing, no distraction in the cab</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Virtual geofencing:</strong> Automated pickup and delivery logging at pads and gates</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Route corridor security:</strong> Real-time detour detection and unauthorized dump alerts</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Fleet agnostic:</strong> Direct API sync with Geotab, Samsara, or plug-and-play GPS tags</span></li>
              </ul>
            </div>
            <div className={styles.featureImage}>
              <div className={styles.geofenceCard}>
                <div className={styles.geofenceHead}>
                  <div>
                    <div className={styles.geofenceTitle}>Automated Load Telematics</div>
                    <div className={styles.geofenceSub}>Unit #208 (Westcoast Aggregate) · Telematics Stream Active</div>
                  </div>
                  <span className={styles.geofencePillZero}>100% Zero-Touch Driver</span>
                </div>
                <div className={styles.geofenceTimeline}>
                  <div className={styles.geofenceStep}>
                    <div className={styles.geofenceStepNum}>01</div>
                    <div>
                      <div className={styles.geofenceStepTitle}>Source Geofence Auto-Entered · 13:12 PT</div>
                      <div className={styles.geofenceStepDesc}>Truck entered Brentwood Pad 2 perimeter. Excavation loading commenced.</div>
                    </div>
                  </div>
                  <div className={styles.geofenceStep}>
                    <div className={styles.geofenceStepNum}>02</div>
                    <div>
                      <div className={styles.geofenceStepTitle}>Load Departure Confirmed · 13:20 PT</div>
                      <div className={styles.geofenceStepDesc}>Excavation load recorded: Tri-drive capacity ~14.2 m³ Clean Fill bound to SRNF record.</div>
                    </div>
                  </div>
                  <div className={styles.geofenceStep}>
                    <div className={`${styles.geofenceStepNum} ${styles.geofenceStepNumActive}`}>03</div>
                    <div>
                      <div className={styles.geofenceStepTitle}>Transit Corridor Sealed · In Transit</div>
                      <div className={styles.geofenceStepDesc}>GPS breadcrumbs streaming along Hwy 1 corridor. 0 detour deviations.</div>
                    </div>
                  </div>
                  <div className={styles.geofenceStep}>
                    <div className={styles.geofenceStepNum}>04</div>
                    <div>
                      <div className={styles.geofenceStepTitle}>Receiving Geofence Auto-Logged · 13:58 PT</div>
                      <div className={styles.geofenceStepDesc}>Gate intake verified at Lehigh Pit. Load signed and custody sealed automatically.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 3: Tamper-Evident Manifest & Audit Trail */}
        <section className={styles.featureSection} id="reporting">
          <div className={styles.featureInner}>
            <div className={styles.featureContent}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)" }}>REPORTING &amp; REGULATORY AUDIT</div>
              <h2 className="st-h2">The custody record writes itself</h2>
              <p className="st-body1">Every load is a signed, time-stamped, cryptographically verified manifest. Edits are permanently logged with the actor and reason. When consultants or ministry auditors ask, export the entire defensible custody history in two clicks.</p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Cryptographic hash seal:</strong> SHA-256 tamper-evident integrity for every load</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>3-party automated record:</strong> Generator, transporter telematics, and receiver gate</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Photo &amp; load verification:</strong> Objective digital proof permanently bound to the ticket</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span><strong>Defensible exports:</strong> Instant regulatory-grade PDF summaries and signed-JSON packages</span></li>
              </ul>
            </div>
            <div className={styles.featureImage}>
              <div className={styles.manifestCard}>
                <div className={styles.manifestHead}>
                  <div>
                    <div className={styles.manifestTitle}>DIGITAL MANIFEST #4187</div>
                    <div className={styles.manifestSub}>BC Soil Relocation Notification #0065923E</div>
                  </div>
                  <span className={styles.cmdSealedBadge}>Sealed &amp; Verified</span>
                </div>
                <div>
                  <span className={styles.manifestHash}>SHA-256: 7f83b165...e2d1a049 [Immutable]</span>
                </div>
                <div className={styles.manifestGrid}>
                  <div className={styles.manifestItem}><span>Source Site</span>Brentwood Pad 2 (PID 007-249-322)</div>
                  <div className={styles.manifestItem}><span>Destination</span>Lehigh Fraser Valley Pit</div>
                  <div className={styles.manifestItem}><span>Material Spec</span>Clean Fill · Commercial (CL)</div>
                  <div className={styles.manifestItem}><span>Estimated Volume</span>14.2 m³ (Tri-Drive)</div>
                  <div className={styles.manifestItem}><span>Hauler &amp; Unit</span>Westcoast Aggregate · Unit #228</div>
                  <div className={styles.manifestItem}><span>Audit Status</span>3 of 3 Checkpoints Verified</div>
                </div>
                <div className={styles.manifestSignatures}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--st-ink-400)" }}>Generator Sign-off:</span>
                    <strong style={{ color: "var(--st-ink-900)" }}>Pad 2 Field Operations · 13:12 PT</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--st-ink-400)" }}>GPS Telematics Trail:</span>
                    <strong style={{ color: "var(--st-success)" }}>Unbroken Route Verified · 13:58 PT</strong>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ color: "var(--st-ink-400)" }}>Receiver Acceptance:</span>
                    <strong style={{ color: "var(--st-ink-900)" }}>Lehigh Gate Intake #12 · 14:02 PT</strong>
                  </div>
                </div>
                <div className={styles.manifestExportBtn}>
                  Export CSR Relocation Audit Package (PDF) →
                </div>
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
              <p className="st-body2" style={{color: "var(--st-ink-600)", marginTop: 8}}>Nothing to install or learn as the truck&apos;s GPS logs every load automatically.</p>
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
