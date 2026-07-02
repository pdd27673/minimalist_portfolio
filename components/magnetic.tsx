'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MagneticProps {
  children: ReactNode
  /** How strongly the element follows the cursor. 0.3 is subtle. */
  strength?: number
  className?: string
}

/**
 * Nudges its child toward the cursor on hover for a springy, tactile feel.
 * No-ops on touch devices and when reduced motion is requested.
 */
export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const shouldSkip = () =>
    typeof window === 'undefined' ||
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el || shouldSkip()) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength
    el.style.transform = `translate(${x}px, ${y}px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={cn('inline-block transition-transform duration-200 ease-out will-change-transform', className)}
    >
      {children}
    </span>
  )
}
