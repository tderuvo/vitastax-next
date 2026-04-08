import Link from 'next/link';

export const metadata = {
  title: 'Our Stax — Vitastax',
  description: 'Six personalized supplement stacks designed for men and women — from daily foundations to memory and libido support.',
};

const disclaimer = '* These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary.';

const menStax = [
  {
    id:        'men-foundation',
    name:      'Foundation',
    subtitle:  'Men\'s Daily Essentials',
    tag:       'Most Popular',
    color:     '#1a1a2e',
    accent:    '#4f8ef7',
    description: 'The baseline every man should have. Built to fill the nutritional gaps in a modern diet and support your body\'s core systems — energy, immunity, and recovery.',
    supplements: [
      { name: 'Vitamin D3',         dose: '2,000 IU',  role: 'Bone density, testosterone support, immune function' },
      { name: 'Magnesium Glycinate', dose: '200 mg',   role: 'Muscle recovery, sleep quality, stress regulation' },
      { name: 'Zinc',               dose: '15 mg',     role: 'Testosterone production, immunity, wound healing' },
      { name: 'Vitamin K2',         dose: '100 mcg',   role: 'Cardiovascular health, calcium metabolism' },
      { name: 'Omega-3 (Fish Oil)', dose: '1,000 mg',  role: 'Heart health, inflammation reduction, brain function' },
      { name: 'B-Complex',          dose: 'Full spectrum', role: 'Energy metabolism, nerve function, red blood cell production' },
    ],
    expect: [
      'More consistent daily energy without crashes',
      'Better quality sleep and faster muscle recovery',
      'Stronger immune response through the seasons',
      'A nutritional foundation that supports long-term health',
    ],
  },
  {
    id:        'men-memory',
    name:      'Mind',
    subtitle:  'Men\'s Memory & Focus',
    tag:       'Cognitive Edge',
    color:     '#0d1f2d',
    accent:    '#38bdf8',
    description: 'Designed for the man who wants to stay sharp. This stack targets the key pathways involved in focus, memory retention, and mental clarity — without stimulants.',
    supplements: [
      { name: 'Lion\'s Mane Mushroom', dose: '500 mg',  role: 'Nerve growth factor support, memory and cognitive function' },
      { name: 'Bacopa Monnieri',       dose: '300 mg',  role: 'Memory formation, learning speed, reduced brain fog' },
      { name: 'Alpha-GPC',             dose: '300 mg',  role: 'Acetylcholine precursor, focus and mental performance' },
      { name: 'Phosphatidylserine',    dose: '100 mg',  role: 'Cell membrane integrity, cognitive resilience under stress' },
      { name: 'Rhodiola Rosea',        dose: '200 mg',  role: 'Adaptogen — mental fatigue resistance, mood balance' },
      { name: 'Vitamin B12 (Methyl)',  dose: '1,000 mcg', role: 'Neurological health, energy metabolism, focus clarity' },
    ],
    expect: [
      'Improved ability to focus for longer periods',
      'Sharper recall and faster word retrieval',
      'Reduced mental fatigue during demanding workdays',
      'Calmer, more grounded mental state under pressure',
    ],
  },
  {
    id:        'men-libido',
    name:      'Drive',
    subtitle:  'Men\'s Vitality & Libido',
    tag:       'Vitality',
    color:     '#1a0d00',
    accent:    '#f97316',
    description: 'Formulated to support the hormonal and vascular foundations of male vitality. No synthetic hormones — just natural compounds with a track record of supporting men\'s health.',
    supplements: [
      { name: 'Ashwagandha (KSM-66)', dose: '600 mg',  role: 'Cortisol regulation, testosterone support, stress resilience' },
      { name: 'Tongkat Ali',          dose: '200 mg',  role: 'Testosterone optimization, libido, physical performance' },
      { name: 'Maca Root',            dose: '1,500 mg', role: 'Libido, energy, mood — adaptogenic plant-based support' },
      { name: 'Zinc',                 dose: '25 mg',   role: 'Essential mineral for testosterone synthesis' },
      { name: 'Vitamin D3',           dose: '3,000 IU', role: 'Testosterone correlation, mood, hormonal signalling' },
      { name: 'Fenugreek Extract',    dose: '500 mg',  role: 'Free testosterone support, metabolic health' },
    ],
    expect: [
      'Improved energy and motivation throughout the day',
      'Support for healthy testosterone levels as you age',
      'Enhanced physical performance and endurance',
      'A more balanced mood and reduced stress response',
    ],
  },
];

