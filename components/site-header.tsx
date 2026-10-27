'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

interface SiteHeaderProps {
  lang: string
  dict: {
    nav: {
      home: string
      about: string
      team: string
      requestAccess: string
    }
  }
}

export function SiteHeader({ lang = 'it', dict }: SiteHeaderProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const t = dict?.nav ?? {
    home: 'Home',
    about: 'About',
    team: 'Team',
    requestAccess: 'Request access',
  }

  const NAV_ITEMS = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/about`, label: t.about },
    { href: `/${lang}/team`, label: t.team },
  ]

  const switchLocale = (locale: string) => {
    if (!pathname) return `/${locale}`
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={`/${lang}`} className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/ARCHIVIART - Logo - Primary - colors - big.png"
            alt="ARCHIVIART"
            width={969}
            height={230}
            priority
            className="h-7 w-auto dark:hidden"
          />

          <Image
            src="/images/archiviart-logo.png"
            alt="ARCHIVIART"
            width={969}
            height={230}
            priority
            className="h-7 w-auto hidden dark:block"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-sm tracking-wide transition-colors',
                  active ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2 py-1 shadow-xs">
            <Link
              href={switchLocale('it')}
              className={cn(
                'flex items-center gap-2 rounded-sm px-2 py-0.5 text-xs font-mono font-medium transition-colors',
                lang === 'it' 
                  ? 'bg-background text-foreground shadow-xs' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title="Italiano"
            >
              <div className="relative flex h-4 w-5 shrink-0 items-center justify-center overflow-hidden rounded-[2px] shadow-xs">
                <svg viewBox="0 0 3 2" className="h-full w-full object-cover">
                  <rect width="1" height="2" fill="#009246" />
                  <rect x="1" width="1" height="2" fill="#F1F2F1" />
                  <rect x="2" width="1" height="2" fill="#CE2B37" />
                </svg>
              </div>
              <span className="leading-none">IT</span>
            </Link>

            <Link
              href={switchLocale('en')}
              className={cn(
                'flex items-center gap-2 rounded-sm px-2 py-0.5 text-xs font-mono font-medium transition-colors',
                lang === 'en' 
                  ? 'bg-background text-foreground shadow-xs' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
              title="English"
            >
              <div className="relative flex h-4 w-5 shrink-0 items-center justify-center overflow-hidden rounded-[2px] shadow-xs">
                <svg viewBox="0 0 60 30" className="h-full w-full object-cover">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                  <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                  <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                </svg>
              </div>
              <span className="leading-none">EN</span>
            </Link>
          </div>

          <ThemeToggle />

          <Link
            href={`/${lang}/#access`}
            className={cn(buttonVariants({ size: 'lg' }), 'hidden px-4 sm:inline-flex')}
          >
            {t.requestAccess}
          </Link>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border md:hidden bg-background">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="block py-3 font-serif text-3xl"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href={`/${lang}/#access`}
                onClick={() => setOpen(false)}
                className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
              >
                {t.requestAccess}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}