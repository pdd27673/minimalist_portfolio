import Link from 'next/link'

export default function InterestsPage() {
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
            <h2 className="text-lg font-medium mt-6 mb-3">Photography & Travel</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Photography is my way of capturing the world's stories one frame at a time. I'm often drawn to new places, cultures, and landscapes, and traveling fuels that curiosity. Through photography, I try to preserve small moments—fleeting expressions, vivid colors, and quiet corners—that might otherwise go unnoticed.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Formula 1</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Formula 1 combines speed, engineering brilliance, and razor-sharp strategy. I'm fascinated by how teams balance technical innovation with human skill and split-second decision-making. It's not just a race on Sunday; it's a complex ecosystem where aerodynamics, data analytics, and driver instinct all come together.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Socialism</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I'm interested in exploring socialist theory and its various interpretations—from democratic socialism to more radical approaches. The ideas around collective ownership, worker rights, and economic democracy resonate with me. I'm particularly drawn to understanding how these principles can be applied in modern contexts and what they mean for building more equitable societies.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Tennis</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Tennis combines physical endurance with mental strategy in a way that's uniquely challenging. I appreciate the individual nature of the sport—every point is a direct result of your decisions and execution. Whether watching professional matches or playing recreationally, I'm fascinated by the tactical depth, the psychological battles, and the technical precision required at every level.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Vinyls</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              There's something special about the ritual of playing vinyl records—the tactile experience of handling the record, placing it on the turntable, and hearing that warm, analog sound. I enjoy collecting records across genres, discovering new artists, and appreciating the artwork and packaging that comes with physical media. It's a slower, more intentional way to experience music that I find deeply satisfying.
            </p>

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