const womenStax = [
  {
    id:        'women-foundation',
    name:      'Foundation',
    subtitle:  'Women\'s Daily Essentials',
    tag:       'Most Popular',
    color:     '#1a0d17',
    accent:    '#e879f9',
    description: 'The daily foundation every woman deserves. Built around the unique nutritional needs of women — from bone health and hormonal balance to energy and skin vitality.',
    supplements: [
      { name: 'Folate (Methylfolate)', dose: '400 mcg', role: 'Cell production, hormonal health, cardiovascular support' },
      { name: 'Iron (Bisglycinate)',   dose: '18 mg',   role: 'Energy, red blood cell health, reduced fatigue' },
      { name: 'Calcium Citrate',       dose: '300 mg',  role: 'Bone density, muscle function, nerve signalling' },
      { name: 'Vitamin D3 + K2',       dose: '2,000 IU / 90 mcg', role: 'Calcium absorption, bone protection, immune health' },
      { name: 'Omega-3 (Algae-based)', dose: '500 mg',  role: 'Heart health, inflammation, skin and mood support' },
      { name: 'B-Complex',             dose: 'Full spectrum', role: 'Energy metabolism, hormone regulation, stress support' },
    ],
    expect: [
      'Steadier energy levels throughout the day',
      'Support for healthy skin, hair, and nails',
      'A strong nutritional foundation for long-term wellbeing',
      'Better resilience during hormonal fluctuations',
    ],
  },
  {
    id:        'women-memory',
    name:      'Mind',
    subtitle:  'Women\'s Memory & Focus',
    tag:       'Cognitive Edge',
    color:     '#0a1628',
    accent:    '#818cf8',
    description: 'Tailored to support women\'s cognitive health across all life stages. This stack focuses on mental clarity, memory, and mood — addressing the hormonal and neurological factors unique to women.',
    supplements: [
      { name: 'Lion\'s Mane Mushroom', dose: '500 mg',  role: 'Neurogenesis support, memory, cognitive protection' },
      { name: 'Bacopa Monnieri',       dose: '300 mg',  role: 'Memory consolidation, reduced anxiety, learning' },
      { name: 'Saffron Extract',       dose: '30 mg',   role: 'Mood balance, cognitive function, PMS-related brain fog' },
      { name: 'Phosphatidylserine',    dose: '100 mg',  role: 'Brain cell health, stress-induced memory support' },
      { name: 'Choline Bitartrate',    dose: '250 mg',  role: 'Neurotransmitter production, focus, mental energy' },
      { name: 'Vitamin B12 (Methyl)',  dose: '1,000 mcg', role: 'Neurological health, energy clarity, mood stability' },
    ],
    expect: [
      'Clearer thinking and reduced brain fog',
      'Better memory recall and sustained focus',
      'A more balanced mood and emotional resilience',
      'Mental sharpness that supports you through hormonal shifts',
    ],
  },
  {
    id:        'women-libido',
    name:      'Glow',
    subtitle:  'Women\'s Vitality & Libido',
    tag:       'Vitality',
    color:     '#1a0a12',
    accent:    '#fb7185',
    description: 'A thoughtfully formulated stack to support female vitality from the inside out — addressing energy, hormonal harmony, and libido through natural, research-backed compounds.',
    supplements: [
      { name: 'Maca Root (Black)',     dose: '1,000 mg', role: 'Female libido, hormonal balance, energy and mood' },
      { name: 'Ashwagandha (KSM-66)', dose: '300 mg',  role: 'Stress hormone reduction, energy, sexual wellbeing' },
      { name: 'Shatavari',            dose: '500 mg',  role: 'Ayurvedic adaptogen for female reproductive health' },
      { name: 'Magnesium Glycinate',  dose: '200 mg',  role: 'PMS support, sleep, mood regulation' },
      { name: 'Evening Primrose Oil', dose: '500 mg',  role: 'Hormonal balance, skin, menstrual comfort' },
      { name: 'Zinc + Copper',        dose: '8 mg / 1 mg', role: 'Hormonal enzyme function, immune health, skin clarity' },
    ],
    expect: [
      'More consistent energy and a lifted sense of vitality',
      'Support for hormonal balance through your cycle',
      'Reduced stress impact on mood and intimacy',
      'A deeper sense of physical and emotional wellbeing',
    ],
  },
];

