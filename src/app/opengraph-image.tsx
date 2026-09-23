import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soiltrackers | Soil Chain of Custody & Telematics Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #031812 0%, #062b21 50%, #02140f 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle Decorative Glows */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(52, 211, 153, 0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(170, 221, 102, 0.12) 0%, rgba(170, 221, 102, 0) 70%)",
          }}
        />

        {/* TOP: Brand Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Logo with Green Leaf Pin */}
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <svg width="42" height="52" viewBox="0 0 24 30">
              <path
                d="M12 0C5.4 0 0 5.3 0 11.8 0 20.5 12 30 12 30s12-9.5 12-18.2C24 5.3 18.6 0 12 0z"
                fill="#52BE37"
              />
              <path
                d="M12 5c-2 3-4.5 5-4 9 .4 2.8 2.4 4 4 4.2 1.6-.2 3.6-1.4 4-4.2.5-4-2-6-4-9z"
                fill="#ffffff"
              />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "38px", fontWeight: 800, letterSpacing: "-0.5px" }}>
                <span>Soil</span>
                <span style={{ color: "#34d399" }}>trackers</span>
              </div>
            </div>
          </div>

          {/* Regional / Industry Pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "50px",
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              fontSize: "15px",
              fontWeight: 700,
              color: "#aadd66",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <span>● British Columbia &amp; Alberta</span>
          </div>
        </div>

        {/* MIDDLE: Hero Headline & Subtext */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "1000px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              color: "#ffffff",
            }}
          >
            One verified chain of custody from excavation to final placement.
          </div>

          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.45,
              color: "rgba(255, 255, 255, 0.78)",
              fontWeight: 500,
            }}
          >
            Automated e-ticketing, GPS telematics proof of work, and regulator-ready compliance packages.
          </div>
        </div>

        {/* BOTTOM: Feature Capabilities & Domain Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "28px",
          }}
        >
          {/* Feature Badges */}
          <div style={{ display: "flex", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(19, 156, 85, 0.2)",
                border: "1px solid rgba(19, 156, 85, 0.4)",
                fontSize: "15px",
                fontWeight: 600,
                color: "#e2e8f0",
              }}
            >
              ✓ BC Bill M217 Ready
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(19, 156, 85, 0.2)",
                border: "1px solid rgba(19, 156, 85, 0.4)",
                fontSize: "15px",
                fontWeight: 600,
                color: "#e2e8f0",
              }}
            >
              ✓ GPS Geofence Cycle Times
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "8px",
                background: "rgba(19, 156, 85, 0.2)",
                border: "1px solid rgba(19, 156, 85, 0.4)",
                fontSize: "15px",
                fontWeight: 600,
                color: "#e2e8f0",
              }}
            >
              ✓ Protocol 19 &amp; CSR Aligned
            </div>
          </div>

          {/* Web Address */}
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#34d399",
              letterSpacing: "0.02em",
            }}
          >
            soiltrackers.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
