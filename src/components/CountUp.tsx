"use client";

import React, { useEffect, useRef, useState } from "react";

// Animates the numeric part of a stat string (e.g. "$75,000", "30 m³") counting
// up when scrolled into view. Non-numeric strings ("Unanimous"), bare years, and
// prefers-reduced-motion users get the static text.
export default function CountUp({
  text,
  duration = 1400,
}: {
  text: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = text.match(/^([^0-9]*)([\d,]+)(.*)$/);
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!match || reduced) {
      setDisplay(text);
      return;
    }
    const prefix = match[1];
    const suffix = match[3];
    const target = parseInt(match[2].replace(/,/g, ""), 10);
    const hasCommas = match[2].includes(",");
    // Bare years like "2026" shouldn't count up — it reads as a glitch.
    if (!prefix && !suffix.trim() && target >= 1900 && target <= 2100) {
      setDisplay(text);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || startedRef.current) return;
        startedRef.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = Math.round(target * eased);
          const num = hasCommas ? val.toLocaleString("en-CA") : String(val);
          setDisplay(prefix + num + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, duration]);

  return <span ref={ref}>{display}</span>;
}
