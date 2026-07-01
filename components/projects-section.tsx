'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, BookOpen } from 'lucide-react'
import { getTechIcon } from '@/lib/tech-icons'
import { portfolioData } from '@/lib/data'
import { ProjectCover } from '@/components/project-cover'

export function ProjectsSection() {
  const projects = portfolioData.projects
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section className="space-y-4 py-8">
      <h2 className="text-lg font-medium tracking-tight">Projects</h2>
      
      {featuredProject && (
        <div className="mb-4">
          <Card className="relative h-full overflow-hidden border-border p-0 transition-all hover:border-accent group">
            {featuredProject.url && (
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Visit ${featuredProject.title}`}
              />
            )}
            <div className="h-32 shrink-0 overflow-hidden border-b border-border transition-[height] duration-300 ease-out group-hover:h-20">
              <ProjectCover cover={featuredProject.cover} className="h-full" />
            </div>
            <div className="flex h-full flex-col gap-3 p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                    {featuredProject.title}
                  </h3>
                  <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-accent/10 text-accent border-accent/20 font-medium">
                    ⭐ Featured
                  </Badge>
                </div>
                <div className="relative z-20 flex gap-1.5">
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

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                <p className="overflow-hidden text-xs leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {featuredProject.description}
                </p>
              </div>

              {featuredProject.caseStudy && (
                <Link
                  href={featuredProject.caseStudy}
                  className="relative z-20 inline-flex w-fit items-center gap-1 text-xs font-medium text-accent hover:underline"
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
        {otherProjects.map((project, index) => {
          // Whole card links to the best available target; internal case-study
          // routes use Link, external url/github use a new-tab anchor.
          const internalHref = !project.url && project.caseStudy ? project.caseStudy : null
          const externalHref = project.url || (!project.caseStudy ? project.github : null) || null
          return (
          <Card
            key={index}
            className="relative h-full overflow-hidden border-border p-0 transition-all hover:border-accent group"
          >
            {internalHref ? (
              <Link
                href={internalHref}
                className="absolute inset-0 z-10"
                aria-label={`Open ${project.title}`}
              />
            ) : externalHref ? (
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Open ${project.title}`}
              />
            ) : null}
            <div className="h-24 shrink-0 overflow-hidden border-b border-border transition-[height] duration-300 ease-out group-hover:h-12">
              <ProjectCover cover={project.cover} className="h-full" />
            </div>
            <div className="flex h-full flex-col gap-2 p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="relative z-20 flex gap-1.5">
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

              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr]">
                <p className="overflow-hidden text-xs leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>

              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="relative z-20 inline-flex w-fit items-center gap-1 text-xs font-medium text-accent hover:underline"
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
          )
        })}
      </div>
    </section>
  )
}
