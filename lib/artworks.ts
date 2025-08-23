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
    id: 35,
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ahg/AHG%201.heic",
    title: "Cartoon Drawing 1",
    artist: "Anthony Haden-Guest",
    artistName: "Anthony Haden-Guest",
    price: "",
    description: "A whimsical cartoon drawing on paper, showcasing the artist's distinctive illustrative style.",
    isSold: false,
    year: "2023",
    dimensions: "Drawing on paper",
  },
  {
    id: 36,
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ahg/AHG%202.heic",
    title: "Cartoon Drawing 2",
    artist: "Anthony Haden-Guest",
    artistName: "Anthony Haden-Guest",
    price: "",
    description: "Another charming cartoon drawing on paper, demonstrating the artist's creative versatility.",
    isSold: false,
    year: "2023",
    dimensions: "Drawing on paper",
  },
  {
    id: 37,
    image: "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ahg/AHG%203.heic",
    title: "Cartoon Drawing 3",
    artist: "Anthony Haden-Guest",
    artistName: "Anthony Haden-Guest",
    price: "",
    description: "A third delightful cartoon drawing on paper, highlighting the artist's unique artistic voice.",
    isSold: false,
    year: "2023",
    dimensions: "Drawing on paper",
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
  {
    id: 17,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Man%20Wrestles%20Ape.jpg",
    title: "Man Wrestles Ape Drawing",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A dynamic drawing exploring primal struggle and human nature.",
    isSold: false,
    year: "2023",
    dimensions: "Drawing on paper",
  },
  {
    id: 18,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Onion%20Knight.jpg",
    title: "Skull Knight / Onion Knight Drawing",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A detailed drawing blending medieval imagery with contemporary interpretation.",
    isSold: false,
    year: "2023",
    dimensions: "Drawing on paper",
  },
  {
    id: 19,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Tainnaky's%20Enduro%202022.jpg",
    title: "Tainaky's Enduro 2022",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "An energetic piece capturing the spirit of endurance and athletic determination.",
    isSold: false,
    year: "2022",
    dimensions: "Mixed media on canvas",
  },
  {
    id: 20,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Kids%202022.jpg",
    title: "Kids",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A heartwarming exploration of childhood innocence and playful energy.",
    isSold: false,
    year: "2022",
    dimensions: "Acrylic on canvas",
  },
  {
    id: 21,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Eros%20Of%20Time%202022.jpg",
    title: "Eros Of Time (Commission)",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A commissioned work exploring the intersection of love and temporality.",
    isSold: false,
    year: "2022",
    dimensions: "Oil on canvas",
  },
  {
    id: 22,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Shapes%20III.jpg",
    title: "Shapes III",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "Third in a series exploring geometric abstraction and form.",
    isSold: false,
    year: "2023",
    dimensions: "Acrylic on canvas",
  },
  {
    id: 23,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Shapes%20.jpg",
    title: "Shapes I",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "First in a series exploring geometric abstraction and pure form.",
    isSold: false,
    year: "2023",
    dimensions: "Acrylic on canvas",
  },
  {
    id: 24,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Shapes%20II.jpg",
    title: "Shapes II",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "Second in a series exploring geometric abstraction and color relationships.",
    isSold: false,
    year: "2023",
    dimensions: "Acrylic on canvas",
  },
  {
    id: 25,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Andromeda%20Master%20Study.jpg",
    title: "Andromeda Master Study",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A master study exploring classical themes through contemporary technique.",
    isSold: false,
    year: "2023",
    dimensions: "Oil on canvas",
  },
  {
    id: 26,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Sketchbook%20Scan.jpg",
    title: "Sketchbook Scan (Print)",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "A scan from a discarded sketchbook, now available as a limited print. Raw creative energy captured in its most honest form.",
    isSold: false,
    year: "2023",
    dimensions: "Digital print",
  },
  {
    id: 27,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/Sketchbook%20Scan%202.jpg",
    title: "Sketchbook Scan 2 (Print)",
    artist: "Jimmy Frezza",
    artistName: "Jimmy Frezza",
    price: "",
    description: "Second scan from the discarded sketchbook series, available as a limited print. Unfiltered artistic expression.",
    isSold: false,
    year: "2023",
    dimensions: "Digital print",
  },
  {
    id: 28,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/OG%201.png",
    title: "ORIGINAL PRINT",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "8.10",
    description: "Enhanced Matte Paper Framed Poster (in) (White / 14″×14″)",
    isSold: false,
    year: "2023",
    dimensions: "14″×14″",
  },
  {
    id: 29,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/SPACE%201.png",
    title: "SPACE 1",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "",
    description: "Enhanced Matte Paper Framed Poster (in) (White / 11×14″)",
    isSold: false,
    year: "2023",
    dimensions: "11×14″",
  },
  {
    id: 30,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/greenrevolver.png",
    title: "Green Revolver",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "",
    description: "Enhanced Matte Paper Framed Poster (in) (White / 8×10″)",
    isSold: false,
    year: "2023",
    dimensions: "8×10″",
  },
  {
    id: 31,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/morning%20star.png",
    title: "Morning Star",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "",
    description: "Enhanced Matte Paper Framed Poster (in) (White / 8×10″)",
    isSold: false,
    year: "2023",
    dimensions: "8×10″",
  },
  {
    id: 32,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/spaceii.png",
    title: "SPACE II",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "",
    description: "Enhanced Matte Paper Framed Poster (in) (White / 8×10″)",
    isSold: false,
    year: "2023",
    dimensions: "8×10″",
  },
  {
    id: 33,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/blaster.png",
    title: "Blaster",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "0.40",
    description: "Enhanced Matte Paper Framed Poster (in) (White / 8×10″)",
    isSold: false,
    year: "2023",
    dimensions: "8×10″",
  },
  {
    id: 34,
    image:
      "https://twejikjgxkzmphocbvpt.supabase.co/storage/v1/object/public/havensvgs/artists/ammo%20cat%20prints/HEART%202.jpg",
    title: "AMMO CAT X RARE.GLASS - 'HEART'",
    artist: "Ammo Cat",
    artistName: "Ammo Cat",
    price: "0.20",
    description: "Prism with transparent background, 25mm acrylic block, 6x6″ / 15x15cm",
    isSold: false,
    year: "2023",
    dimensions: "6×6″ / 15×15cm",
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
