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
            alt="Soiltrackers"
            width={140}
            height={29}
            className={styles.logoImg}
          />
          <p className={styles.tagline}>
            Chain of custody for soil movement and management. Vancouver, BC.
          </p>
        </div>
        
        <div className={styles.column}>
          <h4 className="st-sub-caps">Product</h4>
          <ul className={styles.linkList}>
            <li><Link href="/platform" className={styles.link}>Platform</Link></li>
            <li><Link href="/marketplace" className={styles.link}>Marketplace</Link></li>
            <li><Link href="/haulers" className={styles.link}>For Haulers</Link></li>
            <li><Link href="/get-started" className={styles.link}>Pricing</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className="st-sub-caps">Company</h4>
          <ul className={styles.linkList}>
            <li><Link href="/get-started" className={styles.link}>About Us</Link></li>
            <li><Link href="/get-started" className={styles.link}>Careers</Link></li>
            <li><Link href="/get-started" className={styles.link}>Contact</Link></li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className="st-sub-caps">Resources</h4>
          <ul className={styles.linkList}>
            <li><Link href="/get-started" className={styles.link}>Blog</Link></li>
            <li><Link href="/get-started" className={styles.link}>Guides</Link></li>
            <li><Link href="/get-started" className={styles.link}>Sign In</Link></li>
          </ul>
        </div>
      </div>
      
      <div className={styles.legal}>
        <span>&copy; {new Date().getFullYear()} Soiltrackers Solutions Inc. All rights reserved.</span>
        <div className={styles.legalLinks}>
          <Link href="#privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="#terms" className={styles.legalLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
