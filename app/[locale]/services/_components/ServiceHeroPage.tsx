import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

interface PropsType {
  badgeTitle?: string
  title: string
  italicTitle?: string
  description?: string
  spacing?: string
  scale?: boolean
}

const ServiceHero = ({ badgeTitle, title, description, italicTitle, spacing, scale }: PropsType) => {
  return (
    <section
      className={
        spacing ??
        'relative overflow-hidden px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]'
      }
    >
      <HeroGradientAnimation scale={scale} />

      <div className="container">
        <RevealWrapper className="text-center">
          {badgeTitle && (
            <div className="mb-3.5 flex justify-center">
              <SectionLabel>{badgeTitle}</SectionLabel>
            </div>
          )}
          {title && (
            <h1 className="mb-4">
              {title} <i className="font-instrument italic">{italicTitle}</i>
            </h1>
          )}
          {description && <p className="text-appear mx-auto max-w-[470px] md:max-w-[750px]">{description}</p>}
        </RevealWrapper>
       <div className="flex justify-center mt-2 sm:mt-3 md:mt-3 lg:mt-10">
            <ButtonComponent href="/contact" variant="primary">
                      Get a free Consultation
                    </ButtonComponent>
       </div>
      </div>
    </section>
  )
}

export default ServiceHero
