import { Analytics } from '@vercel/analytics/next'
import { getDictionary } from '@/dictionaries/get-dictionary'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

interface LangLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: 'it' | 'en' }>
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <SiteHeader lang={lang} dict={dict} />
      <main>{children}</main>
      <SiteFooter lang={lang} dict={dict} />
      {process.env.NODE_ENV === 'production' && <Analytics />}
    </ThemeProvider>
  )
}