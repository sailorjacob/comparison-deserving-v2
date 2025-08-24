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

export default function AndyWarholArticlePage() {
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
                <span>August 19, 2025</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              What Would Andy Warhol Be Doing Today?
            </h1>
            
            <div className="w-24 h-1 bg-blue-500"></div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If Andy Warhol were still around, painting, filming, and hoarding, he might thrive in our hyper-connected world. Born Andrew Warhola to Slovak immigrants, he ditched the "a" early on to fit into New York's scene, much like today's creators might rebrand for TikTok fame. He could eye the 2025 art boom in AI-generated works and digital collectibles, possibly remixing pop icons with a twist.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              He could be running an Instagram "Factory," perhaps like Virgil Abloh's Instagram fluttering post style, collaborating with influencers on short-form videos. Warhol produced experimental films like the eight-hour <em>Empire</em>, a static shot of the Empire State Building, pure endurance art. Today, he might drop TikToks of celebrities scrolling their feeds, possibly capturing our 15-second attention spans, echoing his famous quip about fleeting fame.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              He might dive into AI art trends, generating endless variations of Campbell's soup cans with tools like Midjourney, blending nostalgia with code. Retro revival is huge this year, with artists nodding to vintage styles in bold palettes and mixed media. Warhol, who ate the same lunch daily (hence the cans), could love how AI democratizes creation, much like his silk-screen multiples made art accessible.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a devout Catholic who attended Mass weekly from childhood until his death in 1987, despite his wild Factory parties, he might infuse spiritual motifs into AR installations, tying into 2025's cultural art wave. Think holographic Madonnas amid climate-themed pieces, possibly addressing eco-anxiety through pop lenses.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Warhol was a collector at heart, amassing 610 time capsules stuffed with ephemera like pizza dough and unpaid bills. In 2025, he might hoard NFTs and memes, perhaps auctioning his cookie jar collection (which fetched $250K posthumously) as digital twins amid the ethical art movement.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              He might podcast from his wig-filled studio. Yes, he wore silver toupees to hide baldness, turning insecurity into style. Chatting pop culture shifts like AI-driven entertainment and sustainable fashion, he could remind us: art mirrors the mundane, now amplified by algorithms.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Warhol could fit right in, possibly turning today's chaos into silk-screen gold. For visuals, check Warhol-inspired AI art at <a href="https://artsy.net" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline">artsy.net</a> or his time capsules via the <a href="https://warhol.org" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 underline">Warhol Museum</a>.
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
