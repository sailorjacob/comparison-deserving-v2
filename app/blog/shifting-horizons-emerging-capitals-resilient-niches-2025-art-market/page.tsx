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

export default function ShiftingHorizonsArticlePage() {
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
                <span>August 27, 2025</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Shifting Horizons: Emerging Capitals and Resilient Niches in the 2025 Art Market
            </h1>
            
            <div className="w-24 h-1 bg-green-500"></div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Mid-2025 finds the global art scene in flux—auction sales dipped 6% in the first half to $3.98 billion, with ultra-contemporary works down 43% from last year. Yet amid the slowdown, fresh energy bubbles up in overlooked corners. High-end trophies falter, but mid-tier resilience and budding hubs keep things lively. Here's the pulse.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Online Pivots and Pricing Smarts</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Galleries lean digital: 43% boost online sales focus, while 55% amp up content like Reels and virtual shows. Collectors follow suit—59% bought online last year. Lesser known: Visible prices make artworks six times more likely to sell, a quiet edge in a market where 69% hesitate over transparency gaps. Economic jitters hit hard, with 75% of galleries citing uncertainty, but this shift opens doors for nimble buyers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Choosier Collectors, Emerging Bets</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              30% of collectors turned selective, with just 7% buying more amid high prices and budgets. Focus sharpens on emerging artists—72% draw interest for fresh takes at under $5,000. Fun fact: The low end (under $5,000) grew 3% in items sold, hitting 40.5 million, as enjoyment trumps investment for many. Galleries echo this, prioritizing early-career talent over stars.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Niche Strengths: Prints, Textiles, and Ethics</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Prints stay tough, with mid-year gains defying the broader slump. Curators highlight textiles—fiber works by Sarah Zapata or Melissa Joseph weave craft into modern narratives, nodding to queer ecologies and speculative realism. Ethical art surges too: Climate themes and handmade practices like ceramics address eco-crises, blending with biophilic designs for mindful spaces. Lesser known: The $100,000–$1 million bracket holds firm, fueled by personal taste over speculation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Fresh Hubs: Milan to Marrakech</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Beyond New York and London, new capitals rise. Milan's tax perks (flat €200,000 on foreign income) lure galleries like Lehmann Maupin and Thaddaeus Ropac, with Miart fair buzzing. Warsaw's Museum of Modern Art debuts in February, spotlighting post-war Polish voices amid events like NADA Villa. Abu Dhabi's Guggenheim opens soon, backed by $1 billion from local funds, while Mumbai's billionaire boom (92 strong) powers Art Mumbai with galleries like Experimenter. Marrakech thrives on African contemporary, with 1-54 fair and revamped museums drawing global eyes. These spots shift 15% of market share eastward, per reports.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cultural Crossovers and Youth Pull</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Millennials and Gen Z reshape tastes, mixing pop culture with art—think video games as medium, per Hans Ulrich Obrist, with works like Danielle Braithwaite-Shirley's interactive pieces. Activism weaves in: Female and Indigenous artists gain ground, from clay to land discourses. Lesser known: Private sales jumped 14%, favoring discreet deals for high-value postwar like Hockney's $28.6 million splash.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              In a market rethinking its core—US still leads at 43%, but edges erode—these niches and cities spark joy. Smart eyes spot value here, where resilience meets reinvention.
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
