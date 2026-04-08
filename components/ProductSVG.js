export default function ProductSVG() {
  return (
    <svg className="product-svg" viewBox="0 0 420 560" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="f-glow-sm" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b"/>
          <feComposite in="SourceGraphic" in2="b" operator="over"/>
        </filter>
        <filter id="f-shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="18" floodColor="rgba(244,114,182,0.35)"/>
        </filter>
        <linearGradient id="g-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f472b6"/>
          <stop offset="100%" stopColor="#93c5fd"/>
        </linearGradient>
        <linearGradient id="g-accent-v" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6"/>
          <stop offset="100%" stopColor="#93c5fd"/>
        </linearGradient>
        <linearGradient id="g-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.13)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.04)"/>
        </linearGradient>
        <linearGradient id="g-lid" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.17)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.07)"/>
        </linearGradient>
        <linearGradient id="g-pack" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.1)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.03)"/>
        </linearGradient>
        <radialGradient id="g-scene-glow" cx="50%" cy="48%" r="45%">
          <stop offset="0%"   stopColor="rgba(244,114,182,0.28)"/>
          <stop offset="100%" stopColor="rgba(244,114,182,0)" stopOpacity="0"/>
        </radialGradient>
        <clipPath id="clip-body">
          <rect x="148" y="115" width="124" height="280" rx="30"/>
        </clipPath>
        <clipPath id="clip-lid-inner">
          <rect x="148" y="56" width="124" height="66" rx="26"/>
        </clipPath>
      </defs>

      {/* Scene glow */}
      <ellipse cx="210" cy="290" rx="170" ry="155" fill="url(#g-scene-glow)"/>

      {/* Pack: back-left DAY 07 */}
      <g transform="translate(8, 195) rotate(-24, 46, 27)" opacity="0.65">
        <rect width="92" height="54" rx="12" fill="url(#g-pack)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
        <rect width="92" height="8" rx="12" fill="url(#g-accent)" opacity="0.65"/>
        <rect y="5" width="92" height="3" fill="url(#g-accent)" opacity="0.65"/>
        <rect x="1.5" y="9" width="3.5" height="43" rx="1.5" fill="rgba(255,255,255,0.1)"/>
        <text x="46" y="29" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700"
              fill="rgba(255,255,255,0.45)" textAnchor="middle" letterSpacing="1.8">DAY 07</text>
        <text x="46" y="40" fontFamily="Inter,system-ui,sans-serif" fontSize="7"
              fill="rgba(255,255,255,0.25)" textAnchor="middle" letterSpacing="0.5">of 30</text>
        <circle cx="24" cy="48" r="3" fill="#f472b6" opacity="0.9"/>
        <circle cx="33" cy="48" r="3" fill="#93c5fd" opacity="0.9"/>
        <circle cx="42" cy="48" r="3" fill="#fb7185" opacity="0.9"/>
        <circle cx="51" cy="48" r="3" fill="#f9a8d4" opacity="0.9"/>
        <circle cx="60" cy="48" r="3" fill="#bfdbfe" opacity="0.9"/>
      </g>

      {/* Pack: back-right DAY 14 */}
      <g transform="translate(320, 175) rotate(20, 46, 27)" opacity="0.65">
        <rect width="92" height="54" rx="12" fill="url(#g-pack)" stroke="rgba(255,255,255,0.13)" strokeWidth="1"/>
        <rect width="92" height="8" rx="12" fill="url(#g-accent)" opacity="0.65"/>
        <rect y="5" width="92" height="3" fill="url(#g-accent)" opacity="0.65"/>
        <rect x="1.5" y="9" width="3.5" height="43" rx="1.5" fill="rgba(255,255,255,0.1)"/>
        <text x="46" y="29" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700"
              fill="rgba(255,255,255,0.45)" textAnchor="middle" letterSpacing="1.8">DAY 14</text>
        <text x="46" y="40" fontFamily="Inter,system-ui,sans-serif" fontSize="7"
              fill="rgba(255,255,255,0.25)" textAnchor="middle" letterSpacing="0.5">of 30</text>
        <circle cx="24" cy="48" r="3" fill="#93c5fd" opacity="0.9"/>
        <circle cx="33" cy="48" r="3" fill="#c4b5fd" opacity="0.9"/>
        <circle cx="42" cy="48" r="3" fill="#f472b6" opacity="0.9"/>
        <circle cx="51" cy="48" r="3" fill="#fb7185" opacity="0.9"/>
        <circle cx="60" cy="48" r="3" fill="#f9a8d4" opacity="0.9"/>
      </g>

      {/* Pack: front-left DAY 01 */}
      <g transform="translate(5, 380) rotate(-12, 46, 27)">
        <rect width="92" height="54" rx="12" fill="url(#g-pack)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <rect width="92" height="8" rx="12" fill="url(#g-accent)" opacity="0.9"/>
        <rect y="5" width="92" height="3" fill="url(#g-accent)" opacity="0.9"/>
        <rect x="1.5" y="9" width="3.5" height="43" rx="1.5" fill="rgba(255,255,255,0.14)"/>
        <text x="46" y="29" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700"
              fill="rgba(255,255,255,0.75)" textAnchor="middle" letterSpacing="1.8">DAY 01</text>
        <text x="46" y="40" fontFamily="Inter,system-ui,sans-serif" fontSize="7"
              fill="rgba(255,255,255,0.4)" textAnchor="middle" letterSpacing="0.5">of 30</text>
        <circle cx="24" cy="48" r="3" fill="#f472b6"/>
        <circle cx="33" cy="48" r="3" fill="#93c5fd"/>
        <circle cx="42" cy="48" r="3" fill="#fb7185"/>
        <circle cx="51" cy="48" r="3" fill="#f9a8d4"/>
        <circle cx="60" cy="48" r="3" fill="#c4b5fd"/>
      </g>

      {/* Pack: front-right DAY 30 */}
      <g transform="translate(320, 375) rotate(14, 46, 27)">
        <rect width="92" height="54" rx="12" fill="url(#g-pack)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <rect width="92" height="8" rx="12" fill="url(#g-accent)" opacity="0.9"/>
        <rect y="5" width="92" height="3" fill="url(#g-accent)" opacity="0.9"/>
        <rect x="1.5" y="9" width="3.5" height="43" rx="1.5" fill="rgba(255,255,255,0.14)"/>
        <text x="46" y="29" fontFamily="Inter,system-ui,sans-serif" fontSize="9.5" fontWeight="700"
              fill="rgba(255,255,255,0.75)" textAnchor="middle" letterSpacing="1.8">DAY 30</text>
        <text x="46" y="40" fontFamily="Inter,system-ui,sans-serif" fontSize="7"
              fill="rgba(255,255,255,0.4)" textAnchor="middle" letterSpacing="0.5">of 30</text>
        <circle cx="24" cy="48" r="3" fill="#93c5fd"/>
        <circle cx="33" cy="48" r="3" fill="#f472b6"/>
        <circle cx="42" cy="48" r="3" fill="#c4b5fd"/>
        <circle cx="51" cy="48" r="3" fill="#fb7185"/>
        <circle cx="60" cy="48" r="3" fill="#bfdbfe"/>
      </g>

      {/* Main dispenser */}
      <ellipse cx="210" cy="414" rx="68" ry="16" fill="rgba(244,114,182,0.22)" filter="url(#f-glow)"/>

      {/* Body base */}
      <rect x="148" y="115" width="124" height="280" rx="30"
            fill="url(#g-body)" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5"
            filter="url(#f-shadow)"/>

      {/* Clipped interior */}
      <g clipPath="url(#clip-body)">
        <ellipse cx="182" cy="175" rx="11" ry="6.5" fill="#f472b6"/>
        <ellipse cx="210" cy="175" rx="11" ry="6.5" fill="#93c5fd"/>
        <ellipse cx="238" cy="175" rx="11" ry="6.5" fill="#fb7185"/>
        <ellipse cx="182" cy="197" rx="11" ry="6.5" fill="#f9a8d4"/>
        <ellipse cx="210" cy="197" rx="11" ry="6.5" fill="#bfdbfe"/>
        <ellipse cx="238" cy="197" rx="11" ry="6.5" fill="#c4b5fd"/>
        <ellipse cx="182" cy="219" rx="11" ry="6.5" fill="#93c5fd"/>
        <ellipse cx="210" cy="219" rx="11" ry="6.5" fill="#f472b6"/>
        <ellipse cx="238" cy="219" rx="11" ry="6.5" fill="#f9a8d4"/>
        <ellipse cx="182" cy="241" rx="11" ry="6.5" fill="#fb7185"/>
        <ellipse cx="210" cy="241" rx="11" ry="6.5" fill="#bfdbfe"/>
        <ellipse cx="238" cy="241" rx="11" ry="6.5" fill="#f472b6"/>
        <ellipse cx="182" cy="263" rx="11" ry="6.5" fill="#c4b5fd" opacity="0.9"/>
        <ellipse cx="210" cy="263" rx="11" ry="6.5" fill="#f9a8d4" opacity="0.9"/>
        <ellipse cx="238" cy="263" rx="11" ry="6.5" fill="#93c5fd" opacity="0.9"/>
        <ellipse cx="182" cy="285" rx="11" ry="6.5" fill="#f472b6"  opacity="0.75"/>
        <ellipse cx="210" cy="285" rx="11" ry="6.5" fill="#fb7185"  opacity="0.75"/>
        <ellipse cx="238" cy="285" rx="11" ry="6.5" fill="#bfdbfe"  opacity="0.75"/>
        <ellipse cx="182" cy="307" rx="11" ry="6.5" fill="#93c5fd"  opacity="0.55"/>
        <ellipse cx="210" cy="307" rx="11" ry="6.5" fill="#f472b6"  opacity="0.55"/>
        <ellipse cx="238" cy="307" rx="11" ry="6.5" fill="#c4b5fd"  opacity="0.55"/>
        <ellipse cx="182" cy="329" rx="11" ry="6.5" fill="#f9a8d4"  opacity="0.35"/>
        <ellipse cx="210" cy="329" rx="11" ry="6.5" fill="#93c5fd"  opacity="0.35"/>
        <ellipse cx="238" cy="329" rx="11" ry="6.5" fill="#fb7185"  opacity="0.35"/>
        <rect x="148" y="115" width="124" height="280" fill="rgba(10,10,18,0.38)"/>
        <rect x="148" y="115" width="124" height="20" fill="url(#g-accent)" opacity="0.9"/>
        <rect x="148" y="375" width="124" height="20" fill="url(#g-accent)" opacity="0.55"/>
        <rect x="149" y="138" width="5" height="230" rx="2.5" fill="rgba(255,255,255,0.09)"/>
        <rect x="163" y="145" width="94" height="32" rx="9" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        <text x="210" y="166" fontFamily="Inter,system-ui,sans-serif" fontSize="13" fontWeight="700"
              fill="rgba(255,255,255,0.88)" textAnchor="middle" letterSpacing="1.5">VITASTAX</text>
        <text x="210" y="195" fontFamily="Inter,system-ui,sans-serif" fontSize="7.5"
              fill="rgba(255,255,255,0.38)" textAnchor="middle" letterSpacing="0.8">DAILY SUPPLEMENT SYSTEM</text>
        <rect x="168" y="350" width="84" height="20" rx="10" fill="url(#g-accent)" opacity="0.92"/>
        <text x="210" y="364" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="700"
              fill="rgba(255,255,255,0.96)" textAnchor="middle" letterSpacing="1">30 DAILY DOSES</text>
      </g>

      {/* Body outline */}
      <rect x="148" y="115" width="124" height="280" rx="30"
            fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5"/>

      {/* Flip lid */}
      <g transform="rotate(-20, 210, 115)">
        <rect x="148" y="56" width="124" height="66" rx="26"
              fill="url(#g-lid)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <g clipPath="url(#clip-lid-inner)">
          <rect x="148" y="56" width="124" height="16" fill="url(#g-accent)" opacity="0.85"/>
          <rect x="149" y="74" width="5" height="44" rx="2.5" fill="rgba(255,255,255,0.12)"/>
          <text x="210" y="102" fontFamily="Inter,system-ui,sans-serif" fontSize="11" fontWeight="700"
                fill="rgba(255,255,255,0.55)" textAnchor="middle" letterSpacing="2">VS</text>
        </g>
        <ellipse cx="210" cy="120" rx="32" ry="7" fill="rgba(0,0,0,0.55)"/>
        <rect x="183" y="116" width="54" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
      </g>

      {/* Floating pills */}
      <ellipse cx="178" cy="96"  rx="10" ry="6" fill="#f472b6" opacity="0.92"
               transform="rotate(-18, 178, 96)"  filter="url(#f-glow-sm)"/>
      <ellipse cx="205" cy="76"  rx="10" ry="6" fill="#93c5fd" opacity="0.92"
               transform="rotate(8,  205, 76)"   filter="url(#f-glow-sm)"/>
      <ellipse cx="232" cy="90"  rx="9"  ry="5.5" fill="#fb7185" opacity="0.88"
               transform="rotate(-5, 232, 90)"   filter="url(#f-glow-sm)"/>
      <ellipse cx="192" cy="62"  rx="7"  ry="4.5" fill="#f9a8d4" opacity="0.75"
               transform="rotate(12, 192, 62)"   filter="url(#f-glow-sm)"/>
      <ellipse cx="222" cy="55"  rx="7"  ry="4.5" fill="#bfdbfe" opacity="0.7"
               transform="rotate(-8, 222, 55)"   filter="url(#f-glow-sm)"/>

      {/* Callout bubble */}
      <g transform="translate(300, 255)">
        <rect width="96" height="44" rx="14"
              fill="rgba(22,13,23,0.85)" stroke="rgba(244,114,182,0.4)" strokeWidth="1"/>
        <text x="48" y="18" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600"
              fill="rgba(255,255,255,0.5)" textAnchor="middle" letterSpacing="0.5">1 PACK PER DAY</text>
        <text x="48" y="33" fontFamily="Inter,system-ui,sans-serif" fontSize="8.5" fontWeight="600"
              fill="rgba(255,255,255,0.5)" textAnchor="middle" letterSpacing="0.5">30 PACKS / MONTH</text>
        <line x1="0" y1="22" x2="-92" y2="-2"
              stroke="rgba(244,114,182,0.25)" strokeWidth="1" strokeDasharray="3 3"/>
      </g>
    </svg>
  );
}
