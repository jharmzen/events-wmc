const ArrowSVG = () => (
  <svg viewBox="0 0 130 80" xmlns="http://www.w3.org/2000/svg" style={{ width: 'clamp(80px, 9vw, 130px)', height: 'auto', flexShrink: 0 }}>
    {/* Five solid chevrons, opacity 0.20→1.0 left-to-right matching PDF spec */}
    <polygon points="0,5 24,40 0,75 14,75 38,40 14,5"       fill="#C89116" opacity="0.20"/>
    <polygon points="23,5 47,40 23,75 37,75 61,40 37,5"     fill="#C89116" opacity="0.43"/>
    <polygon points="46,5 70,40 46,75 60,75 84,40 60,5"     fill="#C89116" opacity="0.64"/>
    <polygon points="69,5 93,40 69,75 83,75 107,40 83,5"    fill="#C89116" opacity="0.82"/>
    <polygon points="92,5 116,40 92,75 106,75 130,40 106,5" fill="#C89116" opacity="1.00"/>
  </svg>
)

const boxStyle: import('react').CSSProperties = {
  backgroundColor: '#3B5F80',
  borderRadius: '8px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  flex: '0 0 auto',
  width: 'clamp(200px, 36%, 420px)',
}

export default function WalkAwayWith() {
  return (
    <div
      className="elementor-element elementor-element-57ce5658 e-flex e-con-boxed e-con e-parent e-lazyloaded"
      data-id="57ce5658"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-2d2cd815 e-con-full e-flex e-con e-child" data-id="2d2cd815" data-element_type="container">

          {/* Section heading */}
          <div className="elementor-element elementor-element-7855225 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="7855225" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">THE QUESTION THAT CHANGES EVERYTHING</h2>
          </div>

          {/* Two boxes + arrow row */}
          <div
            className="elementor-element elementor-element-633c8db8 e-con-full e-flex e-con e-child"
            data-id="633c8db8"
            data-element_type="container"
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '0', width: '100%' }}
          >
            {/* Left box */}
            <div
              className="elementor-element elementor-element-3590e4b3 e-con-full e-flex e-con e-child"
              data-id="3590e4b3"
              data-element_type="container"
              style={boxStyle}
            >
              <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#FFFFFF', margin: '0 0 6px' }}>Most investors ask:</p>
              <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>"What property should I buy?"</p>
            </div>

            {/* Arrow */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 8px', flexShrink: 0 }}>
              <ArrowSVG />
            </div>

            {/* Right box */}
            <div
              className="elementor-element elementor-element-ce16f2a e-con-full e-flex e-con e-child"
              data-id="ce16f2a"
              data-element_type="container"
              style={boxStyle}
            >
              <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '15px', fontWeight: 400, color: '#FFFFFF', margin: '0 0 6px' }}>Experienced investors ask:</p>
              <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>"What strategy should I follow?"</p>
            </div>
          </div>

          {/* Below-box text */}
          <div className="elementor-element elementor-element-39c74f19 elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="39c74f19" data-element_type="widget" data-widget_type="text-editor.default" style={{ textAlign: 'center', width: '100%' }}>
            <p><strong>That single shift changes everything.</strong><br />Because once your strategy is clear, the right opportunities become easier to identify.</p>
          </div>

          {/* CTA button */}
          <div className="elementor-element elementor-element-22aed652 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="22aed652" data-element_type="widget" data-widget_type="button.default">
            {/* TODO: Add Quicket/booking URL for Wealth Shift Webinar 8 July 2026 */}
            <span className="elementor-button elementor-button-link elementor-size-sm" style={{ display: 'inline-block', backgroundColor: '#1D2B42', color: '#C89116', border: '2px solid #C89116', fontFamily: '"Montserrat", Sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '30px', padding: '14px 40px', cursor: 'default', pointerEvents: 'none' }}>
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">SOLD OUT</span>
              </span>
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
