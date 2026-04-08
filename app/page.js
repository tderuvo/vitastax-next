'use client';

import { useState, useEffect } from 'react';
import ProductSVG from '@/components/ProductSVG';

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

const FEATURES = [
  '30 daily packs / month',
  'Custom supplement program',
  'Carry anywhere',
  'Monthly subscription',
];

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
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
      <div className="page">

        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span className="logo-name">VitaStax</span>
        </div>

        {/* Hero */}
        <div className="hero">

          {/* Left: copy */}
          <div className="hero-content">

            <div className="badge">
              <span className="badge-dot" />
              Something big is coming
            </div>

            <h1>
              Your Daily Stack,<br />
              <span className="gradient-text">Perfectly Packed.</span>
            </h1>

            <p className="subtitle">
              VitaStax ships 30 pocket-sized daily supplement packs — one for every day of the month.
              Your custom formula. Your routine. Always on you.
            </p>

            {/* Feature pills */}
            <div className="features">
              {FEATURES.map(f => (
                <span key={f} className="feature-pill">
                  <CheckIcon />
                  {f}
                </span>
              ))}
            </div>

            {/* Email form */}
            {submitted ? (
              <div className="success-msg">
                ✓ &nbsp;You&apos;re on the list — we&apos;ll be in touch!
              </div>
            ) : (
              <form className="notify-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <button type="submit">Notify Me</button>
              </form>
            )}
            <p className="form-hint">No spam. Just the launch date + an early-bird offer.</p>

            {/* Countdown */}
            <p className="countdown-label">Launching in</p>
            <div className="countdown">
              {[
                { val: time.days,  label: 'Days'  },
                { val: time.hours, label: 'Hours' },
                { val: time.mins,  label: 'Mins'  },
                { val: time.secs,  label: 'Secs'  },
              ].map(({ val, label }) => (
                <div key={label} className="cd-unit">
                  <div className="cd-val">{val}</div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="divider" />

            {/* Social links */}
            <div className="socials">
              <a href="#" className="social-link" aria-label="X / Twitter">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="mailto:hello@vitastax.com" className="social-link" aria-label="Email">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </a>
            </div>

          </div>{/* /hero-content */}

          {/* Right: product illustration */}
          <div className="hero-visual">
            <ProductSVG />
          </div>

        </div>{/* /hero */}
      </div>{/* /page */}

      <footer>
        &copy; 2026 <a href="https://vitastax.com">vitastax.com</a> &mdash; All rights reserved.
      </footer>
    </>
  );
}
