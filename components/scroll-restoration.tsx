'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function ScrollRestoration() {
  const pathname = usePathname()
  const isRestoringRef = useRef(false)

  useEffect(() => {
    // Save scroll position before navigation
    const saveScrollPosition = () => {
      if (!isRestoringRef.current) {
        sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString())
      }
    }

    // Restore scroll position after navigation
    const restoreScrollPosition = () => {
      const savedPosition = sessionStorage.getItem(`scroll-${pathname}`)
      if (savedPosition !== null) {
        isRestoringRef.current = true
        // Use multiple attempts to ensure scroll happens after Next.js finishes
        const attemptRestore = (attempts = 0) => {
          if (attempts > 10) {
            isRestoringRef.current = false
            return
          }
          
          requestAnimationFrame(() => {
            window.scrollTo(0, parseInt(savedPosition, 10))
            
            // Verify scroll happened, retry if needed
            if (Math.abs(window.scrollY - parseInt(savedPosition, 10)) > 10 && attempts < 10) {
              setTimeout(() => attemptRestore(attempts + 1), 50)
            } else {
              isRestoringRef.current = false
            }
          })
        }
        
        // Delay to let Next.js finish its scroll restoration
        setTimeout(() => attemptRestore(), 100)
      }
    }

    // Restore scroll position when pathname changes
    restoreScrollPosition()

    // Save scroll position on scroll (debounced)
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      if (!isRestoringRef.current) {
        clearTimeout(scrollTimeout)
        scrollTimeout = setTimeout(() => {
          saveScrollPosition()
        }, 150)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Save on beforeunload
    window.addEventListener('beforeunload', saveScrollPosition)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', saveScrollPosition)
      clearTimeout(scrollTimeout)
    }
  }, [pathname])

  return null
}
