"use client";

import React, { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "contractor",
    interest: "founder-call",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: "get-started" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your request. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Nav primaryCtaLabel="Book Founder Call" primaryCtaHref="/get-started" />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className="st-sub-caps" style={{ color: "var(--st-brand-primary)", marginBottom: 12 }}>
              FOUNDING MEMBER ACCESS
            </div>
            <h1 className="st-h1" style={{ marginBottom: 20 }}>
              The next load you move should prove itself.
            </h1>
            <p className={styles.leadText}>
              Founding member access is open now. Fifteen minutes with the founder — no demo theater, no sales sequence — and you&apos;ll know whether SoilTracker fits your operation.
            </p>

            {submitted ? (
              <div className={styles.confirmationCard}>
                <div className={styles.checkCircle}>
                  <i className="ri-checkbox-circle-fill"></i>
                </div>
                <h3 className={styles.confTitle}>We&apos;ve received your request</h3>
                <p className={styles.confText}>
                  Thanks, <strong>{formData.name}</strong>. Our founding team will reach out directly at <strong>{formData.email}</strong> within 1 business day to schedule your 15-minute founder call.
                </p>
                <div className={styles.confBadge}>
                  <i className="ri-shield-star-fill"></i> Priority Founding Member Queue
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Work Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="jane@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      placeholder="EarthWorks Construction Ltd."
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="role">Primary Stakeholder Role</label>
                    <select
                      id="role"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    >
                      <option value="contractor">General Contractor / Excavator</option>
                      <option value="consultant">Environmental Consultant / QP</option>
                      <option value="site">Receiving Site / Pit / Facility Operator</option>
                      <option value="hauler">Hauling Fleet / Trucking Operator</option>
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="interest">What would you like to do?</label>
                  <select
                    id="interest"
                    required
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="founder-call">Book a 15-Minute Founder Call</option>
                    <option value="founding-member">Request Founding Member Access</option>
                    <option value="bc-mandate">BC Digital Soil Tracking Mandate Consultation</option>
                    <option value="ontario-waitlist">Ontario Excess Soil Waitlist</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`${styles.submitBtn} st-button-txt`}
                  style={submitting ? { opacity: 0.6, cursor: "wait" } : undefined}
                >
                  {submitting ? "Sending…" : "Book a 15-Minute Founder Call"}{" "}
                  {!submitting && <i className="ri-arrow-right-line"></i>}
                </button>

                {error && (
                  <p role="alert" style={{ color: "#c0392b", marginTop: 12, fontSize: 14 }}>
                    <i className="ri-error-warning-line"></i> {error}
                  </p>
                )}

                <p className={styles.formNote}>
                  <i className="ri-lock-line"></i> Operator-led intake · Direct founder conversation · No spam or third-party sharing
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
