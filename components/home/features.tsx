import { SectionLabel } from '@/components/section-label'

const PILLARS = [
  {
    index: 'I',
    title: 'Digitize and preserve',
    body: 'Transform fragile paper-based and historical documents into a secure, long-lasting digital archive — structured preservation designed so files never become corrupted or obsolete.',
  },
  {
    index: 'II',
    title: 'Organize and index',
    body: 'Locate complex information in seconds. Optical character recognition and artificial intelligence turn handwritten letters and typewritten pages into fully searchable text.',
  },
  {
    index: 'III',
    title: 'Promote cultural value',
    body: 'Enable museums, archives and cultural organizations to manage and share their artistic heritage in an organized, accessible and protected way.',
  },
]

export function Features() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel index="01">The project</SectionLabel>
            <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance lg:text-6xl">
              Heritage is fragile. <em className="text-primary">Memory</em> shouldn&apos;t be.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground text-pretty lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p>
              Art history still lives in dusty folders, artists&apos; diaries, handwritten letters,
              vintage photographs and inventory registers — material that deteriorates with time,
              environment and accident, and that is nearly impossible to search.
            </p>
            <p className="text-foreground">
              ARCHIVIART transforms this vast, scattered archive into a living, secure and
              interconnected digital ecosystem.
            </p>
          </div>
        </div>

        <ol className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {PILLARS.map((pillar) => (
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
