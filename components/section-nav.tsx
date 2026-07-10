'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
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
/** Gap kept between the rail and the viewport top once it pins on scroll. */
const PIN_GAP_REM = 2

export function SectionNav() {
  const [active, setActive] = useState<string>('')
  const [progress, setProgress] = useState(0)
  const [top, setTop] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, doc.scrollTop / scrollable)) : 0)

      // Line the rail up with the Experience heading, then let it pin near the
      // top as you scroll past it. Anchored to the <h2> (not the section box,
      // which has top padding) and measured from the DOM so it adapts to any
      // hero height / display size instead of a hardcoded offset.
      const rem = parseFloat(getComputedStyle(doc).fontSize) || 16
      const expHeading =
        document.querySelector('#experience h2') ?? document.getElementById('experience')
      if (expHeading) {
        setTop(Math.max(PIN_GAP_REM * rem, expHeading.getBoundingClientRect().top))
      }

      // Highlight the section currently in view. Pick the last heading that has
      // crossed a detection line near the top of the viewport; at the very
      // bottom force the final section, since short last sections (e.g.
      // Writings) never scroll far enough to reach that line on their own.
      if (doc.scrollTop + doc.clientHeight >= doc.scrollHeight - 2) {
        setActive(SECTIONS[SECTIONS.length - 1].id)
        return
      }
      const line = doc.clientHeight * 0.35
      let current = SECTIONS[0].id
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.getBoundingClientRect().top <= line) current = s.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (!mounted) return null

  // Rendered into <body> so it escapes the transformed `.page-enter` wrapper
  // (app/template.tsx): a transformed ancestor becomes the containing block for
  // fixed descendants, which would otherwise make these overlays scroll away
  // instead of staying pinned to the viewport.
  return createPortal(
    <>
      <div
        className="fixed left-0 top-0 z-50 h-0.5 bg-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden
      />
      <nav
        className="fixed left-[calc(50%+25rem)] z-40 hidden flex-col items-start gap-3 lg:flex"
        style={{ top: top ?? undefined }}
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
    </>,
    document.body
  )
}
