import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SectionTitle from '../components/SectionTitle'
import Timeline from '../components/Timeline'
import { mockTimeline, mockAwards, mockSkills } from '../data/mockData'

const gallery = [
  'https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson_in_1988.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/91/Michael_Jackson_%281988%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Michael_Jackson_with_the_Reagans.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Michael_Jackson%2C_1988_%2846845017052%29.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2e/Michaeljackson1.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5e/Michael_Jackson_Reagan_Pete_Souza_1984.jpg',
]

export default function About() {
  return (
    <MainLayout>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-pink-900/10 rounded-full blur-3xl" />
        <div className="container-custom relative">
          <div className="max-w-3xl animate-slide-up">
            <span className="font-mono text-xs tracking-widest uppercase text-purple-400 mb-4 block">
              ── Povestea ──
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white leading-none mb-6">
              Despre<br />
              <span className="gradient-text">Michael Jackson</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Regele Pop-ului. Cel mai mare entertainer din toate timpurile.
              Un om care a transformat muzica, dansul și spectacolul în artă pură.
            </p>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="section-pad bg-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-2 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Michael_Jackson_1983_%283x4_cropped%29_%28contrast%29.jpg"
                  alt="Michael Jackson"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs text-purple-400 mb-1">Gary, Indiana · 1958</p>
                  <p className="font-heading text-xl font-bold text-white">Michael Joseph Jackson</p>
                  <p className="text-zinc-400 text-sm">„Regele Pop-ului"</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 glass rounded-2xl flex flex-col items-center justify-center text-center p-3 border border-purple-700/30">
                <span className="text-2xl font-bold gradient-text font-heading">45</span>
                <span className="text-[10px] text-zinc-500 font-mono uppercase">ani carieră</span>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <SectionTitle label="Biografie" title="Cine a fost Michael Jackson?" align="left" />
              <div className="space-y-4 text-zinc-400 leading-relaxed text-base">
                <p>
                  Michael Joseph Jackson s-a născut pe 29 august 1958 în Gary, Indiana, al optulea
                  din cei nouă copii ai familiei Jackson. De la vârsta de 5 ani, Michael a cântat
                  în trupa de familie „The Jackson 5", demonstrând un talent vocal și coregrafic
                  cu totul excepțional.
                </p>
                <p>
                  Debutul solo oficial a venit în 1971, dar marele punct de cotitură a fost albumul
                  <strong className="text-white"> Off the Wall</strong> (1979), produs alături de
                  Quincy Jones. Colaborarea lor a culminat cu <strong className="text-white">Thriller</strong>
                  (1982) — cel mai bine vândut album din toate timpurile, cu peste 66 de milioane de
                  exemplare vândute.
                </p>
                <p>
                  Pe 25 mai 1983, Michael a prezentat <strong className="text-white">moonwalk-ul</strong>
                  la Motown 25 — unul dintre cele mai iconice momente din istoria spectacolului.
                  Fred Astaire l-a sunat în aceeași seară: „Ești un blestem. Ești un dansator extraordinar."
                </p>
                <p>
                  Cariera sa a inclus 6 albume solo de studio, sute de concerte în întreaga lume,
                  13 premii Grammy și o influență culturală care continuă să rezoneze în muzică,
                  dans, modă și artă vizuală până în ziua de azi.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { icon: '🎤', label: 'Voce & Cântec' },
                  { icon: '💃', label: 'Dans & Moonwalk' },
                  { icon: '🎬', label: 'Videoclipuri Cinematice' },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-4 text-center hover:shadow-card transition-all">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-xs text-zinc-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          <SectionTitle
            label="Parcurs"
            title="O viață dedicată muzicii"
            subtitle="De la copilul-stea din Gary, Indiana, la cel mai mare entertainer pe care l-a văzut vreodată lumea."
            align="left"
          />
          <div className="max-w-2xl">
            <Timeline items={mockTimeline} />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-pad bg-zinc-900">
        <div className="container-custom">
          <SectionTitle
            label="Talente"
            title="Abilități & Instrumente"
            subtitle="Michael Jackson a stăpânit arta vocală, coregrafică și muzicală la cel mai înalt nivel posibil."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass rounded-xl p-5 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl mb-3">{skill.icon}</div>
                <p className="text-white font-medium text-sm mb-3">{skill.name}</p>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-right text-xs text-zinc-500 font-mono mt-1">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          <SectionTitle
            label="Premii"
            title="Distincții & Recorduri"
            subtitle="Michael Jackson deține recorduri mondiale care nu au fost egalate în industria muzicală."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mockAwards.map((award, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 text-center hover:shadow-glow-purple transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-600/30 to-orange-600/20 border border-yellow-600/30 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:scale-110 transition-transform">
                  🏆
                </div>
                <p className="font-mono text-xs text-yellow-400 mb-2">{award.year}</p>
                <h3 className="font-heading font-bold text-white text-sm mb-1 leading-tight">{award.title}</h3>
                <p className="text-zinc-500 text-xs">{award.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-zinc-900">
        <div className="container-custom">
          <SectionTitle
            label="Galerie"
            title="Momente Iconice"
            subtitle="Scene și instantanee dintr-o carieră unică în istoria muzicii mondiale."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="group overflow-hidden rounded-2xl">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={src}
                    alt={`Michael Jackson ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          <SectionTitle
            label="Citate"
            title="În cuvintele sale"
            subtitle="Gânduri și filozofia de viață ale celui care a fost și va rămâne Regele Pop-ului."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: 'Dacă vrei să faci o schimbare în lume, uită-te la omul din oglindă.',
                context: 'Man in the Mirror, 1987',
              },
              {
                quote: 'Nu este suficient să fii bun la ceea ce faci. Trebuie să fii obsesiv în privința perfecțiunii.',
                context: 'Interviu Rolling Stone, 1983',
              },
              {
                quote: 'Muzica a fost prezentă în mine chiar înainte ca eu să știu că există. A fost acolo mereu.',
                context: 'Autobiografia „Moonwalk", 1988',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-8 relative group hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-6xl text-purple-800/30 font-serif absolute top-4 left-5 select-none leading-none">"</div>
                <p className="text-zinc-300 font-heading italic text-lg leading-relaxed mb-6 relative">
                  {item.quote}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
                  <p className="text-zinc-600 text-xs font-mono">{item.context}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
