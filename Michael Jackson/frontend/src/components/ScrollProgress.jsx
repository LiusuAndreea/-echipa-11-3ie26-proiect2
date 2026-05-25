import React, { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 h-0.5 z-[9999] origin-left"
      style={{
        transform: `scaleX(${progress / 100})`,
        background: 'linear-gradient(90deg, #9333ea, #ec4899, #22d3ee)',
      }}
    />
  )
}
