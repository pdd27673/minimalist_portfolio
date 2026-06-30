'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, BookOpen } from 'lucide-react'
import { getTechIcon } from '@/lib/tech-icons'
import { portfolioData } from '@/lib/data'

export function ProjectsSection() {
  const projects = portfolioData.projects
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="space-y-4 py-8">
      <h2 className="text-lg font-medium tracking-tight">Projects</h2>
      
      {featuredProject && (
        <div className="mb-4">
          <Card className="h-full border-border p-4 transition-all hover:border-accent group">
            <div className="flex h-full flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                    {featuredProject.title}
                  </h3>
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent border-accent/20 font-medium">
                    ⭐ Featured
                  </Badge>
                </div>
                <div className="flex gap-1.5">
                  {featuredProject.url && (
                    <a
                      href={featuredProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {featuredProject.github && featuredProject.github !== 'TBD' && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-xs leading-relaxed text-muted-foreground">
                {featuredProject.description}
              </p>

              {featuredProject.caseStudy && (
                <Link
                  href={featuredProject.caseStudy}
                  className="inline-flex w-fit items-center gap-1 text-xs font-medium text-accent hover:underline"
                >
                  <BookOpen className="h-3 w-3" />
                  Read the writeup
                  <span aria-hidden>→</span>
                </Link>
              )}

              <div className="mt-auto flex flex-wrap gap-1.5">
                {featuredProject.technologies.map((tech, i) => {
                  const Icon = getTechIcon(tech)
                  return (
                    <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 flex items-center gap-1">
                      {Icon && <Icon className="h-2.5 w-2.5" />}
                      <span>{tech}</span>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </Card>
        </div>
      )}
      
      <div className="grid gap-3 sm:grid-cols-2">
        {otherProjects.map((project, index) => (
          <Card 
            key={index}
            className="h-full border-border p-4 transition-all hover:border-accent group"
          >
            <div className="flex h-full flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-1.5">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="inline-flex w-fit items-center gap-1 text-xs font-medium text-accent hover:underline"
                >
                  <BookOpen className="h-3 w-3" />
                  Read the writeup
                  <span aria-hidden>→</span>
                </Link>
              )}

              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.technologies.map((tech, i) => {
                  const Icon = getTechIcon(tech)
                  return (
                    <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 flex items-center gap-1">
                      {Icon && <Icon className="h-2.5 w-2.5" />}
                      <span>{tech}</span>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
