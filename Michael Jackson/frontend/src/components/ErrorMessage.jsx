import React from 'react'

export default function ErrorMessage({ message = 'A apărut o eroare. Încearcă din nou.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
      <div className="w-14 h-14 rounded-full bg-red-900/30 border border-red-700/40 flex items-center justify-center text-2xl">
        ⚠️
      </div>
      <div className="space-y-1">
        <p className="text-red-400 font-medium">{message}</p>
        <p className="text-zinc-500 text-sm">
          Verifică conexiunea la internet și încearcă din nou.
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-6 py-2 rounded-full text-sm border border-zinc-600 text-zinc-300 hover:border-purple-500 hover:text-white transition-all"
        >
          Încearcă din nou
        </button>
      )}
    </div>
  )
}
