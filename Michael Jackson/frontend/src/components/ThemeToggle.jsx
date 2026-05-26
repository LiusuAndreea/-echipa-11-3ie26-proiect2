import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Activează modul luminos' : 'Activează modul întunecat'}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200 hover:shadow-glow-purple hover:scale-110 active:scale-90"
    >
      <span className="text-lg transition-all duration-300">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  )
}
