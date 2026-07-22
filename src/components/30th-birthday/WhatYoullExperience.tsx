const items = [
  {
    icon: <img src="/images/30th-birthday/icon-growth-chart-black.png" alt="" aria-hidden="true" style={{ height: 72, display: 'block' }} />,
    title: 'WEALTH CREATION INSIGHTS',
    desc: 'Timeless investment principles that continue to work.',
  },
  {
    icon: <img src="/images/30th-birthday/icon-roi-black.png" alt="" aria-hidden="true" style={{ height: 72, display: 'block' }} />,
    title: 'PROPERTY FINANCE STRATEGIES',
    desc: 'Understand how successful investors access funding opportunities.',
  },
  {
    icon: <img src="/images/30th-birthday/icon-guarantee-black.png" alt="" aria-hidden="true" style={{ height: 72, display: 'block' }} />,
    title: 'ASSET PROTECTION',
    desc: 'Discover why proper legal structures matter.',
  },
  {
    icon: <img src="/images/30th-birthday/icon-people-black.png" alt="" aria-hidden="true" style={{ height: 72, display: 'block' }} />,
    title: 'NETWORKING',
    desc: 'Connect with fellow investors and industry professionals.',
  },
  {
    icon: <img src="/images/30th-birthday/icon-handshake-black.png" alt="" aria-hidden="true" style={{ height: 72, display: 'block' }} />,
    title: 'INDUSTRY SERVICE PROVIDERS',
    desc: 'Speak directly with trusted professionals throughout the day.',
  },
  {
    icon: <img src="/images/30th-birthday/icon-celebration-black.png" alt="" aria-hidden="true" style={{ height: 72, display: 'block' }} />,
    title: 'CELEBRATING 30 YEARS',
    desc: 'Be part of one of the biggest milestones in WMC history.',
  },
]

export default function WhatYoullExperience() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(70px, 8vw, 100px) clamp(20px, 5vw, 60px)',
      }}
    >
      <div style={{ maxWidth: '1340px', margin: '0 auto' }}>
        {/* Single horizontal row: heading left, columns right */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'clamp(24px, 4vw, 48px)',
          }}
        >
          {/* Left: heading */}
          <div style={{ flex: '0 0 auto', width: 'clamp(260px, 30%, 360px)' }}>
            <h2
              style={{
                color: '#111111',
                fontFamily: '"Antonio", sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(36px,4.5vw,56px)',
                textTransform: 'uppercase',
                lineHeight: 1.0,
                margin: 0,
              }}
            >
              WHAT YOU'LL EXPERIENCE
            </h2>
            {/* Gold rule */}
            <div
              style={{
                width: '80px',
                height: '3px',
                backgroundColor: '#c89a4f',
                marginTop: '16px',
              }}
            />
          </div>

          {/* Right: 6 equal columns */}
          <div
            style={{
              flex: '1 1 0',
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: '0 clamp(8px, 1.5vw, 20px)',
                  textAlign: 'center',
                  borderLeft: i > 0 ? '1px solid rgba(200,145,22,0.5)' : undefined,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    height: '72px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <p
                  style={{
                    color: '#111111',
                    fontFamily: '"Montserrat", Sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    marginTop: '14px',
                    marginBottom: '0',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </p>

                {/* Desc */}
                <p
                  style={{
                    color: '#666666',
                    fontFamily: '"Poppins", Sans-serif',
                    fontSize: '15px',
                    textAlign: 'center',
                    lineHeight: 1.55,
                    marginTop: '8px',
                    marginBottom: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
