const NAVY  = "#1A1A2E";
const BLUE  = "#1D4ED8";
const WHITE = "#FFFFFF";
const GREY  = "#F3F4F6";
const DARK  = "#1F2937";
const MID   = "#6B7280";
const GREEN = "#16A34A";

const risks = [
  {
    label: "Churn Rate",
    severity: "High",
    severityColor: "#DC2626",
    note: "Industry average is 5–8% monthly churn for supplement subscriptions. At 7% churn, you lose roughly 1 in 14 subscribers every month. Growth must consistently outpace churn or the subscriber base stagnates.",
    mitigations: [
      "Build a loyalty program early — discounts at 3, 6, 12 months",
      "Monthly personalisation check-ins to reinforce value",
      "Monitor churn by cohort to identify the drop-off point",
    ],
  },
  {
    label: "Regulatory (FDA)",
    severity: "Medium",
    severityColor: "#CA8A04",
    note: "Dietary supplements fall under FDA DSHEA rules. No medical claims are permitted on packaging or marketing. Violations can result in warning letters, product recalls, or FTC action. Labeling must comply with supplement facts panel requirements.",
    mitigations: [
      "Consult a regulatory attorney before finalising packaging",
      "Review all marketing copy for prohibited claims",
      "Source from cGMP-certified suppliers only",
    ],
  },
  {
    label: "Fulfillment Scalability",
    severity: "Medium",
    severityColor: "#CA8A04",
    note: "Manual assembly and fulfillment is not viable past 50 subscribers. The transition to a co-packer introduces lead times, minimum order quantities, and upfront costs. Getting this timing wrong causes delivery delays and churn.",
    mitigations: [
      "Begin co-packer conversations at 30 subscribers — not 50",
      "Negotiate flexible MOQs for the first few runs",
      "Keep 2–3 weeks of inventory buffer during the transition",
    ],
  },
  {
    label: "Customer Acquisition Cost (CAC)",
    severity: "Medium",
    severityColor: "#CA8A04",
    note: "Paid social (Meta, TikTok) can acquire customers at $30–80+ CAC depending on targeting. At $70/mo revenue and $32/mo net profit, a $60 CAC means nearly 2 months to break even on a subscriber — before accounting for churn.",
    mitigations: [
      "Prioritise referral and organic before paid acquisition",
      "Set a maximum CAC threshold (suggested: <$40 initially)",
      "Track LTV:CAC ratio — target 3:1 or better",
    ],
  },
  {
    label: "IRS Obligation",
    severity: "High",
    severityColor: "#DC2626",
    note: "The IRS payment plan is a fixed monthly obligation that must be treated as a non-negotiable operating cost — not something to defer if revenue is low. Missing payments risks default, penalties, and compounding interest.",
    mitigations: [
      "Phase 2 target (50 subscribers / $1,600 net) is explicitly sized to cover this",
      "Separate a dedicated business account for IRS payments",
      "Do not reinvest revenue at the expense of this obligation",
    ],
  },
  {
    label: "Product Quality & Sourcing",
    severity: "Low–Medium",
    severityColor: "#2563EB",
    note: "Supplement ingredients must be sourced from reputable, cGMP-certified suppliers. Quality issues — wrong doses, contamination, or mislabelling — create liability, brand damage, and potential regulatory action.",
    mitigations: [
      "Use only cGMP-certified ingredient suppliers",
      "Request certificates of analysis (COAs) for every ingredient batch",
      "Consider product liability insurance from day one",
    ],
  },
];

export default function RisksPage() {
  return (
    <div>
      <PageHeader
        label="Risks"
        title="What Could Go Wrong."
        desc="An honest assessment of the risks VitaStax faces — and the specific mitigations for each. Knowing the risks is the first step to managing them."
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {risks.map(({ label, severity, severityColor, note, mitigations }) => (
          <div key={label} style={{
            background: "white",
            border: "1px solid #E5E7EB",
            borderRadius: 10,
            overflow: "hidden",
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "4px 1fr" }}>
              <div style={{ background: severityColor }} />
              <div style={{ padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.75rem" }}>
                  <span style={{ fontWeight: 700, color: DARK, fontSize: "0.95rem" }}>{label}</span>
                  <span style={{
                    fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: severityColor,
                    background: severityColor + "14",
                    border: "1px solid " + severityColor + "33",
                    borderRadius: 20, padding: "0.2rem 0.6rem",
                  }}>
                    {severity} Risk
                  </span>
                </div>
                <p style={{ fontSize: "0.87rem", color: MID, lineHeight: 1.7, margin: "0 0 1rem" }}>
                  {note}
                </p>
                <div style={{ background: GREY, borderRadius: 6, padding: "0.75rem 1rem" }}>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: MID, marginBottom: 8 }}>
                    Mitigations
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {mitigations.map((m, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: "0.83rem", color: DARK, lineHeight: 1.5 }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
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
