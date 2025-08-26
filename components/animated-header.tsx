"use client"

import { useEffect, useState } from "react"

interface AnimatedHeaderProps {
  logoColor: string
}

export function AnimatedHeader({ logoColor }: AnimatedHeaderProps) {
  const [headerAnimation, setHeaderAnimation] = useState(false)

  useEffect(() => {
    // Trigger header animation after page load
    const timer = setTimeout(() => {
      setHeaderAnimation(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center space-x-4 mb-2">
      <div className={`w-8 h-8 ${logoColor}`} />
      <div>
        <div className="text-2xl font-light tracking-wide text-black relative">
          <span className="inline-block">
            comparison
          </span>
          <span 
            className={`inline-block transition-all duration-1000 ease-in-out ${
              headerAnimation 
                ? 'opacity-0' 
                : 'opacity-100'
            }`}
          >
            -deserving
          </span>
          <span 
            className={`inline-block transition-all duration-1000 ease-in-out delay-500 ${
              headerAnimation 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            .
          </span>
        </div>
        <div className="text-xs font-light text-gray-500 tracking-wider uppercase">Fine Art Gallery</div>
      </div>
    </div>
  )
}
