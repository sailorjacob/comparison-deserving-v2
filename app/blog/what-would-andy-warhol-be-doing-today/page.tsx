"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
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

export default function AndyWarholArticlePage() {
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
            <Button asChild variant="ghost" className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0">
              <Link href="/about">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="text-black border-b border-black font-light relative group px-0"
            >
              Blog
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
          <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-light">Back to Blog</span>
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-extralight mb-4">What Would Andy Warhol Be Doing Today?</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>August 19, 2025</span>
              <span>•</span>
              <span>Art History</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              If Andy Warhol were still around, painting, filming, and collecting, he might thrive in our hyper-connected world. Born Andrew Warhola to Slovak immigrants, he dropped the "a" early on to fit into New York's scene, much like today's creators might rebrand for social media recognition. He could explore the 2025 art boom in AI-generated works and digital collectibles, possibly remixing pop icons with contemporary elements.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              He could be running an Instagram "Factory," perhaps similar to Virgil Abloh's distinctive social media style, collaborating with influencers on short-form videos. Warhol produced experimental films like the eight-hour <em>Empire</em>, a static shot of the Empire State Building, pure endurance art. Today, he might create TikToks of celebrities scrolling their feeds, capturing our short attention spans, echoing his famous observation about fleeting fame.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              He might explore AI art trends, generating endless variations of Campbell's soup cans with tools like Midjourney, blending nostalgia with technology. Retro revival is significant this year, with artists referencing vintage styles in bold palettes and mixed media. Warhol, who ate the same lunch daily (hence the cans), could appreciate how AI democratizes creation, much like his silk-screen multiples made art accessible.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              As a devout Catholic who attended Mass weekly from childhood until his death in 1987, despite his wild Factory parties, he might infuse spiritual motifs into AR installations, connecting to 2025's cultural art movement. Think holographic Madonnas amid climate-themed pieces, addressing environmental concerns through pop art perspectives.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Warhol was a collector at heart, amassing 610 time capsules filled with ephemera like pizza dough and unpaid bills. In 2025, he might collect NFTs and memes, perhaps auctioning his cookie jar collection (which fetched $250K posthumously) as digital versions amid the ethical art movement.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              He might podcast from his wig-filled studio. Yes, he wore silver toupees to hide baldness, turning insecurity into style. Discussing pop culture shifts like AI-driven entertainment and sustainable fashion, he could remind us: art mirrors the mundane, now amplified by algorithms.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Warhol could fit right in, possibly transforming today's chaos into silk-screen gold. For visuals, explore Warhol-inspired AI art at <a href="https://artsy.net" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline">artsy.net</a> or his time capsules via the <a href="https://warhol.org" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline">Warhol Museum</a>.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/blog" className="text-gray-600 hover:text-black transition-colors font-light">
                ← All Articles
              </Link>
              <div className="flex items-center space-x-2 text-gray-500">
                <Bitcoin className="w-4 h-4" />
                <span className="text-sm">Bitcoin Accepted</span>
              </div>
            </div>
          </div>
        </article>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}
