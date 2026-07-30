import RevealWrapper from '@/components/animation/RevealWrapper'
import type { CaseStudySuccessMetric } from '@/lib/case-study/types'
import { cn } from '@/utils/cn'
import { caseStudySectionClass, caseStudySectionInnerClass } from './caseStudySectionSpacing'

type CaseStudySuccessMetricsProps = {
  metrics: CaseStudySuccessMetric[]
}

const textColorClass = '!text-secondary dark:!text-backgroundBody'

const metricValueSizeClass =
  'font-seasons text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] !bg-none bg-clip-border lg:text-[56px]'

function MetricDescriptions({ lines, centered }: { lines: string[]; centered?: boolean }) {
  return (
    <div className={centered ? 'mt-2 space-y-0.5 text-center' : 'space-y-0.5'}>
      {lines.map((line) => (
        <p key={line} className={cn('text-sm leading-snug sm:text-base', textColorClass)}>
          {line}
        </p>
      ))}
    </div>
  )
}

function MetricValue({ value, italic = true }: { value: string; italic?: boolean }) {
  return (
    <p className={cn(metricValueSizeClass, textColorClass, italic && 'italic')}>{value}</p>
  )
}
function SideMetricItem({ metric }: { metric: CaseStudySuccessMetric }) {
  return (
    <div className="flex min-h-[120px] items-center gap-4 px-4 py-8 sm:min-h-[140px] sm:gap-6 sm:px-6 lg:py-10">
      <div className="shrink-0">
        <MetricValue value={metric.value} italic={metric.italic} />
      </div>
      <MetricDescriptions lines={metric.descriptions} />
    </div>
  )
}

function CenterMetricItem({ metric }: { metric: CaseStudySuccessMetric }) {
  return (
    <div className="flex min-h-[120px] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[140px] sm:px-6 lg:py-10">
      <MetricValue value={metric.value} italic={metric.italic} />
      <MetricDescriptions lines={metric.descriptions} centered />
    </div>
  )
}

function MetricColumn({
  metrics,
  bordered = false,
}: {
  metrics: CaseStudySuccessMetric[]
  bordered?: boolean
}) {
  return (
    <div
      className={cn(
        'flex flex-col',
        bordered && 'border-black/10 lg:border-x dark:border-white/10',
      )}>
      {metrics.map((metric, index) => (
        <div key={`${metric.value}-${index}`}>
          {metric.variant === 'center' ? (
            <CenterMetricItem metric={metric} />
          ) : (
            <SideMetricItem metric={metric} />
          )}
        </div>
      ))}
    </div>
  )
}

const CaseStudySuccessMetrics = ({ metrics }: CaseStudySuccessMetricsProps) => {
  const leftColumn = [metrics[0], metrics[3]].filter(Boolean)
  const centerColumn = [metrics[1], metrics[4]].filter(Boolean)
  const rightColumn = [metrics[2], metrics[5]].filter(Boolean)

  return (
    <section className={caseStudySectionClass}>
      <div className={caseStudySectionInnerClass}>
        <RevealWrapper>
          <h2 className={cn('text-[28px] font-normal leading-tight sm:text-[32px] lg:text-[36px]', textColorClass)}>
            Success Metrics
          </h2>

          <div className="mt-8 flex flex-col divide-y divide-black/10 lg:mt-10 lg:grid lg:grid-cols-3 lg:divide-y-0 dark:divide-white/10">
            <MetricColumn metrics={leftColumn} />
            <MetricColumn metrics={centerColumn} bordered />
            <MetricColumn metrics={rightColumn} />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default CaseStudySuccessMetrics
