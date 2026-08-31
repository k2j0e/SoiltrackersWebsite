import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image
            src="/ST-LOGO.png"
            alt="SoilTracker"
            width={140}
            height={29}
            className={styles.logoImg}
          />
          <p className={styles.tagline}>
            The closed-loop soil operating system. One verified chain of custody from excavation to final placement.
          </p>
        </div>
        
        <div className={styles.column}>
          <h4 className="st-sub-caps">Product</h4>
          <ul className={styles.linkList}>
            <li><Link href="/platform" className={styles.link}>The Platform</Link></li>
            <li><Link href="/marketplace" className={styles.link}>Soil Marketplace</Link></li>
            <li><Link href="/haulers" className={styles.link}>For Haulers</Link></li>
            <li><Link href="/bc" className={styles.link}>BC Mandate (/bc)</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className="st-sub-caps">Solutions</h4>
          <ul className={styles.linkList}>
            <li><Link href="/platform#contractors" className={styles.link}>For Contractors</Link></li>
            <li><Link href="/platform#qps" className={styles.link}>For Environmental QPs</Link></li>
            <li><Link href="/platform#facilities" className={styles.link}>For Receiving Pits</Link></li>
            <li><Link href="/get-started" className={styles.link}>Founding Member Access</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className="st-sub-caps">Contact & Trust</h4>
          <ul className={styles.linkList}>
            <li><Link href="/get-started" className={styles.link}>Book 15-Min Founder Call</Link></li>
            <li><Link href="/bc" className={styles.link}>BC EMA & Protocol 19</Link></li>
            <li><Link href="/get-started" className={styles.link}>Ontario Waitlist</Link></li>
            <li><Link href="/get-started" className={styles.link}>Sign In</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.legal}>
        <span>&copy; {new Date().getFullYear()} SoilTracker Solutions Inc. Based in British Columbia, Canada. All rights reserved.</span>
        <div className={styles.legalLinks}>
          <Link href="#privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="#terms" className={styles.legalLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
