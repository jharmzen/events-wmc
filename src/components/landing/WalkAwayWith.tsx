const QUICKET_DBN = 'https://www.quicket.co.za/events/369575-wealth-property-investment-masterclass-2706-capital-pearls'

const benefits = [
  {
    cardId: '3590e4b3',
    listId: '15ba8f76',
    headingId: '2fe99442',
    icon: (
      <svg aria-hidden="true" className="e-font-icon-svg e-fas-coins" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"/></svg>
    ),
    label: 'Tax-Efficient Cash Flow ',
    desc: ' How to structure wealth for optimal tax efficiency and consistent cash flow ',
  },
  {
    cardId: 'ce16f2a',
    listId: '3eaa364',
    headingId: '77550dfa',
    icon: (
      <svg aria-hidden="true" className="e-font-icon-svg e-fas-laptop-house" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z"/></svg>
    ),
    label: ' Property in All Market Cycles ',
    desc: ' How property is used strategically regardless of market cycles',
  },
  {
    cardId: '39c74f19',
    listId: '7226ae3f',
    headingId: 'acba081',
    icon: (
      <svg aria-hidden="true" className="e-font-icon-svg e-fas-exclamation-triangle" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>
    ),
    label: ' Strategies to Avoid ',
    desc: " Which outdated investment strategies to avoid in today's market ",
  },
  {
    cardId: '6bf816b1',
    listId: '5efa3d53',
    headingId: '3d31da0c',
    icon: (
      <svg aria-hidden="true" className="e-font-icon-svg e-fas-shield-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"/></svg>
    ),
    label: ' Asset Protection Structures ',
    desc: ' How to protect assets using legal trust structures and proper planning ',
  },
  {
    cardId: '43077419',
    listId: '2aa5e9ac',
    headingId: '1ce1ecff',
    icon: (
      <svg aria-hidden="true" className="e-font-icon-svg e-fas-users" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"/></svg>
    ),
    label: ' Generational Wealth Planning ',
    desc: ' How to plan for long-term and generational wealth transfer ',
  },
]

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
          <div className="elementor-element elementor-element-7855225 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading" data-id="7855225" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">What You'll Walk Away With </h2>
          </div>
          <div className="elementor-element elementor-element-633c8db8 e-con-full e-flex e-con e-child" data-id="633c8db8" data-element_type="container">
            {benefits.map((b) => (
              <div key={b.cardId} className={`elementor-element elementor-element-${b.cardId} e-con-full e-flex e-con e-child`} data-id={b.cardId} data-element_type="container">
                <div className={`elementor-element elementor-element-${b.listId} elementor-align-start elementor-mobile-align-start elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list`} data-id={b.listId} data-element_type="widget" data-widget_type="icon-list.default">
                  <ul className="elementor-icon-list-items">
                    <li className="elementor-icon-list-item">
                      <span className="elementor-icon-list-icon">{b.icon}</span>
                      <span className="elementor-icon-list-text">{b.label}</span>
                    </li>
                  </ul>
                </div>
                <div className={`elementor-element elementor-element-${b.headingId} elementor-widget__width-inherit elementor-widget elementor-widget-heading`} data-id={b.headingId} data-element_type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">{b.desc}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="elementor-element elementor-element-22aed652 elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="22aed652" data-element_type="widget" data-widget_type="button.default">
            <a
              className="elementor-button elementor-button-link elementor-size-sm"
              href={QUICKET_DBN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="elementor-button-content-wrapper">
                <span className="elementor-button-text">Secure your seat</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
