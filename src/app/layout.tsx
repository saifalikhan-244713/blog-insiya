import type {Metadata} from 'next'
import {Fraunces, IBM_Plex_Mono, Source_Serif_4} from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Still Here',
  description:
    'A gentle space for anyone feeling lonely, low or worn thin — honest essays, a mood check-in, and small things to try.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSerif.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  )
}
