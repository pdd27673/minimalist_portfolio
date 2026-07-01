import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { ScrollRestoration } from '@/components/scroll-restoration'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paul Doho - Software Engineer',
  description: 'Paul Doho is a software engineer and aspiring entrepreneur, currently working at Goldman Sachs on internal tooling and infrastructure projects.',
  keywords: 'Paul Doho, software engineer, Goldman Sachs, React, TypeScript, full-stack developer',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  other: {
    'font-share': 'https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700&display=swap" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollRestoration />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
