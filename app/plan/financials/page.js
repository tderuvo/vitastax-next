"use client";
import { useState } from "react";

const NAVY  = "#1A1A2E";
const BLUE  = "#1D4ED8";
const WHITE = "#FFFFFF";
const GREY  = "#F3F4F6";
const DARK  = "#1F2937";
const MID   = "#6B7280";
const GREEN = "#16A34A";

const assumptions = [
  { label: "Price per subscriber",         value: "$70 / month" },
  { label: "Net profit per subscriber",    value: "$32 / month (~46% margin)" },
  { label: "Variable cost per subscriber", value: "$38 / month (product + shipping + fees)" },
  { label: "Valuation multiple",           value: "2.5–3× annual net profit (SDE)" },
  { label: "Business model",              value: "DTC monthly subscription — supplement stax" },
  { label: "Fulfillment target",           value: "Co-packer at scale (250+ subscribers)" },
];

const costBreakdown = [
  { item: "Supplement product cost",   amount: "$18–22", pct: "~29%" },
  { item: "Packaging (daily packs)",   amount: "$4–6",   pct: "~7%" },
  { item: "Shipping & fulfillment",    amount: "$7–9",   pct: "~11%" },
  { item: "Payment processing (3%)",   amount: "$2.10",  pct: "~3%" },
  { item: "Total variable cost",       amount: "~$38",   pct: "~54%", bold: true },
  { item: "Net profit per subscriber", amount: "~$32",   pct: "~46%", bold: true, green: true },
];

function fmtFull(n) {
  return "$" + Number(n).toLocaleString("en-US");
}

export default function FinancialsPage() {
  const [customers, setCustomers] = useState("");
  const [desiredProfit, setDesiredProfit] = useState("");

  return (
    <div>
      <PageHeader
        label="Financials"
        title="Unit Economics & Assumptions."
        desc="The numbers behind VitaStax — what it costs to deliver, what we keep, and how to model profit at any subscriber count."
      />

      <Section title="Key Assumptions">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.75rem" }}>
          {assumptions.map(({ label, value }) => (
            <div key={label} style={{ background: GREY, borderRadius: 8, padding: "1rem 1.25rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color: MID, marginBottom: 4 }}>
                {label}
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: DARK }}>{value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Cost Breakdown — Per Subscriber Per Month">
        <div style={{ background: WHITE, border: "1px solid #E5E7EB", borderRadius: 8, overflow: "hidden" }}>
          {costBreakdown.map(({ item, amount, pct, bold, green }) => (
            <div key={item} style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 60px",
              alignItems: "center",
              padding: "0.75rem 1.25rem",
              borderBottom: "1px solid #F3F4F6",
              background: bold ? GREY : WHITE,
            }}>
              <span style={{ fontSize: "0.88rem", color: bold ? DARK : MID, fontWeight: bold ? 700 : 400 }}>{item}</span>
              <span style={{ fontSize: "0.88rem", fontWeight: 700, color: green ? GREEN : DARK, textAlign: "right" }}>{amount}</span>
              <span style={{ fontSize: "0.82rem", color: MID, textAlign: "right" }}>{pct}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.75rem", color: MID, marginTop: "0.75rem", lineHeight: 1.6 }}>
          Cost estimates based on small-batch supplement sourcing. Costs decrease meaningfully at co-packer scale (250+ subscribers).
        </p>
      </Section>

      <Section title="Profit Calculator">
        <div style={{ background: GREY, borderRadius: 8, padding: "1.75rem 2rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

            <div style={{ display: "flex", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: MID, marginBottom: 6 }}>
                  Number of Subscribers
                </label>
                <input
                  type="number"
                  min="0"
                  value={customers}
                  onChange={e => setCustomers(e.target.value)}
                  placeholder="e.g. 100"
                  style={{ padding: "0.6rem 0.9rem", border: "1px solid #D1D5DB", borderRadius: 6,
                    fontSize: "1rem", width: 180, outline: "none", background: WHITE, color: DARK }}
                />
              </div>
              {customers !== "" && Number(customers) >= 0 && (
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {[
                    { label: "Monthly Profit", value: fmtFull(Number(customers) * 32), color: GREEN },
                    { label: "Annual Profit",  value: fmtFull(Number(customers) * 32 * 12), color: GREEN },
                    { label: "Exit Value (low)",  value: fmtFull(Number(customers) * 32 * 12 * 2.5), color: BLUE },
                    { label: "Exit Value (high)", value: fmtFull(Number(customers) * 32 * 12 * 3), color: BLUE },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{ background: WHITE, borderRadius: 6, padding: "0.75rem 1.25rem",
                      border: "1px solid #E5E7EB" }}>
                      <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", color: MID, marginBottom: 4 }}>
                        {label}
                      </div>
                      <div style={{ fontSize: "1.4rem", fontWeight: 800, color, letterSpacing: "-0.03em" }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ borderTop: "1px solid #E5E7EB" }} />

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
                  style={{ padding: "0.6rem 0.9rem", border: "1px solid #D1D5DB", borderRadius: 6,
                    fontSize: "1rem", width: 180, outline: "none", background: WHITE, color: DARK }}
                />
              </div>
              {desiredProfit !== "" && Number(desiredProfit) >= 0 && (
                <div style={{ background: WHITE, borderRadius: 6, padding: "0.75rem 1.25rem",
                  border: "1px solid #E5E7EB" }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: MID, marginBottom: 4 }}>
                    Subscribers Needed
                  </div>
                  <div style={{ fontSize: "1.4rem", fontWeight: 800, color: BLUE,
                    letterSpacing: "-0.03em" }}>
                    {Math.ceil(Number(desiredProfit) / 32).toLocaleString("en-US")}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <p style={{ fontSize: "0.75rem", color: MID, marginTop: "0.75rem", lineHeight: 1.6 }}>
          Exit value calculated at 2.5–3× annual net SDE — standard multiple for small bootstrapped DTC subscription businesses.
        </p>
      </Section>
    </div>
  );
}

function PageHeader({ label, title, desc }) {
  return (
    <div style={{ background: NAVY, borderRadius: 10, padding: "2rem 2.5rem", marginBottom: "2rem" }}>
      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>
        {label}
      </div>
      <h1 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800,
        margin: "0 0 0.6rem", letterSpacing: "-0.02em" }}>
        {title}
      </h1>
      <p style={{ color: "rgba(255,255,255,0.55)", margin: 0, fontSize: "0.9rem",
        lineHeight: 1.7, maxWidth: 560 }}>
        {desc}
      </p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: MID, marginBottom: "1rem",
        paddingBottom: "0.5rem", borderBottom: "1px solid #E5E7EB" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
