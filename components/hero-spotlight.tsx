'use client'

import { useEffect, useRef } from 'react'

/**
 * A soft accent-tinted spotlight that tracks the cursor across the hero.
 * Attaches to its parent element, so drop it in as the first child of a
 * `position: relative` container. Inert on touch / reduced-motion.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    const parent = el?.parentElement
    if (!el || !parent) return
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      el.style.setProperty('--x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--y', `${e.clientY - rect.top}px`)
      el.style.opacity = '1'
    }
    const onLeave = () => {
      el.style.opacity = '0'
    }

    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    return () => {
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <div ref={ref} aria-hidden className="hero-spotlight pointer-events-none absolute inset-0 -z-10" />
}
