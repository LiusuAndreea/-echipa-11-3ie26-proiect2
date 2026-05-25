import React from 'react'

export default function SectionTitle({ label, title, subtitle, align = 'center', titleClass = '' }) {
  const alignClass = {
    center: 'text-center items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  }[align]

  return (
    <div className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      {label && (
        <span className="font-mono text-xs tracking-widest uppercase text-purple-400 flex items-center gap-2">
          <span className="block w-8 h-px bg-gradient-to-r from-purple-500 to-pink-500" />
          {label}
          <span className="block w-8 h-px bg-gradient-to-r from-pink-500 to-purple-500" />
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight dark:text-white text-zinc-900 ${titleClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-zinc-400 dark:text-zinc-400 text-zinc-600 text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
