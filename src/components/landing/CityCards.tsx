const cities = [
  {
    id: '4ca81f70',
    name: 'DURBAN',
    date: '27 JUNE 2026',
    img: '/images/12.png',
    imgId: '215',
    pageLink: 'https://events.wealthmastersclub.com/step/property-investment-masterclass-dbn27062026',
    bookLink: 'https://www.quicket.co.za/events/369575-wealth-property-investment-masterclass-2706-capital-pearls',
  },
  {
    id: '4395195',
    name: 'JOHANNESBURG',
    date: '04 JULY 2026',
    img: '/images/11.png',
    imgId: '214',
    pageLink: 'http://events.wealthmastersclub.com/step/property-investment-masterclass-jhb23052026',
    bookLink: 'https://www.quicket.co.za/events/377079-wealth-property-investment-masterclass-0407-emperors-palace#/',
  },
  {
    id: '3f4517b5',
    name: 'CAPE TOWN',
    date: '25 JULY 2026',
    img: '/images/13.png',
    imgId: '216',
    pageLink: 'http://x/',
    bookLink: 'https://www.quicket.co.za/events/369918-wealth-property-investment-masterclass-2507-lord-charles',
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
              <h2 className="ekit-heading--title elementskit-section-title">Your City . Your Chance . Your Future</h2>
              <div className="ekit-heading__description">
                <p>Don't miss your opportunity to invest the right way</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-427bb23e e-con-full e-grid e-con e-child" data-id="427bb23e" data-element_type="container">
          {cities.map((city) => (
            <div key={city.id} className={`elementor-element elementor-element-${city.id} ekit-equal-height-disable elementor-widget elementor-widget-elementskit-image-box`} data-id={city.id} data-element_type="widget" data-widget_type="elementskit-image-box.default">
              <div className="ekit-wid-con">
                <div className="elementskit-info-image-box ekit-image-box text-center style-modern">
                  <a href={city.pageLink}>
                    <div className="elementskit-box-header image-box-img-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        width="900"
                        height="900"
                        src={city.img}
                        className={`attachment-full size-full wp-image-${city.imgId}`}
                        alt=""
                        sizes="(max-width: 900px) 100vw, 900px"
                      />
                    </div>
                  </a>
                  <div className="elementskit-box-body ekit-image-box-body">
                    <div className="elementskit-box-content ekit-image-box-body-inner">
                      <h3 className="elementskit-info-box-title">{city.name}</h3>
                      <div className="elementskit-box-style-content">{city.date}</div>
                    </div>
                    <div className="elementskit-box-footer">
                      <div className="box-footer">
                        <div className="btn-wraper">
                          <a href={city.bookLink} className="elementskit-btn whitespace--normal" target="_blank" rel="noopener noreferrer">
                            BOOK NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
