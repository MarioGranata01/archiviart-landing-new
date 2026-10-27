import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'

interface StoryProps {
  lang: 'it' | 'en'
  dict: any
}

export function Story({ lang, dict }: StoryProps) {
  const t = dict?.story ?? {}

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:gap-16 lg:py-32">
        <figure className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/archive-drawers.png"
              alt="Wooden archive drawers holding index cards, sketches and historical documents"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {t.figcaption}
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          <SectionLabel index="01">{t.sectionLabel}</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            {t.title}
          </h2>
          <p className="text-pretty">
            {t.p1}
          </p>
          <div className="rounded-sm border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{t.riskTitle}</p>
            <p className="mt-3 text-base text-pretty">
              {t.riskBody}
            </p>
          </div>
          <p className="text-pretty text-foreground">
            {t.p2}
          </p>
        </div>
      </div>
    </section>
  )
}
