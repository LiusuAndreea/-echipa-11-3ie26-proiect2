import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [trail, setTrail] = useState({ x: -100, y: -100 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      const el = document.elementFromPoint(e.clientX, e.clientY)
      setIsPointer(el ? window.getComputedStyle(el).cursor === 'pointer' : false)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    let frame
    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      setTrail((prev) => ({
        x: lerp(prev.x, pos.x, 0.12),
        y: lerp(prev.y, pos.y, 0.12),
      }))
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [pos])

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: 'rgba(255,255,255,0.95)',
          transform: isPointer ? 'scale(1.8)' : 'scale(1)',
          transition: 'transform 0.2s',
        }}
      />
      <div
        className="pointer-events-none fixed z-[9998] rounded-full mix-blend-difference"
        style={{
          left: trail.x - 16,
          top: trail.y - 16,
          width: 32,
          height: 32,
          border: '1.5px solid rgba(255,255,255,0.6)',
          transform: isPointer ? 'scale(1.6)' : 'scale(1)',
          transition: 'transform 0.3s',
        }}
      />
    </>
  )
}
