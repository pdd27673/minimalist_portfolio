'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in ms before the entrance transition starts (for staggering). */
  delay?: number
  /** Element to render as. Defaults to a div. */
  as?: ElementType
  id?: string
}

/**
 * Reveals its children with a subtle fade-and-rise the first time they scroll
 * into view. Falls back to fully visible immediately when the user prefers
 * reduced motion. Elements already in the viewport on load animate right away.
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div', id }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setShown(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={cn('reveal', shown && 'reveal-shown', className)}
    >
      {children}
    </Tag>
  )
}
