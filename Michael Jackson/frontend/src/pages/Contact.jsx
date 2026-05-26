import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email General',
    value: 'contact@mj-tribute.ro',
    href: 'mailto:contact@mj-tribute.ro',
    color: 'text-purple-400',
  },
  {
    icon: '🎤',
    label: 'Tribut & Evenimente',
    value: 'events@mj-tribute.ro',
    href: 'mailto:events@mj-tribute.ro',
    color: 'text-pink-400',
  },
  {
    icon: '📰',
    label: 'Presă & Media',
    value: 'press@mj-tribute.ro',
    href: 'mailto:press@mj-tribute.ro',
    color: 'text-cyan-400',
  },
  {
    icon: '🌐',
    label: 'Site Oficial MJ',
    value: 'www.michaeljackson.com',
    href: 'https://www.michaeljackson.com',
    color: 'text-green-400',
  },
  {
    icon: '📍',
    label: 'Locație',
    value: 'Los Angeles, California',
    href: null,
    color: 'text-orange-400',
  },
]

export default function Contact() {
  return (
    <MainLayout>
      {/* Page Header */}
      <section className="relative pt-36 pb-16 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.07)_0%,transparent_60%)]" />
        <div className="container-custom relative text-center max-w-2xl mx-auto">
          <div className="animate-slide-up">
            <span className="font-mono text-xs tracking-widest uppercase text-purple-400 mb-4 block">
              ── Ia legătura ──
            </span>
            <h1 className="font-heading font-bold text-5xl md:text-7xl text-white mb-5 leading-none">
              Contactează<br />
              <span className="gradient-text">
                MJ Tribute
              </span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Fie că ești fan, jurnalist, organizator de evenimente sau vrei să contribui
              la moștenirea Regelui Pop — suntem aici pentru tine.
            </p>
          </div>
        </div>
      </section>

      {/* Split Screen */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left: Form */}
            <div className="lg:col-span-3">
              <div className="glass rounded-3xl p-8 md:p-10">
                <div className="mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-2 block">
                    Formular de contact
                  </span>
                  <h2 className="font-heading font-bold text-2xl text-white">Trimite un mesaj</h2>
                  <p className="text-zinc-500 text-sm mt-1">
                    Răspundem în 24–48 de ore în zilele lucrătoare.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Right: Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <div className="glass rounded-3xl p-7 space-y-5">
                <h3 className="font-heading font-bold text-white text-xl">Informații de contact</h3>
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl glass flex items-center justify-center flex-shrink-0 text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-zinc-500 text-xs font-mono uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-sm font-medium ${item.color} hover:opacity-80 transition-opacity`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className={`text-sm font-medium ${item.color}`}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="glass rounded-3xl p-7 space-y-4">
                <h3 className="font-heading font-bold text-white text-xl">Rețele Sociale</h3>
                <p className="text-zinc-500 text-sm">
                  Urmărește muzica lui Michael Jackson pe platformele de streaming.
                </p>
                <SocialLinks showLabels />
              </div>

              {/* Hours */}
              <div className="glass rounded-3xl p-7 space-y-4">
                <h3 className="font-heading font-bold text-white text-xl">Program Răspuns</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Luni – Vineri', time: '10:00 – 18:00' },
                    { day: 'Sâmbătă', time: '11:00 – 15:00' },
                    { day: 'Duminică', time: 'Închis' },
                  ].map((item) => (
                    <div key={item.day} className="flex items-center justify-between">
                      <span className="text-zinc-400">{item.day}</span>
                      <span className={`font-mono text-xs ${item.time === 'Închis' ? 'text-zinc-600' : 'text-purple-400'}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-zinc-600 text-xs border-t border-zinc-800 pt-3 mt-3">
                  * Mesajele primite după program sunt citite în prima zi lucrătoare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-pad bg-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-3 block">
                Locație
              </span>
              <h2 className="font-heading font-bold text-3xl text-white mb-4">
                Los Angeles, California
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Michael Jackson a trăit și a creat muzică în Los Angeles, California.
                Westlake Recording Studios din West Hollywood a fost locul unde s-au
                înregistrat Thriller, Bad și Off the Wall — albume ce au schimbat
                pentru totdeauna istoria muzicii mondiale.
              </p>
              <div className="space-y-3">
                {[
                  { icon: '🎵', text: 'Înregistrări: Westlake Recording Studios, West Hollywood' },
                  { icon: '📬', text: 'Contact: contact@mj-tribute.ro' },
                  { icon: '🌐', text: 'Site oficial: www.michaeljackson.com' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden h-72 lg:h-96 glass">
              <iframe
                title="Los Angeles Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405700555!2d-118.69192047471895!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fef1de0f05e8f!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(85%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-purple-700/20 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-pad bg-zinc-950">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-3 block">
              Întrebări Frecvente
            </span>
            <h2 className="font-heading font-bold text-3xl text-white">Înainte să trimiți</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Cum pot organiza un eveniment tribut Michael Jackson?',
                a: 'Trimite un email la events@mj-tribute.ro cu detaliile evenimentului: dată, locație, tip de eveniment și buget estimat. Echipa noastră va răspunde în 2–3 zile lucrătoare cu opțiunile disponibile.',
              },
              {
                q: 'Cum pot contribui la arhiva MJ Tribute?',
                a: 'Dacă deții fotografii rare, înregistrări sau materiale despre Michael Jackson pe care dorești să le partajezi cu comunitatea, contactează-ne la contact@mj-tribute.ro cu subiectul [Arhivă].',
              },
              {
                q: 'Cum pot obține materiale de presă despre proiectul MJ Tribute?',
                a: 'Jurnaliștii și bloggerii pot solicita un kit de presă complet la press@mj-tribute.ro. Includeți publicația și scopul articolului pentru un răspuns prioritar.',
              },
              {
                q: 'Unde pot asculta muzica lui Michael Jackson online?',
                a: 'Muzica lui Michael Jackson este disponibilă pe Spotify, Apple Music, YouTube Music și Amazon Music. Folosește player-ul din josul site-ului pentru previzualizări de 30 de secunde direct din iTunes.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="glass rounded-2xl group"
              >
                <summary className="px-6 py-4 cursor-pointer text-white font-medium text-sm list-none flex items-center justify-between gap-4 hover:text-purple-300 transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-zinc-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-zinc-800/60 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
