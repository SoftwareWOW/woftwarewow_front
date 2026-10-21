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
