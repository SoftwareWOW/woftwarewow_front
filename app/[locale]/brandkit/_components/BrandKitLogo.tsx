import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { divisionBrandLogos, type DivisionId } from '@/components/wow/nav/nav-brand-assets'
import Link from 'next/link'
import type { ReactNode } from 'react'

const navBase = '/images/wow/nav'

function assetPath(...segments: string[]) {
  return `${navBase}/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`
}

const exclamationMarks = {
  white: '/images/wow/Exclamation%20Mark%20White_1%202.png',
  black: '/images/wow/Exclamation%20Mark%20Black_1%202.png',
  gradient: '/images/wow/Exclamation%20Mark%20Gradient_1%202.png',
} as const

type LogoCard = {
  id: string
  title: string
  description: string
  previewBg: string
  svgHref: string
  pngHref: string
  showDivisionLink: boolean
  preview: ReactNode
}

const logoCards: LogoCard[] = [
  {
    id: 'primary',
    title: 'Primary Logo',
    description: 'Standard WOW Superagency logo for light backgrounds.',
    previewBg: 'bg-white dark:bg-[#EDEAF8]',
    svgHref: assetPath('SVG', 'Superagency Standard.svg'),
    pngHref: assetPath('PNG', 'Superagency Standard.png'),
    showDivisionLink: true,
    preview: (
      <img
        src={assetPath('PNG', 'Superagency Standard.png')}
        alt="WOW Superagency primary logo"
        className="max-h-16 w-auto max-w-full object-contain"
      />
    ),
  },
  {
    id: 'light',
    title: 'Light Logo',
    description: 'For dark backgrounds.',
    previewBg: 'bg-[#1A1A1A]',
    svgHref: assetPath('SVG', 'Superagency White.svg'),
    pngHref: assetPath('PNG', 'Superagency White.png'),
    showDivisionLink: false,
    preview: (
      <img
        src={assetPath('PNG', 'Superagency White.png')}
        alt="WOW Superagency light logo"
        className="max-h-16 w-auto max-w-full object-contain"
      />
    ),
  },
  {
    id: 'icon',
    title: 'Icon / Symbol',
    description: 'Compact brand mark for small spaces, avatars, and applications.',
    previewBg: 'bg-[#1A1A1A]',
    svgHref: exclamationMarks.gradient,
    pngHref: exclamationMarks.white,
    showDivisionLink: false,
    preview: (
      <div className="flex items-center justify-center gap-3" aria-hidden>
        <img src={exclamationMarks.white} alt="" className="h-16 w-auto object-contain sm:h-20" />
        <img
          src={exclamationMarks.black}
          alt=""
          className="h-16 w-auto object-contain opacity-45 sm:h-20"
        />
        <img src={exclamationMarks.gradient} alt="" className="h-16 w-auto object-contain sm:h-20" />
      </div>
    ),
  },
  {
    id: 'mono',
    title: 'Monochrome Logo',
    description: 'For situations where full color is not suitable.',
    previewBg: 'bg-[#1A1A1A]',
    svgHref: assetPath('SVG', 'Superagency Mono.svg'),
    pngHref: assetPath('PNG', 'Superagency MonoWhite.png'),
    showDivisionLink: false,
    preview: (
      <img
        src={assetPath('PNG', 'Superagency MonoWhite.png')}
        alt="WOW Superagency monochrome logo"
        className="max-h-16 w-auto max-w-full object-contain"
      />
    ),
  },
]


const downloadButtonClass =
  'inline-flex items-center justify-center rounded-radius-sm border border-black/15 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.06em] text-secondary transition-colors hover:border-primary hover:text-primary dark:border-white/20 dark:text-backgroundBody dark:hover:border-primary dark:hover:text-primary'

const BrandKitLogos = () => (
  <section id="logos" className="scroll-mt-28">
    <div className="container">
      <div className="mb-10 text-center md:mb-14">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>Logos</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mx-auto max-w-[770px]">Use the Right WOW Mark.</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
            Build knowledge on your own time or join us for practical, interactive experiences.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {logoCards.map((card) => (
          <RevealWrapper key={card.id}>
            <article className="flex h-full flex-col rounded-radius-md border border-black/10 bg-backgroundBody p-6 dark:border-white/10 dark:bg-dark">
              <div
                className={`mb-6 flex min-h-[180px] items-center justify-center rounded-radius-sm px-8 py-10 ${card.previewBg}`}
              >
                {card.preview}
              </div>
              <h3 className="text-xl font-medium tracking-normal text-secondary dark:text-backgroundBody md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[#808080]">{card.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={card.svgHref} download className={downloadButtonClass}>
                  Download SVG
                </a>
                <a href={card.pngHref} download className={downloadButtonClass}>
                  Download PNG
                </a>
              </div>
              {card.showDivisionLink && (
                <p className="mt-5 text-sm text-[#808080]">
                  Looking for division logos?{' '}
                  <Link href="#division-assets" className="font-medium text-primary hover:underline">
                    View Division Assets →
                  </Link>
                </p>
              )}
            </article>
          </RevealWrapper>
        ))}
      </div>
    </div>
  </section>
)

export default BrandKitLogos
