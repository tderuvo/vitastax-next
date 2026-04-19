const NAVY  = "#1A1A2E";
const BLUE  = "#1D4ED8";
const WHITE = "#FFFFFF";
const GREY  = "#F3F4F6";
const DARK  = "#1F2937";
const MID   = "#6B7280";
const GREEN = "#16A34A";

const phases = [
  {
    phase: "Phase 1",
    goal: "10 subscribers",
    metric: "$320/mo net",
    timeline: "Months 1–3",
    color: "#16A34A",
    action: "Friends, family, social — manual fulfillment",
    details: [
      "Launch with personal network and social media outreach",
      "Manual assembly and fulfillment — no co-packer needed yet",
      "Validate the product, packaging, and customer experience",
      "Collect testimonials and before/after feedback",
    ],
    unlock: "Proof that people will pay. Confidence to invest further.",
  },
  {
    phase: "Phase 2",
    goal: "50 subscribers",
    metric: "$1,600/mo net",
    timeline: "Months 3–6",
    color: "#2563EB",
    action: "IRS plan covered. Proof of concept locked in.",
    details: [
      "IRS monthly payment plan obligation fully covered by revenue",
      "Begin referral program — existing subscribers bring new ones",
      "Test paid social (low budget) to find customer acquisition cost",
      "Start conversations with co-packers to understand volume requirements",
    ],
    unlock: "Financial obligation met. Business becomes self-sustaining.",
  },
  {
    phase: "Phase 3",
    goal: "165 subscribers",
    metric: "$5,280/mo net",
    timeline: "Months 6–18",
    color: "#7C3AED",
    action: "Co-packer engaged. $150k exit becomes realistic.",
    details: [
      "Transition to co-packer for fulfillment — margins improve",
      "Launch second stax line (e.g. women's wellness or sleep support)",
      "Build email list and loyalty program",
      "First meaningful exit conversation possible (~$150k at 2.5–3× SDE)",
    ],
    unlock: "Real business with infrastructure. Co-packer unlocks scale.",
  },
  {
    phase: "Phase 4",
    goal: "510 subscribers",
    metric: "$16,320/mo net",
    timeline: "Years 2–3",
    color: "#DC2626",
    action: "Multi-line product range. $500k exit range.",
    details: [
      "Multiple stax lines with clear customer personas",
      "Automated fulfillment, CRM, and churn monitoring in place",
      "Retail partnerships (boutique gyms, wellness studios) as secondary channel",
      "Exit value in $400–600k range at standard multiples",
    ],
    unlock: "Systemised business. Attractive to strategic buyers.",
  },
  {
    phase: "Phase 5",
    goal: "1,000 subscribers",
    metric: "$32,000/mo net",
    timeline: "Years 3–5",
    color: "#CA8A04",
    action: "Fully systemised. $1M retirement exit.",
    details: [
      "$384,000 annual net profit — business runs with minimal founder involvement",
      "Brand equity, subscriber data, and recurring revenue make it highly acquirable",
      "Exit to Nestlé, Unilever, Bayer, or PE roll-up in $750k–$1.2M range",
      "Alternatively: keep running and earn $32k/mo indefinitely",
    ],
    unlock: "The retirement number. Sellable or holdable.",
  },
];

const journey = [
  { from: "10", to: "50",    label: "IRS covered",     color: GREEN },
  { from: "50", to: "165",   label: "Co-packer ready", color: BLUE },
  { from: "165", to: "510",  label: "Multi-line",      color: "#7C3AED" },
  { from: "510", to: "1,000",label: "Exit ready",      color: "#CA8A04" },
];

export default function RoadmapPage() {
  return (
    <div>
      <PageHeader
        label="Roadmap"
        title="Phase-by-Phase Growth Plan."
        desc="From 10 paying customers to a sellable business — what happens at each milestone, what it unlocks, and what it takes to get there."
      />

      <Section title="The Journey">
        <div style={{
          background: NAVY,
          borderRadius: 8,
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}>
          <div>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Subscriber Milestones
            </div>
            <div style={{ color: WHITE, fontWeight: 700, fontSize: "1rem" }}>
              10 → 50 → 165 → 510 → 1,000 subscribers
            </div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginTop: 4 }}>
              IRS plan → $50k exit → $150k → $500k → $1M retirement
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
              Net Profit at 1,000 Subs
            </div>
            <div style={{ color: "#4ADE80", fontWeight: 800, fontSize: "1.75rem",
              letterSpacing: "-0.03em" }}>
              $32,000/mo
            </div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>
              before sale — $384k/year
            </div>
          </div>
        </div>
      </Section>

      <Section title="Phase Details">
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {phases.map(({ phase, goal, metric, timeline, color, action, details, unlock }) => (
            <div key={phase} style={{
              background: WHITE,
              border: "1px solid #E5E7EB",
              borderRadius: 10,
              overflow: "hidden",
            }}>
              <div style={{
                display: "grid",
                gridTemplateColumns: "4px 1fr",
              }}>
                <div style={{ background: color }} />
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between",
                    alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", color, marginBottom: 4 }}>
                        {phase} · {timeline}
                      </div>
                      <div style={{ fontWeight: 800, color: DARK, fontSize: "1.1rem" }}>{goal}</div>
                      <div style={{ fontWeight: 700, color: GREEN, fontSize: "0.9rem", marginTop: 2 }}>{metric}</div>
                    </div>
                    <div style={{
                      background: color + "14",
                      border: "1px solid " + color + "33",
                      borderRadius: 6,
                      padding: "0.5rem 0.9rem",
                      fontSize: "0.78rem",
                      color,
                      fontWeight: 600,
                      maxWidth: 220,
                      textAlign: "right",
                    }}>
                      {action}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: "1rem" }}>
                    {details.map((d, i) => (
                      <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color, fontWeight: 700, marginTop: 1, flexShrink: 0 }}>·</span>
                        <span style={{ fontSize: "0.85rem", color: MID, lineHeight: 1.5 }}>{d}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: GREY, borderRadius: 6, padding: "0.65rem 1rem",
                    fontSize: "0.82rem", color: DARK }}>
                    <span style={{ fontWeight: 700 }}>Unlocks: </span>
                    <span style={{ color: MID }}>{unlock}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
