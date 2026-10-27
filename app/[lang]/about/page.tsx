import type { Metadata } from 'next'
import { getDictionary } from '@/dictionaries/get-dictionary'
import { PageIntro } from '@/components/page-intro'
import { Story } from '@/components/about/story'
import { Goals } from '@/components/about/goals'
import { AccessCta } from '@/components/home/access-cta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Who we are and why we are building ARCHIVIART — a secure digital ecosystem that preserves and shares artistic and documentary heritage.',
}

interface PageProps {
  params: Promise<{ lang: 'it' | 'en' }>
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const intro = dict?.aboutIntro ?? {}

  return (
    <>
      <PageIntro
        label={dict.nav?.about ?? 'About'}
        title={
          <>
            {intro.titlePrefix}{' '}
            <em className="text-primary">{intro.titleHighlight}</em>
          </>
        }
        description={intro.description}
      />
      <Story lang={lang} dict={dict} />
      <Goals lang={lang} dict={dict} />
      <AccessCta lang={lang} dict={dict} />
    </>
  )
}