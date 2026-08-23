import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { divisionBrandLogos, type DivisionId } from '@/components/wow/nav/nav-brand-assets'
import Link from 'next/link'

const navBase = '/images/wow/nav'

function assetPath(...segments: string[]) {
  return `${navBase}/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`
}

const logoCards = [
  {
    id: 'primary',
    title: 'Primary Logo',
    description: 'Standard WOW Superagency logo for light backgrounds.',
    previewBg: 'bg-white',
    previewSrc: assetPath('SVG', 'Superagency Standard.svg'),
    previewAlt: 'WOW Superagency primary logo',
    previewClassName: 'max-h-16 w-auto max-w-full object-contain',
    svgHref: assetPath('SVG', 'Superagency Standard.svg'),
    pngHref: assetPath('PNG', 'Superagency Standard.png'),
    showDivisionLink: true,
  },
  {
    id: 'light',
    title: 'Light Logo',
    description: 'For dark backgrounds.',
    previewBg: 'bg-[#1A1A1A]',
    previewSrc: assetPath('SVG', 'Superagency White.svg'),
    previewAlt: 'WOW Superagency light logo',
    previewClassName: 'max-h-16 w-auto max-w-full object-contain',
    svgHref: assetPath('SVG', 'Superagency White.svg'),
    pngHref: assetPath('PNG', 'Superagency White.png'),
    showDivisionLink: false,
  },
  {
    id: 'icon',
    title: 'Icon / Symbol',
    description: 'Compact brand mark for small spaces, avatars, and applications.',
    previewBg: 'bg-[#1A1A1A]',
    previewSrc: assetPath('Profile Picture', 'Dark', 'Superagency PFP dark.png'),
    previewAlt: 'WOW Superagency icon symbol',
    previewClassName: 'h-24 w-24 object-contain',
    svgHref: assetPath('Profile Picture', 'Dark', 'Superagency PFP dark.png'),
    pngHref: assetPath('Profile Picture', 'Light', 'Superagency PFP Light.png'),
    showDivisionLink: false,
  },
  {
    id: 'mono',
    title: 'Monochrome Logo',
    description: 'For situations where full color is not suitable.',
    previewBg: 'bg-[#1A1A1A]',
    previewSrc: assetPath('SVG', 'Superagency Mono.svg'),
    previewAlt: 'WOW Superagency monochrome logo',
    previewClassName: 'max-h-16 w-auto max-w-full object-contain',
    svgHref: assetPath('SVG', 'Superagency Mono.svg'),
    pngHref: assetPath('PNG', 'Superagency MonoWhite.png'),
    showDivisionLink: false,
  },
] as const


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
                <img
                  src={card.previewSrc}
                  alt={card.previewAlt}
                  className={card.previewClassName}
                />
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
