import React from 'react'

export default function AlbumCard({ album, index = 0 }) {
  const { title, genre, releaseDate, coverImage, streamingUrl, tracks, duration } = album
  const year = releaseDate ? new Date(releaseDate).getFullYear() : ''

  return (
    <div className="group relative glass rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-card">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={streamingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-500 flex items-center justify-center shadow-glow-purple transition-all duration-200 hover:scale-110"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <div className="absolute top-3 left-3">
          <span className="tag">{genre}</span>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-heading font-bold text-lg text-white group-hover:gradient-text transition-all duration-300 leading-tight">
            {title}
          </h3>
          <p className="font-mono text-xs text-zinc-500 mt-1">{year}</p>
        </div>

        {(tracks || duration) && (
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            {tracks && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                {tracks} piese
              </span>
            )}
            {duration && (
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {duration}
              </span>
            )}
          </div>
        )}

        <a
          href={streamingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-pink-400 transition-colors font-medium"
        >
          Ascultă pe Spotify
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
