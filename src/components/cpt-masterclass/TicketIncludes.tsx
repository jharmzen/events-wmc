const QUICKET_CPT = 'https://www.quicket.co.za/events/369918-wealth-property-investment-masterclass-2507-lord-charles'

const CrownIcon = () => (
  <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 26h30M5 24L3 9l9 7 6-14 6 14 9-7-2 15H5z" stroke="#C89116" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PersonIcon = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="28" fill="#0D203B"/>
    <circle cx="28" cy="21" r="9" fill="#ffffff"/>
    <path d="M7 50c0-11.598 9.402-21 21-21s21 9.402 21 21" fill="#ffffff"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="9" fill="#C89116"/>
    <path d="M5 9.5l2.5 2.5 5.5-5.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const fullFeatures = [
  'Half-day Masterclass',
  'Tea & Coffee',
  'Mid morning Refreshments',
  'Networking Session',
  'Digital Copy of Rich Mind Rich Man',
  'Access to Wealth Officers, Trust Lawyers & Accountants',
]

const guestFeatures = [
  'Everything in the Non-Member Ticket',
  'Must attend with a full-paying attendee',
]

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', textAlign: 'left', width: '100%' }}>
      {items.map((f, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '9px', fontFamily: '"Poppins", Sans-serif', fontSize: '13px', color: '#333333', marginBottom: '10px', lineHeight: 1.5 }}>
          <span style={{ flexShrink: 0, marginTop: '2px' }}><CheckIcon /></span>
          {f}
        </li>
      ))}
    </ul>
  )
}

export default function TicketIncludes() {
  return (
    <div id="tickets" style={{ backgroundColor: '#ffffff', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ marginBottom: '10px' }}><CrownIcon /></div>
        <h2 style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 12px' }}>
          Choose Your Ticket
        </h2>
        <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '15px', margin: '0 0 40px' }}>
          Join us for a practical half-day masterclass and start building your property investment strategy.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'stretch' }}>

          {/* Platinum Member */}
          <div style={{ flex: '0 0 calc(33.333% - 14px)', minWidth: '260px', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PersonIcon />
            <p style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', margin: '14px 0 6px', letterSpacing: '0.5px' }}>
              Platinum Member
            </p>
            <p style={{ color: '#C89116', fontFamily: '"Montserrat", Sans-serif', fontSize: '52px', fontWeight: 700, margin: '0 0 4px', lineHeight: 1 }}>
              R400
            </p>
            <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '13px', margin: '0 0 20px' }}>per person</p>
            <FeatureList items={fullFeatures} />
            <a href={QUICKET_CPT} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', backgroundColor: '#0D203B', color: '#ffffff', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', padding: '14px', borderRadius: '4px', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.5px', marginTop: 'auto', boxSizing: 'border-box' }}>
              Reserve Your Seat
            </a>
          </div>

          {/* Non-Member – Most Popular */}
          <div style={{ flex: '0 0 calc(33.333% - 14px)', minWidth: '260px', border: '2px solid #C89116', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ backgroundColor: '#C89116', width: '100%', padding: '9px 0', textAlign: 'center' }}>
              <span style={{ color: '#ffffff', fontFamily: '"Montserrat", Sans-serif', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Most Popular
              </span>
            </div>
            <div style={{ padding: '20px 24px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, width: '100%', boxSizing: 'border-box' }}>
              <PersonIcon />
              <p style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', margin: '14px 0 6px', letterSpacing: '0.5px' }}>
                Non-Member
              </p>
              <p style={{ color: '#C89116', fontFamily: '"Montserrat", Sans-serif', fontSize: '52px', fontWeight: 700, margin: '0 0 4px', lineHeight: 1 }}>
                R800
              </p>
              <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '13px', margin: '0 0 20px' }}>per person</p>
              <FeatureList items={fullFeatures} />
              <a href={QUICKET_CPT} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', backgroundColor: '#0D203B', color: '#ffffff', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', padding: '14px', borderRadius: '4px', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.5px', marginTop: 'auto', boxSizing: 'border-box' }}>
                Book Now
              </a>
            </div>
          </div>

          {/* Guest Ticket */}
          <div style={{ flex: '0 0 calc(33.333% - 14px)', minWidth: '260px', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PersonIcon />
            <p style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', margin: '14px 0 6px', letterSpacing: '0.5px' }}>
              Guest Ticket
            </p>
            <p style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '52px', fontWeight: 700, margin: '0 0 4px', lineHeight: 1 }}>
              R400
            </p>
            <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '13px', margin: '0 0 20px' }}>Bring a friend, spouse or business partner.</p>
            <FeatureList items={guestFeatures} />
            <a href={QUICKET_CPT} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', backgroundColor: 'transparent', color: '#0D203B', border: '2px solid #0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', padding: '12px', borderRadius: '4px', textDecoration: 'none', textAlign: 'center', letterSpacing: '0.5px', marginTop: 'auto', boxSizing: 'border-box' }}>
              Book Guest
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}
