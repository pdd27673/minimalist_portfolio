'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'interests', label: 'Interests' },
  { id: 'skills', label: 'Stack' },
  { id: 'writings', label: 'Writings' },
] as const

/**
 * A thin scroll-progress bar (all viewports) plus a scroll-spy dot rail on the
 * right edge (large screens only) that highlights the section currently in view.
 */
export function SectionNav() {
  const [active, setActive] = useState<string>('')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, doc.scrollTop / scrollable)) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  return (
    <>
      <div
        className="fixed left-0 top-0 z-50 h-0.5 bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
      <nav
        className="fixed left-[calc(50%+25rem)] top-8 z-40 hidden flex-col items-start gap-3 lg:flex"
        aria-label="Section navigation"
      >
        {SECTIONS.map((s) => {
          const isActive = active === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="group flex items-center justify-start gap-2"
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={cn(
                  'h-1.5 w-1.5 rounded-full border transition-all duration-200',
                  isActive
                    ? 'scale-125 border-accent bg-accent'
                    : 'border-muted-foreground/50 bg-transparent group-hover:border-accent'
                )}
              />
              <span
                className={cn(
                  'text-[10px] uppercase tracking-wider opacity-0 transition-opacity duration-200 group-hover:opacity-100',
                  isActive ? 'text-accent opacity-100' : 'text-muted-foreground'
                )}
              >
                {s.label}
              </span>
            </a>
          )
        })}
      </nav>
    </>
  )
}
