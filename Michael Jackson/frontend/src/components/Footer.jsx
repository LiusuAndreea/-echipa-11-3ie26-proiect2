import React from 'react'
import { Link } from 'react-router-dom'
import SocialLinks from './SocialLinks'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 w-fit">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-glow-purple text-base">
                ♛
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Michael <span className="gradient-text">Jackson</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-2">
              „Regele Pop-ului" — cel mai vândut artist muzical din toate timpurile.
              29 august 1958 – 25 iunie 2009.
            </p>
            <p className="text-zinc-600 text-xs font-mono mb-6 italic">
              „In a world filled with hate, we must still dare to hope."
            </p>
            <SocialLinks />
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-mono uppercase tracking-wider">Navigare</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Acasă' },
                { to: '/despre', label: 'Despre Michael' },
                { to: '/albume', label: 'Discografie' },
                { to: '/evenimente', label: 'Evenimente & Blog' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-zinc-400 hover:text-purple-400 text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5 font-mono uppercase tracking-wider">Contact & Info</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@mj-tribute.ro
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Los Angeles, California
              </li>
              <li className="flex items-center gap-2 text-zinc-500 text-xs italic">
                Site tribut oficial · Proiect educațional
              </li>
            </ul>
            <div className="mt-5 space-y-1">
              <p className="text-xs text-zinc-600 font-mono">Albume de referință:</p>
              {['Thriller', 'Bad', 'Off the Wall'].map((a) => (
                <p key={a} className="text-xs text-zinc-500">· {a}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs font-mono text-center md:text-left">
            © {year} Michael Jackson Tribute. Site educațional neoficial.
          </p>
          <div className="flex items-center gap-1 text-xs text-zinc-600 font-mono">
            <span>Construit cu</span>
            <span className="text-red-500">♥</span>
            <span>React + TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
