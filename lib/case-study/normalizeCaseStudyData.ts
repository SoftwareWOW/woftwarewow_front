import type { CaseStudyAudience, CaseStudyData, CaseStudySuccessMetric, CaseStudyTestimonial } from './types'
import { getCaseStudyImage } from './caseStudyImages'
import { DEFAULT_SUCCESS_METRICS } from './defaultSuccessMetrics'

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback
}

function asStringArray(value: unknown) {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : []
}

function asAudience(value: unknown): CaseStudyAudience[] {
  if (!Array.isArray(value)) return []

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const record = item as Record<string, unknown>
      const label = asString(record.label)
      const description = asString(record.description)
      if (!label || !description) return null
      return { label, description }
    })
    .filter((item): item is CaseStudyAudience => item !== null)
}

function asSuccessMetrics(value: unknown): CaseStudySuccessMetric[] {
  if (!Array.isArray(value) || value.length === 0) return DEFAULT_SUCCESS_METRICS

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') return null
      const record = item as Record<string, unknown>
      const metricValue = asString(record.value)
      const variant: CaseStudySuccessMetric['variant'] =
        record.variant === 'center' ? 'center' : 'side'
      const descriptions = asStringArray(record.descriptions)
      const singleDescription = asString(record.description)

      const resolvedDescriptions =
        descriptions.length > 0
          ? descriptions
          : singleDescription
            ? [singleDescription]
            : []

      if (!metricValue || resolvedDescriptions.length === 0) return null

      const metric: CaseStudySuccessMetric = {
        value: metricValue,
        descriptions: resolvedDescriptions,
        variant,
        italic: record.italic === false ? false : true,
      }
      return metric
    })
    .filter((item): item is CaseStudySuccessMetric => item !== null)
}

function asTestimonial(value: unknown): CaseStudyTestimonial | undefined {
  if (!value || typeof value !== 'object') return undefined
  const record = value as Record<string, unknown>
  const quote = asString(record.quote)
  const author = asString(record.author)
  if (!quote || !author) return undefined
  return { quote, author }
}

export function normalizeCaseStudyData(
  data: Record<string, unknown>,
  slug?: string,
): CaseStudyData {
  const imageMeta = slug ? getCaseStudyImage(slug) : undefined

  return {
    slug,
    title: asString(data.title),
    tagline: asString(data.tagline),
    subtitle: asString(data.subtitle),
    website: asString(data.website) || undefined,
    image: asString(data.image) || imageMeta?.image,
    imageAlt: asString(data.imageAlt) || imageMeta?.alt || asString(data.title),
    companySize: asString(data.companySize),
    date: asString(data.date),
    projectDuration: asString(data.projectDuration),
    services: asStringArray(data.services),
    aboutClient: asStringArray(data.aboutClient),
    challengeParagraphs: asStringArray(data.challengeParagraphs),
    approachIntro: asString(data.approachIntro) || undefined,
    approachCallout: asString(data.approachCallout),
    approachParagraphs: asStringArray(data.approachParagraphs),
    businessGoals: asStringArray(data.businessGoals),
    targetAudience: asAudience(data.targetAudience),
    testimonial: asTestimonial(data.testimonial),
    successMetrics: asSuccessMetrics(data.successMetrics),
  }
}
