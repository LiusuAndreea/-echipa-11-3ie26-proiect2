import React from 'react'

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, role, text, avatar, rating } = testimonial

  return (
    <div className="glass rounded-2xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative">
      <div className="absolute top-5 right-5 text-purple-800 text-5xl font-serif leading-none opacity-40 select-none">
        "
      </div>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating || 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-zinc-300 text-sm leading-relaxed mb-5 italic">"{text}"</p>

      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-700/50"
        />
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-zinc-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  )
}
