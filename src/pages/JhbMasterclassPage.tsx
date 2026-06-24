import RouteHead from '../components/shared/RouteHead'
import HeroMobile from '../components/jhb-masterclass/HeroMobile'
import HeroDesktop from '../components/jhb-masterclass/HeroDesktop'
import LogosSlider from '../components/jhb-masterclass/LogosSlider'
import WhyDifferent from '../components/jhb-masterclass/WhyDifferent'
import DestinataBanner from '../components/jhb-masterclass/DestinataBanner'
import WalkAwayWith from '../components/jhb-masterclass/WalkAwayWith'
import ProvenStrategies from '../components/jhb-masterclass/ProvenStrategies'
import AsFeaturedIn from '../components/jhb-masterclass/AsFeaturedIn'
import SellsOutBanner from '../components/jhb-masterclass/SellsOutBanner'
import EventDetails from '../components/jhb-masterclass/EventDetails'
import TicketIncludes from '../components/jhb-masterclass/TicketIncludes'
import Testimonials from '../components/jhb-masterclass/Testimonials'
import WhyStructure from '../components/jhb-masterclass/WhyStructure'
import EventHighlights from '../components/jhb-masterclass/EventHighlights'
import CityCards from '../components/jhb-masterclass/CityCards'
import SocialShare from '../components/jhb-masterclass/SocialShare'
import Disclaimer from '../components/jhb-masterclass/Disclaimer'
import HomePageCTA from '../components/jhb-masterclass/HomePageCTA'
import FinalCTA from '../components/jhb-masterclass/FinalCTA'

export default function JhbMasterclassPage() {
  return (
    <div className="cartflows-container">
      {/* Meta Pixel fires via index.html (ID 1361266612389502) — shared across all pages. */}
      <RouteHead
        title="Property Investment Masterclass Johannesburg 04 July 2026 | Wealth Masters Club"
        description="PROPERTY INVESTMENT MASTERCLASS IN JOHANNESBURG. The Strategy Behind Successful Property Investors. Emperors Palace, Kempton Park. 04 July 2026 (09:00 - 13:00). R800 per person | R1,200 (Person + 1 Guest) | R1,600 (Person + 2 Guests). Platinum Members | R400 per person."
        ogTitle="Property Investment Masterclass Johannesburg - Wealth Masters Club"
        ogDescription="PROPERTY INVESTMENT MASTERCLASS IN JOHANNESBURG. Emperors Palace, Kempton Park. 04 July 2026 (09:00 - 13:00). R800 per person | R1,200 (Person + 1 Guest) | R1,600 (Person + 2 Guests). Platinum Members | R400 per person."
        // TODO: Confirm production canonical URL with user — Durban canonical uses a /step/ prefix; using the plain route path until confirmed.
        canonical="https://events.wealthmastersclub.com/jhb-masterclass-20260704"
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
        <DestinataBanner />
        <WalkAwayWith />
        <ProvenStrategies />
        <AsFeaturedIn />
        <SellsOutBanner />
        <EventDetails />
        <TicketIncludes />
        <Testimonials />
        <WhyStructure />
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
