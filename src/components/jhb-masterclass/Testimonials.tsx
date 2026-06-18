import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Pagination } from 'swiper'

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
  </svg>
)

const testimonials = [
  {
    id: 'c287c53',
    author: 'Andre Swart',
    quote: '"I have followed the Wealth Mastery System for 3 years and have managed to setup my trusts and purchase R5million worth of property. The course is great as I realize that I still have not complied with all the aspects of the Wealth Mastery System. Eye opener and refreshing!!"',
  },
  {
    id: '6a2e719',
    author: 'Gordon Mackay',
    quote: '"I attended Coert\'s course in Feb 2004 and owe him a BIG THANK YOU. I own \'many\' properties today ALL bought with NO MONEY and I am still buying. THANK YOU Coert (100 Houses in 12 months!)"',
  },
  {
    id: '42f3647',
    author: 'John Garth Wilson',
    quote: '"The course is a comprehensive introduction and is set out in laymen\'s terms, enabling the most inexperienced to follow a simple system to concrete financial independence."',
  },
  {
    id: 'efc3b02',
    author: 'Philip Michael Reynolds',
    quote: '"The course is very practicable and worded in an easy to understand way. VERY WELL DONE."',
  },
]

export default function Testimonials() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!swiperRef.current) return
    const swiper = new Swiper(swiperRef.current, {
      modules: [Pagination],
      loop: true,
      autoplay: false,
      speed: 800,
      slidesPerGroup: 1,
      slidesPerView: 3,
      spaceBetween: 15,
      touchStartPreventDefault: false,
      pagination: { el: paginationRef.current, clickable: true },
      breakpoints: {
        320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
        1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 15 },
      },
    })
    return () => swiper.destroy()
  }, [])

  return (
    <div
      className="elementor-element elementor-element-6af29955 e-flex e-con-boxed e-con e-parent"
      data-id="6af29955"
      data-element_type="container"
      id="xs_testi_11"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div className="elementor-element elementor-element-64feaa5b elementor-widget__width-inherit elementor-widget elementor-widget-elementskit-heading" data-id="64feaa5b" data-element_type="widget" data-widget_type="elementskit-heading.default">
          <div className="ekit-wid-con">
            <div className="ekit-heading elementskit-section-title-wraper text_center ekit_heading_tablet- ekit_heading_mobile-">
              <h2 className="ekit-heading--title elementskit-section-title">REAL PEOPLE   |   REAL RESULTS</h2>
              <div className="ekit-heading__description">
                <p>For nearly three decades, Wealth Masters Club has guided people<br />to protect assets, cut tax, and build generational wealth.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-2a07cb36 e-con-full e-flex e-con e-child" data-id="2a07cb36" data-element_type="container">
          <div className="elementor-element elementor-element-18a917fc elementor-widget elementor-widget-elementskit-testimonial" data-id="18a917fc" data-element_type="widget" data-widget_type="elementskit-testimonial.default">
            <div className="ekit-wid-con">
              <div className="elementskit-testimonial-slider ekit_testimonial_style_5 arrow_inside slider-dotted">
                <div className="ekit-main-swiper swiper" ref={swiperRef}>
                  <div className="swiper-wrapper">
                    {testimonials.map((t) => (
                      <div key={t.id} className="swiper-slide">
                        <div className="swiper-slide-inner">
                          <div className={`elementskit-single-testimonial-slider elementskit-testimonial-slider-block-style elementskit-testimonial-slider-block-style-two elementor-repeater-item-${t.id}`}>
                            <div className="elementskit-commentor-header">
                              <ul className="elementskit-stars">
                                {[1,2,3,4,5].map((n) => (
                                  <li key={n}><a><StarIcon /></a></li>
                                ))}
                              </ul>
                            </div>
                            <div className="elementskit-commentor-content"><p>{t.quote}</p></div>
                            <div className="elementskit-commentor-bio">
                              <div className="elementkit-commentor-details">
                                <div className="elementskit-profile-info">
                                  <strong className="elementskit-author-name">{t.author}</strong>
                                  <span className="elementskit-author-des"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-pagination" ref={paginationRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
