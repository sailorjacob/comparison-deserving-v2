"use client"

import { useEffect } from "react"

export function ImageProtection() {
  useEffect(() => {
    // Disable right-click context menu on images
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Disable drag start on images
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
        return false
      }
    }

    // Disable keyboard shortcuts that might save images
    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S, Ctrl+A on images
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'a')) {
        const target = e.target as HTMLElement
        if (target.tagName === 'IMG' || target.closest('img')) {
          e.preventDefault()
          return false
        }
      }
    }

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('dragstart', handleDragStart)
    document.addEventListener('keydown', handleKeyDown)

    // Disable image selection on touch devices
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'IMG') {
        e.preventDefault()
      }
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: false })

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('dragstart', handleDragStart)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('touchstart', handleTouchStart)
    }
  }, [])

  return null // This component doesn't render anything
}
