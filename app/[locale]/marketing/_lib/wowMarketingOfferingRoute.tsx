import DivisionSiteLayout from '@/components/wow/divisions/DivisionSiteLayout'
import WowMarketingOfferingDetail from '@/components/wow/wowmarketing/WowMarketingOfferingDetail'
import {
  getWowMarketingNavService,
  getWowMarketingNavSolution,
} from '@/data/wowMarketingNavContent'
import type { Locale } from '@/i18n/config'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

type RouteParams = Promise<{ locale: string; slug: string }>

function withOptionalDivisionLayout(content: ReactNode, wrap: boolean) {
  if (!wrap) return content
  return <DivisionSiteLayout divisionId="wowMarketing">{content}</DivisionSiteLayout>
}

export async function WowMarketingServiceRoute({
  params,
  wrapDivisionLayout = true,
}: {
  params: RouteParams
  wrapDivisionLayout?: boolean
}) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  const service = getWowMarketingNavService(slug)
  if (!service) notFound()

  return withOptionalDivisionLayout(<WowMarketingOfferingDetail offering={service} />, wrapDivisionLayout)
}

export async function WowMarketingSolutionRoute({
  params,
  wrapDivisionLayout = true,
}: {
  params: RouteParams
  wrapDivisionLayout?: boolean
}) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  const solution = getWowMarketingNavSolution(slug)
  if (!solution) notFound()

  return withOptionalDivisionLayout(
    <WowMarketingOfferingDetail offering={solution} />,
    wrapDivisionLayout,
  )
}
