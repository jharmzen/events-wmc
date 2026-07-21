// TODO: Add Quicket/booking URL when available
const BOOKING_URL = '#book'

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#0D203B',
        backgroundImage: "url('/images/30th-birthday/bg-30-years-hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,80px) clamp(50px,6vw,80px)',
      }}
    >
      {/* Inner content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1340,
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Left column */}
        <div style={{ maxWidth: 640 }}>

          {/* Eyebrow */}
          <p
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: 13,
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: '0 0 14px',
            }}
          >
            30 YEARS OF BUILDING WEALTH
          </p>

          {/* Headline — line 1 WHITE, lines 2-3 GOLD */}
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                fontFamily: '"Antonio", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(52px,7vw,96px)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                color: '#FFFFFF',
              }}
            >
              R10.4 BILLION
            </div>
            <div
              style={{
                fontFamily: '"Antonio", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(52px,7vw,96px)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                color: '#c89a4f',
              }}
            >
              ONE HISTORIC
            </div>
            <div
              style={{
                fontFamily: '"Antonio", sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(52px,7vw,96px)',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                color: '#c89a4f',
              }}
            >
              CELEBRATION
            </div>
          </div>

          {/* Body paragraph */}
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: 15,
              fontWeight: 400,
              color: '#FFFFFF',
              lineHeight: 1.7,
              maxWidth: 460,
              margin: '0 0 28px',
            }}
          >
            Join Wealth Masters Club as we celebrate 30 years of helping South
            Africans build lasting wealth through residential property investment.
          </p>

          {/* Info row: 3 chips LEFT, ticket box RIGHT */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: 16,
              marginBottom: 32,
              flexWrap: 'wrap',
            }}
          >
            {/* 3 chips grouped left */}
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>

              {/* Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="22" height="22" viewBox="0 0 448 512" fill="#c89a4f" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6z" />
                </svg>
                <div>
                  <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 14, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    15 AUGUST 2026
                  </div>
                  <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 11, fontWeight: 700, color: '#c89a4f', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    SATURDAY
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="16" height="22" viewBox="0 0 384 512" fill="#c89a4f" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                </svg>
                <div>
                  <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 14, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    EMPERORS PALACE
                  </div>
                  <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 11, fontWeight: 700, color: '#c89a4f', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    KEMPTON PARK
                  </div>
                </div>
              </div>

              {/* Time */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="22" height="22" viewBox="0 0 512 512" fill="#c89a4f" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                </svg>
                <div>
                  <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 14, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    09:00 – 17:00
                  </div>
                  <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 11, fontWeight: 700, color: '#c89a4f', textTransform: 'uppercase', lineHeight: 1.2 }}>
                    FULL DAY EVENT
                  </div>
                </div>
              </div>

            </div>{/* end chips group */}

            {/* Ticket box — right */}
            <div
              style={{
                backgroundColor: 'rgba(0,0,0,0.5)',
                border: '2px solid #c89a4f',
                borderRadius: 4,
                padding: '10px 20px',
                textAlign: 'center',
                flexShrink: 0,
              }}
            >
              <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 10, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px' }}>
                TICKETS
              </div>
              <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 42, fontWeight: 900, color: '#c89a4f', lineHeight: 1 }}>
                R800
              </div>
              <div style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 9, fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '1px' }}>
                PER PERSON
              </div>
            </div>
          </div>

          {/* CTA button */}
          <a
            href={BOOKING_URL}
            style={{
              display: 'block',
              maxWidth: 480,
              background: 'linear-gradient(to right, #c89a4f, #feea9a, #c89a4f)',
              color: '#0D203B',
              fontFamily: '"Antonio", sans-serif',
              fontSize: 16,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '18px 0',
              borderRadius: 50,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            RESERVE YOUR SEAT NOW
          </a>

          {/* Disclaimer */}
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontSize: 12,
              color: 'rgba(255,255,255,0.65)',
              textAlign: 'center',
              maxWidth: 480,
              margin: '10px 0 0',
            }}
          >
            Seats are limited. Book early to avoid disappointment.
          </p>

        </div>
      </div>
    </section>
  )
}
