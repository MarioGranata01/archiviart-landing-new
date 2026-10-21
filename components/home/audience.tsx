import { SectionLabel } from '@/components/section-label'

const AUDIENCES = [
  {
    title: 'Art historians & researchers',
    body: 'Consult primary sources, letters and sketches instantly — without traveling to archives around the world.',
  },
  {
    title: 'Museum & gallery curators',
    body: 'Catalog artworks, track their movements and manage loans for exhibitions from a single place.',
  },
  {
    title: 'Archivists & cultural institutions',
    body: 'Oversee compliant preservation with powerful tools for organizing complex document workflows.',
  },
  {
    title: 'The public & enthusiasts',
    body: 'Explore digitized collections through an intuitive, multimedia-rich interface built for discovery.',
  },
]

export function Audience() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="max-w-2xl">
          <SectionLabel index="02">Who it&apos;s for</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance lg:text-6xl">
            Built for everyone who <em className="text-primary">keeps art alive.</em>
          </h2>
        </div>

        <ul className="mt-16 flex flex-col">
          {AUDIENCES.map((audience) => (
            <li
              key={audience.title}
              className="group grid gap-4 border-t border-border py-8 last:border-b md:grid-cols-12 md:items-baseline"
            >
              <h3 className="font-serif text-3xl leading-tight transition-colors group-hover:text-primary md:col-span-6 lg:text-4xl">
                {audience.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground md:col-span-6">
                {audience.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
