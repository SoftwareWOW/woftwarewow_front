'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WorkflowDiagram, {
  buildSixStepSnakeRowLayouts,
  type WorkflowStep,
} from '@/components/wow/shared/WorkflowDiagram'
import {
  CalendarClock,
  Cpu,
  Database,
  MessageCircleQuestion,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { useMemo } from 'react'
import { INTELLIGENCE_PRACTICAL_AI } from './intelligence-content'

const iconMap: Record<(typeof INTELLIGENCE_PRACTICAL_AI.workflowSteps)[number]['icon'], LucideIcon> = {
  message: MessageCircleQuestion,
  cpu: Cpu,
  database: Database,
  users: Users,
  calendar: CalendarClock,
  trending: TrendingUp,
}

export default function IntelligencePracticalAiHeroSection() {
  const content = INTELLIGENCE_PRACTICAL_AI

  const { workflowSteps, rowLayouts } = useMemo(() => {
    const workflowSteps: WorkflowStep[] = content.workflowSteps.map((step, index) => ({
      icon: iconMap[step.icon],
      label: step.title,
      caption: step.caption,
      tone: index % 2 === 0 ? 'primary' : 'accent',
    }))

    return {
      workflowSteps,
      rowLayouts: buildSixStepSnakeRowLayouts(),
    }
  }, [content.workflowSteps])

  return (
    <section className="relative overflow-x-clip bg-background px-3 pt-12 transition-colors duration-300 dark:bg-background sm:pt-12 md:px-4 lg:pt-[50px] xl:pt-[60px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, currentColor 6%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[35%] h-[min(70vw,480px)] w-[min(85vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl dark:opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(97, 92, 206, 0.45) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="mb-10 text-center md:mb-14 lg:mb-16">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h1 className="text-appear mx-auto max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-[1.12] tracking-[-0.03em]">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h1>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">
              {content.description}
            </p>
          </TextAppearAnimation>
        </div>

        <WorkflowDiagram
          steps={workflowSteps}
          rowLayouts={rowLayouts}
          showFooter={false}
          className="mt-0"
          maxWidthClassName="max-w-5xl"
        />

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href={content.secondaryCtaHref} variant="white">
              {content.secondaryCta}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
