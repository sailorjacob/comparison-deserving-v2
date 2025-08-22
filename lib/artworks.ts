// Shared artwork data
export interface Artwork {
  id: number
  image: string
  images?: string[] // Additional images for gallery view
  title: string
  artist: string
  artistName: string
  medium?: string
  price: string
  description: string
  isSold?: boolean
  isPlaceholder?: boolean
  year?: string
  dimensions?: string
}

export const baseArtworks: Artwork[] = [
  {
    id: 1,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/images/IMG_549509AE11D4-1-removebg-preview%20(1).png",
    title: "Backyard Blue",
    artist: "Jimmy Frezza, 2022",
    artistName: "Jimmy Frezza",
    medium: "Oil, acrylic, and found object on canvas",
    price: "",
    description: "A vibrant exploration of mixed media combining traditional painting techniques with found objects.",
    year: "2022",
    dimensions: "24 x 36 inches",
  },
  {
    id: 4,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie1.png",
    title: "Storm",
    artist: "Allie, 2021",
    artistName: "Allie",
    price: "",
    description: "A powerful depiction of nature's raw energy and emotional intensity.",
    isSold: false,
    year: "2021",
    dimensions: "20 x 24 inches",
  },
  {
    id: 5,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie2.png",
    title: "Sisters",
    artist: "Allie, 2022",
    artistName: "Allie",
    price: "",
    description: "An intimate exploration of familial bonds and shared experiences.",
    isSold: false,
    year: "2022",
    dimensions: "18 x 24 inches",
  },
  {
    id: 6,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie3.png",
    title: "Waiting",
    artist: "Allie, 2023",
    artistName: "Allie",
    price: "",
    description: "A contemplative piece capturing moments of anticipation and stillness.",
    isSold: false,
    year: "2023",
    dimensions: "16 x 20 inches",
  },
  {
    id: 7,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Allie4.png",
    title: "Olive",
    artist: "Allie",
    artistName: "Allie",
    price: "",
    description: "A subtle study in color and form, inspired by Mediterranean landscapes.",
    isSold: false,
    year: "2023",
    dimensions: "12 x 16 inches",
  },
  {
    id: 9,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/rare%20glass%20x%20ammo%20cat.jpg",
    title: "Ammo Cat x rare.glass",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "0.20",
    description: "A bold collaborative piece pushing the boundaries of traditional art forms.",
    isSold: false,
    year: "2023",
    dimensions: "Digital artwork",
  },
  {
    id: 10,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/rare%20glass%20x%20ammocat%202.jpg",
    title: "Ammo Cat x rare.glass 2",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "0.20",
    description: "The second collaboration exploring digital art's potential in contemporary gallery spaces.",
    isSold: false,
    year: "2023",
    dimensions: "Digital artwork",
  },
  {
    id: 11,
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/AHG22.png",
    title: "Cartoon (2023)",
    artist: "Anthony Haden-Guest",
    artistName: "Anthony Haden-Guest",
    price: "0.10",
    description: "A witty commentary on contemporary culture through the lens of cartoon aesthetics.",
    isSold: false,
    year: "2023",
    dimensions: "22 x 30 inches",
  },
  {
    id: 16,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/carcinogenesis.jpg",
    title: "Carcinogenesis",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A powerful exploration of transformation and cellular metamorphosis.",
    isSold: false,
    year: "2023",
    dimensions: "28 x 36 inches",
  },
  {
    id: 12,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/jimmy%20frezza%20suit.png",
    title: "Suit",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A striking exploration of formal attire as both armor and constraint in modern society.",
    isSold: false,
    year: "2023",
    dimensions: "30 x 40 inches",
  },
  {
    id: 13,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/MotoFull.jpg",
    images: [
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/MotoFull.jpg",
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/jimmy%20moto.jpeg"
    ],
    title: "Moto",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "Dynamic energy captured through mechanical forms and movement.",
    isSold: false,
    year: "2023",
    dimensions: "24 x 32 inches",
  },
  {
    id: 14,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/Jimmy%20Camera.jpeg",
    title: "Jimmy Camera",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A meta-artistic reflection on the tools of creation and documentation.",
    isSold: false,
    year: "2023",
    dimensions: "20 x 24 inches",
  },
  {
    id: 15,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/jimmy%20black%20hole.png",
    title: "Black Hole",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "An abstract meditation on cosmic forces and the unknown depths of space.",
    isSold: false,
    year: "2023",
    dimensions: "36 x 48 inches",
  },
]

// Enrich artworks with minimal metadata for filtering
export const artworks: Artwork[] = baseArtworks.map((artwork, index) => ({
  ...artwork,
  artistName: artwork.artistName,
  isSold: artwork.isSold ?? false,
}))

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id)
}

// Artist profiles with images
export interface Artist {
  name: string
  bio: string
  image: string
  artworks: Artwork[]
}

export const getArtistProfiles = (): Artist[] => [
  {
    name: "Jimmy Frezza",
    bio: "Contemporary artist known for mixed media works that blend found objects with traditional painting techniques.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/JimmyFrezza.jpg",
    artworks: artworks.filter(a => a.artistName === "Jimmy Frezza")
  },
  {
    name: "Allie",
    bio: "Emerging artist exploring themes of nature, emotion, and human connection through vibrant imagery.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Allie.jpg",
    artworks: artworks.filter(a => a.artistName === "Allie")
  },
  {
    name: "Ammo Cat",
    bio: "Digital and mixed media artist creating bold collaborative works that challenge traditional art boundaries.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammocat.JPG",
    artworks: artworks.filter(a => a.artistName === "Ammo Cat")
  },
  {
    name: "Anthony Haden-Guest",
    bio: "Renowned artist and cultural commentator whose work spans multiple decades and media.",
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/ANTHONY%20HADEN%20GUEST%20-%20JACOB.jpg",
    artworks: artworks.filter(a => a.artistName === "Anthony Haden-Guest")
  }
]
