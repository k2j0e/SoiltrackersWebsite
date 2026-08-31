"use client";

import React from "react";
import Image from "next/image";
import styles from "./PaperVsDigital.module.css";

interface PaperVsDigitalProps {
  mode?: "north-america" | "bc";
}

export default function PaperVsDigital({ mode = "north-america" }: PaperVsDigitalProps) {
  return (
    <div className={styles.bannerWrapper}>
      {/* Background Cinematic Graphic */}
      <div className={styles.imageBackdrop}>
        <Image
          src="/images/digital-custody-shift.jpg"
          alt="The Shift from Paper Soil Slips to Verified Digital Custody"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={styles.backdropImg}
        />
        {/* Atmospheric Gradient Overlays for Razor-Sharp Readability */}
        <div className={styles.topVignette}></div>
        <div className={styles.radialHighlight}></div>
        <div className={styles.edgeFade}></div>
      </div>

      {/* Heroic Overlay Text */}
      <div className={styles.textOverlay}>
        <div className={styles.eyebrowBadge}>
          <span className={styles.pulseDot}></span>
          <span>THE SHIFT TO DIGITAL CUSTODY</span>
        </div>
        <h2 className={styles.monumentalHeading}>
          The paper trail era is over.
        </h2>
      </div>
    </div>
  );
}
