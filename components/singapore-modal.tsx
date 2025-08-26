"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"

export function SingaporeModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-xs text-gray-500 font-light hover:text-gray-700 transition-colors"
      >
        Singapore
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false)
            }
          }}
        >
          <div className="bg-white w-full max-w-md rounded-lg shadow-lg relative overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-light text-black">Contact Us</h2>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-black h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Content */}
            <div className="px-6 py-6">
              <p className="text-sm text-gray-600 mb-6 text-center">
                Our gallery is based in Singapore with remote capabilities worldwide. Send us a message and we'll get back to you.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
