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
        description="Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 29 August 2026 | Lord Charles, Somerset West | 09:00–17:00 | R800 per person."
        ogTitle="30 Years of Building Wealth – One Historic Celebration | Wealth Masters Club"
        ogDescription="Join Wealth Masters Club as we celebrate 30 years of helping South Africans build lasting wealth. 29 August 2026 | Lord Charles, Somerset West | R800 per person."
        canonical="https://events.wealthmastersclub.com/cpt-30th-birthday"
      />
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1163"
        className="elementor elementor-1163"
      >
        <NavBar accentColor="#4782b5" accentColorLight="#a3c0da" bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles" />
        <Hero
          speakersImage="/images/30th-birthday/cpt-speakers.png"
          accentColor="#4782b5"
          accentColorLight="#a3c0da"
          date="29 AUGUST 2026"
          dateLabel="SATURDAY"
          venueName="LORD CHARLES"
          venueCity="SOMERSET WEST"
          eyebrow="30 YEARS OF BUILDING WEALTH"
          headlineGold={['ONE HISTORIC', 'CELEBRATION']}
          bodyText="Discover the proven property investment strategies that have helped thousands of South Africans build lasting wealth for over 30 years."
        />
        <HistoricMilestone />
        <Speakers speakers={[
          {
            roleLabel: null,
            name: 'JENNY RUSHIN',
            subRole: "CAPE TOWN'S LEADING BOND ORIGINATOR",
            bio: "Discover how experienced investors access funding and leverage Other People's Money to grow their portfolios.",
            image: '/images/30th-birthday/jenny-rushin.png',
          },
          {
            roleLabel: 'HOST AND FOUNDER OF WEALTH MASTERS CLUB',
            name: 'COERT COETZEE',
            subRole: null,
            bio: 'Sharing the principles that have helped thousands of investors build lasting wealth over three decades.',
            image: '/images/30th-birthday/photo-coert-headshot.png',
          },
          {
            roleLabel: 'SPECIAL GUEST SPEAKER',
            name: null,
            subRole: 'LEADING PROPERTY ATTORNEY',
            bio: 'Learn how the right legal structures help protect wealth and create better investment outcomes.',
            image: '/images/30th-birthday/Hanli-Mari-Durow.png',
          },
        ]} />
        <WhatYoullExperience />
        <TicketAndPartners lastItemLabel="EXCLUSIVE EVENT GOODY BAG" iconFilter="brightness(0) saturate(100%) invert(47%) sepia(48%) saturate(400%) hue-rotate(175deg) brightness(95%)" />
        <WhyDifferent />
        <EventDetails
          accentColor="#4782b5"
          accentColorLight="#a3c0da"
          date="Saturday, 29 August 2026"
          venue="Lord Charles, Somerset West, Cape Town"
          includes={"Arrival refreshments\nBuffet Lunch\nTea & Coffee\nExclusive event goody bag"}
          bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles"
        />
        <IsThisForYou />
        <FAQs
          accentColor="#4782b5"
          accentColorLight="#a3c0da"
          eventLocation="Lord Charles, Somerset West, Cape Town"
          eventDate="Saturday, 29 August 2026"
          parkingVenue="Lord Charles"
          speakersAnswer="The day will be hosted by Coert Coetzee, Founder of Wealth Masters Club. He will be joined by Jenny Rushin, Cape Town's Leading Bond Originator, and Hanli-Mari Durow, Attorney, Conveyancer and Notary at Jacobs Robbertse Attorneys. Together, they will share practical insights into property investment, finance and property law, giving you valuable knowledge to invest with greater confidence and protect your property portfolio."
          bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles"
        />
        <FinalCTA
          accentColor="#4782b5"
          accentColorLight="#a3c0da"
          date="29 AUGUST 2026"
          dateLabel="SATURDAY"
          venueName="LORD CHARLES"
          venueCity="SOMERSET WEST"
          bookingUrl="https://www.quicket.co.za/events/369918-wealth-property-full-day-masterclass-30-year-anniversary-2908-lord-charles"
        />
      </div>
    </div>
  )
}
