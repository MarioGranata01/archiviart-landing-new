import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Barcode } from '@/components/barcode'
import { cn } from '@/lib/utils'

interface HeroProps {
  lang: 'it' | 'en'
  dict: any 
}

export function Hero({ lang, dict }: HeroProps) {
  const t = dict?.hero ?? {}

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-28">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {t.badge}
          </p>
          <h1 className="font-serif text-6xl leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {t.titlePrefix}{' '}
            <em className="text-primary">{t.titleHighlight}</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.description}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={`/${lang}#access`}
              className={cn(buttonVariants({ size: 'lg' }), 'h-12 gap-2 px-6 text-base')}
            >
              {t.ctaButton}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-12 px-6 text-base',
              )}
            >
              {t.secondaryButton}
            </Link>
          </div>
        </div>

        <figure className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-gallery.png"
              alt="A single abstract painting lit by a spotlight in a dark gallery"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          <figcaption className="absolute -bottom-8 left-4 right-4 rounded-sm border border-border bg-card/95 p-5 shadow-2xl backdrop-blur sm:right-auto sm:-left-6 sm:w-80">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Acc. no. AV-1987-042
                </p>
                <p className="mt-2 font-serif text-2xl leading-tight">Untitled (Ochre Field)</p>
                <p className="mt-1 text-sm text-muted-foreground">Oil on linen · 1987</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
              <Barcode scanning className="h-8" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                {t.status}
              </span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
