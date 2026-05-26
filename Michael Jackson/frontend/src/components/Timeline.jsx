import React from 'react'

export default function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-700 via-pink-700 to-cyan-700 opacity-40" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <div key={i} className="relative flex gap-6 pl-16">
            <div className="absolute left-0 w-12 h-12 rounded-full glass border border-purple-700/50 flex items-center justify-center flex-shrink-0">
              <span className="font-mono text-xs font-bold text-purple-400">
                {item.year.slice(2)}
              </span>
            </div>

            <div className="glass rounded-xl p-5 flex-1 hover:shadow-card transition-all duration-300">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading font-bold text-white text-base">{item.title}</h3>
                <span className="font-mono text-xs text-purple-400 ml-4 flex-shrink-0">{item.year}</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
