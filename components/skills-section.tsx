'use client'

import { useEffect, useRef } from 'react'
import { getTechIcon } from '@/lib/tech-icons'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { portfolioData } from '@/lib/data'

export function SkillsSection() {
  const skills = portfolioData.skills
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollAmount += scrollSpeed
      scrollContainer.scrollLeft = scrollAmount

      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0
      }
    }

    const interval = setInterval(scroll, 16) // ~60fps

    return () => clearInterval(interval)
  }, [])

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills]

  return (
    <Reveal as="section" id="skills" className="scroll-mt-24 space-y-4 overflow-hidden py-8">
      <SectionHeading index="05" title="Stack" />
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedSkills.map((skill, index) => {
            const Icon = getTechIcon(skill)
            return (
              <div
                key={`${skill}-${index}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border shrink-0 whitespace-nowrap hover:border-accent transition-colors"
              >
                {Icon && <Icon className="h-3 w-3" />}
                <span className="text-xs font-medium">{skill}</span>
              </div>
            )
          })}
        </div>
      </div>
    </Reveal>
  )
}
