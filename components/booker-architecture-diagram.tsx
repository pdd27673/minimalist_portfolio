// Architecture diagram for the "Winning the Midnight Court Race" writeup.
// Pure SVG, themed via the site's CSS variables so it adapts to light/dark + accent.
export function BookerArchitectureDiagram() {
  return (
    <figure className="my-8">
      <svg
        viewBox="0 0 720 600"
        className="w-full h-auto"
        role="img"
        aria-label="Flow of the nightly court booking: approval card, persist to SQLite, midnight race, candidate cascade, got fast-path to pay_init, and the 4xx-vs-5xx decision branch into outcomes."
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        <defs>
          <marker
            id="bk-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="var(--muted-foreground, #888)" />
          </marker>
        </defs>

        {/* connectors (drawn first so boxes sit on top) */}
        <g
          stroke="var(--muted-foreground, #888)"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#bk-arrow)"
        >
          <line x1="360" y1="74" x2="360" y2="94" />
          <line x1="360" y1="146" x2="360" y2="166" />
          <line x1="360" y1="208" x2="360" y2="228" />
          <line x1="360" y1="284" x2="360" y2="304" />
          <line x1="360" y1="364" x2="360" y2="386" />
          {/* branch split */}
          <path d="M360,418 L360,432 L180,432 L180,446" />
          <path d="M360,418 L360,432 L540,432 L540,446" />
          {/* to outcomes */}
          <line x1="180" y1="520" x2="180" y2="546" />
          <line x1="540" y1="520" x2="540" y2="546" />
        </g>

        {/* branch labels */}
        <g
          fontSize="11"
          fontWeight="600"
          textAnchor="middle"
          fill="var(--muted-foreground, #888)"
        >
          <text x="262" y="426">4xx</text>
          <text x="470" y="426">5xx / no&nbsp;PI</text>
        </g>

        {/* Box 1 — approval card */}
        <g>
          <rect x="190" y="20" width="340" height="54" rx="10"
            fill="var(--card, #fff)" stroke="var(--border, #ddd)" />
          <text x="360" y="42" textAnchor="middle" fontSize="13.5" fontWeight="600"
            fill="var(--foreground, #111)">10 PM — approval card</text>
          <text x="360" y="61" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">Telegram: edit court · time · payment, then approve</text>
        </g>

        {/* Box 2 — persist */}
        <g>
          <rect x="190" y="94" width="340" height="52" rx="10"
            fill="var(--card, #fff)" stroke="var(--border, #ddd)" />
          <text x="360" y="116" textAnchor="middle" fontSize="13.5" fontWeight="600"
            fill="var(--foreground, #111)">Persist to SQLite (night_state)</text>
          <text x="360" y="134" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">payment_mode + override — survives a restart</text>
        </g>

        {/* Banner 3 — midnight */}
        <g>
          <rect x="240" y="166" width="240" height="42" rx="10"
            fill="var(--accent, #2e7d32)" />
          <text x="360" y="192" textAnchor="middle" fontSize="13" fontWeight="700"
            fill="var(--accent-foreground, #fff)">00:00:00 — midnight race</text>
        </g>

        {/* Box 4 — cascade */}
        <g>
          <rect x="190" y="228" width="340" height="56" rx="10"
            fill="var(--card, #fff)" stroke="var(--border, #ddd)" />
          <text x="360" y="251" textAnchor="middle" fontSize="13.5" fontWeight="600"
            fill="var(--foreground, #111)">Candidate cascade</text>
          <text x="360" y="270" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">court → time → venue fallback (first win stops)</text>
        </g>

        {/* Box 5 — got fast-path */}
        <g>
          <rect x="160" y="304" width="400" height="60" rx="10"
            fill="var(--card, #fff)" stroke="var(--border, #ddd)" />
          <text x="360" y="328" textAnchor="middle" fontSize="13.5" fontWeight="600"
            fill="var(--foreground, #111)">got fast-path: add_to_basket → pay_init</text>
          <text x="360" y="348" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">a Stripe PaymentIntent is the only thing that locks the slot (~15 min)</text>
        </g>

        {/* decision pill */}
        <g>
          <rect x="300" y="388" width="120" height="30" rx="15"
            fill="var(--secondary, #eee)" stroke="var(--border, #ddd)" />
          <text x="360" y="407" textAnchor="middle" fontSize="12" fontWeight="600"
            fill="var(--foreground, #111)">pay_init?</text>
        </g>

        {/* F — nothing held */}
        <g>
          <rect x="24" y="446" width="312" height="74" rx="10"
            fill="var(--card, #fff)" stroke="var(--border, #ddd)" />
          <text x="180" y="472" textAnchor="middle" fontSize="13" fontWeight="600"
            fill="var(--foreground, #111)">4xx — nothing held</text>
          <text x="180" y="491" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">fail fast, skip the page scrape</text>
          <text x="180" y="507" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">no slot reserved — move on</text>
        </g>

        {/* G — maybe held (accent emphasis) */}
        <g>
          <rect x="384" y="446" width="312" height="74" rx="10"
            fill="var(--card, #fff)" stroke="var(--accent, #2e7d32)" strokeWidth="1.5" />
          <text x="540" y="472" textAnchor="middle" fontSize="13" fontWeight="600"
            fill="var(--foreground, #111)">5xx / 200 without PI — maybe held</text>
          <text x="540" y="491" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">Playwright opens /account</text>
          <text x="540" y="507" textAnchor="middle" fontSize="10.5"
            fill="var(--muted-foreground, #888)">and pays whatever is actually held</text>
        </g>

        {/* Outcome F */}
        <g>
          <rect x="24" y="546" width="312" height="42" rx="10"
            fill="var(--card, #fff)" stroke="var(--border, #ddd)" />
          <text x="180" y="572" textAnchor="middle" fontSize="11.5" fontWeight="600"
            fill="var(--foreground, #111)">↺ next candidate · else book-manually alert</text>
        </g>

        {/* Outcome G */}
        <g>
          <rect x="384" y="546" width="312" height="42" rx="10"
            fill="var(--accent, #2e7d32)" />
          <text x="540" y="572" textAnchor="middle" fontSize="11.5" fontWeight="700"
            fill="var(--accent-foreground, #fff)">✅ booked → Telegram confirmation</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-xs text-muted-foreground text-center">
        One night, end to end — the 4xx-vs-5xx split at <code>pay_init</code> is the whole reliability story.
      </figcaption>
    </figure>
  )
}
