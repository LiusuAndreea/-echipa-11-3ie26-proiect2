import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import SectionTitle from '../components/SectionTitle'
import EventCard from '../components/EventCard'
import { SkeletonCard } from '../components/Loader'
import { useEvents } from '../hooks/useEvents'
import { useBlogPosts } from '../hooks/useBlogPosts'

const BLOG_CATS = ['Toate', 'Culise', 'Artă', 'Vești']

export default function Events() {
  const { events, loading: evLoading } = useEvents()
  const { posts, loading: blogLoading } = useBlogPosts()
  const [activeCategory, setActiveCategory] = useState('Toate')
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState(null)

  const featuredEvent = events.find((e) => e.isFeatured) || events[0]
  const otherEvents = events.filter((e) => e.id !== featuredEvent?.id)

  const filteredPosts =
    activeCategory === 'Toate'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSubStatus('success')
    setEmail('')
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-36 pb-16 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.08)_0%,transparent_60%)]" />
        <div className="container-custom relative">
          <div className="animate-slide-up">
            <span className="font-mono text-xs tracking-widest uppercase text-pink-400 mb-4 block">
              ── Live & Știri ──
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-5 leading-none">
              Tribut &<br />
              <span className="gradient-text-pink">Moștenire</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Concerte tribut, expoziții și evenimente culturale ce păstrează vie
              moștenirea celui mai mare entertainer din toate timpurile.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && (
        <section className="pb-0 bg-zinc-950">
          <div className="container-custom">
            <div className="relative rounded-3xl overflow-hidden h-[420px] md:h-[500px] group">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 md:p-14 max-w-xl">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="tag">Eveniment principal</span>
                    <span className="tag bg-pink-900/40 text-pink-300 border-pink-700/40">
                      {featuredEvent.category}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4 leading-tight">
                    {featuredEvent.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(featuredEvent.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {featuredEvent.location}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-2">
                    {featuredEvent.description}
                  </p>
                  {featuredEvent.price !== 'Sold Out' ? (
                    <a href={featuredEvent.ticketsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Cumpără Bilet — {featuredEvent.price}
                    </a>
                  ) : (
                    <span className="inline-flex items-center px-6 py-3 rounded-full border border-zinc-700 text-zinc-500 text-sm font-semibold">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content + Sidebar */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Events */}
            <div className="lg:col-span-2 space-y-10">
              {/* Tribute Events */}
              <div>
                <SectionTitle
                  label="Tribut"
                  title="Concerte & Evenimente Tribut"
                  align="left"
                />
                {evLoading ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[1, 2].map((i) => <SkeletonCard key={i} />)}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {otherEvents.map((ev, i) => <EventCard key={ev.id} event={ev} index={i} />)}
                  </div>
                )}
              </div>

              {/* Blog */}
              <div>
                <SectionTitle
                  label="Blog"
                  title="Știri & Culise"
                  align="left"
                />
                <div className="flex flex-wrap gap-2 mb-6">
                  {BLOG_CATS.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                        activeCategory === cat
                          ? 'bg-pink-700 text-white shadow-glow-pink'
                          : 'glass text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                {blogLoading ? (
                  <div className="space-y-4">
                    {[1, 2].map((i) => <SkeletonCard key={i} />)}
                  </div>
                ) : (
                  <div className="space-y-5">
                    {filteredPosts.map((post) => (
                      <article
                        key={post.id}
                        className="glass rounded-2xl overflow-hidden group hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                          <div className="relative aspect-video sm:aspect-auto overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="sm:col-span-2 p-5 space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="tag">{post.category}</span>
                              <span className="text-xs text-zinc-600 font-mono">{post.readTime} citire</span>
                            </div>
                            <h3 className="font-heading font-bold text-white text-base leading-tight group-hover:text-purple-300 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed">{post.content}</p>
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-xs text-zinc-600 font-mono">
                                {new Date(post.date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </span>
                              <span className="text-xs text-purple-400 hover:text-pink-400 transition-colors font-medium flex items-center gap-1">
                                Citește
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Newsletter */}
              <div className="glass rounded-2xl p-6 border border-purple-800/20">
                <div className="text-center mb-5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700/30 to-pink-700/30 border border-purple-700/30 flex items-center justify-center mx-auto mb-3 text-xl">
                    📬
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">Newsletter</h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    Primești primul noutăți despre concerte și lansări.
                  </p>
                </div>
                {subStatus === 'success' ? (
                  <div className="text-center py-4">
                    <p className="text-green-400 text-sm font-medium">✓ Abonament confirmat!</p>
                    <p className="text-zinc-500 text-xs mt-1">Verifică email-ul pentru confirmare.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      placeholder="adresa@email.ro"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-900/60 border border-zinc-700/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-all"
                    />
                    <button type="submit" className="btn-primary w-full justify-center text-xs py-2.5">
                      Abonează-te
                    </button>
                  </form>
                )}
              </div>

              {/* Quick Links */}
              <div className="glass rounded-2xl p-5">
                <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-4">Categorii Blog</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Culise', count: 2 },
                    { name: 'Artă', count: 1 },
                    { name: 'Vești', count: 1 },
                  ].map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setActiveCategory(cat.name)}
                        className="flex items-center justify-between w-full group py-1.5"
                      >
                        <span className="text-zinc-400 group-hover:text-purple-400 text-sm transition-colors">
                          {cat.name}
                        </span>
                        <span className="font-mono text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-full">
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MJ Legacy Note */}
              <div className="glass rounded-2xl p-5 border border-purple-800/20">
                <p className="font-mono text-xs uppercase tracking-wider text-purple-400 mb-3">Moștenire</p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Michael Jackson (1958–2009) rămâne cel mai mare entertainer din toate timpurile.
                  Muzica, dansul și spectacolele sale continuă să inspire generații întregi.
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-800/60">
                  <p className="text-xs text-zinc-600 font-mono italic">
                    „Muzica a fost prezentă în mine chiar înainte ca eu să știu că există."
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
