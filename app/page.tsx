import { Hero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { Features } from '@/components/home/features'
import { Audience } from '@/components/home/audience'
import { RecordPreview } from '@/components/home/record-preview'
import { AccessCta } from '@/components/home/access-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <Audience />
      <RecordPreview />
      <AccessCta />
    </>
  )
}
