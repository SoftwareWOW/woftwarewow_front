import DivisionSiteLayout from '@/components/wow/divisions/DivisionSiteLayout'
import WowMarketingOfferingDetail from '@/components/wow/wowmarketing/WowMarketingOfferingDetail'
import {
  WOW_MARKETING_SERVICE_PAGES,
  WOW_MARKETING_SOLUTION_PAGES,
} from '@/app/[locale]/wowmarketing/_lib/offeringPageRegistry'
import {
  getWowMarketingNavService,
  getWowMarketingNavSolution,
} from '@/data/wowMarketingNavContent'
import type { Locale } from '@/i18n/config'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'

type RouteParams = Promise<{ locale: string; slug?: string }>

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

  if (!slug || !getWowMarketingNavService(slug)) notFound()

  const Page = WOW_MARKETING_SERVICE_PAGES[slug]
  if (Page) {
    return withOptionalDivisionLayout(<Page params={Promise.resolve({ locale })} />, wrapDivisionLayout)
  }

  const service = getWowMarketingNavService(slug)!
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

  if (!slug || !getWowMarketingNavSolution(slug)) notFound()

  const Page = WOW_MARKETING_SOLUTION_PAGES[slug]
  if (Page) {
    return withOptionalDivisionLayout(<Page params={Promise.resolve({ locale })} />, wrapDivisionLayout)
  }

  const solution = getWowMarketingNavSolution(slug)!
  return withOptionalDivisionLayout(<WowMarketingOfferingDetail offering={solution} />, wrapDivisionLayout)
}
