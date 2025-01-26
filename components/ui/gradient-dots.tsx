"use client"

import { useEffect, useRef } from "react"

export const GradientDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const dots: { x: number; y: number; vx: number; vy: number }[] = []
    const numberOfDots = 50

    for (let i = 0; i < numberOfDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach((dot, i) => {
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1

        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 4)
        gradient.addColorStop(0, "rgba(167, 139, 250, 0.3)") // Lighter purple
        gradient.addColorStop(1, "rgba(139, 92, 246, 0)") // Darker purple

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Connect nearby dots
        dots.slice(i + 1).forEach((otherDot) => {
          const dx = dot.x - otherDot.x
          const dy = dot.y - otherDot.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(dot.x, dot.y)
            ctx.lineTo(otherDot.x, otherDot.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }} />
}
