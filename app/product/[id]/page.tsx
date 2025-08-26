"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { notFound } from "next/navigation"
import { getArtworkById, getArtistProfiles, artworks, type Artwork } from "@/lib/artworks"
import { ImageProtection } from "@/components/image-protection"
import { AnimatedHeader } from "@/components/animated-header"

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
  const [logoColor] = useState(getRandomLogoColor())

  const artwork = getArtworkById(parseInt(params.id))

  if (!artwork) {
    notFound()
  }

  const openAcquireModal = (artwork: Artwork) => setSelectedArtworkForInquiry(artwork)
  const closeAcquireModal = () => setSelectedArtworkForInquiry(null)

  // Get related works (same artist, different pieces)
  const relatedWorks = artworks.filter(a => 
    a.artistName === artwork.artistName && a.id !== artwork.id
  ).slice(0, 3)

  // Get other artists
  const allArtists = getArtistProfiles()
  const otherArtists = allArtists.filter(a => a.name !== artwork.artistName).slice(0, 3)

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <ImageProtection />
      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-[9999] fixed top-0 left-0 right-0 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <AnimatedHeader logoColor={logoColor} />
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

      <main className="flex-1 container mx-auto px-4 sm:px-6 md:px-8 pt-24 pb-6 sm:pt-28 sm:pb-8 md:pb-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span className="text-sm font-light">Back to Collection</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
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
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-black mb-2">{artwork.title}</h1>
              <p className="text-lg sm:text-xl font-light text-gray-600 mb-4">{artwork.artist}</p>
              
              {artwork.price && (
                <div className="flex items-center space-x-2 mb-6">
                  <Bitcoin className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  <span className="text-xl sm:text-2xl font-light text-black">{artwork.price}</span>
                </div>
              )}
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-light text-black mb-2">Description</h3>
                <p className="text-gray-700 font-light leading-relaxed text-sm sm:text-base">{artwork.description}</p>
              </div>

              {artwork.medium && (
                <div>
                  <h3 className="text-base sm:text-lg font-light text-black mb-2">Medium</h3>
                  <p className="text-gray-700 font-light text-sm sm:text-base">{artwork.medium}</p>
                </div>
              )}

              {artwork.dimensions && (
                <div>
                  <h3 className="text-base sm:text-lg font-light text-black mb-2">Dimensions</h3>
                  <p className="text-gray-700 font-light text-sm sm:text-base">{artwork.dimensions}</p>
                </div>
              )}

              {artwork.year && (
                <div>
                  <h3 className="text-base sm:text-lg font-light text-black mb-2">Year</h3>
                  <p className="text-gray-700 font-light text-sm sm:text-base">{artwork.year}</p>
                </div>
              )}
            </div>

            <div className="pt-4 sm:pt-6 border-t border-gray-200">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-black text-black hover:bg-black hover:text-white bg-transparent text-base sm:text-lg py-3 sm:py-4"
                onClick={() => openAcquireModal(artwork)}
              >
                Inquire
              </Button>
            </div>
          </div>
        </div>

        {/* Related Works Section */}
        {relatedWorks.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
            <h2 className="text-xl sm:text-2xl font-extralight text-black mb-6 sm:mb-8 text-center px-4">More by {artwork.artistName}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {relatedWorks.map((relatedWork) => (
                <Link 
                  key={relatedWork.id} 
                  href={`/product/${relatedWork.id}`}
                  className="group"
                >
                  <div className="bg-gray-50 rounded-lg overflow-hidden mb-3">
                    <img
                      src={relatedWork.image}
                      alt={relatedWork.title}
                      className="w-full aspect-[4/3] object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center px-2">
                    <h3 className="text-sm sm:text-base font-light text-black group-hover:text-gray-600 transition-colors">
                      {relatedWork.title}
                    </h3>
                    {relatedWork.price && (
                      <div className="flex items-center justify-center mt-1">
                        <Bitcoin className="w-3 h-3 mr-1" />
                        <span className="text-xs sm:text-sm font-light">{relatedWork.price}</span>
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Explore Artists Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200 mb-16">
          <h2 className="text-xl sm:text-2xl font-extralight text-black mb-6 sm:mb-8 text-center px-4">Explore Other Artists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {otherArtists.map((artist) => (
              <Link 
                key={artist.name} 
                href={`/?artist=${encodeURIComponent(artist.name)}`}
                className="group text-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      artist.name === "Anthony Haden-Guest" 
                        ? "object-left" 
                        : "object-center"
                    }`}
                    style={
                      artist.name === "Anthony Haden-Guest" 
                        ? { objectPosition: "25% center" } 
                        : {}
                    }
                  />
                </div>
                <h3 className="text-sm sm:text-base font-light text-black group-hover:text-gray-600 transition-colors mb-1 sm:mb-2">
                  {artist.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed px-1 sm:px-2">
                  {artist.bio.length > 60 ? `${artist.bio.substring(0, 60)}...` : artist.bio}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>

      {/* Acquire Modal */}
      {selectedArtworkForInquiry && (
        <div 
          className="fixed inset-0 bg-black/60 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeAcquireModal()
            }
          }}
        >
          <div className="bg-white w-full sm:max-w-2xl sm:rounded-2xl shadow-2xl relative overflow-hidden animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-0 duration-300">
            {/* Header */}
            <div className="px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-light text-black">Artwork Inquiry</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-black h-10 w-10 rounded-full hover:bg-gray-100 transition-all duration-200"
                  onClick={closeAcquireModal}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {/* Artwork Details */}
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  {selectedArtworkForInquiry.image ? (
                    <img
                      src={selectedArtworkForInquiry.image}
                      alt={selectedArtworkForInquiry.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-black mb-1">{selectedArtworkForInquiry.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{selectedArtworkForInquiry.artist}</p>
                  {selectedArtworkForInquiry.price && (
                    <div className="flex items-center space-x-2">
                      <Bitcoin className="w-4 h-4 text-amber-500" />
                      <span className="text-sm font-medium text-black">{selectedArtworkForInquiry.price} BTC</span>
                    </div>
                  )}
                  {selectedArtworkForInquiry.medium && (
                    <p className="text-xs text-gray-500 mt-1">{selectedArtworkForInquiry.medium}</p>
                  )}
                  {selectedArtworkForInquiry.dimensions && (
                    <p className="text-xs text-gray-500">{selectedArtworkForInquiry.dimensions}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Form Content */}
            <div className="px-6 py-8">
              <div className="mb-6">
                <h4 className="text-base font-medium text-black mb-2">Send us your inquiry</h4>
                <p className="text-sm text-gray-600">We'll get back to you within 24 hours to discuss this piece.</p>
              </div>

              <form
                className="space-y-5"
                action="https://formspree.io/f/mnnbqlqr"
                method="POST"
              >
                <input type="hidden" name="artworkTitle" value={selectedArtworkForInquiry?.title ?? ""} />
                <input type="hidden" name="artworkArtist" value={selectedArtworkForInquiry?.artistName ?? ""} />
                <input type="hidden" name="artworkPrice" value={selectedArtworkForInquiry?.price ?? ""} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-200"
                      placeholder="Your full name"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-200"
                      placeholder="your@email.com"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your interest in this piece, any questions you have, or if you'd like to arrange a viewing..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none disabled:shadow-lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
