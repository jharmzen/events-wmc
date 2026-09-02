import RouteHead from '../components/shared/RouteHead'
import HeroMobile from '../components/jhb-masterclass-20260919/HeroMobile'
import HeroDesktop from '../components/jhb-masterclass-20260919/HeroDesktop'
import LogosSlider from '../components/jhb-masterclass-20260919/LogosSlider'
import WhyDifferent from '../components/jhb-masterclass-20260919/WhyDifferent'
import WalkAwayWith from '../components/jhb-masterclass-20260919/WalkAwayWith'
import ProvenStrategies from '../components/jhb-masterclass-20260919/ProvenStrategies'
import AsFeaturedIn from '../components/jhb-masterclass-20260919/AsFeaturedIn'
import IsThisForYou from '../components/jhb-masterclass-20260919/IsThisForYou'
import Testimonials from '../components/jhb-masterclass-20260919/Testimonials'
import TicketIncludes from '../components/jhb-masterclass-20260919/TicketIncludes'
import EveryTicketIncludes from '../components/jhb-masterclass-20260919/EveryTicketIncludes'
import FAQs from '../components/jhb-masterclass-20260919/FAQs'
import EventHighlights from '../components/jhb-masterclass-20260919/EventHighlights'
import CityCards from '../components/jhb-masterclass-20260919/CityCards'
import SocialShare from '../components/jhb-masterclass-20260919/SocialShare'
import Disclaimer from '../components/jhb-masterclass-20260919/Disclaimer'
import HomePageCTA from '../components/jhb-masterclass-20260919/HomePageCTA'
import FinalCTA from '../components/jhb-masterclass-20260919/FinalCTA'

const pageStyles = `
  /* ── JHB Masterclass Sep 2026: global font overrides ── */
  .jhb-sep-page h1, .jhb-sep-page h2, .jhb-sep-page h3, .jhb-sep-page h4, .jhb-sep-page h5, .jhb-sep-page h6,
  .jhb-sep-page .elementor-heading-title,
  .jhb-sep-page .ekit-heading--title,
  .jhb-sep-page .elementskit-section-title,
  .jhb-sep-page .elementor-button-text,
  .jhb-sep-page .elementor-icon-list-text {
    font-family: 'Montserrat', sans-serif !important;
  }
  .jhb-sep-page .ekit-heading--title,
  .jhb-sep-page .elementskit-section-title {
    font-size: 32px !important;
    font-weight: 700 !important;
  }
  .jhb-sep-page p,
  .jhb-sep-page li,
  .jhb-sep-page .ekit-heading__description p,
  .jhb-sep-page .elementor-widget-text-editor p,
  .jhb-sep-page .elementskit-commentor-content p,
  .jhb-sep-page .elementskit-author-name {
    font-family: 'Poppins', sans-serif !important;
  }
  .jhb-sep-page .elementor-button-text,
  .jhb-sep-page .elementor-icon-list-text {
    font-family: 'Montserrat', sans-serif !important;
  }
`

export default function JhbMasterclass20260919Page() {
  return (
    <div className="cartflows-container jhb-sep-page">
      <style>{pageStyles}</style>
      <RouteHead
        title="Property Investment Masterclass Johannesburg 19 September 2026 | Wealth Masters Club"
        description="PROPERTY INVESTMENT MASTERCLASS IN JOHANNESBURG. Convention Centre Emperors Palace, Kempton Park. 19 September 2026 (09:00–13:00). R800 per person | R1,200 for 2 people | R1,600 for 3 people. Platinum Members R400."
        ogTitle="Property Investment Masterclass Johannesburg 19 September 2026 — Wealth Masters Club"
        ogDescription="Practical half-day masterclass at Convention Centre Emperors Palace, Kempton Park. 19 September 2026, 09:00–13:00. R800 per person. Platinum Members R400."
        canonical="https://events.wealthmastersclub.com/jhb-masterclass-20260919"
      />
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1162"
        className="elementor elementor-1162"
      >
        <HeroMobile />
        <HeroDesktop />
        <LogosSlider />
        <WhyDifferent />
        <WalkAwayWith />
        <ProvenStrategies />
        <AsFeaturedIn />
        <IsThisForYou />
        <Testimonials />
        <TicketIncludes />
        <EveryTicketIncludes />
        <FAQs />
        <EventHighlights />
        <CityCards />
        <SocialShare />
        <Disclaimer />
        <HomePageCTA />
        <FinalCTA />
      </div>
    </div>
  )
}
