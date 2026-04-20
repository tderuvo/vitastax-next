const NAVY   = "#1A1A2E";
const BLUE   = "#1D4ED8";
const WHITE  = "#FFFFFF";
const GREY   = "#F3F4F6";
const DARK   = "#1F2937";
const MID    = "#6B7280";
const GREEN  = "#16A34A";
const PURPLE = "#7C3AED";
const TEAL   = "#0D9488";
const RED    = "#DC2626";

const CSS = `
  .comp-market-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  .comp-seg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
  }
  .comp-sub-grid {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .comp-vs-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .comp-sw-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }
  @media (max-width: 768px) {
    .comp-market-stats { grid-template-columns: repeat(2, 1fr); }
    .comp-sw-grid { grid-template-columns: 1fr; }
  }
`;

const marketSegments = [
  { label: "Vitamins & Minerals",   share: "32%", trend: "Steady",    color: BLUE   },
  { label: "Sports Nutrition",       share: "22%", trend: "Growing",   color: GREEN  },
  { label: "Herbal Supplements",     share: "18%", trend: "Steady",    color: TEAL   },
  { label: "Protein & Weight Mgmt",  share: "14%", trend: "Growing",   color: PURPLE },
  { label: "Probiotics & Gut Health",share: "9%",  trend: "Fast",      color: "#CA8A04" },
  { label: "Nootropics & Cognitive", share: "5%",  trend: "Fastest",   color: RED    },
];

const subscriptionCompetitors = [
  {
    name: "AG1 (Athletic Greens)",
    price: "$79/mo",
    model: "One all-in-one greens powder subscription, auto-ships monthly",
    subs: "~1M+ subscribers (est.)",
    note: "Massive brand — but a single SKU that can't adapt to your body's changing needs. No cycling, no protocol, no stacking.",
    highlight: "#CA8A04",
  },
  {
    name: "Ritual",
    price: "$30–45/mo",
    model: "Transparent multivitamin subscription for women, men, teens, prenatal",
    subs: "~500k+ subscribers (est.)",
    note: "Beautiful brand, clean formula, strong retention — but the same capsules ship every 30 days indefinitely. Zero rotation logic.",
    highlight: PURPLE,
  },
  {
    name: "Persona Nutrition (Nestlé)",
    price: "$40–65/mo",
    model: "AI quiz personalizes a daily vitamin pack — same pack auto-ships monthly",
    subs: "Acquired by Nestlé 2019 (est. $100M+)",
    note: "Personalized at signup, static thereafter. The quiz creates the illusion of customization, but the protocol never evolves. No cycling mechanism.",
    highlight: BLUE,
  },
  {
    name: "Gainful",
    price: "$45–65/mo",
    model: "Personalized protein + hydration subscription with optional boosts",
    subs: "Series B funded, exact subscribers undisclosed",
    note: "Strong personalization story in sports nutrition, but limited to protein/fitness products. Not a broad-wellness cycling protocol.",
    highlight: GREEN,
  },
  {
    name: "Hims & Hers",
    price: "$25–60/mo",
    model: "Subscription wellness including hair, libido, mental health + supplements",
    subs: "~1.3M subscribers (public company)",
    note: "Subscription infrastructure is excellent, but supplements are secondary to their pharma-adjacent positioning. Generic stacks, no cycling.",
    highlight: TEAL,
  },
  {
    name: "Thorne",
    price: "$35–80/mo",
    model: "Clinical-grade supplements with optional auto-ship; test-based recommendations",
    subs: "Public company (THRN); subscription numbers undisclosed",
    note: "Highest scientific credibility in the space. But the model is retail with auto-ship — not a protocol-driven cycling subscription.",
    highlight: "#0EA5E9",
  },
];

