"use client"

import { Bitcoin, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useCallback } from "react"

// Define the artworks
const artworks = [
  {
    id: 1,
    image: "/placeholder-sicdk.png",
    title: "Untitled #47",
    artist: "Contemporary, 2023",
    price: "3.5 BTC",
    description:
      "A captivating abstract piece exploring the interplay of light and shadow, rendered with bold strokes and a muted palette. This work invites contemplation on the ephemeral nature of perception.",
  },
  {
    id: 2,
    image: "/colorful-geometric-abstract.png",
    title: "Geometric Study #3",
    artist: "Modern Artist, 2023",
    price: "1.8 BTC",
    description:
      "A vibrant exploration of form and color, this piece uses precise geometric shapes to create a sense of dynamic balance. Its intricate patterns draw the viewer into a meditative state.",
  },
  {
    id: 3,
    image: "/textured-oil-landscape.png",
    title: "Landscape Memory",
    artist: "Anonymous, 2021",
    price: "3.2 BTC",
    description:
      "An evocative landscape rendered with rich textures and deep hues, capturing the essence of a forgotten memory. The brushwork conveys a sense of raw emotion and natural beauty.",
  },
  {
    id: 4,
    image: "/fine-art-painting.png",
    title: "Abstract Expression",
    artist: "Emerging Talent, 2024",
    price: "2.1 BTC",
    description:
      "A powerful expression of raw emotion through spontaneous brushstrokes and a dynamic composition. This piece challenges conventional forms, inviting personal interpretation.",
  },
  {
    id: 5,
    image: "/placeholder-sicdk.png",
    title: "Urban Echoes",
    artist: "Contemporary, 2022",
    price: "2.9 BTC",
    description:
      "A dynamic urban landscape capturing the energy and rhythm of city life through a blend of sharp lines and soft, atmospheric tones.",
  },
  {
    id: 6,
    image: "/colorful-geometric-abstract.png",
    title: "Chromatic Harmony",
    artist: "Modern Artist, 2021",
    price: "1.5 BTC",
    description:
      "A study in color theory, this piece uses a vibrant spectrum to create a harmonious yet striking visual experience, inviting viewers to explore its depths.",
  },
  {
    id: 7,
    image: "/textured-oil-landscape.png",
    title: "Whispers of the Forest",
    artist: "Anonymous, 2020",
    price: "4.0 BTC",
    description:
      "An ethereal depiction of a forest, where light filters through dense foliage, creating a sense of mystery and tranquility. The textures evoke the raw beauty of nature.",
  },
  {
    id: 8,
    image: "/fine-art-painting.png",
    title: "Digital Dreamscape",
    artist: "Emerging Talent, 2023",
    price: "2.7 BTC",
    description:
      "A futuristic vision rendered with digital precision, blending organic forms with technological elements to create a surreal and thought-provoking landscape.",
  },
]

const ITEMS_PER_PAGE = 4 // Display 4 artworks per page (2x2 grid)

export default function HomePage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [selectedArtworkForInquiry, setSelectedArtworkForInquiry] = useState(null)
  const [isVisible, setIsVisible] = useState(false) // For initial load animation

  useEffect(() => {
    setIsVisible(true) // Trigger initial animation on component mount
  }, [])

  const totalPages = Math.ceil(artworks.length / ITEMS_PER_PAGE)

  const nextPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1))
  }, [totalPages])

  const prevPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }, [])

  const openAcquireModal = (artwork) => setSelectedArtworkForInquiry(artwork)
  const closeAcquireModal = () => setSelectedArtworkForInquiry(null)

  const startIndex = currentPageIndex * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentArtworks = artworks.slice(startIndex, endIndex)

  return (
    <div className="h-screen w-screen bg-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50 transition-all duration-500">
        <div className="container mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-black"></div>
            <div>
              <div className="text-2xl font-light tracking-wide text-black">comparison-deserving</div>
              <div className="text-xs font-light text-gray-500 tracking-wider uppercase">Curated Fine Art</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0"
              onClick={() => setCurrentPageIndex(0)} // Go to first page
            >
              Collection
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0"
              onClick={() => openAcquireModal(null)} // General inquiry
            >
              Acquire
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full"></span>
            </Button>
            <div className="flex items-center space-x-2 text-gray-600">
              <Bitcoin className="w-4 h-4" />
              <span className="text-sm font-light">Accepted</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Art Display Grid */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden px-8 pt-24 pb-12">
        {" "}
        {/* Added pt-24 here */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="container mx-auto h-full w-full flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 items-center justify-center">
              {currentArtworks.map((artwork) => (
                <div key={artwork.id} className="group cursor-pointer flex flex-col h-full">
                  <div className="relative overflow-hidden flex-1 mb-4">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                  </div>
                  <div className="space-y-1 text-center">
                    <h3 className="text-xl font-light text-black group-hover:text-gray-700 transition-colors">
                      {artwork.title}
                    </h3>
                    <p className="text-gray-600 font-light text-sm">{artwork.artist}</p>
                    <div className="flex items-center justify-center pt-2">
                      <span className="text-lg font-light text-black flex items-center space-x-1">
                        <Bitcoin className="w-4 h-4" />
                        <span>{artwork.price}</span>
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-4 border-black text-black hover:bg-black hover:text-white bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => openAcquireModal(artwork)}
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="absolute left-0 right-0 bottom-1/2 translate-y-1/2 flex justify-between px-4 md:px-8">
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 hover:bg-white rounded-full w-12 h-12 shadow-lg"
                onClick={prevPage}
                disabled={currentPageIndex === 0}
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/80 hover:bg-white rounded-full w-12 h-12 shadow-lg"
                onClick={nextPage}
                disabled={currentPageIndex === totalPages - 1}
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Acquire Modal */}
      {selectedArtworkForInquiry && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8">
          <div className="bg-white p-12 rounded-lg shadow-2xl max-w-2xl w-full relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
              onClick={closeAcquireModal}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extralight text-black mb-4">Acquire Artwork</h2>
              {selectedArtworkForInquiry.title && (
                <p className="text-lg font-light text-gray-600">
                  Express your interest in "<span className="font-medium">{selectedArtworkForInquiry.title}</span>". We
                  will contact you shortly.
                </p>
              )}
              {!selectedArtworkForInquiry.title && (
                <p className="text-lg font-light text-gray-600">
                  Please provide your details for a general inquiry. We will contact you shortly.
                </p>
              )}
            </div>

            <form className="space-y-8">
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3 uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3 uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-3 uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  className="w-full border-b-2 border-gray-200 bg-transparent py-3 focus:border-black focus:outline-none transition-colors font-light text-lg resize-none"
                  placeholder="Optional: Share your interest or questions."
                ></textarea>
              </div>
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-black hover:bg-gray-900 text-white font-light px-16 py-4 text-lg transition-all duration-300"
                >
                  Send Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer - Minimal */}
      <footer className="w-full py-6 px-8 border-t border-gray-100 bg-white z-40">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-gray-500 font-light text-sm">© 2024 comparison-deserving. Private Collection.</p>
          <div className="flex items-center space-x-6 text-gray-600 font-light">
            <a href="#" className="hover:text-black transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="hover:text-black transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
