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
          {milestones.map(({ phase, goal, metric, action }) => (
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

      {/* Divider */}
      <div style={{ borderTop: "2px solid #E5E7EB", margin: "2.5rem 0" }} />

      {/* Industry exits section */}
      <LandscapeSection />

    </div>
  );
}

/* ─── Supplement M&A Landscape ─────────────────────────────────────────── */

const acquistions = [
  {
    brand: "The Bountiful Co.",
    sub: "Nature's Bounty, Solgar, Puritan's Pride",
    acquirer: "Nestlé Health Science",
    year: 2021,
    price: "$5.75B",
    confirmed: true,
    tag: "Largest supplement deal on record",
    tagColor: "#CA8A04",
  },
  {
    brand: "Nutrafol",
    sub: "Hair wellness supplements (67% stake)",
    acquirer: "Unilever",
    year: 2022,
    price: "~$1.2B implied",
    confirmed: true,
    tag: "DTC subscription, 100% YoY growth",
    tagColor: "#7C3AED",
  },
  {
    brand: "Atrium Innovations",
    sub: "Garden of Life, Pure Encapsulations, Klean Athlete",
    acquirer: "Nestlé Health Science",
    year: 2017,
    price: "$2.3B",
    confirmed: true,
    tag: "Premium/organic platform",
    tagColor: GREEN,
  },
  {
    brand: "Blackmores",
    sub: "Asia-Pacific supplement leader",
    acquirer: "Kirin Holdings",
    year: 2023,
    price: "~$1.2B USD",
    confirmed: true,
    tag: "International expansion play",
    tagColor: BLUE,
  },
  {
    brand: "Care/of",
    sub: "Personalized vitamin subscriptions",
    acquirer: "Bayer",
    year: 2020,
    price: "$225M",
    confirmed: true,
    tag: "Most comparable to VitaStax",
    tagColor: "#DC2626",
  },
  {
    brand: "Hiya Health",
    sub: "Children's vitamins, DTC subscription",
    acquirer: "USANA Health Sciences",
    year: 2024,
    price: "$261.5M",
    confirmed: true,
    tag: "DTC subscription model",
    tagColor: GREEN,
  },
  {
    brand: "OLLY Nutrition",
    sub: "Gummy vitamins, accessible wellness",
    acquirer: "Unilever",
    year: 2019,
    price: "Undisclosed",
    confirmed: false,
    tag: "Unilever's entry into supplements",
    tagColor: MID,
  },
  {
    brand: "Vital Proteins",
    sub: "America's #1 collagen brand",
    acquirer: "Nestlé Health Science",
    year: 2020,
    price: "Undisclosed",
    confirmed: false,
    tag: "Category dominance",
    tagColor: MID,
  },
  {
    brand: "Persona Nutrition",
    sub: "AI-powered personalized vitamin subs",
    acquirer: "Nestlé Health Science",
    year: 2019,
    price: "Undisclosed",
    confirmed: false,
    tag: "Personalized nutrition beachhead",
    tagColor: MID,
  },
  {
    brand: "Onnit",
    sub: "Performance supplements + fitness",
    acquirer: "Unilever",
    year: 2021,
    price: "Undisclosed",
    confirmed: false,
    tag: "Cognitive/sports niche",
    tagColor: MID,
  },
];

const acquirers = [
  { name: "Nestlé Health Science", deals: "Garden of Life, Vital Proteins, Persona, Bountiful", strategy: "Building the world's largest science-based nutrition platform. Aggressively acquiring premium DTC brands with loyal subscriber bases." },
  { name: "Unilever", deals: "OLLY, Onnit, Liquid I.V., SmartyPants, Nutrafol", strategy: "Grew a full Health & Wellbeing unit through acquisitions. Targets brands with strong brand stories, DTC infrastructure, and above-market growth segments." },
  { name: "Bayer Consumer Health", deals: "Care/of", strategy: "Moving from pharmaceutical into personalized nutrition. Seeks DTC data infrastructure and subscriber models that legacy pharma can't build internally." },
  { name: "PE / Strategic Roll-ups", deals: "KKR (Bountiful before Nestlé), Kirin (Blackmores)", strategy: "Private equity acquires, scales, and re-sells supplement platforms. Roll-up strategies target fragmented DTC brands with complementary audiences." },
];

const criteria = [
  { title: "Premium or science-backed positioning", desc: "Acquirers consistently avoided commodity brands. Garden of Life (certified organic), Pure Encapsulations (clinical-grade), and Vital Proteins (collagen leader) all had clear moats. VitaStax's personalization angle provides this." },
  { title: "DTC subscription + first-party data", desc: "Persona, Care/of, and Nutrafol were all valued primarily for their digital subscriber engine and proprietary customer data — something legacy CPG companies can't build organically." },
  { title: "Category growth vector", desc: "Every acquisition targeted a high-growth segment: collagen, personalized nutrition, hair wellness, hydration, cognitive performance. Personalized supplement stax sits squarely in the personalized nutrition wave." },
  { title: "Distribution upside through acquirer", desc: "Unilever, Nestlé, and Bayer explicitly cited the ability to take a brand into new geographies and retail using their existing infrastructure — turning a $225M brand into a $1B+ brand." },
  { title: "Recurring revenue + low churn", desc: "Subscription models trade at a significant premium to one-time purchase businesses. A predictable MRR with healthy retention metrics is the single biggest valuation driver in this category." },
];

function LandscapeSection() {
  return (
    <div>
      {/* Header */}
      <div style={{
        background: NAVY,
        borderRadius: 10,
        padding: "2.5rem",
        marginBottom: "2rem",
      }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>
          Industry Analysis
        </div>
        <h2 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 800, margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>
          The Supplement M&A Landscape.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.55)", margin: "0 0 1.5rem",
          fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 640 }}>
          The global dietary supplement market is estimated at{" "}
          <strong style={{ color: WHITE }}>$190–210 billion in 2025</strong>, growing at
          roughly 7–9% annually — projected to exceed $400B by the mid-2030s.
          Nestlé, Unilever, Bayer, and private equity have collectively spent{" "}
          <strong style={{ color: WHITE }}>billions acquiring supplement brands</strong>{" "}
          in the last decade. Here's what they bought, what they paid, and what it means for VitaStax.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          {[
            { label: "Market size (2025 est.)", value: "$200B+" },
            { label: "Annual growth rate", value: "7–9%" },
            { label: "Projected by 2034", value: "$400B+" },
          ].map(({ label, value }) => (
            <div key={label} style={{
              background: "rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: "0.75rem 1.25rem",
            }}>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
                {label}
              </div>
              <div style={{ fontSize: "1.4rem", fontWeight: 800, color: WHITE,
                letterSpacing: "-0.03em" }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acquisitions table */}
      <Section title="Notable Acquisitions — Confirmed Deals">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {acquistions.map(({ brand, sub, acquirer, year, price, confirmed, tag, tagColor }) => (
            <div key={brand} style={{
              background: GREY,
              borderRadius: 8,
              padding: "1rem 1.25rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "1rem",
              alignItems: "start",
            }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                  <span style={{ fontWeight: 700, color: DARK, fontSize: "0.95rem" }}>{brand}</span>
                  <span style={{
                    fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", color: tagColor,
                    background: tagColor + "14",
                    border: "1px solid " + tagColor + "33",
                    borderRadius: 20,
                    padding: "0.2rem 0.6rem",
                  }}>
                    {tag}
                  </span>
                </div>
                <div style={{ fontSize: "0.8rem", color: MID, marginBottom: 6 }}>{sub}</div>
                <div style={{ fontSize: "0.82rem", color: MID }}>
                  <span style={{ color: DARK, fontWeight: 600 }}>{acquirer}</span>
                  {"  ·  "}
                  {year}
                  {"  ·  "}
                  {!confirmed && <span style={{ color: "#9CA3AF" }}>Price </span>}
                  <span style={{ fontWeight: 700, color: confirmed ? GREEN : "#9CA3AF" }}>{price}</span>
                  {!confirmed && <span style={{ fontSize: "0.72rem", color: "#9CA3AF" }}> (not publicly disclosed)</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: "0.72rem", color: "#9CA3AF", marginTop: "0.75rem", lineHeight: 1.6 }}>
          Prices marked as confirmed are sourced from official press releases or SEC filings.
          "Undisclosed" means neither party publicly released the figure — not an estimate.
        </p>
      </Section>

      {/* Care/of callout */}
      <div style={{
        background: "#FFF7ED",
        border: "1px solid #FED7AA",
        borderRadius: 8,
        padding: "1.25rem 1.5rem",
        marginBottom: "2rem",
      }}>
        <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#C2410C", marginBottom: 6 }}>
          The Care/of Lesson — Most Comparable to VitaStax
        </div>
        <p style={{ margin: 0, fontSize: "0.9rem", color: DARK, lineHeight: 1.7 }}>
          Care/of was a personalized DTC vitamin subscription — the closest public comp to VitaStax.
          Founded in 2016, it was acquired by Bayer in 2020 for <strong>$225 million</strong>.
          The acquisition validated the model. However, Care/of shut down in June 2024 after Bayer
          cut costs across its consumer portfolio. The lesson isn't that the model failed — Bayer
          paid $225M proving it works. The lesson is that{" "}
          <strong>post-acquisition integration risk is real</strong>, and building toward a clean,
          profitable exit (rather than a VC-funded growth-at-all-costs model) is the smarter path
          for a bootstrapped brand like VitaStax.
        </p>
      </div>

      {/* Strategic acquirers */}
      <Section title="Who Would Buy a Brand Like VitaStax">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {acquirers.map(({ name, deals, strategy }) => (
            <div key={name} style={{
              background: GREY,
              borderRadius: 8,
              padding: "1.25rem 1.5rem",
            }}>
              <div style={{ fontWeight: 700, color: DARK, fontSize: "0.95rem",
                marginBottom: 4 }}>
                {name}
              </div>
              <div style={{ fontSize: "0.75rem", color: BLUE, fontWeight: 600,
                marginBottom: 8 }}>
                {deals}
              </div>
              <div style={{ fontSize: "0.88rem", color: MID, lineHeight: 1.6 }}>
                {strategy}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What they look for */}
      <Section title="What Acquirers Actually Look For">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0.75rem" }}>
          {criteria.map(({ title, desc }) => (
            <div key={title} style={{
              background: GREY,
              borderRadius: 8,
              padding: "1.25rem",
            }}>
              <div style={{ fontWeight: 700, color: DARK, fontSize: "0.88rem",
                marginBottom: 6 }}>
                {title}
              </div>
              <div style={{ fontSize: "0.82rem", color: MID, lineHeight: 1.6 }}>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom line */}
      <div style={{
        background: NAVY,
        borderRadius: 8,
        padding: "1.75rem 2rem",
      }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 8 }}>
          The Bottom Line for VitaStax
        </div>
        <p style={{ color: WHITE, fontSize: "1rem", lineHeight: 1.8, margin: "0 0 1rem",
          fontWeight: 600 }}>
          The supplement acquisition market is active, well-funded, and hungry for
          DTC subscription brands with personalization at their core.
        </p>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem",
          lineHeight: 1.8, margin: 0 }}>
          VitaStax doesn't need 1,000 subscribers to be interesting to a buyer —
          it needs a clean P&L, a proven subscriber model, and a brand story that
          a Nestlé or Unilever can take global. The $225M Care/of deal happened with
          a brand that was only a few years old. The $261M Hiya deal was a children's
          vitamin subscription. The category rewards focus, retention, and positioning —
          all things a bootstrapped operator can control.
        </p>
      </div>
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
