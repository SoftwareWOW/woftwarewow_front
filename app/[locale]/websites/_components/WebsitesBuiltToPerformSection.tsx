import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WEBSITES_OUTCOMES } from './websites-content'

const DocIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42} height={50} viewBox="0 0 42 50" fill="none" aria-hidden>
    <path
      d="M8.33333 39.5833H33.3333V27.0833H8.33333V39.5833ZM10.4167 29.1667H31.25V37.5H10.4167V29.1667ZM18.75 20.8333H8.33333V18.75H18.75V20.8333ZM18.75 12.5H8.33333V10.4167H18.75V12.5ZM26.4729 0H5.20833C2.3375 0 0 2.3375 0 5.20833V50H41.6667V15.1937L26.4729 0ZM27.0833 3.55625L38.1104 14.5833H27.0833V3.55625ZM2.08333 47.9167V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H25V16.6667H39.5833V47.9167H2.08333Z"
      className="fill-secondary dark:fill-backgroundBody"
    />
  </svg>
)

/** Business outcomes grid — copy and layout per websites design (MORE THAN WEB DESIGN). */
export default function WebsitesBuiltToPerformSection() {
  const content = WEBSITES_OUTCOMES

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">
              {content.title} <InstrumentText>{content.accentTitle}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 border-t border-[#e5e5e5] dark:border-dark md:grid-cols-3">
          {content.items.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className={`group flex min-h-[220px] flex-col border-b border-[#e5e5e5] px-[30px] py-10 transition-colors duration-300 hover:bg-[#eef0f3] dark:border-dark md:border-r md:last:border-r-0 dark:hover:bg-[#eef0f3] ${
                index >= 3 ? 'md:border-b-0' : ''
              }`}
            >
              <span className="mb-6 inline-flex transition-colors duration-300 group-hover:[&_path]:fill-secondary dark:group-hover:[&_path]:fill-secondary">
                <DocIcon />
              </span>
              <h5 className="mb-2.5 text-secondary transition-colors duration-300 group-hover:text-secondary dark:text-backgroundBody dark:group-hover:text-secondary">
                {item.title}
              </h5>
              <p className="text-[#808080] transition-colors duration-300 group-hover:text-secondary/80 dark:text-backgroundBody/70 dark:group-hover:text-secondary/80">
                {item.description}
              </p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-12 flex justify-center md:mt-16">
          <ButtonComponentList>
            <ButtonComponent href={content.ctaHref} variant="secondary">
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
