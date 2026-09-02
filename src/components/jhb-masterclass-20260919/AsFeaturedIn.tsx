const mediaLogos = [
  { src: '/images/1-e1776266589103.png', title: 'HelderbergFM' },
  { src: '/images/2-e1776266619545.png', title: 'news24 Business' },
  { src: '/images/3-e1776266633866.png', title: 'kykNET' },
  { src: '/images/4-e1776266645466.png', title: 'ontbyt SAKE' },
  { src: '/images/5-e1776266655998.png', title: 'K&KIE' },
]

export default function AsFeaturedIn() {
  return (
    <>
      <div
        className="elementor-element elementor-element-1e35190c e-flex e-con-boxed e-con e-parent"
        data-id="1e35190c"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-429d4a44 elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" data-id="429d4a44" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">As Featured In</h2>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-224160ec e-con-full e-flex e-con e-parent"
        data-id="224160ec"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="elementor-element elementor-element-8e40922 elementor-widget__width-initial elementor-widget elementor-widget-elementskit-client-logo" data-id="8e40922" data-element_type="widget" data-widget_type="elementskit-client-logo.default">
          <div className="ekit-wid-con">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(16px, 4vw, 48px)', flexWrap: 'wrap', padding: '16px 0' }}>
              {mediaLogos.map((logo, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img loading="lazy" decoding="async" width="250" height="250" src={logo.src} alt={logo.title} style={{ maxHeight: '120px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
