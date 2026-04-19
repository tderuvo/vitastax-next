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

const PURPLE = "#7C3AED";
const TEAL   = "#0D9488";

function MarketVision() {
  return (
    <div style={{ marginBottom: "2.5rem" }}>

      {/* Section label */}
      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: MID, marginBottom: "1rem",
        paddingBottom: "0.5rem", borderBottom: "1px solid #E5E7EB" }}>
        Market Vision & Differentiation
      </div>

      {/* The problem */}
      <div style={{
        background: "#FAFAFA",
        border: "1px solid #E5E7EB",
        borderRadius: 10,
        padding: "1.75rem",
        marginBottom: "1rem",
      }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#DC2626", marginBottom: 10 }}>
          The Problem with Every Competitor
        </div>
        <p style={{ fontSize: "1rem", fontWeight: 700, color: DARK,
          margin: "0 0 0.75rem", lineHeight: 1.5 }}>
          Same pills. Same dose. Same day. Every day. Forever.
        </p>
        <p style={{ fontSize: "0.9rem", color: MID, margin: 0, lineHeight: 1.8 }}>
          Ritual, Persona, Care/of, Athletic Greens — every player in the $200B supplement
          market hands you an identical pack on day 1 and day 365. The logic is simplicity.
          But the biology disagrees. Your body is not a static system. It adapts, downregulates
          receptors, and builds tolerance. The same supplement signal, delivered identically
          every day, becomes background noise. You're paying for diminishing returns —
          and you don't even know it.
        </p>
      </div>

      {/* The two pillars */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem",
        marginBottom: "1rem" }}>

        {/* Pillar 1 */}
        <div style={{
          background: NAVY,
          borderRadius: 10,
          padding: "1.75rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -20, right: -20,
            width: 100, height: 100,
            background: PURPLE + "20",
            borderRadius: "50%",
          }} />
          <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: PURPLE, marginBottom: 10 }}>
            Pillar 01 — The Stax Protocol
          </div>
          <h3 style={{ color: WHITE, fontWeight: 800, fontSize: "1.05rem",
            margin: "0 0 1rem", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
            Cycling supplements the way your body actually works.
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem",
            lineHeight: 1.8, margin: "0 0 1rem" }}>
            Instead of a fixed daily stack, VitaStax builds a rotating monthly
            protocol — an omega window, a gut health sequence, an antioxidant
            phase, a mineral cycle. Each "stax" arrives at the right point in
            the month, designed to keep your body{" "}
            <span style={{ color: WHITE, fontWeight: 600 }}>signaled and responsive</span>,
            not adapted and indifferent.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem",
            lineHeight: 1.8, margin: 0 }}>
            This is the logic of periodization — the same principle elite athletes
            use to prevent plateau — applied to daily supplementation. Your body
            stays primed for the next stax because it hasn't been saturated by it.
          </p>
        </div>

        {/* Pillar 2 */}
        <div style={{
          background: NAVY,
          borderRadius: 10,
          padding: "1.75rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: -20, right: -20,
            width: 100, height: 100,
            background: TEAL + "20",
            borderRadius: "50%",
          }} />
          <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: TEAL, marginBottom: 10 }}>
            Pillar 02 — Intermittent Supplementation
          </div>
          <h3 style={{ color: WHITE, fontWeight: 800, fontSize: "1.05rem",
            margin: "0 0 1rem", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
            The intermittent fasting of the supplement world.
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem",
            lineHeight: 1.8, margin: "0 0 1rem" }}>
            Intermittent fasting became a movement not because it was new science,
            but because it reframed a simple idea in a way consumers could understand
            and adopt. VitaStax does the same for supplements:{" "}
            <span style={{ color: WHITE, fontWeight: 600 }}>cycling, not grinding</span>.
            Periods of targeted supplementation followed by rotation — not absence,
            but intelligent sequencing.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem",
            lineHeight: 1.8, margin: 0 }}>
            This unlocks something no competitor can offer from their current model:
            a single monthly subscription that addresses{" "}
            <span style={{ color: WHITE, fontWeight: 600 }}>12–15 different health
            vectors</span> — immunity, cognition, gut, sleep, joints, skin, energy —
            without overwhelming users with 12 pills a day.
          </p>
        </div>
      </div>

      {/* Comparison row */}
      <div style={{
        background: "#F8FAFC",
        border: "1px solid #E5E7EB",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: "1rem",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          background: DARK,
          padding: "0.75rem 1.25rem",
        }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
            Dimension
          </span>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
            The Market (Everyone Else)
          </span>
          <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: TEAL }}>
            VitaStax
          </span>
        </div>
        {[
          ["Daily protocol",       "Same stack, every day",              "Rotating stax — sequenced by design"],
          ["Health vectors / mo",  "5–6 (fixed)",                        "12–15 (cycling through categories)"],
          ["Pills per day",        "4–8 (same each day)",                "3–5 (varies, never overwhelming)"],
          ["Body adaptation",      "Tolerance builds over time",         "Cycling keeps sensitivity high"],
          ["Concept hook",         "Convenience",                        "The Stax Protocol — intermittent supplementation"],
          ["Defensibility",        "Brand only",                         "Protocol IP + subscriber data + brand"],
        ].map(([dim, them, us], i) => (
          <div key={dim} style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            padding: "0.75rem 1.25rem",
            borderTop: "1px solid #E5E7EB",
            background: i % 2 === 0 ? WHITE : "#F8FAFC",
          }}>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: DARK }}>{dim}</span>
            <span style={{ fontSize: "0.82rem", color: MID }}>{them}</span>
            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: TEAL }}>{us}</span>
          </div>
        ))}
      </div>

      {/* The moat */}
      <div style={{
        background: "linear-gradient(135deg, " + NAVY + " 0%, #2D1B69 100%)",
        borderRadius: 10,
        padding: "1.75rem 2rem",
      }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: PURPLE, marginBottom: 8 }}>
          Why This Is a Moat, Not Just a Feature
        </div>
        <p style={{ color: WHITE, fontSize: "1rem", fontWeight: 700,
          lineHeight: 1.6, margin: "0 0 0.75rem" }}>
          A competitor can copy a supplement formula overnight.
          They cannot copy a protocol their entire product is built against.
        </p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem",
          lineHeight: 1.8, margin: "0 0 1.25rem" }}>
          Ritual can't introduce cycling without admitting their existing model
          is inferior. Persona can't introduce intermittent supplementation without
          restructuring their entire recommendation engine. VitaStax starts here —
          which means every subscriber we acquire is trained on a concept our
          competitors fundamentally can't replicate from where they stand.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Concept",    value: "The Stax Protocol™" },
            { label: "Category",  value: "Intermittent supplementation" },
            { label: "Position",  value: "First mover" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.08)",
              borderRadius: 8, padding: "0.65rem 1.1rem" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 3 }}>
                {label}
              </div>
              <div style={{ fontWeight: 700, color: WHITE, fontSize: "0.88rem" }}>{value}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

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
          Every supplement subscription on the market gives you the same 5–6 pills,
          every single day, forever. VitaStax is built on a fundamentally different idea:{" "}
          <strong style={{ color: WHITE }}>your body shouldn't take the same supplements
          on the same schedule indefinitely</strong> — it should cycle through them.
        </p>
        <p style={{ color: "rgba(255,255,255,0.65)", margin: 0,
          fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 580 }}>
          We call it the <strong style={{ color: WHITE }}>Stax Protocol</strong> — a
          rotating, science-informed monthly supplement cycle that keeps your body
          responsive, covers more health vectors, and delivers a product experience
          no competitor is currently offering. At scale, this proprietary protocol
          is the moat — in a category where deals have ranged from{" "}
          <strong style={{ color: WHITE }}>$225M to $5.75B</strong>.
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

      {/* Market Vision */}
      <MarketVision />

      {/* divider */}
      <div style={{ borderTop: "2px solid #E5E7EB", margin: "2.5rem 0" }} />

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
