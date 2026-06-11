import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import { Link } from '@/i18n/navigation'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getLocale } from 'next-intl/server'

export default async function NotFound() {
  const locale = (await getLocale()) as Locale
  const dictionary = await getDictionary(locale)

  return (
    <main className="relative z-10 mb-0 bg-backgroundBody dark:bg-dark">
      <section className="relative h-screen overflow-hidden pt-36 md:pt-12 lg:pt-0 2xl:pt-12">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="flex flex-col items-center justify-center">
            <h1 className="font-instrument text-[180px] md:text-[490px] md:leading-[1.05]">404</h1>
            <h2 className="mb-8 mt-8 text-[36px] font-normal leading-[1.1] max-lg:leading-[1.33] md:mb-[50px] lg:text-[87px] lg:tracking-[-2.83px]">
              {dictionary.notFound.title}
            </h2>
            <Link href="/" className="rv-button rv-button-primary">
              <div className="rv-button-top text-center">
                <span>{dictionary.notFound.backHome}</span>
              </div>
              <div className="rv-button-bottom text-center">
                <span className="text-nowrap">{dictionary.notFound.backHome}</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </main>
  )
}
