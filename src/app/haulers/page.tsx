import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Haulers & Fleet Admins — SoilTracker",
  description: "Keep your trucks rolling. Get paid with zero disputes. Matched hauls and 2-tap cab ticketing for fleet owners.",
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
              <h1 className="st-h1">Keep your trucks rolling. Get paid with zero disputes.</h1>
              <p className="st-body1" style={{ color: "rgba(255,255,255,0.85)", margin: "20px 0 32px", fontSize: 18, lineHeight: 1.6 }}>
                Get matched to nearby high-volume hauls, dispatch drivers in seconds without phone tag, and use tamper-evident digital tickets as your instant invoice backup.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/get-started" className={`${styles.buttonPrimaryLeaf} st-button-txt`}>
                  Join the Hauler Network
                </Link>
                <Link href="/get-started" className={`${styles.buttonOutlineLight} st-button-txt`}>
                  See the Driver Cab App
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
                Haul #482 delivered — verified digital custody complete
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
            <i className="ri-smartphone-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Dispatch without phone tag</h3>
            <p className="st-body2">Drivers receive verified routes and destination instructions directly on their phones. Zero calling for directions.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="ri-shield-check-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Proof of work backing</h3>
            <p className="st-body2">The tamper-evident digital custody log is your automatic invoice backup. Never argue over missing paper tickets.</p>
          </div>
        </section>

        {/* Driver App */}
        <section className={styles.driverApp} id="app">
          <div className={styles.driverAppInner}>
            <div className={styles.phoneMock}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}>
                  <i className="ri-arrow-left-s-line"></i>
                  <span>Haul #482</span>
                  <i className="ri-more-2-line"></i>
                </div>
                <div className={styles.phoneMap}>
                  <div className={styles.phoneRoute}></div>
                  <div className={styles.phonePin} style={{top:"20%", left:"20%"}}><i className="ri-map-pin-2-fill"></i></div>
                  <div className={styles.phoneTruck}><i className="ri-truck-fill"></i></div>
                </div>
                <div className={styles.phoneDetails}>
                  <div style={{fontWeight: 700, marginBottom: 4, color:"var(--st-ink-900)", fontSize: 16}}>Langley Site A</div>
                  <div style={{color:"var(--st-ink-500)", fontSize: 12, marginBottom: 16}}>14 km remaining · Clean Fill</div>
                  <div className={styles.phoneButton}>Confirm Drop-off</div>
                </div>
              </div>
            </div>
            <div>
              <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
                DRIVER-FRIENDLY CAB INTERFACE
              </div>
              <h2 className="st-h2">Two taps from the cab</h2>
              <p className="st-body1" style={{ margin: "16px 0 24px", color: "var(--st-ink-700)" }}>
                Built specifically for truck cabs, high-sunlight glare, and work gloves. No complex menus, no manual paperwork.
              </p>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Turn-by-turn routes pushed directly to the cab</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Tap once at pickup, tap once at drop-off</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Automated geofencing confirms arrival timestamps</span></li>
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
                <h3 className="st-h4" style={{color: "var(--st-surface)"}}>Register your fleet</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, marginTop: 8 }}>
                  Free registration. Add your trucks, license numbers, and preferred hauling zones.
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
