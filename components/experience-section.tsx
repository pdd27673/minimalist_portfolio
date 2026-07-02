'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { portfolioData } from '@/lib/data'

export function ExperienceSection() {
  const experiences = portfolioData.experience

  return (
    <Reveal as="section" id="experience" className="scroll-mt-24 space-y-4 py-8">
      <SectionHeading index="01" title="Experience" />
      <Accordion type="multiple" className="space-y-3">
        {experiences.map((exp, index) => (
          <AccordionItem
            key={index}
            value={`exp-${index}`}
            className="border-0"
          >
            <Card className="border-border hover:border-accent/50 transition-all overflow-hidden">
              <AccordionTrigger className="px-4 py-3 text-left hover:no-underline hover:bg-transparent w-full">
                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-sm font-medium">{exp.company}</span>
                    <span className="text-muted-foreground text-xs">|</span>
                    <span className="text-sm">{exp.role}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {exp.location} · {exp.dateRange}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0">
                <ul className="space-y-1.5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed text-xs text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  )
}
