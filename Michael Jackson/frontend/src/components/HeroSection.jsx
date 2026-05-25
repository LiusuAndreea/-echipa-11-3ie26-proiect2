import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const parallax = { transform: `translateY(${scrollY * 0.25}px)` }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated blobs */}
      <div style={parallax} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-700/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-700/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.08)_0%,transparent_70%)]" />

      <div className="container-custom relative z-10 text-center pt-20">
        <div className="mb-6 animate-fade-in">
          <span className="font-mono text-xs tracking-[0.4em] uppercase text-purple-400">
            ✦ Regele Pop-ului ✦
          </span>
        </div>

        <h1 className="font-heading font-bold text-6xl md:text-8xl lg:text-[110px] leading-none mb-6 animate-slide-up">
          <span className="block text-white">MICHAEL</span>
          <span className="block gradient-text text-shadow-glow">JACKSON</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-slide-up animation-delay-200">
          Cel mai de succes entertainer din toate timpurile.
          <br />
          <em className="text-zinc-300">„Nu este suficient să fii bun. Trebuie să fii legendar."</em>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up animation-delay-400">
          <Link to="/albume" className="btn-primary text-base px-9 py-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            Explorează Discografia
          </Link>
          <Link to="/despre" className="btn-outline text-base px-9 py-4">
            Descoperă Povestea
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 mt-16 text-center animate-fade-in animation-delay-600">
          {[
            { value: '400M+', label: 'Discuri vândute' },
            { value: '13', label: 'Premii Grammy' },
            { value: '45', label: 'Ani de carieră' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading font-bold text-2xl md:text-3xl gradient-text">{s.value}</p>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-600">
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Derulează</span>
        <div className="w-6 h-10 rounded-full border border-zinc-700 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-purple-400 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
