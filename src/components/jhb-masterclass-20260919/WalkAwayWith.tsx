const QUICKET_URL = 'https://www.quicket.co.za/events/392089-wealth-property-half-day-masterclass-1909-emperors-palace/'

const benefits = [
  {
    label: 'Buy The Right\nProperty',
    desc: 'Learn how experienced investors evaluate opportunities, identify stronger locations, and avoid costly purchasing mistakes before they buy.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0D203B" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/>
      </svg>
    ),
  },
  {
    label: 'Create Sustainable\nCash Flow',
    desc: 'Discover how to structure property investments to improve monthly cash flow and build a portfolio designed for long-term wealth.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0D203B" d="M564 192c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h516c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H96V192h468zm-344 48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240zm96 0c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240zm96 0c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240zm96 0c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V240z"/>
      </svg>
    ),
  },
  {
    label: 'Finance & Grow\nYour Portfolio',
    desc: 'Understand how successful investors use bank finance strategically to grow their portfolios while managing risk responsibly.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0D203B" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.37l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"/>
      </svg>
    ),
  },
  {
    label: 'Protect Your\nWealth',
    desc: 'Learn how trust structures and asset protection strategies can help safeguard your investments and support long-term wealth creation.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0D203B" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/>
      </svg>
    ),
  },
  {
    label: 'Invest With Confidence\nIn Any Market',
    desc: 'Understand property market cycles and learn how to make informed investment decisions regardless of market conditions.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0D203B" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/>
      </svg>
    ),
  },
  {
    label: 'Build Generational\nWealth',
    desc: 'Develop a long-term investment strategy that helps create financial security for you and future generations.',
    icon: (
      <svg width="64" height="64" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0D203B" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/>
      </svg>
    ),
  },
]

export default function WalkAwayWith() {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <h2 style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 40px', letterSpacing: '0.5px' }}>
          What You Will Learn
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ flex: '0 0 calc(33.333% - 14px)', minWidth: '260px', backgroundColor: '#f7f8fa', borderRadius: '10px', padding: '32px 20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ marginBottom: '18px' }}>{b.icon}</div>
              <p style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 12px', lineHeight: 1.35, letterSpacing: '0.3px', whiteSpace: 'pre-line' }}>
                {b.label}
              </p>
              <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px' }}>
          <a
            href={QUICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#C89116', color: '#ffffff', fontFamily: '"Montserrat", Sans-serif', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', padding: '14px 40px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.5px' }}
          >
            Secure Your Seat
          </a>
        </div>

      </div>
    </div>
  )
}
