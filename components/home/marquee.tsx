interface MarqueeProps {
  lang: 'it' | 'en'
  dict: any
}

export function Marquee({ lang, dict }: MarqueeProps) {
  const TERMS: string[] = dict?.marqueeTerms ?? [
    'Historical archives',
    'Handwritten letters',
    'Artists’ diaries',
    'Vintage photographs',
    'Paper catalogs',
    'Inventory registers',
    'Provenance',
    'Sketches',
    'Collections',
    'Exhibition loans',
  ]
  return (
    <div className="overflow-hidden border-b border-border bg-primary py-4 text-primary-foreground">
      <div className="animate-marquee flex w-max gap-10" aria-hidden="true">
        {[...TERMS, ...TERMS].map((term, index) => (
          <span key={index} className="flex items-center gap-10 font-serif text-2xl italic">
            {term}
            <span className="inline-block size-1.5 rotate-45 bg-primary-foreground" />
          </span>
        ))}
      </div>
      <p className="sr-only">{TERMS.join(', ')}</p>
    </div>
  )
}
