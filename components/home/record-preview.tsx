import Image from 'next/image'
import { Lock, ScanText, ShieldCheck, Tags } from 'lucide-react'
import { SectionLabel } from '@/components/section-label'
import { Barcode } from '@/components/barcode'

const CAPABILITIES = [
  {
    icon: ShieldCheck,
    title: 'Digital preservation',
    body: 'Structured, long-term preservation — far beyond simply saving files.',
  },
  {
    icon: ScanText,
    title: 'OCR & intelligent indexing',
    body: 'Search an artist’s name and retrieve every letter that mentions it.',
  },
  {
    icon: Tags,
    title: 'Art-specific metadata',
    body: 'Author, dating, technique, provenance, location and conservation status.',
  },
  {
    icon: Lock,
    title: 'Tiered access control',
    body: 'Researchers, curators and administrators each see exactly what they should.',
  },
]

const METADATA = [
  ['Author', 'Unknown (attrib. Ferrara school)'],
  ['Dating', 'c. 1912'],
  ['Technique', 'Ink on laid paper'],
  ['Provenance', 'Private collection, Milan'],
  ['Location', 'Drawer 14 · Folder C'],
  ['Conservation', 'Fair — foxing on margins'],
]

export function RecordPreview() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:py-32">
        <div className="flex flex-col justify-center lg:col-span-5">
          <SectionLabel index="03">Inside the archive</SectionLabel>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-balance lg:text-6xl">
            From paper to <em className="text-primary">searchable</em> record.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Upload an old handwritten letter or typewritten document and ARCHIVIART extracts its
            text, enriches it with cultural metadata and protects it behind secure, centralized
            authentication.
          </p>
          <ul className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
            {CAPABILITIES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex flex-col gap-2">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <article
            aria-label="Example archive record"
            className="overflow-hidden rounded-sm border border-border bg-background shadow-2xl"
          >
            <header className="flex items-center justify-between border-b border-border px-6 py-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Record · AV-1912-117
              </span>
              <Barcode className="h-5" />
            </header>
            <div className="grid sm:grid-cols-5">
              <div className="relative aspect-square sm:col-span-2 sm:aspect-auto">
                <Image
                  src="/images/archive-drawers.png"
                  alt="Archive drawers filled with index cards and historical documents"
                  fill
                  sizes="(min-width: 1024px) 25vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:col-span-3">
                <h3 className="font-serif text-3xl leading-tight">Letter to a Gallerist</h3>
                <dl className="mt-5 flex flex-col gap-2.5 text-sm">
                  {METADATA.map(([term, value]) => (
                    <div
                      key={term}
                      className="flex justify-between gap-4 border-b border-border/60 pb-2.5"
                    >
                      <dt className="text-muted-foreground">{term}</dt>
                      <dd className="text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                    OCR extract
                  </p>
                  <blockquote className="mt-3 border-l-2 border-primary pl-3 font-serif text-lg italic leading-snug">
                    {'“…the canvases will arrive in Venice before the opening. I trust you with them as I would with my own memory…”'}
                  </blockquote>
                  <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                    98% confidence · 3 linked documents
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
