import Link from 'next/link'
import { WriteupLede } from '@/components/writeup-lede'

export default function OnStartingOutPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 pt-8">
        <article className="space-y-8 py-12">
          <header className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight">
              On Starting Out, Learning the Flow, and the Kindness of Colleagues
            </h1>
            <time className="text-xs text-muted-foreground block">
              December 2024
            </time>
          </header>

          <div className="prose prose-invert max-w-none space-y-4">
            <WriteupLede>
              A short reflection on my first months as an engineer at Goldman Sachs — how patient
              colleagues, not textbooks, turned an intimidating start into real growth.
            </WriteupLede>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Not long ago, I was fresh out of college, stepping into a world I knew mostly from textbooks and late-night coding sessions. At <strong>Goldman Sachs</strong>, everything felt bigger: there were more stakeholders, more complex codebases, and a release process that involved branching, pull requests, and careful reviews—things I'd only read about before.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              In the early days, I sometimes felt out of my depth. Acronyms I didn't understand, deployment steps that felt intricate, and teammates who seemed fluent in a professional language I was just starting to learn. What surprised me most was <strong>everyone's patience</strong>. Senior engineers took time to explain branching strategies and walk me through my first pull requests. Teammates reassured me that questions and small mistakes were part of growing into the role.
            </p>

            <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground">
              "More important than the technical skills was the understanding of how to learn from others, how to ask questions, and how to integrate into a once-unfamiliar environment."
            </blockquote>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Over time, I picked up the rhythm of sprints, got comfortable with standups, and came to appreciate the subtlety of code review. Git flow became second nature, and releasing a new version turned from anxiety-inducing to a moment of accomplishment. But more important than the technical skills was the understanding of how to learn from others, how to ask questions, and how to integrate into a once-unfamiliar environment.
            </p>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Looking back, what stands out is not just the code I wrote or the tools I learned, but the <strong>people who helped me navigate the journey</strong>. Their guidance transformed an intimidating start into an experience of growth and camaraderie.
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
