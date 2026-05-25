import React from 'react'

export default function EventCard({ event, index = 0 }) {
  const { title, location, date, image, category, price, ticketsUrl } = event

  const formatted = date
    ? new Date(date).toLocaleDateString('ro-RO', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  const isPast = date ? new Date(date) < new Date() : false

  return (
    <div className="group glass rounded-2xl overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="tag">{category}</span>
          {isPast && (
            <span className="px-2 py-0.5 rounded-full text-xs bg-zinc-800/80 text-zinc-400 border border-zinc-700/40 font-mono">
              Trecut
            </span>
          )}
        </div>
        {price && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-900/70 text-purple-300 border border-purple-700/40 backdrop-blur-sm">
              {price}
            </span>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-heading font-bold text-white text-lg leading-tight group-hover:text-purple-300 transition-colors">
          {title}
        </h3>

        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatted}
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <svg className="w-4 h-4 text-pink-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>

        {!isPast && ticketsUrl && price !== 'Sold Out' && (
          <a
            href={ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs w-full justify-center py-2.5"
          >
            Cumpără Bilet
          </a>
        )}
        {price === 'Sold Out' && (
          <div className="w-full py-2.5 text-center text-xs font-semibold rounded-full border border-zinc-700 text-zinc-500">
            Sold Out
          </div>
        )}
      </div>
    </div>
  )
}
