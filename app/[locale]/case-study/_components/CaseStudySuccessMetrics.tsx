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

function MetricDescriptions({ lines }: { lines: string[] }) {
  return (
    <div className="space-y-0.5 text-center lg:text-inherit">
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

function RowDivider({ side }: { side: 'left' | 'right' }) {
  return (
    <span
      className={cn(
        'pointer-events-none absolute top-1/2 hidden h-[48%] w-px -translate-y-1/2 bg-black/10 lg:block dark:bg-white/10',
        side === 'left' ? 'left-0' : 'right-0',
      )}
      aria-hidden="true"
    />
  )
}

function SuccessMetricItem({
  metric,
  columnIndex,
  withSideBorders = false,
}: {
  metric: CaseStudySuccessMetric
  columnIndex: number
  withSideBorders?: boolean
}) {
  const isCenter = metric.variant === 'center'

  return (
    <div
      className={cn(
        'relative flex min-h-[120px] items-center justify-center px-4 py-8 text-center sm:min-h-[140px] sm:px-6 lg:py-10',
        columnIndex === 0 && 'lg:justify-start lg:px-0 lg:text-left',
        columnIndex === 1 && 'lg:justify-center lg:px-4 lg:text-center',
        columnIndex === 2 && 'lg:justify-end lg:px-0 lg:text-right',
        isCenter ? 'flex-col gap-2' : 'flex-col gap-2 sm:flex-row sm:gap-4 lg:gap-6',
      )}>
      {withSideBorders ? (
        <>
          <RowDivider side="left" />
          <RowDivider side="right" />
        </>
      ) : null}

      <div className="shrink-0">
        <MetricValue value={metric.value} italic={metric.italic} />
      </div>
      <MetricDescriptions lines={metric.descriptions} />
    </div>
  )
}

function MetricsRow({ metrics }: { metrics: CaseStudySuccessMetric[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <SuccessMetricItem
          key={`${metric.value}-${index}`}
          metric={metric}
          columnIndex={index}
          withSideBorders={index === 1}
        />
      ))}
    </div>
  )
}

const CaseStudySuccessMetrics = ({ metrics }: CaseStudySuccessMetricsProps) => {
  const topRow = metrics.slice(0, 3)
  const bottomRow = metrics.slice(3, 6)

  return (
    <section className={caseStudySectionClass}>
      <div className={caseStudySectionInnerClass}>
        <RevealWrapper>
          <h2
            className={cn(
              'text-center text-[28px] font-normal leading-tight sm:text-[32px] lg:text-left lg:text-[36px]',
              textColorClass,
            )}>
            Success Metrics
          </h2>

          <div className="mt-8 flex flex-col divide-y divide-black/10 lg:mt-10 dark:divide-white/10 lg:divide-y-0">
            <MetricsRow metrics={topRow} />
            <MetricsRow metrics={bottomRow} />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default CaseStudySuccessMetrics
