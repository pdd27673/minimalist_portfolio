import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  /** Zero-padded section index, e.g. "01". Rendered in the accent color. */
  index?: string
  title: string
  /** Optional trailing element (e.g. a "View all →" link). */
  action?: ReactNode
  className?: string
}

export function SectionHeading({ index, title, action, className }: SectionHeadingProps) {
  return (
    <div className={cn('flex items-center justify-between gap-3', className)}>
      <h2 className="flex items-baseline gap-2 text-lg font-medium tracking-tight">
        {index && (
          <span className="font-mono text-xs font-normal tabular-nums text-accent">{index}</span>
        )}
        <span>{title}</span>
      </h2>
      {action}
    </div>
  )
}
