"use client";
import ExitValuationChart from "../../../exit-valuation-chart";

const NAVY = "#1A1A2E";
const BLUE = "#1D4ED8";
const WHITE = "#FFFFFF";
const MID  = "#6B7280";

export default function ExitPage() {
  return (
    <div>
      <div style={{ background: NAVY, borderRadius: 10, padding: "2rem 2.5rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>
          Exit Valuation
        </div>
        <h1 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800,
          margin: "0 0 0.6rem", letterSpacing: "-0.02em" }}>
          From Side Hustle to Exit.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", margin: 0, fontSize: "0.9rem",
          lineHeight: 1.7, maxWidth: 560 }}>
          Click any milestone to model the full exit picture. Based on the 2.5–3× annual
          net profit (SDE) multiple — standard for small bootstrapped DTC subscription businesses.
        </p>
      </div>
      <ExitValuationChart />
    </div>
  );
}
