import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { EVENTS_PROCESS } from './events-content'

export default function EventsProcessSection() {
  const content = EVENTS_PROCESS

  return (
    <section className="relative mx-auto max-w-[1600px] bg-background px-5 transition-colors duration-300 dark:bg-background">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <HeroGradientAnimation />
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-light leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              {content.titleBefore}
              <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear max-w-xl text-lg leading-[1.6] tracking-[0.36px] text-[#808080]">{content.description}</p>
          </TextAppearAnimation02>

          <RevealWrapper className="reveal-me mt-7 md:mt-14">
            <ButtonComponentList className="flex justify-start">
              <ButtonComponent href={content.ctaHref} variant="white">
                {content.ctaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="mt-10 grid w-full max-w-2xl grid-cols-2 gap-y-[26px] lg:mt-0 lg:max-w-none lg:flex-1">
          {content.steps.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className={`px-[30px] py-[50px]${index % 2 === 0 ? ' border-r border-black/10 dark:border-white/10' : ''}`}
            >
              <h2 className="font-instrument text-5xl font-light italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                {index + 1}
              </h2>
              <h5 className="mb-6 mt-4">{item.title}</h5>
              <p className="text-base text-[#808080]">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
