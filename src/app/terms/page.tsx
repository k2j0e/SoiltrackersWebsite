import React from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SoilTracker Solutions Inc.",
  description: "Terms of Service governing the use of the SoilTracker software platform, soil marketplace, and related services.",
};

export default function TermsPage() {
  return (
    <>
      <Nav primaryCtaLabel="Book Founder Call" primaryCtaHref="/get-started" />
      <main className={styles.main}>
        <article className={styles.container}>
          <header className={styles.header}>
            <div className={styles.eyebrow}>LEGAL &amp; COMPLIANCE</div>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.companyLine}>
              <strong>SoilTracker Solutions Inc.</strong> · Last updated: 15 September 2026
            </p>
            <div className={styles.draftNotice}>
              <strong>DRAFT FOR LEGAL REVIEW.</strong> This is a working draft prepared for transparency and commercial governance, not formal legal advice. It governs the use of the SoilTracker platform, mobile telematics integrations, and soil marketplace.
            </div>
          </header>

          <div className={styles.content}>
            <section className={styles.section}>
              <h2>1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding agreement between you (&ldquo;Customer&rdquo;, &ldquo;you&rdquo;) and SoilTracker Solutions Inc. (&ldquo;SoilTracker&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company incorporated in British Columbia, Canada.
              </p>
              <p>
                By accessing or using this website, creating an account, or using the SoilTracker platform or marketplace, you agree to be bound by these Terms and our <Link href="/privacy">Privacy Policy</Link>. If you are accessing the service on behalf of an entity, you represent and warrant that you have the authority to bind that entity to these Terms.
              </p>
            </section>

            <section className={styles.section}>
              <h2>2. The Service</h2>
              <p>
                SoilTracker provides a cloud-based software system for soil chain-of-custody tracking, hauling dispatch coordination, environmental documentation management, and surplus soil exchange (&ldquo;the Platform&rdquo;).
              </p>
              <p>
                The Platform assists construction contractors, excavation crews, hauling fleets, environmental consultants, and receiving facilities in organizing, detecting, confirming, and documenting soil movement.
              </p>
            </section>

            <section className={styles.section}>
              <h2>3. User Confirmation &amp; Record Integrity</h2>
              <p>
                <strong>The Confirmation Model:</strong> SoilTracker uses GPS and geofencing to detect trip activity and assemble draft custody records as soil moves. You acknowledge and agree that custody records require user confirmation by authorized personnel to be verified and sealed. SoilTracker does not warrant that undetected movements will be automatically captured without authorized review.
              </p>
              <p>
                <strong>Append-Only Integrity:</strong> Once confirmed, chain-of-custody records are immutable. Corrections, notes, or modifications are appended as permanent audit events identifying the actor, timestamp, and stated reason, rather than silently overwriting historic data.
              </p>
            </section>

            <section className={styles.section}>
              <h2>4. Regulatory &amp; Environmental Responsibility</h2>
              <p>
                SoilTracker is a software and documentation tool. <strong>SoilTracker is not an environmental consultant, qualified professional (QP), laboratory, or regulatory agency.</strong>
              </p>
              <p>
                You retain sole legal responsibility for:
              </p>
              <ul>
                <li>Ensuring soil testing, sampling, and chemical characterization comply with applicable environmental laws (including BC CSR, EMA, Protocol 19, or Ontario O. Reg. 406/19).</li>
                <li>Verifying that receiving facilities hold valid permits and are legally authorized to accept the specific volume and quality of soil relocated.</li>
                <li>Submitting required statutory filings (such as BC Soil Relocation Notification Forms) to governmental authorities.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>5. Account Security &amp; Data Authority</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access or security breach.
              </p>
              <p>
                When you input or transmit personnel, driver, or subcontractor data through the Platform, you represent that you hold the legal authority and consent to provide such information for processing.
              </p>
            </section>

            <section className={styles.section}>
              <h2>6. Marketplace Terms</h2>
              <p>
                The SoilTracker marketplace provides a venue for verified participants to identify potential soil matches by classification, volume, and hauling distance.
              </p>
              <p>
                Transactions arranged through the marketplace are contracts directly between the participating generator and receiver. SoilTracker is not a party to those transactions and does not guarantee the chemical composition, geotechnical suitability, or physical delivery of matched material.
              </p>
            </section>

            <section className={styles.section}>
              <h2>7. Telematics &amp; Third-Party Hardware</h2>
              <p>
                SoilTracker connects with supported third-party GPS and telematics providers where APIs permit. System performance and real-time tracking depend on continuous cellular network coverage, GPS satellite availability, and proper hardware installation.
              </p>
            </section>

            <section className={styles.section}>
              <h2>8. Intellectual Property &amp; Customer Data</h2>
              <p>
                <strong>SoilTracker IP:</strong> SoilTracker retains all right, title, and interest in and to the Platform, including software code, user interface designs, algorithms, logos, and documentation.
              </p>
              <p>
                <strong>Customer Data:</strong> You retain ownership of all project data, laboratory reports, site photographs, and manifest details you upload. You grant SoilTracker a limited license to host, process, and display such data solely to provide the services and generate requested exports.
              </p>
            </section>

            <section className={styles.section}>
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, SoilTracker Solutions Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, project downtime, regulatory fines, or environmental remediation costs arising out of or related to your use of the Platform.
              </p>
              <p>
                Our total cumulative liability for all claims arising under these Terms shall not exceed the total fees paid by you to SoilTracker in the twelve (12) months preceding the incident giving rise to liability.
              </p>
            </section>

            <section className={styles.section}>
              <h2>10. Governing Law &amp; Jurisdiction</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any legal action arising under these Terms shall be instituted exclusively in the courts of British Columbia.
              </p>
            </section>

            <section className={styles.section}>
              <h2>11. Contact</h2>
              <p>Questions regarding these Terms of Service should be directed to:</p>
              <div className={styles.contactCard}>
                <strong>Legal &amp; Compliance Team</strong>
                <p>SoilTracker Solutions Inc.</p>
                <p>Email: <a href="mailto:privacy@soiltrackers.com">privacy@soiltrackers.com</a></p>
                <p>British Columbia, Canada</p>
              </div>
            </section>
          </div>

          <footer className={styles.backFooter}>
            <Link href="/" className={styles.backLink}>
              <i className="ri-arrow-left-line"></i> Return to Homepage
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
