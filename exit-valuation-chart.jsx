import { useState } from "react";

const NAVY   = "#1A1A2E";
const BLUE   = "#1D4ED8";
const WHITE  = "#FFFFFF";
const GREY   = "#F3F4F6";
const DARK   = "#1F2937";
const MID    = "#6B7280";
const GREEN  = "#16A34A";

const milestones = [
  {
    label:       "IRS Plan",
    salePrice:   50000,
    customers:   50,
    monthlyNet:  1500,
    annualNet:   18000,
    multiple:    "2.5–3x",
    timeline:    "6–12 months",
    note:        "Covers monthly IRS payment plan obligation",
    color:       "#16A34A",
    barPct:      5,
  },
  {
    label:       "Side Hustle Goal",
    salePrice:   150000,
    customers:   165,
    monthlyNet:  4800,
    annualNet:   57600,
    multiple:    "2.5–3x",
    timeline:    "12–18 months",
    note:        "Covers IRS plan + meaningful extra income",
    color:       "#2563EB",
    barPct:      15,
  },
  {
    label:       "Growth Stage",
    salePrice:   250000,
    customers:   270,
    monthlyNet:  8000,
    annualNet:   96000,
    multiple:    "2.5–3x",
    timeline:    "18–24 months",
    note:        "Real business with co-packer in place",
    color:       "#7C3AED",
    barPct:      25,
  },
  {
    label:       "Serious Business",
    salePrice:   500000,
    customers:   510,
    monthlyNet:  16000,
    annualNet:   192000,
    multiple:    "2.5–3x",
    timeline:    "2–3 years",
    note:        "Multiple stax lines, automated fulfillment",
    color:       "#DC2626",
    barPct:      50,
  },
  {
    label:       "Retirement Goal",
    salePrice:   1000000,
    customers:   1000,
    monthlyNet:  32000,
    annualNet:   384000,
    multiple:    "2.5–3x",
    timeline:    "3–5 years",
    note:        "Fully systemised, sellable brand with equity",
    color:       "#CA8A04",
    barPct:      100,
  },
];

function fmt(n) {
  return n >= 1000000
    ? "$" + (n / 1000000).toFixed(1) + "M"
    : "$" + (n / 1000).toFixed(0) + "k";
}

function fmtFull(n) {
  return "$" + n.toLocaleString('en-US');
}

