"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { notFound } from "next/navigation"
import { getArtworkById, type Artwork } from "@/lib/artworks"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const [selectedArtworkForInquiry, setSelectedArtworkForInquiry] = useState<Artwork | null>(null)
  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const artwork = getArtworkById(parseInt(params.id))

  if (!artwork) {
    notFound()
  }

  const openAcquireModal = (artwork: Artwork) => setSelectedArtworkForInquiry(artwork)
  const closeAcquireModal = () => setSelectedArtworkForInquiry(null)

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50 sticky top-0 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-yellow-500" />
            <div>
              <div className="text-2xl font-light tracking-wide text-black">comparison-deserving</div>
              <div className="text-xs font-light text-gray-500 tracking-wider uppercase">Fine Art Gallery</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12">
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
            <div className="flex items-center space-x-2 text-gray-600">
              <Bitcoin className="w-4 h-4" />
              <span className="text-sm font-light">Accepted</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-6 md:px-8 py-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-light">Back to Collection</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Artwork Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={artwork.images ? artwork.images[currentImageIndex] : artwork.image}
                alt={artwork.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Image Thumbnails */}
            {artwork.images && artwork.images.length > 1 && (
              <div className="flex gap-2 justify-center">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${artwork.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Artwork Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-extralight text-black mb-2">{artwork.title}</h1>
              <p className="text-xl font-light text-gray-600 mb-4">{artwork.artist}</p>
              
              {artwork.price && (
                <div className="flex items-center space-x-2 mb-6">
                  <Bitcoin className="w-5 h-5 text-black" />
                  <span className="text-2xl font-light text-black">{artwork.price}</span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-light text-black mb-2">Description</h3>
                <p className="text-gray-700 font-light leading-relaxed">{artwork.description}</p>
              </div>

              {artwork.medium && (
                <div>
                  <h3 className="text-lg font-light text-black mb-2">Medium</h3>
                  <p className="text-gray-700 font-light">{artwork.medium}</p>
                </div>
              )}

              {artwork.dimensions && (
                <div>
                  <h3 className="text-lg font-light text-black mb-2">Dimensions</h3>
                  <p className="text-gray-700 font-light">{artwork.dimensions}</p>
                </div>
              )}

              {artwork.year && (
                <div>
                  <h3 className="text-lg font-light text-black mb-2">Year</h3>
                  <p className="text-gray-700 font-light">{artwork.year}</p>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white bg-transparent"
                onClick={() => openAcquireModal(artwork)}
              >
                {artwork.price ? "Buy" : "Inquire"}
              </Button>
            </div>
          </div>
        </div>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>

      {/* Acquire Modal */}
      {selectedArtworkForInquiry && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-8">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-t-2xl sm:rounded-lg shadow-2xl max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={closeAcquireModal}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extralight text-black mb-4">Acquire Artwork</h2>
              {selectedArtworkForInquiry.title ? (
                <p className="text-base sm:text-lg font-light text-gray-600">
                  Express your interest in <span className="font-medium">{selectedArtworkForInquiry.title}</span>. We will contact you shortly.
                </p>
              ) : (
                <p className="text-base sm:text-lg font-light text-gray-600">Please provide your details for a general inquiry. We will contact you shortly.</p>
              )}
            </div>

            <form
              className="space-y-8"
              onSubmit={async (e) => {
                e.preventDefault()
                if (isSubmitting) return
                setIsSubmitting(true)
                try {
                  const res = await fetch("/api/inquiry", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: formName,
                      email: formEmail,
                      message: formMessage,
                      artworkTitle: selectedArtworkForInquiry?.title ?? null,
                    }),
                  })
                  if (!res.ok) throw new Error("Failed to send inquiry")
                  alert("Inquiry sent. We'll contact you shortly.")
                  setFormName("")
                  setFormEmail("")
                  setFormMessage("")
                  setSelectedArtworkForInquiry(null)
                } catch (err) {
                  alert("There was an error sending your inquiry. Please try again.")
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light text-base sm:text-lg"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light text-base sm:text-lg"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3 uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light text-base sm:text-lg resize-none"
                  placeholder="Optional: Share your interest or questions."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                />
              </div>
              <div className="text-center pt-4">
                <Button type="submit" size="lg" className="w-full sm:w-auto bg-black hover:bg-gray-900 text-white font-light px-8 sm:px-16 py-4 text-base sm:text-lg transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
