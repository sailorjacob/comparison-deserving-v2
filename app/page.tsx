"use client"

import { Bitcoin, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, useCallback, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { artworks, getArtistProfiles, type Artwork } from "@/lib/artworks"
import { ImageProtection } from "@/components/image-protection"
import { SingaporeModal } from "@/components/singapore-modal"
import { AnimatedHeader } from "@/components/animated-header"



const ITEMS_PER_PAGE = 4 // Display 4 artworks per page (2x2 grid)

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

function HomePageContent() {
  const searchParams = useSearchParams()
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [selectedArtworkForInquiry, setSelectedArtworkForInquiry] = useState<Artwork | null>(null)
  const [isVisible, setIsVisible] = useState(false) // For initial load animation
  const [selectedArtist, setSelectedArtist] = useState<string>("all")
  const [showSoldOnly, setShowSoldOnly] = useState<boolean>(false)
  const [logoColor, setLogoColor] = useState<string>("bg-yellow-500")

  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true) // Trigger initial animation on component mount
    setLogoColor(getRandomLogoColor()) // Set random logo color on mount
    
    // Check for artist parameter in URL
    const artistParam = searchParams.get('artist')
    if (artistParam) {
      setSelectedArtist(artistParam)
    }
  }, [searchParams])

  const artistProfiles = getArtistProfiles()
  const baseFilteredArtworks = artworks.filter((a) => {
    const artistOk = selectedArtist === "all" || a.artistName === selectedArtist
    const soldOk = showSoldOnly ? a.isSold : true
    const placeholderOk = selectedArtist === "all" ? !a.isPlaceholder : true
    return artistOk && soldOk && placeholderOk
  })
  
  // Randomize artworks but keep "Backyard Blue" (id: 1) pinned first
  const filteredArtworks = useMemo(() => {
    const backyardBlue = baseFilteredArtworks.find(a => a.id === 1)
    const otherArtworks = baseFilteredArtworks.filter(a => a.id !== 1)
    
    // Shuffle other artworks
    const shuffled = [...otherArtworks].sort(() => Math.random() - 0.5)
    
    // Return with Backyard Blue first (if it exists in filtered results)
    return backyardBlue ? [backyardBlue, ...shuffled] : shuffled
  }, [baseFilteredArtworks])
  const totalPages = Math.max(1, Math.ceil(filteredArtworks.length / ITEMS_PER_PAGE))

  const nextPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1))
  }, [totalPages])

  const prevPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }, [])

  const openAcquireModal = (artwork: Artwork) => setSelectedArtworkForInquiry(artwork)
  const closeAcquireModal = () => setSelectedArtworkForInquiry(null)

  useEffect(() => {
    setCurrentPageIndex(0)
  }, [selectedArtist, showSoldOnly])

  const startIndex = currentPageIndex * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentArtworks: Artwork[] = filteredArtworks.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <ImageProtection />
      {/* Navigation */}
      <nav className="w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 z-[9999] fixed top-0 left-0 right-0 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-6 py-3">
          <AnimatedHeader logoColor={logoColor} />
          <div className="flex items-center space-x-8">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0"
              onClick={() => setCurrentPageIndex(0)}
            >
              Collection
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
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

      {/* Main Art Display Grid */}
      <main className={`flex-1 relative px-0 pt-24 pb-8 md:pt-28 md:pb-10 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-4 md:px-6 md:pl-[3rem]">
          <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-6">
            {/* Sidebar Filters */}
            <aside className="hidden md:block">
              <div className="sticky top-20 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Artists</div>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedArtist("all")}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                        selectedArtist === "all"
                          ? "bg-gray-100 text-black"
                          : "text-gray-600 hover:bg-gray-50 hover:text-black"
                      }`}
                    >
                      All artists
                    </button>
                    {artistProfiles.map((artist) => (
                      <button
                        key={artist.name}
                        onClick={() => setSelectedArtist(artist.name)}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                          selectedArtist === artist.name
                            ? "bg-gray-100 text-black"
                            : "text-gray-600 hover:bg-gray-50 hover:text-black"
                        }`}
                      >
                        {artist.name}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </aside>

            {/* Products Grid */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentArtworks.map((artwork) => (
                  <div key={artwork.id} className="group cursor-pointer flex flex-col">
                    <Link href={`/product/${artwork.id}`} className="block">
                    <div className="relative overflow-hidden mb-3 rounded-md">
                      {artwork.image ? (
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full aspect-[4/3] object-contain bg-gray-100"
                        />
                      ) : (
                        <div className="w-full aspect-[4/3] bg-gray-200" />
                      )}
                    </div>
                    <div className="space-y-1 text-center px-2">
                      <h3 className="text-xl font-light text-black group-hover:text-gray-700 transition-colors">
                        {artwork.title}
                      </h3>
                      <p className="text-gray-600 font-light text-sm">{artwork.artist}</p>
                      {artwork.price && (
                        <div className="flex items-center justify-center pt-2">
                          <span className="text-lg font-light text-black flex items-center space-x-1">
                            <Bitcoin className="w-4 h-4" />
                            <span>{artwork.price}</span>
                          </span>
                        </div>
                      )}
                      </div>
                    </Link>
                    <div className="text-center px-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="mt-4 border-black text-black hover:bg-black hover:text-white bg-transparent"
                        onClick={() => openAcquireModal(artwork)}
                      >
                        Inquire
                      </Button>
                    </div>
                  </div>
                ))}
                {filteredArtworks.length === 0 && (
                  <div className="text-center text-gray-500 font-light py-12">No works found.</div>
                )}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex items-center justify-between md:col-span-2">
                  <div className="text-sm text-gray-500 font-light hidden md:block">
                    Showing {currentPageIndex * ITEMS_PER_PAGE + 1}-{Math.min((currentPageIndex + 1) * ITEMS_PER_PAGE, filteredArtworks.length)} of {filteredArtworks.length}
                  </div>
                  <div className="md:hidden"></div>
              <div className="flex items-center gap-3">
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i}
                      variant="ghost"
                      size="sm"
                      className={`w-8 h-8 p-0 ${
                        currentPageIndex === i 
                          ? "bg-gray-100 text-black border border-gray-300" 
                          : "text-gray-600 hover:text-black hover:bg-gray-50"
                      }`}
                      onClick={() => setCurrentPageIndex(i)}
                    >
                      {i + 1}
                    </Button>
                  ))}
              </div>
                
                {/* Arrow Controls */}
                <div className="flex items-center gap-1 ml-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`px-3 py-2 ${
                      currentPageIndex > 0 
                        ? "text-gray-800 hover:text-black hover:bg-gray-100" 
                        : "text-gray-300 cursor-not-allowed"
                    }`}
                    aria-label="Previous page"
                    onClick={prevPage}
                    disabled={currentPageIndex === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Prev
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`px-3 py-2 ${
                      currentPageIndex < totalPages - 1 
                        ? "text-gray-800 hover:text-black hover:bg-gray-100" 
                        : "text-gray-300 cursor-not-allowed"
                    }`}
                    aria-label="Next page"
                    onClick={nextPage}
                    disabled={currentPageIndex >= totalPages - 1}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                      className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-20 ${logoColor.replace('bg-', 'focus:border-')}`}
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
                      className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-20 ${logoColor.replace('bg-', 'focus:border-')}`}
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
                    className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none focus:border-opacity-100 focus:ring-2 focus:ring-opacity-20 ${logoColor.replace('bg-', 'focus:border-')}`}
                    placeholder="Tell us about your interest in this piece, any questions you have, or if you'd like to arrange a viewing..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full text-white text-sm font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none disabled:shadow-lg ${logoColor} hover:opacity-90`}
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

      {/* Footer - Minimal */}
      <footer className="w-full py-4 px-6 border-t border-gray-100 bg-white z-40">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-gray-500 font-light text-sm">© 2025 comparison-deserving.</p>
          <div className="flex items-center space-x-6 text-gray-600 font-light">
            <a href="/privacy" className="hover:text-black transition-colors text-xs">
              Privacy
            </a>
            <a href="/terms" className="hover:text-black transition-colors text-xs">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function HomePage() {
  const fallbackLogoColor = getRandomLogoColor()
  
  return (
    <Suspense fallback={
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="text-center">
          <div className={`w-8 h-8 ${fallbackLogoColor} mx-auto mb-4`} />
          <div className="text-2xl font-light tracking-wide text-black">comparison-deserving</div>
          <div className="text-xs font-light text-gray-500 tracking-wider uppercase mt-1">Loading...</div>
        </div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  )
}
