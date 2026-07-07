export default function FinalCTA() {
  return (
    <div
      className="elementor-element elementor-element-23a1bbb e-flex e-con-boxed e-con e-parent"
      data-id="23a1bbb"
      data-element_type="container"
      style={{
        backgroundImage: 'url(/images/webinar-property-exterior.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
      }}
    >
      {/* Frosted card centered over the image */}
      <div style={{
        background: 'rgba(255, 255, 255, 0.82)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '20px',
        padding: 'clamp(30px, 5vw, 60px) clamp(24px, 5vw, 70px)',
        maxWidth: '700px',
        width: '100%',
        textAlign: 'center',
      }}>
        <div
          className="elementor-element elementor-element-2e0b1281 elementor-widget elementor-widget-heading"
          data-id="2e0b1281"
          data-element_type="widget"
          data-widget_type="heading.default"
        >
          <h2
            className="elementor-heading-title elementor-size-default"
            style={{ fontFamily: '"Poppins", Sans-serif', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#1D2B42', textTransform: 'none', lineHeight: 1.2, margin: '0 0 16px' }}
          >
            One decision can shape<br /><strong style={{ fontWeight: 900, textTransform: 'uppercase' }}>YOUR NEXT 10 YEARS.</strong>
          </h2>
        </div>
        <div
          className="elementor-element elementor-element-9ff8032 elementor-widget elementor-widget-text-editor"
          data-id="9ff8032"
          data-element_type="widget"
          data-widget_type="text-editor.default"
          style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, color: '#4B5563', margin: '0 0 28px' }}
        >
          <p style={{ margin: 0 }}>Make sure it's built on the right strategy.</p>
        </div>
        <div
          className="elementor-element elementor-element-d882e74 elementor-mobile-align-center elementor-widget elementor-widget-button"
          data-id="d882e74"
          data-element_type="widget"
          data-widget_type="button.default"
        >
          {/* TODO: Add Quicket/booking URL for Wealth Shift Webinar 8 July 2026 */}
          <span
            className="elementor-button elementor-button-link elementor-size-sm"
            style={{ display: 'inline-block', backgroundColor: '#1D2B42', color: '#C89116', border: '2px solid #C89116', fontFamily: '"Montserrat", Sans-serif', fontWeight: 700, fontSize: '15px', letterSpacing: '0.12em', textTransform: 'uppercase', borderRadius: '30px', padding: '14px 40px', cursor: 'default', pointerEvents: 'none' }}
          >
            <span className="elementor-button-content-wrapper">
              <span className="elementor-button-text">SOLD OUT</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
