"use client"

import { Bitcoin, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import { artworks, getArtistProfiles, type Artwork } from "@/lib/artworks"



const ITEMS_PER_PAGE = 4 // Display 4 artworks per page (2x2 grid)

export default function HomePage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [selectedArtworkForInquiry, setSelectedArtworkForInquiry] = useState<Artwork | null>(null)
  const [isVisible, setIsVisible] = useState(false) // For initial load animation
  const [selectedArtist, setSelectedArtist] = useState<string>("all")
  const [showSoldOnly, setShowSoldOnly] = useState<boolean>(false)

  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setIsVisible(true) // Trigger initial animation on component mount
  }, [])

  const artistProfiles = getArtistProfiles()
  const filteredArtworks = artworks.filter((a) => {
    const artistOk = selectedArtist === "all" || a.artistName === selectedArtist
    const soldOk = showSoldOnly ? a.isSold : true
    const placeholderOk = selectedArtist === "all" ? !a.isPlaceholder : true
    return artistOk && soldOk && placeholderOk
  })
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
      <main className={`flex-1 relative px-0 py-8 md:py-10 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
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
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Status</div>
                  <div className="flex gap-2">
                    <Button
                      variant={showSoldOnly ? "outline" : "outline"}
                      size="sm"
                      className={`${showSoldOnly ? "border border-gray-300 text-gray-500 bg-transparent hover:bg-gray-50" : "border border-black text-black bg-white hover:bg-gray-50"}`}
                      onClick={() => setShowSoldOnly(false)}
                    >
                      All
                    </Button>
                    <Button
                      variant={showSoldOnly ? "outline" : "outline"}
                      size="sm"
                      className={`${showSoldOnly ? "border border-black text-black bg-white hover:bg-gray-50" : "border border-gray-300 text-gray-500 bg-transparent hover:bg-gray-50"}`}
                      onClick={() => setShowSoldOnly(true)}
                    >
                      Sold
                    </Button>
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
                        {artwork.price ? "Buy" : "Inquire"}
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
              <div className="text-sm text-gray-500 font-light">
                Showing {currentPageIndex * ITEMS_PER_PAGE + 1}-{Math.min((currentPageIndex + 1) * ITEMS_PER_PAGE, filteredArtworks.length)} of {filteredArtworks.length}
              </div>
              <div className="flex items-center gap-3">
                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i}
                      variant={currentPageIndex === i ? "default" : "ghost"}
                      size="sm"
                      className={`w-8 h-8 p-0 ${
                        currentPageIndex === i 
                          ? "bg-black text-white hover:bg-gray-800" 
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
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
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-8">
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-t-2xl sm:rounded-lg shadow-2xl max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={closeAcquireModal}
            >
              <X className="w-6 h-6" />
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

      {/* Footer - Minimal */}
      <footer className="w-full py-4 px-6 border-t border-gray-100 bg-white z-40">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-gray-500 font-light text-sm">© 2024 comparison-deserving. Private Collection.</p>
          <div className="flex items-center space-x-6 text-gray-600 font-light">
            <a href="/privacy" className="hover:text-black transition-colors text-sm">
              Privacy
            </a>
            <a href="/terms" className="hover:text-black transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
