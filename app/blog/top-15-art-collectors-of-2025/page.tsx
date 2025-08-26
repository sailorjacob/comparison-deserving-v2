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

export default function TopArtCollectorsArticlePage() {
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
            <h1 className="text-4xl font-extralight mb-4">Top 15 Art Collectors of 2025</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>August 24, 2025</span>
              <span>•</span>
              <span>Art Collectors</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 font-light leading-relaxed mb-6">
              In 2025, art collecting pulses with fresh energy, from AI-infused commissions to global biennials spotlighting underrepresented voices. These 15 stand out for their influence, blending philanthropy with sharp instincts. We've drawn from recent reports and profiles to highlight their moves.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Power couple with a collection valued over $150 million, focusing on Black artists like Jean-Michel Basquiat and Kerry James Marshall. In 2025, they commissioned an AI-Black futurism installation for their Bel Air home. Lesser-known: Jay-Z once traded a Basquiat for a Rolex in a private deal, tying art to personal milestones.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Champions of artists of color, with holdings in Gordon Parks and Derrick Adams. This year, they opened a residency in Ghana to nurture emerging talent. Lesser-known: Their art dinners double as informal auctions, where guests bid on pieces mid-conversation.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Eco-focused collector of Takashi Murakami and Banksy. He snagged a Kehinde Wiley triptych at Art for Earth 2025. Lesser-known: DiCaprio quietly outbids financiers for works, often donating proceeds to wildlife causes.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Drawn to sculptural and minimalist photography, influenced by architect pals like Frank Gehry. Commissioned a kinetic piece by Anthony Howe for his vineyard in 2025. Lesser-known: Pitt sketches his own designs, blending acting downtime with art experiments.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Spotlights Caribbean and women artists, plus NFTs. Co-hosted "Island Modern" pop-up at Venice Biennale this year. Lesser-known: Her first major buy was a piece from a Barbados street fair, kickstarting her bold taste.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Futurist with digital media focus. Teamed with Beeple for an NFT drop in 2025. Lesser-known: Williams collects vintage synthesizers alongside art, seeing both as cultural instruments.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              AI and space-themed works dominate his haul. Commissioned Mars installations this year. Lesser-known: Musk trades art with tech peers, once swapping a piece for a prototype gadget.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Dubai-based, collects contemporary Middle Eastern art. Active in 2025 auctions, supporting regional voices. Lesser-known: Started with family heirlooms, evolving to fund artist residencies in Tehran.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Indian tycoons with vast modern and contemporary holdings. Expanded into digital collectibles amid 2025's NFT revival. Lesser-known: Their Mumbai home museum hosts free public tours, blending private passion with community access.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Silicon Valley duo focusing on tech-art crossovers. Backed AI art startups in 2025. Lesser-known: Laura teaches philanthropy at Stanford, often using their collection as case studies.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Columbus collector eyeing emerging stars like Jadé Fadojutimi. Excited for 2025 shows at CMA and MoMA. Lesser-known: Began collecting after a chance gallery visit, now mentors young buyers.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              London-based, promotes African and Middle Eastern art. Traveling to 1-54 Marrakech and Jeddah Biennale in 2025. Lesser-known: Descended from Libyan royalty, she bridges diplomacy and art curation.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Hong Kong tastemaker spotlighting Global South artists like Mire Lee. Predicts sculptural boom in 2025. Lesser-known: Co-founded a design hotel chain, where art installations rotate seasonally.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              Austin author collecting contemporary works. Active in philanthropy via investments in 2025. Lesser-known: Her memoir weaves art stories, revealing early buys from unknown talents.
            </p>

            <p className="text-gray-700 font-light leading-relaxed mb-6">
              LA-New York pair with modern and contemporary focus. Supported artist funds through their foundation this year. Lesser-known: Larry's law background informs their ethical collecting, avoiding speculative flips.
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
