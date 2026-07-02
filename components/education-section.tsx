'use client'

import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { portfolioData } from '@/lib/data'

export function EducationSection() {
  const education = portfolioData.education

  return (
    <Reveal as="section" id="education" className="scroll-mt-24 space-y-4 py-8">
      <SectionHeading index="03" title="Education" />

      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card 
            key={index} 
            className="border-border p-4 hover:border-accent/50 transition-all"
          >
            <div className="space-y-3">
              <div className="space-y-0.5">
                <div className="flex flex-wrap items-baseline gap-1.5">
                  <h3 className="text-sm font-medium">{edu.institution}</h3>
                  <span className="text-muted-foreground text-xs">|</span>
                  <span className="text-sm">{edu.degree}</span>
                  {edu.field && (
                    <>
                      <span className="text-muted-foreground text-xs">|</span>
                      <span className="text-sm">{edu.field}</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  {edu.location} | {edu.dateRange}
                </p>
              </div>

              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="space-y-1.5">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed text-xs text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Reveal>
  )
}
