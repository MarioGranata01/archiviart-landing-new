import { getDictionary } from '@/dictionaries/get-dictionary'
import { Hero } from '@/components/home/hero'
import { Marquee } from '@/components/home/marquee'
import { Features } from '@/components/home/features'
import { Audience } from '@/components/home/audience'
import { RecordPreview } from '@/components/home/record-preview'
import { AccessCta } from '@/components/home/access-cta'

interface PageProps {
  params: Promise<{ lang: 'it' | 'en' }>
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <Marquee lang={lang} dict={dict} />
      <Features lang={lang} dict={dict} />
      <Audience lang={lang} dict={dict} />
      <RecordPreview lang={lang} dict={dict} />
      <AccessCta lang={lang} dict={dict} />
    </>
  )
}
