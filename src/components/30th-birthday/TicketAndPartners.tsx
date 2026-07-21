const ticketItems = [
  {
    label: 'ARRIVAL TEA & COFFEE',
    icon: <img src="/images/30th-birthday/icon-coffee-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'MORNING REFRESHMENTS',
    icon: <img src="/images/30th-birthday/icon-breakfast-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'BUFFET LUNCH',
    icon: <img src="/images/30th-birthday/icon-buffet-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'AFTERNOON REFRESHMENTS',
    icon: <img src="/images/30th-birthday/icon-snacks-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'FULL-DAY WEALTH PROGRAMME',
    icon: <img src="/images/30th-birthday/icon-presentation-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'NETWORKING OPPORTUNITIES',
    icon: <img src="/images/30th-birthday/icon-members-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'INDUSTRY SERVICE PROVIDER ACCESS',
    icon: <img src="/images/30th-birthday/icon-certified-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
  {
    label: 'A DAY OF VALUE & INSPIRATION',
    icon: <img src="/images/30th-birthday/icon-gift-brown.png" alt="" aria-hidden="true" style={{ height: 44, display: 'block' }} />,
  },
];

export default function TicketAndPartners() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        padding: 'clamp(40px,5vw,60px) clamp(20px,5vw,60px)',
      }}
    >
      <div
        style={{
          maxWidth: 1340,
          margin: '0 auto',
          display: 'flex',
          gap: 0,
        }}
      >
        {/* LEFT HALF — YOUR TICKET INCLUDES */}
        <div
          style={{
            flex: 1,
            paddingRight: 'clamp(30px,4vw,60px)',
            borderRight: '1px solid #c89a4f',
          }}
        >
          <h2
            style={{
              fontFamily: '"Antonio", sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px,3.5vw,42px)',
              color: '#111111',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: 28,
              marginTop: 0,
            }}
          >
            YOUR TICKET INCLUDES
          </h2>

          {/* 4×2 icon grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, auto)',
            }}
          >
            {ticketItems.map((item, index) => {
              const col = index % 4;
              const row = Math.floor(index / 4);
              return (
                <div
                  key={item.label}
                  style={{
                    padding: '20px 12px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                    borderLeft: col > 0 ? '1px solid #c89a4f' : undefined,
                    borderTop: row > 0 ? '1px solid #c89a4f' : undefined,
                  }}
                >
                  {item.icon}
                  <span
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#111111',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      letterSpacing: '0.3px',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT HALF — MEET OUR TRUSTED INDUSTRY PARTNERS */}
        <div
          style={{
            flex: 1,
            paddingLeft: 'clamp(30px,4vw,60px)',
          }}
        >
          <h2
            style={{
              fontFamily: '"Antonio", sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px,3.5vw,42px)',
              color: '#111111',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            MEET OUR TRUSTED INDUSTRY PARTNERS
          </h2>

          {/* Gold rule */}
          <div
            style={{
              width: 60,
              height: 3,
              backgroundColor: '#c89a4f',
              margin: '16px 0 20px',
            }}
          />

          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 14,
              color: '#555555',
              lineHeight: 1.75,
              marginBottom: 28,
              marginTop: 0,
            }}
          >
            Throughout the day, you'll have the opportunity to meet and engage directly with Wealth Masters Club's trusted network of industry professionals. Whether you need guidance on finance, legal structuring, accounting, property investment or wealth creation, our expert partners will be available to answer your questions and share valuable insights.
          </p>

          {/* Partner logos — TTS spans both rows in centre column, matching PDF */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'auto auto',
              gap: '20px 16px',
              alignItems: 'center',
              justifyItems: 'start',
            }}
          >
            {/* Row 1 col 1 */}
            <img src="/images/30th-birthday/logo-wmc-color.png" alt="Wealth Masters Club"
              style={{ gridRow: 1, gridColumn: 1, maxHeight: 64, maxWidth: 150, objectFit: 'contain' }} />
            {/* Col 2 — spans both rows */}
            <img src="/images/30th-birthday/logo-treasury-trust-services.png" alt="Treasury Trust Services"
              style={{ gridRow: '1 / 3', gridColumn: 2, maxHeight: 100, maxWidth: 150, objectFit: 'contain', alignSelf: 'center' }} />
            {/* Row 1 col 3 */}
            <img src="/images/30th-birthday/logo-destinata.png" alt="Destinata"
              style={{ gridRow: 1, gridColumn: 3, maxHeight: 40, maxWidth: 150, objectFit: 'contain' }} />
            {/* Row 2 col 1 */}
            <img src="/images/30th-birthday/logo-jacobs-robbertse.png" alt="Jacobs & Robbertse Attorneys"
              style={{ gridRow: 2, gridColumn: 1, maxHeight: 60, maxWidth: 150, objectFit: 'contain' }} />
            {/* Row 2 col 3 */}
            <img src="/images/30th-birthday/logo-betterbond.png" alt="BetterBond"
              style={{ gridRow: 2, gridColumn: 3, maxHeight: 40, maxWidth: 150, objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
