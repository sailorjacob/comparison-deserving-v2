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
    targetRadiusRef.current = 180
  }

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    updateTargetFromEvent(e.clientX, e.clientY)
    targetRadiusRef.current = 180
  }

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    targetRadiusRef.current = 0
  }

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0]
    updateTargetFromEvent(t.clientX, t.clientY)
    targetRadiusRef.current = 180
  }

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0]
    updateTargetFromEvent(t.clientX, t.clientY)
    targetRadiusRef.current = 180
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
        className="relative overflow-hidden select-none w-full min-h-[50vh] md:min-h-[60vh]"
        style={{
          WebkitMaskImage:
            "radial-gradient(circle var(--r, 0px) at var(--x, -100px) var(--y, -100px), rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 60%)",
          maskImage:
            "radial-gradient(circle var(--r, 0px) at var(--x, -100px) var(--y, -100px), rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 60%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          willChange: "mask-image, -webkit-mask-image",
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 flex items-center">
          <div className="pointer-events-none px-1 md:px-2">
            <p className="text-red-600 font-light leading-relaxed max-w-3xl">
              comparison deserving represents exceptional artists across the world
            </p>
            <p className="text-red-600 font-light leading-relaxed max-w-3xl mt-3">
              we are working on a world where more art and bitcoin are exchanged
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


