"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { artworks } from "@/lib/artworks"

// Artist data with their info and artworks derived from shared data
const artistsData = [
  {
    name: "Jimmy Frezza",
    bio: "Contemporary artist known for mixed media works that blend found objects with traditional painting techniques.",
    image: "/placeholder-artist.jpg", // You can replace with actual artist photos
    artworks: artworks.filter(a => a.artistName === "Jimmy Frezza")
  },
  {
    name: "Allie",
    bio: "Emerging artist exploring themes of nature, emotion, and human connection through vibrant imagery.",
    image: "/placeholder-artist.jpg",
    artworks: artworks.filter(a => a.artistName === "Allie")
  },
  {
    name: "Ammo Cat",
    bio: "Digital and mixed media artist creating bold collaborative works that challenge traditional art boundaries.",
    image: "/placeholder-artist.jpg",
    artworks: artworks.filter(a => a.artistName === "Ammo Cat")
  },
  {
    name: "Anthony Haden-Guest",
    bio: "Renowned artist and cultural commentator whose work spans multiple decades and media.",
    image: "/placeholder-artist.jpg",
    artworks: artworks.filter(a => a.artistName === "Anthony Haden-Guest")
  }
]

export default function ArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState(artistsData[0])
  const [selectedArtwork, setSelectedArtwork] = useState(selectedArtist.artworks[0])

  const handleArtistSelect = (artist: typeof artistsData[0]) => {
    setSelectedArtist(artist)
    setSelectedArtwork(artist.artworks[0])
  }

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
            <Button
              variant="ghost"
              className="text-black border-b border-black font-light relative group px-0"
            >
              Artists
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
            <span className="text-sm font-light">Back</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-8">
          {/* Left Artist Menu */}
          <aside className="space-y-2">
            <h2 className="text-lg font-light mb-4">Artists</h2>
            {artistsData.map((artist) => (
              <button
                key={artist.name}
                onClick={() => handleArtistSelect(artist)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                  selectedArtist.name === artist.name
                    ? "bg-gray-100 text-black"
                    : "text-gray-600 hover:bg-gray-50 hover:text-black"
                }`}
              >
                {artist.name}
              </button>
            ))}
          </aside>

          {/* Center Content */}
          <div className="space-y-8">
            {/* Artist Info */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-48 h-48 mx-auto mb-6 bg-gray-200 rounded-lg flex items-center justify-center">
                {selectedArtist.image ? (
                  <img
                    src={selectedArtist.image}
                    alt={selectedArtist.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Artist Photo</span>
                )}
              </div>
              <h1 className="text-4xl font-extralight mb-4">{selectedArtist.name}</h1>
              <p className="text-gray-700 font-light leading-relaxed">{selectedArtist.bio}</p>
            </div>

            {/* Selected Artwork Display */}
            <div className="text-center">
              <div className="max-w-lg mx-auto mb-4">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full aspect-[4/3] object-contain bg-gray-100 rounded-md"
                />
              </div>
              <h3 className="text-xl font-light">{selectedArtwork.title}</h3>
            </div>

            {/* Artwork Preview Icons */}
            <div className="flex justify-center gap-4 flex-wrap">
              {selectedArtist.artworks.map((artwork) => (
                <div key={artwork.id} className="relative">
                  <button
                    onClick={() => setSelectedArtwork(artwork)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      selectedArtwork.id === artwork.id
                        ? "border-black"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={artwork.image}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <Link 
                    href={`/product/${artwork.id}`}
                    className="absolute inset-0 opacity-0 hover:opacity-100 bg-black/50 rounded-md flex items-center justify-center transition-opacity"
                  >
                    <span className="text-white text-xs font-light">View</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}
