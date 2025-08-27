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

export default function ShiftingHorizonsArticlePage() {
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
            <h1 className="text-4xl font-extralight mb-4">Shifting Horizons: Emerging Capitals and Resilient Niches in the 2025 Art Market</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>August 27, 2025</span>
              <span>•</span>
              <span>Art Market</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Mid-2025 finds the global art scene in transition—auction sales declined 6% in the first half to $3.98 billion, with ultra-contemporary works down 43% from last year. Despite the slowdown, new energy emerges in overlooked areas. High-end works struggle, but mid-tier resilience and emerging hubs maintain activity. Here's the current state of the market.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Galleries are increasingly digital: 43% focus more on online sales, while 55% enhance content through social media and virtual exhibitions. Collectors follow this trend—59% purchased online last year. Notably, visible pricing makes artworks six times more likely to sell, providing an advantage in a market where 69% hesitate due to transparency concerns. Economic uncertainty affects 75% of galleries, but this shift creates opportunities for strategic buyers.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              30% of collectors became more selective, with only 7% increasing purchases amid high prices and budget constraints. Focus intensifies on emerging artists—72% attract interest for innovative approaches under $5,000. The entry-level market (under $5,000) grew 3% in volume, reaching 40.5 million items, as personal enjoyment outweighs investment for many collectors. Galleries reflect this trend, prioritizing early-career talent over established names.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Prints remain strong, with mid-year gains defying the broader decline. Curators emphasize textiles—fiber works integrate traditional craft into contemporary narratives, exploring identity and speculative themes. Ethical art also grows: Climate-focused works and handmade practices like ceramics address environmental concerns, combining with biophilic design for thoughtful spaces. The $100,000–$1 million range remains stable, driven by personal taste rather than speculation.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Beyond New York and London, new art capitals emerge. Milan's tax incentives attract galleries, with the Miart fair gaining prominence. Warsaw's Museum of Modern Art opens in February, highlighting post-war Polish artists alongside events like NADA Villa. Abu Dhabi's Guggenheim opens soon, supported by $1 billion from local funds, while Mumbai's economic growth powers Art Mumbai with galleries like Experimenter. Marrakech thrives on African contemporary art, with the 1-54 fair and renovated museums drawing international attention. These locations shift approximately 15% of market share eastward, according to reports.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Millennials and Gen Z reshape preferences, blending pop culture with fine art—including video games as artistic medium, with interactive works gaining recognition. Activism integrates naturally: Female and Indigenous artists gain visibility, from ceramics to land-based practices. Private sales increased 14%, favoring discreet transactions for high-value postwar works.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              In a market reconsidering its foundation—the US still leads at 43%, but its dominance decreases—these emerging areas and cities create new opportunities. Strategic collectors recognize value where resilience meets innovation.
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
