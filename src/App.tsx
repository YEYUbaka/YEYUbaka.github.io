import { useEffect } from 'react'
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { StarfieldCanvas } from './components/StarfieldCanvas'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'
import { WorkDetailPage } from './pages/WorkDetailPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function useCardSpotlight() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof HTMLElement)) return

      const card = target.closest<HTMLElement>('.card')
      if (!card) return

      const rect = card.getBoundingClientRect()
      card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`)
      card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`)
    }

    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])
}

export default function App() {
  useCardSpotlight()

  return (
    <HashRouter>
      <ScrollToTop />
      <StarfieldCanvas />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works/:id" element={<WorkDetailPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

