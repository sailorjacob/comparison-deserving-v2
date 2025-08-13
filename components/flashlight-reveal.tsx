"use client"

import React from "react"

type Point = { x: number; y: number }

export function FlashlightReveal() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const rafRef = React.useRef<number | null>(null)

  const currentPosRef = React.useRef<Point>({ x: -9999, y: -9999 })
  const targetPosRef = React.useRef<Point>({ x: -9999, y: -9999 })

  const currentRadiusRef = React.useRef<number>(0)
  const targetRadiusRef = React.useRef<number>(0)

  const animate = React.useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const lerp = (start: number, end: number, t: number) => start + (end - start) * t

    const nextX = lerp(currentPosRef.current.x, targetPosRef.current.x, 0.15)
    const nextY = lerp(currentPosRef.current.y, targetPosRef.current.y, 0.15)
    currentPosRef.current = { x: nextX, y: nextY }

    const nextR = lerp(currentRadiusRef.current, targetRadiusRef.current, 0.12)
    currentRadiusRef.current = nextR

    el.style.setProperty("--x", `${nextX}px`)
    el.style.setProperty("--y", `${nextY}px`)
    el.style.setProperty("--r", `${nextR}px`)

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  React.useEffect(() => {
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [animate])

  const updateTargetFromEvent = (clientX: number, clientY: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    targetPosRef.current = { x, y }
  }

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    updateTargetFromEvent(e.clientX, e.clientY)
    targetRadiusRef.current = 140
  }

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    updateTargetFromEvent(e.clientX, e.clientY)
    targetRadiusRef.current = 140
  }

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    targetRadiusRef.current = 0
  }

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0]
    updateTargetFromEvent(t.clientX, t.clientY)
    targetRadiusRef.current = 150
  }

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0]
    updateTargetFromEvent(t.clientX, t.clientY)
    targetRadiusRef.current = 150
  }

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    targetRadiusRef.current = 0
  }

  return (
    <div className="my-12" aria-hidden="false">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative overflow-hidden select-none"
        style={{
          // Flashlight clip that reveals only the circular area
          clipPath: "circle(var(--r, 0px) at var(--x, -100px) var(--y, -100px))",
          WebkitClipPath: "circle(var(--r, 0px) at var(--x, -100px) var(--y, -100px))",
          willChange: "clip-path",
        } as React.CSSProperties}
      >
        <div className="pointer-events-none">
          <p className="text-red-600 font-light leading-relaxed max-w-3xl">
            comparison deserving represents the best artists in the world, alive right now
          </p>
          <p className="text-red-600 font-light leading-relaxed max-w-3xl mt-3">
            we are working on a world where more art and bitcoin are exchanged
          </p>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400 font-light">
        Tap and drag to reveal on mobile
      </div>
    </div>
  )
}


