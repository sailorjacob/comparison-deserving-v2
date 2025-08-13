import * as React from "react"

interface UseHideOnScrollOptions {
  threshold?: number
  topOffset?: number
}

// Returns true when the header should be hidden (scrolling down beyond topOffset),
// and false when it should be shown (scrolling up or near the top).
export function useHideOnScroll(options: UseHideOnScrollOptions = {}) {
  const { threshold = 8, topOffset = 24 } = options
  const [isHidden, setIsHidden] = React.useState(false)

  React.useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const update = () => {
      const currentY = window.scrollY

      if (currentY <= topOffset) {
        setIsHidden(false)
      } else if (currentY > lastScrollY + threshold) {
        setIsHidden(true)
      } else if (currentY < lastScrollY - threshold) {
        setIsHidden(false)
      }

      lastScrollY = currentY
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold, topOffset])

  return isHidden
}


