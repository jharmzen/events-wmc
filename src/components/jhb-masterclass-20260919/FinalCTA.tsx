const QUICKET_URL = 'https://www.quicket.co.za/events/392089-wealth-property-half-day-masterclass-1909-emperors-palace/'

export default function FinalCTA() {
  return (
    <div
      className="elementor-element elementor-element-23a1bbb e-flex e-con-boxed e-con e-parent"
      data-id="23a1bbb"
      data-element_type="container"
      style={{
        backgroundImage: 'url(/images/jhb-masterclass-20260919/secure-your-seat.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'transparent',
      }}
    >
      <div className="e-con-inner" style={{ alignItems: 'stretch' }}>
        {/* Left — cream panel with dark navy text; gradient fades to transparent so photo shows on right */}
        <div
          className="elementor-element elementor-element-4f3a9fd4 e-con-full e-flex e-con e-child"
          data-id="4f3a9fd4"
          data-element_type="container"
          style={{
            background: 'linear-gradient(to right, #F5EFE0 0%, #F5EFE0 80%, rgba(245,239,224,0) 100%)',
            justifyContent: 'center',
            gap: '16px',
            padding: 'clamp(40px, 6vw, 80px) clamp(48px, 5vw, 64px) clamp(40px, 6vw, 80px) clamp(16px, 3vw, 32px)',
          }}
        >
          {/* Gold eyebrow */}
          <p style={{ color: '#C89116', fontFamily: '"Montserrat", sans-serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
            Wealth &amp; Property Investment Masterclass
          </p>

          {/* H2 — dark navy, "10 Years" in gold */}
          <h2 style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(26px, 3.2vw, 44px)', fontWeight: 700, color: '#0D203B', textTransform: 'uppercase', lineHeight: 1.1, margin: 0 }}>
            One Property Decision Can Shape Your Next <span style={{ color: '#C89116' }}>10 Years</span>
          </h2>

          {/* Gold divider */}
          <div style={{ width: '48px', height: '2px', backgroundColor: '#C89116', flexShrink: 0 }} />

          {/* Body */}
          <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: '#333333', margin: 0, lineHeight: 1.65 }}>
            The right property strategy can create lasting wealth.<br />
            The wrong structure can cost you time, money and opportunity.
          </p>
          <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '14px', color: '#333333', margin: 0, lineHeight: 1.65 }}>
            Join <span style={{ color: '#C89116', fontWeight: 600 }}>Coert Coetzee</span> at Emperors Palace and learn how to build with strategy, structure and long-term growth in mind.
          </p>

          {/* Pricing row */}
          <div style={{ display: 'flex', border: '1px solid #0D203B', borderRadius: '4px', overflow: 'hidden' }}>
            {[
              { price: 'R800', label: 'per person' },
              { price: 'R1,200', label: 'for 2 people' },
              { price: 'R1,600', label: 'for 3 people' },
            ].map((item, i, arr) => (
              <div key={i} style={{ flex: 1, padding: '14px 8px', textAlign: 'center', borderRight: i < arr.length - 1 ? '1px solid #0D203B' : 'none' }}>
                <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '22px', fontWeight: 700, color: '#0D203B', margin: 0, lineHeight: 1 }}>{item.price}</p>
                <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '11px', color: '#555555', margin: '4px 0 0' }}>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Platinum pricing — centred with gold rules either side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#C89116' }} />
            <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: '13px', fontWeight: 700, color: '#0D203B', margin: 0, whiteSpace: 'nowrap' }}>
              Platinum Members R400
            </p>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#C89116' }} />
          </div>

          {/* CTA button — dark navy, full-width, gold arrow */}
          <a
            href={QUICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              backgroundColor: '#0D203B',
              color: '#ffffff',
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              padding: '16px 28px',
              borderRadius: '3px',
              textDecoration: 'none',
              border: '1px solid #C89116',
            }}
          >
            Secure Your Seat <span style={{ color: '#C89116', fontSize: '18px' }}>→</span>
          </a>

          <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: '12px', color: '#666666', margin: 0 }}>
            Your City . Your Chance . Your Future
          </p>
        </div>

        {/* Right — background image shows through */}
        <div
          className="elementor-element elementor-element-49657ef0 e-con-full e-flex e-con e-child"
          data-id="49657ef0"
          data-element_type="container"
        />
      </div>
    </div>
  )
}
