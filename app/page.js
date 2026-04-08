'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LAUNCH_DATE = new Date('2026-07-01T00:00:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimeLeft() {
  const d = LAUNCH_DATE - new Date();
  if (d <= 0) return { days: '00', hours: '00', mins: '00', secs: '00' };
  return {
    days:  pad(Math.floor(d / 86400000)),
    hours: pad(Math.floor((d % 86400000) / 3600000)),
    mins:  pad(Math.floor((d % 3600000)  / 60000)),
    secs:  pad(Math.floor((d % 60000)    / 1000)),
  };
}

const LogoMark = () => (
  <svg className="nav-logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4L4 12L10 20L16 28L22 20L28 12L16 4Z" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M4 12L16 20L28 12" stroke="#111" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export default function Home() {
  const [time,      setTime]      = useState(getTimeLeft());
  const [email,     setEmail]     = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

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
          <Link href="/faq" className="nav-link">FAQ</Link>
          <Link href="#notify" className="nav-cta">
            Get Early Access
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero">

        {/* Left: copy */}
        <div className="hero-left">
          <p className="eyebrow">Personalized Daily Supplements</p>

          <h1>
            Your Daily<br />
            <strong>Formula.</strong>
          </h1>

          <p className="tagline">
            Personalized. Precise. Delivered Monthly.<br />
            30 daily stacks built for your body — carried in your pocket.
          </p>

          <ul className="feature-list">
            <li className="feature-item">
              <span className="feature-item-label">Built for you</span>
              <span className="feature-item-value">Tailored to your age, goals &amp; health needs</span>
            </li>
            <li className="feature-item">
              <span className="feature-item-label">Mailed monthly</span>
              <span className="feature-item-value">30 daily stacks. Zero guesswork.</span>
            </li>
            <li className="feature-item">
              <span className="feature-item-label">Always on point</span>
              <span className="feature-item-value">Real ingredients. Right doses. Every day.</span>
            </li>
          </ul>

          <button className="cta-btn">
            Get Your Stack
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>

          <div className="trust-row">
            <span className="trust-badge">Science-Backed</span>
            <span className="trust-sep">|</span>
            <span className="trust-badge">cGMP Certified</span>
            <span className="trust-sep">|</span>
            <span className="trust-badge">Made for You</span>
          </div>
        </div>

        {/* Right: hero image */}
        <div className="hero-right">
          <Image
            src="/hero.png"
            alt="Vitastax personalized daily supplement packs"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

      </section>

      {/* ── Countdown + Email ── */}
      <section className="countdown-strip" id="notify">
        <p className="countdown-label">Launching in</p>

        <div className="countdown">
          {[
            { val: time.days,  label: 'Days'  },
            { val: time.hours, label: 'Hours' },
            { val: time.mins,  label: 'Mins'  },
            { val: time.secs,  label: 'Secs'  },
          ].map(({ val, label }, i) => (
            <>
              <div key={label} className="cd-unit">
                <span className="cd-val">{val}</span>
                <span className="cd-lbl">{label}</span>
              </div>
              {i < 3 && <span key={`sep-${i}`} className="cd-sep">·</span>}
            </>
          ))}
        </div>

        <div className="email-section">
          {submitted ? (
            <p className="email-success">✓ You&apos;re on the list. We&apos;ll be in touch.</p>
          ) : (
            <>
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Notify Me</button>
              </form>
              <p className="email-hint">No spam. Early-bird offer on launch day.</p>
            </>
          )}
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
