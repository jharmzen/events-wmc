const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="9" fill="none" stroke="#111111" strokeWidth="1.5"/>
    <path d="M5.5 10l3 3 6-6" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const checklistItems = [
  'Looking to build long-term wealth',
  'Interested in property investment',
  'Growing your investment portfolio',
  'A business owner seeking financial freedom',
  'Wanting to learn from experienced investors',
  'Looking to connect with like-minded people',
  'Ready to take your knowledge to the next level',
]

export default function IsThisForYou() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(36px,4vw,56px) clamp(20px,5vw,60px)',
      }}
    >
      <div
        style={{
          maxWidth: 1340,
          margin: '0 auto',
          display: 'flex',
          gap: 'clamp(30px, 5vw, 60px)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* LEFT: content */}
        <div style={{ flex: '0 1 460px', minWidth: 280 }}>
          <h2
            style={{
              color: '#0D203B',
              fontFamily: '"Antonio", sans-serif',
              fontSize: 'clamp(28px,3.5vw,42px)',
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: 1.0,
              margin: 0,
            }}
          >
            IS THIS EVENT FOR YOU?
          </h2>

          {/* Gold decorative rule */}
          <div
            style={{
              width: 60,
              height: 2,
              backgroundColor: '#c89a4f',
              marginTop: 16,
              marginBottom: 20,
            }}
          />

          <p
            style={{
              color: '#555544',
              fontFamily: '"Poppins", Sans-serif',
              fontSize: '13px',
              fontStyle: 'italic',
              margin: '0 0 14px',
            }}
          >
            If you are...
          </p>

          {/* 2-column checklist grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px 24px',
            }}
          >
            {checklistItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                <CheckIcon />
                <span
                  style={{
                    color: '#333333',
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: '13px',
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              color: '#0D203B',
              fontFamily: '"Poppins", Sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              fontStyle: 'italic',
              marginTop: 20,
              marginBottom: 0,
            }}
          >
            ...then this event is for you.
          </p>
        </div>

        {/* RIGHT: audience photo */}
        <div style={{ flex: '1 1 340px', minWidth: 260 }}>
          <img
            src="/images/30th-birthday/photo-audience-smiling.png"
            alt="Attendees smiling and engaging at a Wealth Masters Club event"
            style={{ width: '100%', borderRadius: 6, display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
