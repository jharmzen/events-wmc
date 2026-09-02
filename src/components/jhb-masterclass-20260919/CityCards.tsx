const QUICKET_URL = 'https://www.quicket.co.za/events/392089-wealth-property-half-day-masterclass-1909-emperors-palace/'

const cities = [
  {
    id: '4ca81f70',
    name: 'DURBAN',
    dateDisplay: '05 September 2026',
    venue: 'Capital Pearls, Durban',
    img: 'https://backoffice.treoc.com/data/archive/documents/images/6a420bd5517d3.png',
    pageLink: '',
    bookLink: 'https://www.quicket.co.za/events/384123-wealth-property-investment-masterclass-0209capital-pearls/',
    goldFrame: false,
  },
  {
    id: '4395195',
    name: 'GAUTENG',
    dateDisplay: '19 September 2026',
    venue: 'Convention Centre Emperors Palace, Kempton Park',
    img: 'https://backoffice.treoc.com/data/archive/documents/images/6a82dd60c984c.png',
    pageLink: '/jhb-masterclass-20260919',
    bookLink: QUICKET_URL,
    goldFrame: true,
  },
  {
    id: '3f4517b5',
    name: 'CAPE TOWN',
    dateDisplay: '26 September 2026',
    venue: 'Protea Hotel Technopark, Stellenbosch',
    img: 'https://backoffice.treoc.com/data/archive/documents/images/6a94f733b5fa1.png',
    pageLink: '',
    bookLink: 'https://www.quicket.co.za/events/394914-wealth-property-investment-masterclass-2609-protea-hotel-technopark/',
    goldFrame: false,
  },
]

export default function CityCards() {
  return (
    <div
      className="elementor-element elementor-element-1b371970 e-flex e-con-boxed e-con e-parent"
      data-id="1b371970"
      data-element_type="container"
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-22f536a0 elementor-widget__width-inherit elementor-widget elementor-widget-elementskit-heading" data-id="22f536a0" data-element_type="widget" data-widget_type="elementskit-heading.default">
          <div className="ekit-wid-con">
            <div className="ekit-heading elementskit-section-title-wraper text_center ekit_heading_tablet- ekit_heading_mobile-">
              <h2 className="ekit-heading--title elementskit-section-title">YOUR CITY . YOUR CHANCE . YOUR FUTURE</h2>
              <div className="ekit-heading__description">
                <p>Don't Miss Your Opportunity To Invest The Right Way</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-427bb23e e-con-full e-grid e-con e-child" data-id="427bb23e" data-element_type="container">
          {cities.map((city) => (
            <div key={city.id} className={`elementor-element elementor-element-${city.id} ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box`} data-id={city.id} data-element_type="widget" data-widget_type="elementskit-image-box.default">
              <div
                style={{
                  border: city.goldFrame ? '3px solid #c4944a' : '1px solid #e0e0e0',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* City name inside the border */}
                <div style={{ padding: '14px 8px 10px', textAlign: 'center' }}>
                  <h3 style={{ margin: 0, fontFamily: '"Montserrat", sans-serif', fontSize: '22px', fontWeight: 700, color: '#1a2a3a', letterSpacing: '0.5px' }}>
                    {city.name}
                  </h3>
                </div>

                {/* Card image */}
                <a href={city.pageLink} style={{ display: 'block' }}>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={city.img}
                    alt={`${city.name} event`}
                    style={{ width: '100%', display: 'block', height: 'auto' }}
                  />
                </a>

                {/* Card body */}
                <div style={{ padding: '12px 10px 0', flexGrow: 1 }}>
                  <p style={{ margin: '0 0 2px', fontFamily: '"Poppins", sans-serif', fontSize: '11px', fontWeight: 700, color: '#1a2a3a', lineHeight: 1.4 }}>
                    Wealth &amp; Property Investment
                  </p>
                  <p style={{ margin: '0 0 8px', fontFamily: '"Poppins", sans-serif', fontSize: '11px', fontWeight: 400, color: '#1a2a3a', lineHeight: 1.4 }}>
                    Masterclass
                  </p>
                  <ul style={{ margin: '0 0 12px', padding: '0 0 0 14px', listStyle: 'disc' }}>
                    <li style={{ fontFamily: '"Poppins", sans-serif', fontSize: '10px', color: '#555555', lineHeight: 1.5 }}>{city.dateDisplay}</li>
                    <li style={{ fontFamily: '"Poppins", sans-serif', fontSize: '10px', color: '#555555', lineHeight: 1.5 }}>{city.venue}</li>
                  </ul>
                </div>

                {/* BOOK NOW button */}
                <div style={{ padding: '0 10px 14px', textAlign: 'center' }}>
                  <a
                    href={city.bookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      fontFamily: '"Montserrat", sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#ffffff',
                      backgroundColor: '#C89116',
                      borderRadius: '4px',
                      padding: '10px',
                      textDecoration: 'none',
                      textAlign: 'center',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
