import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
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
    <section className={`${spacing ?? 'relative overflow-hidden py-32 md:py-40 lg:py-[185px]'} `}>
      <HeroGradientAnimation scale={scale} />

      <div className="container">
        <RevealWrapper className="text-center">
          {badgeTitle && (
            <div className="rv-badge">
              <span className="rv-badge-text">{badgeTitle}</span>
            </div>
          )}
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
