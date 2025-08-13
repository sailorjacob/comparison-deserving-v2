import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { FlashlightReveal } from "@/components/flashlight-reveal"

export default function AboutPage() {
  return (
    <main className="min-h-[60vh] container mx-auto px-6 md:px-8 py-12">
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
      <FlashlightReveal />
      <div className="fixed bottom-3 right-4 text-xs text-gray-500 font-light">Singapore</div>
    </main>
  )
}


