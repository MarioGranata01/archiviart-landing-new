import { SectionLabel } from '@/components/section-label'

interface GoalsProps {
  lang: 'it' | 'en'
  dict: any
}

export function Goals({ lang, dict }: GoalsProps) {
  const t = dict.goals ?? {}
  const goals = t.items ?? []

  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <SectionLabel index="02">{t.sectionLabel}</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance lg:text-6xl">
            {t.titlePrefix} <em className="text-primary">{t.titleHighlight}</em>
          </h2>
        </div>

        <ol className="mt-16 flex flex-col">
          {goals.map((goal: any, index: number) => (
            <li
              key={goal.title}
              className="group grid gap-4 border-t border-border py-10 last:border-b md:grid-cols-12 md:items-baseline"
            >
              <span className="font-mono text-sm text-primary md:col-span-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-3xl leading-tight transition-colors group-hover:text-primary md:col-span-5 lg:text-4xl">
                {goal.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-5">{goal.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}