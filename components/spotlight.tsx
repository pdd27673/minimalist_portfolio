'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * A soft accent-tinted spotlight that tracks the cursor across the whole page.
 * Painted on a full-viewport fixed layer portaled to <body>, so it's never
 * clipped by any container. Inert on touch / reduced-motion.
 */
export function Spotlight() {
  const glowRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const onMove = (e: MouseEvent) => {
      // Viewport coordinates, since the glow layer is position: fixed.
      glow.style.setProperty('--x', `${e.clientX}px`)
      glow.style.setProperty('--y', `${e.clientY}px`)
      glow.style.opacity = '1'
    }
    const onLeave = () => {
      glow.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [mounted])

  return (
    <>
      {mounted &&
        createPortal(
          <div
            ref={glowRef}
            aria-hidden
            className="spotlight pointer-events-none fixed inset-0 -z-10"
          />,
          document.body
        )}
    </>
  )
}
