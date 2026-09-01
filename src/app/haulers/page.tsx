import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Hauling Fleets & Owner-Operators | SoilTracker",
  description: "Keep your trucks rolling. High-volume earthworks hauls, zero-touch GPS telematics with no driver apps, and 100% backed invoice reconciliation with zero lost tickets.",
};

export default function Haulers() {
  return (
    <>
      <Nav primaryCtaLabel="Book Founder Call" primaryCtaHref="/get-started" />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={`st-sub-caps ${styles.eyebrow}`}>FOR HAULING FLEETS &amp; OWNER-OPERATORS</div>
              <h1 className="st-h1">Keep your trucks rolling. Prove every load without lifting a finger.</h1>
              <p className="st-body1" style={{ color: "var(--st-ink-700)", margin: "20px 0 32px", fontSize: 18, lineHeight: 1.6 }}>
                Get matched to nearby high-volume civil earthworks hauls and dispatch from one central board. Every pickup and drop-off is captured automatically by GPS and geofencing with zero apps for your drivers to learn, and tamper-evident proof of work behind every invoice you send.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimaryLeaf} st-button-txt`}>
                  <i className="ri-truck-line"></i> Join the Hauler Network
                </Link>
                <Link href="#capture" className={`${styles.buttonOutlineLight} st-button-txt`}>
                  See How Load Capture Works
                </Link>
              </div>
            </div>
            
            {/* Live Fleet Telematics & Settlement Console */}
            <div className={styles.dispatchConsole}>
              <div className={styles.consoleHeader}>
                <div className={styles.consoleTitleGroup}>
                  <div className={styles.livePulseGroup}>
                    <span className={styles.livePulseDot}></span>
                    <span className={styles.consoleTitle}>Live Fleet Telematics Stream</span>
                  </div>
                  <div className={styles.consoleMeta}>Metro Vancouver &amp; Fraser Valley Corridor</div>
                </div>
                <span className={styles.activeTrucksBadge}>18 Trucks Active</span>
              </div>

              {/* Financial Tally Strip */}
              <div className={styles.financialStrip}>
                <div className={styles.financialItem}>
                  <span className={styles.financialLabel}>Today&apos;s Verified Hauls</span>
                  <strong className={styles.financialValue}>42 Loads (~630 m³)</strong>
                </div>
                <div className={styles.financialDivider}></div>
                <div className={styles.financialItem}>
                  <span className={styles.financialLabel}>Approved for Billing</span>
                  <strong className={styles.financialValue} style={{ color: "var(--st-brand-primary)" }}>$14,820.00 (100%)</strong>
                </div>
              </div>

              {/* Live Truck Unit Stream */}
              <div className={styles.unitStream}>
                {/* Unit 1 */}
                <div className={styles.unitCard}>
                  <div className={styles.unitTop}>
                    <div className={styles.unitIdentity}>
                      <span className={styles.unitBadge}>Unit #BC-208</span>
                      <span className={styles.unitClass}>Tri-Drive (~15 m³ Capacity)</span>
                    </div>
                    <span className={styles.statusApproved}>✓ Approved for Billing</span>
                  </div>
                  <div className={styles.unitRoute}>
                    <span>Brentwood Pad 2</span>
                    <i className="ri-arrow-right-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Lehigh Receiving Pit</span>
                  </div>
                  <div className={styles.unitFooter}>
                    <span><i className="ri-road-map-line"></i> Geofence Departure Verified · Clean Fill</span>
                    <span className={styles.timestampTag}>Auto-Geofenced 13:58 PT</span>
                  </div>
                </div>

                {/* Unit 2 */}
                <div className={styles.unitCard}>
                  <div className={styles.unitTop}>
                    <div className={styles.unitIdentity}>
                      <span className={styles.unitBadge}>Unit #BC-114</span>
                      <span className={styles.unitClass}>Truck &amp; Transfer (~22 m³ Capacity)</span>
                    </div>
                    <span className={styles.statusTransit}>● Hwy 1 Corridor (GPS Active)</span>
                  </div>
                  <div className={styles.unitRoute}>
                    <span>Coquitlam Pipeline</span>
                    <i className="ri-arrow-right-line" style={{ color: "#0284c7" }}></i>
                    <span>Surrey Campbell Heights</span>
                  </div>
                  <div className={styles.unitFooter}>
                    <span><i className="ri-compass-3-line"></i> Speed: 84 km/h · Transit Corridor Active</span>
                    <span className={styles.timestampTag}>ETA 12 mins</span>
                  </div>
                </div>

                {/* Unit 3 */}
                <div className={styles.unitCard} style={{ borderBottom: "none" }}>
                  <div className={styles.unitTop}>
                    <div className={styles.unitIdentity}>
                      <span className={styles.unitBadge}>Unit #BC-305</span>
                      <span className={styles.unitClass}>Tandem (~10 m³ Capacity)</span>
                    </div>
                    <span className={styles.statusBackhaul}>⇄ Return Backhaul Matched</span>
                  </div>
                  <div className={styles.unitRoute}>
                    <span>Delta Farmland</span>
                    <i className="ri-arrow-right-line" style={{ color: "var(--st-brand-primary)" }}></i>
                    <span>Burnaby Cut &amp; Fill</span>
                  </div>
                  <div className={styles.unitFooter}>
                    <span><i className="ri-gas-station-line"></i> Deadhead Eliminated: 24 km Return Saved</span>
                    <span className={styles.timestampTag}>Pickup Staged</span>
                  </div>
                </div>
              </div>

              <div className={styles.consoleFooter}>
                <i className="ri-shield-check-fill" style={{ color: "var(--st-brand-primary)" }}></i>
                <span>All loads backed by tamper-evident GPS geofences and load counts. Zero paper tickets needed.</span>
              </div>
            </div>
          </div>
        </section>

        {/* The 3 Hauler Profit Pillars */}
        <section className={styles.valueProps}>
          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <i className="ri-file-check-line"></i>
            </div>
            <div className={styles.valueTag}>RAPID RECONCILIATION</div>
            <h3 className="st-h4" style={{ marginBottom: 10, color: "var(--st-ink-900)" }}>
              Billed in 5 minutes. Paid weeks faster.
            </h3>
            <p className="st-body2" style={{ color: "var(--st-ink-600)", lineHeight: 1.6 }}>
              Stop wasting days sorting through water-logged triplicate tickets at month-end. Invoices generate with GPS timestamps, route corridors, and verified load events attached. GCs approve bills without dispute.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <i className="ri-shield-user-line"></i>
            </div>
            <div className={styles.valueTag}>ZERO DRIVER DISTRACTION</div>
            <h3 className="st-h4" style={{ marginBottom: 10, color: "var(--st-ink-900)" }}>
              Zero apps for drivers. Zero cab friction.
            </h3>
            <p className="st-body2" style={{ color: "var(--st-ink-600)", lineHeight: 1.6 }}>
              Drivers never have to download an app, remember a password, or tap screens while steering 40-tonne rigs. The truck telematics and site geofences do 100% of the tracking automatically.
            </p>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueIconBox}>
              <i className="ri-repeat-2-line"></i>
            </div>
            <div className={styles.valueTag}>BACKHAUL OPTIMIZATION</div>
            <h3 className="st-h4" style={{ marginBottom: 10, color: "var(--st-ink-900)" }}>
              Monetize empty deadhead return miles.
            </h3>
            <p className="st-body2" style={{ color: "var(--st-ink-600)", lineHeight: 1.6 }}>
              Dropping off structural fill in Surrey? SoilTracker matches clean aggregate or topsoil hauls on the return leg so your trucks roll full in both directions, saving thousands in diesel every month.
            </p>
          </div>
        </section>

        {/* Automatic Load Capture & Telematics Corridor Engine */}
        <section className={styles.driverApp} id="capture">
          <div className={styles.driverAppInner}>
            {/* Visual 4-Stage Telematics Corridor Timeline */}
            <div className={styles.telematicsCard}>
              <div className={styles.telematicsHead}>
                <div>
                  <div className={styles.telematicsTitle}>Automated Geofence &amp; Load Stream</div>
                  <div className={styles.telematicsSub}>Unit #BC-208 · Brentwood Excavation ➔ Lehigh Receiving Pit</div>
                </div>
                <span className={styles.telematicsPill}>100% Automated Telematics</span>
              </div>

              <div className={styles.telematicsTimeline}>
                <div className={styles.telematicsStep}>
                  <div className={styles.stepIndicator}>01</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitleRow}>
                      <span className={styles.stepTitle}>Source Geofence Auto-Entered</span>
                      <span className={styles.stepTime}>07:14 PT</span>
                    </div>
                    <p className={styles.stepDesc}>
                      Truck crossed virtual boundary at Brentwood Pad 2. Excavation loading commenced automatically.
                    </p>
                  </div>
                </div>

                <div className={styles.telematicsStep}>
                  <div className={styles.stepIndicator}>02</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitleRow}>
                      <span className={styles.stepTitle}>Load Departure &amp; Volume Logged</span>
                      <span className={styles.stepTime}>07:22 PT</span>
                    </div>
                    <p className={styles.stepDesc}>
                      Load volume estimated by vehicle class (~14.2 m³ Clean Fill) and bound to digital manifest ticket #4187.
                    </p>
                  </div>
                </div>

                <div className={styles.telematicsStep}>
                  <div className={`${styles.stepIndicator} ${styles.stepIndicatorActive}`}>03</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitleRow}>
                      <span className={styles.stepTitle}>Transit Corridor Breadcrumb Stream</span>
                      <span className={styles.stepTime}>In Transit</span>
                    </div>
                    <p className={styles.stepDesc}>
                      High-frequency GPS tracking along Hwy 1 corridor. Zero unauthorized detour deviations detected.
                    </p>
                  </div>
                </div>

                <div className={styles.telematicsStep}>
                  <div className={styles.stepIndicator}>04</div>
                  <div className={styles.stepContent}>
                    <div className={styles.stepTitleRow}>
                      <span className={styles.stepTitle}>Receiving Geofence Auto-Logged</span>
                      <span className={styles.stepTime}>08:04 PT</span>
                    </div>
                    <p className={styles.stepDesc}>
                      Gate entry confirmed at Lehigh Pit. Receiving operator digital sign-off completed. Invoice line approved.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.telematicsFoot}>
                <i className="ri-cpu-line" style={{ color: "var(--st-brand-primary)", fontSize: 18 }}></i>
                <span>Hardware Agnostic: Syncs via Geotab API, Samsara API, or SoilTracker OBD Plug-and-Play Tags.</span>
              </div>
            </div>

            {/* Content Side */}
            <div className={styles.captureExplanation}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                AUTOMATIC TELEMATICS CAPTURE
              </div>
              <h2 className="st-h2">No app for your drivers. The truck reports itself.</h2>
              <p className="st-body1" style={{ margin: "16px 0 24px", color: "var(--st-ink-700)", lineHeight: 1.6 }}>
                Compliance and billing accuracy shouldn&apos;t depend on whether a driver remembered to tap a screen with muddy gloves. SoilTracker captures every load event automatically through geofencing and vehicle telematics, so your custody records and billing backups are 100% complete without human error.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span><strong>Zero in-cab distraction:</strong> No smartphones, no apps to install, and zero driver training.</span>
                </li>
                <li className={styles.checkItem}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span><strong>Hardware agnostic:</strong> Connect via Samsara, Geotab, ISAAC, or plug-and-play OBD trackers.</span>
                </li>
                <li className={styles.checkItem}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span><strong>Automated load logging:</strong> Every haul tracked by vehicle class and estimated volume without driver input.</span>
                </li>
                <li className={styles.checkItem}>
                  <i className="ri-checkbox-circle-fill"></i>
                  <span><strong>Dispute-proof backup:</strong> GPS arrival and departure stamps eliminate GC billing rejections.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Live Fleet Command & Invoicing Workstation */}
        <section className={styles.fleetAdmins}>
          <div className={styles.fleetAdminsInner}>
            <div className={styles.fleetAdminsHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                FLEET COMMAND &amp; AUTOMATED BILLING
              </div>
              <h2 className="st-h2">Your entire fleet dispatched and reconciled from one board</h2>
              <p className="st-body1" style={{ marginTop: 16, color: "var(--st-ink-700)", maxWidth: 740, margin: "16px auto 0" }}>
                Real-time visibility over every truck in your fleet, active cycle times, and automated invoice generation that matches hauler pay to GC billing in seconds.
              </p>
            </div>

            {/* High-Fidelity Dispatch Workstation (Lightened Enterprise Workstation) */}
            <div className={styles.workstationCard}>
              <div className={styles.workstationHeader}>
                <div className={styles.workstationTitle}>
                  <i className="ri-dashboard-3-line" style={{ color: "var(--st-brand-primary)" }}></i>
                  <span>SoilTracker Fleet Dispatcher — Metro Vancouver Command</span>
                </div>
                <div className={styles.workstationStats}>
                  <span className={styles.statPill}>18 Trucks Active</span>
                  <span className={styles.statPill}>42 Loads Delivered</span>
                  <span className={styles.statPill} style={{ background: "#ecfdf5", color: "#047857", borderColor: "#a7f3d0" }}>
                    100% Invoice Backed
                  </span>
                </div>
              </div>

              <div className={styles.workstationGrid}>
                {/* Left: Unit Roster */}
                <div className={styles.rosterCol}>
                  <div className={styles.rosterHead}>
                    <span>Active Units (4 on Corridor)</span>
                    <span>Cycle Efficiency</span>
                  </div>
                  <div className={styles.rosterList}>
                    <div className={`${styles.rosterItem} ${styles.rosterItemActive}`}>
                      <div>
                        <div className={styles.rosterUnitId}>Unit #BC-208 · Tri-Drive</div>
                        <div className={styles.rosterSub}>Driver: Mike T. · Brentwood Pad 2</div>
                      </div>
                      <span className={styles.cycleGood}>+22% Speed</span>
                    </div>

                    <div className={styles.rosterItem}>
                      <div>
                        <div className={styles.rosterUnitId}>Unit #BC-114 · Transfer</div>
                        <div className={styles.rosterSub}>Driver: Dave K. · Hwy 1 Transit</div>
                      </div>
                      <span className={styles.cycleGood}>On Schedule</span>
                    </div>

                    <div className={styles.rosterItem}>
                      <div>
                        <div className={styles.rosterUnitId}>Unit #BC-305 · Tandem</div>
                        <div className={styles.rosterSub}>Driver: Jas S. · Delta Backhaul</div>
                      </div>
                      <span className={styles.cycleGood}>Full Return</span>
                    </div>

                    <div className={styles.rosterItem}>
                      <div>
                        <div className={styles.rosterUnitId}>Unit #BC-412 · Tri-Axle</div>
                        <div className={styles.rosterSub}>Driver: Ray P. · Surrey Intake Gate</div>
                      </div>
                      <span className={styles.cycleGood}>Gate Logged</span>
                    </div>
                  </div>
                </div>

                {/* Right: Active Live Radar & Batch Billing Panel */}
                <div className={styles.radarCol}>
                  <div className={styles.radarHeader}>
                    <span>Active Corridor Telematics</span>
                    <span className={styles.radarLivePill}>● Live Telematics Stream</span>
                  </div>
                  <div className={styles.corridorRouteDisplay}>
                    <div className={styles.routeWaypoint}>
                      <span className={styles.pointDotSource}>●</span>
                      <div>
                        <strong>Brentwood Pad 2 (Burnaby)</strong>
                        <span>Loading Excavation · 07:14 PT</span>
                      </div>
                    </div>
                    <div className={styles.routeTransitBar}>
                      <div className={styles.routeTransitFill} style={{ width: "78%" }}>
                        <i className="ri-truck-fill"></i>
                      </div>
                    </div>
                    <div className={styles.routeWaypoint}>
                      <span className={styles.pointDotDest}><i className="ri-map-pin-2-fill"></i></span>
                      <div>
                        <strong>Lehigh Fraser Valley Pit</strong>
                        <span>Receiving Gate · ETA 8 mins</span>
                      </div>
                    </div>
                  </div>

                  {/* Batch Invoicing Bar */}
                  <div className={styles.reconciliationBar}>
                    <div className={styles.reconciliationInfo}>
                      <i className="ri-file-text-line" style={{ color: "var(--st-brand-primary)", fontSize: 20 }}></i>
                      <div>
                        <div style={{ fontWeight: 700, color: "var(--st-ink-900)", fontSize: 13 }}>
                          Batch Invoice #INV-2026-089 Prepared
                        </div>
                        <div style={{ color: "var(--st-ink-600)", fontSize: 12 }}>
                          42 loads · ~630 m³ verified · Zero missing tickets
                        </div>
                      </div>
                    </div>
                    <Link href="/get-started" className={styles.exportInvoiceBtn}>
                      Export Invoice Backup (PDF/CSV) →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Realistic Hauler Efficiency & Value Section */}
        <section className={styles.savingsSection}>
          <div className={styles.savingsInner}>
            <div className={styles.savingsHeader}>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
                THE FLEET EFFICIENCY ADVANTAGE
              </div>
              <h2 className="st-h2">Faster billing. Zero disputed loads. More profitable miles.</h2>
              <p className="st-body1" style={{ color: "var(--st-ink-700)", margin: "16px auto 0", maxWidth: 720 }}>
                See how automated geofenced load capture eliminates month-end paperwork, protects your billed hours, and accelerates payment cycles across your fleet.
              </p>
            </div>

            <div className={styles.savingsGrid}>
              {/* Card 1: Conventional Paper Fleet */}
              <div className={`${styles.savingsCard} ${styles.savingsCardWaste}`}>
                <div className={styles.savingsCardTitle} style={{ color: "rgb(220, 38, 38)" }}>
                  The Paper Drag
                </div>
                <div className={styles.savingsAmount} style={{ color: "var(--st-ink-900)", fontSize: 28, lineHeight: 1.2 }}>
                  Manual Friction &amp; 60-Day Pay
                </div>
                <div className={styles.savingsSubtitle} style={{ color: "var(--st-ink-500)" }}>
                  Typical operational headaches of paper triplicate slips
                </div>
                <ul className={styles.savingsList}>
                  <li className={styles.savingsListItem}>
                    <span>Month-End Reconciliation</span>
                    <strong style={{ color: "rgb(220, 38, 38)" }}>15+ hours hunting down slips</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Disputed Loads</span>
                    <strong>1-2 loads per job disputed by GCs</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Payment Wait Time</span>
                    <strong style={{ color: "rgb(220, 38, 38)" }}>45-60 days while slips verified</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Deadhead Return Trips</span>
                    <strong>30%+ miles run empty</strong>
                  </li>
                </ul>
              </div>

              {/* Card 2: SoilTracker Telematics */}
              <div className={`${styles.savingsCard} ${styles.savingsCardExchange}`}>
                <div className={styles.savingsCardTitle} style={{ color: "var(--st-brand-primary)" }}>
                  The Closed-Loop Fleet
                </div>
                <div className={styles.savingsAmount} style={{ color: "var(--st-ink-900)", fontSize: 28, lineHeight: 1.2 }}>
                  Instant Billing &amp; Active Corridors
                </div>
                <div className={styles.savingsSubtitle} style={{ color: "var(--st-ink-500)" }}>
                  Automated telematics from pad to receiving gate
                </div>
                <ul className={styles.savingsList}>
                  <li className={styles.savingsListItem}>
                    <span>Month-End Reconciliation</span>
                    <strong style={{ color: "var(--st-success)" }}>Under 15 minutes (1 click)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Disputed Loads</span>
                    <strong style={{ color: "var(--st-success)" }}>0 unbacked loads (GPS verified)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Payment Approval</span>
                    <strong style={{ color: "var(--st-success)" }}>14-30 days (Instant digital proof)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Return Route Matching</span>
                    <strong>Live surplus &amp; aggregate discovery</strong>
                  </li>
                </ul>
              </div>

              {/* Card 3: Net Fleet Value */}
              <div className={`${styles.savingsCard} ${styles.savingsCardHero}`}>
                <div className={styles.savingsCardTitle} style={{ color: "var(--st-accent-sand)" }}>
                  Total Fleet Gains
                </div>
                <div className={styles.savingsAmount} style={{ color: "#ffffff", fontSize: 28, lineHeight: 1.2 }}>
                  Faster Cash &amp; Less Overhead
                </div>
                <div className={styles.savingsSubtitle} style={{ color: "rgba(255,255,255,0.85)" }}>
                  Operational impact across a typical 15-truck fleet
                </div>
                <ul className={styles.savingsList}>
                  <li className={styles.savingsListItem}>
                    <span>Admin Labor Reclaimed</span>
                    <strong style={{ color: "var(--st-accent-sand)" }}>~180 office hours saved / yr</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Dispute Protection</span>
                    <strong style={{ color: "var(--st-accent-sand)" }}>100% loads backed by GPS</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Driver Cab Distraction</span>
                    <strong>Zero Apps (100% passive)</strong>
                  </li>
                  <li className={styles.savingsListItem}>
                    <span>Payment Velocity</span>
                    <strong style={{ color: "var(--st-accent-sand)" }}>Invoices out Day 1; paid faster</strong>
                  </li>
                </ul>
                <Link href="/get-started" className={`${styles.buttonPrimaryLeaf} st-button-txt`} style={{ marginTop: "auto", background: "#ffffff", color: "var(--st-brand-primary-dark)", textAlign: "center", justifyContent: "center" }}>
                  Put Your Fleet on the Network →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rapid 3-Step Onboarding & Hardware Integration */}
        <section className={styles.joiningBand}>
          <div className={styles.joiningInner}>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8, textAlign: "center" }}>
              FAST ONBOARDING
            </div>
            <h2 className="st-h2" style={{ textAlign: "center", color: "var(--st-ink-900)", marginBottom: 16 }}>
              Onboarding your fleet takes an afternoon
            </h2>
            <p style={{ color: "var(--st-ink-700)", textAlign: "center", maxWidth: 640, margin: "0 auto 48px", fontSize: 16 }}>
              No complex installations or driver seminars. Connect the telematics you already run or plug in our discrete hardware tags.
            </p>

            <div className={styles.joiningSteps}>
              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>01</div>
                <h3 className="st-h4" style={{ color: "var(--st-ink-900)", marginBottom: 10 }}>Connect Your Fleet Telematics</h3>
                <p style={{ color: "var(--st-ink-600)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  Sync directly with Geotab, Samsara, or ISAAC in 2 clicks via secure API, or order pre-configured OBD GPS trackers that plug in in under 60 seconds.
                </p>
              </div>

              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>02</div>
                <h3 className="st-h4" style={{ color: "var(--st-ink-900)", marginBottom: 10 }}>Select Your Operating Corridors</h3>
                <p style={{ color: "var(--st-ink-600)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  Define your service radius across Metro Vancouver and the Fraser Valley. Receive high-volume hauls matched to where your trucks already run.
                </p>
              </div>

              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>03</div>
                <h3 className="st-h4" style={{ color: "var(--st-ink-900)", marginBottom: 10 }}>Haul, Reconcile &amp; Settle Fast</h3>
                <p style={{ color: "var(--st-ink-600)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  Every trip logs automatically. Send 100% verified invoices backed by GPS timestamps and load records, and get approved for payment in days instead of months.
                </p>
              </div>
            </div>

            {/* Hardware Logos Badge Strip */}
            <div className={styles.hardwareBadgeStrip}>
              <span className={styles.hardwareLabel}>Hardware Agnostic Telematics Sync:</span>
              <div className={styles.hardwarePills}>
                <span className={styles.hardwarePill}>Geotab API</span>
                <span className={styles.hardwarePill}>Samsara IoT</span>
                <span className={styles.hardwarePill}>ISAAC Instruments</span>
                <span className={styles.hardwarePill}>SoilTracker OBD Tag</span>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Panel */}
        <section className={styles.ctaPanel}>
          <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 8 }}>
            FLEET INTAKE OPEN
          </div>
          <h2 className="st-h1">Put your trucks on the network. Keep your margins intact.</h2>
          <p className="st-body1" style={{ margin: "16px auto 32px", maxWidth: 620, color: "var(--st-ink-700)" }}>
            Founding hauler network access is open across British Columbia. You only haul the jobs and rates you approve, with zero missing tickets ever again.
          </p>
          <Link href="/get-started" className={`${styles.buttonPrimaryLeaf} st-button-txt`} style={{ display: "inline-block", background: "var(--st-brand-primary)", color: "#ffffff" }}>
            Book a 15-Minute Fleet Strategy Call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
