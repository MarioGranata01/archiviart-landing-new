import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { Story } from '@/components/about/story'
import { Goals } from '@/components/about/goals'
import { AccessCta } from '@/components/home/access-cta'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Who we are and why we are building ARCHIVIART — a secure digital ecosystem that preserves and shares artistic and documentary heritage.',
}

export default function AboutPage() {
  return (
    <>
      <PageIntro
        label="About"
        title={
          <>
            A bridge between art&apos;s past and its <em className="text-primary">digital future.</em>
          </>
        }
        description="ARCHIVIART exists to breathe new life into culture while ensuring its preservation — so no letter, sketch or catalog is ever lost to time."
      />
      <Story />
      <Goals />
      <AccessCta />
    </>
  )
}
