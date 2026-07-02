'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { portfolioData } from '@/lib/data'

export function WritingsSection() {
  const writings = portfolioData.writings

  return (
    <Reveal as="section" id="writings" className="scroll-mt-24 space-y-4 py-8">
      <SectionHeading index="06" title="Writings" />

      <div className="space-y-0 divide-y divide-border">
        {writings.map((writing, index) => (
          <Link
            key={index}
            href={writing.url}
            className="group block py-3 first:pt-0 last:pb-0 hover:text-accent transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-0.5">
                <h3 className="text-sm font-medium leading-relaxed">
                  {writing.title}
                </h3>
                <time className="text-xs text-muted-foreground">
                  {writing.date}
                </time>
              </div>
              {writing.isLatest && (
                <Badge variant="secondary" className="shrink-0 text-[10px] px-2 py-0.5 bg-accent/10 text-accent border-accent/20 font-medium">
                  ✨ latest
                </Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
    </Reveal>
  )
}
