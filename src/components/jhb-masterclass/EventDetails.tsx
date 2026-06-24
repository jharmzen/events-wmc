const QUICKET_JHB = 'https://www.quicket.co.za/events/377079-wealth-property-investment-masterclass-0407-emperors-palace#/'

const DiamondIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" stroke="#C89116" strokeWidth="1.5" strokeLinejoin="round" d="M7 2h10l5 7-10 13L2 9z" />
    <path fill="none" stroke="#C89116" strokeWidth="1.5" d="M2 9h20" />
    <path fill="none" stroke="#C89116" strokeWidth="1.5" d="M7 2l5 7 5-7" />
  </svg>
)

export default function EventDetails() {
  return (
    <>
      {/* "Take the first step" heading with id="details" anchor */}
      <div
        className="elementor-element elementor-element-4633b727 e-flex e-con-boxed e-con e-parent"
        data-id="4633b727"
        data-element_type="container"
        id="details"
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-589f36cc elementor-widget elementor-widget-heading" data-id="589f36cc" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">take the first step</h2>
          </div>
        </div>
      </div>

      {/* Two-column: event info + in-person masterclass */}
      <div
        className="elementor-element elementor-element-5220fde4 e-flex e-con-boxed e-con e-parent"
        data-id="5220fde4"
        data-element_type="container"
      >
        <div className="e-con-inner">
          {/* Left column */}
          <div className="elementor-element elementor-element-32ac998 e-con-full e-flex e-con e-child" data-id="32ac998" data-element_type="container">
            <div className="elementor-element elementor-element-52650e2b e-con-full e-flex e-con e-child" data-id="52650e2b" data-element_type="container">
              <div className="elementor-element elementor-element-43cd0bc5 elementor-widget elementor-widget-heading" data-id="43cd0bc5" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">EVENT INFORMATION</h2>
              </div>
              <div className="elementor-element elementor-element-7ad72a8b elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="7ad72a8b" data-element_type="widget" data-widget_type="text-editor.default">
                <p>Make your next property move count — book your seat now.</p>
              </div>
              <div className="elementor-element elementor-element-6f01ebc8 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6f01ebc8" data-element_type="widget" data-widget_type="icon-list.default">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon"><DiamondIcon /></span>
                    <span className="elementor-icon-list-text">04 July 2026 | 09:00 – 13:00</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon"><DiamondIcon /></span>
                    <span className="elementor-icon-list-text">Emperors Palace, Johannesburg</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon"><DiamondIcon /></span>
                    <span className="elementor-icon-list-text"><span style={{ color: '#4782B5', fontWeight: 700 }}>R800</span> per person | <span style={{ color: '#4782B5', fontWeight: 700 }}>R1,200</span> (Person + 1 Guest)<br />Platinum Members | <span style={{ color: '#4782B5' }}>R400 per person</span></span>
                  </li>
                </ul>
              </div>
              <div className="elementor-element elementor-element-19a65e13 elementor-widget elementor-widget-heading" data-id="19a65e13" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">CONTACT DETAILS</h2>
              </div>
              <div className="elementor-element elementor-element-533c4d75 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="533c4d75" data-element_type="widget" data-widget_type="icon-list.default">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon"><DiamondIcon /></span>
                    <span className="elementor-icon-list-text">services@wealthmastersclub.com</span>
                  </li>
                  <li className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon"><DiamondIcon /></span>
                    <span className="elementor-icon-list-text">021 851 2730</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="elementor-element elementor-element-2c027be0 elementor-mobile-align-center elementor-align-left elementor-widget elementor-widget-button" data-id="2c027be0" data-element_type="widget" data-widget_type="button.default">
              <a className="elementor-button elementor-button-link elementor-size-sm" href={QUICKET_JHB} target="_blank" rel="noopener noreferrer">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Secure your seat</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="elementor-element elementor-element-6d49b9cf e-con-full e-flex e-con e-child" data-id="6d49b9cf" data-element_type="container">
            <div className="elementor-element elementor-element-271eb6b9 e-con-full e-flex e-con e-child" data-id="271eb6b9" data-element_type="container">
              <div className="elementor-element elementor-element-4c3ce89b elementor-widget elementor-widget-heading" data-id="4c3ce89b" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">IN-PERSON MASTERCLASS</h2>
              </div>
              <div className="elementor-element elementor-element-6f0adcdd elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="6f0adcdd" data-element_type="widget" data-widget_type="text-editor.default">
                <p>Join Wealth Masters Club live at <span>Emperors Palace</span>, Johannesburg for a high-level Property Investment Masterclass designed for serious investors who want to build long-term wealth through property using the right strategy, structure and frameworks.</p>
                <p>This session is designed to help you think beyond individual deals and start building a properly structured property portfolio.</p>
              </div>
              <div className="elementor-element elementor-element-26b3a089 elementor-widget elementor-widget-heading" data-id="26b3a089" data-element_type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">what to expect</h2>
              </div>
            </div>
            <div className="elementor-element elementor-element-1d763b50 elementor-widget__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1d763b50" data-element_type="widget" data-widget_type="icon-list.default">
              <ul className="elementor-icon-list-items">
                {[
                  'Build With Structure: Learn why the right structure matters before buying your next property.',
                  'Create Long-Term Wealth: Discover how to build a profitable property portfolio over time.',
                  'Improve Tax Efficiency: Understand how strategic structuring can support smarter wealth creation.',
                  'Protect What You Build: Learn how to reduce exposure and build with greater long-term security.',
                  'Think Like a Serious Investor: Gain clearer insight into portfolio growth, positioning and your next move.',
                ].map((item, i) => (
                  <li key={i} className="elementor-icon-list-item">
                    <span className="elementor-icon-list-icon"><DiamondIcon /></span>
                    <span className="elementor-icon-list-text">{item}</span>
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
