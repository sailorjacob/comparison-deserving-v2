"use client"

import Link from "next/link"
import { ChevronLeft, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { getArtistProfiles } from "@/lib/artworks"

// Get artist data with profile images
const artistsData = getArtistProfiles()

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

export default function ArtistsPage() {
  const [selectedArtist, setSelectedArtist] = useState<typeof artistsData[0] | null>(null)
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artistsData[0]['artworks'][0] | null>(null)
  const [logoColor] = useState(getRandomLogoColor())

  const handleArtistSelect = (artist: typeof artistsData[0]) => {
    setSelectedArtist(artist)
    setSelectedArtwork(artist.artworks[0])
  }

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

      <main className="flex-1 container mx-auto px-6 md:px-8 pt-32 pb-12">

<div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-8">
          {/* Left Artist Menu */}
          <aside className="space-y-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-light">Artists</h2>
              {selectedArtist && (
                <button 
                  onClick={() => setSelectedArtist(null)}
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  View All
                </button>
              )}
            </div>
            <button
              onClick={() => setSelectedArtist(null)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                !selectedArtist
                  ? "bg-gray-100 text-black"
                  : "text-gray-600 hover:bg-gray-50 hover:text-black"
              }`}
            >
              All Artists
            </button>
              {artistsData.map((artist) => (
                <button
                  key={artist.name}
                  onClick={() => handleArtistSelect(artist)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedArtist?.name === artist.name
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
            {selectedArtist ? (
              /* Individual Artist View */
              <>
                {/* Artist Info */}
                <div className="text-center max-w-2xl mx-auto">
                  <div className="w-80 h-80 mx-auto mb-6 bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className={`w-full h-full object-cover ${
                        selectedArtist.name === "Anthony Haden-Guest" 
                          ? "object-left" 
                          : "object-center"
                      }`}
                      style={
                        selectedArtist.name === "Anthony Haden-Guest" 
                          ? { objectPosition: "25% center" } 
                          : {}
                      }
                    />
                  </div>
                  <h1 className="text-4xl font-extralight mb-4">{selectedArtist.name}</h1>
                  <p className="text-gray-700 font-light leading-relaxed">{selectedArtist.bio}</p>
                </div>

                {/* Selected Artwork Display */}
                {selectedArtwork && (
                  <div className="text-center">
                    <div className="max-w-sm mx-auto mb-4">
                      <img
                        src={selectedArtwork.image}
                        alt={selectedArtwork.title}
                        className="w-full aspect-[4/3] object-contain bg-gray-100 rounded-md"
                      />
                    </div>
                    <h3 className="text-xl font-light">{selectedArtwork.title}</h3>
                  </div>
                )}

                {/* Artwork Preview Icons */}
                <div className="flex justify-center gap-4 flex-wrap">
                  {selectedArtist.artworks.map((artwork) => (
                    <div key={artwork.id} className="relative">
                      <button
                        onClick={() => setSelectedArtwork(artwork)}
                        className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                          selectedArtwork?.id === artwork.id
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
              </>
            ) : (
              /* All Artists Overview */
              <>
                <div className="text-center">
                  <h1 className="text-4xl font-extralight mb-8">Our Artists</h1>
                  <p className="text-gray-600 font-light max-w-2xl mx-auto">
                    Discover the diverse collection of contemporary artists featured in our gallery. 
                    Click on any artist to explore their works and artistic journey.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {artistsData.map((artist) => (
                    <button
                      key={artist.name}
                      onClick={() => handleArtistSelect(artist)}
                      className="group text-center hover:bg-gray-50 p-6 rounded-lg transition-all duration-300"
                    >
                      <div className="w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-lg overflow-hidden">
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
                      <h3 className="text-xl font-light mb-2 group-hover:text-black transition-colors">{artist.name}</h3>
                      <p className="text-gray-600 text-sm font-light leading-relaxed line-clamp-3">
                        {artist.bio}
                      </p>
                      <div className="mt-4 text-xs text-gray-500">
                        {artist.artworks.length} work{artist.artworks.length !== 1 ? 's' : ''}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}
