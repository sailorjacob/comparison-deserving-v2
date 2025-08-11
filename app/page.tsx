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
  // Additional examples
  {
    id: 9,
    image: "/placeholder.jpg",
    title: "Nocturne Variations",
    artist: "Contemporary, 2022",
    price: "2.3 BTC",
    description:
      "Subtle gradients and atmospheric tones generate a quiet interplay of light and distance.",
  },
  {
    id: 10,
    image: "/placeholder-jdaem.png",
    title: "Static Field",
    artist: "Modernist, 2019",
    price: "1.2 BTC",
    description:
      "A minimal study in texture and negative space, inviting closer inspection of surface.",
  },
  {
    id: 11,
    image: "/placeholder-user.jpg",
    title: "Portrait Study",
    artist: "Anonymous, 2018",
    price: "2.0 BTC",
    description:
      "An intimate portrait rendered with expressive brushwork and restrained palette.",
  },
  {
    id: 12,
    image: "/placeholder-logo.png",
    title: "Glyph Sequence",
    artist: "Conceptual, 2020",
    price: "0.9 BTC",
    description:
      "Symbolic forms arranged in iterative sequences to elicit rhythm and meaning.",
  },
  {
    id: 13,
    image: "/placeholder-sicdk.png",
    title: "City Grid",
    artist: "Urban, 2021",
    price: "1.7 BTC",
    description:
      "Orthogonal patterns referencing metropolitan networks and shifting perspectives.",
  },
  {
    id: 14,
    image: "/colorful-geometric-abstract.png",
    title: "Spectrum Weave",
    artist: "Modern Artist, 2024",
    price: "1.3 BTC",
    description:
      "Interlaced chroma bands create an optical depth and quiet cadence.",
  },
  {
    id: 15,
    image: "/textured-oil-landscape.png",
    title: "Ridge Line",
    artist: "Landscape, 2017",
    price: "2.6 BTC",
    description:
      "A layered horizon with impasto textures suggesting weathered terrain.",
  },
  {
    id: 16,
    image: "/fine-art-painting.png",
    title: "Gesture No. 12",
    artist: "Emerging Talent, 2024",
    price: "1.9 BTC",
    description:
      "A spontaneous motion study where line density becomes structure.",
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
    setCurrentPageIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }, [totalPages])

  const prevPage = useCallback(() => {
    setCurrentPageIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }, [totalPages])

  const openAcquireModal = (artwork) => setSelectedArtworkForInquiry(artwork)
  const closeAcquireModal = () => setSelectedArtworkForInquiry(null)

  const startIndex = currentPageIndex * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentArtworks = artworks.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50 sticky top-0 transition-all duration-500">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
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
      <main className={`flex-1 relative px-6 md:px-8 py-8 md:py-12 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentArtworks.map((artwork) => (
                <div key={artwork.id} className="group cursor-pointer flex flex-col">
                  <div className="relative overflow-hidden mb-4 rounded-md">
                    <div className="w-full aspect-[4/3] bg-gray-50">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none"></div>
                  </div>
                  <div className="space-y-1 text-center px-2">
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
                      className="mt-4 border-black text-black hover:bg-black hover:text-white bg-transparent"
                      onClick={() => openAcquireModal(artwork)}
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white rounded-full w-12 h-12 shadow-lg border"
              onClick={prevPage}
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </Button>
            <div className="text-sm text-gray-500 font-light">
              Page {currentPageIndex + 1} of {totalPages}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/90 hover:bg-white rounded-full w-12 h-12 shadow-lg border"
              onClick={nextPage}
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </Button>
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
      <footer className="w-full py-4 px-6 border-t border-gray-100 bg-white z-40">
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
