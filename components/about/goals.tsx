import { SectionLabel } from '@/components/section-label'

const GOALS = [
  {
    title: 'Digitize and preserve',
    body: 'Transform fragile paper-based and historical documents into a secure, long-lasting digital archive designed to remain intact and readable for decades.',
  },
  {
    title: 'Organize and index',
    body: 'Simplify the search for complex information through advanced search tools, optical character recognition (OCR) and artificial intelligence.',
  },
  {
    title: 'Promote cultural value',
    body: 'Enable institutions, cultural organizations, museums and archives to manage and share their artistic heritage in an organized, accessible and protected manner.',
  },
]

export function Goals() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <SectionLabel index="02">Our goals</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance lg:text-6xl">
            What we are <em className="text-primary">building toward.</em>
          </h2>
        </div>

        <ol className="mt-16 flex flex-col">
          {GOALS.map((goal, index) => (
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
