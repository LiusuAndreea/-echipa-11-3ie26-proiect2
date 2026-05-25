import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 transition-colors duration-300">
      <CustomCursor />
      <ScrollProgress />
      <AppRoutes />
    </div>
  )
}
