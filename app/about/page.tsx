import Link from "next/link"
import { ChevronLeft, Bitcoin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlashlightReveal } from "@/components/flashlight-reveal"

export default function AboutPage() {
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
            <Button asChild variant="ghost" className="text-gray-600 hover:text-black transition-all duration-300 font-light relative group px-0">
              <Link href="/artists">
                Artists
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="text-black border-b border-black font-light relative group px-0"
            >
              About
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
      <h1 className="text-4xl font-extralight mb-6">About</h1>
      <p className="text-gray-700 font-light leading-relaxed max-w-3xl">
        Comparison-Deserving is a curated fine art collection presented with a focus on clarity and restraint.
        All works shown are placeholders for private inventory. For acquisition inquiries, please contact us.
      </p>
      <div className="mt-12">
        <FlashlightReveal />
      </div>
        <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
      </main>
    </div>
  )
}


