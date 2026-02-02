import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'pdd27673'
    console.log(`[GitHub API] Fetching repos for user: ${username}`)
    
    // First, get user's repos
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 300 } // Cache for 5 minutes instead of 1 hour
    })

    if (!reposResponse.ok) {
      console.error(`[GitHub API] Failed to fetch repos: ${reposResponse.status} ${reposResponse.statusText}`)
      throw new Error('Failed to fetch GitHub repos')
    }

    const repos = await reposResponse.json()
    console.log(`[GitHub API] Found ${repos.length} repos`)
    console.log(`[GitHub API] Top 5 repos by update time:`, repos.slice(0, 5).map((r: any) => ({
      name: r.name,
      updated_at: r.updated_at,
      pushed_at: r.pushed_at
    })))
    
    // Fetch commits from each repo
    const commitsPromises = repos.map(async (repo: any) => {
      try {
        console.log(`[GitHub API] Fetching commits for repo: ${repo.name}`)
        const commitsResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?per_page=5`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
          next: { revalidate: 300 } // Cache for 5 minutes instead of 1 hour
        })
        
        if (!commitsResponse.ok) {
          console.warn(`[GitHub API] Failed to fetch commits for ${repo.name}: ${commitsResponse.status}`)
          return []
        }
        
        const commits = await commitsResponse.json()
        console.log(`[GitHub API] Found ${commits.length} commits in ${repo.name}`)
        if (commits.length > 0) {
          console.log(`[GitHub API] Latest commit in ${repo.name}:`, {
            date: commits[0].commit.author.date,
            message: commits[0].commit.message.split('\n')[0]
          })
        }
        
        return commits.map((commit: any) => ({
          sha: commit.sha.substring(0, 7),
          fullSha: commit.sha,
          message: commit.commit.message.split('\n')[0], // First line only
          date: commit.commit.author.date,
          repoName: repo.name,
          repoUrl: repo.html_url,
          commitUrl: commit.html_url,
        }))
      } catch (error) {
        console.error(`[GitHub API] Error fetching commits for ${repo.name}:`, error)
        return []
      }
    })
    
    const commitsArrays = await Promise.all(commitsPromises)
    const allCommits = commitsArrays.flat()
    console.log(`[GitHub API] Total commits collected: ${allCommits.length}`)
    
    // Sort by date (newest first) and limit to 5
    const sortedCommits = allCommits
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)
    
    console.log(`[GitHub API] Top 5 commits to return:`, sortedCommits.map(c => ({
      repo: c.repoName,
      date: c.date,
      message: c.message.substring(0, 50)
    })))

    return NextResponse.json(sortedCommits)
  } catch (error) {
    console.error('[GitHub API] Fatal error:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}
