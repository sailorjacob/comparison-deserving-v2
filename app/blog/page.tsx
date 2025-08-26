"use client"

import Link from "next/link"
import { Bitcoin, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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

// Random polka dot color utility
const getRandomPolkaDotColor = () => {
  const colors = [
    'bg-yellow-300', 'bg-pink-400', 'bg-cyan-300', 'bg-purple-400', 'bg-orange-400',
    'bg-green-400', 'bg-red-400', 'bg-blue-400', 'bg-indigo-400', 'bg-teal-400',
    'bg-rose-400', 'bg-amber-400', 'bg-emerald-400', 'bg-violet-400', 'bg-sky-400',
    'bg-lime-400', 'bg-fuchsia-400'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

// Random polka dot shadow color utility
const getRandomPolkaDotShadow = (color: string) => {
  const colorMap: { [key: string]: string } = {
    'bg-yellow-300': 'shadow-yellow-300/50',
    'bg-pink-400': 'shadow-pink-400/50',
    'bg-cyan-300': 'shadow-cyan-300/50',
    'bg-purple-400': 'shadow-purple-400/50',
    'bg-orange-400': 'shadow-orange-400/50',
    'bg-green-400': 'shadow-green-400/50',
    'bg-red-400': 'shadow-red-400/50',
    'bg-blue-400': 'shadow-blue-400/50',
    'bg-indigo-400': 'shadow-indigo-400/50',
    'bg-teal-400': 'shadow-teal-400/50',
    'bg-rose-400': 'shadow-rose-400/50',
    'bg-amber-400': 'shadow-amber-400/50',
    'bg-emerald-400': 'shadow-emerald-400/50',
    'bg-violet-400': 'shadow-violet-400/50',
    'bg-sky-400': 'shadow-sky-400/50',
    'bg-lime-400': 'shadow-lime-400/50',
    'bg-fuchsia-400': 'shadow-fuchsia-400/50'
  }
  return colorMap[color] || 'shadow-gray-400/50'
}

// Blog articles data
const blogArticles = [
  {
    id: 1,
    title: "Helping Artists Collect Bitcoin",
    excerpt: "In 2025, Bitcoin weaves deeper into the art world, powering galleries at events like Bitcoin Asia and the Vegas Bitcoin Conference, where pieces sell in sats for a borderless vibe. Our online gallery steps in to guide artists toward their first crypto collectors...",
    date: "January 2025",
    readTime: "4 min read",
    slug: "helping-artists-collect-bitcoin"
  },
  {
    id: 2,
    title: "The Next 100 Artists",
    excerpt: "At our gallery, we're embarking on a search for the next 100 emerging artists: voices poised to shape tomorrow's visual narratives. This initiative focuses on talents from rising creative hubs across the Global South and beyond...",
    date: "September 2, 2025",
    readTime: "6 min read",
    slug: "the-next-100-artists"
  },
  {
    id: 3,
    title: "Shifting Horizons: Emerging Capitals and Resilient Niches in the 2025 Art Market",
    excerpt: "Mid-2025 finds the global art scene in flux—auction sales dipped 6% in the first half to $3.98 billion, with ultra-contemporary works down 43% from last year. Yet amid the slowdown, fresh energy bubbles up in overlooked corners...",
    date: "August 27, 2025",
    readTime: "7 min read",
    slug: "shifting-horizons-emerging-capitals-resilient-niches-2025-art-market"
  },
  {
    id: 4,
    title: "Top 15 Art Collectors of 2025",
    excerpt: "In 2025, art collecting pulses with fresh energy, from AI-infused commissions to global biennials spotlighting underrepresented voices. These 15 stand out for their influence, blending philanthropy with sharp instincts...",
    date: "August 24, 2025",
    readTime: "8 min read",
    slug: "top-15-art-collectors-of-2025"
  },
  {
    id: 5,
    title: "What Would Andy Warhol Be Doing Today?",
    excerpt: "If Andy Warhol were still around, painting, filming, and hoarding, he might thrive in our hyper-connected world. Born Andrew Warhola to Slovak immigrants, he ditched the 'a' early on to fit into New York's scene, much like today's creators might rebrand for TikTok fame...",
    date: "August 19, 2025",
    readTime: "5 min read",
    slug: "what-would-andy-warhol-be-doing-today"
  }
]

export default function BlogPage() {
  const [logoColor] = useState(() => getRandomLogoColor())

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

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 md:px-8 pt-32 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Colorful Polka Dot Header */}
          <div className="mb-16 w-full h-48 rounded-2xl overflow-hidden relative"
               style={{
                 background: `linear-gradient(45deg, ${getRandomPolkaDotColor().replace('bg-', '')}, ${getRandomPolkaDotColor().replace('bg-', '')}, ${getRandomPolkaDotColor().replace('bg-', '')})`
               }}>
            <div className="absolute inset-0">
              {/* Generate polka dots with random neon colors */}
              {(() => {
                const dots = []
                for (let i = 0; i < 25; i++) {
                  const color = getRandomPolkaDotColor()
                  const shadow = getRandomPolkaDotShadow(color)
                  // More size variety
                  const sizeOptions = ['w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-8 h-8', 'w-10 h-10', 'w-12 h-12']
                  const size = sizeOptions[Math.floor(Math.random() * sizeOptions.length)]
                  // Better distribution across the entire header
                  const top = Math.random() * 180 + 16
                  const left = Math.random() * 600 + 20
                  dots.push(
                    <div 
                      key={i}
                      className={`absolute ${size} ${color} rounded-full shadow-lg ${shadow} animate-pulse`}
                      style={{ 
                        top: `${top}px`, 
                        left: `${left}px`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    ></div>
                  )
                }
                return dots
              })()}
            </div>
          </div>

          {/* Articles List */}
          <div className="space-y-12">
            {blogArticles.map((article) => (
              <article key={article.id} className="border-b border-gray-100 pb-12 last:border-b-0">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight mb-4">
                  {article.title}
                </h2>
                
                <p className="text-gray-700 font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <Link href={`/blog/${article.slug}`}>
                  <Button variant="ghost" className="group text-gray-600 hover:text-black px-0 py-2 h-auto font-light">
                    <span className="text-sm">Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}
