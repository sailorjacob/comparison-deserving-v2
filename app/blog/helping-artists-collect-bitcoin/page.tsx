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

export default function HelpingArtistsCollectBitcoinPage() {
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
            <h1 className="text-4xl font-extralight mb-4">Helping Artists Collect Bitcoin</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>January 2025</span>
              <span>•</span>
              <span>Bitcoin & Art</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              In 2025, Bitcoin weaves deeper into the art world, powering galleries at events like Bitcoin Asia and the Vegas Bitcoin Conference, where pieces sell in sats for a borderless vibe. Our online gallery steps in to guide artists toward their first crypto collectors.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              We hand-pick emerging talent from overlooked corners, spotlighting voices that deserve attention. Digital artists who transform everyday tools into creative canvases prove that technology can amplify artistic narratives in new ways.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Setting up is straightforward. We walk artists through wallet setup, stressing security and backup options. No banks needed, just a phone scan to receive funds, cutting fees that eat into sales.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Then, connections: We pair them with collectors keen on Bitcoin deals, handling escrow for trust. It's like Bitcoin Art Gallery auctions, where works price in Bitcoin fractions, tying value to the coin's climb. Artists often embed blockchain elements, linking to provenance and educating buyers on digital roots.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              This opens doors—global payments without conversion hassles, royalties built into the system. We're here to make it feel easy, turning Bitcoin into a tool for artistic independence.
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
