"use client"

import { Bitcoin, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState, useCallback } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Types
interface Artwork {
  id: number
  image: string
  title: string
  artist: string
  artistName: string
  medium?: string
  price: string
  description: string
  isSold?: boolean
  isPlaceholder?: boolean
}

// Define the artworks
const baseArtworks: Artwork[] = [
  {
    id: 1,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/IMG_549509AE11D4-1-removebg-preview%20(1).png",
    title: "Backyard Blue",
    artist: "Jimmy Frezza, 2022",
    artistName: "Jimmy Frezza",
    medium: "Oil, acrylic, and found object on canvas",
    price: "",
    description: "Oil, acrylic, and found object on canvas.",
  },
  {
    id: 2,
    image: "",
    title: "Untitled",
    artist: "Pablo Picasso",
    artistName: "Pablo Picasso",
    price: "",
    description: "Placeholder work for Pablo Picasso.",
    isPlaceholder: true,
  },
  {
    id: 3,
    image: "",
    title: "Untitled",
    artist: "Jean-Michel Basquiat",
    artistName: "Jean-Michel Basquiat",
    price: "",
    description: "Placeholder work for Jean-Michel Basquiat.",
    isPlaceholder: true,
  },
  // Allie works
  {
    id: 4,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie1.png",
    title: "Moonlit Garden",
    artist: "Allie, 2021",
    artistName: "Allie",
    price: "0.35 BTC",
    description: "Work by Allie.",
    isSold: false,
  },
  {
    id: 5,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie2.png",
    title: "Lunar Tides",
    artist: "Allie, 2022",
    artistName: "Allie",
    price: "0.75 BTC",
    description: "Work by Allie.",
    isSold: false,
  },
  {
    id: 6,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie3.png",
    title: "Crescent Echoes",
    artist: "Allie, 2023",
    artistName: "Allie",
    price: "1.10 BTC",
    description: "Work by Allie.",
    isSold: false,
  },
  {
    id: 7,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie4.png",
    title: "Allie 1",
    artist: "Allie",
    artistName: "Allie",
    price: "0.50 BTC",
    description: "Work by Allie.",
    isSold: false,
  },
  {
    id: 8,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie5.png",
    title: "Allie 2",
    artist: "Allie",
    artistName: "Allie",
    price: "0.95 BTC",
    description: "Work by Allie.",
    isSold: false,
  },
  {
    id: 9,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/rare%20glass%20x%20ammo%20cat.jpg",
    title: "Ammo Cat x rare.glass",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "0.20 BTC",
    description: "Collaboration piece.",
    isSold: false,
  },
]

// Enrich artworks with minimal metadata for filtering
const fallbackArtists = ["Jean-Michel Basquiat", "Pablo Picasso"]
const artworks: Artwork[] = baseArtworks.map((artwork, index) => ({
  ...artwork,
  artistName: artwork.artistName || fallbackArtists[index % fallbackArtists.length],
  isSold: artwork.isSold ?? (index % 4 === 0),
}))

const ITEMS_PER_PAGE = 4 // Display 4 artworks per page (2x2 grid)

export default function HomePage() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const [selectedArtworkForInquiry, setSelectedArtworkForInquiry] = useState<Artwork | null>(null)
  const [isVisible, setIsVisible] = useState(false) // For initial load animation
  const [selectedArtist, setSelectedArtist] = useState<string>("all")
  const [showSoldOnly, setShowSoldOnly] = useState<boolean>(false)

  useEffect(() => {
    setIsVisible(true) // Trigger initial animation on component mount
  }, [])

  const artists = Array.from(new Set(["Jimmy Frezza", "Pablo Picasso", "Jean-Michel Basquiat", ...artworks.map((a) => a.artistName)])).sort()
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
      <nav className="w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50 sticky top-0 transition-all duration-500">
        <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-black" />
            <div>
              <div className="text-2xl font-light tracking-wide text-black">comparison-deserving</div>
              <div className="text-xs font-light text-gray-500 tracking-wider uppercase">Curated Fine Art</div>
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
        <div className="mx-auto max-w-7xl pl-2 md:pl-3 pr-4 md:pr-6">
          <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-6">
            {/* Sidebar Filters */}
            <aside className="hidden md:block">
              <div className="sticky top-20 space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Artists</div>
                  <Select value={selectedArtist} onValueChange={(v) => setSelectedArtist(v)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="All artists" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All artists</SelectItem>
                      {artists.map((name) => (
                        <SelectItem key={name} value={name}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">Status</div>
                  <div className="flex gap-2">
                    <Button
                      variant={showSoldOnly ? "outline" : "default"}
                      size="sm"
                      onClick={() => setShowSoldOnly(false)}
                    >
                      All
                    </Button>
                    <Button
                      variant={showSoldOnly ? "default" : "outline"}
                      size="sm"
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
                Page {currentPageIndex + 1} of {totalPages}
              </div>
              <div className="flex items-center gap-2">
                {currentPageIndex > 0 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-2 text-gray-800 hover:text-black"
                    aria-label="Previous"
                    onClick={prevPage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                )}
                {currentPageIndex < totalPages - 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="p-2 text-gray-800 hover:text-black"
                    aria-label="Next"
                    onClick={nextPage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                )}
              </div>
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
              {selectedArtworkForInquiry.title ? (
                <p className="text-lg font-light text-gray-600">
                  Express your interest in <span className="font-medium">{selectedArtworkForInquiry.title}</span>. We will contact you shortly.
                </p>
              ) : (
                <p className="text-lg font-light text-gray-600">Please provide your details for a general inquiry. We will contact you shortly.</p>
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
                />
              </div>
              <div className="text-center pt-4">
                <Button type="submit" size="lg" className="bg-black hover:bg-gray-900 text-white font-light px-16 py-4 text-lg transition-all duration-300">
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
