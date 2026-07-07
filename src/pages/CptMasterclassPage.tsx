import RouteHead from '../components/shared/RouteHead'
import HeroMobile from '../components/cpt-masterclass/HeroMobile'
import HeroDesktop from '../components/cpt-masterclass/HeroDesktop'
import LogosSlider from '../components/cpt-masterclass/LogosSlider'
import WhyDifferent from '../components/cpt-masterclass/WhyDifferent'
import WalkAwayWith from '../components/cpt-masterclass/WalkAwayWith'
import ProvenStrategies from '../components/cpt-masterclass/ProvenStrategies'
import AsFeaturedIn from '../components/cpt-masterclass/AsFeaturedIn'
import IsThisForYou from '../components/cpt-masterclass/IsThisForYou'
import TicketIncludes from '../components/cpt-masterclass/TicketIncludes'
import EveryTicketIncludes from '../components/cpt-masterclass/EveryTicketIncludes'
import FAQs from '../components/cpt-masterclass/FAQs'
import Testimonials from '../components/cpt-masterclass/Testimonials'
import EventHighlights from '../components/cpt-masterclass/EventHighlights'
import CityCards from '../components/cpt-masterclass/CityCards'
import SocialShare from '../components/cpt-masterclass/SocialShare'
import Disclaimer from '../components/cpt-masterclass/Disclaimer'
import HomePageCTA from '../components/cpt-masterclass/HomePageCTA'
import FinalCTA from '../components/cpt-masterclass/FinalCTA'

const pageStyles = `
  /* ── CPT Masterclass: global font overrides ── */

  /* Headings — Montserrat */
  .cpt-page h1, .cpt-page h2, .cpt-page h3, .cpt-page h4, .cpt-page h5, .cpt-page h6,
  .cpt-page .elementor-heading-title,
  .cpt-page .ekit-heading--title,
  .cpt-page .elementskit-section-title,
  .cpt-page .elementor-button-text,
  .cpt-page .elementor-icon-list-text {
    font-family: 'Montserrat', sans-serif !important;
  }

  /* Section titles — consistent size & weight (excludes hero headings) */
  .cpt-page .ekit-heading--title,
  .cpt-page .elementskit-section-title,
  .cpt-page [data-id="114ab85b"] .elementor-heading-title,
  .cpt-page [data-id="2e0b1281"] .elementor-heading-title {
    font-size: 32px !important;
    font-weight: 700 !important;
  }

  /* Body text — Poppins */
  .cpt-page p,
  .cpt-page li,
  .cpt-page .ekit-heading__description p,
  .cpt-page .ekit-heading__description,
  .cpt-page .elementor-widget-text-editor p,
  .cpt-page .elementskit-commentor-content p,
  .cpt-page .elementskit-author-name {
    font-family: 'Poppins', sans-serif !important;
  }

  /* Buttons and icon-list labels stay Montserrat */
  .cpt-page .elementor-button-text,
  .cpt-page .elementor-icon-list-text {
    font-family: 'Montserrat', sans-serif !important;
  }
`

export default function CptMasterclassPage() {
  return (
    <div className="cartflows-container cpt-page">
      <style>{pageStyles}</style>
      {/* Meta Pixel fires via index.html (ID 1361266612389502) — shared across all pages. */}
      <RouteHead
        title="Property Investment Masterclass Cape Town 25 July 2026 | Wealth Masters Club"
        description="PROPERTY INVESTMENT MASTERCLASS IN CAPE TOWN. Lord Charles Hotel, Somerset West. 25 July 2026 (09:00 - 13:00). Non-Members: R800 per person | Members / Guests: R400 per person."
        ogTitle="Property Investment Masterclass Cape Town - Wealth Masters Club"
        ogDescription="PROPERTY INVESTMENT MASTERCLASS IN CAPE TOWN. Lord Charles Hotel, Somerset West. 25 July 2026 (09:00 - 13:00). Non-Members: R800 per person | Members / Guests: R400 per person."
        canonical="https://events.wealthmastersclub.com/cpt-masterclass-20260725"
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
