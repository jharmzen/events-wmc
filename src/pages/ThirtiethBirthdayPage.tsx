import RouteHead from '../components/shared/RouteHead'
import NavBar from '../components/30th-birthday/NavBar'
import Hero from '../components/30th-birthday/Hero'
import HistoricMilestone from '../components/30th-birthday/HistoricMilestone'
import Speakers from '../components/30th-birthday/Speakers'
import WhatYoullExperience from '../components/30th-birthday/WhatYoullExperience'
import TicketAndPartners from '../components/30th-birthday/TicketAndPartners'
import WhyDifferent from '../components/30th-birthday/WhyDifferent'
import EventDetails from '../components/30th-birthday/EventDetails'
import IsThisForYou from '../components/30th-birthday/IsThisForYou'
import FAQs from '../components/30th-birthday/FAQs'
import FinalCTA from '../components/30th-birthday/FinalCTA'
import '../styles/birthday-page.css'

export default function ThirtiethBirthdayPage() {
  return (
    <div className="cartflows-container birthday-page">
      <RouteHead
        title="30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club"
        description="Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | 09:00–17:00 | R800 per person."
        ogTitle="30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club"
        ogDescription="Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | R800 per person."
        canonical="https://events.wealthmastersclub.com/30th-birthday"
      />
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1162"
        className="elementor elementor-1162"
      >
        <NavBar />
        <Hero />
        <HistoricMilestone />
        <Speakers />
        <WhatYoullExperience />
        <TicketAndPartners />
        <WhyDifferent />
        <EventDetails />
        <IsThisForYou />
        <FAQs />
        <FinalCTA />
      </div>
    </div>
  )
}
