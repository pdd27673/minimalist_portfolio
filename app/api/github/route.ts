import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const username = 'pdd27673'
    
    // First, get user's repos
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=20`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }
    })

    if (!reposResponse.ok) {
      throw new Error('Failed to fetch GitHub repos')
    }

    const repos = await reposResponse.json()
    
    // Fetch commits from each repo
    const commitsPromises = repos.map(async (repo: any) => {
      try {
        const commitsResponse = await fetch(`https://api.github.com/repos/${repo.full_name}/commits?author=${username}&per_page=5`, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
          next: { revalidate: 3600 }
        })
        
        if (!commitsResponse.ok) {
          return []
        }
        
        const commits = await commitsResponse.json()
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
        return []
      }
    })
    
    const commitsArrays = await Promise.all(commitsPromises)
    const allCommits = commitsArrays.flat()
    
    // Sort by date (newest first) and limit to 5
    const sortedCommits = allCommits
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5)

    return NextResponse.json(sortedCommits)
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}
