"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form
      className="space-y-4"
      action="https://formspree.io/f/mnnbqlqr"
      method="POST"
    >
      <input type="hidden" name="formType" value="general" />
      <div>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:border-black focus:outline-none transition-colors"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          rows={3}
          className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:border-black focus:outline-none transition-colors resize-none"
          placeholder="How can we help you?"
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-black hover:bg-gray-800 text-white text-sm py-2.5 transition-colors" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
