const checkItems = [
  'Why property remains one of the most reliable long-term wealth-building assets',
  'The demand forces that continue to drive property value',
  'Why some investors scale successfully while others stay stuck',
  'How to move from uncertainty to strategic decision-making',
  'The difference between buying property and building a structured portfolio',
]

export default function DestinataBanner() {
  return (
    <div style={{ backgroundColor: '#0D203B', padding: '60px 0' }}>
      <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 clamp(15px, 4vw, 60px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
        {/* Left: text */}
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '38px', fontWeight: 900, color: '#C89116', textTransform: 'uppercase', margin: '0 0 20px', lineHeight: 1.1 }}>
            THE SHIFT IN THINKING BEGINS HERE
          </p>
          <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, color: '#FFFFFF', margin: '0 0 16px' }}>
            In this live online strategy session, you'll discover:
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
            {checkItems.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                <span style={{ color: '#C89116', fontWeight: 700, fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#FFFFFF', lineHeight: '1.5' }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#FFFFFF', margin: '0 0 6px' }}>
            This is not about more information.
          </p>
          <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, fontStyle: 'italic', color: '#FFFFFF', margin: 0 }}>
            It's about gaining clarity and learning to see property through a strategic lens.
          </p>
        </div>
        {/* Right: image */}
        <div style={{ flex: '1 1 280px', minWidth: 0 }}>
          <img
            loading="lazy"
            decoding="async"
            src="/images/webinar-group-collaboration.png"
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
          />
        </div>
      </div>
    </div>
  )
}
