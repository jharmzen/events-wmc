const BOOKING_URL = 'https://www.quicket.co.za/events/385051-wealth-property-investment-masterclass-1508-emperors-palace/'

const CalendarIcon = () => (
  <svg width="38" height="38" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#0D203B" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6z"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="29" height="38" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#0D203B" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="38" height="38" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#0D203B" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/>
  </svg>
)

const TicketIcon = () => (
  <svg width="44" height="32" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#0D203B" d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"/>
  </svg>
)

export default function FinalCTA({
  accentColor = '#c89a4f',
  accentColorLight = '#feea9a',
  date = '15 AUGUST 2026',
  dateLabel = 'SATURDAY',
  venueName = 'EMPERORS PALACE',
  venueCity = 'KEMPTON PARK',
  bookingUrl = 'https://www.quicket.co.za/events/385051-wealth-property-investment-masterclass-1508-emperors-palace/',
}: {
  accentColor?: string
  accentColorLight?: string
  date?: string
  dateLabel?: string
  venueName?: string
  venueCity?: string
  bookingUrl?: string
} = {}) {
  return (
    <section
      id="book"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(50px,6vw,80px) clamp(20px,5vw,60px)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>

        {/* Top line */}
        <p
          style={{
            color: '#0D203B',
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 700,
            fontSize: 18,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            margin: '0 0 14px',
          }}
        >
          THE FIRST R10.4 BILLION IS HISTORY
        </p>

        {/* Flanked gold headline */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div style={{ flex: 1, height: 1, backgroundColor: accentColor }} />
          <h2
            style={{
              color: accentColor,
              fontFamily: '"Antonio", sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px,3vw,40px)',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            THE NEXT BILLION STARTS HERE
          </h2>
          <div style={{ flex: 1, height: 1, backgroundColor: accentColor }} />
        </div>

        {/* Info row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(16px,2.5vw,36px)',
            marginBottom: 28,
          }}
        >
          {[
            { icon: <CalendarIcon />, main: date, sub: dateLabel },
            { icon: <LocationIcon />, main: venueName, sub: venueCity },
            { icon: <ClockIcon />, main: '09:00 – 17:00', sub: 'FULL DAY EVENT' },
            { icon: <TicketIcon />, main: 'R800 PP', sub: 'LUNCH BUFFET INCLUDED' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {item.icon}
              <div style={{ textAlign: 'left' }}>
                <p
                  style={{
                    color: '#0D203B',
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 18,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {item.main}
                </p>
                <p
                  style={{
                    color: accentColor,
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    margin: 0,
                    letterSpacing: '0.5px',
                  }}
                >
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            background: `linear-gradient(to right, ${accentColor}, ${accentColorLight}, ${accentColor})`,
            color: '#0D203B',
            fontFamily: '"Antonio", sans-serif',
            fontWeight: 700,
            fontSize: 18,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            padding: '18px 0',
            borderRadius: 3,
            textDecoration: 'none',
            maxWidth: 280,
            margin: '0 auto 14px',
          }}
        >
          RESERVE YOUR SEAT NOW
        </a>

        {/* Disclaimer */}
        <p
          style={{
            color: '#888888',
            fontFamily: '"Poppins", sans-serif',
            fontSize: 15,
            margin: 0,
          }}
        >
          Seats are limited. Don't miss out on this historic day!
        </p>
      </div>
    </section>
  )
}
