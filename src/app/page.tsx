"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MapAnimation from "@/components/MapAnimation";
import RevealText from "@/components/RevealText";
import MagneticButton from "@/components/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* Immersive Hero */}
        <section ref={heroRef} className={styles.hero}>
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className={styles.heroInner}>
            <div className={styles.heroContent}>
              <RevealText 
                text="Chain of custody for every load of soil." 
                className={`st-h1 ${styles.heroTitle}`} 
              />
              <motion.p 
                className="st-body1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                From the ground it leaves to the ground it lands on — Soiltrackers records who touched it, where it went, and the permits that cover it. One unbroken record.
              </motion.p>
              
              <motion.div 
                className={styles.heroCtas}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              >
                <MagneticButton href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>Join the network</MagneticButton>
                <MagneticButton href="/get-started" className={`${styles.buttonSecondary} st-button-txt`}>Book a demo</MagneticButton>
              </motion.div>

              <motion.div 
                className={styles.chips}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
              >
                <span>Contractors</span>
                <span>Haulers</span>
                <span>Site owners</span>
                <span>Environmental consultants</span>
              </motion.div>
            </div>
            
            <motion.div style={{ y: mapY }} className={styles.mapPanel}>
              <MapAnimation />
            </motion.div>
          </motion.div>
        </section>

        {/* Live Ticker */}
        <section className={styles.ticker}>
          <div className={styles.tickerTrack}>
            <span className={styles.tickerText}>Surrey excavation → Langley fill · 1,100 m³</span>
            <span className={styles.tickerHighlight}>New listing: clean sand · 5,100 m³ · Abbotsford</span>
            <span className={styles.tickerText}>Delta remediation → Richmond treatment yard · 480 m³</span>
            <span className={styles.tickerHighlight}>Compliance review booked: Coquitlam Site 12</span>
            
            {/* Duplicated for smooth loop */}
            <span className={styles.tickerText}>Surrey excavation → Langley fill · 1,100 m³</span>
            <span className={styles.tickerHighlight}>New listing: clean sand · 5,100 m³ · Abbotsford</span>
            <span className={styles.tickerText}>Delta remediation → Richmond treatment yard · 480 m³</span>
            <span className={styles.tickerHighlight}>Compliance review booked: Coquitlam Site 12</span>
          </div>
        </section>

        {/* Mission Statement */}
        <section className={styles.mission}>
          <div className="st-sub-caps" style={{color: "var(--st-brand-primary)", marginBottom: 24, display: "flex", justifyContent: "center"}}>Why we exist</div>
          <p className="st-h2" style={{maxWidth: 980, margin: "0 auto"}}>
            Soil only moves responsibly when you can prove where it came from and where it went. <span className={styles.highlightText}>Soiltrackers builds that chain of custody into every haul</span> — matching soil to sites, shortening trips, and keeping the record unbroken from dig to drop-off.
          </p>
        </section>

        {/* Roles */}
        <section className={styles.roles}>
          <h2 className="st-h2" style={{marginBottom: 48}}>Built for everyone who touches the soil</h2>
          <div className={styles.roleGrid}>
            <div className={styles.roleCol}>
              <i className="ri-building-2-line"></i>
              <h3 className="st-h4">Contractors</h3>
              <p className="st-body2">Set up projects, invite your team, and keep every permit and haul in one record.</p>
            </div>
            <div className={styles.roleCol}>
              <i className="ri-steering-2-line"></i>
              <h3 className="st-h4">Haulers & drivers</h3>
              <p className="st-body2">Fill trucks with matched work nearby. Drivers log loads from the cab in two taps.</p>
            </div>
            <div className={styles.roleCol}>
              <i className="ri-landscape-line"></i>
              <h3 className="st-h4">Site owners</h3>
              <p className="st-body2">Fill your pit or source clean material — with the spec sheets to back it up.</p>
            </div>
            <div className={styles.roleCol} style={{borderRight: "none"}}>
              <i className="ri-flask-line"></i>
              <h3 className="st-h4">Environmental consultants</h3>
              <p className="st-body2">Review specs, sign off on schedules, and audit the full chain of custody against the permit.</p>
            </div>
          </div>
        </section>

        {/* Dual Doors - Asymmetrical Overlapping Layout */}
        <section className={styles.doorsSection}>
          <div className={styles.watermarkContainer}>
            <motion.div 
              className={styles.watermark}
              initial={{ y: -50 }}
              whileInView={{ y: 50 }}
              transition={{ ease: "linear", duration: 1 }}
              viewport={{ once: false, margin: "200px" }}
            >
              SOILTRACKERS
            </motion.div>
          </div>
          <div className={styles.doorsInner}>
            <motion.div 
              className={styles.doorPlatform}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className={styles.doorGraphic}>
                <div className={styles.platformGraphicNodes}>
                  <div className={styles.nodePoint} style={{left: "10%", top: "75%"}}><i className="ri-building-2-fill"></i></div>
                  <div className={styles.routeLine}></div>
                  <div className={styles.nodePoint} style={{left: "90%", top: "25%"}}><i className="ri-map-pin-2-fill"></i></div>
                  <div className={styles.truckIcon}><i className="ri-truck-fill"></i></div>
                </div>
              </div>
              <div className="st-sub-caps" style={{color: "rgba(255,255,255,0.6)"}}>The Platform</div>
              <h2 className="st-h2" style={{color: "var(--st-surface)"}}>Run every haul with chain of custody built in</h2>
              <ul className={styles.doorList}>
                <li><i className="ri-check-line" style={{color: "var(--st-logo-leaf)"}}></i> Project setup, sites, and permits in one place</li>
                <li><i className="ri-check-line" style={{color: "var(--st-logo-leaf)"}}></i> Dispatch and driver apps for daily hauls</li>
                <li><i className="ri-check-line" style={{color: "var(--st-logo-leaf)"}}></i> Custody records generated automatically, load by load</li>
              </ul>
              <MagneticButton href="/platform" className={styles.doorLink}>Explore the platform</MagneticButton>
            </motion.div>

            <motion.div 
              className={styles.doorMarketplace}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className={styles.doorGraphic}>
                <div className={styles.marketMatchAnimation}>
                  <div className={`${styles.marketCard} ${styles.marketCardSupply}`}>
                    <div className={styles.marketCardHeader}>
                      <span className={styles.marketBadge}>SURPLUS</span>
                      <i className="ri-truck-line"></i>
                    </div>
                    <div className={styles.marketCardTitle}>240 m³ Clean Fill</div>
                    <div className={styles.marketCardLocation}>Langley, BC</div>
                  </div>
                  
                  <div className={styles.marketMatchIcon}>
                    <i className="ri-link"></i>
                  </div>

                  <div className={`${styles.marketCard} ${styles.marketCardDemand}`}>
                    <div className={styles.marketCardHeader}>
                      <span className={`${styles.marketBadge} ${styles.marketBadgeDemand}`}>REQUEST</span>
                      <i className="ri-map-pin-2-line"></i>
                    </div>
                    <div className={styles.marketCardTitle}>Needs Clean Fill</div>
                    <div className={styles.marketCardLocation}>Surrey, BC</div>
                  </div>
                </div>
              </div>
              <div className="st-sub-caps" style={{color: "rgba(0,0,0,0.6)"}}>The Marketplace</div>
              <h2 className="st-h2" style={{color: "var(--st-ink-900)"}}>Find soil. Move soil. Nothing wasted.</h2>
              <ul className={styles.doorList} style={{color: "var(--st-ink-900)"}}>
                <li><i className="ri-check-line" style={{color: "var(--st-brand-primary)"}}></i> Post surplus soil or request material</li>
                <li><i className="ri-check-line" style={{color: "var(--st-brand-primary)"}}></i> Matched by spec, volume, and distance</li>
                <li><i className="ri-check-line" style={{color: "var(--st-brand-primary)"}}></i> Book hauling from the same network</li>
              </ul>
              <MagneticButton href="/marketplace" className={`${styles.doorLink} ${styles.darkLink}`}>Browse listings</MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howItWorks}>
          <RevealText text="From ground to ground" className="st-h2" />
          
          <div className={styles.steps}>
            <motion.div 
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.stepNum}>01</div>
              <h3 className="st-h4">Connect sites</h3>
              <p className="st-body2">Link sources and receiving sites to form an approved route.</p>
            </motion.div>
            
            <motion.div 
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.stepNum}>02</div>
              <h3 className="st-h4">Dispatch trucks</h3>
              <p className="st-body2">Drivers get routes in the app. No paper tickets.</p>
            </motion.div>

            <motion.div 
              className={styles.stepCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.stepNum}>03</div>
              <h3 className="st-h4">Automatic compliance</h3>
              <p className="st-body2">The system generates the chain of custody report instantly.</p>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className={styles.testimonial}>
          <div className={styles.testiContent}>
            <div className={styles.testiQuoteMark}>"</div>
            <p className="st-h2" style={{color: "var(--st-ink-900)", position: "relative", zIndex: 1, maxWidth: 900}}>
              Soiltrackers completely changed how we handle compliance. No more lost paper tickets; we know exactly where every load is the second it leaves the site. It is the unbroken chain we have always needed.
            </p>
            <div className={styles.testiAuthor}>
              <div className={styles.testiAvatar}>
                <span>JS</span>
              </div>
              <div style={{textAlign: "left"}}>
                <div className="st-h4" style={{marginBottom: 4}}>John Smith</div>
                <div className="st-body2" style={{color: "var(--st-ink-600)"}}>Operations Manager, EarthWorks Excavation</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.section 
          className={styles.ctaPanel}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <RevealText text="Put your soil to work." className="st-h1" />
          <p className="st-body1" style={{color: "var(--st-ink-600)", marginTop: 16, marginBottom: 32}}>
            Join the network as a contractor, hauler, or site owner — or book a demo and we will walk you through it.
          </p>
          <div style={{display: "flex", gap: 14, justifyContent: "center"}}>
            <MagneticButton href="/get-started" className={`${styles.buttonPrimary} st-button-txt`}>Book a demo</MagneticButton>
            <MagneticButton href="/get-started" className={`${styles.buttonSecondary} st-button-txt`}>Join the network</MagneticButton>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
