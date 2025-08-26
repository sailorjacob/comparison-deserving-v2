"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedHeader } from "@/components/animated-header"
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

export default function TermsPage() {
  const [logoColor] = useState(getRandomLogoColor())

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-[9999] fixed top-0 left-0 right-0 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <AnimatedHeader logoColor={logoColor} />
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

      <main className="flex-1 container mx-auto px-6 md:px-8 pt-32 pb-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-light">Back</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extralight mb-8">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-700 font-light leading-relaxed">
            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Gallery Services</h2>
              <p>
                Comparison-Deserving operates as a curated fine art gallery, representing exceptional 
                artists across the world. We facilitate connections between collectors and artists, 
                and may offer works for sale through various channels including Bitcoin transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Artwork Authenticity</h2>
              <p>
                All artworks presented in our gallery are authentic works by the credited artists. 
                We provide certificates of authenticity for purchased works and maintain detailed 
                provenance records. Each piece undergoes careful verification before inclusion in 
                our collection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Purchase Terms</h2>
              <p>
                Artwork purchases may be conducted in traditional currency or Bitcoin. All sales are 
                final unless otherwise specified. We reserve the right to verify buyer credentials 
                and may require additional documentation for high-value transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Bitcoin Transactions</h2>
              <p>
                For Bitcoin transactions, prices are quoted in BTC and are subject to network 
                confirmation. Transaction fees are the responsibility of the buyer. We recommend 
                using secure wallet practices and verifying all transaction details before proceeding.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Shipping and Delivery</h2>
              <p>
                We arrange professional art shipping for all purchased works. Shipping costs and 
                insurance are calculated based on destination and artwork specifications. International 
                shipments may be subject to customs duties and import taxes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Intellectual Property</h2>
              <p>
                All images and content on this website are protected by copyright. Reproduction 
                rights remain with the respective artists. Purchase of artwork includes ownership 
                of the physical piece but not reproduction rights unless explicitly stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-black">Contact</h2>
              <p>
                For questions about these terms or any gallery services, please contact us at 
                <a href="mailto:info@haven.engineer" className="text-black hover:underline ml-1">
                  info@haven.engineer
                </a>.
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500">
                Last updated: January 2025
              </p>
            </section>
          </div>
        </div>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}