const vitalikeCompetitors = [
  {
    name: "Ritual",
    tagline: "Clean label, minimal design, transparent sourcing",
    color: PURPLE,
    strengths: [
      "Exceptional brand trust — every ingredient is traceable",
      "Strong women's-health positioning and community",
      "High NPS and subscriber retention (~70%+ reported)",
      "Minimalist UX: one clean subscription, no decision fatigue",
    ],
    weaknesses: [
      "Fixed formula — day 1 pill = day 365 pill. Body adaptation is not addressed.",
      "Covers only 4–6 health vectors (multivitamin focus)",
      "No cycling logic — competitor can't introduce it without admitting their core model has a biological flaw",
      "Limited to women's multi variants — less expansive health coverage",
    ],
    vsVitastax: "Ritual owns 'trust and transparency.' VitaStax owns 'your body shouldn't take the same thing forever.' These are compatible beliefs — which is why a Ritual subscriber is a natural upgrade candidate for The Stax Protocol™.",
  },
  {
    name: "Care/of",
    tagline: "Personalized daily packs — the most direct predecessor model",
    color: RED,
    strengths: [
      "Beautiful UX — quiz-to-pack flow set the industry standard",
      "Acquired by Bayer for $225M in 2020, validating the DTC subscription model",
      "Strong personalization narrative — 'made for you' resonated deeply",
      "Demonstrated that consumers will pay a premium for curated vitamin packs",
    ],
    weaknesses: [
      "Shut down June 2024 — Bayer deprioritized after failing to scale profitably",
      "Personalization was surface-level: same daily pack every month, just customized at signup",
      "High CAC with limited LTV protection once the novelty wore off",
      "No protocol evolution — the product stagnated because it never adapted",
    ],
    vsVitastax: "Care/of proved the market exists. VitaStax solves the flaw that killed it: a protocol that evolves monthly gives subscribers a reason to stay that static packs fundamentally can't match.",
  },
  {
    name: "Onnit",
    tagline: "Performance-first stacking mentality, multi-product protocols",
    color: "#CA8A04",
    strengths: [
      "Pioneered the 'stacking' concept in mainstream wellness — protocol-thinking customers",
      "Strong community and influencer ecosystem (Joe Rogan association)",
      "Broad product range: nootropics, adaptogens, minerals, proteins",
      "Alpha BRAIN positioned cognitive stacking as a category",
    ],
    weaknesses: [
      "DIY stack model — customer builds their own protocol, friction is high",
      "No guided cycling logic — products are used independently, not sequenced",
      "Acquired by Unilever 2021; lost its founder-led authenticity",
      "Purchase model, not a subscription protocol — high churn, low predictability",
    ],
    vsVitastax: "Onnit customers already believe in stacking. VitaStax removes the guesswork: instead of buying 6 products separately and hoping they cycle correctly, The Stax Protocol™ does it for you — designed, sequenced, and shipped.",
  },
  {
    name: "Momentous",
    tagline: "Elite athlete performance protocols, NSF-certified science",
    color: TEAL,
    strengths: [
      "Highest-trust positioning in sports nutrition — used by NFL, NBA, and Tier 1 military",
      "NSF Certified for Sport on every product — premium medical-grade credibility",
      "Excellent protocol-building content and athlete partnerships",
      "Strong in sleep, recovery, and cognitive performance stacks",
    ],
    weaknesses: [
      "Premium price point ($60–100+/mo for stacked protocols) limits mainstream appeal",
      "Protocols are self-assembled — the company suggests combinations, but ships single products",
      "No dynamic monthly cycling — protocols are user-maintained, not auto-sequenced",
      "Heavily sports-focused; limited reach into general wellness market",
    ],
    vsVitastax: "Momentous owns 'elite credibility.' VitaStax borrows the protocol logic — sequencing, cycling, periodization — and delivers it as a frictionless subscription accessible to any health-conscious consumer, not just elite athletes.",
  },
  {
    name: "Four Sigmatic",
    tagline: "Functional mushroom supplements — cycling-adjacent positioning",
    color: "#92400E",
    strengths: [
      "Built a category around adaptogenic cycling (mushrooms + nootropics)",
      "Extremely loyal community around functional ingredients",
      "Demonstrated that consumers accept 'strange-but-effective' ingredients when story is right",
      "Rotational product drops created excitement and subscription stickiness",
    ],
    weaknesses: [
      "Narrow category (mushrooms) limits addressable market and health vectors covered",
      "No systematic cycling protocol — rotational product releases are marketing-driven, not biologically sequenced",
      "Faced quality and marketing scrutiny over ingredient efficacy claims",
      "Sold (2022, private equity) — lost brand independence and community feel",
    ],
    vsVitastax: "Four Sigmatic proved that a niche cycling narrative can build a loyal subscriber base. VitaStax scales that logic across the entire supplement spectrum — 12–15 health vectors — with biological sequencing at its core, not marketing seasonality.",
  },
];

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
        textTransform: "uppercase", color: MID, marginBottom: "1rem",
        paddingBottom: "0.5rem", borderBottom: "1px solid #E5E7EB" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function CompetitionPage() {
  return (
    <div>
      <style>{CSS}</style>

      {/* Hero */}
      <div style={{ background: NAVY, borderRadius: 10, padding: "2.5rem", marginBottom: "2rem" }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em",
          textTransform: "uppercase", color: BLUE, marginBottom: 8 }}>
          Competitive Landscape
        </div>
        <h1 style={{ color: WHITE, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800,
          margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>
          The Market, The Players, and The Gap.
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", margin: "0 0 1.5rem",
          fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 580 }}>
          The global supplement market is{" "}
          <strong style={{ color: WHITE }}>$200B+ and growing at 7–9% annually</strong>.
          Every major player has converged on the same subscription model: same stack, same
          day, every month. VitaStax is the only protocol designed to break that pattern.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { label: "Global market (2025)", value: "$200B+" },
            { label: "Annual CAGR",          value: "7–9%" },
            { label: "US market",            value: "~$55B" },
            { label: "Projected by 2034",    value: "$400B+" },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.08)",
              borderRadius: 8, padding: "0.75rem 1.25rem" }}>
              <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>
                {label}
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: WHITE,
                letterSpacing: "-0.03em" }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 — Market Overview */}
      <Section title="Section 01 — Supplement Market Overview">
        <div style={{ background: GREY, borderRadius: 10, padding: "1.75rem", marginBottom: "1rem" }}>
          <p style={{ fontSize: "0.92rem", color: DARK, lineHeight: 1.8, margin: "0 0 1rem" }}>
            The global dietary supplement market is one of the fastest-growing consumer categories
            of the last decade. Driven by aging populations, pandemic-era health awareness, and a
            structural shift toward preventive wellness, the category has expanded from roughly
            $120B in 2019 to an estimated{" "}
            <strong>$200B+ in 2025</strong> — with projections pointing toward $400B+ by the mid-2030s.
          </p>
          <p style={{ fontSize: "0.92rem", color: DARK, lineHeight: 1.8, margin: "0 0 1rem" }}>
            The US market alone accounts for approximately{" "}
            <strong>$55–60 billion</strong>, representing the world's most lucrative and
            competitive arena for supplement brands. Consumer demand has shifted decisively
            toward personalization, clean labeling, science-backed formulations, and
            subscription-based convenience — all vectors that premium DTC brands have
            been built to exploit.
          </p>
          <p style={{ fontSize: "0.92rem", color: DARK, lineHeight: 1.8, margin: 0 }}>
            Despite the category's growth, a fundamental tension remains unresolved:
            consumers are buying more supplements than ever, but{" "}
            <strong>body adaptation, protocol fatigue, and lack of tangible outcomes</strong>{" "}
            are the leading causes of churn. The industry has optimized for convenience —
            not efficacy — and that is the gap VitaStax is designed to fill.
          </p>
        </div>

        <div className="comp-seg-grid">
          {marketSegments.map(({ label, share, trend, color }) => (
            <div key={label} style={{ background: WHITE, border: "1px solid #E5E7EB",
              borderRadius: 8, padding: "1rem 1.25rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <div style={{ fontWeight: 700, color: DARK, fontSize: "0.88rem", lineHeight: 1.3, flex: 1 }}>{label}</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color, marginLeft: 8 }}>{share}</div>
              </div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                textTransform: "uppercase", color,
                background: color + "14", border: "1px solid " + color + "33",
                borderRadius: 20, padding: "0.15rem 0.55rem", display: "inline-block" }}>
                {trend} growth
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: 8,
          padding: "1.25rem 1.5rem", marginTop: "1rem" }}>
          <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: BLUE, marginBottom: 6 }}>
            The DTC Subscription Layer
          </div>
          <p style={{ margin: 0, fontSize: "0.88rem", color: DARK, lineHeight: 1.7 }}>
            Within the broader supplement market, DTC subscription brands represent the highest-margin,
            highest-valuation segment. Subscription businesses in this category trade at{" "}
            <strong>3–6x revenue vs. 1–2x for retail brands</strong> — because of predictable MRR,
            first-party data ownership, and high switching costs. This is the exact tier that
            Nestlé, Unilever, Bayer, and PE firms have targeted in every major acquisition since 2019.
          </p>
        </div>
      </Section>

      {/* Section 2 — Subscription Competitors */}
      <Section title="Section 02 — Subscription Competitors">
        <p style={{ fontSize: "0.9rem", color: MID, lineHeight: 1.7, marginBottom: "1.25rem" }}>
          These are the brands directly competing for the "send me supplements monthly" consumer.
          All operate subscription models. None operate a cycling protocol.
        </p>
        <div className="comp-sub-grid">
          {subscriptionCompetitors.map(({ name, price, model, subs, note, highlight }) => (
            <div key={name} style={{ background: WHITE, border: "1px solid #E5E7EB",
              borderRadius: 8, padding: "1.25rem 1.5rem",
              borderLeft: `3px solid ${highlight}` }}>
              <div style={{ display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: 6, flexWrap: "wrap", gap: 8 }}>
                <div style={{ fontWeight: 700, color: DARK, fontSize: "0.95rem" }}>{name}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: highlight,
                  background: highlight + "14", border: "1px solid " + highlight + "33",
                  borderRadius: 20, padding: "0.2rem 0.65rem" }}>
                  {price}
                </div>
              </div>
              <div style={{ fontSize: "0.82rem", color: MID, marginBottom: 6, lineHeight: 1.6 }}>{model}</div>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: highlight,
                marginBottom: 8 }}>{subs}</div>
              <div style={{ fontSize: "0.82rem", color: DARK, lineHeight: 1.6,
                padding: "0.65rem 0.9rem", background: GREY, borderRadius: 6 }}>
                <strong>vs. VitaStax:</strong> {note}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Section 3 — Feels Like VitaStax */}
      <Section title="Section 03 — Brands That Feel Like VitaStax">
        <div style={{ background: "#FAFAFA", border: "1px solid #E5E7EB", borderRadius: 8,
          padding: "1.25rem 1.5rem", marginBottom: "1.5rem" }}>
          <p style={{ margin: 0, fontSize: "0.88rem", color: DARK, lineHeight: 1.7 }}>
            These brands share VitaStax's premium aesthetic, protocol-thinking, or cycling
            intuition — making them the most relevant competitive comparisons for investor
            and partner conversations. The key distinction: every one of them either (a) ships
            a static daily protocol, or (b) requires the customer to self-assemble the cycling
            logic. <strong>VitaStax is the only brand where cycling is the product.</strong>
          </p>
        </div>

        <div className="comp-vs-grid">
          {vitalikeCompetitors.map(({ name, tagline, color, strengths, weaknesses, vsVitastax }) => (
            <div key={name} style={{ background: WHITE, border: "1px solid #E5E7EB",
              borderRadius: 10, overflow: "hidden" }}>
              {/* Header */}
              <div style={{ background: NAVY, padding: "1.25rem 1.5rem",
                borderBottom: `3px solid ${color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ fontWeight: 800, color: WHITE, fontSize: "1rem" }}>{name}</div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: color,
                    background: color + "20", border: "1px solid " + color + "40",
                    borderRadius: 20, padding: "0.2rem 0.65rem" }}>
                    Protocol-adjacent
                  </div>
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)",
                  marginTop: 4 }}>{tagline}</div>
              </div>

              {/* Strengths / Weaknesses */}
              <div className="comp-sw-grid" style={{ padding: "1.25rem 1.5rem" }}>
                <div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: GREEN, marginBottom: 10 }}>
                    Strengths
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none",
                    display: "flex", flexDirection: "column", gap: 6 }}>
                    {strengths.map((s, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: GREEN, fontWeight: 700, flexShrink: 0,
                          marginTop: 1, fontSize: "0.75rem" }}>+</span>
                        <span style={{ fontSize: "0.82rem", color: DARK, lineHeight: 1.5 }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: RED, marginBottom: 10 }}>
                    Weaknesses vs. VitaStax Protocol
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none",
                    display: "flex", flexDirection: "column", gap: 6 }}>
                    {weaknesses.map((w, i) => (
                      <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                        <span style={{ color: RED, fontWeight: 700, flexShrink: 0,
                          marginTop: 1, fontSize: "0.75rem" }}>–</span>
                        <span style={{ fontSize: "0.82rem", color: DARK, lineHeight: 1.5 }}>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* VitaStax angle */}
              <div style={{ padding: "0 1.5rem 1.25rem" }}>
                <div style={{ background: color + "0F", border: "1px solid " + color + "25",
                  borderRadius: 8, padding: "0.9rem 1.1rem" }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color, marginBottom: 5 }}>
                    The VitaStax Angle
                  </div>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: DARK, lineHeight: 1.7 }}>
                    {vsVitastax}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bottom summary */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #2D1B69 100%)`,
        borderRadius: 10, padding: "1.75rem 2rem" }}>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em",
          textTransform: "uppercase", color: PURPLE, marginBottom: 8 }}>
          The Competitive Conclusion
        </div>
        <p style={{ color: WHITE, fontSize: "1rem", fontWeight: 700, lineHeight: 1.6,
          margin: "0 0 0.75rem" }}>
          Every competitor has converged on the same answer. VitaStax is asking a different question.
        </p>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
          Ritual, AG1, Persona, and Care/of all solved convenience. They never solved adaptation.
          The Stax Protocol™ is the first subscription model built on the biological principle
          that your body should not receive the same signal indefinitely — and no competitor
          can replicate it without invalidating their existing product. That asymmetry is the moat.
        </p>
      </div>
    </div>
  );
}
