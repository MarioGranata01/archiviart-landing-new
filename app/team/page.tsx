import type { Metadata } from 'next'
import { PageIntro } from '@/components/page-intro'
import { TeamGrid } from '@/components/team/team-grid'
import { AccessCta } from '@/components/home/access-cta'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet Rodolfo, Mario and Rino — the people building ARCHIVIART.',
}

export default function TeamPage() {
  return (
    <>
      <PageIntro
        label="Team"
        title={
          <>
            Three founders, one <em className="text-primary">collection.</em>
          </>
        }
        description="A curator’s instinct, an engineer’s rigor and a designer’s eye — catalogued together under one accession number."
      />
      <TeamGrid />
      <AccessCta />
    </>
  )
}
