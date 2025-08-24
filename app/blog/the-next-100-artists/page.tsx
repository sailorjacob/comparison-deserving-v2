"use client"

import Link from "next/link"
import { Bitcoin, Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageProtection } from "@/components/image-protection"
import { useState } from "react"

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

  return (
    <div className="min-h-screen w-full bg-white flex flex-col relative">
      <ImageProtection />
      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-50 fixed top-0 left-0 right-0 transition-all duration-300">
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
            <Button asChild variant="ghost" className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0">
              <Link href="/blog">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2 text-gray-600">
              <Bitcoin className="w-4 h-4" />
              <span className="text-sm font-light">Accepted</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Back Button */}
          <div className="mb-8 pt-4">
            <Link href="/blog">
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>September 2, 2025</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              The Next 100 Artists
            </h1>
            
            <div className="w-24 h-1 bg-yellow-500"></div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At our gallery, we're embarking on a search for the next 100 emerging artists: voices poised to shape tomorrow's visual narratives. This initiative focuses on talents from rising creative hubs across the Global South and beyond, providing an online-first platform that connects them directly with discerning collectors. In a market evolving toward greater digital fluency, we envision a future where art trades more seamlessly, mirroring historical leaps that elevated overlooked creators to enduring legacies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Digital Shift: Expanding Horizons</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As galleries adapt to 2025's landscape, online platforms drive discovery: 59% of collectors now find works digitally, up from pre-pandemic levels. This opens pathways for fresh talent, much like how photography revolutionized access in the 19th century, allowing broader dissemination beyond elite circles. Lesser known: Early photographers like Julia Margaret Cameron captured intimate portraits that democratized imagery, echoing today's virtual exhibitions that amplify diverse perspectives without geographic barriers. Our approach builds on this, offering streamlined tools for artists to showcase and sell, fostering a world where art flows freely amid growing mid-tier demand.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Global Currents: Untapped Creative Wells</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Emerging regions pulse with innovation, blending local traditions with contemporary themes. These areas, often in Asia, Africa, and Latin America, contribute to a 15% eastward market shift, as collectors seek authentic stories amid selective buying trends. Fun fact: The Renaissance saw similar expansions when trade routes brought Eastern influences to Europe, enriching palettes and techniques. Today, we're channeling that spirit by highlighting underrepresented scenes, ensuring these artists gain visibility in a market valuing diversity: 69% of buyers prioritize it for meaningful acquisitions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Echoes of Patronage: Lessons from the Past</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Art's great eras thrived on forward-thinking support: The Medici in 15th-century Florence commissioned works that defined the Renaissance, spotting potential in figures like Botticelli through a blend of cultural investment and keen insight. They backed over 1,000 pieces, turning patronage into a catalyst for innovation. In parallel, we're drawing from this model, identifying promise in a time when emerging works see steady growth, driven by collectors who blend passion with purpose. This reflects ongoing trends where thoughtful backing sustains creativity, much as it did centuries ago.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Purposeful Engagement: Building Lasting Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our effort aligns with a broader movement toward impactful collecting, where supporting new talent yields cultural dividends. Philanthropic models evolve, emphasizing empowerment that resonates with younger generations - favoring initiatives that uplift creators while enriching collections. Lesser known: Historical patrons often funded academies, like the French Academy in the 17th century, which nurtured talents and preserved techniques for future eras. In 2025, this translates to platforms that bridge gaps, creating ecosystems where art not only endures but inspires societal dialogue.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In pursuing the next 100, we're honoring art's timeless cycle: discovery, nurture, influence. This is an invitation to engage with the unfolding story of creativity, where every connection sparks possibility.
            </p>
          </article>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              © 2025 comparison deserving. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
