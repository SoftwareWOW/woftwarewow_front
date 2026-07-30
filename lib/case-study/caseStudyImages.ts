export type CaseStudyImageMeta = {
  image: string
  alt: string
}

export const CASE_STUDY_IMAGES: Record<string, CaseStudyImageMeta> = {
  'ccg-breakthrough': {
    image: '/images/wow/Hero/project/case-study/ccg.png',
    alt: 'CCG Breakthrough case study',
  },
  'davinci-lounge': {
    image: '/images/wow/Hero/project/case-study/davinci.png',
    alt: 'DaVinci Lounge project',
  },
  'inity-inc': {
    image: '/images/wow/Hero/project/case-study/InityInc.png',
    alt: 'Inity Inc case study',
  },
  'yo-doner': {
    image: '/images/wow/Hero/project/case-study/yodoner.png',
    alt: 'Yo Doner project',
  },
  smartek: {
    image: '/images/wow/Hero/project/case-study/smartek.png',
    alt: 'Smartek project',
  },
  creshendo: {
    image: '/images/wow/Hero/project/case-study/creshendo.png',
    alt: 'Creshendo case study',
  },
}

export function getCaseStudyImage(slug: string): CaseStudyImageMeta | undefined {
  return CASE_STUDY_IMAGES[slug]
}
