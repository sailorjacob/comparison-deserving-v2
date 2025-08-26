"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlashlightReveal } from "@/components/flashlight-reveal"
import { useEffect, useState } from "react"

// Random logo color utility
const getRandomLogoColor = () => {
  const colors = [
    'bg-blue-500',
    'bg-red-500', 
    'bg-green-500',
    'bg-yellow-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function AboutPage() {
  const [logoColor] = useState(() => getRandomLogoColor())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMoving, setIsMoving] = useState(false)
  const [lastMoveTime, setLastMoveTime] = useState(Date.now())

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMoving(true)
      setLastMoveTime(Date.now())

      clearTimeout(moveTimeout)
      moveTimeout = setTimeout(() => {
        setIsMoving(false)
      }, 100)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(moveTimeout)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-[9999] fixed top-0 left-0 right-0 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center space-x-4 mb-2">
            <div className={`w-8 h-8 ${logoColor}`} />
            <div>
              <div className="text-2xl font-light tracking-wide text-black">comparison-deserving</div>
              <div className="text-xs font-light text-gray-500 tracking-wider uppercase">Fine Art Gallery</div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <Button asChild variant="ghost" className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0">
              <Link href="/">
                Collection
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0">
              <Link href="/artists">
                Artists
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="text-black border-b border-black font-light relative group px-0"
            >
              About
            </Button>

            <div className="flex items-center space-x-2 text-gray-600">
              <Bitcoin className="w-4 h-4" />
              <span className="text-sm font-light">Accepted</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Big green circle that follows mouse */}
      <div 
        className="fixed pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - (isMoving ? 100 : 150),
          top: mousePosition.y - (isMoving ? 100 : 150),
          width: isMoving ? '200px' : '300px',
          height: isMoving ? '200px' : '300px',
          background: 'rgb(34, 197, 94)',
          borderRadius: '50%',
          mixBlendMode: 'lighten',
        }}
      />

      <main className="flex-1 container mx-auto px-6 md:px-8 pt-32 pb-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-light">Back</span>
          </Link>
        </div>
      <h1 className="text-4xl font-extralight mb-6">About</h1>
      
      <p className="text-gray-700 font-light leading-relaxed max-w-3xl mb-6">
        The name is inspired by the sound of an old school legal firm partnership, it sounds sophisticated and rolls off the tongue. Comparison for short.
        <br /><br />
        comparison is a fine art collection and online gallery focused on emerging talent, all works shown are part of our private inventory - for acquisition inquiries, please contact
      </p>
      <p className="text-gray-500 font-light text-sm">
        <a href="mailto:info@haven.engineer" className="hover:text-gray-700 transition-colors">info@haven.engineer</a>
      </p>
      
      {/* Blog Link */}
      <div className="mt-8 mb-8">
        <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-black transition-colors font-light">
          <span className="text-sm">Read our blog</span>
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
              <div className="mt-12">
          <FlashlightReveal />
        </div>
        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}


