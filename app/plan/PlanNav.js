"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVY  = "#1A1A2E";
const BLUE  = "#1D4ED8";
const WHITE = "#FFFFFF";

const links = [
  { href: "/plan",            label: "Overview",         icon: "◎" },
  { href: "/plan/financials", label: "Financials",        icon: "＄" },
  { href: "/plan/roadmap",    label: "Roadmap",           icon: "→" },
  { href: "/plan/exit",       label: "Exit Valuation",    icon: "↗" },
  { href: "/plan/market",     label: "Market Landscape",  icon: "⬡" },
  { href: "/plan/risks",      label: "Risks",             icon: "△" },
];

export default function PlanNav() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: 220,
      minWidth: 220,
      background: NAVY,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "2rem 0",
      position: "sticky",
      top: 0,
      alignSelf: "flex-start",
      height: "100vh",
      overflowY: "auto",
    }}>
      {/* Brand */}
      <div style={{ padding: "0 1.5rem", marginBottom: "2rem" }}>
        <div style={{ fontWeight: 800, color: WHITE, fontSize: "1.1rem",
          letterSpacing: "-0.02em" }}>
          VitaStax™
        </div>
        <div style={{
          display: "inline-block",
          marginTop: 6,
          background: "rgba(29,78,216,0.25)",
          border: "1px solid rgba(29,78,216,0.4)",
          borderRadius: 20,
          padding: "0.2rem 0.65rem",
        }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "#93C5FD" }}>
            Partner Portal
          </span>
        </div>
      </div>

      {/* Nav links */}
      <nav style={{ flex: 1, padding: "0 0.75rem", display: "flex",
        flexDirection: "column", gap: 2 }}>
        {links.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0.6rem 0.75rem",
              borderRadius: 6,
              textDecoration: "none",
              background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
              transition: "background 0.15s",
            }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
            >
              <span style={{ fontSize: "0.8rem", color: isActive ? WHITE : "rgba(255,255,255,0.3)",
                width: 16, textAlign: "center", flexShrink: 0 }}>
                {icon}
              </span>
              <span style={{
                fontSize: "0.85rem",
                fontWeight: isActive ? 700 : 400,
                color: isActive ? WHITE : "rgba(255,255,255,0.5)",
              }}>
                {label}
              </span>
              {isActive && (
                <span style={{ marginLeft: "auto", width: 4, height: 4,
                  borderRadius: "50%", background: BLUE, flexShrink: 0 }} />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Back to site */}
      <div style={{ padding: "1.5rem 1.5rem 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <Link href="/" style={{
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.3)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}>
          ← Back to site
        </Link>
      </div>
    </aside>
  );
}
