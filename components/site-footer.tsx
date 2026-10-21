import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/ARCHIVIART - Logo - Primary - colors - big.png"
            alt="ARCHIVIART"
            width={969}
            height={230}
            className="h-8 w-auto self-start dark:hidden"
          />

          <Image
            src="/images/archiviart-logo.png"
            alt="ARCHIVIART"
            width={969}
            height={230}
            className="h-8 w-auto self-start hidden dark:block"
          />

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Digitizing, preserving and sharing artistic and documentary heritage. Built in Italy
            for museums, archives, curators and researchers everywhere.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/team" className="hover:text-foreground">
            Team
          </Link>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70 sm:flex-row">
          <span>{`© ${new Date().getFullYear()} ARCHIVIART`}</span>
          <span>Cat. no. AV-0000 — All works catalogued</span>
        </div>
      </div>
    </footer>
  )
}