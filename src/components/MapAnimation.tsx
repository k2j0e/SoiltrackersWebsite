export default function MapAnimation() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 720 560"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: "absolute", inset: 0 }}
      >
        {/* land parcels */}
        <g opacity=".55">
          <path
            d="M-20 60 L 210 30 L 260 170 L 90 230 L -20 190 Z"
            fill="var(--st-ink-150)"
            style={{ fill: "rgb(228,238,224)" }}
          ></path>
          <path
            d="M300 -20 L 560 10 L 610 150 L 430 200 L 330 120 Z"
            style={{ fill: "rgb(233,240,228)" }}
          ></path>
          <path
            d="M60 300 L 250 260 L 330 400 L 150 480 L 30 420 Z"
            style={{ fill: "rgb(228,238,224)" }}
          ></path>
          <path
            d="M420 250 L 640 220 L 740 340 L 560 420 L 450 370 Z"
            style={{ fill: "rgb(233,240,228)" }}
          ></path>
          <path
            d="M230 470 L 470 440 L 540 580 L 260 600 Z"
            style={{ fill: "rgb(228,238,224)" }}
          ></path>
          <path
            d="M580 460 L 740 430 L 760 580 L 600 590 Z"
            style={{ fill: "rgb(224,231,203)" }}
          ></path>
        </g>
        {/* river */}
        <path
          d="M -30 520 C 140 470, 200 380, 320 370 C 470 358, 560 300, 750 290 L 750 250 C 570 262, 480 320, 330 332 C 210 342, 130 434, -30 480 Z"
          style={{ fill: "rgb(210,228,229)", opacity: ".8" }}
        ></path>
        {/* road network */}
        <g stroke="#fff" strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M-20 140 C 180 118, 420 178, 740 148"></path>
          <path d="M-20 300 C 220 278, 480 338, 740 298"></path>
          <path d="M-20 452 C 200 436, 460 486, 740 446"></path>
          <path d="M160 -20 C 150 180, 190 400, 170 580"></path>
          <path d="M405 -20 C 395 200, 435 380, 415 580"></path>
          <path d="M590 -20 C 580 160, 610 420, 595 580"></path>
        </g>
        <g stroke="rgb(203,215,209)" strokeWidth="2" strokeLinecap="round" fill="none">
          <path d="M-20 140 C 180 118, 420 178, 740 148"></path>
          <path d="M-20 300 C 220 278, 480 338, 740 298"></path>
          <path d="M-20 452 C 200 436, 460 486, 740 446"></path>
          <path d="M160 -20 C 150 180, 190 400, 170 580"></path>
          <path d="M405 -20 C 395 200, 435 380, 415 580"></path>
          <path d="M590 -20 C 580 160, 610 420, 595 580"></path>
        </g>
        {/* planned (unmatched) route */}
        <path
          d="M170 150 C 300 120, 470 130, 592 452"
          fill="none"
          stroke="rgb(195,211,211)"
          strokeWidth="2.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
        ></path>
        {/* active haul route: white casing + solid teal + flowing dash highlight */}
        <path
          d="M170 150 C 260 210, 320 260, 405 300 C 480 335, 540 395, 592 452"
          fill="none"
          stroke="#fff"
          strokeWidth="11"
          strokeLinecap="round"
          opacity=".9"
        ></path>
        <path
          d="M170 150 C 260 210, 320 260, 405 300 C 480 335, 540 395, 592 452"
          fill="none"
          stroke="var(--st-brand-primary)"
          strokeWidth="5"
          strokeLinecap="round"
        ></path>
        <path
          d="M170 150 C 260 210, 320 260, 405 300 C 480 335, 540 395, 592 452"
          fill="none"
          stroke="var(--st-success-bg)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2 26"
          style={{ animation: "st-dash 1.4s linear infinite" }}
        ></path>
        {/* pin ground pulses */}
        <circle cx="170" cy="150" r="10" fill="none" stroke="var(--st-brand-primary)">
          <animate attributeName="r" values="6;26" dur="2.4s" repeatCount="indefinite"></animate>
          <animate attributeName="opacity" values=".55;0" dur="2.4s" repeatCount="indefinite"></animate>
        </circle>
        <circle cx="592" cy="452" r="10" fill="none" stroke="var(--st-success)">
          <animate attributeName="r" values="6;26" dur="2.4s" begin="1.2s" repeatCount="indefinite"></animate>
          <animate attributeName="opacity" values=".55;0" dur="2.4s" begin="1.2s" repeatCount="indefinite"></animate>
        </circle>
        {/* trucks travelling the route */}
        <g>
          <circle r="8" fill="var(--st-brand-primary-dark)" stroke="#fff" strokeWidth="2.5"></circle>
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M170 150 C 260 210, 320 260, 405 300 C 480 335, 540 395, 592 452"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="spline"
            keySplines="0.4 0 0.6 1"
          ></animateMotion>
        </g>
        <g opacity=".9">
          <circle r="6" fill="var(--st-success)" stroke="#fff" strokeWidth="2"></circle>
          <animateMotion
            dur="7s"
            begin="3.2s"
            repeatCount="indefinite"
            path="M170 150 C 260 210, 320 260, 405 300 C 480 335, 540 395, 592 452"
            keyPoints="0;1"
            keyTimes="0;1"
            calcMode="spline"
            keySplines="0.4 0 0.6 1"
          ></animateMotion>
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          left: "146px",
          top: "104px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "16px 16px 16px 4px",
            background: "var(--st-brand-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-8deg)",
            boxShadow: "0 4px 8.8px rgba(0,0,0,.15)",
          }}
        >
          <i
            className="ri-shovel-line"
            style={{ fontSize: "20px", color: "#fff", transform: "rotate(8deg)" }}
          ></i>
        </div>
        <span
          className="st-sub-caps"
          style={{
            color: "var(--st-ink-900)",
            background: "#fff",
            padding: "6px 10px",
            borderRadius: "1000px",
            boxShadow: "0 1px 2px rgba(0,0,0,.08)",
            textTransform: "none",
            letterSpacing: "0",
            fontWeight: 600,
            fontSize: "13px"
          }}
        >
          Source site
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: "380px",
          top: "254px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "16px 16px 16px 4px",
            background: "var(--st-brand-primary-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-8deg)",
            boxShadow: "0 4px 8.8px rgba(0,0,0,.15)",
          }}
        >
          <i
            className="ri-truck-line"
            style={{ fontSize: "20px", color: "#fff", transform: "rotate(8deg)" }}
          ></i>
        </div>
        <span
          className="st-sub-caps"
          style={{
            color: "var(--st-ink-900)",
            background: "#fff",
            padding: "6px 10px",
            borderRadius: "1000px",
            boxShadow: "0 1px 2px rgba(0,0,0,.08)",
            textTransform: "none",
            letterSpacing: "0",
            fontWeight: 600,
            fontSize: "13px"
          }}
        >
          14 trucks en route
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: "568px",
          top: "406px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "16px 16px 16px 4px",
            background: "var(--st-success)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: "rotate(-8deg)",
            boxShadow: "0 4px 8.8px rgba(0,0,0,.15)",
          }}
        >
          <i
            className="ri-map-pin-line"
            style={{ fontSize: "20px", color: "#fff", transform: "rotate(8deg)" }}
          ></i>
        </div>
        <span
          className="st-sub-caps"
          style={{
            color: "var(--st-ink-900)",
            background: "#fff",
            padding: "6px 10px",
            borderRadius: "1000px",
            boxShadow: "0 1px 2px rgba(0,0,0,.08)",
            textTransform: "none",
            letterSpacing: "0",
            fontWeight: 600,
            fontSize: "13px"
          }}
        >
          Receiving site
        </span>
      </div>
      <div
        style={{
          position: "absolute",
          left: "36px",
          bottom: "32px",
          background: "#fff",
          borderRadius: "12px",
          padding: "14px 18px",
          boxShadow: "0 8px 24px -4px rgba(5,25,20,.12)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          animation: "st-float 5s ease-in-out infinite",
        }}
      >
        <i
          className="ri-check-double-line"
          style={{ fontSize: "18px", color: "var(--st-success)" }}
        ></i>
        <div>
          <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--st-ink-900)" }}>
            Haul #482 delivered
          </div>
          <div style={{ fontWeight: 400, fontSize: "12px", color: "var(--st-ink-500)" }}>
            240 m³ structural fill · Langley pit
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: "32px",
          top: "40px",
          background: "#fff",
          borderRadius: "12px",
          padding: "14px 18px",
          boxShadow: "0 8px 24px -4px rgba(5,25,20,.12)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          animation: "st-float 6s ease-in-out .8s infinite",
        }}
      >
        <i
          className="ri-file-check-line"
          style={{ fontSize: "18px", color: "var(--st-brand-primary)" }}
        ></i>
        <div>
          <div style={{ fontWeight: 600, fontSize: "14px", color: "var(--st-ink-900)" }}>
            Permit approved
          </div>
          <div style={{ fontWeight: 400, fontSize: "12px", color: "var(--st-ink-500)" }}>
            CSR Schedule 2 · Site 04
          </div>
        </div>
      </div>
    </div>
  );
}
