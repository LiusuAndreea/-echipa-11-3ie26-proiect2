import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/HeroSection'
import SectionTitle from '../components/SectionTitle'
import AlbumCard from '../components/AlbumCard'
import TestimonialCard from '../components/TestimonialCard'
import SocialLinks from '../components/SocialLinks'
import { SkeletonCard } from '../components/Loader'
import { useAlbums } from '../hooks/useAlbums'
import { mockTestimonials, mockSongs } from '../data/mockData'

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true
          const num = parseFloat(target)
          const step = num / 60
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= num) { setCount(num); clearInterval(timer) }
            else setCount(parseFloat(current.toFixed(1)))
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])

  return <span ref={ref}>{count % 1 === 0 ? count : count.toFixed(1)}{suffix}</span>
}

export default function Home() {
  const { albums, loading } = useAlbums()
  const featured = albums.slice(0, 3)

  return (
    <MainLayout>
      <HeroSection />

      {/* Artist Spotlight */}
      <section className="section-pad bg-zinc-950 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-700/30 to-pink-700/30 blur-2xl" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg"
                  alt="Michael Jackson"
                  className="relative w-full h-full object-cover rounded-3xl shadow-card"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-purple-500/20" />
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 border border-purple-700/30">
                  <p className="font-mono text-xs text-purple-400">Albumul legendar</p>
                  <p className="font-heading font-bold text-white text-sm">Thriller</p>
                  <p className="font-mono text-xs text-zinc-500">1982 · #1 All Time</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="font-mono text-xs tracking-widest uppercase text-purple-400">
                ── Artist Spotlight ──
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
                Muzică ce a<br />
                <span className="gradient-text">schimbat lumea</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Michael Joseph Jackson (29 august 1958 – 25 iunie 2009) a fost un cântăreț,
                compozitor, dansator și filantrop american, supranumit „Regele Pop-ului".
                Considerat cel mai de succes entertainer din toate timpurile, cariera sa
                solo a produs unele dintre cele mai bine vândute albume din istoria muzicii.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Cu 13 premii Grammy, 26 de American Music Awards și peste 400 de milioane
                de discuri vândute, Michael Jackson a redefinit muzica pop, videoclipul
                muzical și spectacolul live pentru totdeauna.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/despre" className="btn-primary">Descoperă Povestea</Link>
                <Link to="/albume" className="btn-outline">Explorează Discografia</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Albums */}
      <section className="section-pad bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="container-custom">
          <SectionTitle
            label="Discografie"
            title="Albume legendare"
            subtitle="De la Off the Wall la Invincible — o carieră muzicală ce a schimbat lumea pentru totdeauna."
          />
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((album, i) => <AlbumCard key={album.id} album={album} index={i} />)}
            </div>
          )}
          <div className="text-center mt-10">
            <Link to="/albume" className="btn-outline">
              Vezi Toată Discografia
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-pad bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.06)_0%,transparent_70%)]" />
        <div className="container-custom relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '400', suffix: 'M+', label: 'Discuri Vândute', icon: '💿', color: 'text-purple-400' },
              { value: '13', suffix: '', label: 'Premii Grammy', icon: '🏆', color: 'text-yellow-400' },
              { value: '26', suffix: '', label: 'American Music Awards', icon: '⭐', color: 'text-pink-400' },
              { value: '45', suffix: ' ani', label: 'Ani de Carieră', icon: '👑', color: 'text-cyan-400' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className={`font-heading font-bold text-3xl md:text-4xl ${stat.color} mb-1`}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Songs */}
      <section className="section-pad bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container-custom">
          <SectionTitle
            label="Top Melodii"
            title="Cele mai ascultate piese"
            subtitle="Hituri care au depășit miliarde de stream-uri — apasă player-ul de jos pentru a le asculta."
            align="left"
          />
          <div className="space-y-2 max-w-2xl">
            {mockSongs.map((song, i) => (
              <div
                key={song.id}
                onClick={() => window.dispatchEvent(new CustomEvent('mj-play-song', { detail: { title: song.title } }))}
                className="group glass rounded-xl px-5 py-4 flex items-center gap-4 hover:shadow-card hover:border-purple-700/40 transition-all duration-200 cursor-pointer"
              >
                <span className="font-mono text-xs text-zinc-600 w-5 text-right flex-shrink-0 group-hover:hidden">{i + 1}</span>
                <button className="hidden group-hover:flex w-5 h-5 items-center justify-center text-purple-400 flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium text-sm truncate">{song.title}</p>
                  <p className="text-zinc-500 text-xs truncate">{song.album}</p>
                </div>
                <span className="font-mono text-xs text-zinc-500 hidden sm:block">{song.streams}</span>
                <span className="font-mono text-xs text-zinc-600 flex-shrink-0">{song.duration}</span>
              </div>
            ))}
          </div>
          <p className="text-zinc-600 text-xs font-mono mt-4">
            ♪ Apasă butonul player din josul paginii pentru previzualizări reale de 30 sec de pe iTunes.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          <SectionTitle
            label="Tribut"
            title="Ce spun legendele despre el"
            subtitle="Voci din industria muzicală și din lumea întreagă despre moștenirea lui Michael Jackson."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {mockTestimonials.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="container-custom text-center space-y-8">
          <SectionTitle
            label="Urmărește"
            title="Michael Jackson pe platforme"
            subtitle="Ascultă muzica pe Spotify, YouTube, Apple Music și urmărește tributul pe rețelele sociale."
          />
          <SocialLinks showLabels size="lg" />
        </div>
      </section>
    </MainLayout>
  )
}
