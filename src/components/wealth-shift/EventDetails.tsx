const DiamondIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
    <path fill="none" stroke="#5B9EC9" strokeWidth="1.5" strokeLinejoin="round" d="M7 2h10l5 7-10 13L2 9z" />
    <path fill="none" stroke="#5B9EC9" strokeWidth="1.5" d="M2 9h20" />
    <path fill="none" stroke="#5B9EC9" strokeWidth="1.5" d="M7 2l5 7 5-7" />
  </svg>
)

const walkAwayItems = [
  { label: 'Build With Strategy First', desc: 'Understand why structure and planning matter before choosing any property.' },
  { label: 'Think Like an Investor', desc: 'Shift from emotional decisions to strategic, long-term thinking.' },
  { label: 'See the Bigger Picture', desc: 'Learn how individual properties fit into a broader wealth strategy.' },
  { label: 'Avoid Costly Mistakes', desc: 'Identify the common traps that cause portfolios to stall.' },
  { label: 'Understand What Actually Drives Wealth', desc: 'Gain insight into the forces that create long-term growth and sustainability.' },
]

const sectionHeadingStyle = {
  fontFamily: '"Poppins", Sans-serif',
  fontSize: 'clamp(20px, 2.5vw, 38px)',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  color: '#1D2B42',
  lineHeight: 1.2,
  margin: '0 0 10px',
}

const detailRowStyle = {
  fontFamily: '"Poppins", Sans-serif',
  fontSize: '15px',
  color: '#000000',
  lineHeight: 1.6,
  margin: '0 0 2px',
}

export default function EventDetails() {
  return (
    <>
      {/* Section anchor */}
      <div
        className="elementor-element elementor-element-4633b727 e-flex e-con-boxed e-con e-parent"
        data-id="4633b727"
        data-element_type="container"
        id="details"
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-589f36cc elementor-widget elementor-widget-heading" data-id="589f36cc" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">SECURE YOUR SPOT</h2>
          </div>
        </div>
      </div>

      {/* Two-column: event info + walk away with */}
      <div
        className="elementor-element elementor-element-5220fde4 e-flex e-con-boxed e-con e-parent"
        data-id="5220fde4"
        data-element_type="container"
      >
        <div className="e-con-inner">
          {/* Left column — EVENT INFORMATION — no icons, plain text */}
          <div className="elementor-element elementor-element-32ac998 e-con-full e-flex e-con e-child" data-id="32ac998" data-element_type="container">
            <div className="elementor-element elementor-element-52650e2b e-con-full e-flex e-con e-child" data-id="52650e2b" data-element_type="container">

              <div className="elementor-element elementor-element-43cd0bc5 elementor-widget elementor-widget-heading" data-id="43cd0bc5" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default" style={sectionHeadingStyle}>EVENT INFORMATION</h2>
              </div>
              <p style={{ ...detailRowStyle, marginBottom: '12px' }}>Everything you need to know</p>

              <div className="elementor-element elementor-element-6f01ebc8 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6f01ebc8" data-element_type="widget" data-widget_type="icon-list.default">
                <table style={{ borderCollapse: 'collapse', marginBottom: '20px' }}>
                  <tbody>
                    {[
                      ['Date:', 'Wednesday, 17 June 2026'],
                      ['Time:', '10:00 AM'],
                      ['Duration:', '3–4 Hours'],
                      ['Investment:', 'R199 per person'],
                      ['Presented by:', 'Zirk Coetzee'],
                    ].map(([label, value], i) => (
                      <tr key={i}>
                        <td style={{ ...detailRowStyle, fontWeight: 600, paddingRight: '12px', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{label}</td>
                        <td style={{ ...detailRowStyle, verticalAlign: 'top' }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="elementor-element elementor-element-19a65e13 elementor-widget elementor-widget-heading" data-id="19a65e13" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default" style={sectionHeadingStyle}>CONTACT US:</h2>
              </div>
              <p style={{ ...detailRowStyle, marginBottom: '8px' }}>If you have any queries, please do not hesitate to contact us</p>
              <p style={{ ...detailRowStyle, marginBottom: '2px' }}>(+27)21 851 2730</p>
              <p style={{ ...detailRowStyle, marginBottom: '20px' }}>services@WealthMastersClub.com</p>

            </div>
            <div className="elementor-element elementor-element-2c027be0 elementor-mobile-align-center elementor-align-left elementor-widget elementor-widget-button" data-id="2c027be0" data-element_type="widget" data-widget_type="button.default">
              {/* TODO: Add Quicket booking URL for Wealth Shift Webinar 17 June 2026 */}
              <a className="elementor-button elementor-button-link elementor-size-sm" href="https://www.quicket.co.za/events/380454-property-investment-wealth-webinar-1706#/" target="_blank" rel="noopener noreferrer">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">BOOK NOW</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right column — WHAT YOU'LL WALK AWAY WITH — light blue diamond icons */}
          <div className="elementor-element elementor-element-6d49b9cf e-con-full e-flex e-con e-child" data-id="6d49b9cf" data-element_type="container">
            <div className="elementor-element elementor-element-271eb6b9 e-con-full e-flex e-con e-child" data-id="271eb6b9" data-element_type="container">
              <div className="elementor-element elementor-element-4c3ce89b elementor-widget elementor-widget-heading" data-id="4c3ce89b" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default" style={sectionHeadingStyle}>WHAT YOU'LL WALK AWAY WITH</h2>
              </div>
              <p style={{ ...detailRowStyle, marginBottom: '10px' }}>In this live session, you'll gain clarity on:</p>
            </div>
            <div className="elementor-element elementor-element-1d763b50 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1d763b50" data-element_type="widget" data-widget_type="icon-list.default">
              <ul className="elementor-icon-list-items" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {walkAwayItems.map((item, i) => (
                  <li key={i} className="elementor-icon-list-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '12px' }}>
                    <span className="elementor-icon-list-icon" style={{ marginTop: '2px' }}><DiamondIcon /></span>
                    <span className="elementor-icon-list-text" style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', color: '#000000', lineHeight: 1.5 }}>
                      <strong style={{ fontWeight: 700, display: 'block' }}>{item.label}</strong>
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
