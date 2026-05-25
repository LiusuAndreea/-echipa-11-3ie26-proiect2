import React, { useState, useEffect, useRef } from 'react'

export default function MusicPlayerUI() {
  const [songs, setSongs] = useState([])
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const [vol, setVol] = useState(70)
  const [open, setOpen] = useState(false)
  const [loadingTracks, setLoadingTracks] = useState(true)

  const audioRef = useRef(null)
  const idxRef = useRef(idx)
  const songsRef = useRef(songs)
  const playingRef = useRef(playing)
  const goToRef = useRef(null)

  idxRef.current = idx
  songsRef.current = songs
  playingRef.current = playing

  useEffect(() => {
    const audio = new Audio()
    audio.volume = 0.7
    audioRef.current = audio

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime)
        setProgress((audio.currentTime / audio.duration) * 100)
      }
    })
    audio.addEventListener('loadedmetadata', () => setTotalTime(audio.duration || 0))
    audio.addEventListener('play', () => setPlaying(true))
    audio.addEventListener('pause', () => setPlaying(false))
    audio.addEventListener('ended', () => {
      const next = (idxRef.current + 1) % (songsRef.current.length || 1)
      const nextSong = songsRef.current[next]
      if (nextSong?.previewUrl) {
        setIdx(next)
        setProgress(0)
        setCurrentTime(0)
        audio.src = nextSong.previewUrl
        audio.play().catch(() => {})
      }
    })

    fetch('https://itunes.apple.com/search?term=michael+jackson&media=music&entity=song&limit=12&country=US')
      .then((r) => r.json())
      .then((data) => {
        const tracks = data.results
          .filter((t) => t.previewUrl)
          .slice(0, 10)
          .map((t) => ({
            id: t.trackId,
            title: t.trackName,
            album: t.collectionName,
            previewUrl: t.previewUrl,
            artwork: t.artworkUrl100,
          }))
        if (tracks.length > 0) {
          setSongs(tracks)
          audio.src = tracks[0].previewUrl
        }
        setLoadingTracks(false)
      })
      .catch(() => setLoadingTracks(false))

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [])

  const goTo = (newIdx, autoPlay = false) => {
    const audio = audioRef.current
    if (!audio || !songsRef.current[newIdx]) return
    audio.src = songsRef.current[newIdx].previewUrl
    setIdx(newIdx)
    setProgress(0)
    setCurrentTime(0)
    if (autoPlay || playingRef.current) {
      audio.play().catch(() => {})
    }
  }

  goToRef.current = goTo

  useEffect(() => {
    const handler = (e) => {
      const title = e.detail?.title
      if (!title) return
      const list = songsRef.current
      let i = list.findIndex((s) => s.title.toLowerCase().includes(title.toLowerCase()))
      if (i < 0) i = list.findIndex((s) => title.toLowerCase().includes(s.title.toLowerCase().split(' ')[0]))
      if (i >= 0 && goToRef.current) {
        goToRef.current(i, true)
        setOpen(true)
      }
    }
    window.addEventListener('mj-play-song', handler)
    return () => window.removeEventListener('mj-play-song', handler)
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.src && songs[idx]) {
      audio.src = songs[idx].previewUrl
    }
    if (playing) {
      audio.pause()
    } else {
      audio.play().catch(console.error)
    }
  }

  const seek = (e) => {
    const audio = audioRef.current
    if (!audio || !audio.duration) return
    const val = Number(e.target.value)
    audio.currentTime = (val / 100) * audio.duration
    setProgress(val)
  }

  const changeVol = (e) => {
    const val = Number(e.target.value)
    setVol(val)
    if (audioRef.current) audioRef.current.volume = val / 100
  }

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    return `${Math.floor(s / 60)}:${Math.floor(s % 60).toString().padStart(2, '0')}`
  }

  const song = songs[idx]

  return (
    <>
      {/* Player Panel */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-40 w-[360px] glass rounded-2xl p-5 shadow-glass border border-purple-800/30 transition-all duration-500 ease-out ${
          open ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        {loadingTracks ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-10 h-10 border-2 border-purple-700 border-t-purple-400 rounded-full animate-spin mx-auto" />
            <p className="text-zinc-500 text-xs font-mono">Se încarcă melodiile de pe iTunes...</p>
          </div>
        ) : songs.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-zinc-500 text-sm">Nu s-au putut încărca melodiile.</p>
            <p className="text-zinc-600 text-xs mt-1">Verifică conexiunea la internet.</p>
          </div>
        ) : (
          <>
            {/* Track info */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-purple-700/40 relative">
                {song?.artwork ? (
                  <img src={song.artwork} alt={song.title} className={`w-full h-full object-cover ${playing ? 'animate-spin-slow' : ''}`} style={{ animationDuration: '8s' }} />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-pink-700 flex items-center justify-center text-2xl">🎵</div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-white text-sm truncate leading-tight">{song?.title}</p>
                <p className="text-zinc-500 text-xs truncate mt-0.5">Michael Jackson</p>
                <p className="text-zinc-600 text-xs truncate">{song?.album}</p>
                <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full bg-green-900/30 border border-green-700/30 text-green-400 text-[10px] font-mono">
                  ♫ previzualizare 30s
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <div className="relative h-1.5 bg-zinc-800 rounded-full group cursor-pointer">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all pointer-events-none"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-glow-purple opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ left: `calc(${progress}% - 6px)` }}
                />
                <input
                  type="range" min="0" max="100" value={progress}
                  onChange={seek}
                  className="absolute inset-0 opacity-0 w-full cursor-pointer"
                />
              </div>
              <div className="flex justify-between text-[10px] text-zinc-600 mt-1 font-mono">
                <span>{fmt(currentTime)}</span>
                <span>{fmt(totalTime || 30)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-5 mb-4">
              <button
                onClick={() => goTo(idx === 0 ? songs.length - 1 : idx - 1, playing)}
                className="p-2 text-zinc-400 hover:text-white transition-colors hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" />
                </svg>
              </button>

              <button
                onClick={togglePlay}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-glow-purple hover:shadow-glow-pink transition-all hover:scale-105 active:scale-95"
              >
                {playing ? (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => goTo((idx + 1) % songs.length, playing)}
                className="p-2 text-zinc-400 hover:text-white transition-colors hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zm2-8.14 4.5 2.14-4.5 2.14V9.86zM16 6h2v12h-2z" />
                </svg>
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 9v6h4l5 5V4l-5 5H7z" />
              </svg>
              <div className="relative flex-1 h-1 bg-zinc-800 rounded-full">
                <div className="h-full rounded-full bg-zinc-500 pointer-events-none" style={{ width: `${vol}%` }} />
                <input type="range" min="0" max="100" value={vol} onChange={changeVol}
                  className="absolute inset-0 opacity-0 w-full cursor-pointer" />
              </div>
              <svg className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z" />
              </svg>
            </div>

            {/* Playlist */}
            <div className="border-t border-zinc-800/60 pt-3 space-y-0.5 max-h-40 overflow-y-auto pr-1">
              <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider mb-2">Playlist ({songs.length} melodii)</p>
              {songs.map((s, i) => (
                <button
                  key={s.id || i}
                  onClick={() => goTo(i, true)}
                  className={`flex items-center gap-3 w-full px-2 py-1.5 rounded-lg text-left transition-all ${
                    i === idx
                      ? 'bg-purple-900/30 text-purple-300'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {i === idx && playing ? (
                    <div className="flex gap-0.5 items-end h-3 w-4 flex-shrink-0">
                      {[3, 5, 4].map((h, j) => (
                        <div key={j} className="w-0.5 bg-purple-400 rounded-full animate-pulse"
                          style={{ height: `${h * 2}px`, animationDelay: `${j * 0.15}s` }} />
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-600 w-4 text-center flex-shrink-0">{i + 1}</span>
                  )}
                  <img src={s.artwork} alt="" className="w-6 h-6 rounded object-cover flex-shrink-0" />
                  <span className="text-xs truncate">{s.title}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass border border-purple-700/40 rounded-full px-5 py-3 flex items-center gap-3 shadow-glow-purple hover:shadow-glow-pink transition-all hover:scale-105 active:scale-95"
      >
        {song?.artwork && !loadingTracks ? (
          <img
            src={song.artwork}
            alt=""
            className={`w-6 h-6 rounded-full object-cover flex-shrink-0 ${playing ? 'animate-spin' : ''}`}
            style={{ animationDuration: '4s' }}
          />
        ) : (
          <span className={`text-base flex-shrink-0 ${playing ? 'animate-spin-slow' : ''}`}>🎵</span>
        )}
        <span className="text-xs font-mono text-zinc-300 max-w-[160px] truncate">
          {loadingTracks ? 'Se încarcă...' : song ? song.title : 'Michael Jackson'}
        </span>
        <div className="flex gap-0.5 items-end h-4 flex-shrink-0">
          {[3, 5, 4, 6, 3].map((h, i) => (
            <div
              key={i}
              className={`w-0.5 rounded-full transition-all ${
                playing ? 'bg-purple-400 animate-pulse' : 'bg-zinc-600'
              }`}
              style={{ height: `${h * 2}px`, animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </button>
    </>
  )
}
