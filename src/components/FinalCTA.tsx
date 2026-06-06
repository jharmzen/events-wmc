const QUICKET_DBN = 'https://www.quicket.co.za/events/369575-wealth-property-investment-masterclass-2706-capital-pearls'

export default function FinalCTA() {
  return (
    <div
      className="elementor-element elementor-element-23a1bbb e-flex e-con-boxed e-con e-parent"
      data-id="23a1bbb"
      data-element_type="container"
      style={{
        backgroundImage: 'url(/images/landing-end-4.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="e-con-inner" style={{ alignItems: 'stretch' }}>
        {/* Left: text on dark overlay */}
        <div
          className="elementor-element elementor-element-4f3a9fd4 e-con-full e-flex e-con e-child"
          data-id="4f3a9fd4"
          data-element_type="container"
          style={{
            padding: 'clamp(40px, 6vw, 80px) clamp(24px, 4vw, 40px) clamp(40px, 6vw, 80px) clamp(16px, 3vw, 24px)',
            justifyContent: 'center',
          }}
        >
          <div
            className="elementor-element elementor-element-49dfb46c e-con-full e-flex e-con e-child"
            data-id="49dfb46c"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-2e0b1281 elementor-widget elementor-widget-heading"
              data-id="2e0b1281"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <h2 className="elementor-heading-title elementor-size-default">One Strategic Decision Can Change Your Next 10 Years</h2>
            </div>
            <div
              className="elementor-element elementor-element-9ff8032 elementor-widget elementor-widget-text-editor"
              data-id="9ff8032"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <p>— but only if its structured correctly.</p>
              <p>If you're serious about property, and serious about long-term wealth, this session will give you the strategic clarity you need for your next move.</p>
              <p><strong>The first 20 tickets are available at only R400 per person thanks to Destinata's strategic contribution.<br />Secure your seat before the sponsored allocation is fully claimed.</strong></p>
            </div>
            <div
              className="elementor-element elementor-element-d882e74 elementor-mobile-align-center elementor-widget elementor-widget-button"
              data-id="d882e74"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <a
                className="elementor-button elementor-button-link elementor-size-sm"
                href={QUICKET_DBN}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Secure your seat before the current special ends</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: image shows through background */}
        <div
          className="elementor-element elementor-element-49657ef0 e-con-full e-flex e-con e-child"
          data-id="49657ef0"
          data-element_type="container"
        />
      </div>
    </div>
  )
}
