import type { DivisionId } from '@/i18n/division-paths'

/** Display titles for WOW Superagency divisions (matches DevisionOverview / ecosystem nodes). */
export const WOW_DIVISION_MARQUEE_TITLES = [
  'SoftwareWOW',
  'WOW Marketing',
  'WOW Design',
  'WOW Intelligence',
  'WOW Social',
  'WOW Accelerate',
  'WOW Websites',
  'WOW Impact',
  'WOW Host',
  'WOW Hub',
] as const

export type WowDivisionMarqueeTitle = (typeof WOW_DIVISION_MARQUEE_TITLES)[number]

export const wowDivisionIdByMarqueeTitle: Record<WowDivisionMarqueeTitle, DivisionId> = {
  SoftwareWOW: 'softwareWow',
  'WOW Marketing': 'wowMarketing',
  'WOW Design': 'wowDesign',
  'WOW Intelligence': 'wowIntelligence',
  'WOW Social': 'wowSocial',
  'WOW Accelerate': 'wowAccelerate',
  'WOW Websites': 'wowWebsites',
  'WOW Impact': 'wowImpact',
  'WOW Host': 'wowHost',
  'WOW Hub': 'wowHub',
}

export const WOW_DIVISION_MARQUEE_IDS = WOW_DIVISION_MARQUEE_TITLES.map(
  (title) => wowDivisionIdByMarqueeTitle[title],
)

export function divisionIdFromMarqueeTitle(title: string): DivisionId | null {
  return (wowDivisionIdByMarqueeTitle as Record<string, DivisionId>)[title] ?? null
}
