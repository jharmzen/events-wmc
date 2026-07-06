import RouteHead from '../components/shared/RouteHead'
import HeroMobile from '../components/jhb-masterclass/HeroMobile'
import HeroDesktop from '../components/jhb-masterclass/HeroDesktop'
import LogosSlider from '../components/jhb-masterclass/LogosSlider'
import WhyDifferent from '../components/jhb-masterclass/WhyDifferent'
import WalkAwayWith from '../components/jhb-masterclass/WalkAwayWith'
import ProvenStrategies from '../components/jhb-masterclass/ProvenStrategies'
import AsFeaturedIn from '../components/jhb-masterclass/AsFeaturedIn'
import IsThisForYou from '../components/jhb-masterclass/IsThisForYou'
import TicketIncludes from '../components/jhb-masterclass/TicketIncludes'
import EveryTicketIncludes from '../components/jhb-masterclass/EveryTicketIncludes'
import FAQs from '../components/jhb-masterclass/FAQs'
import Testimonials from '../components/jhb-masterclass/Testimonials'
import EventHighlights from '../components/jhb-masterclass/EventHighlights'
import CityCards from '../components/jhb-masterclass/CityCards'
import SocialShare from '../components/jhb-masterclass/SocialShare'
import Disclaimer from '../components/jhb-masterclass/Disclaimer'
import HomePageCTA from '../components/jhb-masterclass/HomePageCTA'
import FinalCTA from '../components/jhb-masterclass/FinalCTA'

const pageStyles = `
  /* ── JHB Masterclass: global font overrides ── */

  /* Headings — Montserrat */
  .jhb-page h1, .jhb-page h2, .jhb-page h3, .jhb-page h4, .jhb-page h5, .jhb-page h6,
  .jhb-page .elementor-heading-title,
  .jhb-page .ekit-heading--title,
  .jhb-page .elementskit-section-title,
  .jhb-page .elementor-button-text,
  .jhb-page .elementor-icon-list-text {
    font-family: 'Montserrat', sans-serif !important;
  }

  /* Section titles — consistent size & weight (excludes hero headings) */
  .jhb-page .ekit-heading--title,
  .jhb-page .elementskit-section-title,
  .jhb-page [data-id="114ab85b"] .elementor-heading-title,
  .jhb-page [data-id="2e0b1281"] .elementor-heading-title {
    font-size: 32px !important;
    font-weight: 700 !important;
  }

  /* Body text — Poppins */
  .jhb-page p,
  .jhb-page li,
  .jhb-page .ekit-heading__description p,
  .jhb-page .ekit-heading__description,
  .jhb-page .elementor-widget-text-editor p,
  .jhb-page .elementskit-commentor-content p,
  .jhb-page .elementskit-author-name {
    font-family: 'Poppins', sans-serif !important;
  }

  /* Buttons and icon-list labels stay Montserrat */
  .jhb-page .elementor-button-text,
  .jhb-page .elementor-icon-list-text {
    font-family: 'Montserrat', sans-serif !important;
  }
`

export default function JhbMasterclassPage() {
  return (
    <div className="cartflows-container jhb-page">
      <style>{pageStyles}</style>
      {/* Meta Pixel fires via index.html (ID 1361266612389502) — shared across all pages. */}
      <RouteHead
        title="Property Investment Masterclass Johannesburg 04 July 2026 | Wealth Masters Club"
        description="PROPERTY INVESTMENT MASTERCLASS IN JOHANNESBURG. The Strategy Behind Successful Property Investors. Emperors Palace, Kempton Park. 04 July 2026 (09:00 - 13:00). R800 per person | R1,200 (Person + 1 Guest) | R1,600 (Person + 2 Guests). Platinum Members | R400 per person."
        ogTitle="Property Investment Masterclass Johannesburg - Wealth Masters Club"
        ogDescription="PROPERTY INVESTMENT MASTERCLASS IN JOHANNESBURG. Emperors Palace, Kempton Park. 15 August 2026 (09:00 - 13:00). R800 per person | R1,200 (Person + 1 Guest) | R1,600 (Person + 2 Guests). Platinum Members | R400 per person."
        // TODO: Confirm production canonical URL with user — Durban canonical uses a /step/ prefix; using the plain route path until confirmed.
        canonical="https://events.wealthmastersclub.com/jhb-masterclass-20260815"
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
