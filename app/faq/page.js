'use client';

import { useState } from 'react';
import Link from 'next/link';

const LogoMark = () => (
  <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L4 12L10 20L16 28L22 20L28 12L16 4Z" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M4 12L16 20L28 12" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform .25s' }}
  >
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const faqs = [
  {
    category: 'About Vitastax',
    items: [
      {
        q: 'What is Vitastax?',
        a: 'Vitastax is a personalized daily supplement service. Based on your health profile, we formulate a custom supplement program and pack it into 30 individual daily stacks — one per day, shipped to your door every month. No bottles. No guesswork. Just open, take, and go.',
      },
      {
        q: 'Who is Vitastax for?',
        a: 'Anyone who cares about their health and wants a smarter, simpler way to take supplements. Whether you\'re focused on energy, sleep, immunity, focus, or longevity — Vitastax builds a stack around your specific goals, not a one-size-fits-all formula.',
      },
      {
        q: 'When will Vitastax launch?',
        a: 'We\'re launching July 1, 2026. Sign up for early access to be first in line and lock in our founding member discount.',
      },
    ],
  },
  {
    category: 'Personalization',
    items: [
      {
        q: 'How does the personalization work?',
        a: 'You complete a short health profile covering your age, gender, goals, lifestyle, and any specific areas you want to support. Our team uses that information to select science-backed ingredients at clinically relevant doses — then builds your monthly formula around your answers.',
      },
      {
        q: 'Do I need a blood test or doctor\'s visit?',
        a: 'No. Your health profile is a short questionnaire — no labs, no clinics, no appointments. Just honest answers about where you are and what you want to feel.',
      },
      {
        q: 'Can I update my formula over time?',
        a: 'Yes. Your stack evolves as you do. You\'ll be able to update your health profile at any time, and your next shipment will reflect any changes.',
      },
    ],
  },
  {
    category: 'Product & Ingredients',
    items: [
      {
        q: 'What\'s inside my daily pack?',
        a: 'Each daily pack contains the exact vitamins, minerals, and supplements selected for your formula — pre-measured and sealed for the day. The specific ingredients depend on your health profile, but everything is chosen for a reason, not to pad a label.',
      },
      {
        q: 'Are your supplements third-party tested?',
        a: 'Yes. All Vitastax supplements are manufactured in cGMP-certified facilities and third-party tested for purity, potency, and safety. You can trust what\'s in the pack.',
      },
      {
        q: 'Are there any artificial fillers or additives?',
        a: 'We keep it clean. Our formulas are free from unnecessary fillers, artificial colours, and proprietary blends. Every ingredient is listed clearly, with the exact dose included.',
      },
      {
        q: 'Are Vitastax supplements safe to take with medication?',
        a: 'If you\'re on prescription medication or have an existing medical condition, we recommend checking with your doctor before starting any new supplement. Vitastax is not a substitute for medical advice.',
      },
    ],
  },
  {
    category: 'Subscription & Delivery',
    items: [
      {
        q: 'How does the subscription work?',
        a: 'Vitastax is a monthly subscription. Your box of 30 daily packs ships automatically every month — you\'ll never need to reorder manually. You can pause, adjust, or cancel at any time from your account.',
      },
      {
        q: 'How much does Vitastax cost?',
        a: 'Pricing will be announced at launch. Founding members who join the waitlist will receive early-bird pricing locked in for life. Sign up now to secure your spot.',
      },
      {
        q: 'When will my order ship?',
        a: 'Orders ship once a month, timed to arrive before your current supply runs out. You\'ll receive tracking information by email when your box is on the way.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes — no lock-ins, no cancellation fees. You can cancel, pause, or skip a month from your account dashboard at any time.',
      },
    ],
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(o => !o)}>
      <div className="faq-question">
        <span>{q}</span>
        <ChevronIcon open={open} />
      </div>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* ── Nav ── */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <LogoMark />
          <span className="nav-logo-name">
            Vitastax<span className="nav-logo-tm">™</span>
          </span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/how-it-works" className="nav-link">How It Works</Link>
          <Link href="/stax" className="nav-link">Our Stax</Link>
          <Link href="/faq" className="nav-link" style={{ color: 'var(--ink)', fontWeight: 600 }}>FAQ</Link>
          <Link href="/#notify" className="nav-cta">Get Early Access</Link>
        </div>
      </nav>

      {/* ── Page hero ── */}
      <section className="faq-hero">
        <p className="eyebrow">FAQ</p>
        <h1>
          Questions,<br />
          <strong>answered.</strong>
        </h1>
        <p className="faq-hero-sub">
          Everything you need to know about Vitastax — how it works, what&apos;s in your stack, and what to expect.
        </p>
      </section>

      {/* ── FAQ sections ── */}
      <section className="faq-body">
        {faqs.map(section => (
          <div key={section.category} className="faq-section">
            <p className="section-label">{section.category}</p>
            <div className="faq-list">
              {section.items.map(item => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA band ── */}
      <section className="hiw-cta-band">
        <div className="hiw-cta-content">
          <p className="hiw-cta-eyebrow">Still have questions?</p>
          <h2 className="hiw-cta-heading">We&apos;re here to help.</h2>
          <p className="hiw-cta-sub">
            Can&apos;t find what you&apos;re looking for? Drop us a line and we&apos;ll get back to you.
          </p>
          <a href="mailto:hello@vitastax.com" className="cta-btn" style={{ textDecoration: 'none' }}>
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
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
