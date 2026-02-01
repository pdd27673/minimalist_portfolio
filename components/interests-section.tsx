'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { portfolioData } from '@/lib/data'
import * as LucideIcons from 'lucide-react'

export function InterestsSection() {
  const interests = portfolioData.interests

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{ className?: string }>
    return IconComponent || null
  }

  return (
    <section className="space-y-4 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium tracking-tight">Interests</h2>
        <Link 
          href="/interests" 
          className="text-xs text-muted-foreground hover:text-accent transition-colors"
        >
          View all →
        </Link>
      </div>
      
      <Link href="/interests" className="block">
        <Card className="border-border p-3 hover:border-accent/50 transition-all cursor-pointer">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 w-full">
            {interests.map((interest, index) => {
              const IconComponent = getIcon(interest.icon)
              return (
                <span 
                  key={index}
                  className="text-xs px-3 py-1.5 rounded-md bg-card border border-border text-muted-foreground flex items-center gap-1.5 justify-center text-center"
                >
                  {IconComponent && (
                    <IconComponent className="h-3 w-3 shrink-0" />
                  )}
                  <span className="truncate">{interest.title}</span>
                </span>
              )
            })}
          </div>
        </Card>
      </Link>
    </section>
  )
}
