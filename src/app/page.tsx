import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const tickerItems = [
    "Surrey excavation → Langley fill · 1,100 m³",
    "Burnaby site → Delta reclamation · 2,400 m³",
    "Vancouver demo → Richmond preload · 850 m³"
  ];
  const duplicatedTicker = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <>
      <Nav />
      <main>
        {/* 2. Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className="st-h1">Chain of custody for every load of soil.</h1>
            <p className={styles.heroSub}>
              From the ground it leaves to the ground it lands on — Soiltrackers records who touched it, where it went, and the permits that cover it. One unbroken record.
            </p>
            <div className={styles.heroCtas}>
              <Link href="#join" className={`${styles.buttonPrimary} st-button-txt`}>Join the network</Link>
              <Link href="#tour" className={`${styles.buttonSecondary} st-button-txt`}>Watch a 2-min tour</Link>
            </div>
            <div className={styles.chips}>
              <span className={styles.chip}>Contractors</span>
              <span className={styles.chip}>Haulers</span>
              <span className={styles.chip}>Site owners</span>
              <span className={styles.chip}>Environmental consultants</span>
            </div>
          </div>
          <div className={styles.mapPanel}>
            {/* 3. Animated map panel placeholder */}
            <div className="st-body2" style={{textAlign: "center"}}>
              <i className="ri-map-2-line" style={{fontSize: 48, color: "var(--st-brand-primary)", marginBottom: 16, display: "block"}}></i>
              Animated Map SVG Scene Placeholder
            </div>
          </div>
        </section>

        {/* 4. Live ticker */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {duplicatedTicker.map((item, i) => (
              <div key={i} className={styles.tickerItem}>
                {item.split("·")[0]} <span>· {item.split("·")[1]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Trust strip */}
        <section className={styles.trustStrip}>
          <h4 className="st-sub-caps">TRUSTED ACROSS BRITISH COLUMBIA</h4>
          <div className={styles.logos}>
            {[1, 2, 3, 4, 5].map(i => <div key={i} className={styles.logoPlaceholder}></div>)}
          </div>
        </section>

        {/* 6. Mission */}
        <section className={styles.mission}>
          <h4 className="st-sub-caps">WHY WE EXIST</h4>
          <p>
            Soil only moves responsibly when you can prove where it came from and where it went. <span>Soiltrackers builds that chain of custody into every haul</span> — matching soil to sites, shortening trips, and keeping the record unbroken from dig to drop-off.
          </p>
        </section>

        {/* 7. How it works */}
        <section className={styles.howItWorks}>
          <h2 className="st-h2">From ground to ground</h2>
          <div className={styles.steps}>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>01</div>
              <h3 className="st-h3" style={{marginBottom: 16}}>List your soil</h3>
              <p className="st-body2">Register material to find the nearest compliant drop-off site.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>02</div>
              <h3 className="st-h3" style={{marginBottom: 16}}>Match nearby</h3>
              <p className="st-body2">Our network finds the shortest distance, saving time and emissions.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNum}>03</div>
              <h3 className="st-h3" style={{marginBottom: 16}}>Haul with custody</h3>
              <p className="st-body2">Every truckload carries a digital record verifying compliance.</p>
            </div>
          </div>
        </section>

        {/* 8. Dual doors */}
        <section className={styles.doors}>
          <div className={styles.doorPlatform}>
            <h2 className="st-h2">The Platform</h2>
            <p>Run every haul with chain of custody built in.</p>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}><i className="ri-check-line"></i> Verify compliance</li>
              <li className={styles.checkItem}><i className="ri-check-line"></i> Track loads in real-time</li>
              <li className={styles.checkItem}><i className="ri-check-line"></i> Export regulator reports</li>
            </ul>
            <Link href="/platform" className={`${styles.doorLink} st-button-txt`}>Explore the Platform →</Link>
          </div>
          <div className={styles.doorMarketplace}>
            <h2 className="st-h2">The Marketplace</h2>
            <p>Find soil. Move soil. Nothing wasted.</p>
            <ul className={styles.checkList}>
              <li className={styles.checkItem}><i className="ri-check-line"></i> Post excess soil</li>
              <li className={styles.checkItem}><i className="ri-check-line"></i> Find structural fill</li>
              <li className={styles.checkItem}><i className="ri-check-line"></i> Connect with haulers</li>
            </ul>
            <Link href="/marketplace" className={`${styles.doorLink} st-button-txt`}>Browse the Marketplace →</Link>
          </div>
        </section>

        {/* 9. Product shot */}
        <section className={styles.productShot}>
          <h2 className="st-h2">The whole chain, one dashboard</h2>
          <div className={styles.browserFrame}>
            <div className={styles.browserHeader}>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
              <div className={styles.browserDot}></div>
            </div>
            <div className={styles.browserContent}>
              <i className="ri-dashboard-line" style={{fontSize: 32, marginRight: 8}}></i> Dashboard Screenshot Placeholder
            </div>
          </div>
        </section>

        {/* 10. Roles */}
        <section className={styles.roles}>
          <div className={styles.roleCol}>
            <i className="ri-building-4-line"></i>
            <h3 className="st-h4">Contractors</h3>
            <p className="st-body2">Move soil faster with automatic compliance logging.</p>
          </div>
          <div className={styles.roleCol}>
            <i className="ri-truck-line"></i>
            <h3 className="st-h4">Haulers & drivers</h3>
            <p className="st-body2">Keep trucks full and eliminate paper tickets.</p>
          </div>
          <div className={styles.roleCol}>
            <i className="ri-map-pin-line"></i>
            <h3 className="st-h4">Site owners</h3>
            <p className="st-body2">Accept soil confidently with full origin verification.</p>
          </div>
          <div className={styles.roleCol}>
            <i className="ri-earth-line"></i>
            <h3 className="st-h4">Environmental consultants</h3>
            <p className="st-body2">Oversight and reporting simplified in one dashboard.</p>
          </div>
        </section>

        {/* 11. Impact band */}
        <section className={styles.impact}>
          <div className={styles.impactInner}>
            <h2 className="st-h2">Less landfill. Shorter hauls. Provable ground.</h2>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNum}>1.2M</div>
                <div className={styles.statLabel}>Cubic meters moved</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>86%</div>
                <div className={styles.statLabel}>Diverted from landfill</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNum}>4.8k</div>
                <div className={styles.statLabel}>Trips saved</div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. Testimonial */}
        <section className={styles.testimonial}>
          <p>“Soiltrackers changed the way we handle compliance. The chain of custody is bulletproof, and we save hours every week on paperwork.”</p>
          <div className="st-caption">
            — Placeholder Name, Site Operations Manager<br/>
            (Customer Photo Placeholder)
          </div>
        </section>

        {/* 13. CTA panel */}
        <section className={styles.ctaPanel}>
          <h2 className="st-h2">Put your soil to work.</h2>
          <div className={styles.ctaPanelCtas}>
            <Link href="#demo" className={`${styles.buttonPrimary} st-button-txt`}>Book a demo</Link>
            <Link href="#join" className={`${styles.buttonSecondary} st-button-txt`}>Join the network</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
