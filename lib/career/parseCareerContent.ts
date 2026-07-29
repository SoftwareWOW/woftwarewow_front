import type { CareerPostData, ParsedCareerContent } from './types'

function stripMarkdown(text: string) {
  return text.replace(/\*\*/g, '').trim()
}

function extractBulletItems(text: string): string[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('- '))
    .map((line) => stripMarkdown(line.replace(/^-\s+/, '')))
}

function extractIntroParagraph(text: string): string {
  const introLines: string[] = []

  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (trimmed.startsWith('- ') || trimmed.startsWith('####')) break
    introLines.push(stripMarkdown(trimmed))
  }

  return introLines.join(' ')
}

export function parseCareerSections(content: string): ParsedCareerContent {
  const result: ParsedCareerContent = {
    aboutTheRole: { intro: '', items: [] },
    responsibilities: { intro: '', items: [] },
    requirements: { required: [], niceToHave: [] },
    benefits: { intro: '', items: [] },
  }

  const sections = content.split(/^### /m).filter(Boolean)

  for (const section of sections) {
    const [titleLine, ...rest] = section.split('\n')
    const title = titleLine.trim().toLowerCase()
    const body = rest.join('\n')

    if (title.includes('job description')) {
      result.aboutTheRole.intro = extractIntroParagraph(body)
    } else if (title.includes('responsibilities')) {
      result.responsibilities.intro = extractIntroParagraph(body)
      result.responsibilities.items = extractBulletItems(body)
    } else if (title.includes('requirements')) {
      if (/####\s*(required qualifications|nice to have)/i.test(body)) {
        const [requiredPart, nicePart = ''] = body.split(/####\s*nice to have/i)
        result.requirements.required = extractBulletItems(
          requiredPart.replace(/####\s*required qualifications\s*/i, ''),
        )
        result.requirements.niceToHave = extractBulletItems(nicePart)
      } else {
        result.requirements.required = extractBulletItems(body)
      }
    } else if (title.includes('benefits')) {
      result.benefits.intro = extractIntroParagraph(body)
      result.benefits.items = extractBulletItems(body)
    }
  }

  return result
}

export function getCareerMeta(career: CareerPostData) {
  const tags = career.tags ?? []

  return {
    department: career.department ?? tags[0] ?? 'General',
    employment:
      career.employment ?? tags.find((tag) => /full-time|part-time|contract/i.test(tag)) ?? 'Full-Time',
    location:
      career.location ??
      tags.find((tag) => /remote|mississauga|california|york|florida|\//i.test(tag)) ??
      'Remote',
    experience:
      career.experience ?? tags.find((tag) => /years?/i.test(tag)) ?? 'Open to all levels',
    salary: career.salary ?? 'Competitive',
    posted: career.posted ?? 'Recently',
    division: career.division ?? 'WOW Superagency',
    divisionDescription:
      career.divisionDescription ??
      'A connected ecosystem of technology, design, marketing, AI, and growth — helping small businesses build the right digital solutions.',
    industry: career.industry ?? 'Creative & Digital Agency',
    companySize: career.companySize ?? '20+ Team Members',
    companyLocation: career.companyLocation ?? 'Mississauga, Ontario (Remote Friendly)',
    phone: career.phone ?? '(+1) 301 305 6187',
    website: career.website ?? 'www.softwarewow.ca',
  }
}
