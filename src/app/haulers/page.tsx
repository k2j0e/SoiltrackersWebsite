import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";

export default function Haulers() {
  return (
    <>
      <Nav primaryCtaLabel="Join as a hauler" primaryCtaHref="#join" />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <div className={`st-sub-caps ${styles.eyebrow}`}>FOR HAULERS</div>
              <h1 className="st-h1">Keep your trucks full. Keep the chain intact.</h1>
              <div className={styles.heroCtas}>
                <Link href="#join" className={`${styles.buttonPrimaryLeaf} st-button-txt`}>Join the network</Link>
                <Link href="#app" className={`${styles.buttonOutlineLight} st-button-txt`}>See the driver app</Link>
              </div>
            </div>
            
            <div className={styles.dispatchCard}>
              <div className={styles.dispatchHeader}>
                <h3 className="st-h4">Today's Hauls</h3>
                <span>3 active</span>
              </div>
              <div className={styles.jobRow}>
                <div className={styles.jobRowInfo}>
                  <div>Surrey → Langley</div>
                  <div>18/24 loads</div>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{width: "75%"}}></div>
                </div>
              </div>
              <div className={styles.jobRow}>
                <div className={styles.jobRowInfo}>
                  <div>Burnaby → Delta</div>
                  <div>6/12 loads</div>
                </div>
                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} style={{width: "50%"}}></div>
                </div>
              </div>
              <div className={styles.confirmationRow}>
                <i className="ri-check-line"></i>
                Haul #482 delivered — custody record complete
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className={styles.valueProps}>
          <div className={styles.valueCard}>
            <i className="ri-map-pin-user-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Matched hauls nearby</h3>
            <p className="st-body2">Get pinged for jobs right where your trucks already are.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="ri-smartphone-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Dispatch without phone tag</h3>
            <p className="st-body2">Drivers get routes directly on their phones. No more calling for directions.</p>
          </div>
          <div className={styles.valueCard}>
            <i className="ri-shield-check-line"></i>
            <h3 className="st-h4" style={{marginBottom: 8}}>Custody proves your work</h3>
            <p className="st-body2">The custody record is your automatic invoice backup. Never argue over load counts.</p>
          </div>
        </section>

        {/* Driver App */}
        <section className={styles.driverApp} id="app">
          <div className={styles.driverAppInner}>
            <div className={styles.phoneMock}>
              <i className="ri-smartphone-line" style={{fontSize: 48, marginRight: 8}}></i> Mobile App Screen Placeholder
            </div>
            <div>
              <h2 className="st-h2">Two taps from the cab</h2>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Routes pushed live</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Log at pickup, confirm at drop-off</span></li>
                <li className={styles.checkItem}><i className="ri-check-line"></i> <span>Built for gloves and glare</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fleet Admins */}
        <section className={styles.fleetAdmins}>
          <div>
            <h2 className="st-h2">Your whole fleet on one board</h2>
            <p className="st-body1" style={{marginTop: 16}}>See where every truck is, exactly what they're carrying, and which jobs are behind schedule.</p>
          </div>
          <div className={styles.boardMock}>
            <i className="ri-macbook-line" style={{fontSize: 48, marginRight: 8}}></i> Dispatch Board Screenshot Placeholder
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
              </div>
              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>02</div>
                <h3 className="st-h4" style={{color: "var(--st-surface)"}}>Get matched to hauls</h3>
              </div>
              <div className={styles.joiningStep}>
                <div className={styles.joiningStepNum}>03</div>
                <h3 className="st-h4" style={{color: "var(--st-surface)"}}>Haul and get paid</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Panel */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h1">Put your fleet on the network.</h2>
          <p className="st-body1">Registration is free. You only haul the jobs you accept.</p>
          <Link href="#join" className={`${styles.buttonPrimaryLeaf} st-button-txt`} style={{display: "inline-block", background: "var(--st-brand-primary)", color: "var(--st-surface)"}}>Join as a hauler</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
