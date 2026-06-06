const logos = [
  { src: '/images/3-4.png', alt: 'WealthMasters Club' },
  { src: '/images/1-3.png', alt: 'Destinata Group' },
  { src: '/images/4-3.png', alt: 'Treasury Trust Services' },
]

export default function LogosSlider() {
  return (
    <div
      className="elementor-element elementor-element-25be13e2 e-con-full e-flex e-con e-parent e-lazyloaded"
      data-id="25be13e2"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '20px 40px' }}
    >
      {logos.map((logo, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 0', padding: '10px 20px' }}>
          <img decoding="async" src={logo.src} alt={logo.alt} style={{ maxHeight: '100px', maxWidth: '100%', objectFit: 'contain' }} />
        </div>
      ))}
    </div>
  )
}
