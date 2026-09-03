"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./BCDashcamChecker.module.css";

interface TruckType {
  id: string;
  name: string;
  gvwr: string;
  applies: boolean;
  notes: string;
  recommendedKit: string;
}

export default function BCDashcamChecker() {
  const [selectedTruck, setSelectedTruck] = useState<string>("tri-drive");

  const truckTypes: TruckType[] = [
    {
      id: "tri-drive",
      name: "Tri-Drive Dump Truck",
      gvwr: "> 11,793 kg (Typically 24,000–31,000 kg)",
      applies: true,
      notes: "Fully subject to Bill M217. Forward-facing 1080p dashcam with 72h continuous storage mandatory for operation on all BC highways.",
      recommendedKit: "SoilTracker Heavy Fleet Kit (OBD/J1939 + Forward 1080p HDR Dashcam + Geofenced Load Telematics)",
    },
    {
      id: "tandem",
      name: "Tandem Dump Truck (6x4)",
      gvwr: "> 11,793 kg (Typically 22,000–26,000 kg)",
      applies: true,
      notes: "Fully subject to Bill M217. Required to record forward road ahead through the windshield at all times during operation.",
      recommendedKit: "SoilTracker Heavy Fleet Kit (1080p Forward Road Cam + Zero Driver Cab Intrusion + GPS Geofence)",
    },
    {
      id: "truck-pup",
      name: "Truck & Pony / Transfer Dump",
      gvwr: "> 11,793 kg (Typically 38,000–55,000 kg Combined)",
      applies: true,
      notes: "Fully subject to Bill M217. Forward camera required in power unit. High-risk highway corridors receive strict CVSE enforcement.",
      recommendedKit: "SoilTracker Multi-Axle Fleet Kit (Forward Road Cam + High-Capacity Power Harness)",
    },
    {
      id: "highway-tractor",
      name: "Class 8 Semi-Tractor / End Dump",
      gvwr: "> 11,793 kg (Typically 35,000–63,500 kg Combined)",
      applies: true,
      notes: "Fully subject to Bill M217. Applicable to all commercial highway tractors operating in BC, including interprovincial and US-plated trucks.",
      recommendedKit: "SoilTracker Commercial Tractor Kit (J1939 Plug & Play + 72H Night-Vision Dashcam)",
    },
    {
      id: "single-axle",
      name: "Single-Axle Flatbed / Light Medium",
      gvwr: "Under 11,793 kg GVWR",
      applies: false,
      notes: "Exempt from the mandatory commercial dashcam requirement, but eligible for voluntary SoilTracker load and geofence tracking.",
      recommendedKit: "SoilTracker Telematics Only (Voluntary Dashcam Optional)",
    },
  ];

  const current = truckTypes.find((t) => t.id === selectedTruck) || truckTypes[0];

  return (
    <div className={styles.checkerWrapper}>
      <div className={styles.checkerHeader}>
        <div className={styles.eyebrow}>INTERACTIVE STATUTORY VERIFICATION</div>
        <h3 className={styles.checkerTitle}>Check Your Truck&apos;s Mandate Status</h3>
        <p className={styles.checkerSubtitle}>
          Select your vehicle configuration below to verify statutory compliance under BC Bill M217 and MOTI commercial transport regulations.
        </p>
      </div>

      {/* Selector Pills */}
      <div className={styles.pillSelector}>
        {truckTypes.map((truck) => (
          <button
            key={truck.id}
            type="button"
            className={`${styles.truckPill} ${selectedTruck === truck.id ? styles.truckPillActive : ""}`}
            onClick={() => setSelectedTruck(truck.id)}
          >
            <i className="ri-truck-line"></i>
            <span>{truck.name}</span>
          </button>
        ))}
      </div>

      {/* Result Card */}
      <div className={styles.resultCard}>
        <div className={styles.resultHeader}>
          <div>
            <div className={styles.truckName}>{current.name}</div>
            <div className={styles.truckGvwr}>{current.gvwr}</div>
          </div>
          <div className={current.applies ? styles.statusBadgeMandatory : styles.statusBadgeExempt}>
            <i className={current.applies ? "ri-alert-line" : "ri-checkbox-circle-line"}></i>
            <span>{current.applies ? "Mandatory Compliance Required" : "Statutorily Exempt (<11,793 kg)"}</span>
          </div>
        </div>

        <div className={styles.resultGrid}>
          <div className={styles.specBox}>
            <span className={styles.specLabel}>Camera Angle Rule</span>
            <strong className={styles.specValue} style={{ color: "#047857" }}>Forward Road-Facing Only</strong>
            <span className={styles.specSub}>Zero driver-facing cameras. 100% driver cab privacy guaranteed.</span>
          </div>

          <div className={styles.specBox}>
            <span className={styles.specLabel}>Storage Specification</span>
            <strong className={styles.specValue}>72+ Hours Continuous</strong>
            <span className={styles.specSub}>Tamper-evident rolling buffer retained locally on device.</span>
          </div>

          <div className={styles.specBox}>
            <span className={styles.specLabel}>Video Quality Standard</span>
            <strong className={styles.specValue}>1080p HDR + Night Vision</strong>
            <span className={styles.specSub}>High-clarity road, plate &amp; overhead signage capture in adverse weather.</span>
          </div>
        </div>

        <div className={styles.resultNotes}>
          <i className="ri-information-line"></i>
          <div>
            <strong>Statutory Assessment: </strong>
            <span>{current.notes}</span>
          </div>
        </div>

        <div className={styles.recommendationBar}>
          <div className={styles.recText}>
            <span className={styles.recLabel}>Turnkey Solution:</span>
            <span className={styles.recValue}>{current.recommendedKit}</span>
          </div>
          <Link href="/get-started" className={styles.recBtn}>
            Equip This Truck →
          </Link>
        </div>
      </div>
    </div>
  );
}
