import React from 'react';

const LaurelBadge = () => (
  <svg viewBox="0 0 110 110" width="90" height="90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Outer circle border */}
    <circle cx="55" cy="55" r="52" fill="none" stroke="#c89a4f" strokeWidth="1.5"/>
    {/* Inner circle border */}
    <circle cx="55" cy="55" r="38" fill="none" stroke="#c89a4f" strokeWidth="1"/>
    {/* Left laurel leaves — 5 leaves from bottom-left curving up to top */}
    <ellipse cx="9"  cy="72" rx="9" ry="3.8" transform="rotate(-5  9  72)" fill="#c89a4f"/>
    <ellipse cx="11" cy="57" rx="9" ry="3.8" transform="rotate(-25 11 57)" fill="#c89a4f"/>
    <ellipse cx="17" cy="43" rx="9" ry="3.8" transform="rotate(-47 17 43)" fill="#c89a4f"/>
    <ellipse cx="27" cy="31" rx="9" ry="3.8" transform="rotate(-65 27 31)" fill="#c89a4f"/>
    <ellipse cx="40" cy="22" rx="9" ry="3.8" transform="rotate(-80 40 22)" fill="#c89a4f"/>
    {/* Right laurel leaves — mirror of left */}
    <ellipse cx="101" cy="72" rx="9" ry="3.8" transform="rotate( 5  101 72)" fill="#c89a4f"/>
    <ellipse cx="99"  cy="57" rx="9" ry="3.8" transform="rotate( 25 99  57)" fill="#c89a4f"/>
    <ellipse cx="93"  cy="43" rx="9" ry="3.8" transform="rotate( 47 93  43)" fill="#c89a4f"/>
    <ellipse cx="83"  cy="31" rx="9" ry="3.8" transform="rotate( 65 83  31)" fill="#c89a4f"/>
    <ellipse cx="70"  cy="22" rx="9" ry="3.8" transform="rotate( 80 70  22)" fill="#c89a4f"/>
    {/* Bottom crossing stalks */}
    <path d="M42 100 Q55 92 68 100" stroke="#c89a4f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    {/* "30" */}
    <text x="55" y="62" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="900" fontSize="30" fill="#c89a4f">30</text>
    {/* "YEARS" */}
    <text x="55" y="75" textAnchor="middle" fontFamily="Montserrat,sans-serif" fontWeight="700" fontSize="9" fill="#FFFFFF" letterSpacing="2">YEARS</text>
  </svg>
);

const pillars = [
  {
    text: "For 30 years we've helped thousands of South African's build wealth.",
    icon: <img src="/images/30th-birthday/icon-calendar-gold.png" alt="" aria-hidden="true" style={{ height: 40, display: 'block', margin: '0 auto' }} />,
  },
  {
    text: "We've seen markets rise. Markets fall. Interest rates change.",
    icon: <img src="/images/30th-birthday/icon-growth-chart-gold.png" alt="" aria-hidden="true" style={{ height: 40, display: 'block', margin: '0 auto' }} />,
  },
  {
    text: "Governments come and go.",
    icon: <img src="/images/30th-birthday/icon-people-gold.png" alt="" aria-hidden="true" style={{ height: 40, display: 'block', margin: '0 auto' }} />,
  },
  {
    text: "Yet one thing has remained constant, proven principles create wealth.",
    icon: <img src="/images/30th-birthday/icon-clock-gold.png" alt="" aria-hidden="true" style={{ height: 40, display: 'block', margin: '0 auto' }} />,
  },
];

export default function WhyDifferent() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/images/30th-birthday/photo-stage-coert.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        padding: 'clamp(40px,5vw,60px) clamp(20px,5vw,60px)',
      }}
    >
      {/* Dark overlay — heavier on left for text legibility, fades to near-transparent on right */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(5,14,30,0.88) 0%, rgba(5,14,30,0.65) 40%, rgba(5,14,30,0.2) 70%, rgba(5,14,30,0.05) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* WealthMasters logo — top right, absolute */}
      <img
        src="/images/30th-birthday/logo-wmc-color.png"
        alt="Wealth Masters Club"
        style={{
          position: 'absolute',
          top: 'clamp(12px,2vw,24px)',
          right: 'clamp(20px,5vw,60px)',
          height: 32,
          zIndex: 2,
        }}
      />

      {/* Content — left ~55% of width */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '55%',
          minWidth: 280,
        }}
      >
        {/* Section heading */}
        <h2
          style={{
            fontFamily: '"Antonio", sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(36px,5vw,64px)',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            lineHeight: 1.05,
            marginBottom: 12,
            marginTop: 0,
          }}
        >
          WHY THIS EVENT<br />IS DIFFERENT
        </h2>

        {/* Gold rule */}
        <div
          style={{
            width: 60,
            height: 3,
            backgroundColor: '#c89a4f',
            marginBottom: 28,
          }}
        />

        {/* 4 icon+text columns */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            marginBottom: 28,
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 0',
                textAlign: 'center',
                borderLeft: i > 0 ? '1px solid rgba(200,145,22,0.35)' : undefined,
                padding: '0 16px',
              }}
            >
              {pillar.icon}
              <p
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 12,
                  lineHeight: 1.6,
                  marginTop: 10,
                  marginBottom: 0,
                  textAlign: 'center',
                }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Gold-bordered highlight box */}
        <div
          style={{
            border: '2px solid #c89a4f',
            borderRadius: 6,
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            backgroundColor: 'rgba(8,18,40,0.7)',
          }}
        >
          {/* 30 YEARS laurel wreath badge */}
          <div style={{ flexShrink: 0 }}>
            <LaurelBadge />
          </div>

          {/* Box text */}
          <div style={{ flex: 1 }}>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                lineHeight: 1.5,
                marginBottom: 6,
                marginTop: 0,
              }}
            >
              THIS WILL BE YOUR ALL-ACCESS PASS TO THE STRATEGIES, KNOWLEDGE &amp; EXPERTISE THAT HAVE CREATED OVER
            </p>
            <p
              style={{
                color: '#c89a4f',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(22px,3vw,32px)',
                textTransform: 'uppercase',
                lineHeight: 1,
                marginBottom: 4,
                marginTop: 0,
              }}
            >
              R10.4 BILLION
            </p>
            <p
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                margin: 0,
              }}
            >
              IN RESIDENTIAL PROPERTY WEALTH.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
