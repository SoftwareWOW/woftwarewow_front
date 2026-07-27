import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import HeroTypingTitle from './HeroTypingTitle'

interface PropsType {
  badgeTitle?: string
  title: string
  italicTitle?: string
  description?: string
  spacing?: string
  scale?: boolean
}

const PageHero = ({ badgeTitle, title, description, italicTitle, spacing, scale }: PropsType) => {
  return (
    <section className={spacing ?? 'relative overflow-hidden pt-32 md:pt-40 lg:pt-[185px]'}>
      <HeroGradientAnimation scale={scale} />

      <div className="container">
        <RevealWrapper className="flex flex-col items-center text-center">
          {badgeTitle && <SectionLabel className="mb-4">{badgeTitle}</SectionLabel>}
          {title && italicTitle ? (
            <HeroTypingTitle primaryText={title} secondaryText={italicTitle} />
          ) : (
            title && (
              <h1 className="mb-4 mt-3.5">
                {title} {italicTitle && <i className="font-instrument italic">{italicTitle}</i>}
              </h1>
            )
          )}
          {description && <p className="text-appear mx-auto max-w-[470px] md:max-w-[750px]">{description}</p>}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PageHero
