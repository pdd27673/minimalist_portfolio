'use client'

import { type ReactNode } from 'react'

/**
 * Re-mounts on every route change, giving each page a gentle enter transition.
 * The animation is disabled under prefers-reduced-motion (see globals.css).
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>
}