function SupplementRow({ name, dose, role }) {
  return (
    <div className="stax-supp-row">
      <div className="stax-supp-left">
        <span className="stax-supp-name">{name}</span>
        <span className="stax-supp-dose">{dose}</span>
      </div>
      <span className="stax-supp-role">{role}</span>
    </div>
  );
}

function StaxCard({ stax, gender }) {
  return (
    <div className="stax-card">
      <div className="stax-card-header" style={{ background: stax.color }}>
        <div className="stax-card-tag" style={{ color: stax.accent, borderColor: `${stax.accent}44`, background: `${stax.accent}14` }}>
          {stax.tag}
        </div>
        <div className="stax-card-gender">{gender}</div>
        <h3 className="stax-card-name" style={{ color: stax.accent }}>{stax.name}</h3>
        <p className="stax-card-subtitle">{stax.subtitle}</p>
        <p className="stax-card-desc">{stax.description}</p>
      </div>

      <div className="stax-card-body">
        <p className="stax-section-label">What&apos;s Inside</p>
        <div className="stax-supps">
          {stax.supplements.map(s => (
            <SupplementRow key={s.name} {...s} />
          ))}
        </div>

        <p className="stax-section-label" style={{ marginTop: '2rem' }}>What You May Notice*</p>
        <ul className="stax-expect-list">
          {stax.expect.map(e => (
            <li key={e} className="stax-expect-item">
              <span className="stax-expect-dot" />
              {e}
            </li>
          ))}
        </ul>

        <Link href="/#notify" className="stax-card-cta">
          Get Early Access
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function Stax() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none">
            <path d="M16 4L4 12L10 20L16 28L22 20L28 12L16 4Z" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M4 12L16 20L28 12" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="nav-logo-name">Vitastax<span className="nav-logo-tm">™</span></span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/how-it-works" className="nav-link">How It Works</Link>
          <Link href="/stax" className="nav-link" style={{ color: 'var(--ink)', fontWeight: 600 }}>Our Stax</Link>
          <Link href="/#notify" className="nav-cta">Get Early Access</Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hiw-hero">
        <p className="eyebrow">Our Stax</p>
        <h1>Six stacks.<br /><strong>One for you.</strong></h1>
        <p className="hiw-hero-sub">
          Pre-formulated supplement programs for men and women — each built around a specific health goal. Find your stax, or let us build a custom one from your profile.
        </p>
      </section>

      {/* ── Men's section ── */}
      <section className="stax-section">
        <div className="stax-section-header">
          <div className="stax-gender-badge stax-gender-men">For Men</div>
          <h2 className="stax-section-title">Built for him.</h2>
          <p className="stax-section-sub">Three stacks addressing the most common health goals for men — a solid foundation, sharper thinking, and sustained vitality.</p>
        </div>
        <div className="stax-grid">
          {menStax.map(s => <StaxCard key={s.id} stax={s} gender="Men" />)}
        </div>
      </section>

      {/* ── Women's section ── */}
      <section className="stax-section stax-section-alt">
        <div className="stax-section-header">
          <div className="stax-gender-badge stax-gender-women">For Women</div>
          <h2 className="stax-section-title">Built for her.</h2>
          <p className="stax-section-sub">Three stacks designed around the unique hormonal, cognitive, and vitality needs of women at every stage of life.</p>
        </div>
        <div className="stax-grid">
          {womenStax.map(s => <StaxCard key={s.id} stax={s} gender="Women" />)}
        </div>
      </section>

      {/* ── Custom CTA ── */}
      <section className="hiw-cta-band" style={{ background: 'var(--ink)', borderTop: 'none' }}>
        <div className="hiw-cta-content">
          <p className="hiw-cta-eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>Not sure which one?</p>
          <h2 className="hiw-cta-heading" style={{ color: '#fff' }}>We&apos;ll build yours<br /><strong>from scratch.</strong></h2>
          <p className="hiw-cta-sub" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Answer a short health profile and we&apos;ll formulate a stack tailored to your exact goals, lifestyle, and biology. No guesswork. No waste.
          </p>
          <Link href="/#notify" className="cta-btn" style={{ textDecoration: 'none', background: '#fff', color: 'var(--ink)' }}>
            Get My Custom Stack
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <div className="stax-disclaimer">{disclaimer}</div>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <span>&copy; 2026 Vitastax™ — All rights reserved.</span>
        <div className="footer-links">
          <a href="mailto:hello@vitastax.com">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </>
  );
}
