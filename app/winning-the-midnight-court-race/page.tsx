import Link from 'next/link'
import { BookerArchitectureDiagram } from '@/components/booker-architecture-diagram'

export default function WinningTheMidnightCourtRacePage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 pt-8">
        <article className="space-y-8 py-12">
          <header className="space-y-4">
            <h1 className="text-2xl font-medium tracking-tight">
              Winning the Midnight Court Race
            </h1>
            <time className="text-xs text-muted-foreground block">
              June 2026
            </time>
          </header>

          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              London's public tennis courts release their best slots at midnight, seven days ahead. The contested ones — a 7&nbsp;PM weeknight at a popular park — are gone within seconds. My other project, <a href="https://timefor10s.com" className="text-foreground underline underline-offset-2">Time for Tennis</a>, tells you the moment a slot appears. But knowing isn't booking: you still had to be awake at 00:00, fast fingers ready. So I built the other half — a bot that runs the midnight race for me, autonomously, and lets me shape the night from my phone before I go to sleep.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              It sounds like a simple form-filler. It isn't. The interesting parts are all about what happens under load, at exactly midnight, when the booking server is at its slowest and a slot is won or lost in the gap between two HTTP requests.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">The whole night, end to end</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Here's the full flow — from the approval card at 10&nbsp;PM to a booked court (or a graceful fail) a few hundred milliseconds after midnight.
            </p>

            <BookerArchitectureDiagram />

            <h2 className="text-lg font-medium mt-6 mb-3">The non-obvious part: what actually holds a slot</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The first thing I got wrong — and the lesson I'd keep from the whole project — is that the UI lies about when you've secured something. Adding a court to the basket logs a cheerful <code>Secured: &lt;courtId&gt;</code>, but it holds nothing. The slot is still free for anyone else to grab and pay for.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The slot is only locked when a call to <code>pay_init</code> returns a real Stripe <em>PaymentIntent</em> — and then only for about fifteen minutes. No PaymentIntent, no hold. Which means the entire window from "add to basket" to a successful <code>pay_init</code> is an unprotected race, and any latency there directly loses contested slots. Trust the payment intent, not the cart — the rest of the design follows from taking that seriously.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Failing fast under load</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              At midnight the server crawls — page loads that take 200&nbsp;ms at noon take 13–23 seconds under release-time load. My first version re-scraped the booking page on every retry to "check" availability, burning two minutes across a few rounds and losing the slot anyway. The fix was to stop asking the page questions and start trusting the API's own verdict.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The booker now branches on the <code>pay_init</code> response, and this single split is the reliability story:
            </p>
            <ul className="text-sm leading-relaxed text-muted-foreground space-y-2 list-disc list-inside">
              <li><strong className="text-foreground">4xx</strong> → the request was rejected, so nothing is held. Fail fast, skip the expensive page scrape entirely, and move to the next candidate.</li>
              <li><strong className="text-foreground">5xx, or a 200 with no PaymentIntent</strong> → ambiguous. A midnight 5xx can <em>still</em> have created a ~15-minute hold whose response got lost. So hand off to a headless Playwright session that opens <code>/account</code> and pays for whatever is genuinely held — or confirms nothing is, and lets the cascade continue.</li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Because the booker now owns hold-verification, a plain failure <em>provably</em> means nothing is reserved — which let me delete an unconditional 15–32&nbsp;second account check that used to run between every candidate. Fast path stays fast; the slow, careful path only runs when the outcome is genuinely uncertain.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Degrading gracefully: the fallback cascade</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A prime slot is often gone before you reach it, so the booker doesn't bet on one outcome. It walks a cascade — preferred court, then alternate courts, then a fallback time, then a different venue — and the first success stops it. The result is that a full 7&nbsp;PM at one park still lands you a 8&nbsp;PM there, or a 7&nbsp;PM somewhere nearby, instead of nothing.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Driving it from your phone</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every night at 10&nbsp;PM the bot sends a Telegram approval card. From the lock screen I can edit the venue, time, court order, and whether to pay with a banked coupon or a card — then approve, or fire a one-off override that supersedes the standing rules for just that night. No redeploy, no config files.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Because the booking happens at a moment I'm not watching, every decision is persisted to SQLite before midnight. If the process restarts at 23:59, it recovers the payment mode and any override and races anyway. A midnight job that can't survive a restart isn't really automated.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">Stack &amp; shape</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              TypeScript on Node, <code>got</code> for the fast HTTP path with a Playwright fallback for the ambiguous one, SQLite for crash-recoverable state, node-cron for the schedule, and a Telegram bot for the whole interface. Around 226 tests cover the failure branches, since those are the parts that only ever run once a night under conditions you can't reproduce on demand. It's deployed on Fly and pairs with Time for Tennis: that service watches and notifies, this one acts.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">A note on the code</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I'm keeping this one closed-source, and that's a deliberate choice rather than an oversight. It runs against a live, shared booking system where every slot it wins is one that someone else didn't — so publishing a turnkey version wouldn't be a neutral act. It would just escalate the exact midnight arms race the bot is built to win, and blunt everyone's odds, mine included. This write-up is the deliverable; I'm happy to walk through the design and the hard parts in detail, but the repository stays private by design.
            </p>

            <h2 className="text-lg font-medium mt-6 mb-3">By the numbers</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              It's been running nightly in production against real money and real contention. As of early July 2026, from the Fly deployment's own logs and booking history:
            </p>
            <ul className="text-sm leading-relaxed text-muted-foreground space-y-2 list-disc list-inside">
              <li><strong className="text-foreground">16 courts booked fully autonomously</strong> since mid-May 2026 — <strong className="text-foreground">11 of them the contested 7&nbsp;PM weekday slot</strong> that's gone within seconds of release.</li>
              <li><strong className="text-foreground">Fastest court secured ~26&nbsp;seconds after midnight</strong>, ~60&nbsp;seconds on average — pushing through page loads that balloon to 13–23&nbsp;seconds each under release-time load.</li>
              <li>Runs unattended on a <strong className="text-foreground">single 1&nbsp;GB Fly machine</strong>, one race a night, no babysitting.</li>
              <li>It doesn't win every night, and that's the point: when the slot is genuinely gone, the cascade falls back or the run fails cleanly — it never reports a booking it didn't make. The early misses were integration bugs shaken out during bring-up; the rest are slots that were simply already taken.</li>
            </ul>

            <h2 className="text-lg font-medium mt-6 mb-3">What I'd take from it</h2>
            <ul className="text-sm leading-relaxed text-muted-foreground space-y-2 list-disc list-inside">
              <li>Trust the system's source of truth (the payment intent), not the UI's optimistic story (the cart).</li>
              <li>Classify failures and act differently — a 4xx and a 5xx mean opposite things about whether you hold a resource.</li>
              <li>Keep the fast path fast; only pay for the slow, careful verification when the outcome is genuinely uncertain.</li>
              <li>Degrade gracefully — a cascade of acceptable outcomes beats one all-or-nothing bet.</li>
              <li>If a job runs unattended at a fixed moment, it has to survive a restart at the worst possible second.</li>
            </ul>
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
