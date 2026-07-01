'use client'

import { Check, Clock, MapPin, Moon } from 'lucide-react'

// Generated (no-asset) cover art per project. Each treatment is themed with the
// site's CSS variables (--accent, --card, --secondary, --border, --foreground,
// --muted-foreground) so it tracks light/dark automatically.

const WRAP = 'relative w-full overflow-hidden'

// The archive's own hero palette, pulled live from adocc.pages.dev.
const WADA = [
  '#d96629', '#0093a5', '#f99d1b', '#12354e',
  '#bb7125', '#ffefae', '#437742', '#501345',
]

function TimeForTennisCover({ className }: { className: string }) {
  // Mirrors the live site's hero (faint grid + "Monitoring every 10 minutes" pill
  // + wordmark), recolored from the site's green to the portfolio's red accent.
  return (
    <div className={`${WRAP} ${className} bg-gradient-to-br from-secondary/60 to-card`}>
      <svg
        viewBox="0 0 300 120"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-muted-foreground"
        aria-hidden
      >
        <g stroke="currentColor" strokeWidth="1" opacity="0.18">
          {[38, 76, 114, 152, 190, 228, 266].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="120" />
          ))}
          {[30, 60, 90].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="300" y2={y} />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-medium text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Monitoring every 10 minutes
        </span>
        <span className="text-base font-semibold tracking-tight text-foreground">
          Time for <span className="text-accent">Tennis</span>
        </span>
      </div>
    </div>
  )
}

function MidnightBookerCover({ className }: { className: string }) {
  // Nightly flow: 10PM (moon) → 00:00 (clock) → booked (check, in accent).
  const node = 'flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card'
  const line = 'h-px w-4 bg-border'
  return (
    <div className={`${WRAP} ${className} bg-gradient-to-br from-secondary/60 to-card`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <div className="flex items-center gap-2">
          <span className={node}>
            <Moon className="h-3.5 w-3.5 text-muted-foreground" />
          </span>
          <span className={line} />
          <span className={node}>
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
          </span>
          <span className={line} />
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent">
            <Check className="h-3.5 w-3.5 text-accent-foreground" />
          </span>
        </div>
        <span className="text-[8px] font-medium uppercase leading-none tracking-wider text-muted-foreground">
          10PM · 00:00 · booked
        </span>
      </div>
    </div>
  )
}

function TerraCover({ className }: { className: string }) {
  // Property-marketplace motif: a stylized street map with a pulsing location ping.
  return (
    <div className={`${WRAP} ${className} bg-gradient-to-br from-secondary/60 to-card`}>
      <svg
        viewBox="0 0 300 120"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-muted-foreground"
        aria-hidden
      >
        {/* streets */}
        <g stroke="currentColor" fill="none" opacity="0.22">
          <path d="M-10,82 L110,46 L320,74" strokeWidth="6" />
          <path d="M42,-10 L58,130" strokeWidth="5" />
          <path d="M214,-10 L232,130" strokeWidth="5" />
          <path d="M-10,26 L320,18" strokeWidth="4" />
        </g>
        {/* blocks */}
        <g fill="currentColor" opacity="0.08">
          <rect x="72" y="52" width="58" height="28" />
          <rect x="140" y="58" width="52" height="34" />
          <rect x="244" y="34" width="46" height="40" />
        </g>
      </svg>
      {/* location ping */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-accent/20" />
        <MapPin className="relative h-6 w-6 fill-accent text-accent" strokeWidth={1.5} />
      </div>
      <span className="absolute bottom-2 right-3 rounded-sm border border-border bg-card px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
        FR · EN
      </span>
    </div>
  )
}

function WadaCover({ className }: { className: string }) {
  return (
    <div className={`${WRAP} ${className} flex`}>
      {WADA.map((c) => (
        <div key={c} style={{ backgroundColor: c }} className="flex-1" />
      ))}
    </div>
  )
}

function XgridzCover({ className }: { className: string }) {
  // Assessment-grid motif: a 5×3 grid of square cells, a few lit in accent.
  const cols = 5
  const rows = 3
  const size = 18
  const gap = 8
  const gridW = cols * size + (cols - 1) * gap
  const gridH = rows * size + (rows - 1) * gap
  const x0 = (300 - gridW) / 2
  const y0 = (120 - gridH) / 2
  const lit = new Set([2, 6, 11])
  return (
    <div className={`${WRAP} ${className} bg-gradient-to-br from-secondary/60 to-card`}>
      <svg viewBox="0 0 300 120" className="absolute inset-0 h-full w-full" aria-hidden>
        {Array.from({ length: cols * rows }).map((_, i) => {
          const cx = x0 + (i % cols) * (size + gap)
          const cy = y0 + Math.floor(i / cols) * (size + gap)
          const on = lit.has(i)
          return (
            <rect
              key={i}
              x={cx}
              y={cy}
              width={size}
              height={size}
              rx={3}
              fill={on ? 'var(--accent, #ee2a35)' : 'var(--card, #1c1c1c)'}
              stroke={on ? 'none' : 'var(--muted-foreground, #888)'}
              strokeWidth="1"
              opacity={on ? 1 : 0.5}
            />
          )
        })}
      </svg>
    </div>
  )
}

export function ProjectCover({
  cover,
  className = 'h-24 border-b border-border',
}: {
  cover?: string
  className?: string
}) {
  switch (cover) {
    case 'time-for-tennis':
      return <TimeForTennisCover className={className} />
    case 'midnight-booker':
      return <MidnightBookerCover className={className} />
    case 'terra':
      return <TerraCover className={className} />
    case 'wada':
      return <WadaCover className={className} />
    case 'xgridz':
      return <XgridzCover className={className} />
    default:
      return null
  }
}
