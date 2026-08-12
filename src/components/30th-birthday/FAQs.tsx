import { useState } from 'react'

export default function FAQs({
  accentColor = '#c89a4f',
  accentColorLight = '#feea9a',
  bookingUrl = 'https://www.quicket.co.za/events/385051-wealth-property-investment-masterclass-1508-emperors-palace/',
  eventLocation = 'Emperors Palace Convention Centre, Kempton Park, Johannesburg',
  eventDate = 'Saturday, 15 August 2026',
  parkingVenue = 'Emperors Palace',
  speakersAnswer = "The day will be hosted by Coert Coetzee, Founder of Wealth Masters Club. He will be joined by Luther Grobler, Regional Manager at BetterBond, and Hanli-Mari Durow, Attorney, Conveyancer and Notary at Jacobs Robbertse Attorneys. Together, they will share practical insights into property investment, finance and property law, giving you valuable knowledge to invest with greater confidence and protect your property portfolio.",
}: {
  accentColor?: string
  accentColorLight?: string
  bookingUrl?: string
  eventLocation?: string
  eventDate?: string
  parkingVenue?: string
  speakersAnswer?: string
} = {}) {
  const faqs = [
    {
      q: 'Who can attend this event?',
      a: "Everyone is welcome. Whether you're a Wealth Masters Club member or attending for the first time, this event is designed for anyone who wants to create, protect and grow long-term wealth.",
    },
    {
      q: 'What is included in my ticket?',
      a: 'Your ticket includes:',
      list: [
        'Full-day event (09:00–17:00)',
        'Arrival tea, coffee & snacks',
        'Mid-morning refreshments',
        'Buffet lunch',
        'Afternoon refreshments',
        'Access to all speaker sessions',
        'Networking with investors and industry professionals',
      ],
    },
    {
      q: 'Who will be speaking?',
      a: speakersAnswer,
    },
    {
      q: 'What will I learn?',
      a: "You'll discover proven wealth creation strategies, how successful investors access funding, ways to protect your assets through the correct legal structures, and practical insights gained from over 30 years of property investment experience.",
    },
    {
      q: 'Can I meet the speakers and service providers?',
      a: "Yes. Throughout the day you'll have opportunities to network with fellow investors, speak to our trusted industry partners, and engage directly with the speakers during breaks.",
    },
    {
      q: 'Is this event suitable for beginners?',
      a: "Absolutely. Whether you're buying your first investment property or already have an established portfolio, you'll gain valuable strategies and practical knowledge you can apply immediately.",
    },
    {
      q: 'Where is the event taking place?',
      a: `${eventLocation}. ${eventDate} — 09:00 to 17:00.`,
    },
    {
      q: 'Is parking available?',
      a: `Yes. Secure parking is available at ${parkingVenue}. At the entrance, notify them that you will be going to the conference centre.`,
    },
  ]

  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faqs"
      style={{
        backgroundColor: '#0D203B',
        padding: 'clamp(50px, 7vw, 80px) clamp(20px, 5vw, 60px)',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* ——— FAQS ——— eyebrow with horizontal rules */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '14px',
          }}
        >
          <span style={{ flex: 1, maxWidth: '80px', height: '1px', backgroundColor: accentColor, display: 'block' }} />
          <span
            style={{
              color: accentColor,
              fontFamily: '"Montserrat", Sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '3px',
              whiteSpace: 'nowrap',
            }}
          >
            FAQs
          </span>
          <span style={{ flex: 1, maxWidth: '80px', height: '1px', backgroundColor: accentColor, display: 'block' }} />
        </div>

        {/* Main heading */}
        <h2
          style={{
            color: '#FFFFFF',
            fontFamily: '"Antonio", sans-serif',
            fontSize: 'clamp(28px,3.5vw,42px)',
            fontWeight: 600,
            textAlign: 'center',
            margin: '0 0 40px',
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Accordion items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  border: isOpen ? `1px solid ${accentColor}` : '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Row header button */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 22px',
                    // open → warm cream; closed → dark navy row
                    background: isOpen ? '#fdf6e3' : 'rgba(255,255,255,0.04)',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.2s',
                  }}
                >
                  {/* Numbered circle */}
                  <div
                    style={{
                      flexShrink: 0,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      // open → gold; closed → steel blue
                      backgroundColor: isOpen ? accentColor : '#4782B5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <span
                      style={{
                        color: '#FFFFFF',
                        fontFamily: '"Montserrat", Sans-serif',
                        fontSize: '14px',
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Question text */}
                  <span
                    style={{
                      flex: 1,
                      // open → dark navy; closed → white
                      color: isOpen ? '#0D203B' : '#FFFFFF',
                      fontFamily: '"Montserrat", Sans-serif',
                      fontSize: 'clamp(14px, 1.5vw, 16px)',
                      fontWeight: 700,
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      // open → gold; closed → white
                      color: isOpen ? accentColor : '#FFFFFF',
                    }}
                  >
                    <path
                      d="M3 6l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Answer body — only shown when open, on cream bg */}
                {isOpen && (
                  <div
                    style={{
                      backgroundColor: '#fdf6e3',
                      padding: '4px 22px 22px 70px',
                    }}
                  >
                    {faq.a && (
                      <p
                        style={{
                          color: '#555555',
                          fontFamily: '"Poppins", Sans-serif',
                          fontSize: '14px',
                          margin: 0,
                          lineHeight: 1.75,
                        }}
                      >
                        {faq.a}
                      </p>
                    )}
                    {faq.list && (
                      <div
                        style={{
                          color: '#555555',
                          fontFamily: '"Poppins", Sans-serif',
                          fontSize: '14px',
                          lineHeight: 1.75,
                        }}
                      >
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {faq.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {!faq.a && !faq.list && (
                      <p
                        style={{
                          color: '#888888',
                          fontFamily: '"Poppins", Sans-serif',
                          fontSize: '14px',
                          margin: 0,
                          fontStyle: 'italic',
                        }}
                      >
                        {/* TODO: Add answer when provided */}
                        Answer coming soon.
                      </p>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* JOIN NOW CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="#book"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: `linear-gradient(to right, ${accentColor}, ${accentColorLight}, ${accentColor})`,
              color: '#0D203B',
              fontFamily: '"Antonio", sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '18px 60px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            JOIN NOW
          </a>
        </div>

      </div>
    </section>
  )
}
