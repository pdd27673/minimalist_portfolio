import { type ReactNode } from 'react'

/**
 * A short "here's the payoff" callout for the top of a writeup, so skimmers get
 * the result before the prose.
 */
export function WriteupLede({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-accent/20 bg-accent/5 p-4">
      <p className="text-sm leading-relaxed text-foreground">
        <span className="mr-2 align-middle font-mono text-[10px] font-medium uppercase tracking-wider text-accent">
          TL;DR
        </span>
        {children}
      </p>
    </div>
  )
}
