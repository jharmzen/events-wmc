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

export default function CptThirtiethBirthdayPage() {
  return (
    <div className="cartflows-container birthday-page">
      <RouteHead
        title="30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club"
        description="Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | 09:00–17:00 | R800 per person."
        ogTitle="30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club"
        ogDescription="Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 15 August 2026 | Emperors Palace, Kempton Park | R800 per person."
        canonical="https://events.wealthmastersclub.com/cpt-30th-birthday"
      />
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1163"
        className="elementor elementor-1163"
      >
        <NavBar accentColor="#4782b5" accentColorLight="#a3c0da" bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles" />
        <Hero heroImage="/images/30th-birthday/bg-30-years-hero-cpt.png" accentColor="#4782b5" accentColorLight="#a3c0da" date="29 AUGUST 2026" dateLabel="SATURDAY" />
        <HistoricMilestone />
        <Speakers />
        <WhatYoullExperience />
        <TicketAndPartners />
        <WhyDifferent />
        <EventDetails accentColor="#4782b5" accentColorLight="#a3c0da" date="Saturday, 29 August 2026" bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles" />
        <IsThisForYou />
        <FAQs accentColor="#4782b5" accentColorLight="#a3c0da" bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles" />
        <FinalCTA accentColor="#4782b5" accentColorLight="#a3c0da" date="29 AUGUST 2026" dateLabel="SATURDAY" bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles" />
      </div>
    </div>
  )
}
