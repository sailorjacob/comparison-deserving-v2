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
              We're searching for the next 100 emerging artists who will define tomorrow's art world. This isn't just another list—it's a focused effort to discover talent from creative centers across the Global South and other overlooked regions. We're building an online platform that connects these artists directly with serious collectors. As the art market becomes more digital, we see an opportunity to create something that hasn't existed before: a streamlined way for new voices to reach the right audience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Digital Changes Everything</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The numbers tell the story: 59% of collectors now discover art online, a significant jump from before the pandemic. This shift creates new opportunities for artists who might not have access to traditional gallery networks. Think of it like photography in the 19th century—suddenly, art could reach people who'd never set foot in a salon. Julia Margaret Cameron's portraits found homes far beyond London's elite circles. Today's online platforms do the same thing, breaking down geographic barriers and letting collectors discover work they'd never see otherwise. We're building tools that make this process simple and effective.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why These Regions Matter</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Asia, Africa, and Latin America aren't just emerging markets—they're where some of the most interesting art is being made right now. Collectors are paying attention: the market is shifting eastward by about 15%, and people are looking for authentic stories, not just familiar names. It reminds me of how the Renaissance expanded when trade routes opened up between Europe and the East. New influences changed everything. We're seeing the same thing happen now, and we want to make sure these artists get the visibility they deserve. When 69% of serious buyers say diversity matters in their collections, that's not just talk—it's a market reality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">What We Can Learn from the Past</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Medici family didn't just collect art—they created an entire ecosystem. In 15th-century Florence, they commissioned over 1,000 works and spotted talent like Botticelli before anyone else did. They understood that supporting artists early could change the course of art history. We're not the Medici, but we can learn from their approach. The art market is growing, and emerging artists are seeing steady demand. Collectors who get in early aren't just making investments—they're building relationships with artists who might become the next big names. It's happened before, and it will happen again.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Making It Last</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This isn't about quick profits or trendy names. We're building something that will matter in the long run. The French Academy in the 17th century didn't just teach painting—it preserved techniques and nurtured talent that influenced generations. In 2025, we need platforms that do more than just sell art. We need systems that help artists build careers, that help collectors make meaningful choices, and that create conversations about what art can do in the world. When art connects people across cultures and generations, that's when it becomes something more than decoration.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Finding the next 100 artists isn't about creating a list—it's about starting conversations, building connections, and watching what happens when talent meets opportunity. We're not predicting the future; we're helping to shape it.
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
