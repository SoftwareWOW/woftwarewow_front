import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import AiAssistantsChatDemoPanel from './AiAssistantsChatDemoPanel'

type Benefit = { title: string; description: string }

type AiAssistantsFasterAnswersSectionProps = {
  eyebrow: string
  title: string
  description: string
  benefits: ReadonlyArray<Benefit>
  chatMessages: ReadonlyArray<{ role: 'user' | 'assistant'; content: string }>
}

/** Layout copy: homepage-13 BuiltAroundPeople — centered header, benefits + chat panel. */
export default function AiAssistantsFasterAnswersSection({
  eyebrow,
  title,
  description,
  benefits,
  chatMessages,
}: AiAssistantsFasterAnswersSectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">{title}</h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:items-stretch md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {benefits.map((benefit) => (
              <RevealWrapper key={benefit.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper className="reveal-me md:w-1/2 md:min-h-[420px] md:self-stretch">
            <AiAssistantsChatDemoPanel messages={chatMessages} />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
