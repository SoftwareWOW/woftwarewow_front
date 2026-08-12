import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const qualities = [
  {
    title: 'Distinctive',
    headline: 'Easy to recognize.',
    description: "A visual and verbal identity that doesn't disappear into the category.",
  },
  {
    title: 'Relevant',
    headline: 'Right for your audience.',
    description: "Creative decisions grounded in who you're trying to reach.",
  },
  {
    title: 'Consistent',
    headline: 'Recognizable everywhere.',
    description: 'A system that works across channels, teams and formats.',
  },
  {
    title: 'Usable',
    headline: 'Built for the real world.',
    description: 'Guidelines and assets your team can actually apply day to day.',
  },
]

/** Layout: Home-15 BrandingProcess / SalesVisibility — split heading + 2×2 grid. */
const BrandVisibility = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-16">
        <div className="w-full lg:max-w-[45%]">
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>Brand Visibility</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-normal leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              More than a <InstrumentText>good-looking</InstrumentText> logo.
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear mt-3 text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">
              We shape brands that stand the test of time
            </p>
          </TextAppearAnimation02>

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href="/contact" variant="white">
                Start Now
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:max-w-[55%]">
          {qualities.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className={`reveal-me px-[30px] py-[50px] dark:border-dark ${
                index % 2 === 0 ? 'sm:border-r' : ''
              } ${index < 2 ? 'border-b dark:border-b-dark' : ''}`}
            >
              <h2 className="font-instrument text-4xl font-normal italic leading-tight tracking-[-1px] uppercase sm:text-5xl md:text-[55px] lg:text-[64px] xl:leading-[1.15]">
                {item.title}
              </h2>
              <h5 className="mb-4 mt-4">{item.headline}</h5>
              <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandVisibility
