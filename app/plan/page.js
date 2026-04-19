"use client";
import ExitValuationChart from "../../exit-valuation-chart";

const NAVY  = "#1A1A2E";
const BLUE  = "#1D4ED8";
const WHITE = "#FFFFFF";
const GREY  = "#F3F4F6";
const DARK  = "#1F2937";
const MID   = "#6B7280";
const GREEN = "#16A34A";

const assumptions = [
  { label: "Price per subscriber",        value: "$70 / month" },
  { label: "Net profit per subscriber",   value: "$32 / month (~46% margin)" },
  { label: "Variable cost per subscriber",value: "$38 / month (product + shipping + fees)" },
  { label: "Valuation multiple",          value: "2.5–3× annual net profit (SDE)" },
  { label: "Business model",             value: "DTC monthly subscription — supplement stax" },
  { label: "Fulfillment target",          value: "Co-packer at scale (250+ subscribers)" },
];

const risks = [
  { label: "Churn rate",       note: "Industry avg ~5–8%/mo for supplement subs. Must be offset with acquisition." },
  { label: "Regulatory",       note: "FDA supplement labeling rules. No medical claims. Consult before launch." },
  { label: "Co-packer timing", note: "Manual fulfillment is not scalable past ~50 subscribers." },
  { label: "CAC creep",        note: "Paid ads can erode margins fast. Organic / referral is the priority." },
  { label: "IRS obligation",   note: "First milestone is covering the IRS payment plan — non-negotiable." },
];

const milestones = [
  { phase: "Phase 1", goal: "10 subscribers", metric: "$320/mo net", action: "Friends, family, social — manual fulfillment" },
  { phase: "Phase 2", goal: "50 subscribers", metric: "$1,600/mo net", action: "IRS plan covered. Proof of concept." },
  { phase: "Phase 3", goal: "165 subscribers", metric: "$5,280/mo net", action: "Co-packer engaged. $150k exit possible." },
  { phase: "Phase 4", goal: "510 subscribers", metric: "$16,320/mo net", action: "Multi-line product. $500k exit range." },
  { phase: "Phase 5", goal: "1,000 subscribers", metric: "$32,000/mo net", action: "Systemised. $1M retirement exit." },
];

export default function PlanPage() {
  return (
    <div style={{
      fontFamily: "'Inter', 'Arial', sans-serif",
      background: WHITE,
      minHeight: "100vh",
      maxWidth: 960,
      margin: "0 auto",
      padding: "2.5rem 1.5rem",
      boxSizing: "border-box",
    }}>

      {/* Internal badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "#FEF3C7",
        border: "1px solid #FCD34D",
        borderRadius: 20,
        padding: "0.35rem 1rem",
        marginBottom: "2rem",
      }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#92400E" }}>
          Internal — Partners Only
        </span>
      </div>

      {/* Page header */}
      <div style={{
        background: NAVY,
        borderRadius: 10,
        padding: "2.5rem",
        marginBottom: "2rem",
      }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>
          VITASTAX™ — BUSINESS PLAN
        </div>
        <h1 style={{ color: WHITE, fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
          fontWeight: 800, margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>
          The Case for VitaStax.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", margin: 0, fontSize: "0.95rem",
          lineHeight: 1.7, maxWidth: 640 }}>
          A bootstrapped DTC supplement subscription business. This page outlines the
          core business thesis, key assumptions, growth roadmap, and exit potential.
          Not for public distribution.
        </p>
      </div>

      {/* Business thesis */}
      <Section title="The Thesis">
        <p style={{ color: MID, fontSize: "0.92rem", lineHeight: 1.8, margin: 0 }}>
          Consumers already spend $50–100/month on supplements bought individually from Amazon or GNC.
          VitaStax repackages those same supplements into daily pocket packs — personalised, convenient,
          and shipped monthly. The value proposition is <strong style={{ color: DARK }}>simplicity and
          consistency</strong>, not novelty. The business earns recurring revenue on a product people
          already buy. At scale, the margin profile and predictable cash flow makes it an attractive
          acquisition target for a strategic buyer or private equity roll-up.
        </p>
      </Section>

      {/* Key assumptions */}
      <Section title="Key Assumptions">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.75rem" }}>
          {assumptions.map(({ label, value }) => (
            <div key={label} style={{
              background: GREY,
              borderRadius: 8,
              padding: "1rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}>
              <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: MID }}>
                {label}
              </span>
              <span style={{ fontSize: "1rem", fontWeight: 700, color: DARK }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Growth roadmap */}
      <Section title="Growth Roadmap">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {milestones.map(({ phase, goal, metric, action }, i) => (
            <div key={phase} style={{
              display: "grid",
              gridTemplateColumns: "80px 140px 160px 1fr",
              alignItems: "center",
              gap: "1rem",
              background: GREY,
              borderRadius: 8,
              padding: "1rem 1.25rem",
            }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: MID }}>
                {phase}
              </span>
              <span style={{ fontWeight: 700, color: DARK, fontSize: "0.95rem" }}>{goal}</span>
              <span style={{ fontWeight: 700, color: GREEN, fontSize: "0.95rem" }}>{metric}</span>
              <span style={{ color: MID, fontSize: "0.88rem" }}>{action}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Risks */}
      <Section title="Risks to Watch">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {risks.map(({ label, note }) => (
            <div key={label} style={{
              display: "flex",
              gap: "1.25rem",
              background: GREY,
              borderRadius: 8,
              padding: "1rem 1.25rem",
            }}>
              <span style={{ fontWeight: 700, color: DARK, fontSize: "0.9rem",
                minWidth: 130, flexShrink: 0 }}>
                {label}
              </span>
              <span style={{ color: MID, fontSize: "0.88rem", lineHeight: 1.6 }}>{note}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Divider */}
      <div style={{ borderTop: "2px solid #E5E7EB", margin: "2.5rem 0" }} />

      {/* Exit valuation tool */}
      <div style={{ marginBottom: "0.5rem" }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: MID, marginBottom: 6 }}>
          Interactive Tool
        </div>
        <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: DARK,
          margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
          Exit Valuation Explorer
        </h2>
        <p style={{ color: MID, fontSize: "0.9rem", margin: "0 0 1.5rem" }}>
          Click any milestone below to model the numbers at each stage of growth.
        </p>
      </div>
      <ExitValuationChart />

    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: MID,
        marginBottom: "1rem",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid #E5E7EB",
      }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
