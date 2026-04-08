import Link from 'next/link';

export const metadata = {
  title: 'How It Works — Vitastax',
  description: 'See how Vitastax delivers your personalized daily supplement stack — built for you, packed daily, delivered monthly.',
};

const steps = [
  {
    number: '01',
    title:  'Tell Us About You',
    body:   'Answer a short health profile — your age, goals, lifestyle, and what you want to feel. No blood tests. No clinics. Just honest answers that build your formula.',
  },
  {
    number: '02',
    title:  'We Build Your Stack',
    body:   'Our team formulates your personalized daily supplement program using science-backed ingredients at clinically relevant doses. Nothing generic. Nothing wasted.',
  },
  {
    number: '03',
    title:  'Packed Into 30 Daily Doses',
    body:   'Your formula is packed into 30 individual daily packs — one per day, for the whole month. Each pack is compact, sealed, and ready to slip into your pocket, gym bag, or carry-on.',
  },
  {
    number: '04',
    title:  'Delivered to Your Door',
    body:   'Your monthly box ships automatically. No refilling. No pharmacy runs. No thinking about it. Just open, take, repeat.',
  },
];

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Everything in One Pack',
    body:  'Stop juggling 6 different bottles. Stop guessing doses. Every vitamin, mineral, and supplement your body needs — curated, measured, and sealed in a single daily pack. Open one. Take it. Done.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Never Miss a Dose Again',
    body:  'Each pack is pre-counted, pre-portioned, and labelled for the day. No more "did I take it?" No more skipped weeks. Your streak stays intact — whether you\'re home, travelling, or at the gym.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: 'Feel the Difference',
    body:  'Consistency is everything in health. Supplements only work when you actually take them — every day, at the right dose. Vitastax makes that effortless, so the results compound over time.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Science-Backed, Not Hype',
    body:  'Every ingredient in your stack is chosen for a reason. We use peer-reviewed research and clinical dosing — not filler amounts that look good on a label but do nothing in your body.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Built Around Your Life',
    body:  'Whether you\'re optimizing for energy, sleep, immunity, focus, or longevity — your stack is tuned to your goals, not a generic template. And it evolves as you do.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <path d="M16 8h4l3 3v5h-7V8z"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Delivered on Autopilot',
    body:  'Subscribe once and forget about it. Your next month\'s supply ships automatically, arrives on time, and is ready before you run out. No reorders. No gaps. No excuses.',
  },
];

const stats = [
  { value: '30',    label: 'Daily packs per box' },
  { value: '100%',  label: 'Personalized formula' },
  { value: '0',     label: 'Bottles to manage' },
  { value: '1',     label: 'Pack per day' },
];

export default function HowItWorks() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 4L4 12L10 20L16 28L22 20L28 12L16 4Z" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M4 12L16 20L28 12" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <span className="nav-logo-name">
            Vitastax<span className="nav-logo-tm">™</span>
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/how-it-works" className="nav-link" style={{ color: 'var(--ink)', fontWeight: 600 }}>How It Works</Link>
          <Link href="/stax" className="nav-link">Our Stax</Link>
          <Link href="/faq" className="nav-link">FAQ</Link>
          <Link href="/#notify" className="nav-cta">Get Early Access</Link>
        </div>
      </nav>

      {/* ── Page hero ── */}
      <section className="hiw-hero">
        <p className="eyebrow">How It Works</p>
        <h1>
          Health made<br />
          <strong>effortless.</strong>
        </h1>
        <p className="hiw-hero-sub">
          One box. 30 days. Everything your body needs — without the complexity.
        </p>
      </section>

      {/* ── Stats bar ── */}
      <section className="hiw-stats">
        {stats.map(s => (
          <div key={s.label} className="hiw-stat">
            <span className="hiw-stat-value">{s.value}</span>
            <span className="hiw-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Steps ── */}
      <section className="hiw-steps-section">
        <p className="section-label">The Process</p>
        <div className="hiw-steps">
          {steps.map((step, i) => (
            <div key={step.number} className="hiw-step">
              <div className="hiw-step-number">{step.number}</div>
              <div className="hiw-step-content">
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-body">{step.body}</p>
              </div>
              {i < steps.length - 1 && <div className="hiw-step-connector" />}
            </div>
          ))}
        </div>
      </section>

      {/* ── Value props ── */}
      <section className="hiw-values-section">
        <p className="section-label">Why Vitastax</p>
        <h2 className="hiw-values-heading">
          Every detail designed<br />around your health.
        </h2>
        <div className="hiw-values-grid">
          {values.map(v => (
            <div key={v.title} className="hiw-value-card">
              <div className="hiw-value-icon">{v.icon}</div>
              <h3 className="hiw-value-title">{v.title}</h3>
              <p className="hiw-value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="hiw-cta-band">
        <div className="hiw-cta-content">
          <p className="hiw-cta-eyebrow">Ready to start?</p>
          <h2 className="hiw-cta-heading">Your stack is waiting.</h2>
          <p className="hiw-cta-sub">
            Join the waitlist. Be first in line when we launch.<br />
            Early members get a founding discount — locked in for life.
          </p>
          <Link href="/#notify" className="cta-btn" style={{ textDecoration: 'none' }}>
            Get Early Access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
        </div>
      </section>

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
