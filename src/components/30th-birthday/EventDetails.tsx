
const CalendarIcon = ({ accentColor }: { accentColor: string }) => (
  <svg width="72" height="84" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill={accentColor} d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/>
  </svg>
)

const LocationIcon = ({ accentColor }: { accentColor: string }) => (
  <svg width="62" height="84" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill={accentColor} d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/>
  </svg>
)

const ClockIcon = ({ accentColor }: { accentColor: string }) => (
  <svg width="72" height="84" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill={accentColor} d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/>
  </svg>
)

const MoneyIcon = ({ accentColor }: { accentColor: string }) => (
  <svg width="84" height="72" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill={accentColor} d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80C0 53.5 21.5 32 48 32h480c26.5 0 48 21.5 48 48z"/>
  </svg>
)

const IncludesIcon = ({ accentColor }: { accentColor: string }) => (
  <svg width="84" height="72" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" fill={accentColor} aria-hidden="true">
    {/* Fork — 4 tines */}
    <rect x="2"   y="8" width="32" height="158" rx="14"/>
    <rect x="40"  y="8" width="32" height="158" rx="14"/>
    <rect x="78"  y="8" width="32" height="158" rx="14"/>
    <rect x="116" y="8" width="32" height="158" rx="14"/>
    {/* Fork — handle (centered under 4 tines, center x=75) */}
    <rect x="59" y="162" width="32" height="342" rx="14"/>
    {/* Plate — outer gold ring */}
    <circle cx="320" cy="256" r="160"/>
    {/* Plate — inner white disc */}
    <circle cx="320" cy="256" r="115" fill="#FFFFFF"/>
    {/* Knife — blade */}
    <rect x="544" y="8" width="28" height="158" rx="12"/>
    {/* Knife — handle */}
    <rect x="532" y="162" width="52" height="342" rx="14"/>
  </svg>
)

const PeopleIcon = ({ accentColor }: { accentColor: string }) => (
  <svg width="84" height="72" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill={accentColor} d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
  </svg>
)

export default function EventDetails({
  accentColor = '#c89a4f',
  accentColorLight = '#feea9a',
  date = 'Saturday, 15 August 2026',
  venue = 'Emperors Palace Convention Centre, Kempton Park',
  includes = 'Arrival refreshments\nBuffet Lunch\nTea & Coffee',
  bookingUrl = 'https://www.quicket.co.za/events/385051-wealth-property-investment-masterclass-1508-emperors-palace/',
}: {
  accentColor?: string
  accentColorLight?: string
  date?: string
  venue?: string
  includes?: string
  bookingUrl?: string
} = {}) {
  const details = [
    {
      icon: <CalendarIcon accentColor={accentColor} />,
      label: 'DATE',
      value: date,
    },
    {
      icon: <LocationIcon accentColor={accentColor} />,
      label: 'VENUE',
      value: venue,
    },
    {
      icon: <ClockIcon accentColor={accentColor} />,
      label: 'TIME',
      value: '09:00 - 17:00\nFull-day event',
    },
    {
      icon: <MoneyIcon accentColor={accentColor} />,
      label: 'INVESTMENT',
      value: 'R800 per person',
    },
    {
      icon: <IncludesIcon accentColor={accentColor} />,
      label: 'INCLUDES',
      value: includes,
    },
    {
      icon: <PeopleIcon accentColor={accentColor} />,
      label: 'WHO CAN ATTEND',
      value: 'Members and Non-members welcome',
    },
  ]

  return (
    <section
      id="details"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(50px,6vw,70px) clamp(20px,5vw,60px)',
      }}
    >
      <div style={{ maxWidth: '1340px', margin: '0 auto' }}>

        {/* Heading with flanking gold rules */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: 'clamp(36px,5vw,56px)',
          }}
        >
          <div style={{ flex: 1, height: '1px', backgroundColor: accentColor }} />
          <h2
            style={{
              color: '#0D203B',
              fontFamily: '"Antonio", sans-serif',
              fontSize: 'clamp(28px,3.5vw,42px)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              margin: 0,
            }}
          >
            EVENT DETAILS
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: accentColor }} />
        </div>

        {/* 6-column row with vertical dividers */}
        <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
          {details.map((d, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 130px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 clamp(6px,1vw,14px)',
                borderLeft: i > 0 ? '1px solid rgba(200,145,22,0.4)' : undefined,
              }}
            >
              <div
                style={{
                  height: '90px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                }}
              >
                {d.icon}
              </div>
              <p
                style={{
                  color: '#0D203B',
                  fontFamily: '"Montserrat", Sans-serif',
                  fontSize: '15px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  margin: '0 0 8px',
                }}
              >
                {d.label}
              </p>
              <p
                style={{
                  color: '#666666',
                  fontFamily: '"Poppins", Sans-serif',
                  fontSize: '13px',
                  lineHeight: 1.6,
                  margin: 0,
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
              >
                {d.value}
              </p>
            </div>
          ))}
        </div>

        {/* Book your seat button */}
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            margin: '40px auto 0',
            background: `linear-gradient(to right, ${accentColor}, ${accentColorLight}, ${accentColor})`,
            color: '#0D203B',
            fontFamily: '"Antonio", sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            padding: '18px 48px',
            borderRadius: '4px',
            textDecoration: 'none',
            maxWidth: '400px',
            textAlign: 'center',
          }}
        >
          BOOK YOUR SEAT
        </a>
      </div>
    </section>
  )
}
