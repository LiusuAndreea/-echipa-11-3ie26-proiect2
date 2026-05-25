import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-glow-purple hover:shadow-glow-pink border border-purple-500/30 hover:scale-105',
    outline:
      'border border-zinc-600 hover:border-purple-500 text-zinc-300 hover:text-white glass hover:shadow-glow-purple hover:scale-105',
    ghost:
      'text-zinc-400 hover:text-white hover:bg-white/5 hover:scale-105',
    cyan: 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-glow-cyan hover:scale-105 border border-cyan-500/30',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-9 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
