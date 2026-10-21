import { SectionLabel } from '@/components/section-label'

export function PageIntro({
  index,
  label,
  title,
  description,
}: {
  index?: string
  label: string
  title: React.ReactNode
  description: string
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pt-20 pb-16 lg:grid-cols-12 lg:pt-28 lg:pb-24">
        <div className="lg:col-span-8">
          <SectionLabel index={index}>{label}</SectionLabel>
          <h1 className="mt-8 font-serif text-6xl leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            {title}
          </h1>
        </div>
        <p className="self-end text-lg leading-relaxed text-muted-foreground text-pretty lg:col-span-4">
          {description}
        </p>
      </div>
    </section>
  )
}
