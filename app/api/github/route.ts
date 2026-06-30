import { NextResponse } from 'next/server'

const USERNAME = 'pdd27673'

// Optional auth: set GITHUB_TOKEN to lift the 60 req/hr unauthenticated limit
// (the route makes ~20+ calls per refresh, so without a token it gets throttled
// to a stale fallback). Set GITHUB_INCLUDE_PRIVATE=true to also surface commits
// from private repos — note this makes those commit messages public.
const TOKEN = process.env.GITHUB_TOKEN
const INCLUDE_PRIVATE = process.env.GITHUB_INCLUDE_PRIVATE === 'true' && !!TOKEN

const headers: Record<string, string> = {
  Accept: 'application/vnd.github.v3+json',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}

// Skip merge commits, the boilerplate first commit, and bot noise.
function isInterestingCommit(message: string, authorLogin?: string): boolean {
  if (/^Merge\b/i.test(message)) return false
  if (/^Initial commit$/i.test(message)) return false
  if (authorLogin && /\[bot\]$|^dependabot/i.test(authorLogin)) return false
  return true
}

export async function GET() {
  try {
    // Authenticated + opt-in → include private repos; otherwise public only.
    const reposUrl = INCLUDE_PRIVATE
      ? `https://api.github.com/user/repos?sort=updated&per_page=20&visibility=all`
      : `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=20`

    const reposResponse = await fetch(reposUrl, { headers, next: { revalidate: 300 } })
    if (!reposResponse.ok) {
      console.error(`[GitHub API] Failed to fetch repos: ${reposResponse.status} ${reposResponse.statusText}`)
      throw new Error('Failed to fetch GitHub repos')
    }
    const repos = await reposResponse.json()

    const commitsPromises = repos.map(async (repo: any) => {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${repo.full_name}/commits?per_page=5`,
          { headers, next: { revalidate: 300 } }
        )
        if (!commitsResponse.ok) return []
        const commits = await commitsResponse.json()
        if (!Array.isArray(commits)) return []

        return commits
          .map((commit: any) => ({
            sha: commit.sha.substring(0, 7),
            fullSha: commit.sha,
            message: commit.commit.message.split('\n')[0], // first line only
            date: commit.commit.author.date,
            repoName: repo.name,
            repoUrl: repo.html_url,
            commitUrl: commit.html_url,
            _authorLogin: commit.author?.login as string | undefined,
          }))
          .filter((c) => isInterestingCommit(c.message, c._authorLogin))
          .slice(0, 2) // cap per repo so one repo can't dominate the feed
      } catch (error) {
        console.error(`[GitHub API] Error fetching commits for ${repo.name}:`, error)
        return []
      }
    })

    const allCommits = (await Promise.all(commitsPromises)).flat()

    const sortedCommits = allCommits
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6)
      .map(({ _authorLogin, ...c }) => c) // drop internal field from the response

    return NextResponse.json(sortedCommits)
  } catch (error) {
    console.error('[GitHub API] Fatal error:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}
