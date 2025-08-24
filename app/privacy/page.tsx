"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin } from "lucide-react"
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

export default function PrivacyPage() {
  const [logoColor] = useState(getRandomLogoColor())

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
          <h1 className="text-4xl font-extralight mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700 font-light leading-relaxed">
          <section>
              <h2 className="text-2xl font-light mb-4 text-black">Information We Collect</h2>
              <p>
                When you use our gallery website, we may collect information you provide directly to us, 
                such as when you make an inquiry about artwork, subscribe to updates, or contact us. 
                This may include your name, email address, and any messages you send us.
            </p>
          </section>

          <section>
              <h2 className="text-2xl font-light mb-4 text-black">How We Use Your Information</h2>
              <p>
                We use the information we collect to respond to your inquiries, provide information about 
                our artists and available works, and communicate with you about our gallery. We do not 
                sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except as described in this policy.
            </p>
          </section>

          <section>
              <h2 className="text-2xl font-light mb-4 text-black">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, please be aware 
                that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
              <h2 className="text-2xl font-light mb-4 text-black">Bitcoin Transactions</h2>
              <p>
                For artwork purchases using Bitcoin, we may collect wallet addresses and transaction 
                information necessary to complete your purchase. These transactions are recorded on 
                the blockchain and are publicly viewable.
            </p>
          </section>

          <section>
              <h2 className="text-2xl font-light mb-4 text-black">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
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