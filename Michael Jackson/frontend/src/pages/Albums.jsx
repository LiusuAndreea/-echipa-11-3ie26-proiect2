import React, { useState, useMemo } from 'react'
import MainLayout from '../layouts/MainLayout'
import SectionTitle from '../components/SectionTitle'
import AlbumCard from '../components/AlbumCard'
import { SkeletonCard } from '../components/Loader'
import { useAlbums } from '../hooks/useAlbums'

const GENRES = ['Toate', 'Pop / R&B', 'Pop / Funk / R&B', 'Disco / Funk / Soul', 'New Jack Swing / Pop', 'Pop / R&B / Rock', 'Pop / R&B / Soul']

export default function Albums() {
  const { albums, loading } = useAlbums()
  const [activeGenre, setActiveGenre] = useState('Toate')
  const [sort, setSort] = useState('newest')

  const filtered = useMemo(() => {
    let list = activeGenre === 'Toate' ? albums : albums.filter((a) => a.genre === activeGenre)
    if (sort === 'newest') {
      list = [...list].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
    } else if (sort === 'oldest') {
      list = [...list].sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate))
    }
    return list
  }, [albums, activeGenre, sort])

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.1)_0%,transparent_60%)]" />
        <div className="container-custom relative">
          <div className="text-center max-w-2xl mx-auto animate-slide-up">
            <span className="font-mono text-xs tracking-widest uppercase text-purple-400 mb-4 block">
              ── Discografie ──
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-5 leading-none">
              Albume &<br />
              <span className="gradient-text">Proiecte</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              De la primii pași cu Jackson 5 până la ultimele înregistrări solo —
              o discografie care a redefinit muzica pop pentru totdeauna.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-zinc-900/50 border-y border-zinc-800/60 py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { label: 'Albume', value: albums.length },
              { label: 'Piese Totale', value: albums.reduce((s, a) => s + (a.tracks || 0), 0) },
              { label: 'Genuri', value: new Set(albums.map((a) => a.genre)).size },
              { label: 'Ani activi', value: '1964 — 2009' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-heading font-bold text-2xl text-white">{s.value}</p>
                <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-zinc-950 border-b border-zinc-800/40 sticky top-16 z-30 backdrop-blur-xl bg-zinc-950/90">
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {GENRES.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGenre(g)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeGenre === g
                    ? 'bg-purple-700 text-white shadow-glow-purple'
                    : 'glass text-zinc-400 hover:text-white hover:border-zinc-600'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-2 text-xs text-zinc-300 focus:outline-none focus:border-purple-500"
          >
            <option value="newest">Cel mai recent</option>
            <option value="oldest">Cel mai vechi</option>
          </select>
        </div>
      </section>

      {/* Albums Grid */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">Nu există albume în categoria selectată.</p>
              <button onClick={() => setActiveGenre('Toate')} className="mt-4 btn-outline text-sm">
                Resetează filtrul
              </button>
            </div>
          ) : (
            <>
              <p className="text-zinc-500 text-sm mb-6 font-mono">
                {filtered.length} {filtered.length === 1 ? 'album' : 'albume'} găsite
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((album, i) => (
                  <AlbumCard key={album.id} album={album} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Featured Album Showcase */}
      {!loading && albums.length > 0 && (
        <section className="section-pad bg-gradient-to-b from-zinc-950 to-zinc-900">
          <div className="container-custom">
            <SectionTitle
              label="În Evidență"
              title="Thriller — Albumul #1 din toate timpurile"
              align="left"
            />
            <div className="glass rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-square lg:aspect-auto">
                  <img
                    src={albums[0]?.coverImage}
                    alt={albums[0]?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-950/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent lg:hidden" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center space-y-6">
                  <span className="tag w-fit">{albums[0]?.genre}</span>
                  <h2 className="font-heading font-bold text-4xl text-white leading-tight">
                    {albums[0]?.title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed">{albums[0]?.description}</p>
                  <div className="flex items-center gap-6 text-sm text-zinc-500 font-mono">
                    <span>{new Date(albums[0]?.releaseDate).getFullYear()}</span>
                    {albums[0]?.tracks && <span>{albums[0].tracks} piese</span>}
                    {albums[0]?.duration && <span>{albums[0].duration}</span>}
                  </div>
                  <a
                    href={albums[0]?.streamingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-fit"
                  >
                    Ascultă pe Spotify
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </MainLayout>
  )
}
