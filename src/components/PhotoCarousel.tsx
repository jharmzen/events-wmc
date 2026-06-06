import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay, Navigation } from 'swiper'

const images = [
  '/images/WhatsApp-Image-2025-09-17-at-17.44.48-1024x461.jpeg',
  '/images/WhatsApp-Image-2025-09-17-at-17.44.47-1024x461.jpeg',
  '/images/WhatsApp-Image-2025-09-17-at-17.44.45-1024x461.jpeg',
  '/images/547070173_122104736241002356_2449205031524955632_n-2-1024x462.jpg',
  '/images/547070481_122104735989002356_8520953970075358130_n-2-scaled-1-1024x461.jpg',
  '/images/WhatsApp-Image-2025-09-17-at-17.44.52-1024x461.jpeg',
  '/images/WhatsApp-Image-2025-09-17-at-17.44.51-1024x461.jpeg',
]

export default function PhotoCarousel() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!swiperRef.current) return
    const swiper = new Swiper(swiperRef.current, {
      modules: [Autoplay, Navigation],
      loop: true,
      autoplay: { delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: false },
      speed: 500,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 0,
      touchStartPreventDefault: false,
      navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    })
    return () => swiper.destroy()
  }, [])

  return (
    <div
      className="elementor-element elementor-element-3380c0ea e-flex e-con-boxed e-con e-parent"
      data-id="3380c0ea"
      data-element_type="container"
      data-settings='{"background_background":"classic"}'
    >
      <div className="e-con-inner">
        <div
          className="elementor-element elementor-element-55bcb05b elementor-widget__width-inherit elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper"
          data-id="55bcb05b"
          data-element_type="widget"
          data-widget_type="image-carousel.default"
        >
          <div className="elementor-widget-container">
            <div className="elementor-image-carousel-wrapper swiper" ref={swiperRef}>
              <div className="swiper-wrapper">
                {images.map((src, i) => (
                  <div key={i} className="swiper-slide">
                    <figure className="swiper-slide-inner">
                      <img decoding="async" src={src} alt="" className="swiper-slide-image" />
                    </figure>
                  </div>
                ))}
              </div>
              <div className="elementor-swiper-button elementor-swiper-button-prev" ref={prevRef}>
                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646.5 772.5L374 500l272.5-272.5-65-65L244 500l337.5 337.5 65-65z" /></svg>
              </div>
              <div className="elementor-swiper-button elementor-swiper-button-next" ref={nextRef}>
                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M353.5 772.5L626 500 353.5 227.5l65-65L756 500 418.5 837.5l-65-65z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
