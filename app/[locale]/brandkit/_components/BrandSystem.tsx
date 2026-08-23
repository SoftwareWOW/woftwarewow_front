import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const primaryColors = [
  { name: 'WOW Purple', hex: '#615CCE', swatch: 'bg-[#615CCE]' },
  { name: 'Rich Pink', hex: '#FF9191', swatch: 'bg-[#FF9191]' },
]

const gradientColors = [
  {
    name: 'WOW Gradient',
    hex: '#615CCE - #FF9191',
    swatch: 'bg-gradient-to-r from-[#615CCE] to-[#FF9191]',
  },
  {
    name: 'Shining Purple',
    hex: '#615CCE 75%-100%',
    swatch: 'bg-[#615CCE]',
  },
]

const BrandSystem = () => (
  <section>
    <div className="container">
      <div className="mb-10 text-center md:mb-14">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>Brand System</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mx-auto max-w-[900px]">Consistency Makes the Brand Stronger.</h2>
        </TextAppearAnimation>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RevealWrapper>
          <article className="h-full rounded-radius-md border border-black/10 bg-backgroundBody p-6 dark:border-white/10 dark:bg-dark md:p-8">
            <h3 className="text-2xl font-medium tracking-normal text-secondary dark:text-backgroundBody md:text-3xl">
              Primary Colors
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#808080]">
              These are the core brand colors across WOW Superagency and endorsed brands.
            </p>
            <ul className="mt-8 space-y-5">
              {primaryColors.map((color) => (
                <li key={color.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium tracking-normal text-secondary dark:text-backgroundBody">{color.name}</p>
                    <p className="mt-1 text-sm text-[#808080]">{color.hex}</p>
                  </div>
                  <span className={`h-12 w-24 shrink-0 rounded-radius-sm ${color.swatch}`} aria-hidden />
                </li>
              ))}
            </ul>
          </article>
        </RevealWrapper>

        <RevealWrapper>
          <article className="h-full rounded-radius-md border border-black/10 bg-backgroundBody p-6 dark:border-white/10 dark:bg-dark md:p-8">
            <h3 className="text-2xl font-medium tracking-normal text-secondary dark:text-backgroundBody md:text-3xl">
              Gradient palette
            </h3>
            <p className="mt-3 text-base leading-relaxed text-[#808080]">
              These are the core brand colors across WOW Superagency and endorsed brands.
            </p>
            <ul className="mt-8 space-y-5">
              {gradientColors.map((color) => (
                <li key={color.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium tracking-normal text-secondary dark:text-backgroundBody">{color.name}</p>
                    <p className="mt-1 text-sm text-[#808080]">{color.hex}</p>
                  </div>
                  <span className={`h-12 w-24 shrink-0 rounded-radius-sm ${color.swatch}`} aria-hidden />
                </li>
              ))}
            </ul>
          </article>
        </RevealWrapper>
      </div>

      <div className="mt-16 md:mt-24">
        <TextAppearAnimation>
          <h2 className="text-appear mb-10 text-center md:mb-14">Typography</h2>
        </TextAppearAnimation>

        <div className="space-y-0 divide-y divide-black/10 dark:divide-white/10">
          <RevealWrapper className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[140px_1fr_1.2fr] md:gap-10 md:py-10">
            <p className="font-instrument italic text-[#808080]">Primary</p>
            <p className="font-outfit text-4xl font-normal tracking-normal text-secondary dark:text-backgroundBody md:text-5xl lg:text-6xl">
              Outfit
            </p>
            <p className="font-outfit text-base leading-relaxed text-[#808080] md:text-lg">
              the quick brown fox jumps over the lazy dog 1234567890
            </p>
          </RevealWrapper>

          <RevealWrapper className="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-[140px_1fr_1.2fr] md:gap-10 md:py-10">
            <p className="font-instrument italic text-[#808080]">Secondary</p>
            <p className="font-instrument text-4xl font-normal italic tracking-normal text-secondary dark:text-backgroundBody md:text-5xl lg:text-6xl">
              Instrument Serif
            </p>
            <p className="font-instrument text-base italic leading-relaxed text-[#808080] md:text-lg">
              the quick brown fox jumps over the lazy dog 1234567890
            </p>
          </RevealWrapper>
        </div>
      </div>
    </div>
  </section>
)

export default BrandSystem
