import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: 'ARCHIVIART',
  description: 'Digital preservation for artistic heritage',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${instrumentSerif.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}