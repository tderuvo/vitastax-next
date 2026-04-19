"use client";
import Link from "next/link";

const NAVY  = "#1A1A2E";
const BLUE  = "#1D4ED8";
const WHITE = "#FFFFFF";
const DARK  = "#1F2937";
const MID   = "#6B7280";
const GREEN = "#16A34A";

const sections = [
  {
    href: "/plan/financials",
    icon: "＄",
    title: "Financials",
    desc: "Unit economics, key assumptions, and the profit calculator. What it costs, what we make, and what it takes to hit each target.",
    color: GREEN,
  },
  {
    href: "/plan/roadmap",
    icon: "→",
    title: "Roadmap",
    desc: "Phase-by-phase growth plan from 10 to 1,000 subscribers. What happens at each milestone and what it unlocks.",
    color: BLUE,
  },
  {
    href: "/plan/exit",
    icon: "↗",
    title: "Exit Valuation",
    desc: "Interactive tool to model our exit value at each subscriber milestone. Click any stage to see the full picture.",
    color: "#7C3AED",
  },
  {
    href: "/plan/market",
    icon: "⬡",
    title: "Market Landscape",
    desc: "Supplement M&A history — who bought what, for how much, and what it means for VitaStax's upside potential.",
    color: "#CA8A04",
  },
  {
    href: "/plan/risks",
    icon: "△",
    title: "Risks",
    desc: "An honest look at what could go wrong — churn, regulatory, fulfillment, CAC, and the IRS obligation.",
    color: "#DC2626",
  },
];

export default function PlanOverview() {
  return (
    <div>
      {/* Internal badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        background: "#FEF3C7",
        border: "1px solid #FCD34D",
        borderRadius: 20,
        padding: "0.3rem 0.9rem",
        marginBottom: "1.75rem",
      }}>
        <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#92400E" }}>
          Internal — Partners Only
        </span>
      </div>

      {/* Hero */}
      <div style={{
        background: NAVY,
        borderRadius: 10,
        padding: "2.5rem",
        marginBottom: "2.5rem",
      }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: BLUE, marginBottom: 10 }}>
          VitaStax™ — Business Overview
        </div>
        <h1 style={{ color: WHITE, fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 800, margin: "0 0 1rem", letterSpacing: "-0.02em" }}>
          The Case for VitaStax.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", margin: "0 0 1.5rem",
          fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 580 }}>
          Consumers already spend $50–100/month on supplements bought piecemeal from
          Amazon or GNC. VitaStax repackages those same supplements into daily pocket
          packs — personalized, convenient, and shipped monthly.
        </p>
        <p style={{ color: "rgba(255,255,255,0.65)", margin: 0,
          fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 580 }}>
          The value proposition is <strong style={{ color: WHITE }}>simplicity and
          consistency</strong>, not novelty. We earn recurring revenue on a product
          people already buy. At scale, the margin profile and predictable cash flow
          makes us an attractive acquisition target for Nestlé, Unilever, Bayer,
          or a PE roll-up — a category where deals have ranged from{" "}
          <strong style={{ color: WHITE }}>$225M to $5.75B</strong> in the last decade.
        </p>
      </div>

      {/* Stats row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        gap: "0.75rem",
        marginBottom: "2.5rem",
      }}>
        {[
          { label: "Price / subscriber",  value: "$70/mo" },
          { label: "Net profit / sub",    value: "$32/mo" },
          { label: "Margin",              value: "~46%" },
          { label: "Market size",         value: "$200B+" },
          { label: "Target exit",         value: "$250k–$1M+" },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: WHITE,
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            padding: "1rem 1.25rem",
          }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
              textTransform: "uppercase", color: MID, marginBottom: 4 }}>
              {label}
            </div>
            <div style={{ fontSize: "1.3rem", fontWeight: 800, color: DARK,
              letterSpacing: "-0.02em" }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: MID, marginBottom: "1rem" }}>
        Explore the Plan
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.75rem" }}>
        {sections.map(({ href, icon, title, desc, color }) => (
          <Link key={href} href={href} style={{ textDecoration: "none" }}>
            <div style={{
              background: WHITE,
              border: "1px solid #E5E7EB",
              borderRadius: 10,
              padding: "1.5rem",
              height: "100%",
              boxSizing: "border-box",
              cursor: "pointer",
              transition: "box-shadow 0.15s, border-color 0.15s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "#E5E7EB";
            }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: color + "14",
                border: "1px solid " + color + "33",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1rem",
                color: color,
                marginBottom: "1rem",
                fontWeight: 700,
              }}>
                {icon}
              </div>
              <div style={{ fontWeight: 700, color: DARK, fontSize: "0.95rem",
                marginBottom: 6 }}>
                {title}
              </div>
              <div style={{ fontSize: "0.82rem", color: MID, lineHeight: 1.6 }}>
                {desc}
              </div>
              <div style={{ marginTop: "1rem", fontSize: "0.78rem", fontWeight: 600,
                color: color }}>
                Open →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
