import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { PageLoader } from '../components/Loader'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Albums = lazy(() => import('../pages/Albums'))
const Events = lazy(() => import('../pages/Events'))
const Contact = lazy(() => import('../pages/Contact'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/despre" element={<About />} />
        <Route path="/albume" element={<Albums />} />
        <Route path="/evenimente" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center px-4">
              <p className="font-mono text-xs text-purple-400 tracking-widest uppercase">Eroare 404</p>
              <h1 className="font-heading text-5xl font-bold text-white">Pagina nu există</h1>
              <p className="text-zinc-400 max-w-sm">
                Această pagină nu a putut fi găsită. Poate a fost mutată sau nu există.
              </p>
              <a href="/" className="btn-primary mt-4">Înapoi Acasă</a>
            </div>
          }
        />
      </Routes>
    </Suspense>
  )
}
