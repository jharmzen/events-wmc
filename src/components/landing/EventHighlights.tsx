import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper'

const highlightImages = [
  { src: '/images/547070173_122104736241002356_2449205031524955632_n-2-1024x462.jpg', alt: '547070173_122104736241002356_2449205031524955632_n-2.jpg' },
  { src: '/images/547070481_122104735989002356_8520953970075358130_n-2-scaled-1-1024x461.jpg', alt: '547070481_122104735989002356_8520953970075358130_n-2-scaled.jpg' },
  { src: '/images/WhatsApp-Image-2025-09-17-at-17.44.52-1024x461.jpeg', alt: 'WhatsApp-Image-2025-09-17-at-17.44.52.jpeg' },
  { src: '/images/WhatsApp-Image-2025-09-17-at-17.44.51-1024x461.jpeg', alt: 'WhatsApp-Image-2025-09-17-at-17.44.51.jpeg' },
  { src: '/images/WhatsApp-Image-2025-09-17-at-17.44.48-1024x461.jpeg', alt: 'WhatsApp-Image-2025-09-17-at-17.44.48.jpeg' },
  { src: '/images/WhatsApp-Image-2025-09-17-at-17.44.47-1024x461.jpeg', alt: 'WhatsApp-Image-2025-09-17-at-17.44.47.jpeg' },
  { src: '/images/WhatsApp-Image-2025-09-17-at-17.44.45-1024x461.jpeg', alt: 'WhatsApp-Image-2025-09-17-at-17.44.45.jpeg' },
]

export default function EventHighlights() {
  const swiperRef = useRef<HTMLDivElement>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!swiperRef.current) return
    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 3,
      autoplay: { delay: 1500, disableOnInteraction: false },
      speed: 500,
      loop: true,
      touchStartPreventDefault: false,
      navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
      pagination: { el: paginationRef.current, clickable: true },
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    })
    return () => swiper.destroy()
  }, [])

  return (
    <>
      <div
        className="elementor-element elementor-element-27abce7c e-flex e-con-boxed e-con e-parent"
        data-id="27abce7c"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-5c2f4a9b elementor-widget elementor-widget-heading" data-id="5c2f4a9b" data-element_type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">Event Highlights</h2>
          </div>
          <div className="elementor-element elementor-element-546cb59c elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor" data-id="546cb59c" data-element_type="widget" data-widget_type="text-editor.default">
            <p>Our Masterclasses are packed with energy, breakthroughs, and life-changing strategies</p>
          </div>
        </div>
      </div>
      <div
        className="elementor-element elementor-element-3380c0ea e-flex e-con-boxed e-con e-parent"
        data-id="3380c0ea"
        data-element_type="container"
        data-settings='{"background_background":"classic"}'
      >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-55bcb05b elementor-widget__width-inherit elementor-arrows-position-inside elementor-pagination-position-outside elementor-widget elementor-widget-image-carousel e-widget-swiper" data-id="55bcb05b" data-element_type="widget" data-widget_type="image-carousel.default">
            <div className="elementor-image-carousel-wrapper swiper" ref={swiperRef} role="region" aria-roledescription="carousel" aria-label="Image Carousel">
              <div className="elementor-image-carousel swiper-wrapper">
                {highlightImages.map((img, i) => (
                  <div key={i} className="swiper-slide" role="group" aria-roledescription="slide">
                    <figure className="swiper-slide-inner">
                      <img decoding="async" className="swiper-slide-image" src={img.src} alt={img.alt} />
                    </figure>
                  </div>
                ))}
              </div>
              <div className="elementor-swiper-button elementor-swiper-button-prev" ref={prevRef} role="button" tabIndex={0} aria-label="Previous slide">
                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" /></svg>
              </div>
              <div className="elementor-swiper-button elementor-swiper-button-next" ref={nextRef} role="button" tabIndex={0} aria-label="Next slide">
                <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" /></svg>
              </div>
              <div className="swiper-pagination" ref={paginationRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
