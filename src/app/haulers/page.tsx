import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Haulers & Fleet Admins | SoilTracker",
  description: "Keep your trucks rolling. Verified, compliant work routed to your fleet with load events captured automatically by GPS, no driver app required.",
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
              <div className={`st-sub-caps ${styles.eyebrow}`}>FOR HAULING FLEETS & OWNER-OPERATORS</div>
              <h1 className="st-h1">Keep your trucks rolling. Prove every load without lifting a finger.</h1>
              <p className="st-body1" style={{ color: "rgba(255,255,255,0.85)", margin: "20px 0 32px", fontSize: 18, lineHeight: 1.6 }}>
                Get matched to nearby high-volume hauls and dispatch from one board instead of the phone. Every pickup and drop-off is captured automatically by GPS with no app for your drivers to learn, and a verified record behind every invoice you send.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimaryLeaf} st-button-txt`}>
                  Join the Hauler Network
                </Link>
                <Link href="#capture" className={`${styles.buttonOutlineLight} st-button-txt`}>
                  How Load Capture Works
                </Link>
              </div>
            </div>
            
            <div className={styles.dispatchCard}>
              <div className={styles.dispatchHeader}>
                <h3 className="st-h4">Today&apos;s Active Hauls</h3>
                <span>3 live jobs</span>
              </div>
              <div className={styles.jobRow}>
                <div className={styles.jobRowInfo}>
                  <div>Surrey → Langley Site A</div>
                  <div>18/24 loads</div>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{width: "75%"}}></div>
                </div>
              </div>
              <div className={styles.jobRow}>
                <div className={styles.jobRowInfo}>
                  <div>Burnaby → Delta Receiving Pit</div>
                  <div>6/12 loads</div>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{width: "50%"}}></div>
                </div>
              </div>
              <div className={styles.confirmationRow}>
                <i className="ri-shield-check-fill"></i>
                Haul #482 delivered with verified digital custody complete
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className={styles.valueProps}>
          <div className={styles.valueCard}>
            <i className="ri-map-pin-user-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Matched hauls nearby</h3>
            <p className="st-body2">Get pinged for high-volume jobs right where your trucks are already running to cut empty deadhead miles.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="ri-calendar-schedule-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Dispatch without phone tag</h3>
            <p className="st-body2">Assign trucks and drivers to projects, build the schedule, and send the daily dispatch from one board. Your drivers get their day; you stop repeating yourself on the phone.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="ri-shield-check-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Proof of work backing</h3>
            <p className="st-body2">The tamper-evident digital custody log is your automatic invoice backup. Never argue over missing paper tickets.</p>
          </div>
        </section>

        {/* Automatic load capture */}
        <section className={styles.driverApp} id="capture">
          <div className={styles.driverAppInner}>
            <div className={styles.captureMock}>
              <div className={styles.captureRow}>
                <i className="ri-cpu-line"></i>
                <div>
                  <div className={styles.captureLabel}>Option A · Our hardware</div>
                  <p className={styles.captureText}>
                    A plug-and-play GPS tracker we supply, installed in minutes. Nothing for the driver to operate.
                  </p>
                </div>
              </div>
              <div className={styles.captureRow}>
                <i className="ri-links-line"></i>
                <div>
                  <div className={styles.captureLabel}>Option B · Your fleet system</div>
                  <p className={styles.captureText}>
                    Already running Geotab or Samsara? We integrate by API and use the telematics you already pay for.
                  </p>
                </div>
              </div>
              <div className={styles.captureRow}>
                <i className="ri-map-pin-range-line"></i>
                <div>
                  <div className={styles.captureLabel}>Then · Geofenced automatically</div>
                  <p className={styles.captureText}>
                    Departure and arrival timestamps log themselves as the truck crosses each site boundary. The receiving operator confirms the day&apos;s loads, and the custody record closes.
                  </p>
                </div>
              </div>
              <div className={styles.captureFoot}>
                <i className="ri-shield-check-fill" style={{ color: "var(--st-logo-leaf)" }}></i>
                Zero taps. Zero paperwork. Zero driver training.
              </div>
            </div>
            <div>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                AUTOMATIC LOAD CAPTURE
              </div>
              <h2 className="st-h2">No app for your drivers. The truck reports itself.</h2>
              <p className="st-body1" style={{ margin: "16px 0 24px", color: "var(--st-ink-700)" }}>
                Compliance shouldn&apos;t depend on whether a driver remembered to tap a button. Load events are captured by GPS and geofencing (either through a tracker we supply or an API link to the fleet software you already run) so the record is complete whether or not anyone thinks about it.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Plug-and-play trackers, or Geotab and Samsara integration</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Geofenced pickup and drop-off timestamps, logged automatically</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Receiving-site operator confirms daily loads to close the chain</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Nothing to install on a driver&apos;s phone because dispatchers run the board</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fleet Admins */}
        <section className={styles.fleetAdmins}>
          <div>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
              FLEET TELEMATICS & INVOICING
            </div>
            <h2 className="st-h2">Your whole fleet on one board</h2>
            <p className="st-body1" style={{marginTop: 16, color: "var(--st-ink-700)"}}>
              See where every truck is, exactly what they&apos;re carrying, and match hauler invoices against GPS-verified load counts in minutes.
            </p>
          </div>
          <div className={styles.boardMock}>
            <div className={styles.boardSidebar}>
              <div className={styles.boardItem}></div>
              <div className={styles.boardItem}></div>
              <div className={styles.boardItem} style={{width:"80%"}}></div>
              <div className={styles.boardItem} style={{width:"90%"}}></div>
              <div className={styles.boardItem} style={{width:"60%"}}></div>
            </div>
            <div className={styles.boardMain}>
               <div className={styles.boardMap}>
                 <div className={styles.boardDot} style={{top:"30%", left:"40%", animationDelay: "0s"}}></div>
                 <div className={styles.boardDot} style={{top:"60%", left:"70%", animationDelay: "1s"}}></div>
                 <div className={styles.boardDot} style={{top:"80%", left:"20%", animationDelay: "2s"}}></div>
               </div>
            </div>
          </div>
        </section>

        {/* Joining Band */}
        <section className={styles.joiningBand}>
          <div className={styles.joiningInner}>
            <h2 className="st-h2">Joining takes an afternoon</h2>
            <div className={styles.joiningSteps}>
              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>01</div>
                <h3 className="st-h4" style={{color: "var(--st-surface)"}}>Register and connect</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 8 }}>
                  Free registration. Add your trucks and hauling zones, then plug in our trackers or link your existing Geotab or Samsara account.
                </p>
              </div>
              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>02</div>
                <h3 className="st-h4" style={{color: "var(--st-surface)"}}>Get matched to hauls</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 8 }}>
                  Receive notifications for nearby projects needing trucking capacity.
                </p>
              </div>
              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>03</div>
                <h3 className="st-h4" style={{color: "var(--st-surface)"}}>Haul and get paid</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 8 }}>
                  Instant digital proof of work attached to every invoice for rapid settlement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">Put your fleet on the network.</h2>
          <p className="st-body1" style={{ margin: "16px auto 32px", maxWidth: 580, color: "var(--st-ink-700)" }}>
            Founding member access is open. You only haul the jobs you accept.
          </p>
          <Link href="/get-started" className={`${styles.buttonPrimaryLeaf} st-button-txt`} style={{display: "inline-block", background: "var(--st-brand-primary)", color: "var(--st-surface)"}}>
            Book a 15-Minute Founder Call
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
