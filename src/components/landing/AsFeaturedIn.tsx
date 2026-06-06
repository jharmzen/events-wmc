import { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { Autoplay } from 'swiper'

const mediaLogos = [
  { src: '/images/1-e1776266589103.png', title: 'helderberg' },
  { src: '/images/2-e1776266619545.png', title: 'news24' },
  { src: '/images/3-e1776266633866.png', title: 'knet' },
  { src: '/images/4-e1776266645466.png', title: 'ontbyt' },
  { src: '/images/5-e1776266655998.png', title: 'kiek' },
  { src: '/images/6-e1776266666779.png', title: 'grootont' },
  { src: '/images/7-e1776266678892.png', title: 'rei' },
  { src: '/images/8-e1776266690633.png', title: 'business day' },
  { src: '/images/9-e1776266702916.png', title: 'the list' },
]

export default function AsFeaturedIn() {
  const swiperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!swiperRef.current) return
    const swiper = new Swiper(swiperRef.current, {
      modules: [Autoplay],
      autoplay: { delay: 13500, disableOnInteraction: false },
      speed: 13500,
      slidesPerView: 5,
      slidesPerGroup: 20,
      loop: true,
      touchStartPreventDefault: false,
      breakpoints: {
        320: { slidesPerView: 4, slidesPerGroup: 20, spaceBetween: 10 },
        768: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 10 },
        1024: { slidesPerView: 5, slidesPerGroup: 20, spaceBetween: 7 },
      },
    })
    return () => swiper.destroy()
  }, [])

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
            <div className="elementskit-clients-slider simple_logo_image">
              <div className="ekit-main-swiper swiper" ref={swiperRef}>
                <div className="swiper-wrapper">
                  {mediaLogos.map((logo, i) => (
                    <div key={i} className="elementskit-client-slider-item swiper-slide">
                      <div className="swiper-slide-inner">
                        <div className="single-client image-switcher" title={logo.title}>
                          <div className="content-image">
                            <img loading="lazy" decoding="async" width="250" height="250" src={logo.src} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
