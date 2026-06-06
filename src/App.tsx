import { useEffect } from 'react'
import HeroMobile from './components/HeroMobile'
import HeroDesktop from './components/HeroDesktop'
import LogosSlider from './components/LogosSlider'
import WhyDifferent from './components/WhyDifferent'
import WalkAwayWith from './components/WalkAwayWith'
import ProvenStrategies from './components/ProvenStrategies'
import AsFeaturedIn from './components/AsFeaturedIn'
import SellsOutBanner from './components/SellsOutBanner'
import EventDetails from './components/EventDetails'
import DestinataBanner from './components/DestinataBanner'
import TicketIncludes from './components/TicketIncludes'
import Testimonials from './components/Testimonials'
import WhyStructure from './components/WhyStructure'
import EventHighlights from './components/EventHighlights'
import CityCards from './components/CityCards'
import SocialShare from './components/SocialShare'
import Disclaimer from './components/Disclaimer'
import HomePageCTA from './components/HomePageCTA'
import FinalCTA from './components/FinalCTA'

const APP_VERSION = '0.1.0'
const RELOAD_KEY = 'version_reload_attempted'

export default function App() {
  useEffect(() => {
    fetch(`/version.json?t=${Date.now()}`)
      .then((res) => res.json())
      .then(async (data: { version: string }) => {
        if (data.version !== APP_VERSION) {
          const lastAttempt = sessionStorage.getItem(RELOAD_KEY)
          if (lastAttempt === data.version) return
          sessionStorage.setItem(RELOAD_KEY, data.version)
          if ('caches' in window) {
            const names = await caches.keys()
            await Promise.all(names.map((name) => caches.delete(name)))
          }
          if ('serviceWorker' in navigator) {
            const regs = await navigator.serviceWorker.getRegistrations()
            await Promise.all(regs.map((reg) => reg.unregister()))
          }
          window.location.href = window.location.pathname + '?_v=' + data.version
        } else {
          sessionStorage.removeItem(RELOAD_KEY)
          if (window.location.search.includes('_v=')) {
            window.history.replaceState({}, '', window.location.pathname + window.location.hash)
          }
        }
      })
      .catch(() => {
        // version.json not available — skip
      })
  }, [])

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
