const GrowthIcon = () => (
  <svg width="56" height="56" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#c89a4f" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.37l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z" />
  </svg>
)

const HomeIcon = () => (
  <svg width="56" height="56" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#c89a4f" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
  </svg>
)

const PeopleIcon = () => (
  <svg width="56" height="56" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#c89a4f" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
  </svg>
)

export default function HistoricMilestone() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(50px, 6vw, 70px) clamp(20px, 5vw, 60px)',
      }}
    >
      <div style={{ maxWidth: 1340, margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(30px, 5vw, 60px)',
            alignItems: 'center',
          }}
        >

          {/* LEFT: heading + gold rule + body */}
          <div style={{ flex: '0 1 35%', minWidth: 260 }}>
            <h2
              style={{
                color: '#111111',
                fontFamily: '"Antonio", sans-serif',
                fontSize: 'clamp(28px,3.5vw,42px)',
                fontWeight: 600,
                textTransform: 'uppercase',
                lineHeight: 1.05,
                letterSpacing: '-0.5px',
                margin: '0 0 16px',
              }}
            >
              CELEBRATING<br />A HISTORIC MILESTONE
            </h2>

            {/* Gold rule */}
            <div
              style={{
                width: 60,
                height: 3,
                backgroundColor: '#c89a4f',
                marginBottom: 20,
              }}
            />

            <p
              style={{
                color: '#111111',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 15,
                fontWeight: 700,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Three decades of vision, commitment and consistent action.
              Built one property at a time.
            </p>
          </div>

          {/* RIGHT: 4 stat columns */}
          <div
            style={{
              flex: '1 1 0',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 0,
            }}
          >

            {/* Stat 1 — 30 Years */}
            <div
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '0 16px',
              }}
            >
              <div
                style={{
                  color: '#c89a4f',
                  fontFamily: '"Antonio", sans-serif',
                  fontSize: 72,
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                30
              </div>
              <p
                style={{
                  color: '#111111',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 14,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  margin: '4px 0 8px',
                }}
              >
                YEARS
              </p>
              <p
                style={{
                  color: '#666666',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 13,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Helping South Africans build wealth through residential property
              </p>
            </div>

            {/* Stat 2 — R10.4 Billion */}
            <div
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '0 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                <GrowthIcon />
              </div>
              <p
                style={{
                  color: '#111111',
                  fontFamily: '"Antonio", sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  margin: '8px 0',
                }}
              >
                R10.4<br />BILLION
              </p>
              <p
                style={{
                  color: '#666666',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 13,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Residential property portfolio built by members
              </p>
            </div>

            {/* Stat 3 — Thousands of properties */}
            <div
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '0 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                <HomeIcon />
              </div>
              <p
                style={{
                  color: '#111111',
                  fontFamily: '"Antonio", sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  margin: '8px 0',
                }}
              >
                THOUSANDS
              </p>
              <p
                style={{
                  color: '#666666',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 13,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Investment properties acquired
              </p>
            </div>

            {/* Stat 4 — Thousands of families */}
            <div
              style={{
                flex: 1,
                textAlign: 'center',
                padding: '0 16px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0 }}>
                <PeopleIcon />
              </div>
              <p
                style={{
                  color: '#111111',
                  fontFamily: '"Antonio", sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  lineHeight: 1.2,
                  margin: '8px 0',
                }}
              >
                THOUSANDS
              </p>
              <p
                style={{
                  color: '#666666',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 13,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Families creating long-term financial security
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
