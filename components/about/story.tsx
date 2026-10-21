import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'

export function Story() {
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
            Fig. 1 — Decades of heritage, one drawer at a time
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center gap-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
          <SectionLabel index="01">Our mission</SectionLabel>
          <h2 className="font-serif text-4xl leading-tight text-foreground text-balance sm:text-5xl">
            Who we are
          </h2>
          <p className="text-pretty">
            We are a small team of art lovers, designers and engineers based in Italy — a country
            where nearly every street is an archive. ARCHIVIART was created to address a major
            challenge: the fragility, fragmentation and difficult accessibility of analog artistic
            and documentary heritage.
          </p>
          <div className="rounded-sm border border-border bg-card p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">The risk</p>
            <p className="mt-3 text-base text-pretty">
              The physical loss of heritage due to time, environmental factors or accidental events
              — compounded by the practical difficulty of locating a single document buried within
              decades of paper records.
            </p>
          </div>
          <p className="text-pretty text-foreground">
            Our solution is to transform this vast, scattered archive into a living, secure and
            interconnected digital ecosystem — safeguarding historical memory while making it
            accessible for use today.
          </p>
        </div>
      </div>
    </section>
  )
}
