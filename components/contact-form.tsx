"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

// Random logo color utility (same as main theme)
const getRandomLogoColor = () => {
  const colors = [
    'bg-blue-500',
    'bg-red-500', 
    'bg-green-500',
    'bg-yellow-500'
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [buttonColor] = useState(() => getRandomLogoColor())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      formData.append('formType', 'general')
      
      const response = await fetch('https://formspree.io/f/mnnbqlqr', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        // Success - reset form and show message
        e.currentTarget.reset()
        alert("Message sent successfully! We'll get back to you within 24 hours.")
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      alert("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="formType" value="general" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            name="name"
            className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-20 ${buttonColor.replace('bg-', 'focus:border-')}`}
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200 focus:border-opacity-100 focus:ring-2 focus:ring-opacity-20 ${buttonColor.replace('bg-', 'focus:border-')}`}
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea
          name="message"
          rows={4}
          className={`w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 focus:outline-none transition-all duration-200 resize-none focus:border-opacity-100 focus:ring-2 focus:ring-opacity-20 ${buttonColor.replace('bg-', 'focus:border-')}`}
          placeholder="How can we help you? Tell us about your inquiry or questions..."
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className={`w-full text-white text-sm font-medium py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 disabled:transform-none disabled:shadow-lg ${buttonColor} hover:opacity-80`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Sending...</span>
          </div>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
