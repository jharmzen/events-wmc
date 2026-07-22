import React from 'react'

const BOOKING_URL = 'https://www.quicket.co.za/events/385051-wealth-property-investment-masterclass-1508-emperors-palace/'

export default function NavBar({
  accentColor = '#c89a4f',
  accentColorLight = '#feea9a',
  bookingUrl = 'https://www.quicket.co.za/events/385051-wealth-property-investment-masterclass-1508-emperors-palace/',
}: {
  accentColor?: string
  accentColorLight?: string
  bookingUrl?: string
} = {}) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#0D203B',
        borderBottom: '1px solid rgba(200,145,22,0.25)',
      }}
    >
      <div
        style={{
          maxWidth: '1340px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 40px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
          gap: '16px',
        }}
      >
        {/* Logo */}
        <img
          src="/images/wmc-logo-nobackground.png"
          alt="Wealth Masters Club"
          style={{ height: '80px', width: 'auto', flexShrink: 0 }}
        />

        {/* Nav links — hidden on small mobile */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(8px, 1.5vw, 20px)',
          }}
        >
          {[
            { href: '#details', label: 'EVENT DETAILS' },
            { href: '#speakers', label: 'SPEAKERS' },
            { href: '#faqs', label: 'FAQ' },
          ].map(({ href, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && (
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', userSelect: 'none' }}>·</span>
              )}
              <a
                href={href}
                style={{
                  color: '#FFFFFF',
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </a>
            </React.Fragment>
          ))}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: `linear-gradient(to right, ${accentColor}, ${accentColorLight}, ${accentColor})`,
              color: '#0D203B',
              fontFamily: '"Antonio", sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              textDecoration: 'none',
              padding: '9px 22px',
              borderRadius: '50px',
              whiteSpace: 'nowrap',
            }}
          >
            BOOK YOUR SEAT
          </a>
        </nav>
      </div>
    </div>
  )
}
