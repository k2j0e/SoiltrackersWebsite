"use client";

import React from "react";
import styles from "./CertificateModal.module.css";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode?: "north-america" | "bc";
}

export default function CertificateModal({
  isOpen,
  onClose,
  mode = "north-america",
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.badgeRow}>
            <span className={styles.statusBadge}>
              <i className="ri-shield-check-fill"></i> Verified & Defensible
            </span>
            <span className={styles.hashText}>
              HASH: 8f9b2...e4a1
            </span>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className={styles.certBody}>
          <div className={styles.certHeaderBlock}>
            <div className={styles.certLogo}>
              <span className={styles.brandName}>SoilTracker</span>
              <span className={styles.certDocType}>
                {mode === "bc"
                  ? "BC SRNF Chain-of-Custody Manifest"
                  : "Verified Chain-of-Custody Manifest"}
              </span>
            </div>
            <div className={styles.manifestMeta}>
              <div><strong>Manifest #:</strong> ST-{mode === "bc" ? "BC-2026-0842" : "NA-2026-904"}</div>
              <div><strong>Date Closed:</strong> Aug 24, 2026 · 09:05 PDT</div>
              {mode === "bc" && <div><strong>SRS SRNF #:</strong> 2026-0842-SRNF</div>}
            </div>
          </div>

          <div className={styles.grid2Col}>
            <div className={styles.certBox}>
              <div className={styles.boxLabel}>1. Generator / Source Site</div>
              <div className={styles.boxTitle}>Excavation Site A · Langley, BC</div>
              <div className={styles.boxDetail}>
                {mode === "bc"
                  ? "CSR Schedule 2 Land Use: Commercial / Industrial"
                  : "Characterization: Uncontaminated Structural Fill"}
              </div>
              <div className={styles.boxSign}>
                <i className="ri-checkbox-circle-fill"></i> Source Authorized · QP Sign-off Attached
              </div>
            </div>

            <div className={styles.certBox}>
              <div className={styles.boxLabel}>2. Receiving Site & Placement</div>
              <div className={styles.boxTitle}>Surrey Receiving Facility · Surrey, BC</div>
              <div className={styles.boxDetail}>
                {mode === "bc"
                  ? "HVRS Registered · Schedule 3.1 Standards Met"
                  : "Receiving Standard: Clean Fill Approved"}
              </div>
              <div className={styles.boxSign}>
                <i className="ri-checkbox-circle-fill"></i> Gatekeeper Verified · Volume Intake Logged
              </div>
            </div>
          </div>

          <div className={styles.certTable}>
            <div className={styles.tableRowHeader}>
              <span>Haul / Truck</span>
              <span>Driver e-Sign</span>
              <span>Net Volume</span>
              <span>Geofence Status</span>
            </div>
            <div className={styles.tableRow}>
              <span>Truck #482 (Apex)</span>
              <span>Dave M. (08:32)</span>
              <span>28.4 MT / 18.2 m³</span>
              <span className={styles.greenText}><i className="ri-check-line"></i> GPS Verified</span>
            </div>
            <div className={styles.tableRow}>
              <span>Truck #489 (Apex)</span>
              <span>Ray S. (08:45)</span>
              <span>29.1 MT / 18.6 m³</span>
              <span className={styles.greenText}><i className="ri-check-line"></i> GPS Verified</span>
            </div>
          </div>

          <div className={styles.certFooter}>
            <div className={styles.certSeal}>
              <i className="ri-award-fill"></i>
              <div>
                <strong>SoilTracker Verified Custody</strong>
                <p>Immutable digital record for regulatory submission and billing reconciliation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button className={styles.downloadBtn} onClick={() => window.print()}>
            <i className="ri-printer-line"></i> Print / Save as PDF
          </button>
          <button className={styles.doneBtn} onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
