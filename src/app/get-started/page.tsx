import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started — Soiltrackers",
  description: "Join the network to track, manage, and move soil with a built-in chain of custody.",
};

export default function GetStarted() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className="st-h1" style={{ marginBottom: 24 }}>Put your soil to work.</h1>
            <p className="st-body1" style={{ color: "var(--st-ink-600)", marginBottom: 48 }}>
              Whether you're a contractor, hauler, or site owner, join the network to manage hauls with a built-in chain of custody.
            </p>
            <form className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Jane Doe" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Work Email</label>
                <input type="email" id="email" placeholder="jane@company.com" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="role">Primary Role</label>
                <select id="role" required>
                  <option value="" disabled selected>Select your role...</option>
                  <option value="contractor">General Contractor / Excavator</option>
                  <option value="hauler">Hauler / Fleet Owner</option>
                  <option value="site">Receiving Site / Pit Owner</option>
                  <option value="consultant">Environmental Consultant</option>
                </select>
              </div>
              <button type="submit" className={styles.submitBtn}>Join the network</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
