import HeroMobile from '../components/wealth-shift/HeroMobile'
import HeroDesktop from '../components/wealth-shift/HeroDesktop'
import WhyDifferent from '../components/wealth-shift/WhyDifferent'
import DestinataBanner from '../components/wealth-shift/DestinataBanner'
import WalkAwayWith from '../components/wealth-shift/WalkAwayWith'
import ProvenStrategies from '../components/wealth-shift/ProvenStrategies'
import SellsOutBanner from '../components/wealth-shift/SellsOutBanner'
import EventDetails from '../components/wealth-shift/EventDetails'
import TicketIncludes from '../components/wealth-shift/TicketIncludes'
import WhyStructure from '../components/wealth-shift/WhyStructure'
import Disclaimer from '../components/wealth-shift/Disclaimer'
import FinalCTA from '../components/wealth-shift/FinalCTA'

export default function WealthShiftPage() {
  return (
    <div className="cartflows-container">
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1162"
        className="elementor elementor-1162"
      >
        <HeroMobile />
        <HeroDesktop />
        <WhyDifferent />
        <DestinataBanner />
        <WalkAwayWith />
        <ProvenStrategies />
        <SellsOutBanner />
        <EventDetails />
        <TicketIncludes />
        <WhyStructure />
        <Disclaimer />
        <FinalCTA />
      </div>
    </div>
  )
}
