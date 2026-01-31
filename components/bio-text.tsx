'use client'

import { getTechIcon } from '@/lib/tech-icons'

interface BioTextProps {
  text: string
}

export function BioText({ text }: BioTextProps) {
  const techs = [
    { name: 'Next.js', pattern: /Next\.js/gi },
    { name: 'React', pattern: /\bReact\b/gi },
    { name: 'TypeScript', pattern: /\bTypeScript\b/gi },
    { name: 'Python', pattern: /\bPython\b/gi },
    { name: 'Go', pattern: /\bGo\b/gi },
    { name: 'Java', pattern: /\bJava\b/gi },
    { name: 'AWS', pattern: /\bAWS\b/gi },
    { name: 'FastAPI', pattern: /\bFastAPI\b/gi },
    { name: 'MongoDB', pattern: /\bMongoDB\b/gi },
    { name: 'PostgreSQL', pattern: /\bPostgreSQL\b/gi },
    { name: 'Docker', pattern: /\bDocker\b/gi },
    { name: 'GitLab CI/CD', pattern: /GitLab CI\/CD/gi }
  ]

  // Find all matches
  const matches: Array<{ index: number; length: number; tech: string; text: string }> = []
  
  techs.forEach(({ name, pattern }) => {
    let match
    const regex = new RegExp(pattern.source, pattern.flags)
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        index: match.index,
        length: match[0].length,
        tech: name,
        text: match[0]
      })
    }
  })

  // Sort by index, then by length (longer first) to prioritize specific matches
  matches.sort((a, b) => {
    if (a.index !== b.index) return a.index - b.index
    return b.length - a.length
  })

  // Remove overlapping matches (keep first/longer ones)
  const filteredMatches: typeof matches = []
  matches.forEach(match => {
    const overlaps = filteredMatches.some(existing => 
      (match.index >= existing.index && match.index < existing.index + existing.length) ||
      (existing.index >= match.index && existing.index < match.index + match.length)
    )
    if (!overlaps) {
      filteredMatches.push(match)
    }
  })
  
  const finalMatches = filteredMatches.sort((a, b) => a.index - b.index)

  // Build parts
  const parts: (string | JSX.Element)[] = []
  let lastIndex = 0

  finalMatches.forEach((match, idx) => {
    // Add text before match
    if (match.index > lastIndex) {
      const beforeText = text.substring(lastIndex, match.index)
      if (beforeText) {
        parts.push(beforeText)
      }
    }

    // Add icon + tech
    const Icon = getTechIcon(match.tech)
    parts.push(
      <span key={`tech-${match.index}-${idx}`} className="inline-flex items-center gap-1 font-semibold">
        {Icon && <Icon className="h-4 w-4" />}
        {match.text}
      </span>
    )

    lastIndex = match.index + match.length
  })

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  // If no matches, return original text with markdown processed
  if (finalMatches.length === 0) {
    const withLinks = text.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_, linkText, url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-foreground underline hover:text-accent transition-colors">${linkText}</a>`
      }
    )
    const withBold = withLinks.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    return <span dangerouslySetInnerHTML={{ __html: withBold }} />
  }

  // Process markdown in text parts
  const processedParts = parts.map((part, idx) => {
    if (typeof part === 'string') {
      // Handle markdown links
      const withLinks = part.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        (_, linkText, url) => {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-foreground underline hover:text-accent transition-colors">${linkText}</a>`
        }
      )
      
      // Handle bold
      const withBold = withLinks.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      
      return (
        <span key={`text-${idx}`} dangerouslySetInnerHTML={{ __html: withBold }} />
      )
    }
    return part
  })

  return <>{processedParts}</>
}
