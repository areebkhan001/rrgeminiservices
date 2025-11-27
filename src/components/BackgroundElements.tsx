'use client'

import { useEffect, useRef } from 'react'

export const BackgroundStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Generate stars
    const stars: { x: number; y: number; radius: number; opacity: number; twinkleSpeed: number }[] = []
    const starCount = 150

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005
      })
    }

    // Animation
    let animationFrame: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const star of stars) {
        // Twinkle effect
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(203, 213, 225, ${star.opacity})`
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export const BackgroundLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Diagonal lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={`diagonal-line-${i}-${Math.random().toString(36).substring(7)}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-300/20 to-transparent"
            style={{
              top: `${i * 5 + Math.random() * 10}%`,
              left: '-10%',
              width: '120%',
              transform: `rotate(${-45 + Math.random() * 10}deg)`,
            }}
          />
        ))}
      </div>

      {/* Vertical lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={`vertical-line-${i}-${Math.random().toString(36).substring(7)}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-slate-300/15 to-transparent"
            style={{
              left: `${i * 8 + 5}%`,
              top: '-10%',
              height: '120%',
            }}
          />
        ))}
      </div>

      {/* Animated flowing lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={`flow-line-${i}-${Math.random().toString(36).substring(7)}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: '-20%',
              width: '140%',
              transform: 'rotate(-3deg)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>

      {/* Decorative dots grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgb(203 213 225 / 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  )
}

export const BackgroundElements = () => {
  return (
    <>
      <BackgroundStars />
      <BackgroundLines />
    </>
  )
}
