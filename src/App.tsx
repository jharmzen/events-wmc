import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import WealthShiftPage from './pages/WealthShiftPage'

const APP_VERSION = '0.2.0'
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
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/wealth-shift-20260617" element={<WealthShiftPage />} />
    </Routes>
  )
}
