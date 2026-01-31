import Link from 'next/link'

export default function ColophonPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 pt-8">
        <article className="space-y-8 py-12">
          <header className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight">
              Colophon
            </h1>
          </header>

          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              This is a static site, built with <strong>Next.js 16</strong> and deployed via <strong>Railway</strong>.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The design follows a <strong>minimalist</strong> aesthetic—clean typography, subtle borders, and a focus on content.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Tech Stack</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Next.js 16, React 19, TypeScript, Tailwind CSS v4, Railway
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Typography</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The site is set in <strong>Satoshi</strong>, a modern sans-serif typeface with geometric forms and excellent readability.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Inspiration</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The original minimalist design was inspired by <a href="https://markmcgranaghan.com/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-accent">Mark McGranaghan's website</a>. The redesign is inspired by <a href="https://praveenshinde.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-accent">Praveen's site</a>.
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
