import type { CaseStudySuccessMetric } from '@/lib/case-study/types'

export const DEFAULT_SUCCESS_METRICS: CaseStudySuccessMetric[] = [
  { value: '100%', descriptions: ['Custom Design'], variant: 'side', italic: true },
  { value: 'Responsive', descriptions: ['Across All Devices'], variant: 'center', italic: true },
  { value: '90+', descriptions: ['Performance Score', 'SEO'], variant: 'side', italic: false },
  { value: 'SEO', descriptions: ['Ready Foundation'], variant: 'side', italic: true },
  { value: 'WCAG', descriptions: ['Accessibility Improvements'], variant: 'center', italic: false },
  { value: 'Fast', descriptions: ['Optimized Loading'], variant: 'side', italic: true },
]
