import Link from 'next/link'
import { WriteupLede } from '@/components/writeup-lede'

export default function BuildingReactTeamsAppPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 pt-8">
        <article className="space-y-8 py-12">
          <header className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight">
              Building a React Microsoft Teams App: What We Learned
            </h1>
            <time className="text-xs text-muted-foreground block">
              January 2026
            </time>
          </header>

          <div className="prose prose-invert max-w-none space-y-4">
            <WriteupLede>
              Months of building a production React app inside Microsoft Teams: taming Graph API rate
              limits with an SQS queue (error rate 15% → under 0.5%), surviving desktop-vs-mobile
              deep-link chaos with platform-specific links, and halving mobile load time by cutting the
              bundle from 850&nbsp;KB to 320&nbsp;KB.
            </WriteupLede>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Developing a production‑ready Microsoft Teams app feels familiar at first—it's still web development—but the deeper you go, the more quirks you uncover. Over several months of building a React‑based Teams application with notification systems and deep linking, we ran into architectural trade‑offs, platform limitations, and behavior differences that shaped almost every design decision. Here's what stood out along the way.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Working with the Microsoft Graph API</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The Graph API is the foundation of any serious Teams integration, but it's both powerful and demanding. Our project relied on activity feed notifications and deep links, which meant dealing with permission scopes, bulk operations, and keeping behavior consistent across clients.
            </p>

            <h3 className="text-base font-medium mt-4 mb-2">Permissions and Admin Consent</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Graph permissions work at two levels: delegated (acting as the user) and application (acting as the app itself). For automated notifications, you need the latter—but that requires admin approval, often coordinated with enterprise IT teams.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We learned to be conservative with permission requests. Asking for the smallest possible scope early on avoids painful re‑approval cycles later. For example, we found TeamsActivity.Send indispensable for our notification flow.
            </p>

            <h3 className="text-base font-medium mt-4 mb-2">Handling Bulk Notifications</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              At scale, the Graph API's rate limits can hit hard. Our initial approach sent notifications sequentially and quickly broke under load.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The fix was an AWS SQS‑based queuing system with exponential backoff and Dead Letter Queues for persistent failures. This setup cut our error rate from about 15% to under 0.5% during heavy usage. The main takeaway: batch smartly, respect rate limits, and plan for retries.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Deep Linking: Desktop vs. Mobile</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Deep linking looked simple on paper but turned into one of our biggest surprises. On desktop, links behaved predictably, opening the right tab or entity every time. On mobile? Not so much.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We ran into issues like links losing context, users being asked to re‑authenticate, and entire tab types not working. Our fix was platform‑specific link generation—different parameters for mobile and desktop—and web fallbacks for when things broke. Even then, mobile users were roughly three times more likely to see failures.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Optimizing Activity Feed Notifications</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Notification payloads and timing needed more care than expected. We ran into rendering quirks—like mobile limiting preview text to 150 characters and desktop to 200—and inconsistent handling of nested JSON. Pre‑rendering text and hosting icons publicly solved many of those issues.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We also learned that speed isn't just about delivery time—it's about perceived responsiveness. Even though Graph sometimes took 10–30 seconds to deliver notifications, we immediately showed in‑app feedback so users felt something had happened right away.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">React Architecture for Teams</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We wrapped the Teams SDK in a React context so that Teams features were available anywhere in our component tree. This setup made local development easier and kept SDK logic isolated from UI concerns.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For authentication, we combined Teams SSO with OAuth 2.0 and cached tokens to minimize re‑auth requests. Our system first tried to refresh tokens silently and only prompted the user when necessary.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Handling state across multiple tabs was tricky. Redux felt heavy, and context alone didn't sync tabs. We ended up using a lightweight event bus with localStorage events to keep everything consistent.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Boosting Mobile Performance</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Teams mobile runs in a WebView—it's slower than a browser. Our early builds were too large and sluggish. After aggressive code splitting and lazy loading, we shrunk the initial bundle from 850 KB to 320 KB, cutting load times from over four seconds to under two on 3G.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              On the visuals side, we switched to WebP images with JPEG fallbacks, used responsive srcset images, and fixed memory leaks by standardizing cleanup patterns in every component.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Error Handling and Monitoring</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Working with the Graph API means handling a range of failure modes gracefully. We built a wrapper to classify and respond to errors: backoff for 429 rate limits, re‑auth for 401, admin guidance for 403, and circuit breakers for 500+.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We also instrumented everything with Application Insights—tracking delivery success rates, deep link failures, latency, and usage. This monitoring frequently caught issues long before users noticed them.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">What It All Boils Down To</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              If you're building for Microsoft Teams, a few lessons apply broadly:
            </p>
            <ul className="text-sm leading-relaxed text-muted-foreground space-y-2 list-disc list-inside">
              <li>Design around Graph API limits from day one—batch wisely and handle retries.</li>
              <li>Expect differences between desktop and mobile, and test both thoroughly.</li>
              <li>Deep linking can fail; always provide fallback navigation.</li>
              <li>Use React contexts to abstract the Teams SDK cleanly.</li>
              <li>Optimize aggressively for mobile—it runs slower than you think.</li>
              <li>Invest early in telemetry; it pays off when diagnosing real‑world issues.</li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
              Building for Teams offers incredible enterprise reach, but only if you're ready for its quirks. A thoughtful architecture, resilient error handling, and strong monitoring turn frustration into reliability—and reliability is what users remember.
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
