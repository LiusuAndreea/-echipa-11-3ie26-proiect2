import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/despre', label: 'Despre' },
  { to: '/albume', label: 'Albume' },
  { to: '/evenimente', label: 'Evenimente' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/60 shadow-glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-glow-purple group-hover:shadow-glow-pink transition-all duration-300 text-sm">
              ♛
            </div>
            <span className="font-heading font-bold text-lg text-white">
              Michael <span className="gradient-text">Jackson</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/5 shadow-glow-purple'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="hidden md:flex btn-primary text-xs px-5 py-2.5">
              Contact
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Deschide meniu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className="block h-px bg-current" />
                <span className="block h-px bg-current" />
                <span className="block h-px bg-current w-3/4 ml-auto" />
              </div>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  )
}
