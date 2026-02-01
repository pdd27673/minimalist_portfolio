import Link from 'next/link'
import { portfolioData } from '@/lib/data'
import * as LucideIcons from 'lucide-react'

export default function InterestsPage() {
  const interests = portfolioData.interests

  const getIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName] as React.ComponentType<{ className?: string }>
    return IconComponent || null
  }

  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 pt-8">
        <article className="space-y-8 py-12">
          <header className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight">
              Interests
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground">
              These are a few areas I've been thinking about and exploring.
            </p>
          </header>

          <div className="prose prose-invert max-w-none space-y-4">
            {interests.map((interest, index) => {
              const IconComponent = getIcon(interest.icon)
              return (
                <div key={index}>
                  <h2 className="text-lg font-medium mt-6 mb-3 flex items-center gap-2">
                    {IconComponent && (
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{interest.title}</span>
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              )
            })}

            <p className="text-sm leading-relaxed text-muted-foreground mt-6">
              If you'd like to discuss any of these interests, or think I might be able to help in some way, please reach out! I'm always open to connecting, exchanging ideas, and learning from others who share these passions. You can find me on <a href="https://twitter.com/pauldavid__d" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-accent">Twitter</a>.
            </p>
          </div>

          <nav className="pt-8 border-t border-border">
            <Link href="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              ← Back to home
            </Link>
          </nav>
        </article>
      </main>
    </div>
  )
}
