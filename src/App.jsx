import { Routes, Route, Navigate } from 'react-router-dom'
import { business } from './data/business'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import OnePage from './OnePage'

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-slate-100"
      >
        Skip to content
      </a>

      <Navbar displayName={business.displayName} phoneTel={business.phoneTel} />

      <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-8">
        <Routes>
          <Route path="/" element={<OnePage />} />
          <Route path="/location" element={<OnePage />} />
          <Route path="/contact" element={<OnePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

