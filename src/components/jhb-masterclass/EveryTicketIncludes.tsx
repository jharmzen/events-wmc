const QUICKET_JHB = 'https://www.quicket.co.za/events/377079-wealth-property-investment-masterclass-0407-emperors-palace#/'

const CoffeeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 14h18v12a6 6 0 01-6 6H12a6 6 0 01-6-6V14z" stroke="#0D203B" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M24 16h3a4 4 0 010 8h-3" stroke="#0D203B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M11 6c0 0 2-2 2 2s2 2 2-2" stroke="#0D203B" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 6c0 0 2-2 2 2s2 2 2-2" stroke="#0D203B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const MuffinIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20h20l-2 10H10L8 20z" stroke="#0D203B" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M5 20c0-7.18 5.82-13 13-13s13 5.82 13 13" stroke="#0D203B" strokeWidth="2"/>
    <path d="M10 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#0D203B" strokeWidth="1.5" strokeDasharray="3 2"/>
  </svg>
)

const NetworkingIcon = () => (
  <svg aria-hidden="true" width="36" height="36" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0D203B" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
  </svg>
)

const WealthOfficersIcon = () => (
  <svg aria-hidden="true" width="36" height="36" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="#0D203B" d="M466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/>
  </svg>
)

const ShieldCheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L4 6v8c0 6.627 4.477 12.83 10 14 5.523-1.17 10-7.373 10-14V6L14 2z" stroke="#0D203B" strokeWidth="1.8" strokeLinejoin="round"/>
    <path d="M9 14l3 3 7-7" stroke="#0D203B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const GuaranteeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="11" stroke="#0D203B" strokeWidth="1.8"/>
    <path d="M10 14l2.5 2.5L18 11" stroke="#0D203B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 3v3M14 22v3M3 14h3M22 14h3" stroke="#0D203B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const SeatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="12" width="18" height="10" rx="2" stroke="#0D203B" strokeWidth="1.8"/>
    <path d="M9 12V8a5 5 0 0110 0v4" stroke="#0D203B" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M9 22v3M19 22v3" stroke="#0D203B" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const ticketItems = [
  { label: 'Tea & Coffee', icon: <CoffeeIcon /> },
  { label: 'Mid morning Refreshments', icon: <MuffinIcon /> },
  { label: 'Networking Session', icon: <NetworkingIcon /> },
  { label: 'Access to Wealth Officers, Trust Lawyers & Accountants', icon: <WealthOfficersIcon /> },
]

const badges = [
  { icon: <ShieldCheckIcon />, title: 'Secure Booking', desc: 'Your booking is secure through Quicket.' },
  { icon: <GuaranteeIcon />, title: '30-Day Guarantee', desc: "If the masterclass doesn't meet your expectations, get a full refund." },
  { icon: <SeatIcon />, title: 'Limited Seats', desc: 'Seats are limited to ensure a valuable experience.' },
]

export default function EveryTicketIncludes() {
  return (
    <div style={{ backgroundColor: '#EBF3FB', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        <h2 style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 40px', letterSpacing: '0.5px' }}>
          Every Ticket Includes
        </h2>

        {/* 4 icons row */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          {ticketItems.map((item, i) => (
            <div key={i} style={{ flex: '0 0 180px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '72px', height: '72px', borderRadius: '50%', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <p style={{ color: '#0D203B', fontFamily: '"Poppins", Sans-serif', fontSize: '13px', fontWeight: 600, margin: 0, lineHeight: 1.4, maxWidth: '140px' }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* 3 badges */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
          {badges.map((badge, i) => (
            <div key={i} style={{ flex: '0 0 calc(33.333% - 12px)', minWidth: '220px', border: '1px solid #e8e8e8', borderRadius: '8px', padding: '18px 16px', display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left', backgroundColor: '#f7f8fa' }}>
              <div style={{ flexShrink: 0 }}>{badge.icon}</div>
              <div>
                <p style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 4px', letterSpacing: '0.3px' }}>{badge.title}</p>
                <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p style={{ color: '#333333', fontFamily: '"Poppins", Sans-serif', fontSize: '14px', margin: '0 0 4px' }}>
          Don't miss this opportunity to learn from nearly 30 years of property investment experience.
        </p>
        <a
          href="#tickets"
          style={{ color: '#C89116', fontFamily: '"Montserrat", Sans-serif', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', textDecoration: 'none' }}
        >
          Reserve Your Seat Today!
        </a>

      </div>
    </div>
  )
}
