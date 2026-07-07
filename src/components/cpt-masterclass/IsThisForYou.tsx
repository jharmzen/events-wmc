const audience = [
  'First-time investors wanting to avoid costly mistakes.',
  'Property investors looking to grow and structure their portfolios more effectively.',
  'Business owners and professionals wanting to protect their assets and build long-term wealth.',
  'Families looking to create financial security and generational wealth.',
  'Anyone serious about building wealth through smarter property investment.',
]

export default function IsThisForYou() {
  return (
    <div style={{ backgroundColor: '#0D203B', padding: '60px 20px', textAlign: 'center' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#C89116', fontFamily: '"Montserrat", Sans-serif', fontSize: '32px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 24px', letterSpacing: '0.5px' }}>
          Is This Masterclass Right For You?
        </h2>
        <p style={{ color: '#FFFFFF', fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.7, margin: '0 0 8px', letterSpacing: '0.03em' }}>
          Whether you're investing for the first time or growing an existing portfolio,<br />
          this masterclass will equip you with practical strategies to<br />
          help you invest with greater confidence.
        </p>
        <p style={{ color: '#FFFFFF', fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: 1.7, margin: '0 0 32px' }}>
          Designed for:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {audience.map((item, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 calc(33.333% - 12px)',
                minWidth: '220px',
                backgroundColor: 'rgba(255,255,255,0.10)',
                borderRadius: '8px',
                padding: '24px 20px',
                textAlign: 'center',
              }}
            >
              <p style={{ color: '#FFFFFF', fontFamily: '"Poppins", Sans-serif', fontSize: '14px', fontWeight: 400, lineHeight: 1.6, margin: 0 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
