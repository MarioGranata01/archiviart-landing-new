import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { TeamGrid } from '@/components/team/team-grid'
import { AccessCta } from '@/components/home/access-cta'
import { getDictionary } from '@/dictionaries/get-dictionary'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet Rodolfo, Mario and Rino — the people building ARCHIVIART.',
}

interface PageProps {
  params: Promise<{ lang: 'it' | 'en' }>
}

export default async function TeamPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const intro = dict?.teamIntro ?? {}

  return (
    <>
      <PageIntro
        label={dict.nav?.team ?? 'Team'}
        title={
          <>
            {intro.titlePrefix}{' '}
            <em className="text-primary">{intro.titleHighlight}</em>
          </>
        }
        description={intro.description}
      />
      <TeamGrid lang={lang} dict={dict} />
      <AccessCta lang={lang} dict={dict} />
    </>
  )
}