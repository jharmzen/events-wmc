import { useState } from 'react'

// TODO: Add Quicket/booking URL when available
const BOOKING_URL = '#book'

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
    a: "The day will be hosted by Coert Coetzee, Founder of Wealth Masters Club. You'll also hear from two special guest experts: South Africa's Leading Bond Originator and a Leading Property Attorney. Their identities will remain a surprise until the event.",
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
    a: "Emperors Palace Convention Centre, Kempton Park, Johannesburg. Saturday, 15 August 2026 — 09:00 to 17:00.",
  },
  {
    q: 'Is parking available?',
    a: "Yes. Secure parking is available at Emperors Palace. At the entrance, notify them that you will be going to the conference centre.",
  },
]

export default function FAQs() {
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
          <span style={{ flex: 1, maxWidth: '80px', height: '1px', backgroundColor: '#c89a4f', display: 'block' }} />
          <span
            style={{
              color: '#c89a4f',
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
          <span style={{ flex: 1, maxWidth: '80px', height: '1px', backgroundColor: '#c89a4f', display: 'block' }} />
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
                  border: isOpen ? '1px solid #c89a4f' : '1px solid rgba(255,255,255,0.12)',
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
                      backgroundColor: isOpen ? '#c89a4f' : '#4782B5',
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
                      color: isOpen ? '#c89a4f' : '#FFFFFF',
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
            href={BOOKING_URL}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(to right, #c89a4f, #feea9a, #c89a4f)',
              color: '#0D203B',
              fontFamily: '"Antonio", sans-serif',
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              padding: '16px 60px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Join Now
          </a>
        </div>

      </div>
    </section>
  )
}
