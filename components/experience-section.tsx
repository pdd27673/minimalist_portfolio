'use client'

import { Card } from '@/components/ui/card'
import { getTechIcon } from '@/lib/tech-icons'
import { portfolioData } from '@/lib/data'
import { useMemo } from 'react'

export function ExperienceSection() {
  const experiences = portfolioData.experience

  return (
    <section className="space-y-4 py-8">
      <h2 className="text-lg font-medium tracking-tight">Experience</h2>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card 
            key={index} 
            className="border-border p-4 hover:border-accent/50 transition-all"
          >
            <div className="space-y-3">
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <h3 className="text-sm font-medium">{exp.company}</h3>
                  <span className="text-muted-foreground text-xs">|</span>
                  <span className="text-sm">{exp.role}</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {exp.location} | {exp.dateRange}
                </p>
              </div>

              <ul className="space-y-1.5">
                {exp.achievements.map((achievement, i) => {
                  return (
                    <li key={i} className="flex gap-2 leading-relaxed text-xs text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{achievement}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
