import HeroMobile from '../components/landing/HeroMobile'
import HeroDesktop from '../components/landing/HeroDesktop'
import LogosSlider from '../components/landing/LogosSlider'
import WhyDifferent from '../components/landing/WhyDifferent'
import DestinataBanner from '../components/landing/DestinataBanner'
import WalkAwayWith from '../components/landing/WalkAwayWith'
import ProvenStrategies from '../components/landing/ProvenStrategies'
import AsFeaturedIn from '../components/landing/AsFeaturedIn'
import SellsOutBanner from '../components/landing/SellsOutBanner'
import EventDetails from '../components/landing/EventDetails'
import TicketIncludes from '../components/landing/TicketIncludes'
import Testimonials from '../components/landing/Testimonials'
import WhyStructure from '../components/landing/WhyStructure'
import EventHighlights from '../components/landing/EventHighlights'
import CityCards from '../components/landing/CityCards'
import SocialShare from '../components/landing/SocialShare'
import Disclaimer from '../components/landing/Disclaimer'
import HomePageCTA from '../components/landing/HomePageCTA'
import FinalCTA from '../components/landing/FinalCTA'

export default function LandingPage() {
  return (
    <div className="cartflows-container">
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
