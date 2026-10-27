import { SectionLabel } from '@/components/section-label'

interface FeaturesProps {
  lang: 'it' | 'en'
  dict: any
}

export function Features({ lang, dict }: FeaturesProps) {
  const t = dict?.features ?? {}
  const pillars = t.pillars ?? []

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">{t.sectionLabel}</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance lg:text-6xl">
              {t.titlePrefix} <em className="text-primary">{t.titleHighlight}</em> {t.titleSuffix}
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground text-pretty lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p>{t.paragraph1}</p>
            <p className="text-foreground">{t.paragraph2}</p>
          </div>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {pillars.map((pillar: any) => (
            <li
              key={pillar.index}
              className="flex flex-col bg-background p-8 transition-colors hover:bg-card lg:p-10"
            >
              <span className="font-serif text-4xl italic text-primary">{pillar.index}</span>
              <h3 className="mt-12 font-serif text-3xl leading-tight">{pillar.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{pillar.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}