export default function ExitValuationChart() {
  const [active, setActive] = useState(4);
  const [customers, setCustomers] = useState("");
  const [desiredProfit, setDesiredProfit] = useState("");

  const m = milestones[active];

  return (
    <div style={{
      fontFamily: "'Inter', 'Arial', sans-serif",
      background: WHITE,
      minHeight: "100vh",
      padding: "2rem",
      boxSizing: "border-box",
    }}>

      {/* Header */}
      <div style={{
        background: NAVY,
        borderRadius: 8,
        padding: "2rem",
        marginBottom: "2rem",
      }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>
          VITASTAX™ — EXIT VALUATION ROADMAP
        </div>
        <h1 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 800, margin: "0 0 0.5rem", letterSpacing: "-0.02em" }}>
          From Side Hustle to Exit.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", margin: 0, fontSize: "0.95rem" }}>
          Click a milestone to explore the numbers. Based on 2.5–3× annual net profit
          valuation multiple — standard for small DTC subscription businesses.
        </p>
      </div>

      {/* Milestone selector */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: "1rem",
        marginBottom: "2rem",
      }}>
        {milestones.map((ms, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              background: active === i ? ms.color : GREY,
              color: active === i ? WHITE : DARK,
              border: "none",
              borderRadius: 6,
              padding: "1.25rem 1rem",
              cursor: "pointer",
              textAlign: "left",
              transition: "all 0.15s",
              boxShadow: active === i ? "0 4px 16px rgba(0,0,0,0.15)" : "none",
            }}
          >
            <div style={{ fontSize: "0.65rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              opacity: active === i ? 0.8 : 0.6, marginBottom: 6 }}>
              {ms.label}
            </div>
            <div style={{ fontSize: "1.75rem", fontWeight: 800,
              letterSpacing: "-0.03em" }}>
              {fmt(ms.salePrice)}
            </div>
            <div style={{ fontSize: "0.8rem", opacity: 0.7, marginTop: 4 }}>
              ~{ms.customers} subscribers
            </div>
          </button>
        ))}
      </div>

      {/* Detail panel */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        marginBottom: "2rem",
      }}>
        {/* Left — key numbers */}
        <div style={{ background: GREY, borderRadius: 8, padding: "1.5rem" }}>
          <div style={{ fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: MID, marginBottom: "1.25rem" }}>
            KEY NUMBERS — {m.label.toUpperCase()}
          </div>
          {[
            ["Target sale price",       fmtFull(m.salePrice)],
            ["Valuation multiple",       m.multiple + " annual net profit"],
            ["Annual net profit needed", fmtFull(m.annualNet)],
            ["Monthly net profit needed",fmtFull(m.monthlyNet)],
            ["Monthly subscribers",      "~" + m.customers + " customers"],
            ["Price per customer",       "$70 / month"],
            ["Est. timeline",            m.timeline],
          ].map(([label, value]) => (
            <div key={label} style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "center", padding: "0.6rem 0",
              borderBottom: "1px solid #E5E7EB",
            }}>
              <span style={{ fontSize: "0.88rem", color: MID }}>{label}</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 700,
                color: DARK }}>{value}</span>
            </div>
          ))}
        </div>

        {/* Right — bar chart + note */}
        <div style={{ background: GREY, borderRadius: 8, padding: "1.5rem" }}>
          <div style={{ fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: MID, marginBottom: "1.25rem" }}>
            SUBSCRIBER MILESTONES
          </div>
          {milestones.map((ms, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between",
                marginBottom: 4 }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 600,
                  color: i === active ? ms.color : DARK }}>
                  {fmt(ms.salePrice)}
                </span>
                <span style={{ fontSize: "0.82rem", color: MID }}>
                  {ms.customers} customers
                </span>
              </div>
              <div style={{ background: "#E5E7EB", borderRadius: 4, height: 10 }}>
                <div style={{
                  width: ms.barPct + "%",
                  background: i === active ? ms.color : "#D1D5DB",
                  borderRadius: 4,
                  height: "100%",
                  transition: "all 0.3s",
                }} />
              </div>
            </div>
          ))}

          {/* Note */}
          <div style={{
            marginTop: "1.5rem",
            background: m.color + "14",
            border: "1px solid " + m.color + "33",
            borderRadius: 6,
            padding: "1rem",
          }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: m.color, marginBottom: 4 }}>
              STAGE NOTE
            </div>
            <p style={{ margin: 0, fontSize: "0.88rem", color: DARK,
              lineHeight: 1.5 }}>
              {m.note}
            </p>
          </div>
        </div>
      </div>

      {/* Journey strip */}
      <div style={{
        background: NAVY,
        borderRadius: 8,
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <div>
          <div style={{ fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
            THE JOURNEY
          </div>
          <div style={{ color: WHITE, fontWeight: 700, fontSize: "1rem" }}>
            10 → 50 → 165 → 270 → 510 → 1,000 customers
          </div>
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem",
            marginTop: 4 }}>
            IRS plan → $50k exit → $150k → $250k → $500k → $1M retirement
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
            NET PROFIT / MONTH AT $1M EXIT
          </div>
          <div style={{ color: "#4ADE80", fontWeight: 800,
            fontSize: "1.75rem", letterSpacing: "-0.03em" }}>
            $32,000
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
            before sale — 1,000 subscribers @ $70/mo
          </div>
        </div>
      </div>

      {/* Profit Calculator */}
      <div style={{
        background: GREY,
        borderRadius: 8,
        padding: "1.5rem 2rem",
        marginTop: "1rem",
      }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: MID, marginBottom: 8 }}>
          PROFIT CALCULATOR
        </div>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: DARK,
          margin: "0 0 1.25rem", letterSpacing: "-0.02em" }}>
          See What Your Subscriber Base Is Worth.
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Row 1: customers → profit */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", color: MID, marginBottom: 6 }}>
                Number of Customers
              </label>
              <input
                type="number"
                min="0"
                value={customers}
                onChange={e => setCustomers(e.target.value)}
                placeholder="e.g. 100"
                style={{
                  padding: "0.6rem 0.9rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: 6,
                  fontSize: "1rem",
                  width: 180,
                  outline: "none",
                  background: WHITE,
                  color: DARK,
                }}
              />
            </div>
            {customers !== "" && Number(customers) >= 0 && (
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                <div style={{ background: WHITE, borderRadius: 6, padding: "0.75rem 1.25rem",
                  border: "1px solid #E5E7EB" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: MID, marginBottom: 4 }}>
                    Monthly Profit
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800,
                    color: GREEN, letterSpacing: "-0.03em" }}>
                    {fmtFull(Number(customers) * 32)}
                  </div>
                </div>
                <div style={{ background: WHITE, borderRadius: 6, padding: "0.75rem 1.25rem",
                  border: "1px solid #E5E7EB" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: MID, marginBottom: 4 }}>
                    Annual Profit
                  </div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800,
                    color: GREEN, letterSpacing: "-0.03em" }}>
                    {fmtFull(Number(customers) * 32 * 12)}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div style={{ borderTop: "1px solid #E5E7EB" }} />

          {/* Row 2: desired profit → customers needed */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", color: MID, marginBottom: 6 }}>
                Monthly Profit Goal ($)
              </label>
              <input
                type="number"
                min="0"
                value={desiredProfit}
                onChange={e => setDesiredProfit(e.target.value)}
                placeholder="e.g. 5000"
                style={{
                  padding: "0.6rem 0.9rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: 6,
                  fontSize: "1rem",
                  width: 180,
                  outline: "none",
                  background: WHITE,
                  color: DARK,
                }}
              />
            </div>
            {desiredProfit !== "" && Number(desiredProfit) >= 0 && (
              <div style={{ background: WHITE, borderRadius: 6, padding: "0.75rem 1.25rem",
                border: "1px solid #E5E7EB" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: MID, marginBottom: 4 }}>
                  Customers Needed
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800,
                  color: BLUE, letterSpacing: "-0.03em" }}>
                  {Math.ceil(Number(desiredProfit) / 32).toLocaleString('en-US')}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Disclaimer */}
      <p style={{ fontSize: "0.75rem", color: MID, marginTop: "1.5rem",
        textAlign: "center", lineHeight: 1.6 }}>
        Valuations based on 2.5–3× SDE (Seller's Discretionary Earnings) multiple —
        standard for small bootstrapped DTC subscription businesses sold via Flippa,
        Empire Flippers, or Quiet Light. Net profit estimate: ~$32/customer/month after
        all variable costs. Actual results will vary based on churn, growth rate, and
        market conditions.
      </p>

    </div>
  );
}
