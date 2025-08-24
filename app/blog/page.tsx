"use client"

import Link from "next/link"
import { Bitcoin, Calendar, ArrowRight } from "lucide-react"
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

// Blog articles data
const blogArticles = [
  {
    id: 1,
    title: "The Next 100 Artists",
    excerpt: "At our gallery, we're embarking on a search for the next 100 emerging artists: voices poised to shape tomorrow's visual narratives. This initiative focuses on talents from rising creative hubs across the Global South and beyond...",
    date: "September 2, 2025",
    readTime: "6 min read",
    slug: "the-next-100-artists"
  },
  {
    id: 2,
    title: "Shifting Horizons: Emerging Capitals and Resilient Niches in the 2025 Art Market",
    excerpt: "Mid-2025 finds the global art scene in flux—auction sales dipped 6% in the first half to $3.98 billion, with ultra-contemporary works down 43% from last year. Yet amid the slowdown, fresh energy bubbles up in overlooked corners...",
    date: "August 27, 2025",
    readTime: "7 min read",
    slug: "shifting-horizons-emerging-capitals-resilient-niches-2025-art-market"
  },
  {
    id: 3,
    title: "Top 15 Art Collectors of 2025",
    excerpt: "In 2025, art collecting pulses with fresh energy, from AI-infused commissions to global biennials spotlighting underrepresented voices. These 15 stand out for their influence, blending philanthropy with sharp instincts...",
    date: "August 24, 2025",
    readTime: "8 min read",
    slug: "top-15-art-collectors-of-2025"
  },
  {
    id: 4,
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
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Articles List */}
          <div className="space-y-8">
            {blogArticles.map((article) => (
              <article key={article.id} className={`border-b pb-8 last:border-b-0 ${article.id === 1 ? 'border-yellow-500' : article.id === 2 ? 'border-green-500' : article.id === 3 ? 'border-red-500' : 'border-blue-500'}`}>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                  {article.title}
                </h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                
                <Link href={`/blog/${article.slug}`}>
                  <Button variant="ghost" className="group text-gray-600 hover:text-black px-0 py-2 h-auto font-normal">
                    <span className="text-sm">Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
