import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AccessCtaProps {
  lang: 'it' | 'en'
  dict: any
}

export function AccessCta({ lang, dict }: AccessCtaProps) {
  const t = dict?.cta ?? {}

  return (
    <section id="access" className="scroll-mt-16">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <blockquote className="mx-auto max-w-4xl text-center">
          <p className="font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            {t.quote}
          </p>
          <footer className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            — The ARCHIVIART team
          </footer>
        </blockquote>

        <div className="relative mt-24 overflow-hidden rounded-sm border border-border bg-card">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {t.badge}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-balance sm:text-5xl">
                {t.title}
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                {t.description}
              </p>
              <Link
                href="https://tally.so/r/1WA71O"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-12 gap-2 px-6 text-base')}
              >
                {t.button}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            
            <div className="hidden justify-center lg:col-span-4 lg:flex">
              <Image
                src="/images/archiviart-logo-light.png"
                alt=""
                width={1536}
                height={1536}
                className="size-64 object-contain dark:hidden"
              />
              <Image
                src="/images/archiviart-submark.png"
                alt=""
                width={1536}
                height={1536}
                className="size-64 object-contain hidden dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}