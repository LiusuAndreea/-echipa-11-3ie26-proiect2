import React from 'react'

export function Loader({ text = 'Se încarcă...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-purple-900" />
        <div className="absolute inset-0 rounded-full border-2 border-t-purple-500 border-r-pink-500 animate-spin" />
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 animate-pulse" />
      </div>
      <p className="text-sm text-zinc-400 font-mono animate-pulse">{text}</p>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="glass rounded-2xl overflow-hidden animate-pulse">
      <div className="bg-zinc-800 h-56 w-full" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-zinc-800 rounded-full w-3/4" />
        <div className="h-3 bg-zinc-800 rounded-full w-1/2" />
        <div className="h-3 bg-zinc-800 rounded-full w-2/3" />
      </div>
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-zinc-950 flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-purple-900" />
          <div className="absolute inset-0 rounded-full border-2 border-t-purple-400 border-r-pink-400 animate-spin" />
        </div>
        <p className="gradient-text font-heading text-xl italic">Michael Jackson</p>
      </div>
    </div>
  )
}

export default Loader
