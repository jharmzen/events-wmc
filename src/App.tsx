import { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import WealthShiftPage from './pages/WealthShiftPage'
import JhbMasterclassPage from './pages/JhbMasterclassPage'
import CptMasterclassPage from './pages/CptMasterclassPage'

const APP_VERSION = __APP_VERSION__
const RELOAD_KEY = 'version_reload_attempted'

export default function App() {
  useEffect(() => {
    if (!import.meta.env.PROD) return
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
      <Route path="/wealth-shift-20260708" element={<WealthShiftPage />} />
      {/* Old slug retained for historic marketing runs — redirect to current date */}
      <Route path="/wealth-shift-20260617" element={<Navigate to="/wealth-shift-20260708" replace />} />
      <Route path="/jhb-masterclass-20260815" element={<JhbMasterclassPage />} />
      <Route path="/cpt-masterclass-20260725" element={<CptMasterclassPage />} />
      {/* Old slug retained for historic marketing runs — redirect to current date */}
      <Route path="/jhb-masterclass-20260704" element={<Navigate to="/jhb-masterclass-20260815" replace />} />
      {/* Dev/marketing short link — redirect to canonical slug */}
      <Route path="/040072026" element={<Navigate to="/jhb-masterclass-20260815" replace />} />
    </Routes>
  )
}
