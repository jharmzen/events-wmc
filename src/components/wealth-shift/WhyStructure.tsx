export default function WhyStructure() {
  return (
    <>
      {/* WHO THIS SESSION IS DESIGNED FOR — text left, image right */}
      <div
        className="elementor-element elementor-element-6944a0f e-flex e-con-boxed e-con e-parent"
        data-id="6944a0f"
        data-element_type="container"
      >
        <div className="e-con-inner">
          {/* Left: image */}
          <div className="elementor-element elementor-element-75c2ebe6 e-con-full e-flex e-con e-child" data-id="75c2ebe6" data-element_type="container">
            <div className="elementor-element elementor-element-77fc19b elementor-widget elementor-widget-image" data-id="77fc19b" data-element_type="widget" data-widget_type="image.default">
              <img
                loading="lazy"
                decoding="async"
                width="800"
                height="800"
                src="/images/webinar-who-session.png"
                className="attachment-full size-full"
                alt=""
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          </div>
          {/* Right: text */}
          <div className="elementor-element elementor-element-3b5ff380 e-con-full e-flex e-con e-child" data-id="3b5ff380" data-element_type="container">
            <div className="elementor-element elementor-element-288d4c28 elementor-widget elementor-widget-heading" data-id="288d4c28" data-element_type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">WHO THIS SESSION IS DESIGNED FOR</h2>
            </div>
            <div className="elementor-element elementor-element-2281143a elementor-widget__width-initial elementor-widget elementor-widget-text-editor" data-id="2281143a" data-element_type="widget" data-widget_type="text-editor.default">
              <p style={{ marginBottom: '20px' }}>This session is for you if:</p>
              <ul style={{ listStyle: 'disc', margin: '0 0 20px', paddingLeft: '20px' }}>
                <li style={{ marginBottom: '14px', lineHeight: 1.5 }}>You're considering property investment but don't know where to start</li>
                <li style={{ marginBottom: '14px', lineHeight: 1.5 }}>You already own property but lack a clear long-term strategy</li>
                <li style={{ marginBottom: '14px', lineHeight: 1.5 }}>You want to build sustainable wealth not chase short-term gains</li>
                <li style={{ marginBottom: '14px', lineHeight: 1.5 }}>You're tired of conflicting advice and want a structured approach</li>
              </ul>
              <p><strong>If you're looking for clarity, strategy, and direction you're in the right place.</strong></p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW EXPERIENCED INVESTORS THINK — single column, white bg */}
      <div
        style={{ padding: '50px 0' }}
      >
        <div style={{ maxWidth: '1340px', margin: '0 auto', padding: '0 clamp(15px, 4vw, 60px)' }}>
          <h2 style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '38px', fontWeight: 900, textTransform: 'uppercase', color: '#1D2B42', margin: '0 0 20px', lineHeight: 1.1 }}>
            HOW EXPERIENCED INVESTORS THINK
          </h2>
          <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, color: '#000000', margin: '0 0 12px' }}>
            Inside this session, you'll be introduced to:
          </p>
          <ul style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, color: '#000000', margin: '0 0 16px', padding: 0, listStyle: 'none', lineHeight: 1.7 }}>
            <li>The strategic drivers behind successful property portfolios</li>
            <li>A structured way to evaluate investment decisions</li>
            <li>The early-stage thinking used by experienced investors</li>
          </ul>
          <p style={{ fontFamily: '"Poppins", Sans-serif', fontSize: '16px', fontWeight: 400, color: '#000000', margin: 0 }}>
            Not everything will be unpacked… But enough to permanently shift how you approach property investment.
          </p>
        </div>
      </div>
    </>
  )
}
