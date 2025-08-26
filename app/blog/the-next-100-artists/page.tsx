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

export default function Next100ArtistsArticlePage() {
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
            <h1 className="text-4xl font-extralight mb-4">The Next 100 Artists</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>September 2, 2025</span>
              <span>•</span>
              <span>Emerging Artists</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              We're searching for the next 100 emerging artists who will define tomorrow's art world. This isn't just another list—it's a focused effort to discover talent from creative centers across the Global South and other overlooked regions. We're building an online platform that connects these artists directly with serious collectors. As the art market becomes more digital, we see an opportunity to create something that hasn't existed before: a streamlined way for new voices to reach the right audience.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              The numbers tell the story: 59% of collectors now discover art online, a significant jump from before the pandemic. This shift creates new opportunities for artists who might not have access to traditional gallery networks. Think of it like photography in the 19th century—suddenly, art could reach people who'd never set foot in a salon. Julia Margaret Cameron's portraits found homes far beyond London's elite circles. Today's online platforms do the same thing, breaking down geographic barriers and letting collectors discover work they'd never see otherwise. We're building tools that make this process simple and effective.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Asia, Africa, and Latin America aren't just emerging markets—they're where some of the most interesting art is being made right now. Collectors are paying attention: the market is shifting eastward by about 15%, and people are looking for authentic stories, not just familiar names. It reminds me of how the Renaissance expanded when trade routes opened up between Europe and the East. New influences changed everything. We're seeing the same thing happen now, and we want to make sure these artists get the visibility they deserve. When 69% of serious buyers say diversity matters in their collections, that's not just talk—it's a market reality.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              The Medici family didn't just collect art—they created an entire ecosystem. In 15th-century Florence, they commissioned over 1,000 works and spotted talent like Botticelli before anyone else did. They understood that supporting artists early could change the course of art history. We're not the Medici, but we can learn from their approach. The art market is growing, and emerging artists are seeing steady demand. Collectors who get in early aren't just making investments—they're building relationships with artists who might become the next big names. It's happened before, and it will happen again.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              This isn't about quick profits or trendy names. We're building something that will matter in the long run. The French Academy in the 17th century didn't just teach painting—it preserved techniques and nurtured talent that influenced generations. In 2025, we need platforms that do more than just sell art. We need systems that help artists build careers, that help collectors make meaningful choices, and that create conversations about what art can do in the world. When art connects people across cultures and generations, that's when it becomes something more than decoration.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Finding the next 100 artists isn't about creating a list—it's about starting conversations, building connections, and watching what happens when talent meets opportunity. We're not predicting the future; we're helping to shape it.
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
