import { useState } from 'react'

const QUICKET_URL = 'https://www.quicket.co.za/events/392089-wealth-property-half-day-masterclass-1909-emperors-palace/'

const faqs = [
  {
    q: 'Is this masterclass suitable for beginners?',
    a: "Absolutely. Whether you're buying your first investment property or already own property, the masterclass is designed to provide practical strategies you can apply at your current stage.",
  },
  {
    q: 'What will I learn?',
    a: "You'll learn practical property investment principles, wealth structuring strategies, financing approaches, asset protection concepts, and how experienced investors evaluate opportunities before they buy.",
  },
  {
    q: 'What is included with my ticket?',
    a: null,
    list: [
      'The half-day masterclass',
      'Tea, coffee and mid-morning refreshments',
      'Networking opportunities',
      'Access to Wealth Officers, Trust Lawyers and Accountants',
    ],
  },
  {
    q: 'Do I need to own property already?',
    a: "No. The masterclass is suitable whether you're looking to purchase your first investment property or expand an existing portfolio.",
  },
  {
    q: 'Is there a money-back guarantee?',
    a: 'Yes. If the masterclass does not meet your expectations, we offer a 30-Day Money-Back Guarantee.',
  },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '60px 20px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <h2 style={{ color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '32px', fontWeight: 700, textAlign: 'center', margin: '0 0 40px' }}>
          FAQs
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  border: isOpen ? '1px solid #C89116' : '1px solid #e8e8e8',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Header */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '18px 20px',
                    background: isOpen ? '#fdf9f0' : '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background 0.2s',
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? '#C89116' : '#4782B5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s',
                  }}>
                    <span style={{ color: '#ffffff', fontFamily: '"Montserrat", Sans-serif', fontSize: '13px', fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  <span style={{ flex: 1, color: '#0D203B', fontFamily: '"Montserrat", Sans-serif', fontSize: '15px', fontWeight: 700, lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#C89116' : '#888888',
                    }}
                  >
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Body */}
                {isOpen && (
                  <div style={{ padding: '0 20px 20px 62px' }}>
                    {faq.a && (
                      <p style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '14px', margin: 0, lineHeight: 1.7 }}>
                        {faq.a}
                      </p>
                    )}
                    {faq.list && (
                      <div style={{ color: '#555555', fontFamily: '"Poppins", Sans-serif', fontSize: '14px', lineHeight: 1.7 }}>
                        <p style={{ margin: '0 0 6px' }}>Your ticket includes:</p>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {faq.list.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href={QUICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#C89116', color: '#ffffff', fontFamily: '"Montserrat", Sans-serif', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', padding: '14px 40px', borderRadius: '4px', textDecoration: 'none', letterSpacing: '0.5px' }}
          >
            Join Now!
          </a>
        </div>

      </div>
    </div>
  )
}
