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
                <MagneticButton href="#join" className={`${styles.buttonPrimary} st-button-txt`}>Join the network</MagneticButton>
                <MagneticButton href="#tour" className={`${styles.buttonSecondary} st-button-txt`}>Watch a 2-min tour</MagneticButton>
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

        {/* Dual Doors - Asymmetrical Overlapping Layout */}
        <section className={styles.doorsSection}>
          <div className={styles.doorsInner}>
            <motion.div 
              className={styles.doorPlatform}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="st-sub-caps" style={{color: "rgba(255,255,255,0.6)"}}>The Platform</div>
              <h2 className="st-h2">Run every haul with proof built in</h2>
              <ul className={styles.doorList}>
                <li><i className="ri-check-line" style={{color: "var(--st-logo-leaf)"}}></i> Project setup, sites, and permits in one place</li>
                <li><i className="ri-check-line" style={{color: "var(--st-logo-leaf)"}}></i> Dispatch and driver apps for daily hauls</li>
                <li><i className="ri-check-line" style={{color: "var(--st-logo-leaf)"}}></i> Compliance records generated automatically</li>
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
          <RevealText text="Built for the mud, scaled for the boardroom." className="st-h2" />
          
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

        {/* Asymmetrical Impact Section */}
        <section className={styles.impact}>
          <div className={styles.impactInner}>
            <motion.div 
              className={styles.impactStats}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <RevealText text="1.2M m³" className={styles.statLarge} />
              <div className="st-h4" style={{marginTop: 16}}>Soil moved safely this year.</div>
            </motion.div>
            
            <motion.div 
              className={styles.impactLogos}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="st-sub-caps" style={{color: "rgba(255,255,255,0.6)", marginBottom: 24}}>Trusted by</h3>
              <div className={styles.logoGrid}>
                <div className={styles.logoPlaceholder}>Logo Placeholder</div>
                <div className={styles.logoPlaceholder}>Logo Placeholder</div>
                <div className={styles.logoPlaceholder}>Logo Placeholder</div>
                <div className={styles.logoPlaceholder}>Logo Placeholder</div>
              </div>
            </motion.div>
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
          <RevealText text="Ready to ditch the paper?" className="st-h1" />
          <MagneticButton href="#get-started" className={`${styles.buttonPrimary} st-button-txt`} style={{marginTop: 32}}>Get Started</MagneticButton>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
