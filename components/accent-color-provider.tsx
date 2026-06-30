'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// Define accent colors for light and dark modes
const accentColors = {
  light: [
    'oklch(0.40 0.12 145)', // Green (dark forest green)
    'oklch(0.553 0.298 17.4)', // Red (#EE2A35)
    'oklch(0.775 0.207 86.5)', // Yellow (#F2C94C)
  ],
  dark: [
    'oklch(0.45 0.12 145)', // Green (dark forest green)
    'oklch(0.60 0.298 17.4)', // Red (#EE2A35) - brighter for dark mode
    'oklch(0.80 0.207 86.5)', // Yellow (#F2C94C) - brighter for dark mode
  ],
}

export function AccentColorProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  // Wait for hydration to avoid mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Determine if we're in dark mode
    const isDark = resolvedTheme === 'dark' || 
      (resolvedTheme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    const colors = isDark ? accentColors.dark : accentColors.light

    // Update CSS variables
    const root = document.documentElement
    root.style.setProperty('--accent', colors[currentIndex])
    root.style.setProperty('--ring', colors[currentIndex])
  }, [currentIndex, resolvedTheme, mounted])

  // Rotate colors every 22.5 seconds
  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accentColors.light.length)
    }, 22500)

    return () => clearInterval(interval)
  }, [mounted])

  return <>{children}</>
}
