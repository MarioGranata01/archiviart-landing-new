import Image from 'next/image'
import { TEAM } from '@/lib/team' 

interface TeamGridProps {
  lang: 'it' | 'en'
  dict: any
}

export function TeamGrid({ lang, dict }: TeamGridProps) {
  const translatedMembers = dict?.team?.members ?? []

  return (
    <section className="border-b border-border">
      <ul className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 py-24 md:grid-cols-3 lg:py-32">
        {translatedMembers.map((member: any, index: number) => {
          const originalMember = TEAM.find((t) => t.id === member.id) || TEAM[index]
          const imageSrc = originalMember?.image || '/images/archive-drawers.png'

          return (
            <li key={member.id} className={index === 1 ? 'md:mt-24' : undefined}>
              <article className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-card">
                  <Image
                    src={imageSrc}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <h2 className="font-serif text-4xl">{member.name}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {member.id}
                  </span>
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {member.role}
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{member.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${member.name}'s focus areas`}>
                  {member.focus?.map((item: string) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <blockquote className="mt-6 border-l-2 border-primary pl-4 font-serif text-xl italic leading-snug">
                  {`“${member.quote}”`}
                </blockquote>
              </article>
            </li>
          )
        })}
      </ul>
    </section>
  )
}