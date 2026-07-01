'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { portfolioData } from '@/lib/data'
import { DownloadIcon, Github, Linkedin, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { BioText } from './bio-text'

interface GitHubCommit {
  sha: string
  fullSha: string
  message: string
  date: string
  repoName: string
  repoUrl: string
  commitUrl: string
}

function GitHubCarousel({ commits }: { commits: GitHubCommit[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || commits.length === 0) return

    const updateIndex = () => {
      const scrollLeft = scrollContainer.scrollLeft
      const cardWidth = scrollContainer.clientWidth
      const newIndex = Math.round(scrollLeft / cardWidth) % commits.length
      setCurrentIndex(newIndex)
    }

    scrollContainer.addEventListener('scroll', updateIndex)

    const interval = setInterval(() => {
      const cardWidth = scrollContainer.clientWidth
      const nextIndex = (currentIndex + 1) % commits.length
      scrollContainer.scrollTo({
        left: nextIndex * cardWidth,
        behavior: 'smooth'
      })
      setCurrentIndex(nextIndex)
    }, 3000) // Auto-rotate every 3 seconds

    return () => {
      clearInterval(interval)
      scrollContainer.removeEventListener('scroll', updateIndex)
    }
  }, [commits.length, currentIndex])

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {commits.map((commit, index) => (
          <Card
            key={`${commit.fullSha}-${index}`}
            className="border-border p-2 hover:border-accent/50 transition-all shrink-0 w-full snap-start"
          >
            <div className="flex items-center gap-2 min-w-0">
              <a
                href={commit.commitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium hover:text-accent transition-colors shrink-0"
                style={{ fontFamily: 'monospace' }}
                title={commit.fullSha}
              >
                {commit.sha}
              </a>
              <span className="text-[10px] text-muted-foreground shrink-0">•</span>
              <a
                href={commit.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium hover:text-accent transition-colors flex items-center gap-0.5 shrink-0"
              >
                <Github className="h-2.5 w-2.5 shrink-0" />
                <span className="truncate">{commit.repoName}</span>
              </a>
              <span className="text-[10px] text-muted-foreground shrink-0">•</span>
              <p className="text-xs text-muted-foreground truncate flex-1 min-w-0">{commit.message}</p>
              <span className="text-[10px] text-muted-foreground shrink-0 whitespace-nowrap">
                {new Date(commit.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          </Card>
        ))}
      </div>
      {/* Dots indicator */}
      {commits.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-2">
          {commits.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const cardWidth = scrollRef.current?.clientWidth || 0
                scrollRef.current?.scrollTo({
                  left: index * cardWidth,
                  behavior: 'smooth'
                })
                setCurrentIndex(index)
              }}
              className={`h-1 rounded-full transition-all ${currentIndex === index ? 'w-3 bg-foreground' : 'w-1 bg-muted-foreground'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function HeroSection() {
  const { personal, activities } = portfolioData
  const { theme, setTheme } = useTheme()
  const [githubCommits, setGithubCommits] = useState<GitHubCommit[]>([])
  const [loading, setLoading] = useState(true)
  const [bioExpanded, setBioExpanded] = useState(false)

  useEffect(() => {
    const fetchGitHubCommits = async () => {
      try {
        const response = await fetch('/api/github')
        if (response.ok) {
          const data = await response.json()
          setGithubCommits(data)
        }
      } catch (error) {
        console.error('Failed to fetch GitHub commits:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubCommits()
  }, [])

  return (
    <section className="space-y-6 py-8">
      {/* Name, Title, Location */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium tracking-tight">
            {personal.name}
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {personal.title}
        </p>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>{personal.location}</span>
          <span className="text-sm">🇬🇧</span>
        </div>
        {personal.status && (
          <div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span>{personal.status}</span>
          </div>
        )}
      </div>

      {/* Bio with inline tech icons */}
      <div className="space-y-2">
        {(bioExpanded ? personal.bio : personal.bio.slice(0, 1)).map((paragraph, i) => (
          <p key={i} className="text-sm leading-relaxed text-muted-foreground">
            <BioText text={paragraph} />
          </p>
        ))}
        <button
          onClick={() => setBioExpanded(!bioExpanded)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {bioExpanded ? '↑ less' : '+ more'}
        </button>
      </div>

      {/* Resume button and social links */}
      <div className="flex items-center gap-3">
        <Button asChild variant="default" size="sm" className="text-xs h-7 px-3 hover:bg-accent hover:text-accent-foreground">
          <a href={personal.resume} target="_blank" rel="noopener noreferrer">
            Resume
            <DownloadIcon className="ml-1.5 h-3 w-3" />
          </a>
        </Button>

        <a
          href={`mailto:${personal.email}`}
          className="text-muted-foreground hover:text-accent transition-colors"
          aria-label="Email"
        >
          <Mail className="h-4 w-4" />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </div>

      {/* Activity Section with Tabs */}
      <div>
        <Tabs defaultValue="github" className="w-full gap-0">
          <div className="border-b border-border mb-2">
            <TabsList className="h-auto p-0 bg-transparent gap-4">
              {activities.leetcode && activities.leetcode.length > 0 && (
                <TabsTrigger
                  value="leetcode"
                  className="text-xs px-0 py-1.5 h-auto bg-transparent border-0 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground text-muted-foreground hover:text-foreground transition-colors"
                >
                  Leetcode
                </TabsTrigger>
              )}
              <TabsTrigger
                value="github"
                className="text-xs px-0 py-1.5 h-auto bg-transparent border-0 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground data-[state=active]:text-foreground text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Github className="h-3 w-3" />
                <span>GitHub</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Array.isArray(activities.leetcode) && activities.leetcode.length > 0 && (
            <TabsContent value="leetcode" className="space-y-2">
              {activities.leetcode.map((problem: {
                id: string;
                title: string;
                number: string;
                tags: string[];
                date: string;
              }) => (
                <Card key={problem.id} className="border-border p-3 hover:border-accent/50 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-medium text-muted-foreground">{problem.number}</span>
                        <h3 className="text-sm font-medium">{problem.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5 items-center">
                        {problem.tags && problem.tags.map((tag: string, i: number) => (
                          <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0">
                            {tag}
                          </Badge>
                        ))}
                        <span className="text-[10px] text-muted-foreground">
                          {new Date(problem.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          )}

          <TabsContent value="github">
            {loading ? (
              <div className="p-2 text-center">
                <p className="text-xs text-muted-foreground">Loading...</p>
              </div>
            ) : githubCommits.length > 0 ? (
              <GitHubCarousel commits={githubCommits} />
            ) : (
              <div className="p-2 text-center">
                <p className="text-xs text-muted-foreground">No commits found</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
